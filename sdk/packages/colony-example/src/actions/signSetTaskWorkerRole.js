// Import the prerequisites
const executeTaskMultisig = require('../helpers/multisig');

// An example action using the setTaskWorkerRole operation
const signSetTaskWorkerRole = async (colonyClient, taskId) => {

  // Execute the task multisig operation
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

// Export signSetTaskWorkerRole action
module.exports = signSetTaskWorkerRole;
