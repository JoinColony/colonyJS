// The following methods use Promises
const updateTaskDomain = async (colonyClient, taskId, domainId) => {

  // Update the domainId for the given task
  await colonyClient.setTaskDomain.send({
    taskId,
    domainId,
  });

}

module.exports = updateTaskDomain;
