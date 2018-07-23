// The following methods use Promises
const updateTask = async (colonyClient, taskId, skillId) => {

  // Update the skillId for the given task
  await colonyClient.setTaskSkill.send({
    taskId,
    skillId,
  });

}

module.exports = updateTask;
