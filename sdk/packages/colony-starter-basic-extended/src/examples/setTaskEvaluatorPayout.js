// An example using the setTaskEvaluatorPayout operation
const setTaskEvaluatorPayout = async (colonyClient, taskId, amount, token) => {

  // Start set task evaluator payout operation
  const operation = await colonyClient.setTaskEvaluatorPayout.startOperation({
    taskId,
    token,
    amount,
  })

  // Check out the logs to see the operation missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize operation into JSON format
  const operationJSON = operation.toJSON()

  // Store task evaluator payout operation in mock database
  DATABASE.operations.setTaskEvaluatorPayout = operationJSON;

}

// Export setTaskEvaluatorPayout example
module.exports = setTaskEvaluatorPayout;
