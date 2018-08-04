# Colony Starter

_Learn to build with Colony! Get a head start on your next project!_

Colony Starter (formerly known as "Hackathon Starter") includes a variety of starter packages that demonstrate how to use and integrate different tools with Colony. We want to make it as easy as possible for you to start building with Colony so we upgraded to a monorepo that includes installable starter packages with a just few simple commands.

## Get Started

### Step 1

Globally install the [@colony/colony-starter](https://www.npmjs.com/package/@colony/colony-starter) package with yarn:

```
yarn global add @colony/colony-starter
```

### Step 2

Move to your working directory and unpack the [basic-starter](/packages/basic-starter) package:

```
colony-starter basic-starter
```

### Step 3

Move to your new starter directory and checkout the [basic-starter](/packages/basic-starter) readme:

```
cd basic-starter
```

## Starter Packages

Now that you have a basic understanding of how Colony works, check out some of the other starter packages by repeating steps 2 and 3 and substituting `basic-starter` with the package of your choice!

### General

- [basic-starter](/packages/basic-starter)
- [react-starter](/packages/react-starter)

### Specific

- [dao-starter](/packages/dao-starter)
- [daico-starter](/packages/daico-starter)

## Development

### Prerequisites

- Yarn 1.7
- Node 9.5

_You may find it helpful to use Node Version Manager (`nvm`) to manage node versions._

### Install Dependencies

Install development dependencies:

```
yarn
```

### Install Local Packages

Install dependencies for local packages:

```
yarn bootstrap
```

### Start Network

Start a local test network with [Ganache](https://github.com/trufflesuite/ganache-cli):

```
yarn start-ganache
```

### Deploy Contracts

Open a new terminal window and deploy contracts with [Truffle](https://github.com/trufflesuite/truffle):

```
yarn deploy-contracts
```

### Start TrufflePig

Open a new terminal window and connect to the deployed contracts with [TrufflePig](https://github.com/JoinColony/trufflepig):

```
yarn start-trufflepig
```

### Run Tests

Open a new terminal window and run tests:

```
yarn test
```

### Globally Install

Globally install the package:

```
yarn global add $(pwd)
```

### Unpack Starter Package

Move to your working directory and unpack a starter package:

```
colony-starter [name-of-starter-package]
```

### Start Building

Move to your new project and check out the starter readme:

```
cd [name-of-starter-package]
```
