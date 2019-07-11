// An example action using the "setTaskEvaluatorRole" method
module.exports = async (colonyClient, taskId, address) => {

  // Start the operation to set the task evaluator role
  const operation = await colonyClient.setTaskEvaluatorRole.startOperation({
    taskId,
    address,
  });

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to the mock database
  DATABASE.operations.setTaskEvaluatorRole = operationJSON;

};
