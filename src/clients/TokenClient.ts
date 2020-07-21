import { ContractFactory, ContractTransaction, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { BigNumber } from 'ethers/utils';

import {
  abi as tokenAuthorityAbi,
  bytecode as tokenAuthorityBytecode,
} from '../contracts/deploy/TokenAuthority.json';
import { ClientType } from '../constants';
import { TokenFactory } from '../contracts/4/TokenFactory';
import { Token } from '../contracts/4/Token';

export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
}

type TokenEstimate = Token['estimate'];

interface ExtendedEstimate extends TokenEstimate {
  deployTokenAuthority(
    tokenAddress: string,
    colonyAddress: string,
    allowedToTransfer: string[],
  ): Promise<BigNumber>;
}

/** The TokenClient is a good client that does awesome things */
export interface TokenClient extends Token {
  clientType: ClientType.TokenClient;
  estimate: ExtendedEstimate;

  getTokenInfo(): Promise<TokenInfo>;
  deployTokenAuthority(
    tokenAddress: string,
    colonyAddress: string,
    allowedToTransfer: string[],
  ): Promise<ContractTransaction>;
}

const getTokenClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): TokenClient => {
  const tokenClient = TokenFactory.connect(
    address,
    signerOrProvider,
  ) as TokenClient;

  tokenClient.clientType = ClientType.TokenClient;

  tokenClient.getTokenInfo = async (): Promise<TokenInfo> => {
    const name = await tokenClient.name();
    const symbol = await tokenClient.symbol();
    const decimals = await tokenClient.decimals();
    return {
      name,
      symbol,
      decimals,
    };
  };

  tokenClient.deployTokenAuthority = async (
    tokenAddress: string,
    colonyAddress: string,
    allowedToTransfer: string[],
  ): Promise<ContractTransaction> => {
    const tokenAuthorityFactory = new ContractFactory(
      tokenAuthorityAbi,
      tokenAuthorityBytecode,
      tokenClient.signer,
    );
    const tokenAuthorityContract = await tokenAuthorityFactory.deploy(
      tokenAddress,
      colonyAddress,
      allowedToTransfer,
    );
    await tokenAuthorityContract.deployed();
    return tokenAuthorityContract.deployTransaction;
  };

  tokenClient.estimate.deployTokenAuthority = async (
    tokenAddress: string,
    colonyAddress: string,
    allowedToTransfer: string[],
  ): Promise<BigNumber> => {
    const tokenAuthorityFactory = new ContractFactory(
      tokenAuthorityAbi,
      tokenAuthorityBytecode,
    );
    const deployTx = tokenAuthorityFactory.getDeployTransaction(
      tokenAddress,
      colonyAddress,
      allowedToTransfer,
    );
    return tokenClient.provider.estimateGas(deployTx);
  };

  return tokenClient;
};

export default getTokenClient;
