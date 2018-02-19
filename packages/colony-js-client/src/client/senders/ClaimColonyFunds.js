import Sender from './Sender';
import ColonyClient from '../ColonyClient';
import isAddress from '../validators/isAddress';

type Params = { token: string };

// TODO update validation
export default class ClaimColonyFunds extends Sender<Params, {}, ColonyClient> {
  static parseParams({ token }: Params = {}) {
    return [token];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.claimColonyFunds;
  }
  get estimateFn() {
    return this.client.contract.estimate.claimColonyFunds;
  }
  async validate({ token }: Params) {
    // TODO check token is a thing?
    return this._validate(isAddress(token));
  }
}
