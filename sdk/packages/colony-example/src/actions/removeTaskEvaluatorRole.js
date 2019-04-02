// An example action using the removeTaskEvaluatorRole method
const removeTaskEvaluatorRole = async (colonyClient, taskId, user) => {

  // Update the evaluator role for the task
  const operation = await colonyClient.removeTaskEvaluatorRole.startOperation({
    taskId,
    user,
  });

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to the mock database
  DATABASE.operations.removeTaskEvaluatorRole = operationJSON;

}

// Export removeTaskEvaluatorRole action
module.exports = removeTaskEvaluatorRole;
