/* @flow */
/* eslint-disable no-underscore-dangle */

import isPlainObject from 'lodash.isplainobject';
import { makeAssert } from '@colony/colony-js-utils';

import ContractClient from './ContractClient';
import {
  convertInputValues,
  convertOutputValues,
} from '../modules/paramConversion';
import { validateParams } from '../modules/paramValidation';
import type { ContractMethodArgs, Params } from '../flowtypes';

/**
 * Abstract class for interacting with contract methods.
 */
export default class ContractMethod<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> {
  assertValid: Function;
  client: IContractClient;
  functionName: string;
  input: Params;
  name: string;
  output: Params;

  constructor({
    client,
    functionName,
    name,
    input,
    output,
  }: ContractMethodArgs<IContractClient> = {}) {
    this.name = name;
    this.client = client;
    this.input = input;
    this.functionName = functionName;
    this.assertValid = makeAssert(`Validation failed for ${name}`);
    if (output) this.output = output;
  }

  /**
   * Given named input values, transform these with the expected parameters
   * in order to get an array of arguments expected by the contract function.
   */
  _getMethodArgs(inputValues?: InputValues, params?: Params): Array<any> {
    let args = [];

    if (inputValues == null) return args;

    if (params && params.length) {
      args = this.convertInputValues(inputValues, params);
    } else if (
      isPlainObject(inputValues) &&
      Object.getOwnPropertyNames(inputValues).length
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        'Warning: _getMethodArgs called with parameters for a method that ' +
          'does not accept parameters',
      );
    }
    return args;
  }

  /**
   * Given arguments to call the contract method with, return
   * transaction data as a hex string.
   */
  createTransactionData(callArgs: Array<any>) {
    return this.client.createTransactionData(this.functionName, callArgs);
  }

  /**
   * Given input values, validate them against the expected params
   */
  validate(inputValues?: any, params: Params = this.input) {
    return validateParams(inputValues, params, this.assertValid);
  }

  /**
   * Given input values, map them against the expected parameters,
   * with the appropriate conversion for each type.
   * Fall back to default values for each parameter.
   */
  convertInputValues(
    inputValues: InputValues,
    params: Params = this.input,
  ): Array<any> {
    return convertInputValues(inputValues, params);
  }

  /**
   * Given the result of a contract method call, transform these with the
   * expected output parameters in order to get named output values as the
   * method's `OutputValues`.
   */
  convertOutputValues(
    callResult: any,
    // eslint-disable-next-line no-unused-vars
    inputValues?: InputValues,
  ): OutputValues {
    const values = [].concat(callResult);

    const parsedResult = this.output.reduce(
      (acc, [name], index) => Object.assign(acc, { [name]: values[index] }),
      {},
    );

    return convertOutputValues(parsedResult, this.output);
  }

  /**
   * Given input values, validate them and return parsed method args.
   */
  getValidatedArgs(inputValues?: any, params: Params = this.input) {
    this.validate(inputValues, params);
    return this._getMethodArgs(inputValues, params);
  }
}
