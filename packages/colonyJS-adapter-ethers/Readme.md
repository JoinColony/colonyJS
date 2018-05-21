## colonyJS-adapter-ethers

colonyJS adapter for [ethers.js](https://github.com/ethers-io/ethers.js).

## Installation

```
yarn add ethers @colony/colonyJS-adapter-ethers
```

## Usage

(with [colonyJS](https://github.com/JoinColony/colonyJS))

Creating an adapter:

```JavaScript
import EtherAdapter from '@colony/colonyJS-adapter-ethers';
import ContractLoaderHttp from '@colony/colonyJS-contract-loader-http';

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
