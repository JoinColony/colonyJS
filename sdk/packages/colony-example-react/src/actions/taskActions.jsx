import BN from 'bn.js'
import { sha3 } from 'web3-utils';
import { store } from '../index'
import * as actions from '../constants/actions'
import { setStatePots } from './fundingActions'
import * as ecp from '../helpers/ecp'
import * as ms from '../helpers/multisig'

// cancelTask

export const cancelTask = (colonyClient, taskId) => ({
  type: actions.CANCEL_TASK,
  payload: (async () => {

    // Start multisignature operation
    const operation = await colonyClient.cancelTask.startOperation({
      taskId,
    })

    // Sign multisignature operation
    const tx = await ms.signOperation(operation);

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(cancelTaskSuccess(success))
  })
  .catch(error => {
    store.dispatch(cancelTaskError(error.message))
  }),
})

export const cancelTaskError = (error) => ({
  type: actions.CANCEL_TASK_ERROR,
  payload: error,
})

export const cancelTaskSuccess = (success) => ({
  type: actions.CANCEL_TASK_SUCCESS,
  payload: success,
})

// claimPayout

export const claimPayout = (colonyClient, taskId, role) => ({
  type: actions.CLAIM_PAYOUT,
  payload: (async () => {

    // Claim payout
    const tx = await colonyClient.claimPayout.send({
      taskId,
      role,
      token: colonyClient.tokenClient.contract.address,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(claimPayoutSuccess(success))
  })
  .catch(error => {
    store.dispatch(claimPayoutError(error.message))
  }),
})

export const claimPayoutError = (error) => ({
  type: actions.CLAIM_PAYOUT_ERROR,
  payload: error,
})

export const claimPayoutSuccess = (success) => ({
  type: actions.CLAIM_PAYOUT_SUCCESS,
  payload: success,
})

// createTask

export const createTask = (colonyClient, task) => ({
  type: actions.CREATE_TASK,
  payload: (async () => {

    // Declare new task
    const newTask = {}

    // Initialize extended protocol
    await ecp.init()

    // Create specification hash
    newTask.specificationHash = await ecp.saveHash(task.specification)

    // Stop extended protocol
    await ecp.stop()

    // Set domain id if provided
    if (task.domainId) newTask.domainId = task.domainId

    // Set skill id if provided
    if (task.skillId) newTask.skillId = task.skillId

    // Set due date if provided
    if (task.dueDate) newTask.dueDate = new Date(task.dueDate)

    // Create task
    const tx = await colonyClient.createTask.send(newTask)

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return task id
    return tx.eventData.taskId

  })()
  .then(taskId => {

    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(createTaskSuccess(true))
  })
  .catch(error => {
    store.dispatch(createTaskError(error.message))
  }),
})

export const createTaskError = (error) => ({
  type: actions.CREATE_TASK_ERROR,
  payload: error,
})

export const createTaskSuccess = (success) => ({
  type: actions.CREATE_TASK_SUCCESS,
  payload: success,
})

// finalizeTask

export const finalizeTask = (colonyClient, taskId) => ({
  type: actions.FINALIZE_TASK,
  payload: (async () => {

    // Finalize task
    const tx = await colonyClient.finalizeTask.send({ taskId })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(finalizeTaskSuccess(success))
  })
  .catch(error => {
    store.dispatch(finalizeTaskError(error.message))
  }),
})

export const finalizeTaskError = (error) => ({
  type: actions.FINALIZE_TASK_ERROR,
  payload: error,
})

export const finalizeTaskSuccess = (success) => ({
  type: actions.FINALIZE_TASK_SUCCESS,
  payload: success,
})

// fundTask

export const fundTask = (colonyClient, taskId, amount) => ({
  type: actions.FUND_TASK,
  payload: (async () => {

    // Get task
    const task = await colonyClient.getTask.call({ taskId })

    // Get task domain
    const domain = await colonyClient.getDomain.call({
      domainId: task.domainId,
    })

    // Move funds between pots
    const tx = await colonyClient.moveFundsBetweenPots.send({
      fromPot: domain.potId,
      toPot: task.potId,
      amount: new BN(amount),
      token: colonyClient.tokenClient.contract.address,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(setStatePots(null))
    store.dispatch(setStateTasks(null))
    store.dispatch(fundTaskSuccess(success))
  })
  .catch(error => {
    store.dispatch(fundTaskError(error.message))
  }),
})

export const fundTaskError = (error) => ({
  type: actions.FUND_TASK_ERROR,
  payload: error,
})

export const fundTaskSuccess = (success) => ({
  type: actions.FUND_TASK_SUCCESS,
  payload: success,
})

// getMultisigOperations

export const getMultisigOperations = (colonyClient, taskId) => ({
  type: actions.GET_MULTISIG_OPERATIONS,
  payload: (async () => {

    // Get operations
    const multisigOperations = await ms.getOperations(colonyClient, taskId)

    // Return operations
    return multisigOperations

  })()
  .then(multisigOperations => {
    store.dispatch(setStateOperations(multisigOperations))
    store.dispatch(getMultisigOperationsSuccess(true))
  })
  .catch(error => {
    store.dispatch(getMultisigOperationsError(error.message))
  }),
})

export const getMultisigOperationsError = (error) => ({
  type: actions.GET_MULTISIG_OPERATIONS_ERROR,
  payload: error,
})

export const getMultisigOperationsSuccess = (success) => ({
  type: actions.GET_MULTISIG_OPERATIONS_SUCCESS,
  payload: success,
})

// getTask

export const getTask = (colonyClient, taskId) => ({
  type: actions.GET_TASK,
  payload: (async () => {

    // Get task
    const task = await colonyClient.getTask.call({ taskId })

    // Initialize extended protocol
    await ecp.init()

    // Get specification from specification hash
    const specification = await ecp.getHash(task.specificationHash)

    // Stop extended protocol
    await ecp.stop()

    // Declare roles
    const roles = {}

    // Get evaluator
    roles.evaluator = await colonyClient.getTaskRole.call({
      taskId,
      role: 'EVALUATOR',
    })

    // Get manager
    roles.manager = await colonyClient.getTaskRole.call({
      taskId,
      role: 'MANAGER',
    })

    // Get worker
    roles.worker = await colonyClient.getTaskRole.call({
      taskId,
      role: 'WORKER',
    })

    // Get pot balance
    const potBalance = await colonyClient.getFundingPotBalance.call({
      potId: task.potId,
      token: colonyClient.tokenClient.contract.address,
    })

    // Get evaluator payout
    const evaluatorPayout = await colonyClient.getTaskPayout.call({
      taskId,
      role: 'EVALUATOR',
      token: colonyClient.tokenClient.contract.address,
    })

    // Get manager payout
    const managerPayout = await colonyClient.getTaskPayout.call({
      taskId,
      role: 'MANAGER',
      token: colonyClient.tokenClient.contract.address,
    })

    // Get worker payout
    const workerPayout = await colonyClient.getTaskPayout.call({
      taskId,
      role: 'WORKER',
      token: colonyClient.tokenClient.contract.address,
    })

    // Declare deliverable
    let deliverable = {}

    // Check deliverable hash
    if (task.deliverableHash) {

      // Initialize extended protocol
      await ecp.init()

      // Get deliverable from deliverable hash
      deliverable = await ecp.getHash(task.deliverableHash)

      // Stop extended protocol
      await ecp.stop()

    } else {

      // Set deliverable message
      deliverable.message = null

    }

    // Get ratings
    const ratings = await colonyClient.getTaskWorkRatings.call({ taskId })

    // Return task
    return {
      ...task,
      deliverable,
      payouts: {
        evaluator: evaluatorPayout.amount.toNumber(),
        manager: managerPayout.amount.toNumber(),
        worker: workerPayout.amount.toNumber(),
      },
      pot: {
        balance: potBalance.balance.toNumber(),
      },
      ratings,
      roles: { ...roles },
      specification: { ...specification },
    }

  })()
  .then(task => {
    store.dispatch(setStateTask(task))
    store.dispatch(getTaskSuccess(true))
  })
  .catch(error => {
    store.dispatch(getTaskError(error.message))
  }),
})

export const getTaskError = (error) => ({
  type: actions.GET_TASK_ERROR,
  payload: error,
})

export const getTaskSuccess = (success) => ({
  type: actions.GET_TASK_SUCCESS,
  payload: success,
})

// getTasks

export const getTasks = (colonyClient) => ({
  type: actions.GET_TASKS,
  payload: (async () => {

    // Set tasks
    let tasks = []

    // Set task id
    let taskId = 1

    // Get task count
    const { count: taskCount } = await colonyClient.getTaskCount.call()

    // Loop through tasks
    while (taskId <= taskCount) {

      // Get task
      const task = await colonyClient.getTask.call({ taskId })

      // Initialize extended protocol
      await ecp.init()

      // Get specification from specification hash
      const specification = await ecp.getHash(task.specificationHash)

      // Stop extended protocol
      await ecp.stop()

      // Add task to tasks
      tasks.push({
        ...task,
        specification: { ...specification },
      })

      // Increment task id
      taskId++

    }

    // Return tasks
    return tasks

  })()
  .then(tasks => {
    store.dispatch(setStateTasks(tasks))
    store.dispatch(getTasksSuccess(true))
  })
  .catch(error => {
    store.dispatch(getTasksError(error.message))
  }),
})

export const getTasksError = (error) => ({
  type: actions.GET_TASKS_ERROR,
  payload: error,
})

export const getTasksSuccess = (success) => ({
  type: actions.GET_TASKS_SUCCESS,
  payload: success,
})

// removeTaskRole

export const removeTaskRole = (colonyClient, taskId, role) => ({
  type: actions.REMOVE_TASK_ROLE,
  payload: (async () => {

    // Check evaluator role
    if (role === 'EVALUATOR') {

      // Set evaluator role
      const operation = await colonyClient.removeTaskEvaluatorRole.startOperation({
        taskId,
      })

      // Sign multisignature operation
      const tx = await ms.signOperation(operation);

      // Return successful
      return tx.successful

    }

    // Check worker role
    if (role === 'WORKER') {

      // Set worker role
      const operation = await colonyClient.removeTaskWorkerRole.startOperation({
        taskId,
      })

      // Handle multisignature operation
      const tx = await ms.signOperation(operation);

      // Return successful
      return tx.successful

    }

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(removeTaskRoleSuccess(success))
  })
  .catch(error => {
    store.dispatch(removeTaskRoleError(error.message))
  }),
})

export const removeTaskRoleError = (error) => ({
  type: actions.REMOVE_TASK_ROLE_ERROR,
  payload: error,
})

export const removeTaskRoleSuccess = (success) => ({
  type: actions.REMOVE_TASK_ROLE_SUCCESS,
  payload: success,
})

// revealRating

export const revealRating = (colonyClient, taskId, role, rating) => ({
  type: actions.REVEAL_RATING,
  payload: (async () => {

    // Set salt
    const salt = sha3('secret')

    // Generate secret
    const { secret } = await colonyClient.generateSecret.call({
      salt: sha3(salt),
      value: rating,
    })

    // Reveal task work rating
    const tx = await colonyClient.revealTaskWorkRating.send({
      taskId,
      role,
      rating,
      salt,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(revealRatingSuccess(success))
  })
  .catch(error => {
    store.dispatch(revealRatingError(error.message))
  }),
})

export const revealRatingError = (error) => ({
  type: actions.REVEAL_RATING_ERROR,
  payload: error,
})

export const revealRatingSuccess = (success) => ({
  type: actions.REVEAL_RATING_SUCCESS,
  payload: success,
})

// setStateOperations

export const setStateOperations = (operations) => ({
  type: actions.SET_STATE_MULTISIG_OPERATIONS,
  payload: operations,
})

// setStateTask

export const setStateTask = (task) => ({
  type: actions.SET_STATE_TASK,
  payload: task,
})

// setStateTasks

export const setStateTasks = (tasks) => ({
  type: actions.SET_STATE_TASKS,
  payload: tasks,
})

// setTaskDetails

export const setTaskDetails = (colonyClient, taskId, details) => ({
  type: actions.SET_TASK_DETAILS,
  payload: (async () => {

    let tx

    // Check domain id
    if (details.domainId) {

      // Format domain id
      const domainId = details.domainId.toNumber()

      // Set task domain
      const operation = await colonyClient.setTaskDomain.startOperation({
        taskId,
        domainId,
      })

      // Handle multisignature operation
      tx = await ms.signOperation(operation);

    }

    // Check skill id
    if (details.skillId) {

      // Format skillId
      const skillId = Number(details.skillId)

      // Set task skill
      const operation = await colonyClient.setTaskSkill.startOperation({ taskId, skillId })

      // Handle multisignature operation
      tx = await ms.signOperation(operation);

    }

    // Check specification
    if (details.specification) {

      // Initialize extended protocol
      await ecp.init()

      // Create specification hash
      const specificationHash = await ecp.saveHash(details.specification)

      // Stop extended protocol
      await ecp.stop()

      // Set task brief
      const operation = await colonyClient.setTaskBrief.startOperation({
        taskId,
        specificationHash,
      })

      // Handle multisignature operation
      tx = await ms.signOperation(operation);

    }

    // Check due date
    if (details.dueDate) {

      // Format due date
      const dueDate = new Date(details.dueDate)

      // Set task due date
      const operation = await colonyClient.setTaskDueDate.startOperation({ taskId, dueDate })

      // Handle multisignature operation
      tx = await ms.signOperation(operation);

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(setTaskDetailsSuccess(success))
  })
  .catch(error => {
    store.dispatch(setTaskDetailsError(error.message))
  }),
})

export const setTaskDetailsError = (error) => ({
  type: actions.SET_TASK_DETAILS_ERROR,
  payload: error,
})

export const setTaskDetailsSuccess = (success) => ({
  type: actions.SET_TASK_DETAILS_SUCCESS,
  payload: success,
})

// setTaskPayouts

export const setTaskPayouts = (colonyClient, taskId, managerAmount, evaluatorAmount, workerAmount) => ({
  type: actions.SET_TASK_PAYOUTS,
  payload: (async () => {

    // Set task payouts
    const tx = await colonyClient.setAllTaskPayouts.send({
      taskId,
      token: colonyClient.tokenClient.contract.address,
      managerAmount: new BN(managerAmount),
      evaluatorAmount: new BN(evaluatorAmount),
      workerAmount: new BN(workerAmount),
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(setTaskPayoutsSuccess(success))
  })
  .catch(error => {
    store.dispatch(setTaskPayoutsError(error.message))
  }),
})

export const setTaskPayoutsError = (error) => ({
  type: actions.SET_TASK_PAYOUTS_ERROR,
  payload: error,
})

export const setTaskPayoutsSuccess = (success) => ({
  type: actions.SET_TASK_PAYOUTS_SUCCESS,
  payload: success,
})

// setTaskRole

export const setTaskRole = (colonyClient, taskId, role, user) => ({
  type: actions.SET_TASK_ROLE,
  payload: (async () => {

    // Declare transaction
    let tx

    // Check manager role
    if (role === 'MANAGER') {

      // Set task manager role
      const operation = await colonyClient.setTaskManagerRole.startOperation({
        taskId,
        user,
      })

      // Handle multisignature operation
      tx = await ms.signOperation(operation);

    }

    // Check evaluator role
    if (role === 'EVALUATOR') {

      // Set task evaluator role
      const operation = await colonyClient.setTaskEvaluatorRole.startOperation({
        taskId,
        user,
      })

      // Handle multisignature operation
      tx = await ms.signOperation(operation);

    }

    // Check worker role
    if (role === 'WORKER') {

      // Set worker role
      const operation = await colonyClient.setTaskWorkerRole.startOperation({
        taskId,
        user,
      })

      // Handle multisignature operation
      tx = await ms.signOperation(operation);

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(setTaskRoleSuccess(success))
  })
  .catch(error => {
    store.dispatch(setTaskRoleError(error.message))
  }),
})

export const setTaskRoleError = (error) => ({
  type: actions.SET_TASK_ROLE_ERROR,
  payload: error,
})

export const setTaskRoleSuccess = (success) => ({
  type: actions.SET_TASK_ROLE_SUCCESS,
  payload: success,
})

// signTask

export const signTask = (colonyClient, taskId) => ({
  type: actions.SIGN_TASK,
  payload: (async () => {

    // Get multisignature operations
    const operations = await ms.getOperations(colonyClient, taskId)

    // Loop through operations
    await Promise.all(operations.map(async operation => {

      // Sign multisignature operation
      await ms.signOperation(operation)

    }))

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(getMultisigOperations(colonyClient, taskId))
    store.dispatch(signTaskSuccess(true))
  })
  .catch(error => {
    store.dispatch(signTaskError(error.message))
  }),
})

export const signTaskError = (error) => ({
  type: actions.SIGN_TASK_ERROR,
  payload: error,
})

export const signTaskSuccess = (success) => ({
  type: actions.SIGN_TASK_SUCCESS,
  payload: success,
})

// submitRating

export const submitRating = (colonyClient, taskId, role, rating) => ({
  type: actions.SUBMIT_RATING,
  payload: (async () => {

    // Set salt
    const salt = sha3('secret')

    // Set value
    const value = rating

    // Generate secret
    const { secret } = await colonyClient.generateSecret.call({
      salt,
      value,
    })

    // Submit task work rating
    const tx = await colonyClient.submitTaskWorkRating.send({
      taskId,
      role,
      secret,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(submitRatingSuccess(success))
  })
  .catch(error => {
    store.dispatch(submitRatingError(error.message))
  }),
})

export const submitRatingError = (error) => ({
  type: actions.SUBMIT_RATING_ERROR,
  payload: error,
})

export const submitRatingSuccess = (success) => ({
  type: actions.SUBMIT_RATING_SUCCESS,
  payload: success,
})

// submitWork

export const submitWork = (colonyClient, taskId, deliverable) => ({
  type: actions.SUBMIT_WORK,
  payload: (async () => {

    // Initialize extended protocol
    await ecp.init()

    // Create deliverable hash
    const deliverableHash = await ecp.saveHash(deliverable)

    // Stop extended protocol
    await ecp.stop()

    // Submit task deliverable
    const tx = await colonyClient.submitTaskDeliverable.send({
      taskId,
      deliverableHash,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getTask(colonyClient, taskId))
    store.dispatch(submitWorkSuccess(success))
  })
  .catch(error => {
    store.dispatch(submitWorkError(error.message))
  }),
})

export const submitWorkError = (error) => ({
  type: actions.SUBMIT_WORK_ERROR,
  payload: error,
})

export const submitWorkSuccess = (success) => ({
  type: actions.SUBMIT_WORK_SUCCESS,
  payload: success,
})
