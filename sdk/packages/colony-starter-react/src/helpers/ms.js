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

  // Get stored operation items
  const items = db.getAll()

  // Filter stored operation items
  items.filter(item => {

    // Get stored operation item payload
    const { payload } = JSON.parse(item.data)

    // Return stored operation items that match colony and task
    return (
      payload.sourceAddress.toLowerCase() === colonyAddress &&
      payload.inputValues.taskId === taskId
    )

  })

  // Loop through stored operation items
  await Promise.all(items.map(async item => {

    // Restore operation
    const operation = await colonyClient[item.name].restoreOperation(item.data)

    // Check if required signees includes wallet address
    if (operation.requiredSignees.includes(walletAddress)) {

      // Push operation to operations
      operations.push(operation)

    }

  }))

  // Return operations
  return operations

}

// A helper method for signing an operation
export const signOperation = async operation => {

  // Sign operation
  await operation.sign()

  // Check missing signees
  if (operation.missingSignees.length === 0) {

    // Serialize operation into JSON format
    const operationJSON = operation.toJSON()

    // Save operation
    db.set(operation.sender.name, operationJSON)

    // Send operation method
    const tx = await operation.send()

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Delete operation
    db.remove(operation.sender.name)

    // Return transaction
    return tx

  } else {

    // Serialize operation into JSON format
    const operationJSON = operation.toJSON()

    // Save operation
    db.set(operation.sender.name, operationJSON)

    // Return successful
    return { successful: true }

  }

}
