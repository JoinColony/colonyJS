// An example using the setTaskSkill method
const setTaskSkill = async (colonyClient, taskId, skillId) => {

  // Start set task skill operation
  const operation = await colonyClient.setTaskSkill.startOperation({
    taskId,
    skillId,
  });

  // Check out the logs to see the operation required signees
  console.log('Required Signees:', operation.requiredSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to our mock database
  DATABASE.operations.setTaskSkill = operationJSON;

}

// Export setTaskSkill example
module.exports = setTaskSkill;
