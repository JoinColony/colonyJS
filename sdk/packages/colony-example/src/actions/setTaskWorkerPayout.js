// An example action using the "setTaskWorkerPayout" operation
module.exports = async (colonyClient, taskId, amount, token) => {

  // Start the operation to set task worker payout
  const operation = await colonyClient.setTaskWorkerPayout.startOperation({
    taskId,
    token,
    amount,
  })

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize operation into JSON format
  const operationJSON = operation.toJSON()

  // Save the operation to the mock database
  DATABASE.operations.setTaskWorkerPayout = operationJSON;

};
