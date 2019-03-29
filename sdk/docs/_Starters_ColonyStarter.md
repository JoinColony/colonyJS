---
title: colony-starter
section: Starters
order: 1
---

The `colony-starter` package is a boilerplate using [colonyJS](https://github.com/JoinColony/colonyJS). This package is set up for local development using [Ganache](https://github.com/trufflesuite/ganache-cli), [colonyNetwork](https://github.com/JoinColony/colonyNetwork), and [TrufflePig](https://github.com/JoinColony/trufflepig).

## Prerequisites

- Yarn >=1.12.0
- Docker
- Node >=10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/docs-linux-setup/) to ensure Yarn and Docker are set up accordingly._

## Installation

Globally install the [colony-cli](/cli-colony-cli) package.

```
yarn global add @colony/colony-cli
```

Install the `colony-starter` package.

```
colony build colony-starter
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the `colony-starter` package in one line without having to globally add the [colony-cli](/cli-colony-cli) package:

```
npx -p @colony/colony-starter colony build colony-starter
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
