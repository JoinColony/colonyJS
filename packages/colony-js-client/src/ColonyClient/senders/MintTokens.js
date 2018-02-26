/* @flow */

// TODO should probably be using BigBumber

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { AMOUNT_POSITIVE } from '../../schemaDefinitions';

type Params = { amount: number };
type EventData = {};

export default class MintTokens extends ContractClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return AMOUNT_POSITIVE;
  }
  static parseParams({ amount }: Params) {
    return [amount];
  }
  get _estimate(): number => * {
    return this.client.contract.estimate.mintTokens;
  }
  get _send(): number => * {
    return this.client.contract.functions.mintTokens;
  }
  // TODO are there any events?
}
