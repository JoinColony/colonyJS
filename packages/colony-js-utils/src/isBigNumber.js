/* @flow */

import BigNumber from 'bn.js';

export default function isBigNumber(value: any) {
  return (
    BigNumber.isBN(value) ||
    // XXX Some libraries (cough *ethers* cough) wrap BigNumbers in a way
    // that breaks `isBN`; this is a workaround for that issue:
    (value != null &&
      Object.hasOwnProperty.call(value, 'bn') &&
      // eslint-disable-next-line no-underscore-dangle
      BigNumber.isBN(value._bn))
  );
}
