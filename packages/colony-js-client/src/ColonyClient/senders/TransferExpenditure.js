/* @flow */
/* eslint-disable import/no-cycle */
import ContractClient from '@colony/colony-js-contract-client';

import type { ColonyClient } from '../../index';

export default class TransferExpenditure <
  InputValues: *,
  OutputValues: *,
  ColonyClient: *,
  ContractData: *,
> extends ContractClient.Sender<
  InputValues,
  OutputValues,
  ColonyClient,
  ContractData,
> {

  async owner(expenditureId: number) {
    // Validate that the expenditure exists before attempting to transfer it
    const { count } = await this.client.getExpenditureCount.call();
    if (count < expenditureId)
      throw new Error(`Expenditure ID ${expenditureId} not found`);
    // Get the expenditure
    const { owner } = await this.client.getExpenditure.call({expenditureId: expenditureId});
    // resolve the  address of the owner
    const address = await this.client.adapter.wallet.getAddress();
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

  async estimate(inputValues: *) {
    if (!Object.hasOwnProperty.call(inputValues, 'expenditureId')) throw new Error (`ExpenditureId is required`);
    const isOwner = await this.owner(inputValues.expenditureId)
    if (isOwner) {
      return this.client.transferExpenditureViaOwnership.estimate(inputValues);
    } else {
      return this.client.transferExpenditureViaArbitration.estimate(inputValues);
    }
  }

}
