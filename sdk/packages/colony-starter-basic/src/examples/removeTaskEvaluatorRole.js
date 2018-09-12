// An example using the removeTaskEvaluatorRole method
const removeTaskEvaluatorRole = async (colonyClient, taskId, user) => {

  // Update the evaluator role of the task
  const operation = await colonyClient.removeTaskEvaluatorRole.startOperation({
    taskId,
    user,
  });

  // Check out the logs to see the operation required signees
  console.log('Required Signees:', operation.requiredSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to our mock database
  DATABASE.operations.removeTaskEvaluatorRole = operationJSON;
}

// Export removeTaskEvaluatorRole example
module.exports = removeTaskEvaluatorRole;
