/* @flow */

import ContractClient from '@colony/colony-js-contract-client';
import { raceAgainstTimeout } from '@colony/colony-js-utils';

import type ColonyClient from '../index';

import type { Task } from '../../interface/Task';

type Params = { taskId: number };
type ReturnValue = Task;
type FnReturn = [
  string,
  string,
  boolean,
  boolean,
  number,
  number,
  number,
  number,
];

type Options = { timeoutMs: number };

const DEFAULT_TIMEOUT = 60 * 1000;

export default class GetTask extends ContractClient.Caller<
  Params,
  ReturnValue,
  ColonyClient,
> {
  static params = [['taskId', 'number']];
  static parseReturn(
    [
      specificationHash,
      deliverableHash,
      finalized,
      cancelled,
      dueDate,
      payoutsWeCannotMake,
      potId,
      deliverableTimestamp,
    ]: FnReturn,
    { taskId }: Params,
  ): ReturnValue {
    return {
      cancelled,
      deliverableHash,
      deliverableDate: new Date(deliverableTimestamp),
      dueDate: new Date(dueDate),
      finalized,
      id: taskId,
      payoutsWeCannotMake,
      potId,
      specificationHash,
    };
  }
  async getSkill(taskId: number, index: number, timeoutMs: number) {
    return raceAgainstTimeout(
      this.client.contract.functions.getTaskSkill(taskId, index),
      timeoutMs,
    );
  }
  async getDomain(taskId: number, index: number, timeoutMs: number) {
    return raceAgainstTimeout(
      this.client.contract.functions.getTaskDomain(taskId, index),
      timeoutMs,
    );
  }
  async getTask(taskId: number, params: Params, timeoutMs: number) {
    const values = await raceAgainstTimeout(
      this.client.contract.functions.getTask(taskId),
      timeoutMs,
    );
    return this.constructor.parseReturn(values, params);
  }
  async call(
    params: Params,
    { timeoutMs = DEFAULT_TIMEOUT }: Options = {},
  ): Promise<ReturnValue> {
    const [taskId] = this.constructor.getArgs(params);

    // XXX Only one domain/skill per task is supported as of writing,
    // so always fetch the first one.
    const domains = [await this.getDomain(taskId, 0, timeoutMs)];
    const skills = [await this.getSkill(taskId, 0, timeoutMs)];

    const task = await this.getTask(taskId, params, timeoutMs);

    return { ...task, domains, skills };
  }
}
