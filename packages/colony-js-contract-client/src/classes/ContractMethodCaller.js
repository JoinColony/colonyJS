/* @flow */

import { raceAgainstTimeout } from '@colony/colony-js-utils';

import type { CallOptions } from '../flowtypes';

import ContractClient from './ContractClient';
import ContractMethod from './ContractMethod';
import { DEFAULT_CALL_OPTIONS } from '../defaults';

export default class ContractMethodCaller<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> extends ContractMethod<InputValues, OutputValues, IContractClient> {
  /**
   * Given named input values, perform a call on the method's
   * contract function, and get named output values from the result.
   * @param inputValues
   * @param options
   * @returns {Promise<OutputValues>}
   */
  async call(
    inputValues: InputValues,
    options: CallOptions = DEFAULT_CALL_OPTIONS,
  ) {
    const args = this.getMethodArgs(inputValues);
    const result = await this._call(args, options);
    return this.getOutputValues(result, inputValues);
  }
  async _call(callArgs: Array<any>, { timeoutMs }: CallOptions): Promise<any> {
    return raceAgainstTimeout(
      this.client.call(this.functionName, callArgs),
      timeoutMs,
    );
  }
}
