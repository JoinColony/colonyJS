/* @flow */

import {
  isBigNumber,
  isValidAddress,
  isEmptyHexString,
} from '@colony/colony-js-utils';
import { addParamType } from '@colony/colony-js-contract-client';

import { ROLES, AUTHORITY_ROLES, EMPTY_ADDRESS } from './constants';

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

// Either a valid address, or an empty address to indicate ether
// (0x0 or 0x0000000000000000000000000000000000000000)
addParamType('payableAddress', {
  validate(value: any) {
    return isValidAddress(value) || isEmptyHexString(value);
  },
  convertInput(value: any) {
    return isValidAddress(value) ? value : EMPTY_ADDRESS;
  },
  convertOutput(value: any) {
    return value;
  },
});
