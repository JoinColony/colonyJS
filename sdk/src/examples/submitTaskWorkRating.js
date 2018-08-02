// An example using the submitTaskWorkRating method
const submitTaskWorkRating = async (colonyClient, taskId, role, rating) => {

  // Set salt value
  const salt = 'secret';

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

  // Return the updated task work ratings
  return taskWorkRatings;

}

module.exports = submitTaskWorkRating;
