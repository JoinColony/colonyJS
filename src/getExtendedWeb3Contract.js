/* @flow */

import Web3 from 'web3';

import { decorateReceipt, decorateConstantCallReturn } from './utils';

const getExtendedWeb3Contract = (web3: Web3, ...args: *) =>
  class ExtendedWeb3Contract extends web3.Contract(...args) {
    // TODO extend functions that can use these:
    // decorateReceipt
    // decorateConstantCallReturn
    // Alternatively, use Reflect?
  };

export default getExtendedWeb3Contract;
