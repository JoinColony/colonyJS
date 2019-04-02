// An example action using the setTaskEvaluatorPayout operation
const setTaskEvaluatorPayout = async (colonyClient, taskId, amount, token) => {

  // Start the operation to set the task evaluator payout
  const operation = await colonyClient.setTaskEvaluatorPayout.startOperation({
    taskId,
    token,
    amount,
  })

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize operation into JSON format
  const operationJSON = operation.toJSON()

  // Save the operation to the mock database
  DATABASE.operations.setTaskEvaluatorPayout = operationJSON;

}

// Export setTaskEvaluatorPayout action
module.exports = setTaskEvaluatorPayout;
