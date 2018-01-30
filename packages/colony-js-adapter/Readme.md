## colony-js-adapter

This package exports an interface which is designed to be used for
wrapping JavaScript-Ethereum libraries (e.g.
[ethers.js](https://github.com/ethers-io/ethers.js/),
[web3.js](https://github.com/ethereum/web3.js/)) so that they have a
simple and predictable API. Additionally, the interface requires the
adapter to provide contract loading functionality.


## Installation

```
yarn add colony-js-adapter
```


## Usage

```JavaScript
/* @flow */

import type { IContract, IAdapter, IProvider } from '@colony/colony-js-adapter';
```
