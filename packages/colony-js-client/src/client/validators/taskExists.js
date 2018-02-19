/* @flow */

import type { Task } from '../interface/Task';
import ValidationError from './ValidationError';
import ColonyClient from '../ColonyClient';

async function taskExists(
  taskOrTaskId: number | Task,
  client: ColonyClient,
): Promise<boolean> {
  const taskId =
    typeof taskOrTaskId === 'number' ? taskOrTaskId : taskOrTaskId.id;
  const task = await client.getTask({ taskId });

  if (!task) {
    throw new ValidationError(`Task with id ${taskId} was not found`);
  }
  return true;
}

export default taskExists;
