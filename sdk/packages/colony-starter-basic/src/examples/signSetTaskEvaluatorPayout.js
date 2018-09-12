// An example using the setTaskEvaluatorPayout operation
const signSetTaskEvaluatorPayout = async (colonyClient, taskId) => {

  // Get JSON formatted operation from the mock database
  const operationJSON = DATABASE.operations.setTaskEvaluatorPayout;

  // Check the operation
  if (operationJSON) {

    // Restore operation
    const operation = await colonyClient.setTaskEvaluatorPayout.restoreOperation(
      operationJSON,
    );

    // Check if the operation matches the colony contract and the task id and
    // check if current account is required to sign the operation.
    if (
      operation.payload.sourceAddress === colonyClient._contract.address &&
      operation.payload.inputValues.taskId === taskId &&
      operation.missingSignees.includes(colonyClient.adapter.wallet.address.toLowerCase())
    ) {

      // Sign the operation
      await operation.sign();

      // Check for missing signees
      if (operation.missingSignees.length === 0) {

        // Send the operation
        await operation.send();

        // Update the operation in the mock database
        DATABASE.operations.setTaskEvaluatorPayout = null;

      } else {

        // Check out the logs to see the operation missing signees
        console.log('Missing Signees:', operation.missingSignees);

        // Serialize operation into JSON format
        const operationJSON = operation.toJSON();

        // Store the operation in the mock database
        DATABASE.operations.setTaskEvaluatorPayout = operationJSON;

      }

    } else {

      // Check out the logs to see the source of the pending operation
      console.log('Operation Source:', operation.payload.sourceAddress);

      // Check out the logs to see the task id of the pending operation
      console.log('Operation Task ID:', operation.payload.inputValues.taskId);

      // Check out the logs to see the required signees of the operation
      console.log('Missing Signees:', operation.missingSignees);

    }

  }

  // Get the task evaluator payout
  const payout = await colonyClient.getTaskPayout.call({
    taskId,
    role: 'EVALUATOR',
    token: colonyClient.token._contract.address,
  });

  // Check out the logs to see the task evaluator payout
  console.log('Task Evaluator Payout Amount:', payout.amount.toNumber());

  // Return the task evaluator payout
  return payout;

}

// Export signSetTaskEvaluatorPayout example
module.exports = signSetTaskEvaluatorPayout;
