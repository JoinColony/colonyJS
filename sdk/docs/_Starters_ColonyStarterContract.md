---
title: colony-starter-contract
section: Starters
order: 4
---

_A boilerplate to start building extension contracts alongside [colonyNetwork](https://github.com/JoinColony/colonyNetwork)!_

## Prerequisites

- Node `>=10.12.0`
- Yarn `>=1.12.0`
- Docker `>=18.09.0`

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/docs-linux-setup/) to ensure Yarn and Docker are set up accordingly._

## Installation

Globally install the [colony-cli](/cli-colony-cli) package.

```
yarn global add @colony/colony-cli
```

Install the `colony-starter-contract` package.

```
colony build colony-starter-contract
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the `colony-starter-contract` package in one line without having to globally add the [colony-cli](/cli-colony-cli) package:

```
npx -p @colony/colony-cli colony build colony-starter-contract
```

## Development

### Start Ganache

Open a new terminal window and start [Ganache](https://github.com/trufflesuite/ganache-cli):

```
yarn start-ganache
```

### Deploy Contracts

Open a new terminal window and deploy the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) contracts:

```
yarn deploy-contracts
```

### Truffle Compile

Compile the starter contracts using the `truffle` service command:

```
yarn compile
```

### Truffle Migrate

Migrate the starter contracts using the `truffle` service command:

```
yarn migrate
```

### Truffle Test

Test the starter contracts using the `truffle` service command:

```
yarn test
```

## Contract Versions

If you do not want to use the default version of the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts defined by the [colony-cli](/packages/colony-cli) package, you can update the `"deploy-contracts"` scripts property in your `package.json` file to use a specific version. This can be a branch name, a commit hash, or a version tag.

```
"deploy-contracts": "colony service deploy-contracts --specific develop",
```
