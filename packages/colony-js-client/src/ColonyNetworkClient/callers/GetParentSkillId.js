/* @flow */

import ColonyNetworkClient from '../index';

type Params = { skillId: number, parentSkillIndex: number };
type ReturnValue = { parentSkillId: number };
type FnReturn = [number];

export default class GetParentSkillId extends ColonyNetworkClient.Caller<
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
      parentSkillIndex: {
        type: 'number',
        min: 0,
      },
    };
  }
  static parseParams({ skillId, parentSkillIndex }: Params) {
    return [skillId, parentSkillIndex];
  }
  static parseReturn([parentSkillId]: FnReturn): ReturnValue {
    return { parentSkillId };
  }
  get _call(): (number, number) => Promise<FnReturn> {
    return this.client.contract.functions.getParentSkillId;
  }
}
