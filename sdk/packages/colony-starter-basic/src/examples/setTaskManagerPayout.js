// Import big number library
const BN = require('bn.js');

// An example using the setTaskManagerPayout operation
const setTaskManagerPayout = async (colonyClient, taskId, amount, token) => {

  // Start set task manager payout operation
  const operation = await colonyClient.setTaskManagerPayout.startOperation({
    taskId,
    token,
    amount: new BN(amount),
  })

  // Check out the logs to see the operation required signees
  console.log('Required Signees:', operation.requiredSignees);

  // Serialize operation into JSON format
  const operationJSON = operation.toJSON()

  // Store task manager payout operation in mock database
  DATABASE.operations.setTaskManagerPayout = operationJSON;

}

// Export setTaskManagerPayout example
module.exports = setTaskManagerPayout;
