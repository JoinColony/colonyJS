---
title: Get Started
section: Intro
order: 2
---

This page will show you how to use colonyJS to connect to the network, create a token, create a colony, and make a payment. We will be using the `rinkeby` test network, so make sure you have an Ethereum wallet with some test Ether before getting started. If you have never created a wallet or requested test Ether, check out [this article](https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d).

## Prerequisites

For this example, you will need the following tools:

* Node `>=10.12.0`
* Yarn `>=1.12.0`

## Project Setup

Open up your terminal and move to your project directory. You can create a new project or use an existing project. If you create a new project, you will need to run `yarn init` within your project directory.

*Note: If you are using an existing project that uses `npm` or you would prefer to use `npm`, feel free to do so, just bare in mind that you will need to substitute the `yarn` commands for `npm` commands throughout the instructions provided here.*

## Installation

You will need to install the following packages:

- `@colony/colony-js-client`
- `@colony/purser-software`
- `bn.js`

Install the packages with the following command:

```
yarn add @colony/colony-js-client @colony/purser-software bn.js
```

## Colony Script

In this example, you will create a simple script that runs in the terminal with `node`. The script will run through the necessary steps to connect to the network, create a token, create a colony, and make a payment.

Create a `colony.js` file in the root of your project and add the following code:

```js

const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');
const BN = require('bn.js');

(async () => {

  // Step 1: Open Wallet

  // Step 2: Get Network Client

  // Step 3: Create Token

  // Step 4: Create Colony

  // Step 5: Get Colony Client

  // Step 6: Allow Payments

  // Step 7: Make Payment

})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

## Open Wallet

First, you will need an instance of your Ethereum wallet. In this example, you will use [purser-software](/purser/modules-@colonypurser-software/). We recommend using a wallet that you strictly use for testing.

Add the following code below `// Step 1: Open Wallet`:

```js

// Get a wallet instance
const wallet = await open({
  privateKey: '0x000000000000000000000000000000000000000000000000000000000000000',
});

// Check out the logs to see the wallet address
console.log('Wallet Address:', wallet.address);

```

## Get Network Client

Next, you will need to use your wallet instance to get an instance of the network client.

Add the following code below `// Step 2: Get Network Client`:

```js

// Get a network client instance
const networkClient = await getNetworkClient('rinkeby', wallet);

// Check out the logs to see the network address
console.log('Network Address:', networkClient.contract.address);

```

## Create Token

Each colony has a native token. The next step will be creating the token that will be assigned to your colony.

Add the following code below `// Step 3: Create Token`:

```js

// Create a token using the network client instance
const { meta: { receipt: { contractAddress: tokenAddress } } } = await networkClient.createToken.send({
  symbol: 'TKN',
});

// Check out the logs to see the token address
console.log('Token Address: ', tokenAddress);

```

## Create Colony

Now that you have a token, you can create a new colony.

Add the following code below `// Step 4: Create Colony`:

```js

// Create a colony using the network client instance
const { eventData: { colonyAddress } } = await networkClient.createColony.send({
  tokenAddress,
});

// Check out the logs to see the colony address
console.log('Colony Address:', colonyAddress);

```

## Get Colony Client

You have used the network client to create a token and create a colony but now you will need to call methods specific to your colony, which will require the colony client.

Add the following code below `// Step 5: Get Colony Client`:

```js

// Get a colony client instance using the network client instance
const colonyClient = await networkClient.getColonyClientByAddress(
  colonyAddress,
);

```

## Allow Payments

In order to use the extended payments feature, you will need to grant permission to the `OneTxPayment` contract.

Add the following code below `// Step 6: Allow Payments`:

```js

// Set an admin using the colony client instance
await colonyClient.setAdminRole.send({
  user: '0xD447E2a66f50EB067a9bFe52296354C629fD2214',
});

```

## Make Payment

You now have a colony with a native token and the extended payments feature is enabled. The final step is making a payment.

Add the following code below `// Step 7: Make Payment`:

```js

// Make a payment using the colony client instance
const tx = await colonyClient.makePayment.send({
  worker: wallet.address,
  token: '0x0000000000000000000000000000000000000000',
  amount: new BN(0),
  domainId: 1,
  skillId: 1,
});

console.log('Transaction Hash:', tx.meta.transaction.hash);

```

## Run Script

You now have all the example methods you need to connect to the network, create a token, create a colony, and make a payment but before you execute the code, you will need to change `privateKey` in the `Open Wallet` example. We recommend using the private key of a wallet that you strictly use for testing.

You are all set! All you need to do now is run `node colony` in your terminal, which will connect to the network, create a token, create a colony, and make a payment using colonyJS.

## What's next?

* Set up a local development environment for your project in [Local Setup](/colonyjs/intro-local-setup).

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/topics-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/topics-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

* Learn about managing permissions and "authority roles" in [Managing Permissions](/colonyjs/topics-managing-permissions).
