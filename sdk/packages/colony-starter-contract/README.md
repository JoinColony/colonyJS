# colony-starter-contract

_A boilerplate to start building extension contracts alongside [colonyNetwork](https://github.com/JoinColony/colonyNetwork)!_

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
colony build colony-starter-contract
```

### Step 3

Move to your new project directory and follow the instructions below:

```
cd colony-starter-contract
```

### Using NPX

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and unpack the [colony-starter-contract](/packages/colony-starter-contract) package without installing the [colony-cli](/packages/colony-cli) package.

Pull down the docker image:

```
docker pull ethereum/solc:0.4.23
```

Build the colonyStarter package using `npx`:

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

### Start TrufflePig

Once the contracts have been deployed, start [TrufflePig](https://github.com/JoinColony/trufflepig):

```
yarn start-trufflepig
```

### Colony Setup

Open a new terminal window and create a test colony:

```
yarn colony-setup
```

### Truffle Commands

Run `truffle` commands using [colony-cli](https://github.com/JoinColony/colonyStarter/tree/master/packages/colony-cli):

```
yarn truffle [develop/compile/migrate/test]
```

## Contract Versions

If you do not want to use the default version of the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts defined by the [colony-cli](/packages/colony-cli) package, you can update the `"deploy-contracts"` scripts property in your `package.json` file to use a specific version. This can be a branch name, a commit hash, or a version tag.

```
"deploy-contracts": "colony service deploy-contracts --specific develop",
```
