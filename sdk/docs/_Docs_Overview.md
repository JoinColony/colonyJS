---
title: Overview
section: Docs
order: 1
---

_Get a head start on your next project!_ Colony Starter (formerly known as "Hackathon Starter") includes a variety of boilerplates and example projects that will help you get started with Colony.

## Get Started

### Prerequisites

- Node `>=10.12.0`
- Yarn `>=1.12.0`
- Docker `>=18.09.0`

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/docs-linux-setup) to ensure Yarn and Docker are set up accordingly._

### Step 1

Globally install the [colony-cli](/cli-colony-cli) package.

```
yarn global add @colony/colony-cli
```

### Step 2

Move to your working directory and unpack the [colony-starter](/starters-colony-starter) package:

```
colony build colony-starter
```

### Step 3

Move to your new project directory and check out [colony-starter](/starters-colony-starter) for further instructions:

```
cd colony-starter
```

### Using NPX

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and unpack the [colony-starter](/packages/colony-starter) package without installing the [colony-cli](/packages/colony-cli) package.

Pull down the docker image:

```
docker pull ethereum/solc:0.4.23
```

Build the colonyStarter package using `npx`:

```
npx -p @colony/colony-cli colony build colony-starter
```

## Packages

### Colony CLI

The `colony-cli` package is a command line tool for building [colonyStarter](https://github.com/JoinColony/colonyStarter) packages and running services such as Ganache, Truffle, and Trufflepig to assist with local development alongside the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts.

### Starter Packages

Check out some of the other starter packages by repeating steps 2 and 3 and substituting `colony-starter` with the package of your choice. If you have ideas for new packages or improvements, feel free to open an issue or pull request.

[colony-starter](/starters-colony-starter)

- A boilerplate using [colonyJS](https://github.com/JoinColony/colonyJS).

[colony-starter-react](/starters-colony-starter-react)

- A boilerplate using [colonyJS](https://github.com/JoinColony/colonyJS) with React.

[colony-starter-angular](/starters-colony-starter-angular)

- A boilerplate using [colonyJS](https://github.com/JoinColony/colonyJS) with Angular.

### Example Packages

We also have a couple example packages that you can unpack using the same `build` command. If you are uncertain how to do something, it might be helpful to use one of these packages as a reference.

[colony-example](/examples-colony-example)

- A built out version of the [colony-starter](/starters-colony-starter) package with more examples.

[colony-example-react](/examples-colony-example-react)

- A built out version of the [colony-starter-react](/starters-colony-starter-react) package with more examples.

[colony-example-angular](/examples-colony-example-angular)

- A built out version of the [colony-starter-angular](/starters-colony-starter-angular) package with more examples.

## Contribute

[colonyStarter](https://github.com/JoinColony/colonyStarter) is under active development and packages are constantly being added and updated. If you notice a discrepancy in the documentation on this site or a bug in the code, check out the following documents for more information:

- [Contributing](https://github.com/JoinColony/colonyStarter/blob/master/.github/CONTRIBUTING.md)
- [Development](https://github.com/JoinColony/colonyStarter/blob/master/.github/DEVELOPMENT.md)
