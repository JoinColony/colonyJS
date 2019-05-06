/* @flow */

import DomainAuth from './DomainAuth';

export default class MakePayment extends DomainAuth<*, *, *> {
  async estimate(inputValues: *) {
    const args = this.getValidatedArgs(inputValues);
    const contract = await this._getContract();
    return contract.callEstimate('makePayment', args);
  }

  async _sendTransaction(args: *, options: *) {
    const contract = await this._getContract();
    return contract.callTransaction('makePayment', args, options);
  }

  async _getContract() {
    const factoryContract = await this.client.adapter.getContract({
      contractName: 'OneTxPaymentFactory',
    });
    const contractAddress = await factoryContract.callConstant(
      'deployedExtensions',
      [this.client.contract.address],
    );
    if (!contractAddress)
      throw new Error('OneTxPayment not deployed for this Colony');
    const contract = await this.client.adapter.getContract({
      contractAddress,
      contractName: 'OneTxPayment',
    });
    return contract;
  }
}
