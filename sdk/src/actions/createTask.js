const ecp = require('../helpers/ecp');

const createTask = async (colonyClient, title, description, domainId) => {

  // Initialise the Extended Colony Protocol
  await ecp.init();

  // Create a task!
  const specificationHash = await ecp.saveTaskSpecification({
    title,
    description,
  });

  // Do some cleanup
  await ecp.stop();

  // Unique, immutable hash on IPFS
  console.log('Specification Hash: ' + specificationHash);

  // Create a task in the root domain
  const {
    eventData: { taskId }
  } = await colonyClient.createTask.send({ specificationHash, domainId });

  // Let's take a look at the newly created task
  const task = await colonyClient.getTask.call({ taskId })

  console.log('Task:', task);

  // Return task
  return task;

}

module.exports = createTask;
