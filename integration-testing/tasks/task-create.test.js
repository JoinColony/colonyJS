import multiHash from '../utils/ipfs-hash-helpers';
import { getNetworkClient } from '../utils/network-client-helpers';

const taskDescription = 'Integration Tests Task';

test('Create a new Task within the Colony', async t => {
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
     * Get the total number of tasks in this colony (so we can test against)
     */
  const { count: taskCountBefore } = await colonyClient.getTaskCount.call();
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
  const newTaskTransaction = await colonyClient.createTask.send({
    specificationHash: multiHash.encode(taskDescription),
    domainId: latestDomainId,
  });
  /*
     * Check that the transaction was successful
     */
  t.true(newTaskTransaction.successful);
  /*
     * Check the number of tasks. There should be one more.
     */
  const taskCountAfter = await colonyClient.getTaskCount.call();
  t.is(taskCountAfter.count, taskCountBefore + 1);
});
