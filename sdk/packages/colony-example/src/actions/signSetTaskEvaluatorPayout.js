// Import the prerequisites
const executeTaskMultisig = require('../helpers/multisig');

// An example action using the setTaskEvaluatorPayout operation
const signSetTaskEvaluatorPayout = async (colonyClient, taskId, token) => {

  // Execute the task multisig operation
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskEvaluatorPayout,
    taskId,
  );

  // Get the task evaluator payout
  const payout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'EVALUATOR',
    token,
  });

  // Check out the logs to see the task evaluator payout
  console.log('Task Payout Amount:', payout.amount.toString());

  // Return the task evaluator payout
  return payout;

}

// Export signSetTaskEvaluatorPayout action
module.exports = signSetTaskEvaluatorPayout;
