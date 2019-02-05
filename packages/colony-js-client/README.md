# colonyJS Client

The colonyJS Client package provides the means to interact with the Colony
Network or a particular Colony.

## Installation

```
yarn add @colony/colony-js-client
```

## Usage

- [ColonyNetworkClient](https://joincolony.github.io/colonyjs/api-colonynetworkclient/)
- [ColonyClient](https://joincolony.github.io/colonyjs/api-colonyclient/)
- [TokenClient](https://joincolony.github.io/colonyjs/api-tokenclient/)
- [TokenLockingClient](https://joincolony.github.io/colonyjs/api-tokenlockingclient/)

## Contributing

This package is part of the [colonyJS monorepo](https://github.com/JoinColony/colonyJS).

Please read our [contributing guidelines](https://github.com/JoinColony/colonyJS/blob/master/CONTRIBUTING.md).


## Generating documentation

```shell
scripts/docgen.js src/ColonyClient/index.js
scripts/docgen.js src/ColonyNetworkCient/index.js
```

Pipe the output to `pbcopy` or to wherever you please.
