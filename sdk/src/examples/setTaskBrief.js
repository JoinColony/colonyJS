// Import the Extended Colony Protocol
const ecp = require('../helpers/ecp');

// An example using the setTaskBrief operation
const setTaskBrief = async (colonyClient, taskId, specification) => {

  // Initialise the Extended Colony Protocol
  await ecp.init();

  // Create a specification hash for the task
  const specificationHash = await ecp.saveTaskSpecification({
    title: specification.title,
    description: specification.description,
  });

  // Check out the logs to see the specification hash
  console.log('Specification Hash: ' + specificationHash);

  // Stop the Extended Colony Protocol
  await ecp.stop();

  // Update the specification for the given task
  const operation = await colonyClient.setTaskBrief.startOperation({
    taskId,
    specificationHash,
  });

  // Check if the required signees for the operation includes the current user
  if (operation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // Sign the operation
    await operation.sign();

    // Successfully signed operation
    console.log('Successfully Signed Operation');

  }

  // Check for missing signees
  if (operation.missingSignees.length === 0) {

    // Send the operation
    await operation.send();

    // Successfully completed operation
    console.log('Successfully Completed Operation');

  } else {

    // Serialize the operation into JSON format
    const operationJSON = operation.toJSON();

    // Store the operation to access it again from another account
    STORED_OPERATIONS.setTaskBriefOperationJSON = operationJSON;

    // Successfully Stored Operation
    console.log('Successfully Stored Operation');

  }

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the updated task
  console.log('Updated Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export setTaskBrief example
module.exports = setTaskBrief;
