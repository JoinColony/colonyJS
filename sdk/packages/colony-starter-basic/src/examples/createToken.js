// An example using the createToken method
const createToken = async (networkClient, name, symbol) => {

  // Create a new ERC20 token
  const tokenAddress = await networkClient.createToken({ name, symbol });

  // Check out the logs to see the token address
  console.log('Token Address: ' + tokenAddress);

  // Return the address
  return tokenAddress;

};

// Export createToken example
module.exports = createToken;
