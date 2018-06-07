/* @flow */

import { isBigNumber } from '@colony/colony-js-utils';
import { addParamType } from '@colony/colony-js-contract-client';

import { ROLES, AUTHORITY_ROLES } from './constants';

addParamType('role', {
  validate(value: any) {
    return Object.hasOwnProperty.call(ROLES, value);
  },
  convertInput(value: $Keys<typeof ROLES>) {
    return ROLES[value];
  },
  convertOutput(value: any) {
    const roleNumber = isBigNumber(value) ? value.toNumber() : value;
    return Object.keys(ROLES).find(name => ROLES[name] === roleNumber) || null;
  },
});

addParamType('authorityRole', {
  validate(value: any) {
    return Object.hasOwnProperty.call(AUTHORITY_ROLES, value);
  },
  convertInput(value: $Keys<typeof AUTHORITY_ROLES>) {
    return AUTHORITY_ROLES[value];
  },
  convertOutput(value: any) {
    const roleNumber = isBigNumber(value) ? value.toNumber() : value;
    return (
      Object.keys(AUTHORITY_ROLES).find(
        name => AUTHORITY_ROLES[name] === roleNumber,
      ) || null
    );
  },
});
