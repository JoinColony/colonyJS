# colony-starter

_A boilerplate to get started with [colonyJS](https://github.com/JoinColony/colonyJS)!_

## Prerequisites

- Node `>=10.12.0`
- Yarn `>=1.12.0`
- Docker `>=18.09.0`

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/.github/LINUX_SETUP.md) to ensure Yarn and Docker are set up accordingly._

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

### Step 3

Move to your new project directory and follow the instructions below:

```
cd colony-starter
```

### Using NPX

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and unpack the [colony-starter](/packages/colony-starter) package without installing the [colony-cli](/packages/colony-cli) package:

```
npx -p @colony/colony-cli colony build colony-starter
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
