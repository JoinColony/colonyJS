// Import big number library
const BN = require('bn.js');

// An example using the setTaskWorkerPayout operation
const setTaskWorkerPayout = async (colonyClient, taskId, amount, token) => {

  // Start set task worker payout operation
  const operation = await colonyClient.setTaskWorkerPayout.startOperation({
    taskId,
    token,
    amount: new BN(amount),
  })

  // Check out the logs to see the operation payload
  console.log('Operation Payload:', operation.payload);

  // Check out the logs to see the operation signers
  console.log('Operation Signers:', operation._signers);

  // Check out the logs to see the operation required signees
  console.log('Operation Required Signees:', operation._requiredSignees);

  // Serialize operation into JSON format
  const operationJSON = operation.toJSON()

  // Store task worker payout operation in mock database
  DATABASE.setTaskWorkerPayoutOperationJSON = operationJSON;

  // Get the task worker payout
  const payout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'WORKER',
    token,
  });

  // Check out the logs to see the task worker payout
  console.log('Task Payout Amount:', payout.amount.toNumber());

  // Return the task worker payout
  return payout;

}

// Export setTaskWorkerPayout example
module.exports = setTaskWorkerPayout;
