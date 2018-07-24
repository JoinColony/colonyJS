// An example using the setTaskDomain method
const setTaskDomain = async (colonyClient, taskId, domainId) => {

  // Set the domainId for the given task
  await colonyClient.setTaskDomain.send({
    taskId,
    domainId,
  });

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Updated Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export setTaskDomain example
module.exports = setTaskDomain;
