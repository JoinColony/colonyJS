---
title: colony-starter-basic
section: Packages
order: 1
---

## About

The `colony-starter-basic` package is a starter project that demonstrates how to use [colonyJS](https://github.com/JoinColony/colonyJS) (a JavaScript client for [colonyNetwork](https://github.com/JoinColony/colonyNetwork)). This project is set up to start a local test network using [Ganache](https://github.com/trufflesuite/ganache-cli) and then deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) contracts to the local test network using [Truffle](https://github.com/trufflesuite/truffle). This project also uses [TrufflePig](https://github.com/JoinColony/trufflepig) to find and read the deployed contracts during local development.

This project includes example scripts also found in the colonyJS [Local Setup](/colonyjs/intro-local-setup) documentation. In order to help you hit the ground running with your new project, this starter project includes all of the examples from the docs plus some, and it gives you the opportunity to execute and test those examples with a few simple commands.

## Prerequisites

- Yarn 1.12.3
- Docker
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out the [Linux Setup](/colonystarter/docs-linux-setup/) page to ensure Yarn and Docker are set up accordingly._

## Installation

Globally install the `colony-starter` package.

```
yarn global add @colony/colony-starter
```

Install the `colony-starter-basic` package.

```
colony-starter colony-starter-basic
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the `colony-starter-basic` package in one line without having to globally add the [colony-starter](/colonystarter/packages-colony-starter/) package:

```
npx -p @colony/colony-starter colony-starter colony-starter-basic
```

## Run Examples

### Start Network

Open a new terminal window and start [Ganache](https://github.com/trufflesuite/ganache-cli):

```
yarn start-ganache
```

### Deploy Contracts

Open a new terminal window and deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) contracts:

```
yarn deploy-contracts
```

### Start TrufflePig

Once the contracts have been deployed, start [TrufflePig](https://github.com/JoinColony/trufflepig):

```
yarn start-trufflepig
```

### Run Example Script

Open a new terminal window and run the example script:

```
yarn start
```

### Run Example Tests

Open a new terminal window and run the example tests:

```
yarn test
```
