/* @flow */

import type { WalletObjType } from '@colony/purser-core';
import Web3 from 'web3';

import ColonyABI from '../lib/colonyNetwork/build/contracts/Colony.json';

export default class ColonyNetwork extends Web3.Contract {
  static create(web3: Web3, wallet: WalletObjType, address: string) {
    const jsonInterface = ColonyABI;
    return new this(jsonInterface, address, {
      transactionSigner: wallet,
    });
  }

  constructor(
    jsonInterface: any[],
    address: string,
    { transactionSigner, ...options }: Object,
    wallet: WalletObjType,
  ) {
    super(jsonInterface, address, {
      transactionSigner: transactionSigner || wallet,
      ...options,
    });
  }
}
