---
title: Local Setup
section: Intro
order: 3
---

This page will show you how to set up and run a local test network, deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts to that local test network, and then connect to that local test network with colonyJS.

==TOC==

## Prerequisites

For this example, you will need the following tools:

* Git `>=2.6.4`
* Node `>=10.12.0`
* Yarn `>=1.12.0`
* Docker `>=18.09.0`

If you have these installed, feel free to skip ahead to the next section.

### Git

You will need to have [Git](https://git-scm.com/) installed. We recommend using version `2.6.4` or higher. If you do not have Git installed, check out [Install Git](https://www.atlassian.com/git/tutorials/install-git). We also recommend [connecting to Github with SSH](https://help.github.com/en/articles/connecting-to-github-with-ssh).

### Node

You will need to have [Node](https://nodejs.org/en/) installed. We recommend using version `10.12.0` or higher. If you do not have Node installed, check out [Download Node](https://nodejs.org/en/download/). We highly recommend using [Node Version Manager](https://github.com/creationix/nvm) or [Node Version Management](https://github.com/tj/n) to manage multiple Node versions.

### Yarn

All of our repositories use [Yarn](https://yarnpkg.com/en/) and some of our tools require that you have Yarn installed. You are more than welcome to try running commands with [NPM](https://www.npmjs.com/get-npm) but we recommend using Yarn version `1.12.0` or higher. If you do not have Yarn installed, check out [Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

### Docker

You will also need to have [Docker](https://www.docker.com/) installed. The [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts use a Docker image for the solidity compiler. We recommend using Docker Community Edition `2.0.0` or higher, which starts at version `18.09.0`. If you do not have Docker installed, check out [Get Started with Docker](https://www.docker.com/get-started).

## Initial Setup

Are you building a project from scratch or integrating colonyJS into an existing project? If the latter and you have both Git and Yarn already initialized, you can skip ahead to the next section.

### Initialize Git

Within the root directory, run the following command:

```
git init
```

This will initialize your project as a Git repository. Now would be a good time to add a `.gitignore` file and include `node_modules` and any other files you want Git to ignore.

### Initialize Yarn

Within the root directory, run the following command and follow the prompt:

```
yarn init
```

This will initialize your project as a Node package, allowing you to install other packages.

## Add Scripts

In order for colonyJS to interact with [colonyNetwork](https://github.com/JoinColony/colonyNetwork) in a local development environment, you will need to compile the colonyNetwork smart contracts, deploy the contracts to a local test network, and then make the contract data available within your project.

Do not fear! We created a simple command line tool to make this easier for you. No need to install and configure services and add the colonyNetwork repository as a submodule to start building with colonyJS. We bundled up everything for you in [colony-cli](http://docs.colony.io/colonystarter/cli-colony-cli).

[colony-cli](http://docs.colony.io/colonystarter/cli-colony-cli) is a command line tool that pulls down and installs [colonyNetwork](https://github.com/JoinColony/colonyNetwork) behind the scenes and makes services within colonyNetwork available via `colony` commands. Everything you need to run a local test network, compile and deploy the colonyNetwork smart contracts, and serve the contract data are made accessible in `colony-cli` using the `service` command.

### Install colony-cli

Within your project, install the [colony-cli](http://docs.colony.io/colonystarter/cli-colony-cli) package:

```
yarn add @colony/colony-cli
```

### Add script commands

Within your `package.json` file, add the following `scripts`:

```
"scripts": {
  "start-ganache": "colony service start-ganache",
  "deploy-contracts": "colony service deploy-contracts",
  "start-trufflepig": "colony service start-trufflepig"
}
```

*Note: You can specify different colonyNetwork versions with the `--specific` option added to any of the `service` commands. The default version is using the [glider-rc.1](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.1) release. Using `develop` is not recommended if you are using colonyJS because colonyJS will not yet have an official release that supports an unreleased version of the colonyNetwork smart contracts.*

## Add colonyJS

### Install dependencies

Next, you will need to install the following packages:

- `@colony/colony-js-client`
- `@colony/purser-software`

You can install these packages using the following command:

```
yarn add @colony/colony-js-client @colony/purser-software
```

### Add connectNetwork script

Create a `connectNetwork.js` file in the root directory and add the following code:

```js

const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

(async () => {

  // Get a wallet instance (using the private key of the first ganache test account)
  const wallet = await open({
    privateKey: '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
  });

  // Check out the logs to see the wallet address
  console.log('Wallet Address: ', wallet.address);

  // Get a network client instance
  const networkClient = await getNetworkClient('local', wallet);

  // Check out the logs to see the network address
  console.log('Network Address: ', networkClient.contract.address);

})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

## Test Local Setup

### Start Ganache

Open a new terminal window and run the following command:

```
yarn start-ganache
```

### Deploy Contracts

Open a new terminal window and run the following command:

```
yarn deploy-contracts
```

### Start Trufflepig

Open a new terminal window and run the following command:

```
yarn start-trufflepig
```

### Connect Network

Open a new terminal window and run the following command:

```
node connectNetwork
```

You should see the address of the network contract that was deployed to your local test network!

## What's next?

* Learn about "colony roles" and managing permissions in [Colony Roles](/colonyjs/topics-colony-roles).

* Learn about native colony tokens and managing colony funds in [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/topics-domains-and-skills).

* Learn about the task lifecycle and more about payments in [Tasks and Payments](/colonyjs/topics-tasks-and-payments).
