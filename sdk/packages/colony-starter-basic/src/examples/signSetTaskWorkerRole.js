// An example using the setTaskWorkerRole operation
const signSetTaskWorkerRole = async (colonyClient, taskId) => {

  // Get JSON formatted operation from the mock database
  const operationJSON = DATABASE.operations.setTaskWorkerRole;

  // Check the operation
  if (operationJSON) {

    // Restore operation
    const operation = await colonyClient.setTaskWorkerRole.restoreOperation(
      operationJSON,
    );

    // Check if the operation matches the colony contract and task id and if
    // the current account is one of the required signees for the operation.
    if (
      operation.payload.sourceAddress === colonyClient._contract.address &&
      operation.payload.inputValues.taskId === taskId &&
      operation.requiredSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())
    ) {

      // Sign the operation
      await operation.sign();

      // Check for missing signees
      if (operation.missingSignees.length === 0) {

        // Send the operation
        await operation.send();

        // Update the operation in the mock database
        DATABASE.operations.setTaskWorkerRole = null;

      } else {

        // Check out the logs to see the operation missing signees
        console.log('Missing Signees:', operation.missingSignees);

        // Serialize operation into JSON format
        const operationJSON = operation.toJSON();

        // Store the operation in the mock database
        DATABASE.operations.setTaskWorkerRole = operationJSON;

      }

    } else {

      // Check out the logs to see the source of the pending operation
      console.log('Operation Source:', operation.payload.sourceAddress);

      // Check out the logs to see the task id of the pending operation
      console.log('Operation Task ID:', operation.payload.inputValues.taskId);

      // Check out the logs to see the required signees of the operation
      console.log('Required Signees:', operation.requiredSignees);

    }

  }

  // Get the task worker role
  const taskRole = await colonyClient.getTaskRole.call({
    taskId,
    role: 'WORKER',
  });

  // Check out the logs to see the task worker role
  console.log('Task Role:', taskRole);

  // Return the task worker role
  return taskRole;

}

// Export signSetTaskWorkerRole example
module.exports = signSetTaskWorkerRole;
