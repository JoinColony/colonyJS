---
title: colony-starter
section: Packages
order: 0
---

## About

The `colony-starter` package includes the global command script to install colonyStarter projects.

## Prerequisites

- Yarn 1.12.3
- Docker
- Node 10.12.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out the [Linux Setup](/colonystarter/docs-linux-setup/) page to ensure Yarn and Docker are set up accordingly._

## Installation

Globally install the `colony-starter` package.

```
yarn global add @colony/colony-starter
```

## Install Project

Install the colonyStarter project of your choice.

```
colony-starter [colony-starter-package]
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and kickstart a package in one line without having to globally add the `colony-starter` package:

```
npx -p @colony/colony-starter colony-starter [colony-starter-package]
```
