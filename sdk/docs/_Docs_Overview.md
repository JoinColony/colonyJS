---
title: Overview
section: Docs
order: 0
---

## About

_Get a head start on your next project!_ Colony Starter (formerly known as "Hackathon Starter") includes a variety of starter projects that will help you get started with Colony and demonstrate how to use and integrate different tools with Colony.

## Get Started

### Prerequisites

- Yarn 1.12.3
- Docker
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out the [Linux Setup](/colonystarter/docs-linux-setup/) page to ensure Yarn and Docker are set up accordingly._

### Step 1

Globally install the [colony-starter](/colonystarter/starters-colony-starter/) package:

```
yarn global add @colony/colony-cli
```

### Step 2

Move to your working directory and unpack the [colony-starter](/colonystarter/starters-colony-starter/) package:

```
colony build colony-starter
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the [colony-starter](/colonystarter/starters-colony-starter/) package in one line without having to globally add the `colony-starter` package:

```
npx -p @colony/colony-starter colony build colony-starter
```

### Step 3

Move to your new project directory and checkout the [colony-starter](/colonystarter/starters-colony-starter/) instructions:

```
cd colony-starter
```

## Starter Projects

Now that you have a basic understanding of how Colony works, check out some of the other colonyStarter packages by repeating steps 2 and 3 and substituting `colony-starter` with the package of your choice!

[colony-starter](/colonystarter/starters-colony-starter)

- This package is a boilerplate with no framework.

[colony-starter-react](/colonystarter/starters-colony-starter-react)

- This package is a boilerplate using react and redux.

[colony-starter-angular](/colonystarter/starters-colony-starter-angular)

- This package is a boilerplate using angular.

## Example Projects

[colony-example](/colonystarter/examples-colony-example)

- This package is a built out versions of the `colony-starter` package with more examples.

[colony-example-react](/colonystarter/examples-colony-example-react)

- This package is a built out versions of the `colony-starter-react` package with more examples.

## Contribute

colonyStarter is under active development and packages are constantly being added and updated. If you notice a discrepancy in the documentation on this site or a bug in the code, check out the following documents for more information:

- [Contributing](https://github.com/JoinColony/colonyStarter/blob/master/.github/CONTRIBUTING.md)
- [Development](https://github.com/JoinColony/colonyStarter/blob/master/.github/DEVELOPMENT.md)
