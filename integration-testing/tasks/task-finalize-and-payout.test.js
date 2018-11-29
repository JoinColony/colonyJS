import { bigNumberify } from 'ethers/utils';
import { getNetworkClient } from '../utils/network-client-helpers';
import { generateMoreColonyFunds } from '../utils/colony-client-helpers';
import multiHash from '../utils/ipfs-hash-helpers';
import {
  WORKER_ROLE,
  MANAGER_ROLE,
  FINALIZED_TASK_STATUS,
} from '../../src/lib/colonyJS/packages/colony-js-client';

/*
 * Increase the async timeout
 */
jest.setTimeout(6000000);

const today = new Date();
const tommorow = new Date();
tommorow.setDate(today.getDate() + 1);

const taskDescription = 'Integration Tests Task';
const taskDeliverable = 'I solemnly swear I am up to no good.';

const managerAddress = Object.keys(global.ganacheAccounts.private_keys)[0];
const evaluatorAddress = Object.keys(global.ganacheAccounts.private_keys)[1];
const workerAddress = Object.keys(global.ganacheAccounts.private_keys)[1];

const mainColonyPotId = 1;

const ratingSalt = 'SaltySeaBass';
const workerRatingValue = 3;
const managerRatingValue = 2;
const payoutValue = 10;

describe('`ColonyClient` is able to', () => {
  test("Claim a task's payout", async () => {
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
    expect(setWorkerRoleTransaction).toHaveProperty('successful', true);
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
    expect(removeEvaluatorRoleManagerTx).toHaveProperty('successful', true);
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
    expect(setEvaluatorRoleTransaction).toHaveProperty('successful', true);
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
    let mutisigJsonBackupManager = multisigSetDueDateManager.toJSON();
    /*
     * Sign the multisig operation as the worker.
     */
    const multisigSetDueDateWorker = await workerColonyClient.setTaskDueDate.restoreOperation(
      mutisigJsonBackupManager,
    );
    await multisigSetDueDateWorker.sign();
    await multisigSetDueDateWorker.send();
    /*
     * Get the current Colony's token address
     */
    const {
      address: colonyTokenAddress,
    } = await managerColonyClient.getToken.call();
    /*
     * Get the current task's pot id so we can move funds into it
     */
    const { potId: currentTaskPotId } = await managerColonyClient.getTask.call({
      taskId: newTaskId,
    });
    /*
     * Ensure we have enough funds into the main pot, by generating more (and claiming them for the colony)
     *
     * This is necessary since Jest might run this test before the tokens one, in which case this won't
     * have any funds to move around.
     */
    await generateMoreColonyFunds(managerColonyClient, 1000);
    /*
     * Move funds tot the current task's pot
     */
    const moveFundsToPotTransaction = await managerColonyClient.moveFundsBetweenPots.send(
      {
        fromPot: mainColonyPotId,
        toPot: currentTaskPotId,
        amount: bigNumberify(payoutValue + 1),
        token: colonyTokenAddress,
      },
    );
    expect(moveFundsToPotTransaction).toHaveProperty('successful', true);
    /*
     * Set the Task's payout
     */
    const multisigSetTaskPayoutManager = await managerColonyClient.setTaskWorkerPayout.startOperation(
      {
        taskId: newTaskId,
        token: colonyTokenAddress,
        amount: bigNumberify(payoutValue),
      },
    );
    /*
     * Sign the multisig operation as the manager.
     */
    await multisigSetTaskPayoutManager.sign();
    /*
     * Backup the `setTaskDueDate` operation to JSON and import it in the worker's
     * client instance (so we can sign it with the worker)
     */
    mutisigJsonBackupManager = multisigSetTaskPayoutManager.toJSON();
    /*
     * Sign the multisig operation as the worker.
     */
    const multisigSetTaskPayoutWorker = await workerColonyClient.setTaskDueDate.restoreOperation(
      mutisigJsonBackupManager,
    );
    await multisigSetTaskPayoutWorker.sign();
    await multisigSetTaskPayoutWorker.send();
    /*
     * Check if the payout was set on the task
     */
    const {
      amount: workerPayoutValue,
    } = await workerColonyClient.getTaskPayout.call({
      taskId: newTaskId,
      role: WORKER_ROLE,
      token: colonyTokenAddress,
    });
    expect(workerPayoutValue.toNumber()).toEqual(payoutValue);
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
     * Submit the rating for the manager
     */
    await workerColonyClient.submitTaskWorkRating.send({
      taskId: newTaskId,
      role: MANAGER_ROLE,
      secret: managerRating,
    });
    /*
     * Submit the rating for the worker
     */
    await evaluatorColonyClient.submitTaskWorkRating.send({
      taskId: newTaskId,
      role: WORKER_ROLE,
      secret: workerRating,
    });
    /*
     * Reveal the manager's rating
     */
    await managerColonyClient.revealTaskWorkRating.send({
      taskId: newTaskId,
      role: MANAGER_ROLE,
      rating: managerRatingValue,
      salt: ratingSalt,
    });
    /*
     * Reveal the worker's rating
     */
    await managerColonyClient.revealTaskWorkRating.send({
      taskId: newTaskId,
      role: WORKER_ROLE,
      rating: workerRatingValue,
      salt: ratingSalt,
    });
    /*
     * Finalize the task
     */
    const finalizeTaskTransaction = await managerColonyClient.finalizeTask.send(
      { taskId: newTaskId },
    );
    expect(finalizeTaskTransaction).toHaveProperty('successful', true);
    const {
      status: finalizedTaskStatus,
    } = await managerColonyClient.getTask.call({
      taskId: newTaskId,
    });
    expect(finalizedTaskStatus).toBe(FINALIZED_TASK_STATUS);
    /*
     * Claim your payout as the worker
     *
     * @TODO add a method to get custom token balances, like `web3`'s balanceOf
     *
     * Maybe build this strait into the wallet?
     *
     * This way we could check the users's balance before and after the payout
     */
    const claimWorkerPayoutTransaction = await workerColonyClient.claimPayout.send(
      {
        taskId: newTaskId,
        role: WORKER_ROLE,
        token: colonyTokenAddress,
      },
    );
    expect(claimWorkerPayoutTransaction).toHaveProperty('successful', true);
  });
});
