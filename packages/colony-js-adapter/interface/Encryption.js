/* @flow */

export type Encryption = {
  client?: string,
  entropy?: string,
  iv?: string,
  mnemonic?: string,
  path?: string,
  scrypt?: {
    N?: number, // Cost
    p?: number, // Parallelisation
    r?: number, // Block size
  },
  salt?: string,
  uuid?: string,
};
