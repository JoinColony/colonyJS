import multiHash from '../utils/ipfs-hash-helpers';
import { getNetworkClient } from '../utils/network-client-helpers';
import { WORKER_ROLE, MANAGER_ROLE } from '../../packages/colony-js-client';

const taskDescription = 'Integration Tests Task';

const managerAddress = Object.keys(global.ganacheAccounts.private_keys)[0];
const workerAddress = Object.keys(global.ganacheAccounts.private_keys)[1];

test('Set the role for a task', async t => {
  /*
     * Get the network client
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
     * Get the existing colony
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
     * Check the task has manager role assigned
     *
     * Roles have now changed, so you have to provide an actual string: (uppercase)
     * - `MANAGER`
     * - `EVALUATOR`
     * - `WORKER`
     *
     *  Or you could just import them from the `colony-js-client` package via
     *  the costants:
     *  - `MANAGER_ROLE`
     *  - `EVALUATOR_ROLE`
     *  - `WORKER_ROLE`
     *
     * @NOTE Convert addresses to lowercase
     *
     * This will normalize them when checking one against the other
     */
  const {
    address: managerRoleAddress,
  } = await managerColonyClient.getTaskRole.call({
    taskId: newTaskId,
    role: MANAGER_ROLE,
  });
  t.is(managerRoleAddress.toLowerCase(), managerAddress.toLowerCase());
  /*
     * Check that the task does not have a worker role assigned
     */
  const {
    address: workerRoleNull,
  } = await managerColonyClient.getTaskRole.call({
    taskId: newTaskId,
    role: WORKER_ROLE,
  });
  t.is(workerRoleNull, null);
  /*
     * Set another address as the worker
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
  t.true(setWorkerRoleTransaction.successful);
  /*
     * Check that the task now has a worker role, and is the correct one
     */
  const {
    address: workerRoleAddress,
  } = await managerColonyClient.getTaskRole.call({
    taskId: newTaskId,
    role: WORKER_ROLE,
  });
  t.is(workerRoleAddress.toLowerCase(), workerAddress.toLowerCase());
});
