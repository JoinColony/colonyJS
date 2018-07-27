// An example using the claimPayout method
const claimPayout = async (colonyClient, taskId, role, token) => {

  // Get the task payout before the claim
  const taskPayoutBefore = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Check out the logs to see the task payout before the claim
  console.log('Task Amount Payout Before:', taskPayoutBefore.amount.toNumber());

  // Submit task work rating for the given task and role
  const claimPayout = await colonyClient.claimPayout.send({
    taskId,
    role,
    token,
  });

  // Get the task payout after the claim
  const taskPayoutAfter = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Check out the logs to see the task payout after the claim
  console.log('Task Amount Payout After:', taskPayoutAfter.amount.toNumber());

  // Return the task payout after the claim
  return taskPayoutAfter;
}

module.exports = claimPayout;
