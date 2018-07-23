// The following methods use Promises
const signTaskSpecification = async (colonyClient, taskId) => {

  // get operation
  const operationJSON = STORED_OPERATIONS.setTaskSpecificationOperationJSON

  if (operationJSON) {

    // restore operation
    const operation = await colonyClient.setTaskBrief.restoreOperation(operationJSON)

    // check if operation exists for contract and task
    if (
      operation.payload.sourceAddress === colonyClient._contract.address &&
      operation.payload.inputValues.taskId === taskId
    ) {

      // check if required signees includes current user address
      if (operation.requiredSignees.includes(colonyClient.adapter.wallet.address)) {

        // sign set operation
        await operation.sign()

        console.log('Signed setTaskSpecificationOperation')

      }

      // check for missing signees
      if (operation.missingSignees.length === 0) {

        // send set operation
        await operation.send()

        // remove local storage item
        STORED_OPERATIONS.setTaskSpecificationOperationJSON = null

        console.log('Reset setTaskSpecificationOperation')

      } else {

        // serialize operation into JSON format
        const operationJSON = operation.toJSON()

        // save operation to local storage
        STORED_OPERATIONS.setTaskSpecificationOperationJSON = operationJSON

        console.log('Updated setTaskSpecificationOperation')

      }

    }

  }

  // Get the updated task
  const updatedTask = await colonyClient.getTask.call({ taskId });

  // Take a look at the logs to see the task we updated
  console.log('Updated Task:', updatedTask);

  // Return updated task
  return updatedTask;

}

module.exports = signTaskSpecification;
