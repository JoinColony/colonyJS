// import big number
import BN from 'bn.js'

// import extended protocol
import ecp from '../ecp'

// import web3 utils library
const web3Utils = require('web3-utils');

// cancelTask

export const cancelTask = async (colonyClient, taskId) => {

  // start cancel task operation
  const cancelTaskOperation = await colonyClient.cancelTask.startOperation({ taskId })

  // serialize operation into JSON format
  const cancelTaskOperationJSON = cancelTaskOperation.toJSON()

  // sign cancel task
  await signCancelTask(colonyClient, cancelTaskOperationJSON)

  // return id
  return taskId

}

// claimPayout

export const claimPayout = async (colonyClient, taskId, role) => {

  const token = colonyClient.tokenClient.contract.address

  // claim payout
  const tx = await colonyClient.claimPayout.send({
    taskId,
    role,
    token,
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return true
  return true

}

// createTask

export const createTask = async (colonyClient, task) => {

  // set formatted task
  const formattedTask = {}

  // initialize extended protocol
  await ecp.init()

  // create specification hash
  formattedTask.specificationHash = await ecp.saveTaskSpecification(task.specification)

  // stop extended protocol
  await ecp.stop()

  // check domain id
  if (task.domainId) {

    // append domain id
    formattedTask.domainId = task.domainId
  }

  // check skill id
  if (task.skillId) {

    // append skill id
    formattedTask.skillId = task.skillId
  }

  // check due date
  if (task.dueDate) {

    // append formatted due date
    formattedTask.dueDate = new Date(task.dueDate)
  }

  // create task
  const tx = await colonyClient.createTask.send({ ...formattedTask })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return id
  return tx.eventData.taskId

}

// finalizeTask

export const finalizeTask = async (colonyClient, taskId) => {

  // finalize task
  const tx = await colonyClient.finalizeTask.send({ taskId })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return successful
  return tx.successful

}

// fundTask

export const fundTask = async (colonyClient, taskId, amount) => {

  // set token
  const token = colonyClient.tokenClient.contract.address

  // get task
  const task = await getTask(colonyClient, taskId)

  // get task domain
  const domain = await colonyClient.getDomain.call({
    domainId: task.domainId,
  })

  // move funds between pots
  const tx = await colonyClient.moveFundsBetweenPots.send({
    fromPot: domain.potId,
    toPot: task.potId,
    amount: new BN(amount),
    token,
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return true
  return true

}

// getTask

export const getTask = async (colonyClient, taskId) => {

  // get task
  const task = await colonyClient.getTask.call({ taskId })

  // initialize extended protocol
  await ecp.init()

  // get specification from specification hash
  const specification = await ecp.getTaskSpecification(task.specificationHash)

  // stop extended protocol
  await ecp.stop()

  // return task
  return {
    ...task,
    specification: {
      description: specification.description,
      title: specification.title,
    },
  }

}

// getTaskExtended

export const getTaskExtended = async (colonyClient, taskId) => {

  // get task
  const task = await getTask(colonyClient, taskId)

  // get evaluator
  const evaluator = await colonyClient.getTaskRole.call({
    taskId,
    role: 'EVALUATOR',
  })

  // get manager
  const manager = await colonyClient.getTaskRole.call({
    taskId,
    role: 'MANAGER',
  })

  // get worker
  const worker = await colonyClient.getTaskRole.call({
    taskId,
    role: 'WORKER',
  })

  // set pot id
  const potId = task.potId

  // set token
  const token = colonyClient.tokenClient.contract.address

  // get pot balance
  const potBalance = await colonyClient.getFundingPotBalance.call({
    potId,
    token,
  })

  // get evaluator payout
  const evaluatorPayout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'EVALUATOR',
    token,
  })

  // get manager payout
  const managerPayout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'MANAGER',
    token,
  })

  // get worker payout
  const workerPayout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'WORKER',
    token,
  })

  // initialize extended protocol
  await ecp.init()

  // set deliverable
  let deliverable = { message: null }

  // check deliverable hash
  if (task.deliverableHash) {

    // get deliverable from deliverable hash
    deliverable = await ecp.getTaskDeliverable(task.deliverableHash)

  }

  // stop extended protocol
  await ecp.stop()

  const ratings = await colonyClient.getTaskWorkRatings.call({ taskId })

  // return task
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
    roles: {
      evaluator,
      manager,
      worker,
    },
  }

}

// getMultisigOperations

export const getMultisigOperations = async (colonyClient, taskId) => {

  // set operations
  const operations = []

  // set colony address
  const colonyAddress = colonyClient.contract.address

  // set user address
  const userAddress = colonyClient.adapter.wallet.address.toLowerCase()

  // get JSON formatted cancel task operation from local storage
  const cancelTaskOperationJSON = localStorage.getItem('cancelTaskOperationJSON')

  // get JSON formatted task evaluator role operation from local storage
  const removeTaskEvaluatorRoleOperationJSON = localStorage.getItem('removeTaskEvaluatorRoleOperationJSON')

  // get JSON formatted task worker role operation from local storage
  const removeTaskWorkerRoleOperationJSON = localStorage.getItem('removeTaskWorkerRoleOperationJSON')

  // get JSON formatted task brief operation from local storage
  const setTaskBriefOperationJSON = localStorage.getItem('setTaskBriefOperationJSON')

  // get JSON formatted task domain operation from local storage
  const setTaskDomainOperationJSON = localStorage.getItem('setTaskDomainOperationJSON')

  // get JSON formatted task skill operation from local storage
  const setTaskSkillOperationJSON = localStorage.getItem('setTaskSkillOperationJSON')

  // get JSON formatted task due date operation from local storage
  const setTaskDueDateOperationJSON = localStorage.getItem('setTaskDueDateOperationJSON')

  // get JSON formatted task manager role operation from local storage
  const setTaskManagerRoleOperationJSON = localStorage.getItem('setTaskManagerRoleOperationJSON')

  // get JSON formatted task evaluator role operation from local storage
  const setTaskEvaluatorRoleOperationJSON = localStorage.getItem('setTaskEvaluatorRoleOperationJSON')

  // get JSON formatted task worker role operation from local storage
  const setTaskWorkerRoleOperationJSON = localStorage.getItem('setTaskWorkerRoleOperationJSON')

  // set cancelTaskOperation
  const cancelTaskOperation = JSON.parse(cancelTaskOperationJSON)

  // set setTaskBriefOperation
  const setTaskBriefOperation = JSON.parse(setTaskBriefOperationJSON)

  // set setTaskDomainOperation
  const setTaskDomainOperation = JSON.parse(setTaskDomainOperationJSON)

  // set setTaskSkillOperation
  const setTaskSkillOperation = JSON.parse(setTaskSkillOperationJSON)

  // set setTaskDueDateOperation
  const setTaskDueDateOperation = JSON.parse(setTaskDueDateOperationJSON)

  // set setTaskManagerRoleOperation
  const setTaskManagerRoleOperation = JSON.parse(setTaskManagerRoleOperationJSON)

  // set setTaskEvaluatorRoleOperation
  const setTaskEvaluatorRoleOperation = JSON.parse(setTaskEvaluatorRoleOperationJSON)

  // set setTaskWorkerRoleOperation
  const setTaskWorkerRoleOperation = JSON.parse(setTaskWorkerRoleOperationJSON)

  // set removeTaskEvaluatorRoleOperation
  const removeTaskEvaluatorRoleOperation = JSON.parse(removeTaskEvaluatorRoleOperationJSON)

  // set removeTaskWorkerRoleOperation
  const removeTaskWorkerRoleOperation = JSON.parse(removeTaskWorkerRoleOperationJSON)

  // check if cancel task operation exists for contract and task
  if (
    cancelTaskOperationJSON &&
    cancelTaskOperation.payload.sourceAddress === colonyAddress &&
    cancelTaskOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.cancelTask.restoreOperation(cancelTaskOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task brief operation exists for contract and task
  if (
    setTaskBriefOperationJSON &&
    setTaskBriefOperation.payload.sourceAddress === colonyAddress &&
    setTaskBriefOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.setTaskBrief.restoreOperation(setTaskBriefOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task domain operation exists for contract and task
  if (
    setTaskDomainOperationJSON &&
    setTaskDomainOperation.payload.sourceAddress === colonyAddress &&
    setTaskDomainOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.setTaskDomain.restoreOperation(setTaskDomainOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task skill operation exists for contract and task
  if (
    setTaskSkillOperationJSON &&
    setTaskSkillOperation.payload.sourceAddress === colonyAddress &&
    setTaskSkillOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.setTaskSkill.restoreOperation(setTaskSkillOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task due date operation exists for contract and task
  if (
    setTaskDueDateOperationJSON &&
    setTaskDueDateOperation.payload.sourceAddress === colonyAddress &&
    setTaskDueDateOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.setTaskDueDate.restoreOperation(setTaskDueDateOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task manager role operation exists for contract and task
  if (
    setTaskManagerRoleOperationJSON &&
    setTaskManagerRoleOperation.payload.sourceAddress === colonyAddress &&
    setTaskManagerRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.setTaskManagerRole.restoreOperation(setTaskManagerRoleOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task evaluator role operation exists for contract and task
  if (
    setTaskEvaluatorRoleOperationJSON &&
    setTaskEvaluatorRoleOperation.payload.sourceAddress === colonyAddress &&
    setTaskEvaluatorRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.setTaskEvaluatorRole.restoreOperation(setTaskEvaluatorRoleOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task worker role operation exists for contract and task
  if (
    setTaskWorkerRoleOperationJSON &&
    setTaskWorkerRoleOperation.payload.sourceAddress === colonyAddress &&
    setTaskWorkerRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.setTaskWorkerRole.restoreOperation(setTaskWorkerRoleOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task evaluator role operation exists for contract and task
  if (
    removeTaskEvaluatorRoleOperationJSON &&
    removeTaskEvaluatorRoleOperation.payload.sourceAddress === colonyAddress &&
    removeTaskEvaluatorRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.removeTaskEvaluatorRole.restoreOperation(removeTaskEvaluatorRoleOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // check if task worker role operation exists for contract and task
  if (
    removeTaskWorkerRoleOperationJSON &&
    removeTaskWorkerRoleOperation.payload.sourceAddress === colonyAddress &&
    removeTaskWorkerRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // restore operation
    const operation = await colonyClient.removeTaskWorkerRole.restoreOperation(removeTaskWorkerRoleOperationJSON)

    // check user
    if (operation.requiredSignees.includes(userAddress)) {

      // push operation
      operations.push(operation)

    }

  }

  // return operations
  return operations

}

// getTasks

export const getTasks = async (colonyClient) => {

  // get task count
  const { count: taskCount } = await colonyClient.getTaskCount.call()

  // set task id
  let taskId = 1

  // set tasks
  let tasks = []

  // get tasks
  while (taskId <= taskCount) {

    // get task
    const task = await getTask(colonyClient, taskId)

    // add task to tasks
    tasks.push(task)

    // increment task id
    taskId++

  }

  // return tasks
  return tasks

}

// removeTaskRole

export const removeTaskRole = async (colonyClient, taskId, role) => {

  // check evaluator role
  if (role === 'EVALUATOR') {

    // set task evaluator role
    const removeTaskEvaluatorRoleOperation = await colonyClient.removeTaskEvaluatorRole.startOperation({
      taskId,
    })

    // serialize operation into JSON format
    const removeTaskEvaluatorRoleOperationJSON = removeTaskEvaluatorRoleOperation.toJSON()

    // sign remove task evaluator role
    await signRemoveTaskEvaluatorRole(colonyClient, removeTaskEvaluatorRoleOperationJSON)

  }

  // check worker role
  if (role === 'WORKER') {

    // set task worker role
    const removeTaskWorkerRoleOperation = await colonyClient.removeTaskWorkerRole.startOperation({
      taskId,
    })

    // serialize operation into JSON format
    const removeTaskWorkerRoleOperationJSON = removeTaskWorkerRoleOperation.toJSON()

    // sign remove task worker role
    await signRemoveTaskWorkerRole(colonyClient, removeTaskWorkerRoleOperationJSON)

  }

  // return id
  return taskId

}

// revealRating

export const revealRating = async (colonyClient, taskId, role, rating) => {

  // set salt
  const salt = web3Utils.sha3('secret')

  // set value
  const value = rating

  // generate secret
  const { secret } = await colonyClient.generateSecret.call({ salt, value })

  // reveal task work rating
  const tx = await colonyClient.revealTaskWorkRating.send({ taskId, role, rating, salt })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return id
  return taskId

}

// setTaskBrief

export const setTaskBrief = async (colonyClient, taskId, specification) => {

  // initialize extended protocol
  await ecp.init()

  // create specification hash
  const specificationHash = await ecp.saveTaskSpecification(specification)

  // stop extended protocol
  await ecp.stop()

  // start set task brief operation
  const setTaskBriefOperation = await colonyClient.setTaskBrief.startOperation({
    taskId,
    specificationHash,
  })

  // serialize operation into JSON format
  const setTaskBriefOperationJSON = setTaskBriefOperation.toJSON()

  // sign task brief
  await signTaskBrief(colonyClient, setTaskBriefOperationJSON)

  // return id
  return taskId

}

// setTaskDomain

export const setTaskDomain = async (colonyClient, taskId, domainId) => {

  // start set task domain operation
  const setTaskDomainOperation = await colonyClient.setTaskDomain.startOperation({ taskId, domainId })

  // serialize operation into JSON format
  const setTaskDomainOperationJSON = setTaskDomainOperation.toJSON()

  // sign task domain
  await signTaskDomain(colonyClient, setTaskDomainOperationJSON)

  // return id
  return taskId

}

// setTaskSkill

export const setTaskSkill = async (colonyClient, taskId, skillId) => {

  // set task skill
  const setTaskSkillOperation = await colonyClient.setTaskSkill.startOperation({ taskId, skillId })

  // serialize operation into JSON format
  const setTaskSkillOperationJSON = setTaskSkillOperation.toJSON()

  // sign task skill
  await signTaskSkill(colonyClient, setTaskSkillOperationJSON)

  // return id
  return taskId

}

// setTaskDueDate

export const setTaskDueDate = async (colonyClient, taskId, dueDate) => {

  // start set task due date operation
  const setTaskDueDateOperation = await colonyClient.setTaskDueDate.startOperation({ taskId, dueDate })

  // check if required signees includes current user address
  if (setTaskDueDateOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign task due date operation
    await setTaskDueDateOperation.sign()

  }

  // check for missing signees
  if (setTaskDueDateOperation.missingSignees.length === 0) {

    // send task due date operation
    await setTaskDueDateOperation.send()

  } else {

    // serialize operation into JSON format
    const setTaskDueDateOperationJSON = setTaskDueDateOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskDueDateOperationJSON', setTaskDueDateOperationJSON)

  }

  // return id
  return taskId

}

// setTaskDetails

export const setTaskDetails = async (colonyClient, taskId, details) => {

  // check domain id
  if (details.domainId) {

    // format domain id
    const domainId = Number(details.domainId)

    // set task domain
    await setTaskDomain(colonyClient, taskId, domainId)

  }

  // check due date
  if (details.dueDate) {

    // format due date
    const dueDate = new Date(details.dueDate)

    // set task due date
    await setTaskDueDate(colonyClient, taskId, dueDate)

  }

  // check skill id
  if (details.skillId) {

    // format skillId
    const skillId = Number(details.skillId)

    // set task due date
    await setTaskSkill(colonyClient, taskId, skillId)

  }

  // check specification
  if (details.specification) {

    // set task brief
    await setTaskBrief(colonyClient, taskId, details.specification)

  }

  // return id
  return taskId

}

// setTaskPayouts

export const setTaskPayouts = async (colonyClient, taskId, managerAmount, evaluatorAmount, workerAmount) => {

  // start set task manager payout operation
  const setTaskPayouts =  await colonyClient.setAllTaskPayouts.send({
    taskId,
    token: colonyClient.tokenClient.contract.address,
    managerAmount: new BN(managerAmount),
    evaluatorAmount: new BN(evaluatorAmount),
    workerAmount: new BN(workerAmount),
  })

  // return true
  return true

}

// setTaskRole

export const setTaskRole = async (colonyClient, taskId, role, user) => {

  // check manager role
  if (role === 'MANAGER') {

    // set task manager role
    const setTaskManagerRoleOperation = await colonyClient.setTaskManagerRole.startOperation({
      taskId,
      user,
    })

    // serialize operation into JSON format
    const setTaskManagerRoleOperationJSON = setTaskManagerRoleOperation.toJSON()

    // sign set task manager role
    await signSetTaskManagerRole(colonyClient, setTaskManagerRoleOperationJSON)

  }

  // check evaluator role
  if (role === 'EVALUATOR') {

    // set task evaluator role
    const setTaskEvaluatorRoleOperation = await colonyClient.setTaskEvaluatorRole.startOperation({
      taskId,
      user,
    })

    // serialize operation into JSON format
    const setTaskEvaluatorRoleOperationJSON = setTaskEvaluatorRoleOperation.toJSON()

    // sign set task evaluator role
    await signSetTaskEvaluatorRole(colonyClient, setTaskEvaluatorRoleOperationJSON)

  }

  // check worker role
  if (role === 'WORKER') {

    // set task worker role
    const setTaskWorkerRoleOperation = await colonyClient.setTaskWorkerRole.startOperation({
      taskId,
      user,
    })

    // serialize operation into JSON format
    const setTaskWorkerRoleOperationJSON = setTaskWorkerRoleOperation.toJSON()

    // sign set task worker role
    await signSetTaskWorkerRole(colonyClient, setTaskWorkerRoleOperationJSON)

  }

  // return id
  return taskId

}

// signTask

export const signTask = async (colonyClient, taskId) => {

  // set address
  const address = colonyClient.contract.address

  // get JSON formatted cancel task operation from local storage
  const cancelTaskOperationJSON = localStorage.getItem('cancelTaskOperationJSON')

  // get JSON formatted task evaluator role operation from local storage
  const removeTaskEvaluatorRoleOperationJSON = localStorage.getItem('removeTaskEvaluatorRoleOperationJSON')

  // get JSON formatted task worker role operation from local storage
  const removeTaskWorkerRoleOperationJSON = localStorage.getItem('removeTaskWorkerRoleOperationJSON')

  // get JSON formatted task brief operation from local storage
  const setTaskBriefOperationJSON = localStorage.getItem('setTaskBriefOperationJSON')

  // get JSON formatted task domain operation from local storage
  const setTaskDomainOperationJSON = localStorage.getItem('setTaskDomainOperationJSON')

  // get JSON formatted task skill operation from local storage
  const setTaskSkillOperationJSON = localStorage.getItem('setTaskSkillOperationJSON')

  // get JSON formatted task due date operation from local storage
  const setTaskDueDateOperationJSON = localStorage.getItem('setTaskDueDateOperationJSON')

  // get JSON formatted task manager role operation from local storage
  const setTaskManagerRoleOperationJSON = localStorage.getItem('setTaskManagerRoleOperationJSON')

  // get JSON formatted task evaluator role operation from local storage
  const setTaskEvaluatorRoleOperationJSON = localStorage.getItem('setTaskEvaluatorRoleOperationJSON')

  // get JSON formatted task worker role operation from local storage
  const setTaskWorkerRoleOperationJSON = localStorage.getItem('setTaskWorkerRoleOperationJSON')

  // set cancelTaskOperation
  const cancelTaskOperation = JSON.parse(cancelTaskOperationJSON)

  // set setTaskBriefOperation
  const setTaskBriefOperation = JSON.parse(setTaskBriefOperationJSON)

  // set setTaskDomainOperation
  const setTaskDomainOperation = JSON.parse(setTaskDomainOperationJSON)

  // set setTaskSkillOperation
  const setTaskSkillOperation = JSON.parse(setTaskSkillOperationJSON)

  // set setTaskDueDateOperation
  const setTaskDueDateOperation = JSON.parse(setTaskDueDateOperationJSON)

  // set setTaskManagerRoleOperation
  const setTaskManagerRoleOperation = JSON.parse(setTaskManagerRoleOperationJSON)

  // set setTaskEvaluatorRoleOperation
  const setTaskEvaluatorRoleOperation = JSON.parse(setTaskEvaluatorRoleOperationJSON)

  // set setTaskWorkerRoleOperation
  const setTaskWorkerRoleOperation = JSON.parse(setTaskWorkerRoleOperationJSON)

  // set removeTaskEvaluatorRoleOperation
  const removeTaskEvaluatorRoleOperation = JSON.parse(removeTaskEvaluatorRoleOperationJSON)

  // set removeTaskWorkerRoleOperation
  const removeTaskWorkerRoleOperation = JSON.parse(removeTaskWorkerRoleOperationJSON)

  // check if cancel task operation exists for contract and task
  if (
    cancelTaskOperationJSON &&
    cancelTaskOperation.payload.sourceAddress === address &&
    cancelTaskOperation.payload.inputValues.taskId === taskId
  ) {

    // sign cancel task
    await signCancelTask(colonyClient, cancelTaskOperationJSON)

  }

  // check if task brief operation exists for contract and task
  if (
    setTaskBriefOperationJSON &&
    setTaskBriefOperation.payload.sourceAddress === address &&
    setTaskBriefOperation.payload.inputValues.taskId === taskId
  ) {

    // sign task brief
    await signTaskBrief(colonyClient, setTaskBriefOperationJSON)

  }

  // check if task domain operation exists for contract and task
  if (
    setTaskDomainOperationJSON &&
    setTaskDomainOperation.payload.sourceAddress === address &&
    setTaskDomainOperation.payload.inputValues.taskId === taskId
  ) {

    // sign task domain
    await signTaskDomain(colonyClient, setTaskDomainOperationJSON)

  }

  // check if task skill operation exists for contract and task
  if (
    setTaskSkillOperationJSON &&
    setTaskSkillOperation.payload.sourceAddress === address &&
    setTaskSkillOperation.payload.inputValues.taskId === taskId
  ) {

    // sign task skill
    await signTaskSkill(colonyClient, setTaskSkillOperationJSON)

  }

  // check if task due date operation exists for contract and task
  if (
    setTaskDueDateOperationJSON &&
    setTaskDueDateOperation.payload.sourceAddress === address &&
    setTaskDueDateOperation.payload.inputValues.taskId === taskId
  ) {

    // sign task due date
    await signTaskDueDate(colonyClient, setTaskDueDateOperationJSON)

  }

  // check if task manager role operation exists for contract and task
  if (
    setTaskManagerRoleOperationJSON &&
    setTaskManagerRoleOperation.payload.sourceAddress === address &&
    setTaskManagerRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // sign set task manager role
    await signSetTaskManagerRole(colonyClient, setTaskManagerRoleOperationJSON)

  }

  // check if task evaluator role operation exists for contract and task
  if (
    setTaskEvaluatorRoleOperationJSON &&
    setTaskEvaluatorRoleOperation.payload.sourceAddress === address &&
    setTaskEvaluatorRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // sign set task evaluator role
    await signSetTaskEvaluatorRole(colonyClient, setTaskEvaluatorRoleOperationJSON)

  }

  // check if task worker role operation exists for contract and task
  if (
    setTaskWorkerRoleOperationJSON &&
    setTaskWorkerRoleOperation.payload.sourceAddress === address &&
    setTaskWorkerRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // sign set task worker role
    await signSetTaskWorkerRole(colonyClient, setTaskWorkerRoleOperationJSON)

  }

  // check if task evaluator role operation exists for contract and task
  if (
    removeTaskEvaluatorRoleOperationJSON &&
    removeTaskEvaluatorRoleOperation.payload.sourceAddress === address &&
    removeTaskEvaluatorRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // sign remove task evaluator role
    await signRemoveTaskEvaluatorRole(colonyClient, removeTaskEvaluatorRoleOperationJSON)

  }

  // check if task worker role operation exists for contract and task
  if (
    removeTaskWorkerRoleOperationJSON &&
    removeTaskWorkerRoleOperation.payload.sourceAddress === address &&
    removeTaskWorkerRoleOperation.payload.inputValues.taskId === taskId
  ) {

    // sign remove task worker role
    await signRemoveTaskWorkerRole(colonyClient, removeTaskWorkerRoleOperationJSON)

  }

  // return id
  return taskId

}

// signCancelTask

export const signCancelTask = async (colonyClient, operationJSON) => {

  // restore operation
  const cancelTaskOperation = await colonyClient.cancelTask.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (cancelTaskOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task brief operation
    await cancelTaskOperation.sign()

  }

  // check for missing signees
  if (cancelTaskOperation.missingSignees.length === 0) {

    // send set task brief operation
    const tx = await cancelTaskOperation.send()

    // remove local storage item
    localStorage.removeItem('cancelTaskOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const cancelTaskOperationJSON = cancelTaskOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('cancelTaskOperationJSON', cancelTaskOperationJSON)

  }

  // return operation
  return cancelTaskOperation

}

// signTaskBrief

export const signTaskBrief = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskBriefOperation = await colonyClient.setTaskBrief.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskBriefOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task brief operation
    await setTaskBriefOperation.sign()

  }

  // check for missing signees
  if (setTaskBriefOperation.missingSignees.length === 0) {

    // send set task brief operation
    const tx = await setTaskBriefOperation.send()

    // remove local storage item
    localStorage.removeItem('setTaskBriefOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const setTaskBriefOperationJSON = setTaskBriefOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskBriefOperationJSON', setTaskBriefOperationJSON)

  }

  // return operation
  return setTaskBriefOperation

}

// signTaskDomain

export const signTaskDomain = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskDomainOperation = await colonyClient.setTaskDomain.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskDomainOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task brief operation
    await setTaskDomainOperation.sign()

  }

  // check for missing signees
  if (setTaskDomainOperation.missingSignees.length === 0) {

    // send set task domain operation
    const tx = await setTaskDomainOperation.send()

    // remove local storage item
    localStorage.removeItem('setTaskDomainOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const setTaskDomainOperationJSON = setTaskDomainOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskDomainOperationJSON', setTaskDomainOperationJSON)

  }

  // return operation
  return setTaskDomainOperation

}

// signTaskSkill

export const signTaskSkill = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskSkillOperation = await colonyClient.setTaskSkill.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskSkillOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task skill operation
    await setTaskSkillOperation.sign()

  }

  // check for missing signees
  if (setTaskSkillOperation.missingSignees.length === 0) {

    // send set task skill operation
    const tx = await setTaskSkillOperation.send()

    // remove local storage item
    localStorage.removeItem('setTaskSkillOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const setTaskSkillOperationJSON = setTaskSkillOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskSkillOperationJSON', setTaskSkillOperationJSON)

  }

  // return operation
  return setTaskSkillOperation

}

// signTaskDueDate

export const signTaskDueDate = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskDueDateOperation = await colonyClient.setTaskDueDate.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskDueDateOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task due date operation
    await setTaskDueDateOperation.sign()

  }

  // check for missing signees
  if (setTaskDueDateOperation.missingSignees.length === 0) {

    // send set task due date operation
    const tx = await setTaskDueDateOperation.send()

    // remove local storage item
    localStorage.removeItem('setTaskDueDateOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const setTaskDueDateOperationJSON = setTaskDueDateOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskDueDateOperationJSON', setTaskDueDateOperationJSON)

  }

  // return operation
  return setTaskDueDateOperation

}

// signSetTaskManagerRole

export const signSetTaskManagerRole = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskManagerRoleOperation = await colonyClient.setTaskManagerRole.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskManagerRoleOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task manager role operation
    await setTaskManagerRoleOperation.sign()

  }

  // check for missing signees
  if (setTaskManagerRoleOperation.missingSignees.length === 0) {

    // send set task manager role operation
    const tx = await setTaskManagerRoleOperation.send()

    // remove local storage item
    localStorage.removeItem('setTaskManagerRoleOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const setTaskManagerRoleOperationJSON = setTaskManagerRoleOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskManagerRoleOperationJSON', setTaskManagerRoleOperationJSON)

  }

  // return operation
  return setTaskManagerRoleOperation

}

// signSetTaskEvaluatorRole

export const signSetTaskEvaluatorRole = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskEvaluatorRoleOperation = await colonyClient.setTaskEvaluatorRole.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskEvaluatorRoleOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task evaluator role operation
    await setTaskEvaluatorRoleOperation.sign()

  }

  // check for missing signees
  if (setTaskEvaluatorRoleOperation.missingSignees.length === 0) {

    // send set task evaluator role operation
    const tx = await setTaskEvaluatorRoleOperation.send()

    // remove local storage item
    localStorage.removeItem('setTaskEvaluatorRoleOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const setTaskEvaluatorRoleOperationJSON = setTaskEvaluatorRoleOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskEvaluatorRoleOperationJSON', setTaskEvaluatorRoleOperationJSON)

  }

  // return operation
  return setTaskEvaluatorRoleOperation

}

// signSetTaskWorkerRole

export const signSetTaskWorkerRole = async (colonyClient, operationJSON) => {

  // restore operation
  const setTaskWorkerRoleOperation = await colonyClient.setTaskWorkerRole.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (setTaskWorkerRoleOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign set task worker role operation
    await setTaskWorkerRoleOperation.sign()

  }

  // check for missing signees
  if (setTaskWorkerRoleOperation.missingSignees.length === 0) {

    // send set task worker role operation
    const tx = await setTaskWorkerRoleOperation.send()

    // remove local storage item
    localStorage.removeItem('setTaskWorkerRoleOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const setTaskWorkerRoleOperationJSON = setTaskWorkerRoleOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('setTaskWorkerRoleOperationJSON', setTaskWorkerRoleOperationJSON)

  }

  // return operation
  return setTaskWorkerRoleOperation

}

// signRemoveTaskEvaluatorRole

export const signRemoveTaskEvaluatorRole = async (colonyClient, operationJSON) => {

  // restore operation
  const removeTaskEvaluatorRoleOperation = await colonyClient.removeTaskEvaluatorRole.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (removeTaskEvaluatorRoleOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign remove task evaluator role operation
    await removeTaskEvaluatorRoleOperation.sign()

  }

  // check for missing signees
  if (removeTaskEvaluatorRoleOperation.missingSignees.length === 0) {

    // send remove task evaluator role operation
    const tx = await removeTaskEvaluatorRoleOperation.send()

    // remove local storage item
    localStorage.removeItem('removeTaskEvaluatorRoleOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const removeTaskEvaluatorRoleOperationJSON = removeTaskEvaluatorRoleOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('removeTaskEvaluatorRoleOperationJSON', removeTaskEvaluatorRoleOperationJSON)

  }

  // return operation
  return removeTaskEvaluatorRoleOperation

}

// signRemoveTaskWorkerRole

export const signRemoveTaskWorkerRole = async (colonyClient, operationJSON) => {

  // restore operation
  const removeTaskWorkerRoleOperation = await colonyClient.removeTaskWorkerRole.restoreOperation(operationJSON)

  // check if required signees includes current user address
  if (removeTaskWorkerRoleOperation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())) {

    // sign remove task worker role operation
    await removeTaskWorkerRoleOperation.sign()

  }

  // check for missing signees
  if (removeTaskWorkerRoleOperation.missingSignees.length === 0) {

    // send remove task worker role operation
    const tx = await removeTaskWorkerRoleOperation.send()

    // remove local storage item
    localStorage.removeItem('removeTaskWorkerRoleOperationJSON')

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

  } else {

    // serialize operation into JSON format
    const removeTaskWorkerRoleOperationJSON = removeTaskWorkerRoleOperation.toJSON()

    // save operation to local storage
    localStorage.setItem('removeTaskWorkerRoleOperationJSON', removeTaskWorkerRoleOperationJSON)

  }

  // return operation
  return removeTaskWorkerRoleOperation

}

// submitRating

export const submitRating = async (colonyClient, taskId, role, rating) => {

  // set salt
  const salt = web3Utils.sha3('secret')

  // set value
  const value = rating

  // generate secret
  const { secret } = await colonyClient.generateSecret.call({ salt, value })

  // submit task work rating
  const tx = await colonyClient.submitTaskWorkRating.send({ taskId, role, secret })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return id
  return taskId

}

// submitWork

export const submitWork = async (colonyClient, taskId, deliverable) => {

  // initialize extended protocol
  await ecp.init()

  // create deliverable hash
  const deliverableHash = await ecp.saveTaskDeliverable(deliverable)

  // stop extended protocol
  await ecp.stop()

  // submit task deliverable
  const tx = await colonyClient.submitTaskDeliverable.send({ taskId, deliverableHash })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return id
  return taskId

}
