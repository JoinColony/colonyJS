// Import executeTaskMultisig helper method
const executeTaskMultisig = require('../helpers/multisig');

// An example using the setTaskWorkerRole operation
const signSetTaskWorkerRole = async (colonyClient, taskId) => {

  // Execute task multisig operation for the given colonyJS method
  await executeTaskMultisig(
    colonyClient,
    colonyClient.setTaskWorkerRole,
    taskId,
  );

  // Get the task worker role
  const taskRole = await colonyClient.getTaskRole.call({
    taskId,
    role: 'WORKER',
  });

  // Check out the logs to see the task worker role
  console.log('Task Role:', taskRole);

  // Return the task worker role
  return taskRole;

}

// Export signSetTaskWorkerRole example
module.exports = signSetTaskWorkerRole;
