// Import the prerequisites
const ecp = require('../helpers/ecp');

// An example action using the "addTask" method
module.exports = async (colonyClient, domainId, specification) => {

  // Initialize the "Extended Colony Protocol"
  await ecp.init();

  // Create a specification hash for the task
  const specificationHash = await ecp.saveHash(specification);

  // Stop the "Extended Colony Protocol"
  await ecp.stop();

  // Create a task and get the task id from the event data
  const { eventData: { taskId } } = await colonyClient.addTask.send({
    specificationHash,
    domainId,
  });

  // Get the new task using the task id
  const task = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the new task
  console.log('Task:', task);

  // Return the new task
  return task;

};
