// The following methods use Promises
const updateTaskRoles = async (colonyClient, taskId, roles) => {

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

}

module.exports = updateTaskRoles;
