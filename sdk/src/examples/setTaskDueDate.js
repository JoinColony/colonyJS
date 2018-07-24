// The following methods use Promises
const setTaskDueDate = async (colonyClient, taskId, dueDate) => {

  // start set task due date operation
  const setTaskDueDateOperation = await colonyClient.setTaskDueDate.startOperation({
    taskId,
    dueDate,
  })

  // check if required signees includes current user address
  if (setTaskDueDateOperation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

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
    STORED_OPERATIONS.setTaskDueDateOperationJSON = setTaskDueDateOperationJSON;

  }

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Return updated task
  return updatedTask;

}

module.exports = setTaskDueDate;
