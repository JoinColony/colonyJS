// An example using the setTaskEvaluatorRole method
const setTaskEvaluatorRole = async (colonyClient, taskId, user) => {

  // Update the evaluator role of the task
  const operation = await colonyClient.setTaskEvaluatorRole.startOperation({
    taskId,
    user,
  });

  // Check out the logs to see the operation missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to our mock database
  DATABASE.operations.setTaskEvaluatorRole = operationJSON;
}

// Export setTaskEvaluatorRole example
module.exports = setTaskEvaluatorRole;
