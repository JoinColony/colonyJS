---
title: colony-cli
section: CLI
order: 1
---

The `colony-cli` package is a command line interface used to build colonyStarter packages.

## Prerequisites

- Yarn >=1.12.0
- Docker
- Node >=10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/docs-linux-setup/) to ensure Yarn and Docker are set up accordingly._

## Install

Globally install the `colony-cli` package.

```
yarn global add @colony/colony-cli
```

## Build Command

Install the colonyStarter package of your choice:

```
colony-cli build [package-name]
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and unpack colonyStarter packages without globally installing the `colony-cli` package:

```
npx -p @colony/colony-cli colony build [package-name]
```
