/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { TOKEN } from '../../schemaDefinitions';

type Params = { potId: number, token: string };
type ReturnValue = { balance: number };
type FnReturn = [number];

export default class GetPotBalance extends ContractClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static get schema(): {} {
    return {
      potId: {
        type: 'number',
        min: 1,
      },
      ...TOKEN,
    };
  }
  static parseParams({ potId, token }: Params) {
    return [potId, token];
  }
  static parseReturn([balance]: FnReturn): ReturnValue {
    return { balance };
  }
  get _call(): (number, string) => Promise<FnReturn> {
    return this.client.contract.functions.getPotBalance;
  }
}
