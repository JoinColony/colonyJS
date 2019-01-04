// Import executeTaskMultisig helper method
const executeTaskMultisig = require('../helpers/executeTaskMultisig');

// An example using the setTaskWorkerPayout operation
const signSetTaskWorkerPayout = async (colonyClient, taskId, token) => {

  // Execute task multisig operation for the given colonyJS method
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskWorkerPayout,
    taskId,
  );

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

// Export signSetTaskWorkerPayout example
module.exports = signSetTaskWorkerPayout;
