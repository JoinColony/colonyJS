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

_Get a head start on your next project!_ Colony Starter (formerly known as "Hackathon Starter") includes a variety of starter projects that will help you get started with Colony and demonstrate how to use and integrate different tools with Colony.

## Get Started

### Prerequisites

- Yarn 1.12.3
- Docker
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out the [Linux Setup](/.github/LINUX_SETUP.md) page to ensure Yarn and Docker are set up accordingly._

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

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the [colony-starter](/packages/colony-starter) package in one line without having to globally install the [colony-cli](/packages/colony-cli) package:

```
npx -p @colony/colony-cli colony build colony-starter
```

### Step 3

Move to your new project directory and checkout the [colony-starter](/packages/colony-starter) readme:

```
cd colony-starter
```

## Starter Projects

Now that you have a basic understanding of how Colony works, check out some of the other colonyStarter packages by repeating steps 2 and 3 and substituting `colony-starter` with the package of your choice!

[colony-starter](/packages/colony-starter)

- This package is a boilerplate with no framework.

[colony-starter-react](/packages/colony-starter-react)

- This package is a boilerplate using react and redux.

[colony-starter-angular](/packages/colony-starter-angular)

- This package is a boilerplate using angular.

## Example Projects

[colony-example](/packages/colony-example)

- This package is a built out versions of the `colony-starter` package with more examples.

[colony-example-react](/packages/colony-example-react)

- This package is a built out versions of the `colony-starter-react` package with more examples.

## Contribute

_Are you interested in contributing?_ Check out the following documents for more information:

- [Contributing](/.github/CONTRIBUTING.md)
- [Development](/.github/DEVELOPMENT.md)
