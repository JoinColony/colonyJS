/* @flow */
/* eslint-disable import/no-cycle */

import DomainAuth from './DomainAuth';

export default class MakePaymentFundedFromDomain extends DomainAuth<*, *, *> {
  async estimate(inputValues: *) {
    // if for some reason we don't have the required methods, then throw
    if (
      !(
        this.client.networkClient &&
        this.client.networkClient.getParentSkillId &&
        this.client.hasColonyRole
      )
    ) {
      throw new Error('Client not compatible with DomainAuth sender');
    }

    // combine with default values
    const inputValuesWithDefaults = {
      ...(this.defaultValues || {}),
      ...inputValues,
    };

    // get proof input values
    const proofs = await this.getPermissionProofs(inputValuesWithDefaults);

    const contract = await this._getContract();

    const args = this.getValidatedArgs({
      ...inputValuesWithDefaults,
      ...proofs,
    });

    return contract.callEstimate('makePaymentFundedFromDomain', args);
  }

  async _sendTransaction(args: *, options: *) {
    const contract = await this._getContract();
    return contract.sendTransaction(
      'makePaymentFundedFromDomain',
      args,
      options,
    );
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
    return this.client.adapter.getContract({
      contractAddress,
      contractName: 'OneTxPayment',
    });
  }
}
