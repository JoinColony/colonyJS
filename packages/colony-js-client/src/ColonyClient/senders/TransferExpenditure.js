/* @flow */
/* eslint-disable import/no-cycle */
import DomainAuth from './DomainAuth';

 export default class TransferExpenditure extends DomainAuth<
  *,
  *,
  *,
> {

  async owner(expenditureId: number) {
    // Validate that the expenditure exists before attempting to transfer it
    const { count } = await this.client.getExpenditureCount.call();
    if (count < expenditureId)
      throw new Error(`Expenditure ID ${expenditureId} not found`);
    // Get the expenditure
    const { owner } = await this.client.getExpenditure.call({expenditureId: expenditureId});
    // resolve the  address of the owner
    // TODO: I don't know where `inputAddress could come from, but DomainAuth checks for it, so I thought I'd do the same`
    const address =
      (typeof this._permissions.inputAddress === 'function'
        ? await this._permissions.inputAddress()
        : this._permissions.inputAddress) ||
      (await this.client.adapter.wallet.getAddress());
    return address === owner;
  }

  async send(inputValues: *, options: *) {
    if (!Object.hasOwnProperty.call(inputValues, 'expenditureId')) throw new Error (`ExpenditureId is required`);
    const isOwner = await this.owner(inputValues.expenditureId)
    if (isOwner) {
      return this.client.transferExpenditureViaOwnership.send(inputValues, options);
    } else {
      return this.client.transferExpenditureViaArbitration.send(inputValues, options);
    }
  }

  async estimate(inputValues: *, options: *) {
    if (!Object.hasOwnProperty.call(inputValues, 'expenditureId')) throw new Error (`ExpenditureId is required`);
    const isOwner = await this.owner(inputValues.expenditureId)
    if (isOwner) {
      return this.client.transferExpenditureViaOwnership.estimate(inputValues, options);
    } else {
      return this.client.transferExpenditureViaArbitration.estimate(inputValues, options);
    }
  }

}
