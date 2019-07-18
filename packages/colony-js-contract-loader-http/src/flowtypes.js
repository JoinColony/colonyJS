/* @flow */

import type { Transform } from '@colony/colony-js-contract-loader';

export type ConstructorArgs = {
  endpoint: string,
  transform: Transform,
  network?: string,
};
