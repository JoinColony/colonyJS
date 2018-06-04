const createColony = require('./create_colony');
const createTask = require('./create_task');

createColony()
  .then(createTask)
  // We're exiting hard here as the providers keep polling otherwise
  .then(() => process.exit())
  .catch(err => console.error(err));
