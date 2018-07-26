// Import the Extended Colony Protocol
const ecp = require('../helpers/ecp');

// An example using the submitTaskDeliverable method
const submitTaskDeliverable = async (colonyClient, taskId, deliverable) => {

  // Initialise the Extended Colony Protocol
  await ecp.init()

  // Create a deliverable hash for the task
  const deliverableHash = await ecp.saveHash(deliverable)

  // Check out the logs to see the deliverable hash
  console.log('Deliverable Hash: ' + deliverableHash);

  // Stop the Extended Colony Protocol
  await ecp.stop()

  // Submit the deliverable for the given task
  await colonyClient.submitTaskDeliverable.send({
    taskId,
    deliverableHash,
  });

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Updated Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export submitTaskDeliverable example
module.exports = submitTaskDeliverable;
