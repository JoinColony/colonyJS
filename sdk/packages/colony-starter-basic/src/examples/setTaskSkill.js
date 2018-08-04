// An example using the setTaskSkill method
const setTaskSkill = async (colonyClient, taskId, skillId) => {

  // Set the skillId for the given task
  await colonyClient.setTaskSkill.send({
    taskId,
    skillId,
  });

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Updated Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export setTaskSkill example
module.exports = setTaskSkill;
