// An example using the setTaskWorkerRole method
const setTaskWorkerRole = async (colonyClient, taskId, user) => {

  // Update the evaluator role of the task
  const operation = await colonyClient.setTaskWorkerRole.startOperation({
    taskId,
    user,
  });

  // Check out the logs to see the operation required signees
  console.log('Required Signees:', operation.requiredSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to our mock database
  DATABASE.setTaskWorkerRoleOperationJSON = operationJSON;
}

// Export setTaskWorkerRole example
module.exports = setTaskWorkerRole;
