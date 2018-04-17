---
title: Loaders
section: API
order: 0
---

This document describes the high level contract loader interface as well as various officially supported implementations. For a better explanation what loaders are, see [here](docs-loaders.html).

## Installation and usage

TODO:

## Methods

==TOC==

## `ContractLoader` interface

### `new Loader([config])`

This will create a new loader instance with the given configuration. The config object varies across implementations and might not be needed at all.

### Arguments

`config` (`?object`): A config object specific to the loader implementation.

#### Returns

`Loader` instance.

### `loader.load(contractName, [opts])`

Loaders just implement one function: `load`. It returns a Promise that resolves to an object which contains the contract's ABI (as a JS object, TODO: verify) and the address.

#### Arguments

`contractName` (`string`): Name of the Contract (most likely the contents of the `contractName` field)

`opts` (`?object`): Can contain the following properties (all are optional):

|Option|Type|Description|
|---|---|---|
|address|string|Define or override the address supplied by the loader|
|router|string|`ContractName` of the router contract (necessary when using upgradable contracts)|
|version|string|Version number of the contracts (when using upgradable contracts)|
|networkId|number|Manually define the networkId (if multiple contracts were deployed)|

#### Returns

`Promise<ContractDefinition>`: Resolves to a `ContractDefinition` object like shown below.

```
type ContractDefinition = {
  abi: Object,
  address: string,
  bytecode?: string, (TODO: make optional in code),
}
```

#### Example

```javascript
const { abi, address } = await loader.load('ContractName', { networkId: 99 });
```

## `HTTPContractLoader`

The `HTTPContractLoader` uses the browser's `fetch` API to get contract definitions from a HTTP source (like [trufflepig](https://github.com/JoinColony/trufflepig) or [etherscan](https://etherscan.io/contractsVerified)).

### `new HTTPContractLoader({ endpoint, parser })`

Instantiates a new `HTTPContractLoader`.

#### Arguments

`endpoint` (`string`): Defines the http endpoint for the contract (full URL, e.g. `https://api.etherscan.io/api?module=contract&action=getabi&address=%%ADDRESS%%`).

The following values can be interpolated (i.e. will be replaced in the URL with the corresponding values):

|Value|Description|
|---|---|
|`%%ADDRESS%%`|Adress of the loaded contract|
|`%%NAME%%`|Name of the Contract (most likely the contents of the `contractName` field)|
|`%%VERSION%%`|Contract version (if applicable)|

`parser` (`string|function`) : The parser to use to parse the raw JSON format of the contract.

Available pre-defined parsers are:

- `truffle`: Parse a truffle JSON contract file
- TODO: add etherscan https://github.com/JoinColony/colony-js/issues/49

Alternatively one can pass in a function with the following parameters:

```javascript
  (input: any, opts: Object) => ContractDefinition
```

Where input is the raw JSON input supplied by the http response and opts are the loader options (TODO: https://github.com/JoinColony/colony-js/issues/49). It needs to return an object containing at least the `abi` object and the `address` like you can see in the type definition above.

*The `HTTPContractLoader` also implements the `loader.load` function and works like described [above](#loaderload-contractname-opts)

#### Returns

`HTTPContractloader` instance.
