---
title: Overview
section: Docs
order: 1
---

_Get a head start on your next project!_ Colony Starter (formerly known as "Hackathon Starter") includes a variety of boilerplates and example projects that will help you get started with Colony.

## Get Started

### Prerequisites

- Yarn >=1.12.0
- Docker
- Node >=10.12.0

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

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the [colony-starter](/starters-colony-starter) package in one line without having to globally add the `colony-starter` package:

```
npx -p @colony/colony-starter colony build colony-starter
```

### Step 3

Move to your new project directory and check out [colony-starter](/starters-colony-starter) for further instructions:

```
cd colony-starter
```

## CLI Package

The [colony-cli](/cli-colony-cli) package currently has one action (`build`), which can be used to unpack any of the starter and example projects within this repository. We have plans for `colony-cli`, stay tuned.

## Starter Packages

Check out some of the other starter packages by repeating steps 2 and 3 and substituting `colony-starter` with the package of your choice. If you would like to create a new package, open a pull request or send us a message in [Gitter](https://gitter.im/JoinColony/colonyStarter).

[colony-starter](/starters-colony-starter)

- This package is a boilerplate with no framework.

[colony-starter-react](/starters-colony-starter-react)

- This package is a boilerplate using react.

[colony-starter-angular](/starters-colony-starter-angular)

- This package is a boilerplate using angular.

## Example Packages

[colony-example](/examples-colony-example)

- This package is a built out version of the `colony-starter` package with more examples.

[colony-example-react](/examples-colony-example-react)

- This package is a built out version of the `colony-starter-react` package with more examples.

## Contribute

[colonyStarter](https://github.com/JoinColony/colonyStarter) is under active development and packages are constantly being added and updated. If you notice a discrepancy in the documentation on this site or a bug in the code, check out the following documents for more information:

- [Contributing](https://github.com/JoinColony/colonyStarter/blob/master/.github/CONTRIBUTING.md)
- [Development](https://github.com/JoinColony/colonyStarter/blob/master/.github/DEVELOPMENT.md)
