/* @flow */

import ValidationError from './ValidationError';
import { ROLES } from '../../constants';

export default function isValidRole(role: string): boolean {
  if (!Object.hasOwnProperty.call(ROLES, role)) {
    throw new ValidationError(`Role ${role} is not a valid role`);
  }
  return true;
}
