// Import the prerequisites
const executeTaskMultisig = require('../helpers/multisig');

// An example action using the "removeTaskEvaluatorRole" operation
module.exports = async (colonyClient, taskId) => {

  // Execute the task multisig operation
  await executeTaskMultisig(
    colonyClient,
    colonyClient.removeTaskEvaluatorRole,
    taskId,
  );

  // Get the task evaluator role
  const taskRole = await colonyClient.getTaskRole.call({
    taskId,
    role: 'EVALUATOR',
  });

  // Check out the logs to see the task evaluator role
  console.log('Task Role:', taskRole);

  // Return the task evaluator role
  return taskRole;

};
