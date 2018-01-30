## colony-js-adapter-ethers

colony-js adapter for [ethers.js](https://github.com/ethers-io/ethers.js).

## Installation

```
yarn add ethers @colony/colony-js-adapter-ethers
```

## Usage

(with [colony-js](https://github.com/JoinColony/colony-js))

Creating an adapter:

```JavaScript
import EtherAdapter from '@colony/colony-js-adapter-ethers';
import ContractLoaderHttp from '@colony/colony-js-contract-loader-http';

/* create your provider or signer with ethers first: https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-a-contract */
const provider = ethers.providers.getDefaultProvider();

const loader = new ContractLoaderHttp({
    endpoint: process.env.TRUFFLEPIG_ENDPOINT,
    parser: 'truffle',
});
const adapter = new EthersAdapter({
    loader,
    provider,
});
```

Loading a contract:

```JavaScript
const contract = await adapter.getContract({ name: 'ColonyNetwork' });
```

Interacting with a contract:

```JavaScript
const colonyCount = await contract.functions.getColonyCount();
console.log(colonyCount); // 1337
```
