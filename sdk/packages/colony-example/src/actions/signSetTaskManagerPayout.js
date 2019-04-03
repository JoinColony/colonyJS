// Import the prerequisites
const executeTaskMultisig = require('../helpers/multisig');

// An example action using the "setTaskManagerPayout" operation
module.exports = async (colonyClient, taskId, token) => {

  // Execute the task multisig operation
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskManagerPayout,
    taskId,
  );

  // Get the task manager payout
  const payout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'MANAGER',
    token,
  });

  // Check out the logs to see the task manager payout
  console.log('Task Payout Amount:', payout.amount.toString());

  // Return the task manager payout
  return payout;

};
