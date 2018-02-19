import Sender from './Sender';
import ColonyClient from '../ColonyClient';

import isAddress from '../validators/isAddress';

type Params = { address: string };

export default class Authority extends Sender<Params, {}, ColonyClient> {
  static parseParams({ address }: Params = {}) {
    return [address];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.authority;
  }
  get estimateFn() {
    return this.client.contract.estimate.authority;
  }
  async validate({ address }: Params) {
    return this._validate(isAddress(address));
  }
}
