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

  // // Get pot balance of task before the claim
  // const taskPotBalanceBefore = await colonyClient.getPotBalance.call({
  //   potId: 3,
  //   token,
  // });
  //
  // // Check out the logs to see the task payout before the claim
  // console.log('Task Pot Balance Before:', taskPotBalanceBefore.balance.toNumber());

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

  // // Get pot balance of task after the claim
  // const taskPotBalanceAfter = await colonyClient.getPotBalance.call({
  //   potId: 3,
  //   token,
  // })
  //
  // // Check out the logs to see the task payout after the claim
  // console.log('Task Pot Balance After:', taskPotBalanceAfter.balance.toNumber());

  // Return the task payout after the claim
  return taskPayoutAfter;
}

module.exports = claimPayout;
