// Import big number library
const BN = require('bn.js');

// An example using the setTaskManagerPayout method
const setTaskManagerPayout = async (colonyClient, taskId, amount, token) => {

  // Set task manager payout
  await colonyClient.setTaskManagerPayout.send({
    taskId,
    token,
    amount: new BN(amount),
  })

  // Get the task manager payout
  const payout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'MANAGER',
    token,
  });

  // Check out the logs to see the task manager payout
  console.log('Task Payout Amount:', payout.amount.toNumber());

  // Return the task manager payout
  return payout;

}

// Export setTaskManagerPayout example
module.exports = setTaskManagerPayout;
