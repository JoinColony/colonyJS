// An example action using the "claimPayout" method
module.exports = async (colonyClient, taskId, role, token) => {

  // Get the task payout
  const taskPayoutBefore = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Claim the task payout
  await colonyClient.claimPayout.send({
    taskId,
    role,
    token,
  });

  // Get the task payout
  const taskPayoutAfter = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Check out the logs to see the task payout amount before it was claimed
  console.log('Task Payout Amount (Before): ' + taskPayoutBefore.amount);

  // Check out the logs to see the task payout amount after it was claimed
  console.log('Task Payout Amount (After): ' + taskPayoutAfter.amount);

  // Return the task payout amount after it was claimed
  return taskPayoutAfter;

};
