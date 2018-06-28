/* @flow */

import { isBigNumber } from '@colony/colony-js-utils';
import { isHexStrict, hexToNumber } from 'web3-utils';
import { addParamType } from '@colony/colony-js-contract-client';

import { ROLES, AUTHORITY_ROLES, COMBINED_AUTHORITY_ROLES } from './constants';

const roleType = (roles: { [roleName: string]: number }) => ({
  validate(value: any) {
    return Object.hasOwnProperty.call(roles, value);
  },
  convertInput(value: $Keys<typeof roles>) {
    return roles[value];
  },
  convertOutput(value: any) {
    let converted;
    if (isBigNumber(value)) {
      converted = value.toNumber();
    } else {
      converted = value;
    }
    return Object.keys(roles).find(name => roles[name] === converted) || null;
  },
});

const roleTypeArray = (roles: { [roleName: string]: number }) => ({
  validate(value: any) {
    return Object.hasOwnProperty.call(roles, value);
  },
  convertOutput(value: any) {
    let converted;
    if (isHexStrict(value)) {
      converted = hexToNumber(value);
    } else {
      converted = value;
    }
    return converted
      ? Object.keys(roles)
          .find(name => roles[name] === converted)
          .split(',')
      : [];
  },
});

addParamType('role', roleType(ROLES));

addParamType('authorityRole', roleType(AUTHORITY_ROLES));

addParamType('authorityRoles', roleTypeArray(COMBINED_AUTHORITY_ROLES));
