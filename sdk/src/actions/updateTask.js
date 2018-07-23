const updateTaskDomain = require('./updateTaskDomain');
const updateTaskDueDate = require('./updateTaskDueDate');
const updateTaskRoles = require('./updateTaskRoles');
const updateTaskSkill = require('./updateTaskSkill');
const updateTaskSpecification = require('./updateTaskSpecification');

// The following methods use Promises
const updateTask = async (colonyClient, taskId, task) => {

  // declare roles
  let updatedTaskRoles

  // Check if domainId is included in task properties
  if (task.domainId) {

    // Update the domainId for the given task
    await updateTaskDomain(
      colonyClient,             // colonyClient
      taskId,                   // taskId
      task.domainId,            // domainId
    );

  }

  // Check if dueDate is included in task properties
  if (task.dueDate) {

    // Update the dueDate for the given task
    await updateTaskDueDate(
      colonyClient,             // colonyClient
      taskId,                   // taskId
      task.dueDate,             // dueDate
    );

  }

  // Check if roles is included in task properties
  if (task.roles) {

    // Update the roles for the given task
    updatedTaskRoles = await updateTaskRoles(
      colonyClient,             // colonyClient
      taskId,                   // taskId
      task.roles,               // roles
    );

  }

  // Check if skillId is included in task properties
  if (task.skillId) {

    // Update the skillId for the given task
    await updateTaskSkill(
      colonyClient,
      taskId,
      task.skillId,
    );

  }

  // Check if specification is included in task properties
  if (task.specification) {

    // Update the specification for the given task
    await updateTaskSpecification(
      colonyClient,
      taskId,
      task.specification,
    );

  }

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

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

  // Take a look at the logs to see the task we updated
  console.log('Updated Task:', {
    ...updatedTask,
    roles: {
      evaluator,
      manager,
      worker,
    },
  });

  // Return updated task
  return {
    ...updatedTask,
    roles: {
      evaluator,
      manager,
      worker,
    },
  };

}

module.exports = updateTask;
