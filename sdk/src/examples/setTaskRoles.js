// An example using the setTaskRoleUser method
const setTaskRoles = async (colonyClient, taskId, roles) => {

  // Check if evaluator role needs to be updated
  if (roles.evaluator) {

    // Update the evaluator role of the task
    await colonyClient.setTaskRoleUser.send({
      taskId,
      role: 'EVALUATOR',
      user: roles.evaluator
    });

  }

  // Check if manager role needs to be updated
  if (roles.manager) {

    // Update the manager role of the task
    await colonyClient.setTaskRoleUser.send({
      taskId,
      role: 'MANAGER',
      user: roles.manager
    });

  }

  // Check if worker role needs to be updated
  if (roles.worker) {

    // Update the worker role of the task
    await colonyClient.setTaskRoleUser.send({
      taskId,
      role: 'WORKER',
      user: roles.worker
    });

  }

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

// Export setTaskRoles example
module.exports = setTaskRoles;
