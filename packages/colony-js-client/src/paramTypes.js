/* @flow */

import { isBigNumber } from '@colony/colony-js-utils';
import { addParamType } from '@colony/colony-js-contract-client';

import { ROLES, AUTHORITY_ROLES } from './constants';

const roleType = (roles: { [roleName: string]: number }) => ({
  validate(value: any) {
    return Object.hasOwnProperty.call(roles, value);
  },
  convertInput(value: $Keys<typeof roles>) {
    return roles[value];
  },
  convertOutput(value: any) {
    const roleNumber = isBigNumber(value) ? value.toNumber() : value;
    return Object.keys(roles).find(name => roles[name] === roleNumber) || null;
  },
});

addParamType('role', roleType(ROLES));

addParamType('authorityRole', roleType(AUTHORITY_ROLES));
