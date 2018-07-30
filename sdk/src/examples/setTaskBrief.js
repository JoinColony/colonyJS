// Import the Extended Colony Protocol
const ecp = require('../helpers/ecp');

// An example using the setTaskBrief operation
const setTaskBrief = async (colonyClient, taskId, specification) => {

  // Initialise the Extended Colony Protocol
  await ecp.init();

  // Create a specification hash for the task
  const specificationHash = await ecp.saveHash(specification);

  // Check out the logs to see the specification hash
  console.log('Specification Hash: ' + specificationHash);

  // Stop the Extended Colony Protocol
  await ecp.stop();

  // Update the specification for the given task
  const operation = await colonyClient.setTaskBrief.startOperation({
    taskId,
    specificationHash,
  });

  // Check out the logs to see the operation required signees
  console.log('Required Signees:', operation.requiredSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to our mock database
  DATABASE.setTaskBriefOperationJSON = operationJSON;

}

// Export setTaskBrief example
module.exports = setTaskBrief;
