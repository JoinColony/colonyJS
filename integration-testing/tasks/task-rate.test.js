import { getNetworkClient } from '../utils/network-client-helpers';
import multiHash from '../utils/ipfs-hash-helpers';
import { WORKER_ROLE, MANAGER_ROLE } from '../../packages/colony-js-client';

const today = new Date();
const tommorow = new Date();
tommorow.setDate(today.getDate() + 1);

const taskDescription = 'Integration Tests Task';
const taskDeliverable = 'I solemnly swear I am up to no good.';

const managerAddress = Object.keys(global.ganacheAccounts.private_keys)[0];
const evaluatorAddress = Object.keys(global.ganacheAccounts.private_keys)[1];
const workerAddress = Object.keys(global.ganacheAccounts.private_keys)[2];

const ratingSalt = 'SaltySeaBass';
const managerRatingValue = 1;
const workerRatingValue = 2;

test('Rate a task by a worker and an evaluator', async t => {
  /*
     * Get the network client
     *
     * First one is the default, manager account
     * The second one is manually specified to be used as a evaluator account
     * and the third one is the worker account
     */
  const managerNetworkClient = await getNetworkClient(managerAddress);
  const evaluatorNetworkClient = await getNetworkClient(evaluatorAddress);
  const workerNetworkClient = await getNetworkClient(workerAddress);
  /*
     * Get the number of colonies. This will also represent the last created
     * colony's Id which we created in the previous step.
     */
  const {
    count: lastColonyId,
  } = await managerNetworkClient.getColonyCount.call();
  /*
     * Get the existing colony, again, for both manager, evaluator and worker accounts
     */
  const managerColonyClient = await managerNetworkClient.getColonyClient(
    lastColonyId,
  );
  const evaluatorColonyClient = await evaluatorNetworkClient.getColonyClient(
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
  t.true(setWorkerRoleTransaction.successful);
  /*
     * Begin a multisig operation by setting the new task due date
     */
  const multisigSetDueDateManager = await managerColonyClient.setTaskDueDate.startOperation(
    {
      taskId: newTaskId,
      dueDate: tommorow,
    },
  );
  /*
     * Sign the multisig operation as the manager.
     */
  await multisigSetDueDateManager.sign();
  /*
     * Backup the `setTaskDueDate` operation to JSON and import it in the worker's
     * client instance (so we can sign it with the worker)
     */
  const mutisigJsonBackupManager = multisigSetDueDateManager.toJSON();
  /*
     * Sign the multisig operation as the worker.
     */
  const multisigSetDueDateWorker = await workerColonyClient.setTaskDueDate.restoreOperation(
    mutisigJsonBackupManager,
  );
  await multisigSetDueDateWorker.sign();
  /*
     * Send the multisig transaction.
     */
  await multisigSetDueDateWorker.send();
  /*
      Remove the manager as the (default) evaluator for the task
     */
  const multisigRemoveEvaluatorRoleManager = await managerColonyClient.removeTaskEvaluatorRole.startOperation(
    {
      taskId: newTaskId,
    },
  );
  await multisigRemoveEvaluatorRoleManager.sign();
  const removeEvaluatorRoleManagerTx = await multisigRemoveEvaluatorRoleManager.send();
  t.true(removeEvaluatorRoleManagerTx.successful);
  /*
     * Set an evaluator for the task
     */
  const multisigSetEvaluatorRoleManager = await managerColonyClient.setTaskEvaluatorRole.startOperation(
    {
      taskId: newTaskId,
      user: evaluatorAddress,
    },
  );
  await multisigSetEvaluatorRoleManager.sign();
  const multisigSetEvaluatorRoleEvaluator = await evaluatorColonyClient.setTaskEvaluatorRole.restoreOperation(
    multisigSetEvaluatorRoleManager.toJSON(),
  );
  await multisigSetEvaluatorRoleEvaluator.sign();
  const setEvaluatorRoleTransaction = await multisigSetEvaluatorRoleEvaluator.send();
  t.true(setEvaluatorRoleTransaction.successful);
  /*
     * Submit the task's deliverable
     */
  await workerColonyClient.submitTaskDeliverable.send({
    taskId: newTaskId,
    deliverableHash: multiHash.encode(taskDeliverable),
  });
  /*
     * Generate a rating secret (as the worker) to rate the Manager
     */
  const {
    secret: managerRating,
  } = await workerColonyClient.generateSecret.call({
    salt: ratingSalt,
    value: managerRatingValue,
  });
  /*
     * Generate a rating secret (as the evaluator) to rate the Worker
     */
  const {
    secret: workerRating,
  } = await evaluatorColonyClient.generateSecret.call({
    salt: ratingSalt,
    value: workerRatingValue,
  });
  /*
     * Rate the Manager as the Worker
     */
  const managerRatingTransaction = await workerColonyClient.submitTaskWorkRating.send(
    { taskId: newTaskId, role: MANAGER_ROLE, secret: managerRating },
  );
  t.true(managerRatingTransaction.successful);
  /*
     * Rate the Worker as the Evaluator
     */
  const workerRatingTransaction = await evaluatorColonyClient.submitTaskWorkRating.send(
    { taskId: newTaskId, role: WORKER_ROLE, secret: workerRating },
  );
  t.true(workerRatingTransaction.successful);
  /*
     * The task should have two ratings submitted
     */
  const {
    count: taskRatingsCount,
  } = await managerColonyClient.getTaskWorkRatings.call({
    taskId: newTaskId,
  });
  t.is(taskRatingsCount, 2);
  /*
     * The ratings secrets submitted should match the ones generated
     */
  const {
    secret: managerRatingSecret,
  } = await managerColonyClient.getTaskWorkRatingSecret.call({
    taskId: newTaskId,
    role: MANAGER_ROLE,
  });
  t.is(managerRatingSecret, managerRating);
  const {
    secret: workerRatingSecret,
  } = await managerColonyClient.getTaskWorkRatingSecret.call({
    taskId: newTaskId,
    role: WORKER_ROLE,
  });
  t.is(workerRatingSecret, workerRating);
  /*
     * Worker and Evaluator should be able to reveal they're ratings
     */
  const managerRatingRevealTransaction = await workerColonyClient.revealTaskWorkRating.send(
    {
      taskId: newTaskId,
      role: MANAGER_ROLE,
      rating: managerRatingValue,
      salt: ratingSalt,
    },
  );
  t.true(managerRatingRevealTransaction.successful);
  const workerRatingRevealTransaction = await evaluatorColonyClient.revealTaskWorkRating.send(
    {
      taskId: newTaskId,
      role: WORKER_ROLE,
      rating: workerRatingValue,
      salt: ratingSalt,
    },
  );
  t.true(workerRatingRevealTransaction.successful);
});
