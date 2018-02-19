import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO update validation
export default class CancelTask extends Sender<{ taskId: number }, {}, ColonyClient> {
  static parseParams({ taskId } = {}) {
    return [taskId];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.cancelTask;
  }
  get estimateFn() {
    return this.client.contract.estimate.cancelTask;
  }
  async validate({ taskId }) {
    return this.client.checkForTask(taskId);
  }
}
