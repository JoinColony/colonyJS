// Import database
import db from './db'

// A helper method for getting the operataions
exports.getOperations = async (colonyClient, taskId) => {

  // Declare operations
  const operations = []

  // Set colony address
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

  return operations

}

// A helper method for restoring and signing an operation
exports.restoreAndSignOperation = async (colonyClient, taskId, taskMethod) => {

  // Get the operatation
  const operationJSON = await db.get(taskMethod)

  // Restore operation
  const operation = await taskMethod.restoreOperation(
    operationJSON,
  )

  exports.signOperation(operation)

}

// A helper method for signing an operation
exports.signOperation = async operation => {

  // Sign operation
  await operation.sign()

  // Check missing signees
  if (operation.missingSignees.length === 0) {

    // Send operation
    const transaction = await operation.send()

    // Delete operation
    db.remove(operation.sender.name)

    // Return transaction
    return transaction

  } else {

    // Serialize operation into JSON format
    const operationJSON = operation.toJSON()

    // Save operation
    db.set(operation.sender.name, operationJSON)

    // Return successful
    return { successful: true }

  }

}
