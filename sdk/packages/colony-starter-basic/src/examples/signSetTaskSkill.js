// Import executeTaskMultisig helper method
const executeTaskMultisig = require('../helpers/executeTaskMultisig');

// An example using the setTaskSkill operation
const signSetTaskSkill = async (colonyClient, taskId) => {

  // Execute task multisig operation for the given colonyJS method
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskSkill,
    taskId,
  );

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the task we updated
  console.log('Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export signSetTaskSkill example
module.exports = signSetTaskSkill;
