/* @flow */

import ContractClient from './ContractClient';
import ContractMethod from './ContractMethod';

export default class ContractMethodCaller<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> extends ContractMethod<InputValues, OutputValues, IContractClient> {
  /**
   * Given named input values, perform a call on the method's
   * contract function, and get named output values from the result.
   */
  async call(inputValues?: InputValues) {
    this.validate(inputValues);
    const args = this.getMethodArgs(inputValues);
    const result = await this.client.call(this.functionName, args);
    return this.getOutputValues(result, inputValues);
  }
}
