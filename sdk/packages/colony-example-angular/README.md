# colony-example-angular

_An example project using [colonyJS](https://github.com/JoinColony/colonyJS) with Angular!_

This is a built out version of the [colony-starter-angular](/starters-colony-starter-angular) package with more examples.

## Prerequisites

- Node `>=10.13.0`
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

Move to your working directory and unpack the [colony-example-angular](/packages/colony-example-angular) package:

```
colony build colony-example-angular
```

### Step 3

Move to your new project directory and follow the instructions below:

```
cd colony-example-angular
```

### Using NPX

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and unpack the [colony-example-angular](/packages/colony-example-angular) package without installing the [colony-cli](/packages/colony-cli) package.

```
npx -p @colony/colony-cli colony build colony-example-angular
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

Once the contracts have been deployed, start [TrufflePig](https://github.com/JoinColony/trufflepig):

```
yarn start-trufflepig
```

### Seed Network

Open a new terminal window and run the seed network script:

```
yarn seed-network
```

### Start Server

Once the network has been seeded, start the development server:

```
yarn start
```

### Open Browser

Open your browser and check out the example:

[localhost:4200](http://localhost:4200)

### Run Tests

Open a new terminal window and run the tests:

```
yarn test
```

## Contract Versions

If you do not want to use the default version of the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts defined by the [colony-cli](/packages/colony-cli) package, you can update the `"deploy-contracts"` scripts property in your `package.json` file to use a specific version. This can be a branch name, a commit hash, or a version tag.

```
"deploy-contracts": "colony service deploy-contracts --specific glider",
```
