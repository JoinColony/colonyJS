// Import the prerequisites
const { sha3 } = require('web3-utils');

// An example action using the "revealTaskWorkRating" method
module.exports = async (colonyClient, taskId, role, rating) => {

  // Set salt value
  const salt = sha3('secret');

  // Reveal the task work rating
  await colonyClient.revealTaskWorkRating.send({
    taskId,
    role,
    rating,
    salt,
  });

  // Get the task work ratings
  const taskWorkRatings = await colonyClient.getTaskWorkRatingSecretsInfo.call({
    taskId,
  });

  // Check out the logs to see the task work ratings
  console.log('Task Work Ratings:', taskWorkRatings);

  // Get the task role
  const taskRole = await colonyClient.getTaskRole.call({
    taskId,
    role,
  });

  // Check out the logs to see the task role
  console.log('Task Role:', taskRole);

  // Return the task role
  return taskRole;

};
