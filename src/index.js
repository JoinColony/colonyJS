/* @flow */

import type { WalletObjType } from '@colony/purser-core';
import type Web3 from 'web3';

import Colony from './Colony';
import ColonyNetwork from './ColonyNetwork';
import Token from './Token';

import TokenArtifact from '../lib/colonyNetwork/build/contracts/Token.json';

export type ColonyJSOptions = {|
  convertBNsToStrings?: boolean,
  convertIdsToNumbers?: boolean,
  trimUnderscores?: boolean,
|};

const DEFAULT_COLONY_JS_OPTIONS: ColonyJSOptions = Object.freeze({
  convertBNsToStrings: false,
  convertIdsToNumbers: true,
  trimUnderscores: true,
});

/**
 * The entry point for interacting with the Colony Network.
 *
 * Accepts an initialised web3 instance and a purser-compatible
 * opened wallet object.
 */
export default class ColonyJS {
  static async create(
    web3: Web3,
    wallet: WalletObjType,
    options?: ColonyJSOptions,
  ) {
    const colonyNetworkAddress = '0x'; // FIXME could depend on network, env var
    const network = ColonyNetwork.create(web3, wallet, colonyNetworkAddress);
    return new this(web3, wallet, network, {
      ...DEFAULT_COLONY_JS_OPTIONS,
      ...options,
    });
  }

  web3: Web3;

  wallet: WalletObjType;

  network: ColonyNetwork;

  options: ColonyJSOptions;

  constructor(
    web3: Web3,
    wallet: WalletObjType,
    network: ColonyNetwork,
    options: ColonyJSOptions,
  ) {
    this.web3 = web3;
    this.wallet = wallet;
    this.network = network;
    this.options = options;
  }

  async getColony(colonyAddress: string): Promise<Colony> {
    // TODO ensure that the address exists as a colony?
    // TODO support passing an ENS name?
    return Colony.create(this.web3, this.wallet, colonyAddress);
  }

  async getMetaColony() {
    const metaColonyAddress = await this.network.methods.getMetaColony();
    return this.getColony(metaColonyAddress);
  }

  getCreateTokenTransaction(
    tokenName: string,
    tokenSymbol: string,
    tokenDecimals: number = 18,
  ) {
    // TODO this could be a static Token method
    return new this.web3.Contract(TokenArtifact.abi).deploy({
      arguments: [tokenName, tokenSymbol, tokenDecimals],
      data: TokenArtifact.bytecode,
    });
  }

  getCreateColonyTransaction(tokenAddress: string) {
    // TODO this could be a static Colony method (but then it would depend on ColonyNetwork)
    return this.network.createColony(tokenAddress);
  }

  async createToken(
    tokenName: string,
    tokenSymbol: string,
    tokenDecimals: number = 18,
    options: Object,
  ): Promise<string> {
    // TODO this could be a static token method
    // TODO error modes
    const deployTransaction = this.getCreateTokenTransaction(
      tokenName,
      tokenSymbol,
      tokenDecimals,
    );

    // TODO test that this is a token contract, not a receipt
    const { address: tokenAddress } = await deployTransaction.send({
      ...options,
      from: this.wallet.address,
    });

    return Token.create(this.web3, this.wallet, tokenAddress);
  }

  async createColony(tokenAddress: string, options: Object) {
    // TODO this could be a static Colony method
    // TODO error modes
    const createColonyTransaction = this.getCreateColonyTransaction(
      tokenAddress,
    );
    const {
      events: {
        ColonyAdded: {
          returnValues: { address: colonyAddress },
        },
      },
    } = await createColonyTransaction.send({
      ...options,
      from: this.wallet.address,
    });

    return Colony.create(this.web3, this.wallet, colonyAddress);
  }
}
