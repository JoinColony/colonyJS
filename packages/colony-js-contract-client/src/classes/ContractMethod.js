/* @flow */
/* eslint-disable no-underscore-dangle */

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
  static _applyDefaultValues(
    inputValues: InputValues,
    params: Params = [],
    defaultValues: DefaultValues = {},
  ): InputValues {
    // XXX it's possible to do this in a more succinct way, but adding
    // properties in this way preserves type safety
    const values = Object.assign({}, inputValues);
    params.forEach(([name]) => {
      values[name] = Object.hasOwnProperty.call(values, name)
        ? values[name]
        : defaultValues[name];
    });
    return values;
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
    inputValues: any,
    params: Params = this.input,
    defaultValues: DefaultValues = this.defaultValues,
  ) {
    const values = this.constructor._applyDefaultValues(
      inputValues,
      params,
      defaultValues,
    );
    return validateParams(values, params, this.assertValid);
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
   * Given input values, get default values, then validate them and return
   * parsed method args.
   */
  getValidatedArgs(
    inputValues: any,
    params: Params = this.input,
    defaultValues: DefaultValues = this.defaultValues,
  ) {
    const values = this.constructor._applyDefaultValues(
      inputValues,
      params,
      defaultValues,
    );
    this.validate(values, params);

    return params && params.length
      ? this.convertInputValues(values, params)
      : [];
  }
}
