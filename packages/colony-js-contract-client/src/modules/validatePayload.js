/* @flow */

import { isHexStrict } from 'web3-utils';
import { isValidAddress, makeAssert } from '@colony/colony-js-utils';
import isPlainObject from 'lodash.isplainobject';

const assert = makeAssert('Invalid payload');

/**
 * Given input that should be a payload object, validate it and return true.
 */
export default function validatePayload(payload: any) {
  assert(isPlainObject(payload), 'Payload must be an object');

  const { data, destinationAddress, sourceAddress, value } = payload || {};

  assert(isHexStrict(data), 'data must be a hex string');

  assert(
    isValidAddress(destinationAddress),
    'destinationAddress must be a valid address',
  );

  assert(
    isValidAddress(sourceAddress),
    'sourceAddress must be a valid address',
  );

  assert(
    Number(parseInt(value, 10)) === value && value >= 0,
    'value must be a positive number',
  );

  return true;
}
