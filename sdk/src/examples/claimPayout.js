// An example using the claimPayout method
const claimPayout = async (colonyClient, taskId, role, token) => {

  // Claim the task the payout for the given task and role
  const claimPayout = await colonyClient.claimPayout.send({
    taskId,
    role,
    token,
  });

  // Get the task payout for the given task and role
  const taskPayout = await colonyClient.getTaskPayout.call({
    taskId,
    role,
    token,
  });

  // Check out the logs to see the task payout amount
  console.log('Task Payout Amount: ' + taskPayout.amount);

  // Return the task payout
  return taskPayout;
}

module.exports = claimPayout;
