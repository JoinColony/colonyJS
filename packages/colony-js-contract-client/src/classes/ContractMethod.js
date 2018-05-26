/* @flow */
/* eslint-disable no-underscore-dangle */

import isPlainObject from 'lodash.isplainobject';
import { makeAssert } from '@colony/colony-js-utils';

import type { ContractMethodArgs, ParamTypePairs } from '../flowtypes';
import ContractClient from './ContractClient';
import {
  validateValue,
  convertInputValue,
  convertOutputValue,
} from '../modules/paramTypes';
import { areParamPairsEmpty, isInputEmpty } from '../modules/inputValidation';

const assertValid = makeAssert('Validation failed');

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

  static _validateValue(value: any, paramType: *, paramName: string) {
    let reason;
    let isValid = false;
    try {
      isValid = validateValue(value, paramType);
    } catch (error) {
      reason = error.message || error.toString();
    }
    return assertValid(
      Boolean(isValid),
      `Parameter "${paramName}" expected a value of type "${paramType}"${
        reason ? ` (${reason})` : ''
      }`,
    );
  }

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
   * Given the result of a contract method call, and the input values used to
   * make the call, transform these with the expected output parameters in
   * order to get named output values as the method's `OutputValues`
   * The inputValues are included for function overloading.
   */
  // eslint-disable-next-line no-unused-vars
  _getOutputValues(callResult: any, inputValues?: InputValues): OutputValues {
    // It may be a single value or an array; treat it as an array
    const values = [].concat(callResult);

    // Clean values according to their type and coalesce into an object
    return this.output && this.output.length
      ? // $FlowFixMe
        this.output
          .map(([name, type], index) => [
            name,
            convertOutputValue(values[index], type),
          ])
          .reduce(
            (acc, [name, value]) => Object.assign(acc, { [name]: value }),
            {},
          )
      : callResult;
  }

  /**
   * Given input values, map them against the method's expected parameters,
   * with the appropriate conversion for each type.
   */
  _parseInputValues(inputValues: InputValues) {
    return this.input.map(([paramName, paramType]) =>
      convertInputValue(inputValues[paramName], paramType),
    );
  }

  /**
   * Given named input values, transform these with the expected parameters
   * in order to get an array of arguments expected by the contract function.
   */
  _getMethodArgs(inputValues?: InputValues): Array<any> {
    let args = [];

    if (inputValues == null) return args;

    if (this.input && this.input.length) {
      args = this._parseInputValues(inputValues);
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
   * Given input values, validate them and return parsed method args.
   */
  getValidatedArgs(inputValues?: any) {
    this.validate(inputValues);
    return this._getMethodArgs(inputValues);
  }

  /**
   * Given parameters (as an object with named parameters, but potentially any
   * kind of invalid input), validate each parameter against the expected type
   * for this method, throwing vaidation errors or returning true.
   */
  validate(input?: any): boolean {
    if (areParamPairsEmpty(this.input) && isInputEmpty(input)) return true;

    assertValid(isPlainObject(input), 'Expected parameters as an object');

    const inputValues = Object.assign({}, input);

    assertValid(
      Object.getOwnPropertyNames(inputValues).length === this.input.length,
      'Mismatching parameters/method parameters sizes',
    );

    return this.input.every(([paramName, paramType]) =>
      this.constructor._validateValue(
        inputValues[paramName],
        paramType,
        paramName,
      ),
    );
  }
}
