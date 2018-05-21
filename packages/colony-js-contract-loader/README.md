# colonyJS Contract Loader interface

This package exports an interface which is designed to be used for creating
an Ethereum smart contract loading mechanism; for example, a contract
loader might take a contract name as an argument, then look up some
definition of the contract, and return the address of the deployed contract
and its ABI definition.

## Installation

```
yarn add @colony/colony-js-contract-loader
```

## Usage

```JavaScript
/* @flow */

import type { IContractLoader } from '@colony/colony-js-contract-loader';
```


## Contributing

This package is part of the [colonyJS monorepo](https://github.com/JoinColony/colonyJS).

Please read our [contributing guidelines](https://github.com/JoinColony/colonyJS/blob/master/CONTRIBUTING.md).
