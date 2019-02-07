---
title: Get Started
section: Intro
order: 2
---

This page will show you how to use colonyJS to connect to the network, create a token, create a colony, and create a task. We will be using the `rinkeby` test network, so make sure you have a wallet with some test Ether before getting started. If you have never created a wallet or made a request for some test Ether, check out [this article](https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d).

## Prerequisites

For this example, you will need the following tools:

* Node `>=10.12.0`
* Yarn `>=1.12.0`

## Initial Setup

Open up your terminal and move to your project directory. You can create a new project or use an existing project. If you create a new project, you will need to run `yarn init` within your project directory.

*Note: If you are using an existing project that uses `npm` or you would prefer to use `npm`, feel free to do so, just bare in mind that you will need to substitute the `yarn` commands for `npm` commands throughout the instructions provided here.*

## Installation

You will need to install the following packages:

- `@colony/colony-js-client`
- `@colony/purser-software`

Install the packages with the following command:

```
yarn add @colony/colony-js-client @colony/purser
```

## Open Wallet

Create a `colony.js` file in the root of your project and add the following:

```js

// Import the prerequisites
const { open } = require('@colony/purser-software');

// Return a wallet instance
const openWallet = async (privateKey) => {

  // Create wallet instance with private key
  const wallet = await open({ privateKey });

  // Check out the logs to see the address of the contract signer
  console.log('Wallet Address: ', wallet.address);

  // Return wallet
  return wallet;

};

```

## Connect Network

Add the following to the prerequisites:

```js

const { getNetworkClient } = require('@colony/colony-js-client');

```

Add the following below the `openWallet` example:

```js

// Return a network client instance
const getNetworkClient = async (wallet) => {

  // Get network client for given network using wallet instance
  const networkClient = await getNetworkClient(network, wallet);

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ', networkClient.contract.address);

  // Return network client
  return networkClient;

};

```

## Create Token

Add the following below the `connectNetwork` example:

```js

// An example method for creating a token
const createToken = async (networkClient, symbol) => {

  // Create a token
  const tokenAddress = await networkClient.createToken({ symbol });

  // Check out the logs to see the token address
  console.log('Token Address: ', tokenAddress);

  // Return the address
  return tokenAddress;

};

```

## Create Colony

Add the following below the `createToken` example:

```js

// An example method for creating a colony
const createColony = async (networkClient, tokenAddress) => {

  // Create a colony with the given token address
  const { eventData: { colonyAddress } } = await networkClient.createColony.send({
    tokenAddress,
  });

  // Get the colony client using the colony address
  const colonyClient = await networkClient.getColonyClientByAddress(
    colonyAddress,
  );

  // Check out the logs to see the colony address
  console.log('Colony Address:', colonyAddress);

  // Return the client
  return colonyClient;

};

```

## Create Task

Add the following below the `createColony` example:

```js

// An example method using for creating a task
const createTask = async (colonyClient, specificationHash) => {

  // Create a task and get the taskId from the event data
  const { eventData: { taskId } } = await colonyClient.createTask.send({
    specificationHash,
  });

  // Get the task using the taskId
  const task = await colonyClient.getTask.call({ taskId });

  // Check out the logs to see our new task
  console.log('Task:', task);

  // Return task
  return task;

};

```

## Execute Examples

You now have all the example methods you need to connect to the network, create a token, create a colony, and create a task. Next, you will need to add some code that will execute those methods.

Add the following below the `createTask` example:


```js

// Run examples
(async () => {

  // Set network to rinkeby
  const network = 'rinkeby';

  // Set the private key (We recommend using a wallet that you strictly use for testing)
  const privateKey = '0x000000000000000000000000000000000000000000000000000000000000000';

  // Set the token symbol
  const tokenSymbol = 'TKN';

  // Set the task specification
  const taskSpecification = 'QmThycv5h17LTx2DM5qAKNBpHKDL3YTkpfvp1krq2hmUdB';

  // Get the wallet instance
  const wallet = await getNetworkClient(privateKey);

  // Get the network client instance
  const networkClient = await getNetworkClient(network);

  // Create a token and store the returned address
  const tokenAddress = await createToken(networkClient, tokenSymbol);

  // Create a colony and store the returned colony client
  const colonyClient = await createColony(networkClient, tokenAddress);

  // Create a task with an example specification hash
  await createTask(colonyClient, taskSpecification);

})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

Before you execute the code, you will need to change `privateKey` in the `connectNetwork` example method. We recommend using the private key of a wallet that you strictly use for testing.

You are all set! All you need to do now is run `node colony.js` in your terminal, which will connect to the network, create a token, create a colony, and a create task using colonyJS.

## What's next?

* Set up a local development environment for your project in [Local Setup](/colonyjs/intro-local-setup).

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/topics-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/topics-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

* Learn about managing permissions and "authority roles" in [Managing Permissions](/colonyjs/topics-managing-permissions).
