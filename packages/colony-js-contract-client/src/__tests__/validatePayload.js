/* eslint-env jest */

import validatePayload from '../modules/validatePayload';

describe('validatePayload', () => {
  const validPayload = {
    data: '0x00000001',
    destinationAddress: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
    sourceAddress: '0x281055afc982d96fab65b3a49cac8b878184cb16',
    value: 1,
    nonce: 5,
  };

  test('Input type is validated', () => {
    [undefined, null, [], new Set()].forEach(input => {
      expect(() => validatePayload(input)).toThrowError(
        'Payload must be an object',
      );
    });
  });

  test('Input contents are validated', () => {
    expect(validatePayload(validPayload)).toBe(true);

    expect(() => {
      validatePayload(
        Object.assign({}, validPayload, {
          data: '9817298377272',
        }),
      );
    }).toThrowError('data must be a hex string');

    expect(() => {
      validatePayload(
        Object.assign({}, validPayload, {
          destinationAddress: 'My invalid address',
        }),
      );
    }).toThrowError('destinationAddress must be a valid address');

    expect(() => {
      validatePayload(
        Object.assign({}, validPayload, {
          sourceAddress: 'My other invalid address',
        }),
      );
    }).toThrowError('sourceAddress must be a valid address');

    expect(() => {
      validatePayload(
        Object.assign({}, validPayload, {
          value: '2',
        }),
      );
    }).toThrowError('value must be a positive number');
  });
});
