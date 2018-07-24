const ecp = require('../helpers/ecp');

// The following methods use Promises
const createTask = async (colonyClient, title, description, domainId) => {

  // Initialise the Extended Colony Protocol
  await ecp.init();

  // Create a specification hash for the task
  const specificationHash = await ecp.saveTaskSpecification({
    title,
    description,
  });

  // Do some cleanup
  await ecp.stop();

  // Take a look at the logs to see the specification hash
  console.log('Specification Hash: ' + specificationHash);

  // Create a task in the root domain
  const {
    eventData: { taskId }
  } = await colonyClient.createTask.send({ specificationHash, domainId });

  // Get the task we created
  const task = await colonyClient.getTask.call({ taskId })

  // Take a look at the logs to see the task
  console.log('Task:', task);

  // Return task
  return task;

}

module.exports = createTask;
