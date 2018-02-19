import type BigNumber from 'bn.js';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO check param types
// TODO update validation
export default class MintTokens extends Sender<
  { wad: BigNumber },
  {},
  ColonyClient,
> {
  static parseParams({ wad } = {}) {
    return [wad];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {
      // TODO Transfer, Approval?
    };
  }
  get sendFn() {
    return this.client.contract.functions.mintTokens;
  }
  get estimateFn() {
    return this.client.contract.estimate.mintTokens;
  }
  // eslint-disable-next-line class-methods-use-this
  async validate({ wad }: { wad: BigNumber }) {
    return wad.gt(0);
  }
}
