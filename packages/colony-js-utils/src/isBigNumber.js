/* @flow */

import BigNumber from 'bn.js';

export default function isBigNumber(value: any) {
  return (
    BigNumber.isBN(value) ||
    // XXX Some libraries (cough *ethers* cough) wrap BigNumbers in a way
    // that breaks `isBN`; this is a workaround for that issue:
    // eslint-disable-next-line no-underscore-dangle
    (typeof value === 'object' && value._bn && BigNumber.isBN(value._bn))
  );
}
