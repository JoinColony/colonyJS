import { bigNumberify } from 'web3-utils';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO update validation
export default class GenerateSecret extends Sender<
  { salt: string, value: number },
  {},
  ColonyClient,
> {
  static parseParams({ salt, value } = {}) {
    return [salt, bigNumberify(value)];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.generateSecret;
  }
  get estimateFn() {
    return this.client.contract.estimate.generateSecret;
  }
  // eslint-disable-next-line class-methods-use-this
  async validate({ value }) {
    // TODO anything else?
    return value > 0;
  }
}
