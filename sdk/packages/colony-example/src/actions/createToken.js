// An example action using the "createToken" method
module.exports = async (networkClient, name, symbol, decimals) => {

  // Create token
  const tokenTransaction = await networkClient.createToken.send({
    name,
    symbol,
    decimals,
  });

  // Set token address
  const tokenAddress = tokenTransaction.meta.receipt.contractAddress;

  // Check out the logs to see the token address
  console.log('Token Address: ' + tokenAddress);

  // Return the token address
  return tokenAddress;

};
