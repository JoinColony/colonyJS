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

You will need to have [Git](https://git-scm.com/) installed. We recommend using version `2.6.4` or higher. If you do not have Git installed, check out [Install Git](https://www.atlassian.com/git/tutorials/install-git).

### Node

You will need to have [Node](https://nodejs.org/en/) installed. We recommend using version `10.12.0` or higher. If you do not have Node installed, check out [Download Node](https://nodejs.org/en/download/) or [Node Version Manager](https://github.com/creationix/nvm).

### Yarn

You will also need to have [Yarn](https://yarnpkg.com/en/) installed. We recommended using version `1.12.0` or higher. If you do not have Yarn installed, check out [Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

### Docker

You will also need to have [Docker](https://www.docker.com/) installed. We recommend using Docker Community Edition `2.0.0` or higher, which starts at Docker version `18.09.0`. If you do not have Docker installed check out [Get Started with Docker](https://www.docker.com/get-started).

## Initial Setup

Are you building a new project from scratch or integrating colonyJS into an existing project? If you are integrating colonyJS into an existing project and you have both Git and Yarn already initialized within your project, feel free to skip ahead to the next section.

### Initialize Git

Within the root directory, run the following command:

```
git init
```

This will initialize your project as a Git repository. Now would be a good time to add a `.gitignore` file in the root of your repository and include `.env`, `node_modules`, and any other files you don't want to include when you push your code to a remote repository.

### Initialize Yarn

Within the root directory, run the following command and follow the prompt:

```
yarn init
```

This will initialize your project as a Node package, which will allow you to install npm packages.

## Add Scripts

In order for colonyJS to interact with [colonyNetwork](https://github.com/JoinColony/colonyNetwork) in a local development environment, you will need to compile the colonyNetwork smart contracts, deploy the contracts to a local test network, and then read the contract data in order to interact with the contracts.

Do not fear! We created a tool to make this process as simple as possible. There are a lot of services that you do not need to install and run separately to start interacting with the colonyNetwork smart contracts but we have made them all accessible in a command line tool.

[colony-cli](http://docs.colony.io/colonystarter/cli-colony-cli) is a command line tool that installs colonyNetwork behind the scenes and makes services within colonyNetwork available via `colony` commands within your project. The services you need to run a local test network, deploy the colonyNetwork contracts to that local test network, and serve the deployed contract data are all included in `colony-cli`.

### Install colonyCLI

Within the root directory, install [colony-cli](http://docs.colony.io/colonystarter/cli-colony-cli):

```
yarn add @colony/colony-cli
```

### Add script commands

Within your `package.json` file, we recommend adding the following `scripts`:

```
"scripts": {
  "start-ganache": "colony service start-ganache",
  "deploy-contracts": "colony service deploy-contracts",
  "start-trufflepig": "colony service start-trufflepig"
}
```

Also, switching colonyNetwork versions that you want to use in your project is as simple as using a `--specific` option. The default version is using the [glider-rc.1](https://github.com/JoinColony/colonyNetwork/tree/glider-rc.1) release. If a new release came out, and you are not ready to update, you can add the `--specific` option:

```
"scripts": {
  "start-ganache": "colony service start-ganache --specific glider-rc.1",
  "deploy-contracts": "colony service deploy-contracts",
  "start-trufflepig": "colony service start-trufflepig"
}
```

*Note: Using `--specific develop` is not recommended if you are using colonyJS because colonyJS will not yet have an official release that supports an unreleased version of the colonyNetwork.*

## Add colonyJS

### Install dependencies

Next, you will need to install the following packages:

- `@colony/colony-js-client`
- `@colony/purser-software`

Install `colony-js-client` and `purser-software` using the following command:

```
yarn add @colony/colony-js-client @colony/purser-software
```

### Add `connectNetwork`

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

### Deploy colonyNetwork contracts

Open a new terminal window and run the following command:

```
yarn deploy-contracts
```

### Start Trufflepig

Either use the same terminal window or open a new terminal window and run the following command:

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

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/topics-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/topics-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

* Learn about managing permissions and "authority roles" in [Managing Permissions](/colonyjs/topics-managing-permissions).
