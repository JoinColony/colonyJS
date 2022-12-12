import { constants, utils, BigNumber, ContractTransaction } from 'ethers';
import {
  TxOverrides,
  ClientType,
  SignerOrProvider,
  TokenClientType,
} from '../types';

import {
  MetaTxToken__factory as MetaTxTokenFactory,
  MetaTxToken,
  Token__factory as TokenFactory,
  Token,
  TokenERC20__factory as TokenERC20Factory,
  TokenERC20,
  TokenERC2612__factory as TokenERC2612Factory,
  TokenERC2612,
  TokenSAI__factory as TokenSAIFactory,
  TokenSAI,
} from '../tokens';
import { TokenAuthority__factory as TokenAuthorityFactory } from '../contracts';

const { getAddress, isHexString, parseBytes32String } = utils;
const { AddressZero } = constants;

// Token addresses to identify tokens that need special treatment
const tokenAddresses = {
  SAI: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
};

const isSai = (address: string): boolean =>
  getAddress(address) === tokenAddresses.SAI;

/** Standard information about an ERC20 token */
export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
}

/** A ColonyToken has special abilities that go beyond the capabilities of an ERC20 token */
export interface ColonyTokenClient extends MetaTxToken {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Colony;

  /**
   * Deploy a TokenAuthority contract for this Colony for a specific token
   * The TokenAuthority enables certain addresses to transfer the tokens, even if it's locked
   * It also enables the assigned Colony to mint tokens
   *
   * @remarks
   * Only works with tokens that allow for an authority to be set (e.g. tokens deployed with Colony)
   *
   * @param colonyAddress The address of the Colony to install the token authority for
   * @param allowedToTransfer Addresses that are allowed to transfer the token, even if it's locked
   */
  deployTokenAuthority(
    colonyAddress: string,
    allowedToTransfer: string[],
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /** Get the standard ERC20 token information */
  getTokenInfo(): Promise<TokenInfo>;

  estimateGas: MetaTxToken['estimateGas'] & {
    /**
     * Deploy a TokenAuthority contract for this Colony for a specific token
     * The TokenAuthority enables certain addresses to transfer the tokens, even if it's locked
     * It also enables the assigned Colony to mint tokens
     *
     * @remarks
     * Only works with tokens that allow for an authority to be set (e.g. tokens deployed with Colony)
     *
     * @param colonyAddress The address of the Colony to install the token authority for
     * @param allowedToTransfer Addresses that are allowed to transfer the token, even if it's locked
     */
    deployTokenAuthority(
      colonyAddress: string,
      allowedToTransfer: string[],
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
  };
}

/** The "old", legacy Colony token without Metatransactions token */
export interface LegacyColonyTokenClient extends Token {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.ColonyLegacy;

  /** Get the standard ERC20 token information */
  getTokenInfo(): Promise<TokenInfo>;
}

/** A standard ERC20 token */
export interface Erc20TokenClient extends TokenERC20 {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Erc20;

  /** Get the standard ERC20 token information */
  getTokenInfo(): Promise<TokenInfo>;
}

/** The SAI token. It requires special treatment as it's deprecated */
export interface DaiTokenClient extends TokenSAI {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Sai;

  /** Get the standard ERC20 token information */
  getTokenInfo(): Promise<TokenInfo>;
}

export interface Erc2612TokenClient extends TokenERC2612 {
  clientType: ClientType.TokenClient;
  tokenClientType: TokenClientType.Erc2612;

  /** Get the standard ERC20 token information */
  getTokenInfo(): Promise<TokenInfo>;
}

export type TokenClient =
  | ColonyTokenClient
  | LegacyColonyTokenClient
  | Erc20TokenClient
  | Erc2612TokenClient
  | DaiTokenClient;

async function checkTokenAuthorityCompatibility(
  tokenClient: ColonyTokenClient,
): Promise<void> {
  try {
    await tokenClient.authority();
    return;
  } catch (e) {
    throw new Error('Token can not be assigned a TokenAuthority');
  }
}

async function deployTokenAuthority(
  this: ColonyTokenClient,
  colonyAddress: string,
  allowedToTransfer: string[],
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const tokenAuthorityFactory = new TokenAuthorityFactory(this.signer);
  const tokenAuthorityContract = await tokenAuthorityFactory.deploy(
    this.address,
    colonyAddress,
    allowedToTransfer,
    overrides,
  );
  await tokenAuthorityContract.deployed();
  return tokenAuthorityContract.deployTransaction;
}

async function estimateDeployTokenAuthority(
  this: ColonyTokenClient,
  colonyAddress: string,
  allowedToTransfer: string[],
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const tokenAuthorityFactory = new TokenAuthorityFactory(this.signer);
  const deployTx = tokenAuthorityFactory.getDeployTransaction(
    this.address,
    colonyAddress,
    allowedToTransfer,
    overrides,
  );
  return this.provider.estimateGas(deployTx);
}

const getTokenClient = async (
  address: string,
  signerOrProvider: SignerOrProvider,
): Promise<TokenClient> => {
  let tokenClient: TokenClient;
  let isColonyToken = true;
  let isMetaTxToken = true;
  let isEip2612Token = true;

  tokenClient = MetaTxTokenFactory.connect(
    address,
    signerOrProvider,
  ) as ColonyTokenClient;

  try {
    await tokenClient.totalSupply();
  } catch (err) {
    throw new Error(
      `Token is probably not a valid ERC20 token, got ${
        (err as Error).message
      }`,
    );
  }

  // Colony tokens have the `locked()` and `authority()` methods. We assume that when it exists on
  // the contract we have a ColonyToken 🦆. This might not be true though, so can't rely
  // on this 100% when trying to call contract methods
  try {
    await tokenClient.locked();
    await checkTokenAuthorityCompatibility(tokenClient);
  } catch {
    isColonyToken = false;
  }

  try {
    await tokenClient.getMetatransactionNonce(AddressZero);
  } catch {
    isMetaTxToken = false;
  }

  try {
    // NOTE: Casting will be unnecessary when MetaTxToken supports "nonces"
    await (tokenClient as unknown as Erc2612TokenClient).nonces(AddressZero);
  } catch {
    isEip2612Token = false;
  }

  // NOTE: The following is horrible. But that's just how things are with tokens rn.
  if (isColonyToken) {
    if (!isMetaTxToken) {
      tokenClient = TokenFactory.connect(
        address,
        signerOrProvider,
      ) as LegacyColonyTokenClient;
      tokenClient.tokenClientType = TokenClientType.ColonyLegacy;
    } else {
      tokenClient.tokenClientType = TokenClientType.Colony;
      tokenClient.deployTokenAuthority = deployTokenAuthority.bind(tokenClient);
      tokenClient.estimateGas.deployTokenAuthority =
        estimateDeployTokenAuthority.bind(tokenClient);
    }
  } else if (isSai(address)) {
    tokenClient = TokenSAIFactory.connect(
      address,
      signerOrProvider,
    ) as DaiTokenClient;

    tokenClient.tokenClientType = TokenClientType.Sai;
  } else if (isEip2612Token) {
    tokenClient = TokenERC2612Factory.connect(
      address,
      signerOrProvider,
    ) as Erc2612TokenClient;

    tokenClient.tokenClientType = TokenClientType.Erc2612;
  } else {
    tokenClient = TokenERC20Factory.connect(
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
