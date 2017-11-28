# colony-js

Monorepo for the Colony JavaScript client

## What's a monorepo?
In short: a common repository for all npm modules of a certain scope, sharing common modules and dev environments. More on monorepos [here](https://github.com/babel/babel/blob/master/doc/design/monorepo.md).

## Installing / usage?

We're using yarn workspaces and lerna to manage this monorepo.

### Yarn workspaces

This monorepo uses [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) for bootstrapping (installing the modules). To use yarn workspaces you'll have to activate it in your yarn settings like so:

```bash
yarn config set workspaces-experimental true
```

Then a `yarn` in the root directory will install all necessary packages (also in `packages/*`) and link the interdependencies.

To add a dependency to a particular package, just run

```bash
yarn add [packagename]
```

in your `packages/*` directory.

### Lerna

We're using lerna to publish the packages to npm and to run commands inside the repositories. We're running in lernas `independence` mode, meaning the modules won't all have the same version number and are versioned independently.

To run a command (e.g. the `build` command) in all packages just do:

```
lerna run build
```

which will call the npm script for `build` (more info [here](https://github.com/lerna/lerna#run)).

To publish modules to npm run

```
lerna publish
```

and it will guide you through the [publish process](https://github.com/lerna/lerna#publish).
