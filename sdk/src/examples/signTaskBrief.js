// An example using the setTaskBrief operation
const signTaskBrief = async (colonyClient, taskId) => {

  // Get operation
  const operationJSON = STORED_OPERATIONS.setTaskBriefOperationJSON;

  // Check operation
  if (operationJSON) {

    // Restore operation
    const operation = await colonyClient.setTaskBrief.restoreOperation(operationJSON);

    // Check the colony and task of the operation
    if (
      operation.payload.sourceAddress === colonyClient._contract.address &&
      operation.payload.inputValues.taskId === taskId
    ) {

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

        // Reset the stored operation
        STORED_OPERATIONS.setTaskBriefOperationJSON = null;

        // Successfully completed operation
        console.log('Successfully Completed Operation');

      } else {

        // Serialize operation into JSON format
        const operationJSON = operation.toJSON();

        // Store the operation to access it again from another account
        STORED_OPERATIONS.setTaskBriefOperationJSON = operationJSON;

        // Successfully updated operation
        console.log('Successfully Updated Operation');

      }

    }

  }

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see the task we updated
  console.log('Updated Task:', updatedTask);

  // Return the updated task
  return updatedTask;

}

// Export signTaskBrief example
module.exports = signTaskBrief;
