---
title: Adapters
section: API
order: 1
---

This document only describes the high level adapter interface. For a better explanation what loaders are, see [here](docs-adapters.html).

## Installation and usage

TODO:

## Methods

==TOC==

## `Adapter` interface

To actually use the adapter you just need to initialise it. There's no need to call any of the functions directly when interacting with the Colony network. It does give you access to certain blockchain interactions in a higher level, consistent API.

### `new Adapter({ loader, provider, wallet })`

This will create a new loader instance with the given configuration. The config object varies across implementations and might not be needed at all.

#### Arguments

`loader` (`ContractLoader`): A [ContractLoader](docs-loaders.html) instance.
`provider` (`Provider`): A provider instance of the corresponding provider (see below).
`wallet` (`Wallet`): Todo: this is very much unsure. It might be a `ColonyWallet` instance.

#### Returns

`Adapter` instance.

### `adapter.getContract()
