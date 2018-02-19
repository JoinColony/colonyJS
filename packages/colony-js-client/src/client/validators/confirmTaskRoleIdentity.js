/* @flow */

// import ValidationError from './ValidationError';
import type { Task } from '../interface/Task';
import ColonyClient from '../ColonyClient';

/* eslint-disable no-unused-vars */
async function confirmTaskRoleIdentity(
  task: Task,
  role: string,
  client: ColonyClient,
): Promise<boolean> {
  // TODO something along the lines of:
  // modifier confirmTaskRoleIdentity(uint256 _id, uint8 _role) {
  //   Role storage role = tasks[_id].roles[_role];
  //   require(msg.sender == role.user);
  //   _;
  // }
  return true;
}

export default confirmTaskRoleIdentity;
