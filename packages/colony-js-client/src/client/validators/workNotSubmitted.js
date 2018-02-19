/* @flow */

import ValidationError from './ValidationError';
import type { Task } from '../interface/Task';

async function workNotSubmitted(task: Task): Promise<boolean> {
  if (task.deliverableTimestamp !== 0) {
    throw new ValidationError(`Task with id ${task.id} has submitted work`);
  }
  return true;
}

export default workNotSubmitted;
