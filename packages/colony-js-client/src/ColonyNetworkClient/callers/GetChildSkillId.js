/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyNetworkClient from '../index';

type Params = { skillId: number, childSkillIndex: number };
type ReturnValue = { childSkillId: number };
type FnReturn = [number];

export default class GetChildSkillId extends ContractClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static get schema(): {} {
    return {
      skillId: {
        type: 'number',
        min: 1,
      },
      childSkillIndex: {
        type: 'number',
        min: 0,
      },
    };
  }
  static parseParams({ skillId, childSkillIndex }: Params) {
    return [skillId, childSkillIndex];
  }
  static parseReturn([childSkillId]: FnReturn): ReturnValue {
    return { childSkillId };
  }
  get _call(): (number, number) => Promise<FnReturn> {
    return this.client.contract.functions.getChildSkillId;
  }
}
