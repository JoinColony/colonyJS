# colony-cli

The `colony-cli` package is a command line tool for building [colonyStarter](https://github.com/JoinColony/colonyStarter) packages and running services associated with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts.

## Prerequisites

- Node >=10.12.0
- Yarn >=1.12.0
- Docker >=18.09.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/.github/LINUX_SETUP.md) to ensure Yarn and Docker are set up accordingly._

## Install

Globally install the `colony-cli` package.

```
yarn global add @colony/colony-cli
```

## Commands

### `build`

Install [colonyStarter](https://github.com/JoinColony/colonyStarter) packages:

```
colony build [package-name]
```

### `service`

Start [Ganache](https://github.com/trufflesuite/ganache-cli):

```
colony service start-ganache
```

Deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts:

```
colony service deploy-contracts
```

Start [TrufflePig](https://github.com/JoinColony/trufflepig):

```
colony service start-trufflepig
```

Seed the Meta Colony with global skills:

```
colony service seed-network
```
