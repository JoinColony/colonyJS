// An example action using the setTaskDueDate operation
const setTaskDueDate = async (colonyClient, taskId, dueDate) => {

  // Start the operation to set the task due date
  const operation = await colonyClient.setTaskDueDate.startOperation({
    taskId,
    dueDate,
  });

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to the mock database
  DATABASE.operations.setTaskDueDate = operationJSON;

}

// Export setTaskDueDate action
module.exports = setTaskDueDate;
