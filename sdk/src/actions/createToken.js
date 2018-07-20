// The following methods use Promises
const createToken = async (networkClient, name, symbol) => {

  // Let's deploy a new ERC20 token for our Colony.
  // You could also skip this step and use a pre-existing/deployed contract.
  const tokenAddress = await networkClient.createToken({ name, symbol });

  console.log('Token Address: ' + tokenAddress);

  return tokenAddress;

};

module.exports = createToken;
