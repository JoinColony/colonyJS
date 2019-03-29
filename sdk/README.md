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

- Yarn >=1.12.0
- Docker
- Node >=10.12.0

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

## CLI Package

The `colony-cli` package currently has one action (`build`), which can be used to unpack any of the starter and example projects within this repository. We have plans for `colony-cli`, stay tuned.

## Starter Packages

Check out some of the other starter packages by repeating steps 2 and 3 and substituting `colony-starter` with the package of your choice. If you would like to create a new package, open a pull request or send us a message in [Gitter](https://gitter.im/JoinColony/colonyStarter).

[colony-starter](/packages/colony-starter)

- This package is a boilerplate with no framework.

[colony-starter-react](/packages/colony-starter-react)

- This package is a boilerplate using react.

[colony-starter-angular](/packages/colony-starter-angular)

- This package is a boilerplate using angular.

## Example Packages

[colony-example](/packages/colony-example)

- This package is a built out version of the `colony-starter` package with more examples.

[colony-example-react](/packages/colony-example-react)

- This package is a built out version of the `colony-starter-react` package with more examples.

## Contribute

_Are you interested in contributing?_ Check out the following documents for more information:

- [Contributing](/.github/CONTRIBUTING.md)
- [Development](/.github/DEVELOPMENT.md)
