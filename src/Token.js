/* @flow */

import type { WalletObjType } from '@colony/purser-core';
import Web3 from 'web3';

import TokenABI from '../lib/colonyNetwork/build/contracts/Token.json';

export default class TokenNetwork extends Web3.Contract {
  static create(web3: Web3, wallet: WalletObjType, address: string) {
    const jsonInterface = TokenABI;
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
