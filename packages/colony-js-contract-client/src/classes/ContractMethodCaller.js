/* @flow */

import isPlainObject from 'lodash.isplainobject';

import ContractClient from './ContractClient';
import ContractMethod from './ContractMethod';

import type { ContractMethodArgs, ValidateEmpty } from '../flowtypes';

export default class ContractMethodCaller<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
  ContractData: { [dataValueName: string]: any },
> extends ContractMethod<
  InputValues,
  OutputValues,
  IContractClient,
  ContractData,
> {
  _validateEmpty: ?ValidateEmpty;

  static containsNullValues(values: Object | null) {
    if (isPlainObject(values))
      return Object.values(values || {}).some(value => value === null);
    return false;
  }

  constructor({
    client,
    functionName,
    input,
    output,
    name,
    validateEmpty,
  }: ContractMethodArgs<IContractClient> & {
    validateEmpty?: ValidateEmpty,
  } = {}) {
    super({ client, name, functionName, input, output });
    if (validateEmpty) this._validateEmpty = validateEmpty;
  }

  async validateEmpty(inputValues: *, outputValues: *) {
    if (this._validateEmpty) {
      let isValid: boolean = false;
      let reason;
      try {
        isValid = await this._validateEmpty(inputValues, outputValues);
      } catch (error) {
        reason = error.message || error.toString();
      }
      if (!isValid)
        throw new Error(`Empty response${reason ? ` (${reason})` : ''}`);
    }
    return true;
  }

  async _call(args: Array<any>) {
    return this.client.call(this.functionName, args);
  }

  /**
   * Given named input values, perform a call on the method's
   * contract function, and get named output values from the result.
   */
  async call(inputValues?: InputValues) {
    const args = this.getValidatedArgs(inputValues);
    const callResult = await this._call(args);
    const outputValues = this.convertOutputValues(callResult, inputValues);

    if (this.constructor.containsNullValues(outputValues))
      await this.validateEmpty(inputValues, outputValues);

    return outputValues;
  }
}
