import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO update validation
export default class AssignWorkRating extends Sender<
  { taskId: number, rating: number },
  {},
  ColonyClient,
> {
  static parseParams({ taskId, rating } = {}) {
    return [taskId, rating];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.assignWorkRating;
  }
  get estimateFn() {
    return this.client.contract.estimate.assignWorkRating;
  }
  async validate({ taskId }) {
    // TODO check rating within bounds
    return this.client.checkForTask(taskId);
  }
}
