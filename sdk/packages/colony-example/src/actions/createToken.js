// An example action using the createToken method
const createToken = async (networkClient, name, symbol) => {

  // Create token
  const {
    meta: { receipt: { contractAddress: tokenAddress } }
  } = await networkClient.createToken.send({ name, symbol });

  // Check out the logs to see the token address
  console.log('Token Address: ' + tokenAddress);

  // Return the token address
  return tokenAddress;

};

// Export createToken action
module.exports = createToken;
