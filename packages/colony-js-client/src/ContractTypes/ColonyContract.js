/* @flow */

import Contract from '../Contract';

export default class ColonyContract extends Contract {
  functions: {
    setToken: (string, ?Object) => Promise<void>,
  };
}
