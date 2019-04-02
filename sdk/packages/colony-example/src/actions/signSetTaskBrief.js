// Import executeTaskMultisig helper method
const executeTaskMultisig = require('../helpers/multisig');

// An example using the setTaskBrief operation
const signSetTaskBrief = async (colonyClient, taskId) => {

  // Execute task multisig operation for the given colonyJS method
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskBrief,
    taskId,
  );

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the task we updated
  console.log('Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export signSetTaskBrief example
module.exports = signSetTaskBrief;
