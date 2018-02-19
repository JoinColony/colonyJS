import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';

import Sender from './Sender';
import ColonyNetworkClient from '../ColonyNetworkClient';

// TODO update validation
export default class CreateColony extends Sender<
  { name: string },
  { colonyId: number },
  ColonyNetworkClient,
> {
  static parseParams({ name } = {}) {
    return [utf8ToHex(name)];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {
      ColonyAdded({ id }: { id: BigNumber }) {
        return {
          colonyId: id.toNumber(),
        };
      },
    };
  }
  get sendFn() {
    return this.client.contract.createColony;
  }
  get estimateFn() {
    return this.client.contract.estimate.createColony;
  }
  async validate({ key }) {
    const existing = await this.client.getColonyAddress({
      key: utf8ToHex(key),
    });
    if (existing) {
      throw new Error(`A Colony with the key ${key} already exists`);
    }
    return true;
  }
}
