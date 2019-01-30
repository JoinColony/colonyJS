/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';
import createSandbox from 'jest-sandbox';
import { padLeft } from 'web3-utils';

import '../paramTypes';
import {
  TASK_ROLES,
  WORKER_ROLE,
  EVALUATOR_ROLE,
  MANAGER_ROLE,
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
    input: [['role', 'role']],
    output: [['role', 'role']],
  });

  test('Custom type "role" validates correctly', () => {
    expect(client.getRole.validate({ role: WORKER_ROLE })).toBe(true);
    expect(client.getRole.validate({ role: EVALUATOR_ROLE })).toBe(true);
    expect(client.getRole.validate({ role: MANAGER_ROLE })).toBe(true);

    expect(() => {
      client.getRole.validate({ role: 'QUEEN_ANT 🐜👑' }); // "Thants"
    }).toThrowError('expected a value of type "role"');
  });
  test('Custom type "role" converts input correctly', () => {
    expect(
      client.getRole.convertInputValues(
        { role: WORKER_ROLE },
        client.getRole.input,
      ),
    ).toEqual([TASK_ROLES.WORKER]);
    expect(
      client.getRole.convertInputValues(
        { role: EVALUATOR_ROLE },
        client.getRole.input,
      ),
    ).toEqual([TASK_ROLES.EVALUATOR]);
    expect(
      client.getRole.convertInputValues(
        { role: MANAGER_ROLE },
        client.getRole.input,
      ),
    ).toEqual([TASK_ROLES.MANAGER]);
  });
  test('Custom type "role" converts output correctly', () => {
    expect(
      client.getRole.convertOutputValues(new BigNumber(TASK_ROLES.WORKER)),
    ).toEqual({
      role: WORKER_ROLE,
    });
    expect(
      client.getRole.convertOutputValues(new BigNumber(TASK_ROLES.EVALUATOR)),
    ).toEqual({
      role: EVALUATOR_ROLE,
    });
    expect(
      client.getRole.convertOutputValues(new BigNumber(TASK_ROLES.MANAGER)),
    ).toEqual({
      role: MANAGER_ROLE,
    });
    expect(
      client.getRole.convertOutputValues(padLeft(`0x${TASK_ROLES.WORKER}`, 64)),
    ).toEqual({
      role: WORKER_ROLE,
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
