// Import the prerequisites
const executeTaskMultisig = require('../helpers/multisig');

// An example action using the setTaskSkill operation
const signSetTaskSkill = async (colonyClient, taskId) => {

  // Execute the task multisig operation
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskSkill,
    taskId,
  );

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export signSetTaskSkill action
module.exports = signSetTaskSkill;
