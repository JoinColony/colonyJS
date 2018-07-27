// Import big number library
const BN = require('bn.js');

// An example using the setTaskEvaluatorPayout operation
const setTaskEvaluatorPayout = async (colonyClient, taskId, amount, token) => {

  // Start set task evaluator payout operation
  const operation = await colonyClient.setTaskEvaluatorPayout.startOperation({
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

  // Store task evaluator payout operation in mock database
  DATABASE.setTaskEvaluatorPayoutOperationJSON = operationJSON;

  // Get the task evaluator payout
  const payout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'EVALUATOR',
    token,
  });

  // Check out the logs to see the task evaluator payout
  console.log('Task Payout Amount:', payout.amount.toNumber());

  // Return the task evaluator payout
  return payout;

}

// Export setTaskEvaluatorPayout example
module.exports = setTaskEvaluatorPayout;
