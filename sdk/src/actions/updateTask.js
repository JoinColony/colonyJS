const ecp = require('../helpers/ecp');

// The following methods use Promises
const updateTask = async (colonyClient, taskId, task) => {

  // Check if skillId is included in task properties
  if (task.skillId) {

    // Update the skillId for the given task
    await colonyClient.setTaskSkill.send({
      taskId,
      skillId: task.skillId,
    });

  }

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Take a look at the logs to see the task we updated
  console.log('updatedTask', updatedTask);

  // Return updated task
  return updatedTask;

}

module.exports = updateTask;
