// An example action using the setTaskManagerPayout operation
const setTaskManagerPayout = async (colonyClient, taskId, amount, token) => {

  // Start the operation to set the task manager payout
  const operation = await colonyClient.setTaskManagerPayout.startOperation({
    taskId,
    token,
    amount,
  })

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize operation into JSON format
  const operationJSON = operation.toJSON()

  // Save the operation to the mock database
  DATABASE.operations.setTaskManagerPayout = operationJSON;

}

// Export setTaskManagerPayout action
module.exports = setTaskManagerPayout;
