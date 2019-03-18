// Import database
import db from './db'

// A helper method for getting the task operataions
export const getOperations = async (colonyClient, taskId) => {

  // Declare operations
  const operations = []

  // Set colony address
  const colonyAddress = colonyClient.contract.address.toLowerCase()

  // Set wallet address
  const walletAddress = colonyClient.adapter.wallet.address.toLowerCase()

  // Get stored items
  const items = db.getAll()

  // Loop through stored items
  await Promise.all(items.map(async item => {

    // Get operation payload
    const { payload } = JSON.parse(item.data)

    // Check if operation matches colony and task
    if (
      payload.sourceAddress.toLowerCase() === colonyAddress &&
      payload.inputValues.taskId === taskId
    ) {

      // Restore operation
      const operation = await colonyClient[item.name].restoreOperation(item.data)

      // Check if required signee
      if (operation.requiredSignees.includes(walletAddress)) {

        // Push operation to operations
        operations.push(operation)

      }

    }

  }))

  // Return operations
  return operations

}

// A helper method for restoring and signing an operation
export const restoreOperation = async (colonyClient, taskMethod) => {

  // Get the operatation
  const operationJSON = await db.get(taskMethod)

  // Restore operation
  const operation = await colonyClient[taskMethod].restoreOperation(
    operationJSON,
  )

  return operation

}

// A helper method for signing an operation
export const signOperation = async operation => {

  // Sign operation
  await operation.sign()

  // Check missing signees
  if (operation.missingSignees.length === 0) {

    // Send operation
    const transaction = await operation.send()

    // Delete operation
    db.remove(operation.sender.name)

    // Return transaction
    return transaction

  } else {

    // Serialize operation into JSON format
    const operationJSON = operation.toJSON()

    // Save operation
    db.set(operation.sender.name, operationJSON)

    // Return successful
    return { successful: true }

  }

}
