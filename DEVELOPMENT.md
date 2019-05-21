# Development

colonyJS is a monorepo. A monorepo is simply a common repository for all npm modules of a certain scope, sharing common modules and development environments. You can learn more about monorepos [here](https://github.com/babel/babel/blob/master/doc/design/monorepo.md).

We're using [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) and [lerna](https://github.com/lerna/lerna) to manage this monorepo. We're also using [flow](https://flow.org/) typing.

## Git Workflow

The `develop` branch is working towards supporting the latest version of the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts. Fixes and maintenance to support the latest version should be merged into the `develop` branch.

The `master` branch supports the [glider-rc.1](https://github.com/JoinColony/colonyNetwork/releases/tag/glider-rc.1) release of the colonyNetwork smart contracts. Hot fixes to support this release should be merged into the `master` branch, which will then be merged into `develop`.

## Yarn Workspaces

First, you need to activate yarn workspaces:

```
yarn config set workspaces-experimental true
```

Next, you need to install package dependencies:

```
yarn
```

*Note: Running `yarn` in the root directory will install all of the required dependencies, including the dependencies within `packages`, which will also link interdependencies between `packages`.*

Add a dependency to a local package:

```
cd packages/[local_package]

yarn add [remote_package]
```

## Lerna

We're using [lerna](https://github.com/lerna/lerna) to publish packages to [npm](https://www.npmjs.com) and to run root commands that simplify how we manage all of the packages within the repository.

Run a command in all packages:

```
lerna run [command]
```

*Note: For example, running `lerna run build` in the root directory will run the `build` script in each subpackage. More information about how this works can be found [here](https://github.com/lerna/lerna#run).*

Publish updated packages to npm:

```
lerna publish
```

*Note: Running `lerna publish` will guide you through the [publish process](https://github.com/lerna/lerna#publish).*

Run a command for a single package:

```
lerna run --scope=@colony/my-package-name [command]
```

*Note: Running `lerna run` with the `--scope` option will ensure the command within the package will include the necessary dependencies that have been installed in the root directory and linked to the individual package.*

## Publishing

See [Publishing Releases](https://github.com/JoinColony/colonyJS/wiki/Publishing-Releases) for publishing workflow.
