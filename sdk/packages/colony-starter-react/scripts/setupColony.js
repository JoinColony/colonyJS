const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Set contract address for OneTxPayment contract
const OneTxPayment = '0xA8DA163375713753Acc7e1D429c64F72b9412077';

// Run setup
(async () => {

  // Get a wallet instance
  const wallet = await open({ privateKey });

  // Get a network client instance
  const networkClient = await getNetworkClient('local', wallet);

  // Create token
  const {
    meta: { receipt: { contractAddress: tokenAddress } }
  } = await networkClient.createToken.send({
    symbol: 'TKN',
  });

  // Check out the logs to see the token address
  console.log('Token Address: ', tokenAddress);

  // Create a colony
  const {
    eventData: { colonyAddress }
  } = await networkClient.createColony.send({
    tokenAddress,
  });

  // Check out the logs to see the colony address
  console.log('Colony Address:', colonyAddress);

  // Get a colony client instance
  const colonyClient = await networkClient.getColonyClientByAddress(
    colonyAddress,
  );

  // Set the token owner to be the colony contract
  await colonyClient.tokenClient.setOwner.send({
    owner: colonyAddress,
  });

  // Get token owner
  const tokenOwner = await colonyClient.tokenClient.contract.owner();

  // Check out the logs to see token owner
  console.log('Token Owner: ' + tokenOwner);

  // Mint tokens
  await colonyClient.mintTokens.send({ amount });

  // Get the total supply of tokens after minting
  const totalSupply = await colonyClient.tokenClient.getTotalSupply.call();

  // Check out the logs to see the total supply of tokens before minting
  console.log('Token Supply: ' + totalSupply.amount);

  // Claim funds on behalf of the colony
  await colonyClient.claimColonyFunds.send({ token });

  // Get the colony pot balance after claiming funds
  const potBalance = await colonyClient.getFundingPotBalance.call({
    potId: 1,
    token,
  });

  // Check out the logs to see the colony pot balance after claiming funds
  console.log('Colony Pot Balance: ' + potBalance.balance);

  // Set the admin role for OneTxPayment
  await colonyClient.setAdminRole.send({
    user: OneTxPayment,
  });

  // Check if the contract was assigned the admin role
  const { hasRole } = await colonyClient.hasUserRole.call({
    user: OneTxPayment,
    role: 'ADMIN',
  })

  // Check out the logs to see if the contract was assigned the admin role
  console.log('OneTxPayment:', hasRole);

})()
  .then(() => process.exit())
  .catch(error => console.error(error));
