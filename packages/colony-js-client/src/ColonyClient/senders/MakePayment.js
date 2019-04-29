/* @flow */

import DomainAuth from './DomainAuth';

export default class MakePayment extends DomainAuth<*, *, *> {
  async _sendTransaction(args: *, options: *) {
    const factoryContract = await this.client.adapter.getContract({
      contractName: 'OneTxPaymentFactory',
    });
    const contractAddress = await factoryContract.callConstant(
      'deployedExtensions',
      [this.client.contract.address],
    );
    const contract = await this.client.adapter.getContract({
      contractAddress,
      contractName: 'OneTxPayment',
    });
    return contract.callTransaction('makePayment', args, options);
  }
}
