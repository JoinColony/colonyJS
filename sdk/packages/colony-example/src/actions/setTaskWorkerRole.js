// An example action using the setTaskWorkerRole method
const setTaskWorkerRole = async (colonyClient, taskId, user) => {

  // Start the operation to set the task worker role
  const operation = await colonyClient.setTaskWorkerRole.startOperation({
    taskId,
    user,
  });

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to the mock database
  DATABASE.operations.setTaskWorkerRole = operationJSON;
}

// Export setTaskWorkerRole action
module.exports = setTaskWorkerRole;
