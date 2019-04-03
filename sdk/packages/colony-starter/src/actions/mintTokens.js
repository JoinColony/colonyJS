// An example action using the "mintTokens" method
module.exports = async (colonyClient, amount) => {

  // Get the total supply of tokens before minting
  const totalSupplyBefore = await colonyClient.tokenClient.getTotalSupply.call();

  // Mint tokens
  await colonyClient.mintTokens.send({ amount });

  // Get the total supply of tokens after minting
  const totalSupplyAfter = await colonyClient.tokenClient.getTotalSupply.call();

  // Check out the logs to see the total supply of tokens before minting
  console.log('Total Supply (Before): ' + totalSupplyBefore.amount);

  // Check out the logs to see the total supply of tokens after minting
  console.log('Total Supply (After): ' + totalSupplyAfter.amount);

  // Return the total supply of tokens after minting
  return totalSupplyAfter;

};
