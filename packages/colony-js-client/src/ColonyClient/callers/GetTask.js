/* @flow */
/* eslint-disable no-underscore-dangle */

import assert from 'assert';
import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';
import { isBigNumber } from '@colony/colony-js-utils';

import type ColonyClient from '../index';

type InputValues = { taskId: number };
type CallResult = [
  string,
  string,
  boolean,
  number,
  number,
  number,
  number,
  number,
  number,
  [number], // Currently just one item
];

export default class GetTask extends ContractClient.Caller<
  InputValues,
  // Flow is confused by the call to `super.convertOutputValues`, so let the
  // OutputValues generic pass through for now; it's overspecified
  *,
  ColonyClient,
  *,
> {
  constructor(params: *) {
    super({
      functionName: 'getTask',
      input: [['taskId', 'number']],
      output: [
        ['specificationHash', 'ipfsHash'],
        ['deliverableHash', 'ipfsHash'],
        ['status', 'taskStatus'],
        ['dueDate', 'date'],
        ['potId', 'number'],
        ['completionTimestamp', 'date'],
        ['domainId', 'number'],
        ['skillId', 'number'],
      ],
      ...params,
    });
    this._validateEmpty = async (inputValues?: *) => {
      const taskId = inputValues && inputValues.taskId;
      if (taskId) {
        const { count } = await this.client.getTaskCount.call();
        assert(taskId <= count, `Task with ID ${taskId} not found`);
      }
      return true;
    };
  }
  // eslint-disable-next-line class-methods-use-this
  convertOutputValues(result: CallResult, { taskId }: *) {
    const task = super.convertOutputValues(result);

    // Until arrays of bignumbers are supported as a parameter type,
    // take the last item of the call result (skillIds) and use the first one
    const skillId: BigNumber = [].concat(result[result.length - 1])[0];

    return Object.assign({}, task, {
      // Include the task ID
      id: taskId,
      skillId: isBigNumber(skillId) ? skillId.toNumber() : null,
    });
  }
}
