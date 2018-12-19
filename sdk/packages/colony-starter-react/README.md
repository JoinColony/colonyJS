# Colony Starter: React

_Learn to build with Colony using React!_

## Prerequisites

- Yarn 1.12.3
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

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

Once the contracts have been deployed, start [TrufflePig](https://github.com/JoinColony/trufflepig):

```
yarn start-trufflepig
```

### Seed Network

Open a new terminal window and run the seed network script:

```
yarn seed-network
```

### Start Webpack Dev Server

Once the network has been seeded, start [webpack-dev-server](https://github.com/webpack/webpack-dev-server):

```
yarn start
```

### Open Your Browser

Open your browser and checkout the example react app::

[localhost:8080](http://localhost:8080)

### Run Example Tests

Open a new terminal window and run the example tests:

```
yarn test
```
