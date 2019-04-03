// Import the prerequisites
const ecp = require('../helpers/ecp');

// An example action using the "submitTaskDeliverable" method
module.exports = async (colonyClient, taskId, deliverable) => {

  // Initialize the "Extended Colony Protocol"
  await ecp.init()

  // Create a deliverable hash for the task
  const deliverableHash = await ecp.saveHash(deliverable)

  // Stop the "Extended Colony Protocol"
  await ecp.stop()

  // Submit the deliverable for the task
  await colonyClient.submitTaskDeliverable.send({
    taskId,
    deliverableHash,
  });

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Task:', updatedTask);

  // Return the updated task
  return updatedTask;

};
