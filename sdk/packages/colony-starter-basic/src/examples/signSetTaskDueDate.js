// Import executeTaskMultisig helper method
const executeTaskMultisig = require('../helpers/executeTaskMultisig');

// An example using the setTaskDueDate operation
const signSetTaskDueDate = async (colonyClient, taskId) => {

  // Execute task multisig operation for the given colonyJS method
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskDueDate,
    taskId,
  );

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the task we updated
  console.log('Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export signSetTaskDueDate example
module.exports = signSetTaskDueDate;
