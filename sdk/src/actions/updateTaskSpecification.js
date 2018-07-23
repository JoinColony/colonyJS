const ecp = require('../helpers/ecp');

// The following methods use Promises
const updateTaskSpecification = async (colonyClient, taskId, specification) => {

  // Initialise the Extended Colony Protocol
  await ecp.init();

  // Create a specification hash for the task
  const specificationHash = await ecp.saveTaskSpecification({
    title: specification.title,
    description: specification.description,
  });

  // Do some cleanup
  await ecp.stop();

  // Take a look at the logs to see the specification hash
  console.log('Specification Hash: ' + specificationHash);

  // Update the specification for the given task
  const setTaskSpecificationOperation = await colonyClient.setTaskBrief.startOperation({
    taskId,
    specificationHash,
  });

  // check if required signees includes current user address
  if (setTaskSpecificationOperation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

    // sign task due date operation
    await setTaskSpecificationOperation.sign()

  }

  // check for missing signees
  if (setTaskSpecificationOperation.missingSignees.length === 0) {

    // send task due date operation
    await setTaskSpecificationOperation.send()

  } else {

    // serialize operation into JSON format
    const setTaskSpecificationOperationJSON = setTaskSpecificationOperation.toJSON()

    // save operation to local storage
    STORED_OPERATIONS.setTaskSpecificationOperationJSON = setTaskSpecificationOperationJSON;

  }

}

module.exports = updateTaskSpecification;
