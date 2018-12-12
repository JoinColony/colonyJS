---
title: Get Started
section: Docs
order: 1
---

Using colonyJS, you can query the network for information about tasks, create new tasks, modify tasks, commit and reveal task ratings, and finalize tasks to trigger payouts -- all from within your application or service.

This page provides instructions on how to set up a local test network, deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts to that local test network, and then use colonyJS to create your first colony with its own native token!

==TOC==

## Prerequisites

First of all, we will need to set up some prerequisites.

If you don't have them installed already, you'll need to install `nodejs` and `yarn`.

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

### Ganache

To locally deploy any smart contracts, we will need to run a local test network.

We will use [Ganache CLI](https://github.com/trufflesuite/ganache-cli) for this, so let's make sure we have `ganache-cli` installed globally:

```
yarn global add ganache-cli
```

### TrufflePig

There are a few different loaders that colonyJS supports but we want to interact with contracts deployed locally, so we need to serve them from a local source. Thankfully, we have a trusty [TrufflePig](https://github.com/JoinColony/trufflepig) and the `TrufflepigLoader`!

Let's add `trufflepig` to our globally installed packages:

```
yarn global add trufflepig
```

### Additional Tooling

You will also need a JavaScript environment that supports `async`/`await`, since colonyJS uses promises extensively.

Recent versions of Node and Chrome support promises out of the box, but you may want to consider using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) for better support when developing your application or service.

## Fire up a test network

For our local test network, there are a few tweaks to default settings that need to be made: We want to set the `gasLimit` to `7000000` and we want all our account keys to be stored in a `.json` file that we'll be able to easily call inside our application.

With `ganache-cli` we can do this all in one command at start. Open up a new terminal window and, within the colonyNetwork directory, run the following command:

```
./node_modules/.bin/ganache-cli -d --gasLimit 7000000 --acctKeys ganache-accounts.json
```

This will start up a new test network that keeps account keys in a place that is easy to access for TrufflePig.

## Deploy smart contracts

Now you need to deploy the colonyNetwork smart contracts to your freshly running local test network.

Open up a new terminal window and, within the colonyNetwork directory, deploy the colonyNetwork smart contracts with `truffle` using the following command:

```
./node_modules/.bin/truffle migrate --reset --compile-all
```

*Note: This step requires that you use a specific version of `truffle` that was included when you set up the colonyNetwork directory with `yarn`. If you have truffle installed globally, using the global version might cause an error. The flags '--reset' and '--compile-all' are needed if you're re-deploying the contracts.*

## Put TrufflePig to work

After the contracts have deployed, start TrufflePig, pointing it to the same accounts you used when starting `ganache-cli`:

```
trufflepig --ganacheKeyFile ganache-accounts.json
```

## Initialize your project

Move back to the working directory of your choice.

Now, create a new directory for your project and initialize it with `yarn init`:

```
mkdir exampleProject

cd exampleProject

yarn init
```

Add the required libraries to your project with `yarn`:

```
yarn add @colony/colony-js-adapter-ethers@1.7.0 @colony/colony-js-client@1.7.5 @colony/colony-js-contract-loader-http@1.6.2 ethers
```

*As you can see in the above command, we have included specific colonyJS package versions. These are recommended versions that have been tested with the colonyNetwork version that we deployed to our local test network.*

## Create a new colony

Inside your new project directory, you can then start to work with colonyJS to communicate with your colony. Create a new file `example.js`, and add the following code:

```js

// Import the prerequisites
const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// Import the ColonyNetworkClient
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');

// Create an instance of the Trufflepig contract loader
const loader = new TrufflepigLoader();

// Create a provider for the local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://localhost:8545/');

// The following methods use Promises
const example = async () => {

  // Get the private key from the first account from the ganache-accounts
  // using the Trufflepig contract loader
  const { privateKey } = await loader.getAccount(0);

  // Create a wallet with the private key (so we have a balance we can use)
  const wallet = new Wallet(privateKey, provider);

  // Create an adapter (powered by ethers)
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // Connect to ColonyNetwork with the adapter!
  const networkClient = new ColonyNetworkClient({ adapter });

  await networkClient.init();

  // Let's deploy a new ERC20 token for our Colony.
  // You could also skip this step and use a pre-existing/deployed contract.
  const { meta: { receipt: { contractAddress } } } = await networkClient.createToken.send({
    name: 'Cool Colony Token',
    symbol: 'COLNY',
  });

  // Congrats, you've created a Token!
  console.log('Token address: ' + contractAddress);

  // Create a cool Colony!
  const {
    eventData: { colonyId, colonyAddress },
  } = await networkClient.createColony.send({ tokenAddress: contractAddress });

  // Congrats, you've created a Colony!
  console.log('Colony ID: ' + colonyId);
  console.log('Colony address: ' + colonyAddress);

  // For a colony that exists already, you just need its ID:
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // You can also get the Meta Colony:
  const metaColonyClient = await networkClient.getMetaColonyClient();

  console.log('Meta Colony address: ' + metaColonyClient.contract.address);

};

// Execute the example
example()
  .then(() => process.exit())
  .catch(err => console.error(err));

```

Save the file, and run with `node example.js`.

You should see your new colony and token appear on your private test network!

## What's next?

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/docs-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/docs-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Managing Funds](/colonyjs/docs-managing-funds).

* Learn about [Loaders](/colonyjs/docs-loaders) and reconfigure the above example for a remote network by switching to the [NetworkLoader](/colonyjs/api-contractloader/#networkloader).
