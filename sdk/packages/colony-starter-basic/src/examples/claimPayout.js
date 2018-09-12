// An example using the claimPayout method
const claimPayout = async (colonyClient, taskId, role, token) => {

  // Get the task payout for the given task and role
  const taskPayoutBefore = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Claim the task the payout for the given task and role
  await colonyClient.claimPayout.send({
    taskId,
    role,
    token,
  });

  // Get the task payout for the given task and role
  const taskPayoutAfter = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Check out the logs to see the task payout amount before claim
  console.log('Task Payout Amount (Before): ' + taskPayoutBefore.amount);

  // Check out the logs to see the task payout amount after claim
  console.log('Task Payout Amount (After): ' + taskPayoutAfter.amount);

  // Return the task payout after claim
  return taskPayoutAfter;

}

module.exports = claimPayout;
