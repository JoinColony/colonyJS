// Import the Extended Colony Protocol
const ecp = require('../helpers/ecp');

// An example using the createColony method
const createTask = async (colonyClient, domainId, specification) => {

  // Initialise the Extended Colony Protocol
  await ecp.init();

  // Create a specification hash for the task
  const specificationHash = await ecp.saveHash(specification);

  // Stop the Extended Colony Protocol
  await ecp.stop();

  // Create a task and get the taskId from the event data
  const { eventData: { taskId } } = await colonyClient.createTask.send({
    specificationHash,
    domainId,
  });

  // Get our new task using the taskId
  const task = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see our new task
  console.log('Task:', task);

  // Return our new task
  return task;

}

// Export createTask example
module.exports = createTask;
