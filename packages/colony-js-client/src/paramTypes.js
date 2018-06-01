/* @flow */

import { isBigNumber, isValidAddress } from '@colony/colony-js-utils';
import { addParamType } from '@colony/colony-js-contract-client';

import { ROLES } from './constants';

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

// Consider creating a flexible array type (if more use-cases arise)
addParamType('addressArray', {
  validate(value: any) {
    return (
      Array.isArray(value) &&
      value.length &&
      value.every(item => isValidAddress(item))
    );
  },
  convertInput(value: Array<string>) {
    return value;
  },
  convertOutput(value: Array<string>) {
    return value.map(item => (isValidAddress(item) ? item : null));
  },
});

addParamType('bignumberArray', {
  validate(value: any) {
    return (
      Array.isArray(value) &&
      value.length &&
      value.every(item => isBigNumber(item))
    );
  },
  convertInput(value: Array<string>) {
    return value;
  },
  convertOutput(value: Array<string>) {
    return value.map(item => (isBigNumber(item) ? item : null));
  },
});
