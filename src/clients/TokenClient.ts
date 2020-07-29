import { ContractFactory, ContractTransaction, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import {
  BigNumber,
  getAddress,
  isHexString,
  parseBytes32String,
} from 'ethers/utils';

import {
  abi as tokenAuthorityAbi,
  bytecode as tokenAuthorityBytecode,
} from '../contracts/deploy/TokenAuthority.json';
import { ClientType, TokenClientType, tokenAddresses } from '../constants';
import { TokenFactory } from '../contracts/4/TokenFactory';
import { Token } from '../contracts/4/Token';
import { TokenErc20Factory } from '../contracts/4/TokenErc20Factory';
import { TokenErc20 } from '../contracts/4/TokenErc20';
import { TokenSaiFactory } from '../contracts/4/TokenSaiFactory';
import { TokenSai } from '../contracts/4/TokenSai';

const isSai = (address: string): boolean =>
  getAddress(address) === tokenAddresses.SAI;

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
export interface ColonyTokenClient extends Token {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Colony;
  estimate: ExtendedEstimate;

  getTokenInfo(): Promise<TokenInfo>;
  deployTokenAuthority(
    tokenAddress: string,
    colonyAddress: string,
    allowedToTransfer: string[],
  ): Promise<ContractTransaction>;
}

export interface Erc20TokenClient extends TokenErc20 {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Erc20;

  getTokenInfo(): Promise<TokenInfo>;
}

export interface DaiTokenClient extends TokenSai {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Dai;

  getTokenInfo(): Promise<TokenInfo>;
}

export type TokenClient = ColonyTokenClient | Erc20TokenClient | DaiTokenClient;

const getTokenClient = async (
  address: string,
  signerOrProvider: Signer | Provider,
  tokenColonyAddress?: string,
): Promise<TokenClient> => {
  let tokenClient: TokenClient;
  let isColonyToken = false;

  if (tokenColonyAddress) {
    tokenClient = TokenFactory.connect(
      address,
      signerOrProvider,
    ) as ColonyTokenClient;

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore https://github.com/ethereum-ts/TypeChain/pull/255
      await tokenClient.estimate.mint(tokenColonyAddress, 1, {
        from: tokenColonyAddress,
      });
      isColonyToken = true;
    } catch {
      isColonyToken = false;
    }
  }

  if (isColonyToken) {
    tokenClient = TokenFactory.connect(
      address,
      signerOrProvider,
    ) as ColonyTokenClient;

    tokenClient.tokenClientType = TokenClientType.Colony;

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
  } else if (isSai(address)) {
    tokenClient = TokenSaiFactory.connect(
      address,
      signerOrProvider,
    ) as DaiTokenClient;

    tokenClient.tokenClientType = TokenClientType.Dai;
  } else {
    tokenClient = TokenErc20Factory.connect(
      address,
      signerOrProvider,
    ) as Erc20TokenClient;

    tokenClient.tokenClientType = TokenClientType.Erc20;
  }

  tokenClient.clientType = ClientType.TokenClient;

  tokenClient.getTokenInfo = async (): Promise<TokenInfo> => {
    let name = await tokenClient.name();
    // Special case for contracts with bytes32 strings (I'm looking at you, DAI)
    if (isHexString(name)) {
      name = parseBytes32String(name);
    }
    let symbol = await tokenClient.symbol();
    if (isHexString(symbol)) {
      symbol = parseBytes32String(symbol);
    }
    const decimals = await tokenClient.decimals();
    return {
      name,
      symbol,
      decimals,
    };
  };

  return tokenClient;
};

export default getTokenClient;
