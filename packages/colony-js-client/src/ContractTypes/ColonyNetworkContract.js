/* @flow */

import Contract from '../Contract';

export default class ColonyNetworkContract extends Contract {
  functions: {
    createColony: (any, ?Object) => Promise<void>,
    getColony: (any, ?Object) => Promise<[string]>
  }
}
