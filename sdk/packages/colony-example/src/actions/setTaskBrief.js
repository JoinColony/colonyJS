// Import the prerequisites
const ecp = require('../helpers/ecp');

// An example action using the "setTaskBrief" operation
module.exports = async (colonyClient, taskId, specification) => {

  // Initialize the "Extended Colony Protocol"
  await ecp.init();

  // Create a specification hash for the task
  const specificationHash = await ecp.saveHash(specification);

  // Check out the logs to see the specification hash
  console.log('Specification Hash: ' + specificationHash);

  // Stop the "Extended Colony Protocol"
  await ecp.stop();

  // Start the operation to set the task specification
  const operation = await colonyClient.setTaskBrief.startOperation({
    taskId,
    specificationHash,
  });

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to the mock database
  DATABASE.operations.setTaskBrief = operationJSON;

};
