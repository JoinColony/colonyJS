// The following methods use Promises
const updateTaskDomain = async (colonyClient, taskId, domainId) => {

  // Set the domainId for the given task
  await colonyClient.setTaskDomain.send({
    taskId,
    domainId,
  });

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Return updated task
  return updatedTask;

}

module.exports = updateTaskDomain;
