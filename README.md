<div align="center">
  <img src="/docs/img/colonyJS_color.svg" width="600" />
</div>
<div align="center">
  <a href="https://circleci.com/gh/JoinColony/colonyJS">
    <img src="https://circleci.com/gh/JoinColony/colonyJS.svg?style=shield" />
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/JoinColony/colonyJS.svg" />
  </a>
  <a href="https://gitter.im/JoinColony/colonyJS">
    <img src="https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg" />
  </a>
  <a href="https://build.colony.io/">
    <img src="https://img.shields.io/discourse/https/build.colony.io/status.svg" />
  </a>
</div>

# colonyJS

colonyJS is a JavaScript library with a simple and predictable interface for application-layer integrations with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts. To learn more about Colony, you can visit [colony.io](https://colony.io/) or read the [White Paper](https://colony.io/whitepaper.pdf).

## Documentation

See [colonyJS Documentation](https://joincolony.github.io/colonyjs/intro-welcome/) for detailed examples and explanations.

## colonyStarter

Another helpful tool for learning how to use colonyJS is [colonyStarter](https://github.com/JoinColony/colonyNetwork), which provides boilerplates, examples, and a simple command line tool to make local development easier.

## Example Usage

Here is the complete example from the [Get Started](https://joincolony.github.io/colonyjs/intro-get-started/) documentation.

```js

const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');
const { BN } = require('web3-utils');

(async () => {

  // Get a wallet instance
  const wallet = await open({
    privateKey: process.env.PRIVATE_KEY,
  });

  // Check out the logs to see the wallet address
  console.log('Wallet Address:', wallet.address);

  // Get a network client instance
  const networkClient = await getNetworkClient('goerli', wallet);

  // Check out the logs to see the network address
  console.log('Network Address:', networkClient.contract.address);

  // Create a token
  const createTokenTransaction = await networkClient.createToken.send({
    name: 'Token',
    symbol: 'TKN',
    decimals: 18,
  });

  // Set the token address
  const tokenAddress = createTokenTransaction.meta.receipt.contractAddress;

  // Check out the logs to see the token address
  console.log('Token Address: ', tokenAddress);

  // Create a colony
  const createColonyResponse = await networkClient.createColony.send({
    tokenAddress,
  });

  // Set the colony address
  const colonyAddress = createColonyResponse.eventData.colonyAddress;

  // Check out the logs to see the colony address
  console.log('Colony Address:', colonyAddress);

  // Get a colony client instance
  const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress);

  // Set the colony contract as the token owner
  await colonyClient.tokenClient.setOwner.send({
    owner: colonyAddress,
  });

  console.log('Token owner set!');

  // Mint tokens
  await colonyClient.mintTokens.send({
    amount: new BN('1000000000000000000'),
  });

  console.log('Tokens minted!');

  // Claim colony funds
  await colonyClient.claimColonyFunds.send({
    token: tokenAddress,
  });

  console.log('Colony funds claimed!');

  // Add a payment
  const addPaymentResponse = await colonyClient.addPayment.send({
    recipient: wallet.address,
    token: tokenAddress,
    amount: new BN('1000000000000000000'),
    domainId: 1,
  });

  // Set payment id and pot id
  const { paymentId, potId } = addPaymentResponse.eventData;

  // Check out the logs to see the payment data
  console.log('Payment Data:', { paymentId, potId });

  // Move funds  between funding pots
  await colonyClient.moveFundsBetweenPots.send({
    fromPot: 1,
    toPot: potId,
    amount: new BN('1000000000000000000'),
    token: tokenAddress,
  });

  console.log('Funds moved to payment pot!');

  // Finalize a payment
  await colonyClient.finalizePayment.send({ paymentId });

  console.log('Payment finalized!');

  // Claim a payment
  await colonyClient.claimPayment.send({
    paymentId,
    token: tokenAddress,
  });

  console.log('Payment claimed!');

})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

## Contributing

We welcome all contributions to colonyJS! See [Contributing](https://github.com/JoinColony/colonyJS/blob/develop/.github/CONTRIBUTING.md) for more information.

## Development

If you are a developer contributing to colonyJS, see [Development](https://github.com/JoinColony/colonyJS/blob/develop/.github/DEVELOPMENT.md).
