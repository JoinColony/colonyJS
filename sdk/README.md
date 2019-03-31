<div align="center">
  <img src="/docs/img/colonyStarter_color.svg" width="600" />
</div>
<div align="center">
  <a href="https://circleci.com/gh/JoinColony/colonyStarter">
    <img src="https://circleci.com/gh/JoinColony/colonyStarter.svg?style=shield" />
  </a>
  <a href="https://gitter.im/JoinColony/colonyStarter">
    <img src="https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg" />
  </a>
  <a href="https://build.colony.io/">
    <img src="https://img.shields.io/discourse/https/build.colony.io/status.svg" />
  </a>
</div>

# Colony Starter

_Get a head start on your next project!_ Colony Starter (formerly known as "Hackathon Starter") includes a variety of boilerplates and example projects that will help you get started with Colony.

## Get Started

### Prerequisites

- Node `>=10.12.0`
- Yarn `>=1.12.0`
- Docker `>=18.09.0`

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/.github/LINUX_SETUP.md) to ensure Yarn and Docker are set up accordingly._

### Step 1

Globally install the [colony-cli](/packages/colony-cli) package:

```
yarn global add @colony/colony-cli
```

### Step 2

Move to your working directory and unpack the [colony-starter](/packages/colony-starter) package:

```
colony build colony-starter
```

### Step 3

Move to your new project directory and check out the [colony-starter](/packages/colony-starter) readme for further instructions:

```
cd colony-starter
```

### Using NPX

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and unpack the [colony-starter](/packages/colony-starter) package without installing the [colony-cli](/packages/colony-cli) package:

```
npx -p @colony/colony-cli colony build colony-starter
```

## Packages

### Colony CLI

The [colony-cli](/packages/colony-cli) package is a command line tool for building [colonyStarter](https://github.com/JoinColony/colonyStarter) packages and running services such as Ganache, Truffle, and Trufflepig to assist with local development alongside the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts.

### Starter Packages

Check out some of the other starter packages by repeating steps 2 and 3 and substituting `colony-starter` with the package of your choice. If you have ideas for new packages or improvements, feel free to open an issue or pull request.

[colony-starter](/packages/colony-starter)

- A boilerplate using [colonyJS](https://github.com/JoinColony/colonyJS).

[colony-starter-react](/packages/colony-starter-react)

- A boilerplate using [colonyJS](https://github.com/JoinColony/colonyJS) with React.

[colony-starter-angular](/packages/colony-starter-angular)

- A boilerplate using [colonyJS](https://github.com/JoinColony/colonyJS) with Angular.

### Example Packages

We also have a couple example packages that you can unpack using the same `build` command. If you are uncertain how to do something, it might be helpful to use one of these packages as a reference.

[colony-example](/packages/colony-example)

- A built out version of the [colony-starter](/packages/colony-starter) package with more examples.

[colony-example-react](/packages/colony-example-react)

- A built out version of the [colony-starter-react](/packages/colony-starter-react) package with more examples.

## Contribute

_Are you interested in contributing?_ Check out the following documents for more information:

- [Contributing](/.github/CONTRIBUTING.md)
- [Development](/.github/DEVELOPMENT.md)
