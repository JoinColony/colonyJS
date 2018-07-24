// The following methods use Promises
const setTaskSkill = async (colonyClient, taskId, skillId) => {

  // Set the skillId for the given task
  await colonyClient.setTaskSkill.send({
    taskId,
    skillId,
  });

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Return updated task
  return updatedTask;

}

module.exports = setTaskSkill;
