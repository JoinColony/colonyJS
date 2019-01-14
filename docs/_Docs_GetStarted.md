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

Using colonyJS in a local development environment will require a locally deployed version of the colonyNetwork smart contracts.

In the working directory of your choice, clone the latest version of [colonyNetwork](https://github.com/JoinColony/colonyNetwork):

```
git clone --recursive https://github.com/JoinColony/colonyNetwork.git
```

*Because colonyNetwork is under continuous development, it's possible that the version you get is ahead of this documentation. Make sure you're on the same page as this guide by checking out a specific version of the contracts:*

```
cd colonyNetwork

git checkout f73dc84a41f5fc1962c999a24e13b15ba491b8a6

yarn

```

Next we'll need to initialize and provision the colonyNetwork submodules:

```

git submodule update --init --recursive

yarn provision:token:contracts

```

### TrufflePig

There are a few different loaders that colonyJS supports but we want to interact with contracts deployed locally, so we need to serve them from a local source. Thankfully, we have a trusty [TrufflePig](https://github.com/JoinColony/trufflepig) and the `TrufflepigLoader`!

Let's add `trufflepig` to our globally installed packages:

```
yarn global add trufflepig
```

## Fire up a test network

For our local test network, there are a few tweaks to default settings that need to be made: We want to set the `gasLimit` to `6721975` and we want all our account keys to be stored in a `.json` file that we'll be able to easily call inside our application.

With `ganache-cli` we can do this all in one command at start. Open up a new terminal window and, within the colonyNetwork directory, run the following command:

```
ganache-cli --acctKeys "./ganache-accounts.json" --noVMErrorsOnRPCResponse --gasLimit 6721975 \
  --account="0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae, 100000000000000000000" \
  --account="0xe9aebe8791ad1ebd33211687e9c53f13fe8cca53b271a6529c7d7ba05eda5ce2, 100000000000000000000" \
  --account="0x6f36842c663f5afc0ef3ac986ec62af9d09caa1bbf59a50cdb7334c9cc880e65, 100000000000000000000" \
  --account="0xf184b7741073fc5983df87815e66425928fa5da317ef18ef23456241019bd9c7, 100000000000000000000" \
  --account="0x7770023bfebe3c8e832b98d6c0874f75580730baba76d7ec05f2780444cc7ed3, 100000000000000000000" \
  --account="0xa9442c0092fe38933fcf2319d5cf9fd58e3be5409a26e2045929f9d2a16fb090, 100000000000000000000" \
  --account="0x06af2c8000ab1b096f2ee31539b1e8f3783236eba5284808c2b17cfb49f0f538, 100000000000000000000" \
  --account="0x7edaec9e5f8088a10b74c1d86108ce879dccded88fa9d4a5e617353d2a88e629, 100000000000000000000" \
  --account="0xe31c452e0631f67a629e88790d3119ea9505fae758b54976d2bf12bd8300ef4a, 100000000000000000000" \
  --account="0x5e383d2f98ac821c555333e5bb6109ca41ae89d613cb84887a2bdb933623c4e3, 100000000000000000000" \
  --account="0x33d2f6f6cc410c1d46d58f17efdd2b53a71527b27eaa7f2edcade351feb87425, 100000000000000000000" \
  --account="0x32400a48ff16119c134eef44e2627502ce6e367bc4810be07642275a9db47bf7, 100000000000000000000"
```

This will start up a new test network that keeps account keys in a place that is easy to access for TrufflePig.

## Deploy smart contracts

Now you need to deploy the colonyNetwork smart contracts to your local test network.

Open up a new terminal window and, within the colonyNetwork directory, deploy the colonyNetwork smart contracts with `truffle` using the following command:

```
./node_modules/.bin/truffle migrate --compile-all --reset
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

Add the required colonyJS libraries to your project with `yarn`:

```
yarn add @colony/colony-js-adapter-ethers @colony/colony-js-client @colony/colony-js-contract-loader-http
```

Next, we will need to require a specific version of the `ethers` package to work with the version of `ganache-cli` that we have installed in the version of colonyNetwork that we are using in this example.

```
yarn add ethers@3.0.27
```

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
