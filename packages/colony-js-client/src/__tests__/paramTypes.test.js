/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import BigNumber from 'bn.js';
import ContractClient from '@colony/colony-js-contract-client';
import {
  isBigNumber,
  isValidAddress,
  makeAssert,
} from '@colony/colony-js-utils';
import createSandbox from 'jest-sandbox';

import '../paramTypes';
import { ROLES, WORKER_ROLE, EVALUATOR_ROLE, MANAGER_ROLE } from '../constants';

jest.mock('@colony/colony-js-utils', () => ({
  isBigNumber: jest.fn().mockImplementation(() => true),
  isValidAddress: jest.fn().mockImplementation(() => true),
  makeAssert: jest.fn().mockImplementation(() =>
    jest.fn().mockImplementation((assertion, message) => {
      if (assertion) return true;
      throw new Error(message);
    }),
  ),
}));

describe('Custom param types', () => {
  const sandbox = createSandbox();

  const contract = {};
  const adapter = {};

  beforeEach(() => {
    sandbox.clear();
    isBigNumber.mockClear();
    isValidAddress.mockClear();
    makeAssert.mockClear();
  });

  const client = new ContractClient({ contract, adapter });

  client.addCaller('roleCaller', {
    input: [['role', 'role']],
    output: [['role', 'role']],
  });
  client.addCaller('addressArrayCaller', {
    input: [['addresses', 'addressArray']],
    output: [['addresses', 'addressArray']],
  });
  client.addCaller('bignumberArrayCaller', {
    input: [['bignumbers', 'bignumberArray']],
    output: [['bignumbers', 'bignumberArray']],
  });

  test('Custom type "role" validates correctly', () => {
    expect(client.roleCaller.validate({ role: WORKER_ROLE })).toBe(true);
    expect(client.roleCaller.validate({ role: EVALUATOR_ROLE })).toBe(true);
    expect(client.roleCaller.validate({ role: MANAGER_ROLE })).toBe(true);

    expect(() => {
      client.roleCaller.validate({ role: 'QUEEN_ANT 🐜👑' }); // "Thants"
    }).toThrowError('expected a value of type "role"');
  });
  test('Custom type "role" converts input correctly', () => {
    expect(client.roleCaller._parseInputValues({ role: WORKER_ROLE })).toEqual([
      ROLES.WORKER,
    ]);
    expect(
      client.roleCaller._parseInputValues({ role: EVALUATOR_ROLE }),
    ).toEqual([ROLES.EVALUATOR]);
    expect(client.roleCaller._parseInputValues({ role: MANAGER_ROLE })).toEqual(
      [ROLES.MANAGER],
    );
  });
  test('Custom type "role" converts output correctly', () => {
    expect(
      client.roleCaller._getOutputValues(new BigNumber(ROLES.WORKER)),
    ).toEqual({
      role: WORKER_ROLE,
    });
    expect(
      client.roleCaller._getOutputValues(new BigNumber(ROLES.EVALUATOR)),
    ).toEqual({
      role: EVALUATOR_ROLE,
    });
    expect(
      client.roleCaller._getOutputValues(new BigNumber(ROLES.MANAGER)),
    ).toEqual({
      role: MANAGER_ROLE,
    });
    // Bad/missing output values should be null
    expect(client.roleCaller._getOutputValues(new BigNumber(4))).toEqual({
      role: null,
    });
    isBigNumber.mockImplementation(() => false);
    expect(client.roleCaller._getOutputValues('WORKER_ANT 🐜👑')).toEqual({
      role: null, // "Blants"
    });
    expect(client.roleCaller._getOutputValues()).toEqual({ role: null });
  });
  test('Custom type "addressArray" validates correctly', () => {
    const expectError = input => {
      expect(() => {
        client.addressArrayCaller.validate({ addresses: input });
      }).toThrowError('expected a value of type "addressArray"');
    };
    const expectValid = input =>
      expect(client.addressArrayCaller.validate({ addresses: input })).toBe(
        true,
      );
    isValidAddress.mockImplementation(() => true);
    // At least one item is required
    expectError([]);
    // Single valid address
    expectValid(['a valid address']);
    expect(isValidAddress).toHaveBeenCalledWith('a valid address');
    expect(isValidAddress).toHaveBeenCalledTimes(1);
    isValidAddress.mockClear();
    // Multiple valid addresses
    expectValid(['a valid address', 'another valid', 'valid']);
    expect(isValidAddress).toHaveBeenCalledTimes(3);
    isValidAddress.mockClear();
    // One invalid address
    isValidAddress
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false);
    expectError(['a valid address', 'not a valid address']);
    expect(isValidAddress).toHaveBeenCalledTimes(2);
    isValidAddress.mockClear();
  });
  test('Custom type "addressArray" converts input correctly', () => {
    expect(
      client.addressArrayCaller._parseInputValues({
        addresses: ['a valid address', 'another valid'],
      }),
    ).toEqual([['a valid address', 'another valid']]);
  });
  test('Custom type "addressArray" converts output correctly', () => {
    isValidAddress.mockImplementation(() => true);
    expect(
      client.addressArrayCaller._getOutputValues([
        ['a valid address', 'another valid'],
      ]),
    ).toEqual({
      addresses: ['a valid address', 'another valid'],
    });
    expect(isValidAddress).toHaveBeenCalledTimes(2);
    isValidAddress.mockClear();
    isValidAddress
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false);
    // Bad/missing output values should be null
    expect(
      client.addressArrayCaller._getOutputValues([
        ['a valid address', 'an invalid address'],
      ]),
    ).toEqual({
      addresses: ['a valid address', null],
    });
    expect(isValidAddress).toHaveBeenCalledTimes(2);
    isValidAddress.mockClear();
  });
});
