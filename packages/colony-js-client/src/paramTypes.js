/* @flow */

import { isBigNumber } from '@colony/colony-js-utils';
import { isHexStrict, hexToNumber } from 'web3-utils';
import { addParamType } from '@colony/colony-js-contract-client';

import {
  COLONY_ROLES,
  TASK_RATINGS,
  TASK_ROLES,
  TASK_STATUSES,
} from './constants';

const dictType = (dict: { [key: string]: number }) => ({
  validate(value: any) {
    return Object.hasOwnProperty.call(dict, value);
  },
  convertInput(value: $Keys<typeof dict>) {
    return dict[value];
  },
  convertOutput(value: any) {
    let converted;
    if (isHexStrict(value)) {
      converted = hexToNumber(value);
    } else if (isBigNumber(value)) {
      converted = value.toNumber();
    } else {
      converted = value;
    }
    return Object.keys(dict).find(name => dict[name] === converted) || null;
  },
});

addParamType('colonyRole', dictType(COLONY_ROLES));

addParamType('taskRatings', dictType(TASK_RATINGS));

addParamType('taskRole', dictType(TASK_ROLES));

addParamType('taskStatus', dictType(TASK_STATUSES));
