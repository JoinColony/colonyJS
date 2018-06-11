---
title: Get Started
section: Docs
order: 1
---
Using colonyJS, you can query the blockchain for information about tasks, create new tasks, modify them, commit and reveal ratings, and finalize them to trigger payouts -- all from within your application.

This page details all the necessary steps to set up colonyJS in your local environment, deploy a local set of colonyNetwork contracts for testing, create a new colony with its own token, and go through the whole task workflow from your colonyJS application.

==TOC==

## Prerequisites
First of all, we will need to set up some prerequisites:

If you don't have them installed already, you'll need to install `nodejs`, `npm`, and `yarn` to your system.

### Colony Network

colonyJS requires the colonyNetwork contracts to interact with. In the working directory of your choice, clone the latest version of the contracts:
```
$ git clone --recursive https://github.com/JoinColony/colonyNetwork.git
```

*Because colonyNetwork is under continuous development, it's possible that the version you get is ahead of this documentation. Make sure you're on the same page as this guide by checking out a specific version of the contracts:*
```
$ cd colonyNetwork/

$ git checkout b96b30603397b0a2cbcfa42e3fa6ab8d0c175142 

$ yarn
```

### Ganache

The colonyNetwork contracts are, for the moment, not on a public network for testing. So to interact with a deployed version of the contracts, you'll need your own local blockchain for testing.

For general development and testing, the full Ganache has a nice UI to get real-time information about your test chain, and instructions for installation can be found on the [website](http://truffleframework.com/ganache/).

We want a bit more flexibility with our accounts (to use in colonyJS), so it'll be easier to use `ganache-cli` in this case.

```
$ yarn global add ganache-cli
```

### TrufflePig
Our application will need its *own copy* of the colonyNetwork contracts to read, so that it knows how to format the data it sends and recieves to/from the blockchain. colonyJS uses the [loaders](/colonyjs/docs-loaders) method to accomplish this.

There are a few different loaders that colonyJS supports to get its contracts from, such as the etherscan.io API. In this case, the contracts we want to use are not deployed yet, so we need to serve them from a local source. Thankfully, we have a trusty TrufflePig!

Install trufflepig globally:
```
$ yarn global add trufflepig
```

TrufflePig will take truffle-generated contract files and serve them to colonyJS over a simple HTTP API for local development.


### Fire up your testing environment

For our local test blockchain, there are a few tweaks to default settings that need to be made: We want to set the `gasLimit` to 7000000, and we want all our account keys to be stored in a .json file that we'll be able to easily call inside our application. With `ganache-cli` we can do this all in one command at start. Open up a new terminal window, and `cd` back to your colonyNetwork/ working directory:
```
$ ganache-cli -d --gasLimit 7000000 --acctKeys ganache-accounts.json
```

This will start up a new test blockchain that keeps account keys in a place that is easy to access for TrufflePig and colonyJS.

Now you need to deploy the Colony contracts to your freshly running local testing blockchain.

Open up a new terminal window, and `cd` to the colonyNetwork directory again.

Deploy your contracts with truffle:
```
$ ./node_modules/.bin/truffle migrate --reset --compile-all
```
*Note: this step requires that you use a specific version of `truffle` that was included when you set up the colonyNetwork directory with `yarn`. If you have truffle installed globally, using the global version might cause an error. The flags '--reset' and '--compile-all' are needed if you're re-deploying the contracts*

Wait a little bit for the contracts to complile and deploy on your ganache instance.

After the contracts have deployed, you can start up TrufflePig, pointing it to the same accounts that you created with `ganache-cli`:
```
$ trufflepig --ganacheKeyFile ganache-accounts.json
```


### Initialize your project
Create a new directory for your project, and initialize it with `npm init`:
```
$ mkdir exampleProject

$ cd exampleProject/

$ npm init
```

Add the required libraries to your project with `yarn`:

```bash
yarn add @colony/colony-js-client @colony/colony-js-adapter-ethers @colony/colony-js-contract-loader-http ethers
```


### Tooling and further reading

It's also beneficial to have a JavaScript environment that supports `async`/`await`, since colonyJS uses Promises extensively. Recent versions of Node and Chrome support Promises out of the box, but you may want to consider using [webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) for better support.

## Create a new colony with `example.js`

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

// Create a provider for local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://localhost:8545/');

// The following methods use Promises
const example = async () => {

  // Get the private key from the first account from the ganache-accounts
  // through trufflepig
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
  const tokenAddress = await networkClient.createToken({
    name: 'Cool Colony Token',
    symbol: 'COLNY',
  });
  console.log('Token address: ' + tokenAddress);

  // Create a cool Colony!
  const {
    eventData: { colonyId, colonyAddress },
  } = await networkClient.createColony.send({ tokenAddress });

  // Congrats, you've created a Colony!
  console.log('Colony ID: ' + colonyId);
  console.log('Colony address: ' + colonyAddress);

  // For a colony that exists already, you just need its ID:
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Or alternatively, just its address:
  // const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress);

  // You can also get the Meta Colony:
  const metaColonyClient = await networkClient.getMetaColonyClient();
  console.log('Meta Colony address: ' + metaColonyClient.contract.address);
};
```

Save the file, and run with `$ node example.js` - You should see your new cool colony and token appear on your private blockchain!


## Funding your Colony
Whether you've brought your ERC20 token from an existing token contract or created a new one at the same time as the colony (as shown in the above example), you can use the [tokenClient](/colonyJS/api-tokenclient/) to call and sent transactions relating to your colony's funding. This client handles all the functions in the ERC20 standard interface, as well as `mint` and `burn`. Functions that would ordinarily be performed by the contract owner may be performed by anyone in the colony with ADMIN authority. You can learn more about authority roles in the [authorityClient API](/docs-authorityclient/).

Your colony's token is an important component in the [reputation system](/colonyNetwork/docs-reputation/). Any task payouts in the native token of the colony grant the recipient reputation (proportional to the task rating). Any member of the colony's combined reputation and token holdings determine the amount they can claim from the [rewards pot](/colonyNetwork/docs-pots-and-funding/).

```js
// Make the colony contract the owner of the token
await colonyClient.token.setOwner.send({ owner: colonyClient.contract.address });

// Add yourself as an admin
await colonyClient.authority.setUserRole.send({ user: wallet.address, role: 'ADMIN' });

// Mint some tokens
await colonyClient.mintTokens.send({ amount: 1000 });

// Get the total supply
const { amount } = await colonyClient.token.getTotalSupply.call();
// 1000
```

What's next? Continue on to the [Task Lifecycle](/colonyjs/docs-task-lifecycle) to learn how to interact with colony tasks.
