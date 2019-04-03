// An example action using the "createToken" method
module.exports = async (networkClient, symbol) => {

  // Create token
  const {
    meta: { receipt: { contractAddress: tokenAddress } }
  } = await networkClient.createToken.send({ symbol });

  // Check out the logs to see the token address
  console.log('Token Address: ' + tokenAddress);

  // Return the token address
  return tokenAddress;

};
