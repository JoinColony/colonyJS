/* @flow */

import ValidationError from './ValidationError';
import type { Task } from '../interface/Task';

async function taskNotFinalized(task: Task): Promise<boolean> {
  if (task.finalized) {
    throw new ValidationError(
      `Task with id ${task.id} is finalized and cannot be modified further`,
    );
  }
  return true;
}

export default taskNotFinalized;
