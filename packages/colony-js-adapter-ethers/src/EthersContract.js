/* @flow */

import ethers from 'ethers';

import type { IContract, TransactionOptions } from '@colony/colony-js-adapter';

class EthersContract extends ethers.Contract implements IContract {
  /**
   * Given a function name and an array of arguments, apply the arguments and
   * return the resulting value/s.
   */
  async callConstant(functionName: string, args: Array<any>) {
    const fn = this.functions[functionName];
    if (typeof fn !== 'function')
      throw new TypeError(`Function ${functionName} not found on contract`);
    return fn(...args);
  }

  /**
   * Given a function name and an array of arguments, apply the arguments and
   * return the resulting gas cost estimate as a BigNumber
   */
  async callEstimate(functionName: string, args: Array<any>) {
    const fn = this.estimate[functionName];
    if (typeof fn !== 'function')
      throw new TypeError(
        `Estimation function ${functionName} not found on contract`,
      );
    return fn(...args);
  }

  /**
   * Given a function name, an array of arguments and optional transaction
   * options, apply the arguments and return the sent transaction
   */
  async sendTransaction(
    functionName: string,
    args: Array<any>,
    options: TransactionOptions,
  ) {
    const fn = this.functions[functionName];
    if (typeof fn !== 'function')
      throw new TypeError(`Function ${functionName} not found on contract`);
    return fn(...args, options);
  }

  /**
   * Given the name of an interface function, and an array of arguments
   * that will be accepted byt that function, get the data from the interface
   * by applying the arguments to it.
   */
  createTransactionData(name: string, args: Array<any>): string {
    const interfaceFn = this.interface.functions[name];
    if (typeof interfaceFn !== 'function')
      throw new TypeError(`Function ${name} not found on contract interface`);
    const { data } = interfaceFn(...args);
    return data;
  }
}

export default EthersContract;
