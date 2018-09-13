// Import executeTaskMultisig helper method
const executeTaskMultisig = require('../helpers/executeTaskMultisig');

// An example using the removeTaskEvaluatorRole operation
const signRemoveTaskEvaluatorRole = async (colonyClient, taskId) => {

  // Execute task multisig operation for the given colonyJS method
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

}

// Export signRemoveTaskEvaluatorRole example
module.exports = signRemoveTaskEvaluatorRole;
