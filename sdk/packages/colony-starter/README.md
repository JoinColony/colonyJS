# colony-starter

This is a simple starter project that demonstrates how to use [colonyJS](https://github.com/JoinColony/colonyJS) (a JavaScript client for [colonyNetwork](https://github.com/JoinColony/colonyNetwork)). This project is set up to start a local test network using [Ganache](https://github.com/trufflesuite/ganache-cli) and then deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) contracts to the local test network using [Truffle](https://github.com/trufflesuite/truffle). This project also uses [TrufflePig](https://github.com/JoinColony/trufflepig) to find and read the deployed contracts during local development.

This project includes example scripts also found in the [Local Setup](https://joincolony.github.io/colonyjs/intro-local-setup/) and [Task Lifecycle](https://docs.colony.io/colonyjs/topics-task-lifecycle/) pages of the [colonyJS Docs](https://docs.colony.io/colonyjs/intro-welcome). In order to help you hit the ground running with your new project, this starter project includes all of the examples from the docs plus some, and it gives you the opportunity to execute and test those examples with a few simple commands.

## Prerequisites

- Yarn 1.12.3
- Docker
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

## Installation

### Step 1

Globally install the [colony-cli](/packages/colony-cli) package:

```
yarn global add @colony/colony-cli
```

### Step 2

Move to your working directory and unpack the [colony-starter](/packages/colony-starter) package:

```
colony build colony-starter
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the `colony-starter` package in one line without having to globally install the [colony-cli](../colony-cli) package:

```
npx -p @colony/colony-cli colony build colony-starter
```

### Step 3

Move to your new project directory and follow the instructions below:

```
cd colony-starter
```

## Development

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
