// Import example
const connectMetamask = require('./examples/connectMetamask');

// Define connectMetamaskExample
const connectMetamaskExample = async () => {

  console.log('\n\x1b[32m' + 'connectMetamask:' + '\x1b[0m\n');

  await connectMetamask();

  console.log();

}

// Execute example
connectMetamaskExample()
  .then(() => process.exit())
  .catch(err => console.error(err));
