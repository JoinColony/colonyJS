---
title: Install
section: Docs
order: 1
---
We recommend installing ColonyJS through npm:

```js
TODO: add correct npm installation when its published
```

## Monorepos and Yarn Workspaces
ColonyJS is a *monorepo*. That is to say, a common repository for all npm modules of a certain scope, sharing common modules and dev environments.

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
