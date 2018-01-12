/* @flow */

export interface Contract {
  estimate: {
    [string]: Function,
  };
  functions: {
    [string]: Function,
  };
}
