---
title: Get Started
section: Intro
order: 2
---

This page will show you how to use [colonyJS](https://github.com/JoinColony/colonyJS) to connect to the network, create a token, create a colony, and make a payment. We will be using the `goerli` test network, so make sure you have an Ethereum wallet with some test Ether before getting started. If you have never created an Ethereum wallet, check out [this article](https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d). To get some test Ether, you can use [Goerli Authenticated Faucet](https://faucet.goerli.mudit.blog).

*Note: If you would prefer to do this locally, check out [Local Setup](/colonyjs/intro-local-setup) and come back here once you have your local environment set up. You will need to use the private key of the first ganache test account and change `goerli` to `local` in the `getNetworkClient` method.*

## Initial Setup

### Prerequisites

For this example, you will need the following:

* Node `>=10.12.0`
* Yarn `>=1.12.0`

### Project Directory

First, open up your terminal and move to your project directory. You can create a new project or use an existing project. If you create a new project, you will need to run `yarn init`.

*Note: If you are using an existing project that uses `npm` or you would prefer to use `npm`, feel free to do so, just keep in mind that you will need to substitute `yarn` commands for `npm` commands throughout the instructions provided in this example.*

### Installation

For this example, you will need the following packages:

- `@colony/colony-js-client`
- `@colony/purser-software`
- `web3-utils`

Install the packages with the following command:

```
yarn add @colony/colony-js-client @colony/purser-software web3-utils
```

## Example Script

You will create a simple Node script. The script will run through the necessary steps to connect to the network, create a token, create a colony, and make a payment. A working example using the same methods can be found in the [colony-starter](https://github.com/JoinColony/colonyStarter/tree/master/packages/colony-starter) package.

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

  // Step 6: Mint Tokens

  // Step 7: Claim Colony Funds

  // Step 8: Add Payment

  // Step 9: Move Funds

  // Step 10: Finalize Payment

  // Step 11: Claim Payment

})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

*Note: If you change the input values and encounter a bug, it is not necessary to call every method again. For example, if you provide an invalid `amount` when minting tokens in step 6, you will already have a token and a colony, so you can comment out steps 3 and 4 and use your colony address when calling `getColonyClientByAddress`.*

### Step 1: Open Wallet

First, you will need an instance of your Ethereum wallet, which you can get with [purser-software](/purser/modules-@colonypurser-software/). We recommend using a wallet that you use for testing.

Add the following code below `// Step 1: Open Wallet`:

```js

// Get a wallet instance
const wallet = await open({
  privateKey: process.env.PRIVATE_KEY,
});

// Check out the logs to see the wallet address
console.log('Wallet Address:', wallet.address);

```

### Step 2: Get Network Client

Next, you will need to get an instance of the network client. The network client will allow you to call methods such as `createToken` and `createColony`.

Add the following code below `// Step 2: Get Network Client`:

```js

// Get a network client instance
const networkClient = await getNetworkClient('goerli', wallet);

// Check out the logs to see the network address
console.log('Network Address:', networkClient.contract.address);

```


### Step 3: Create Token

Each colony has an internal token that will be used to calculate reputation within the colony. The internal token can be any ERC20 token but it cannot be changed after you create your colony. The next step will be creating a token using our standard [colonyToken](https://github.com/JoinColony/colonyToken) contract.

Add the following code below `// Step 3: Create Token`:

```js

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

```

### Step 4: Create Colony

Now that you have a token, you can create a colony! A colony is a smart contract that will manage and govern your project, community, organization, or whatever you see fit.

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

### Step 5: Get Colony Client

In the previous step, you will use an instance of the network client to create a token and a colony but now you need to call methods specific to your colony, which will require the colony client.

Add the following code below `// Step 5: Get Colony Client`:

```js

// Get a colony client instance
const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress);

```

*Note: Just a friendly reminder. If you jumped ahead and started running the examples, you do not need to call `createToken` and `createColony` every time you run the script. You can use the token and colony you already created and update this method to use your colony address.*

### Step 6: Mint Tokens

In order to fund payments within your colony, you will first need to mint some tokens. If you did not change the input when calling `createToken`, which specified `18` decimals for your token, then the following `amount` will be equivalent to `1` token .

We also unlock the token here, allowing anyone to send tokens that they hold to anyone (which is the default behaviour for ERC20 contracts). If you wish to restrict who can send tokens, look at creating a [TokenAuthority](/colonyjs/api-tokenclient#createtokenauthority) which will let you do this.

Add the following code below `// Step 6: Mint Tokens`:

```js

// Mint tokens
await colonyClient.tokenClient.mint.send({
  address: colonyAddress,
  amount: new BN('1000000000000000000'),
});

console.log('Tokens minted!');

// Unlock the token so users can send them to each other
// This only needs to be done once, ever, but is irreversible.
await colonyClient.tokenClient.unlock.send();
console.log('Token unlocked!');

```

### Step 7: Claim Colony Funds

Great! You've minted your first token but before you can use it within your colony, you will need to claim it. Claiming colony funds will add any tokens owned by the colony contract to the funding pot associated with the root domain of the colony, which will also secure the availability of those funds.

Add the following code below `// Step 7: Claim Colony Funds`:

```js

// Claim colony funds
await colonyClient.claimColonyFunds.send({
  token: tokenAddress,
});

console.log('Colony funds claimed!');

```

### Step 8: Add Payment

Now that you have funds available in the root domain of your colony, you can fund domains, tasks, and payments within your colony. The goal within this example is to make a payment, so the next step will be adding a payment to your colony.

You will use your wallet address as the recipient, which you can justify as your reward for all the hard work you put in to setting up your colony. You will also use the address of the token you assigned as the native token for your colony and the id of the root domain so that you will earn reputation at the root level of your colony.

Add the following code below `// Step 8: Add Payment`:

```js

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

```

### Step 9: Move Funds

Next, you will need to fund your payment by moving funds from the funding pot for the colony to the funding pot for the payment. Each payment within a colony has its own funding pot in order to ensure funds are secured for that payment.

Add the following code below `// Step 9: Move Funds`:

```js

// Move funds  between funding pots
await colonyClient.moveFundsBetweenPots.send({
  fromPot: 1,
  toPot: potId,
  amount: new BN('1000000000000000000'),
  token: tokenAddress,
});

console.log('Funds moved to payment pot!');

```

### Step 10: Finalize Payment

Now that your payment has been funded, you can finalize it. A payment can only be finalized if the payment amount is available in the funding pot associated with the payment. There are additional methods available to update your payment, but once a payment is finalized, you will no longer be able to update it and the recipient will be able to claim the payment.

Add the following code below `// Step 10: Finalize Payment`:

```js

// Finalize a payment
await colonyClient.finalizePayment.send({ paymentId });

console.log('Payment finalized!');

```

### Step 11: Claim Payment

Wahoo! All your hard work has paid off. It's time to claim your payment! Claiming your payment will transfer the payment amount to your wallet and reward you with reputation within your colony.

Add the following code below `// Step 11: Claim Payment`:

```js

// Claim a payment
await colonyClient.claimPayment.send({
  paymentId,
  token: tokenAddress,
}, {
  gasLimit: 100000
});

console.log('Payment claimed!');

```

### Execute Script

You now have all the steps you need to connect to the network, create a token, create a colony, and make a payment. Now just add your private key as an environment variable using `PRIVATE_KEY` and run `node colony` in your terminal.

```
PRIVATE_KEY=<private-key> node colony
```

Congratulations! You created your first colony and made your first payment. Colonies are all about collaboration and a colony with one member who only makes payments to themselves is not a very attractive colony for others to join, so you should probably seek out some collaborators and reward them with some payments before paying yourself for any more of your "hard work".

## What's next?

* Set up a local development environment for your project in [Local Setup](/colonyjs/intro-local-setup).

* Learn about "colony roles" and managing permissions in [Colony Roles](/colonyjs/topics-colony-roles).

* Learn about native colony tokens and managing colony funds in [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/topics-domains-and-skills).

* Learn about the task lifecycle and more about payments in [Tasks and Payments](/colonyjs/topics-tasks-and-payments).
