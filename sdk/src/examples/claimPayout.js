// An example using the claimPayout method
const claimPayout = async (colonyClient, taskId, role, token) => {

  const taskPayoutBefore = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Check out the logs to see the task payout before the claim
  console.log('Task Payout Before:', taskPayoutBefore);

  // Submit task work rating for the given task and role
  const claimPayout = await colonyClient.claimPayout.send({
    taskId,
    role,
    token,
  });

  const taskPayoutAfter = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Check out the logs to see the task payout after the claim
  console.log('Task Payout After:', taskPayoutAfter);

  // Return the task payout after the claim
  return taskPayoutAfter;
}

module.exports = claimPayout;
