// Import web3 library
const web3 = require('web3');

// An example using the submitTaskWorkRating method
const submitTaskWorkRating = async (colonyClient, taskId, role, rating) => {

  // Set salt value
  const salt = web3.utils.sha3('secret');

  // Set rating value
  const value = rating;

  // Generate a secret for the work rating
  const { secret } = await colonyClient.generateSecret.call({
    salt,
    value,
  });

  // Submit task work rating for the given task and role
  const submitTaskWorkRating = await colonyClient.submitTaskWorkRating.send({
    taskId,
    role,
    secret,
  });

  // Get the task work ratings
  const taskWorkRatings = await colonyClient.getTaskWorkRatings.call({
    taskId,
  });

  // Check out the logs to see the updated task work ratings
  console.log('Task Work Ratings:', taskWorkRatings);

  // Get the task role
  const taskRole = await colonyClient.getTaskRole.call({
    taskId,
    role,
  });

  // Check out the logs to see the task role
  console.log('Task Role:', taskRole);

  // Return the task work ratings
  return taskWorkRatings;

}

module.exports = submitTaskWorkRating;
