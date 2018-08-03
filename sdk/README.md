# Colony Starter

## Prerequisites

- Yarn 1.7
- Node 9.5

_You may find it helpful to use Node Version Manager (`nvm`) to manage node versions._

### Get Started (_once published to npm_)

Install package globally:

```
npm install -g @colony/colony-starter
```

Move to working directory and unpack colony starter project:

```
colony-starter colony-starter-basic
```

Check out the [colony-starter-basic](/packages/colony-starter-basic) package

### Development

### Start Network

Open a new terminal window and start a local test network:

```
yarn start-ganache
```

### Deploy Contracts

Open a new terminal window and deploy the colonyNetwork contracts:

```
yarn deploy-contracts
```

### Start TrufflePig

In the same window used to deploy the contracts, start TrufflePig:

```
yarn start-trufflepig
```

### Bootstrap Monorepo

Open a new terminal window and bootstrap the monorepo:

```
yarn start
```

### Run Tests

Open a new terminal window and run tests:

```
yarn test
```
