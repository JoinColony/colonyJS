import multiHash from '../utils/ipfs-hash-helpers';
import { getNetworkClient } from '../utils/network-client-helpers';

import { CANCELLED_TASK_STATUS } from '../../src/lib/colonyJS/packages/colony-js-client';

const taskDescription = 'Integration Tests Task';

const managerAddress = Object.keys(global.ganacheAccounts.private_keys)[0];

/*
 * Increase the async timeout
 */
jest.setTimeout(30000);

describe('`ColonyClient` is able to', () => {
  test('Cancel a task', async () => {
    /*
     * Get the network client
     *
     * First one is the default, manager account
     * The second one is manually specified to be used as a worker account
     */
    const managerNetworkClient = await getNetworkClient(managerAddress);
    /*
     * Get the number of colonies. This will also represent the last created
     * colony's Id which we created in the previous step.
     */
    const {
      count: lastColonyId,
    } = await managerNetworkClient.getColonyCount.call();
    /*
     * Get the existing colony, again, for both manager and worker accounts
     */
    const managerColonyClient = await managerNetworkClient.getColonyClient(
      lastColonyId,
    );
    /*
     * This is a little jury-rigged, since later tests might create new colonies,
     * which in turn will make this value to not be reliable.
     *
     * But as it stands, this is the Id of the latest domain we created in this
     * colony during the `domain` integration tests.
     */
    const {
      count: latestDomainId,
    } = await managerColonyClient.getDomainCount.call();
    /*
     * Create the task under the last domain create in this colony.
     * (See above about the caveat on this)
     */
    const newTaskTransaction = await managerColonyClient.createTask.send({
      specificationHash: multiHash.encode(taskDescription),
      domainId: latestDomainId,
    });
    const {
      eventData: { taskId: newTaskId },
    } = newTaskTransaction;
    /*
     * Cancel the task
     */
    await managerColonyClient.cancelTask.send({ taskId: newTaskId });
    /*
     * Get the task and verify it is really cancelled
     */
    const cancelledTask = await managerColonyClient.getTask.call({
      taskId: newTaskId,
    });
    expect(cancelledTask).toHaveProperty('status', CANCELLED_TASK_STATUS);
  });
});
