<div align="center">
  <img src="/docs/img/colonyJS_color.svg" width="600" />
</div>
<div align="center">
  <a href="https://circleci.com/gh/JoinColony/colonyJS">
    <img src="https://circleci.com/gh/JoinColony/colonyJS.svg?style=shield" />
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/JoinColony/colonyJS.svg" />
  </a>
  <a href="https://gitter.im/JoinColony/colonyJS">
    <img src="https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg" />
  </a>
  <a href="https://build.colony.io/">
    <img src="https://img.shields.io/discourse/https/build.colony.io/status.svg" />
  </a>
</div>

# colonyJS

colonyJS is a JavaScript client for the [Colony Network](https://github.com/JoinColony/colonyNetwork). It provides a high-level API for interacting with the Colony Network smart contracts.

To learn more about Colony, you can visit [the website](https://colony.io/) or read the [white paper](https://colony.io/whitepaper.pdf).

## Documentation

Please see the [full documentation](https://joincolony.github.io/colonyjs/intro-welcome/) with detailed examples and explanations.

## Contributing

We welcome all contributions to colonyJS. Please read our [contributing guidelines](https://github.com/JoinColony/colonyJS/blob/master/CONTRIBUTING.md).

## Development

colonyJS is a monorepo-based project. A monorepo is simply a common repository for all npm modules of a certain scope, sharing common modules and dev environments. You can learn more about monorepos [here](https://github.com/babel/babel/blob/master/doc/design/monorepo.md).

[Flow](https://flow.org/) typing is also use throughout this repo.

### Workflow

The `develop` branch is working towards supporting the latest version of colonyNetwork. Fixes and maintenance to support the latest version of colonyNetwork should be merged into the `develop` branch.

The `master` branch currently supports colonyNetwork up to commit `9bba127b0286708d4f8919526a943b0e916cfd7c`. Hot fixes to support this version of colonyNetwork should be merged into the `master` branch, which will then be merged into `develop`.

### Yarn workspaces

To use yarn workspaces you'll have to activate it in your yarn settings like so:

```bash
yarn config set workspaces-experimental true
```

Then a `yarn` in the root directory will install all necessary packages (also in `packages/*`) and link the interdependencies.

To add a dependency to a particular package, just run

```bash
yarn add [packagename]
```

in your `packages/*` directory.

See [Publishing Releases](https://github.com/JoinColony/colonyJS/wiki/Publishing-Releases) for publishing workflow.
