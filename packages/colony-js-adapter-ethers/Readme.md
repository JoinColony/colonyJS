## colony-js-adapter-ethers

colony-js adapter for [ethers.js](https://github.com/ethers-io/ethers.js).

## Installation

```
yarn add ethers @colony/colony-js-adapter-ethers
```

## Usage

(with [colony-js](https://github.com/JoinColony/colony-js))

```javascript
import Adapter from 'colony-js-adapter-ethers';
import ColonyClient from 'colony-js';

/* create your providerOrSigner with ethers first: https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-a-contract */
const adapter = new Adapter(providerOrSigner);
const colonyClient = new ColonyClient(adapter);
```
