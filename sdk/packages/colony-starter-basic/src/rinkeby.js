// Import example
const connectRinkeby = require('./examples/connectRinkeby');

// Define connectRinkebyExample
const connectRinkebyExample = async () => {

  console.log('\n\x1b[32m' + 'connectRinkeby:' + '\x1b[0m\n');

  await connectRinkeby();

  console.log();

}

// Execute example
connectRinkebyExample()
  .then(() => process.exit())
  .catch(err => console.error(err));
