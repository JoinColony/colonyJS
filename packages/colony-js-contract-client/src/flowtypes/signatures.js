/* @flow */

import { SIGNING_MODES } from '../constants';

export type SigningMode = $Values<typeof SIGNING_MODES>;

export type Signature = {
  sigR: string,
  sigS: string,
  sigV: number,
};

export type Signers = {
  [signeeAddress: string]: Signature & { mode: SigningMode },
};

export type CombinedSignatures = {
  sigR: Array<string>,
  sigS: Array<string>,
  sigV: Array<number>,
  mode: Array<SigningMode>,
};
