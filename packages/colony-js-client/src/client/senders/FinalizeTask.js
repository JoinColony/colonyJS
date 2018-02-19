import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO update validation
export default class FinalizeTask extends Sender<{ taskId: number }, {}, ColonyClient> {
  static parseParams({ taskId } = {}) {
    return [taskId];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.finalizeTask;
  }
  get estimateFn() {
    return this.client.contract.estimate.finalizeTask;
  }
  async validate({ taskId }) {
    // TODO any other checks we can make so we know it's ready?
    return this.client.checkForTask(taskId);
  }
}
