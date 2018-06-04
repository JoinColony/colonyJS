/* @flow */
/* eslint-disable no-underscore-dangle */

import assert from 'browser-assert';
import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';
import { isBigNumber } from '@colony/colony-js-utils';

import type ColonyClient from '../index';

type InputValues = { taskId: number };
type CallResult = [
  string,
  string,
  boolean,
  boolean,
  number,
  number,
  number,
  number,
  number,
  [number], // Currently just one item
];

export default class GetTask extends ContractClient.Caller<
  InputValues,
  // Flow is confused by the call to `super._getOutputValues`, so let the
  // OutputValues generic pass through for now; it's overspecified
  *,
  ColonyClient,
> {
  constructor(params: *) {
    super({
      functionName: 'getTask',
      input: [['taskId', 'number']],
      output: [
        ['specificationHash', 'ipfsHash'],
        ['deliverableHash', 'ipfsHash'],
        ['finalized', 'boolean'],
        ['cancelled', 'boolean'],
        ['dueDate', 'date'],
        ['payoutsWeCannotMake', 'number'],
        ['potId', 'number'],
        ['deliverableDate', 'date'],
        ['domainId', 'number'],
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
  _getOutputValues(result: CallResult, { taskId }: *) {
    const task = super._getOutputValues(result);

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
