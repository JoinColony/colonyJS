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
    endpoint: '//127.0.0.1:3030/contracts/?name=%%NAME%%&version=%%VERSION%%',
    parser: 'truffle'
});

const colonyContract = await loader.getContract({ name: 'Colony' });
// { abi: { /* ...the ABI */ }, address: '0x000...the deployed contract address' }

const someContract = await loader.getContract({ name: 'A name of a contract that does not exist' });
// throws an error
```


## Endpoints

The API endpoint is expected to serve JSON responses representing contract
definitions. The `endpoint` option is a string with `%%INTERPOLATION%%`
that populates the `%%NAME%%` and optionally %%VERSION%% placeholders,
so that the requests made have the correct query parameters for the API.


## Parsers

The loader accepts a parser option to interpret the response sent by
the server and return a contract definition in the form we expect
(`{ abi, address }`). This option can be provided as a string for an
existing parser (currently only `truffle` is supported), or as a
function that takes the JSON response as input and returns the contract
definition.

```JavaScript
const loader = new ContractLoaderHttp({
    endpoint: '//my-contracts.example.com/api?contractName=%%NAME%%',
    parser(jsonObj) {
        // Parse the object to get address/abi
        return { address, abi };
    },
});
```


## How to use with TrufflePig

[TrufflePig](https://github.com/JoinColony/trufflepig) is a tool that
watches Truffle contract build artifact files and runs a local webserver
which provides a simple API to get these files as JSON responses.

On the local development environment, e.g. in a script that starts the app:
```JavaScript
import TrufflePig from 'trufflepig';

const trufflePig = new TrufflePig({
    paths: [process.env.TRUFFLE_ARTIFACTS_PATH],
    port: process.env.TRUFFLEPIG_PORT,
});
```

In the app, in development mode (in this example, with `dotenv` for
environment variables):
```JavaScript
import ContractLoaderHttp from '@colony/colony-js-contract-loader-http';

const loader = new ContractLoaderHttp({
    endpoint: process.env.TRUFFLEPIG_ENDPOINT,
    parser: 'truffle',
});

const colonyContract = await loader.getContract({ name: 'Colony' });
```
