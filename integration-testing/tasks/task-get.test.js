import multiHash from '../utils/ipfs-hash-helpers';
import { getNetworkClient } from '../utils/network-client-helpers';

import { ACTIVE_TASK_STATUS } from '../../src/lib/colonyJS/packages/colony-js-client';

const taskDescription = 'Integration Tests Task';

/*
 * Increase the async timeout
 */
jest.setTimeout(10000);

describe('`ColonyClient` is able to', () => {
  test('Get a Task that exists in the Colony', async () => {
    /*
     * Get the network client
     */
    const networkClient = await getNetworkClient();
    /*
     * Get the number of colonies. This will also represent the last created
     * colony's Id which we created in the previous step.
     */
    const { count: lastColonyId } = await networkClient.getColonyCount.call();
    /*
     * Get the existing colony
     */
    const colonyClient = await networkClient.getColonyClient(lastColonyId);
    /*
     * This is a little jury-rigged, since later tests might create new colonies,
     * which in turn will make this value to not be reliable.
     *
     * But as it stands, this is the Id of the latest domain we created in this
     * colony during the `domain` integration tests.
     */
    const { count: latestDomainId } = await colonyClient.getDomainCount.call();
    /*
     * Create the task under the last domain create in this colony.
     * (See above about the caveat on this)
     */
    const {
      eventData: { taskId: newTaskId },
    } = await colonyClient.createTask.send({
      specificationHash: multiHash.encode(taskDescription),
      domainId: latestDomainId,
    });
    /*
     * Get the task
     */
    const existingTask = await colonyClient.getTask.call({
      taskId: newTaskId,
    });
    expect(existingTask).toBeInstanceOf(Object);
    expect(existingTask).toHaveProperty('id');
    /*
     * The task should not be finalized or cancelled
     *
     * This, again, is a little jury-rigged since some other tests that we might
     * add can change the latest task. but for the current purpouse this works.
     *
     * @TODO Make the get task test less fragile
     *
     * Most likely this will involve creating a new task specially just to read it.
     */
    expect(existingTask).toHaveProperty('status', ACTIVE_TASK_STATUS);
    /*
     * The task should have the correct speciification hash.
     */
    const { specificationHash: existingTaskSpecificationHash } = existingTask;
    expect(multiHash.decode(existingTaskSpecificationHash)).toMatch(
      taskDescription,
    );
  });
});
