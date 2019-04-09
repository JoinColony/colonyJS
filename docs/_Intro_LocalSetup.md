---
title: Local Setup
section: Intro
order: 3
---

In [Get Started](/colonyjs/intro-get-started), we connected to the `rinkeby` test network, created a token, created a colony, and created a task. When we are developing an application or service, using the `rinkeby` test network is not ideal; developing our application or service will go much faster and debugging our code will be much easier if we are using a local test network.

This page will show you how to set up and run a local test network, deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts to that local test network, and then connect to the local test network with colonyJS. We will also use the opportunity to dive a bit deeper into the prerequisites, supporting tools, and recommended colonyJS and colonyNetwork versions.

==TOC==

## Prerequisites

For this example, you will need the following tools:

* Git `>=2.6.4`
* Node `>=10.12.0`
* Yarn `>=1.12.0`
* Docker `>=18.09.0`

If you have these installed, feel free to skip ahead to the next section.

### Git

You will need to have [Git](https://git-scm.com/) installed. We recommend using version `2.6.4` or higher. If you do not have Git installed, check out [Install Git](https://www.atlassian.com/git/tutorials/install-git). You will need to use Git to add colonyNetwork as a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), switch between colonyNetwork versions, and save the colonyNetwork version that you will be using in your local development environment.

### Node

You will also need to have [Node](https://nodejs.org/en/) installed. We recommend using version `10.12.0` or higher. If you do not have Node installed, check out [Download Node](https://nodejs.org/en/download/) or [Node Version Manager](https://github.com/creationix/nvm). Node Version Manager (NVM) is a simple solution for managing multiple versions of Node, which is highly recommended if you are an active developer working on multiple projects.

### Yarn

You will also need to have [Yarn](https://yarnpkg.com/en/) installed. We recommended using version `1.12.0` or higher. If you do not have Yarn installed, check out [Yarn Installation](https://yarnpkg.com/lang/en/docs/install/#mac-stable). If you prefer to use NPM in your project, no problem, but you will still need Yarn installed to run a few commands in colonyNetwork. Aside from that, Yarn is only a matter of preference in the instructions below.

### Docker

You will also need to have [Docker](https://www.docker.com/) installed. We recommend using Docker Community Edition `2.0.0.0` or higher, which starts at Docker version `18.09.0`. If you do not have Docker installed check out [Get Started with Docker](https://www.docker.com/get-started). You will need to use Docker to pull down an image that will be used to compile the colonyNetwork smart contracts.

## Initial Setup

Are you developing a new project or integrating colonyJS into an existing project? If you are integrating colonyJS into an existing project and you have both Git and Yarn already initialized within your project, feel free to skip ahead to the next section.

### Initialize Git

Within the root directory, run the following command:

```
git init
```

This will initialize your project as a Git repository, which will allow you to add colonyNetwork as a submodule, switch between colonyNetwork versions, and save the colonyNetwork version that you will be using in your local development environment.

Also, now would be a good time to add a `.gitignore` file in the root of your repository and ignore `node_modules`.

### Initialize Yarn

Within the root directory, run the following command and follow the prompt:

```
yarn init
```

This will initialize your project as a Node package, which will allow you to install colonyJS and other packages.

### Add colonyNetwork

In order for colonyJS to interact with [colonyNetwork](https://github.com/JoinColony/colonyNetwork) in a local development environment, you will need to compile and deploy the colonyNetwork smart contracts to a local test network. The easiest way to ensure everyone working on your project is using the same version of the colonyNetwork smart contracts is to add colonyNetwork as a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

Within the root directory, run the following command:

```
git submodule add https://github.com/JoinColony/colonyNetwork.git lib/colonyNetwork
```

You should now have a cloned copy of colonyNetwork inside of the `lib` subdirectory.

### Set colonyNetwork version

When you added colonyNetwork as a submodule, you cloned the latest version of the the colonyNetwork repository. The latest version is not always the version that you will want to use, especially if you are developing an application or service that needs to interact with a version of the smart contracts that has already been deployed to `rinkeby` or `mainnet`.

In preparation for the launch of the colonyNetwork smart contracts on `mainnet`, we recommend you use the latest version of the colonyNetwork smart contracts that are supported in the latest version of colonyJS. This version is not an official release, which is why we will be using a commit hash rather than a release title.

Within the colonyNetwork directory, run the following command:

```
git checkout 543423abb133119a4029ac2adcc8cebb16a8c6d9
```

At this point, you will need to move back into the root directory and make your first commit (or your next commit if you added the submodule to an existing project). If you do not commit your changes, the version will not be saved.

Within the root directory, run the following commands:

```
git add .

git commit -m 'Add colonyNetwork submodule'
```

The version of the colonyNetwork submodule is now saved in the `.git` directory of your project.

## Add Scripts

This section will provide you with some script files to add to your project.

When setting up a project that multiple people will be working on, a project that needs to be configured in a particular way, and/or a project that may require a lot of steps to boot up a development environment, it can be extremely helpful to create script files that will ensure each step is executed as intended.

Within your root directory, create a subdirectory named `scripts`.

### postinstall.sh

Within the `scripts` directory, create a file named `postintall.sh` and add the following code:

```
#!/bin/bash

# Pull down docker image
docker pull ethereum/solc:0.4.23

# Update colonyNetwork submodule
git submodule update --init --recursive

# Move to colonyNetwork
cd lib/colonyNetwork

# Install colonyNetwork dependencies
yarn

# Provision colonyNetwork contracts
yarn run provision:token:contracts
```

**# Pull down docker image**

The colonyNetwork smart contracts require the `ethereum/solc:0.4.23` image from Docker. This will ensure the Docker image has been pulled down before anyone attempts to compile the colonyNetwork smart contracts within your project. There is no harm in running this command if the image has already been pulled down.

**# Update colonyNetwork**

This will update the colonyNetwork submodule to the colonyNetwork version that you set above. The `--recurseive` flag will update all of the submodules within the colonyNetwork submodule as well. This will ensure that anyone who is working on the project is using the same version of colonyNetwork and the same version of each submodule within colonyNetwork.

**# Move to colonyNetwork**

The following commands will need to be called from within the colonyNetwork directory.

**# Install colonyNetwork dependencies**

This will install the colonyNetwork dependencies. You will need the colonyNetwork dependencies to run our local test network, compile the colonyNetwork smart contracts, and deploy the colonyNetwork smart contracts to that local test network.

**# Provision colonyNetwork contracts**

This will copy smart contracts from the colonyNetwork submodules to the colonyNetwork contracts directory. Some contracts in colonyNetwork are dependent on smart contracts that live within another repository, such as the `Token.sol` contract.

### start-ganache.sh

Within the `scripts` directory, create a file named `start_ganache.sh` and add the following code:

```
#!/bin/bash

# Move to colonyNetwork
cd lib/colonyNetwork

# Start local test network
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

**# Move to colonyNetwork**

The following command will need to be called from within the colonyNetwork directory.

**# Start local test network**

This will start a local test network using [Ganache](https://github.com/trufflesuite/ganache-cli), which is included as a dependency within the colonyNetwork submodule. The test accounts defined within the `ganache-accounts.json` file within the colonyNetwork submodule will also be supplied with an initial amount of `100` test Ether and the local test network will have a gas limit of `6721975`.

### deploy-contracts.sh

Within the `scripts` directory, create a file named `deploy_contracts.sh` and add the following code:

```
#!/bin/bash

# Move to colonyNetwork
cd lib/colonyNetwork

# Compile and deploy the colonyNetwork smart contracts
./node_modules/.bin/truffle migrate --reset --compile-all
```

**# Move to colonyNetwork**

The following command will need to be called from within the colonyNetwork directory.

**# Compile and deploy the colonyNetwork smart contracts**

This will deploy the colonyNetwork smart contracts to the local test network using [Truffle](https://github.com/trufflesuite/truffle), which is included as a dependency within the colonyNetwork submodule. The flags `--reset` and `--compile-all` are included to support redeployment.

### start-trufflepig.sh

Within the `scripts` directory, create a file named `start_trufflepig.sh` and add the following code:

```
#!/bin/bash

# Move to colonyNetwork
cd lib/colonyNetwork

# Start serving contract data
../../node_modules/.bin/trufflepig --ganacheKeyFile ganache-accounts.json
```

**# Move to colonyNetwork**

The following command will need to be called from within the colonyNetwork directory.

**# Start serving contract data**

[TrufflePig](https://github.com/JoinColony/trufflepig) is a simple tool used to find and read contract data from contract files during local development. TrufflePig is not included in colonyNetwork and will need to be added as a dependency. In [Get Started](/colonyjs/intro-get-started), the contract data was loaded using `NetworkLoader`, but in a local development environment, contract data will need to be loaded using `TrufflepigLoader`.

## Finish Setup

Almost there! All you need to do now is add the script commands to your package configuration, install some dependencies, and add some code that will connect you to the local test network.

### Add commands

Within the `package.json` file, add the following script commands:

```
"scripts": {
  "postinstall": "sh scripts/postinstall.sh",
  "start-ganache": "sh scripts/start_ganache.sh",
  "deploy-contracts": "sh scripts/deploy_contracts.sh",
  "start-trufflepig": "sh scripts/start_trufflepig.sh"
},
```

This will make it easy to call all the script files that you added in the previous section.

### Install dependencies

Within the root directory, run the `postinstall.sh` script to set up colonyNetwork:

```
yarn
```

Next, you will need to install the following packages:

- `@colony/colony-js-client`
- `@colony/purser-software`
- `trufflepig`

Install `colony-js-client` and `purser-software` using the following command:

```
yarn add @colony/colony-js-client @colony/purser-software
```

Install `trufflpig` using the following command:

```
yarn add --dev trufflepig
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

### Test the local setup

Open a new terminal window and run the following command:

```
yarn start-ganache
```

Open a new terminal window and run the following command:

```
yarn deploy-contracts
```

Either use the same terminal window or open a new terminal window and run the following command:

```
yarn start-trufflepig
```

Open a new terminal window and run the following command:

```
node connectNetwork
```

You should see the address of the network contract that was deployed to your local test network!

## colonyNetwork Versions

When you want to change the version of the colonyNetwork contracts, all you will need to do is move into the colonyNetwork submodule, checkout the commit or tag you want to use, commit your change and run yarn, which will also run the `postinstall.sh` script.

Move into the colonyNetwork submodule and run the following command:

```
git checkout [commit hash or tag name]
```

Move back into the root directory and run the following commands:

```
git add .

git commit -m 'Update colonyNetwork submodule version'

yarn
```

You might also need to check to see if any changes were made to the `postinstall.sh` script within the instructions provided here. It might be best to walk through the instructions again and compare your local setup when upgrading to a new colonyNetwork version.

## What's next?

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/topics-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/topics-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Tokens and Funding](/colonyjs/topics-tokens-and-funding).

* Learn about managing permissions and "authority roles" in [Managing Permissions](/colonyjs/topics-managing-permissions).
