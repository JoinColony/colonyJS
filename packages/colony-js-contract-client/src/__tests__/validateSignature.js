/* eslint-env jest */

import { isHex } from 'web3-utils';
import isPlainObject from 'lodash.isplainobject';

import validateSignature from '../modules/validateSignature';

jest.mock('web3-utils', () => ({
  isHex: jest.fn().mockReturnValue(true),
}));
jest.mock('lodash.isplainobject', () => jest.fn().mockReturnValue(true));

describe('validateSignature', () => {
  const signature = {
    sigR: '0x3810976581519370936455002930541734832270292486195672859026812854',
    sigS: '0x2717400036569076491467357688191371198012187172992592815125647808',
    sigV: 28,
  };

  test('Input type and contents are validated', () => {
    expect(validateSignature(signature)).toBe(true);

    expect(isPlainObject).toHaveBeenCalledWith(signature);
    expect(isHex).toHaveBeenCalledTimes(2);
    expect(isHex).toHaveBeenLastCalledWith(signature.sigS);

    expect(() => {
      validateSignature(Object.assign({}, signature, { sigV: 'not valid' }));
    }).toThrowError('v must be an integer');
  });
});
