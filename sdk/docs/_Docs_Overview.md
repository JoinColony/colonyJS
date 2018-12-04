---
title: Overview
section: Docs
order: 0
---

## About

_Learn to build with Colony! Get a head start on your next project!_ colonyStarter includes a variety of starter projects that demonstrate how to use and integrate different tools with Colony. You can start building with Colony by installing one of our starter projects with just a few simple commands!

## Get Started

### Prerequisites

- Yarn 1.12.3
- Docker
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out the [Linux Setup](/colonystarter/docs-linux-setup/) page to ensure Yarn and Docker are set up accordingly._

### Step 1

Globally install the [colony-starter](/colonystarter/packages-colony-starter/) package:

```
yarn global add @colony/colony-starter
```

### Step 2

Move to your working directory and unpack the [colony-starter-basic](/colonystarter/packages-colony-starter-basic/) package:

```
colony-starter colony-starter-basic
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart the [colony-starter-basic](/colonystarter/packages-colony-starter-basic/) package in one line without having to globally add the `colony-starter` package:

```
npx -p @colony/colony-starter colony-starter colony-starter-basic
```

### Step 3

Move to your new project directory and checkout the [colony-starter-basic](/colonystarter/packages-colony-starter-basic/) instructions:

```
cd colony-starter-basic
```

## Contribute

colonyStarter is under active development and packages are constantly being added and updated. If you notice a discrepancy in the documentation on this site or a bug in the code, check out the following documents for more information:

- [Contributing](https://github.com/JoinColony/colonyStarter/github/CONTRIBUTING.md)
- [Development](https://github.com/JoinColony/colonyStarter/github/DEVELOPMENT.md)
