---
title: Get Started
section: Docs
order: 1
---

Using the colonyJS library, you can query a given network for information about tasks, create new tasks, modify tasks, commit and reveal task ratings, and finalize tasks to trigger payouts -- all from within your application or service.

This page provides instructions on how to set up a local test network, deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts to that local test network, and then use colonyJS to create your first colony with its own native token!

==TOC==

## Prerequisites

First of all, we will need to set up some prerequisites.

### Node

You will need to have `node` installed. We recommended using `node` version `10.12.0`. An easy solution for managing `node` versions is `nvm`. If you do not have `node` installed, check out [Download Node](https://nodejs.org/en/download/) or [Node Package Manager](https://github.com/creationix/nvm).

*Note: You will need a JavaScript environment that supports `async`/`await`, since colonyJS uses promises extensively. Recent versions of `node` support promises out of the box, but when you start building beyond the example provided here, you may want to consider using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) for better support.*

### Yarn

You will also need to install `yarn`. We recommended using `yarn` version `1.12.0` or higher. Check out the [Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#mac-stable) documentation and then select your operating system for install instructions.

### Docker

In order to compile the colonyNetwork smart contracts, you will need to have Docker installed and running. We recommend using Docker Community Version `2.0.0.0`. You can find instructions for installing Docker here: [Docker Installation](https://docs.docker.com/install/).

The colonyNetwork smart contracts require the `ethereum/solc:0.4.23` Docker image, so we will need to pull down this image before we can begin. Make sure Docker is installed and run the following command:

```
docker pull ethereum/solc:0.4.23
```

### colonyNetwork

Using colonyJS in a local development environment will require a locally deployed version of the colonyNetwork smart contracts, so the first order of business will be pulling down the colonyNetwork repository.

In the working directory of your choice, clone the latest version of [colonyNetwork](https://github.com/JoinColony/colonyNetwork):

```
git clone --recursive https://github.com/JoinColony/colonyNetwork.git
```

*Because colonyNetwork is under continuous development, it's possible that the version you get is ahead of this documentation. Make sure you're on the same page as this guide by checking out a specific version of the contracts:*

```
cd colonyNetwork

git checkout d50abbeb9f119850cb70e9ec854576123a707205

yarn
```

### TrufflePig

There are a few different loaders that colonyJS supports but we want to interact with contracts deployed locally, so we need to serve them from a local source. Thankfully, we have a trusty [TrufflePig](https://github.com/JoinColony/trufflepig) and the `TrufflepigLoader`!

Let's add `trufflepig` to our globally installed packages:

```
yarn global add trufflepig
```

## Fire up a test network

For our local test network, there are a few tweaks to default settings that need to be made: We want to set the `gasLimit` to `7000000` and we want all our account keys to be stored in a `.json` file that we'll be able to easily call inside our application.

With `ganache-cli` we can do this all in one command at start. Open up a new terminal window and, within the colonyNetwork directory, run the following command:

```
./node_modules/.bin/ganache-cli -d --gasLimit 7000000 --acctKeys ganache-accounts.json
```

This will start up a new test network that keeps account keys in a place that is easy to access for TrufflePig.

## Deploy smart contracts

Now you need to deploy the colonyNetwork smart contracts to your local test network.

Open up a new terminal window and, within the colonyNetwork directory, deploy the colonyNetwork smart contracts with `truffle` using the following command:

```
./node_modules/.bin/truffle migrate --reset --compile-all
```

*Note: This step requires that you use a specific version of `truffle` that was included when you set up the colonyNetwork directory with `yarn`. If you have `truffle` installed globally, using the global version might cause an error. The flags `--reset` and `--compile-all` are needed if you're re-deploying the contracts.*

## Put TrufflePig to work

After the contracts have deployed, start `trufflepig`, pointing it to the same accounts you used when starting `ganache-cli`:

```
trufflepig --ganacheKeyFile ganache-accounts.json
```

## Initialize your project

Return to a working directory of your choice.

Now, create a new directory for your project and initialize it with `yarn init`:

```
mkdir colonyExample

cd colonyExample

yarn init
```

Add the required libraries to your project with `yarn`:

```
yarn add @colony/colony-js-adapter-ethers@1.7.0 @colony/colony-js-client@1.7.5 @colony/colony-js-contract-loader-http@1.6.2 ethers
```

*As you can see in the above command, we have included specific colonyJS package versions. These are recommended versions that have been tested with the colonyNetwork version that we deployed to our local test network.*

## Create a new colony

Inside your new project directory, you can then start to work with colonyJS to communicate with your colony. Create a new file `index.js` in the root directory, and add the following code:

```js

// Import the prerequisites
const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');

// Create an instance of TrufflepigLoader
const loader = new TrufflepigLoader();

// Create an instance of JsonRPCProvider using the url of our test network
const provider = new providers.JsonRpcProvider('http://localhost:8545/');

// Create an async function
const example = async () => {

  // Get the private key from the first account
  const { privateKey } = await loader.getAccount(0);

  // Create an instance of Wallet using the private key and provider
  const wallet = new Wallet(privateKey, provider);

  // Create an instance of EthersAdapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // Create an instance of ColonyNetworkClient using the adapter
  const networkClient = new ColonyNetworkClient({ adapter });

  // Initialize the client
  await networkClient.init();

  // Congrats, you've connected to the network!
  console.log('network address: ' + networkClient.contract.address);

  // Create an ERC20 token (you could also skip this step and use a pre-existing token)
  const { meta: { receipt: { contractAddress } } } = await networkClient.createToken.send({
    name: 'Token',
    symbol: 'TKN',
  });

  // Congrats, you've created an ERC20 token!
  console.log('token address: ' + contractAddress);

  // Create a colony using the token address of the ERC20 token we created
  const { eventData: { colonyId, colonyAddress } } = await networkClient.createColony.send({
    tokenAddress: contractAddress,
  });

  // Congrats, you've created a colony!
  console.log('colony id: ' + colonyId);
  console.log('colony address: ' + colonyAddress);

  // Get an initialized ColonyClient for the colony we just created
  const colonyClient = await networkClient.getColonyClient(colonyId);

};

// Execute the example async function
example()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

Save the file, and run the example:

```
node index.js
```

You should see your new colony appear on your local test network!

## What's next?

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/docs-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/docs-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Managing Funds](/colonyjs/docs-managing-funds).

* Learn about [Loaders](/colonyjs/docs-loaders) and reconfigure the above example for a remote network by switching to the [NetworkLoader](/colonyjs/api-contractloader/#networkloader).
