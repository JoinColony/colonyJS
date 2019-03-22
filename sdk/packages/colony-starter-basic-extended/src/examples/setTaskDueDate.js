// An example using the setTaskDueDate operation
const setTaskDueDate = async (colonyClient, taskId, dueDate) => {

  // Start the operation to set the dueDate for the given task
  const operation = await colonyClient.setTaskDueDate.startOperation({
    taskId,
    dueDate,
  });

  // Check out the logs to see the operation missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to our mock database
  DATABASE.operations.setTaskDueDate = operationJSON;

}

// Export setTaskDueDate example
module.exports = setTaskDueDate;
