// Import the prerequisites
const executeTaskMultisig = require('../helpers/multisig');

// An example action using the "setTaskWorkerPayout" operation
module.exports = async (colonyClient, taskId, token) => {

  // Execute the task multisig operation
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
  console.log('Task Payout Amount:', payout.amount.toString());

  // Return the task worker payout
  return payout;

};
