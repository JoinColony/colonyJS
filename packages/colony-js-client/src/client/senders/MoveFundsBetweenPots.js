import Sender from './Sender';
import ColonyClient from '../ColonyClient';

export default class MoveFundsBetweenPots extends Sender<
  {
    fromPot: number,
    toPot: number,
    amount: number,
    token: string,
  },
  {},
  ColonyClient,
> {
  static parseParams({ fromPot, toPot, amount, token } = {}) {
    return [fromPot, toPot, amount, token];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.moveFundsBetweenPots;
  }
  get estimateFn() {
    return this.client.contract.estimate.moveFundsBetweenPots;
  }
  validate({ token }) {
    // TODO what if the pots don't exist?
    // TODO what if the amount is negative?
    // TODO what if the amount exceeds what's available?
    return this.client.constructor.checkIsAddress(token);
  }
}
