# Development

### Prerequisites

- Yarn
- Node 9.5

_You may find it helpful to use Node Version Manager (`nvm`) to manage node versions._

### Install Dependencies

Install development dependencies:

```
yarn
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

### Test Install Package

Open a new terminal window and test install a package:

```
yarn colony-starter [colony-starter-package]
```
