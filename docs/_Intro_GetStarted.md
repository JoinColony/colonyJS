---
title: Get Started
section: Intro
order: 2
---

This page will show you how to use colonyJS to connect to the network, create a token, create a colony, and make a payment. We will be using the `goerli` test network, so make sure you have an Ethereum wallet with some test Ether before getting started. If you have never created an Ethereum wallet, check out [this article](https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d). For test Ether, you can use the [Goerli Authenticated Faucet](https://faucet.goerli.mudit.blog).

## Prerequisites

For this example, you will need the following tools:

* Node `>=10.12.0`
* Yarn `>=1.12.0`

## Project Setup

First, you will need to open up your terminal and move to your project directory. You can create a new project or use an existing project. If you create a new project, you will need to run `yarn init` within your project directory before continuing.

*Note: If you are using an existing project that uses `npm` or you would prefer to use `npm`, feel free to do so, just bare in mind that you will need to substitute `yarn` commands for `npm` commands throughout the instructions provided here.*

## Installation

You will need to install the following packages:

- `@colony/colony-js-client`
- `@colony/purser-software`
- `web3-utils`

You can install the packages with the following command:

```
yarn add @colony/colony-js-client @colony/purser-software web3-utils
```

## Colony Script

In this example, you will create a simple Node script. The script will run through the necessary steps to connect to the network, create a token, create a colony, and make a payment.

Create a `colony.js` file in the root of your project and add the following code:

```js

const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');
const { BN } = require('web3-utils');

(async () => {

  // Step 1: Open Wallet

  // Step 2: Get Network Client

  // Step 3: Create Token

  // Step 4: Create Colony

  // Step 5: Get Colony Client

  // Step 6: Set Token Owner

  // Step 7: Mint Tokens

  // Step 8: Claim Colony Funds

  // Step 9: Add Payment

  // Step 10: Get Payment

  // Step 11: Move Funds

  // Step 12: Finalize Payment

  // Step 13: Claim Payment

})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

## Step 1: Open Wallet

First, you will need an instance of your Ethereum wallet, which you can get with [purser-software](/purser/modules-@colonypurser-software/). We recommend using a wallet that you strictly use for testing.

Add the following code below `// Step 1: Open Wallet`:

```js

// Get a wallet instance
const wallet = await open({
  privateKey: process.env.PRIVATE_KEY,
});

// Check out the logs to see the wallet address
console.log('Wallet Address:', wallet.address);

```

## Step 2: Get Network Client

Next, you will need to use the wallet instance to get an instance of the network client.

Add the following code below `// Step 2: Get Network Client`:

```js

// Get a network client instance
const networkClient = await getNetworkClient('goerli', wallet);

// Check out the logs to see the network address
console.log('Network Address:', networkClient.contract.address);

```

## Step 3: Create Token

Each colony has a native token that will be used to calculate reputation within the colony. The next step will be creating that token.

Add the following code below `// Step 3: Create Token`:

```js

// Create a token
const createTokenTransaction = await networkClient.createToken.send({
  name: 'Token',
  symbol: 'TKN',
});

// Set the token address
const tokenAddress = createTokenTransaction.meta.receipt.contractAddress;

// Check out the logs to see the token address
console.log('Token Address: ', tokenAddress);

```

## Step 4: Create Colony

Now that you have a token, you can create a colony!

Add the following code below `// Step 4: Create Colony`:

```js

// Create a colony
const createColonyResponse = await networkClient.createColony.send({
  tokenAddress,
});

// Set the colony address
const colonyAddress = createColonyResponse.eventData.colonyAddress;

// Check out the logs to see the colony address
console.log('Colony Address:', colonyAddress);

```

## Step 5: Get Colony Client

You used the network client to create a token and create a colony but now you will need to call methods specific to your colony, which will require the colony client.

Add the following code below `// Step 5: Get Colony Client`:

```js

// Get a colony client instance
const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress);

```

## Step 6: Set Token Owner

In order for you and permissioned colony members to call token methods such as `mint` from your colony, you will need to set the colony contract address as the token owner.

Add the following code below `// Step 6: Set Token Owner`:

```js

// Set the colony contract as the token owner
await colonyClient.tokenClient.setOwner.send({
  owner: colonyAddress,
});

```

## Step 7: Mint Tokens

In order to make payments and fund tasks within your colony, you're gonna need some tokens.

Add the following code below `// Step 7: Mint Tokens`:

```js

// Mint tokens
await colonyClient.mintTokens.send({
  amount: new BN('1000000000000000000'),
});

```

## Step 8: Claim Colony Funds

Great! You've minted some tokens but before you can use them within your colony, you will need to claim them. Claiming colony funds will add the tokens to the funding pot for the colony.

Add the following code below `// Step 8: Claim Colony Funds`:

```js

// Claim colony funds
await colonyClient.claimColonyFunds.send({ token: tokenAddress });

```

## Step 9: Add Payment

Now that you have some funds in your colony, you can make payments.

Add the following code below `// Step 9: Add Payment`:

```js

// Add a payment
const paymentId = await colonyClient.addPayment.send({
  recipient: wallet.address,
  token: tokenAddress,
  amount: new BN('1000000000000000000'),
});

// Check out the logs to see the payment id
console.log('Payment ID:', paymentId);

```

## Step 10: Get Payment

You added a payment within your colony but you will need to fund the payment before you can finalize and claim it. First, get some information about your payment.

Add the following code below `// Step 10: Get Payment`:

```js

// Get a payment
const payment = await colonyClient.getPayment.call({ paymentId });

// Check out the logs to see the payment
console.log('Payment:', payment);

```

## Step 11: Move Funds

You will need to fund your payment by moving funds from the funding pot for the colony to the funding pot for the payment.

Add the following code below `// Step 10: Get Payment`:

```js

await colonyClient.moveFundsBetweenPots.send({
  fromPot: 1,
  toPot: payment.potId,
  amount: new BN('1000000000000000000'),
  token: tokenAddress,
});

```

## Step 12: Finalize Payment

Now that your payment has been funded. You can finalize it.

Add the following code below `// Step 12: Finalize Payment`:

```js

// Finalize a payment
await colonyClient.finalizePayment.send({ paymentId });

```

## Step 13: Claim Payment

Once a payment has been finalized, it can be claimed!

Add the following code below `// Step 13: Claim Payment`:

```js

// Claim a payment
await colonyClient.claimPayment.send({
  paymentId,
  token: tokenAddress,
});

```

## Run Script

You now have all the steps you need to connect to the network, create a token, create a colony, and make your first payment. All you need to do now is add your private key as an environment variable using `PRIVATE_KEY` and then running `node colony` in your terminal.

## What's next?

* Set up a local development environment for your project in [Local Setup](/colonyjs/intro-local-setup).

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/topics-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/topics-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

* Learn about managing permissions and "authority roles" in [Managing Permissions](/colonyjs/topics-managing-permissions).
