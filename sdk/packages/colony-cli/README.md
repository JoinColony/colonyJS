# colony-cli

The `colony-cli` package is a command line interface used to build [colonyStarter](https://github.com/JoinColony/colonyStarter) packages. The `colony-cli` package currently has one action (`build`), which can be used to unpack any of the starters and examples in the colonyStarter](/) repository. We have plans for this package... stay tuned.

## Prerequisites

- Node >=10.12.0
- Yarn >=1.12.0
- Docker >=18.09.0

_You may find it helpful to use Node Version Manager (`nvm`) to manage Node versions._

_If you are using Linux, check out [Linux Setup](/.github/LINUX_SETUP.md) to ensure Yarn and Docker are set up accordingly._

## Install

Globally install the `colony-cli` package.

```
yarn global add @colony/colony-cli
```

## Commands

### Build

Install the colonyStarter package of your choice:

```
colony-cli build [package-name]
```

Alternatively, you can use [npx](https://www.npmjs.com/package/npx) and unpack colonyStarter packages without globally installing the `colony-cli` package:

```
npx -p @colony/colony-cli colony build [package-name]
```
