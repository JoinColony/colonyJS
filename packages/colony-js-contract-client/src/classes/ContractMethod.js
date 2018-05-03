/* @flow */

import ContractClient from './ContractClient';
import getMethodArgs from '../modules/getMethodArgs';
import getMethodReturnValue from '../modules/getMethodReturnValue';
import validate from '../modules/validate';

import type { ContractMethodArgs, ParamTypePairs } from '../flowtypes';

/**
 * Abstract class for interacting with contract methods.
 */
export default class ContractMethod<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> {
  client: IContractClient;
  functionName: string;
  input: ParamTypePairs;
  output: ParamTypePairs;

  // Imported functions
  _validate = validate;
  _getMethodArgs = getMethodArgs;
  _getMethodReturnValue = getMethodReturnValue;

  constructor({
    client,
    functionName,
    input,
    output,
  }: ContractMethodArgs<IContractClient> = {}) {
    this.client = client;
    this.input = input;
    this.functionName = functionName;
    if (output) this.output = output;
  }
  /**
   * Given named input values, validate them against the expected parameters
   * for this method, throwing errors if validation fails.
   */
  validate(inputValues: InputValues) {
    return this._validate(inputValues, this.input);
  }
  /**
   * Given named input values, transform these with the expected parameters
   * in order to get an array of arguments expected by the contract function.
   */
  getMethodArgs(inputValues: InputValues) {
    return this._getMethodArgs(inputValues, this.input);
  }
  /**
   * Given the result of a contract method call, and the input values used to
   * make the call, transform these with the expected output parameters in
   * order to get named output values as the method's `ReturnValues`
   */
  // eslint-disable-next-line no-unused-vars
  getOutputValues(callResult: any, inputValues: InputValues): OutputValues {
    return this._getMethodReturnValue(callResult, this.output);
  }
  /**
   * Given arguments to call the contract method with, return
   * transaction data as a hex string.
   */
  createTransactionData(callArgs: Array<any>) {
    return this.client.createTransactionData(this.functionName, callArgs);
  }
}
