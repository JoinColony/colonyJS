import multiHash from '../utils/ipfs-hash-helpers';
import { getNetworkClient } from '../utils/network-client-helpers';

/*
 * Increase the async timeout
 */
jest.setTimeout(30000);

const taskDescription = 'Integration Tests Task';
const taskBrief = 'This task intends to test multisig operations';

const managerAddress = Object.keys(global.ganacheAccounts.private_keys)[0];
const workerAddress = Object.keys(global.ganacheAccounts.private_keys)[1];

describe('`ColonyClient` is able to', () => {
  test('Set a task brief using a multisig', async () => {
    /*
     * Get the network client
     *
     * First one is the default, manager account
     * The second one is manually specified to be used as a worker account
     */
    const managerNetworkClient = await getNetworkClient(managerAddress);
    const workerNetworkClient = await getNetworkClient(workerAddress);
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
    const workerColonyClient = await workerNetworkClient.getColonyClient(
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
     * Set a worker for the task
     */
    const multisigSetWorkerRoleManager = await managerColonyClient.setTaskWorkerRole.startOperation(
      {
        taskId: newTaskId,
        user: workerAddress,
      },
    );
    await multisigSetWorkerRoleManager.sign();
    const multisigSetWorkerRoleWorker = await workerColonyClient.setTaskWorkerRole.restoreOperation(
      multisigSetWorkerRoleManager.toJSON(),
    );
    await multisigSetWorkerRoleWorker.sign();
    const setWorkerRoleTransaction = await multisigSetWorkerRoleWorker.send();
    expect(setWorkerRoleTransaction).toHaveProperty('successful', true);
    /*
     * Begin the multisig operation by setting the new task brief
     */
    const multisigSetBriefManager = await managerColonyClient.setTaskBrief.startOperation(
      {
        taskId: newTaskId,
        specificationHash: multiHash.encode(taskBrief),
      },
    );
    /*
     * Sign the multisig operation as the manager.
     */
    await multisigSetBriefManager.sign();
    /*
     * Check that the multisig operation has the required signees for it to be
     * approved.
     */
    const mutisigJsonBackup = multisigSetBriefManager.toJSON();
    const multisigSetBriefWorker = await workerColonyClient.setTaskBrief.restoreOperation(
      mutisigJsonBackup,
    );
    /*
     * Sign the multisig operation as the worker.
     */
    await multisigSetBriefWorker.sign();
    /*
     * Send the multisig transaction.
     */
    const setTaskBriefTransaction = await multisigSetBriefWorker.send();
    /*
     * Check that the transaction was successful
     */
    expect(setTaskBriefTransaction).toHaveProperty('successful', true);
  });
});
