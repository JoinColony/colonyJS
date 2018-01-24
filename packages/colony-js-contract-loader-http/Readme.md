## colony-js-contract-loader-http

This package provides a means to load Ethereum smart contracts via
HTTP requests, with a facility to look up the contract by name.


## Installation

```
yarn add @colony/colony-js-contract-loader-http
```


## Usage

(with [colony-js](https://github.com/JoinColony/colony-js))

```javascript
import ContractLoaderHttp from '@colony/colony-js-contract-loader-http';

// An example for local development; the host on port 3030 provides an
// HTTP API that returns a JSON response representing a contract
// of a given name/version. In this case, we are using contracts generated
// by [Truffle](https://github.com/trufflesuite/truffle).
const loader = new ContractLoaderHttp({
    endpoint: '//127.0.0.1:3030/contracts/?name=%%CONTRACT_NAME%%&version=%%VERSION%%',
    parser: 'truffle'
});

const colonyContract = await loader.getContract({ name: 'Colony' });
// { abi: { /* ...the ABI */ }, address: '0x000...the deployed contract address' }

const someContract = await loader.getContract({ name: 'A name of a contract that does not exist' });
// throws an error
```


## Parsers

The loader accepts a parser option to interpret the response sent by
the server and return a contract definition in the form we expect
(`{ abi, address }`). This option can be provided as a string for an
existing parser (currently only `truffle` is supported), or as a
function that takes the JSON response as input and returns the contract
definition.

```JavaScript
const loader = new ContractLoaderHttp({
    endpoint: '//my-contracts.example.com/api?contractName=%%CONTRACT_NAME%%',
    parser(jsonObj) {
        // Parse the object to get address/abi
        return { address, abi };
    },
});
```
