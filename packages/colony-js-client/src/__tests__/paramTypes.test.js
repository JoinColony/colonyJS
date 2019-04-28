/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';
import createSandbox from 'jest-sandbox';
import { padLeft } from 'web3-utils';

import '../paramTypes';
import {
  TASK_ROLE_EVALUATOR,
  TASK_ROLE_MANAGER,
  TASK_ROLE_WORKER,
  TASK_ROLES,
} from '../constants';

describe('Custom param types', () => {
  const sandbox = createSandbox();

  const contract = {};
  const adapter = {};

  beforeEach(() => {
    sandbox.clear();
  });

  const client = new ContractClient({ contract, adapter });

  client.addCaller('getRole', {
    input: [['role', 'taskRole']],
    output: [['role', 'taskRole']],
  });

  test('Custom type "taskRole" validates correctly', () => {
    expect(client.getRole.validate({ role: TASK_ROLE_WORKER })).toBe(true);
    expect(client.getRole.validate({ role: TASK_ROLE_EVALUATOR })).toBe(true);
    expect(client.getRole.validate({ role: TASK_ROLE_MANAGER })).toBe(true);
    expect(() => {
      client.getRole.validate({ role: 'QUEEN_ANT 🐜👑' }); // "Thants"
    }).toThrowError('expected a value of type "taskRole"');
  });
  test('Custom type "taskRole" converts input correctly', () => {
    expect(
      client.getRole.convertInputValues(
        { role: TASK_ROLE_WORKER },
        client.getRole.input,
      ),
    ).toEqual([TASK_ROLES.WORKER]);
    expect(
      client.getRole.convertInputValues(
        { role: TASK_ROLE_EVALUATOR },
        client.getRole.input,
      ),
    ).toEqual([TASK_ROLES.EVALUATOR]);
    expect(
      client.getRole.convertInputValues(
        { role: TASK_ROLE_MANAGER },
        client.getRole.input,
      ),
    ).toEqual([TASK_ROLES.MANAGER]);
  });
  test('Custom type "taskRole" converts output correctly', () => {
    expect(
      client.getRole.convertOutputValues(new BigNumber(TASK_ROLES.WORKER)),
    ).toEqual({
      role: TASK_ROLE_WORKER,
    });
    expect(
      client.getRole.convertOutputValues(new BigNumber(TASK_ROLES.EVALUATOR)),
    ).toEqual({
      role: TASK_ROLE_EVALUATOR,
    });
    expect(
      client.getRole.convertOutputValues(new BigNumber(TASK_ROLES.MANAGER)),
    ).toEqual({
      role: TASK_ROLE_MANAGER,
    });
    expect(
      client.getRole.convertOutputValues(padLeft(`0x${TASK_ROLES.WORKER}`, 64)),
    ).toEqual({
      role: TASK_ROLE_WORKER,
    });
    // Bad/missing output values should be null
    expect(client.getRole.convertOutputValues(new BigNumber(4))).toEqual({
      role: null,
    });
    expect(client.getRole.convertOutputValues('WORKER_ANT 🐜👑')).toEqual({
      role: null, // "Blants"
    });
    expect(client.getRole.convertOutputValues()).toEqual({ role: null });
  });
});
