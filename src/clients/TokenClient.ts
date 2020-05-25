import { ContractFactory, ContractTransaction, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

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

export interface ExtendedToken extends Token {
  clientType: ClientType.TokenClient;

  getTokenInfo(): Promise<TokenInfo>;
  deployTokenAuthority(
    colonyAddress: string,
    tokenAddress: string,
    allowedToTransfer: boolean,
  ): Promise<ContractTransaction>;
}

const getTokenClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedToken => {
  const tokenClient = TokenFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedToken;

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
    colonyAddress: string,
    tokenAddress: string,
    allowedToTransfer: boolean,
  ): Promise<ContractTransaction> => {
    const tokenAuthorityFactory = new ContractFactory(
      tokenAuthorityAbi,
      tokenAuthorityBytecode,
    );
    const tokenAuthorityContract = await tokenAuthorityFactory.deploy(
      colonyAddress,
      tokenAddress,
      allowedToTransfer,
    );
    await tokenAuthorityContract.deployed();
    return tokenAuthorityContract.deployTransaction;
  };

  return tokenClient;
};

export default getTokenClient;
