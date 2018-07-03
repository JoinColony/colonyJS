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
import type { ContractMethodArgs, DefaultValues, Params } from '../flowtypes';

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
  defaultValues: DefaultValues;
  functionName: string;
  input: Params;
  name: string;
  output: Params;

  /**
   * Given input values, method parameters and default values, iterate through
   * the parameters and construct and object with the properties from the
   * input values (if they are defined) or default values.
   */
  static _getDefaultValues(
    inputValues: * = {},
    params: Params,
    defaultValues: DefaultValues = {},
  ) {
    return params.reduce(
      (acc, [name]) =>
        Object.assign(acc, {
          [name]: Object.hasOwnProperty.call(inputValues, name)
            ? inputValues[name]
            : defaultValues[name],
        }),
      {},
    );
  }

  constructor({
    client,
    defaultValues,
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
    if (defaultValues) this.defaultValues = defaultValues;
    if (output) this.output = output;
  }

  /**
   * Given named input values, transform these with the expected parameters
   * in order to get an array of arguments expected by the contract function.
   */
  _getMethodArgs(inputValues?: *, params?: Params): Array<any> {
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
   * Given input values, apply default values and validate them against the
   * expected params
   */
  validate(
    inputValues?: any,
    params: Params = this.input,
    defaultValues: DefaultValues = this.defaultValues,
  ) {
    const values =
      params && params.length
        ? this.constructor._getDefaultValues(inputValues, params, defaultValues)
        : inputValues;
    return this._validate(values);
  }

  _validate(inputValues?: any, params: Params = this.input) {
    return validateParams(inputValues, params, this.assertValid);
  }

  /**
   * Given input values, map them against the expected parameters,
   * with the appropriate conversion for each type.
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
   * Given input values, get default values (if params are given), then
   * validate them and return parsed method args.
   */
  getValidatedArgs(
    inputValues: any,
    params: Params = this.input,
    defaultValues: DefaultValues = this.defaultValues,
  ) {
    const values =
      params && params.length
        ? this.constructor._getDefaultValues(inputValues, params, defaultValues)
        : inputValues;
    this._validate(values, params);
    return this._getMethodArgs(values, params);
  }
}
