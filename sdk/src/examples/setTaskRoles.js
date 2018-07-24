// The following methods use Promises
const setTaskRoles = async (colonyClient, taskId, roles) => {

  // Check if evaluator role needs to be updated
  if (roles && roles.evaluator) {

    // Update the evaluator role of the task
    await colonyClient.setTaskRoleUser.send({
      taskId,
      role: 'EVALUATOR',
      user: roles.evaluator
    })

  }

  // Check if manager role needs to be updated
  if (roles && roles.manager) {

    // Update the manager role of the task
    await colonyClient.setTaskRoleUser.send({
      taskId,
      role: 'MANAGER',
      user: roles.manager
    })

  }

  // Check if worker role needs to be updated
  if (roles && roles.worker) {

    // Update the worker role of the task
    await colonyClient.setTaskRoleUser.send({
      taskId,
      role: 'WORKER',
      user: roles.worker
    })

  }

  // Get the evaluator role of the task
  const evaluator = await colonyClient.getTaskRole.call({
    taskId,
    role: 'EVALUATOR',
  })

  // Get the manager role of the task
  const manager = await colonyClient.getTaskRole.call({
    taskId,
    role: 'MANAGER',
  })

  // Get the worker role of the task
  const worker = await colonyClient.getTaskRole.call({
    taskId,
    role: 'WORKER',
  })

  // Take a look at the logs to see the task roles we updated
  console.log('Updated Task Roles:', {
    evaluator,
    manager,
    worker,
  });

  // Return updated task roles
  return {
    evaluator,
    manager,
    worker,
  };

}

module.exports = setTaskRoles;
