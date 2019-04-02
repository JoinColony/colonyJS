// An example action using the setTaskSkill operation
const setTaskSkill = async (colonyClient, taskId, skillId) => {

  // Start the operation to set the task skill
  const operation = await colonyClient.setTaskSkill.startOperation({
    taskId,
    skillId,
  });

  // Check out the logs to see the missing signees
  console.log('Missing Signees:', operation.missingSignees);

  // Serialize the operation into JSON format
  const operationJSON = operation.toJSON();

  // Save the operation to the mock database
  DATABASE.operations.setTaskSkill = operationJSON;

}

// Export setTaskSkill action
module.exports = setTaskSkill;
