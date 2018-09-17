# Development

### Prerequisites

- Yarn
- Docker
- Node 9.10

_You may find it helpful to use Node Version Manager (`nvm`) to manage node versions._

_Linux users need to perform a few extra steps to get the colony-starter-basic scripts running in a project:_

Install the Solidity compiler manually with docker:
```
sudo docker pull ethereum/solc:0.4.23
```

To get globally installed `yarn` commands to your shell, add the following line to your`~/.bashrc` or `~/.bash_profile`:
```
export PATH="$PATH:$HOME/.config/yarn/global/node_modules/.bin"
```
(then start a new terminal instance, or `source ~/.bashrc`)


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
_Until another workaround is found, this command needs to be run as `sudo` for linux users_

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
