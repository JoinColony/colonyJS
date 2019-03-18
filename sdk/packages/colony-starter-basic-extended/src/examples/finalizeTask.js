// An example using the finalizeTask method
const finalizeTask = async (colonyClient, taskId) => {

  // Finalize the given task
  await colonyClient.finalizeTask.send({ taskId });

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

module.exports = finalizeTask;
