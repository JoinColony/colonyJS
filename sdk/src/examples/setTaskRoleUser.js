// An example using the setTaskRoleUser method
const setTaskRoleUser = async (colonyClient, taskId, role, user) => {

  // Update the evaluator role of the task
  await colonyClient.setTaskRoleUser.send({
    taskId,
    role,
    user,
  });

  // Get the evaluator role of the task
  const evaluator = await colonyClient.getTaskRole.call({
    taskId,
    role: 'EVALUATOR',
  });

  // Get the manager role of the task
  const manager = await colonyClient.getTaskRole.call({
    taskId,
    role: 'MANAGER',
  });

  // Get the worker role of the task
  const worker = await colonyClient.getTaskRole.call({
    taskId,
    role: 'WORKER',
  });

  // Check out the logs to see the updated task roles
  console.log('Updated Task Roles:', {
    evaluator,
    manager,
    worker,
  });

  // Return the updated task roles
  return {
    evaluator,
    manager,
    worker,
  };

}

// Export setTaskRoleUser example
module.exports = setTaskRoleUser;
