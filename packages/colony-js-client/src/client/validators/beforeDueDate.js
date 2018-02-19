/* @flow */

import ValidationError from './ValidationError';
import type { Task } from '../interface/Task';

async function beforeDueDate(task: Task): Promise<boolean> {
  const now = new Date();
  if (task.dueDate instanceof Date && task.dueDate < now) {
    // TODO message
    throw new ValidationError(`Task with id ${task.id} due date`);
  }
  return true;
}

export default beforeDueDate;
