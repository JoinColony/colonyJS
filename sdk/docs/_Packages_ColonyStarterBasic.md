---
title: colony-starter-basic
section: Packages
order: 1
---

## About

The `colony-starter-basic` package is a starter project that demonstrates how to use [colonyJS](https://github.com/JoinColony/colonyJS) (a JavaScript client for [colonyNetwork](https://github.com/JoinColony/colonyNetwork)). This project is set up to start a local test network using [Ganache](https://github.com/trufflesuite/ganache-cli) and then deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) contracts to the local test network using [Truffle](https://github.com/trufflesuite/truffle). This project also uses [TrufflePig](https://github.com/JoinColony/trufflepig) to find and read the deployed contracts during local development.

This project includes example scripts also found in the [Get Started](https://joincolony.github.io/colonyjs/docs-get-started/) and [Task Lifecycle](https://docs.colony.io/colonyjs/docs-task-lifecycle/) pages of the [colonyJS Docs](https://docs.colony.io/colonyjs/docs-overview). In order to help you hit the ground running with your new project, this starter project includes all of the examples from the docs plus some, and it gives you the opportunity to execute and test those examples with a few simple commands.

## Prerequisites

- Yarn
- Node 9.5

_You may find it helpful to use Node Version Manager (`nvm`) to manage node versions._

## Installation

Globally install the `colony-starter` package.

```
yarn global add @colony/colony-starter
```

Install the `colony-starter-basic` package.

```
colony-starter colony-starter-basic
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

Open a new terminal window and start [TrufflePig](https://github.com/JoinColony/trufflepig):

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
