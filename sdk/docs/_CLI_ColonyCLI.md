---
title: colony-cli
section: CLI
order: 0
---

## About

The `colony-cli` package is a command line interface used to build colonyStarter packages.

## Prerequisites

- Yarn 1.12.3
- Docker
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out the [Linux Setup](/colonystarter/docs-linux-setup/) page to ensure Yarn and Docker are set up accordingly._

## Installation

Globally install the `colony-cli` package.

```
yarn global add @colony/colony-cli
```

## Install Project

Install the colonyStarter project of your choice.

```
colony-cli build [package-name]
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart a package in one line without having to globally add the `colony-cli` package:

```
npx -p @colony/colony-cli colony build [package-name]
```
