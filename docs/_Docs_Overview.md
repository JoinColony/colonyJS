---
title: Overview
section: Docs
order: 0
---

ColonyJS is a library to help developers build with Colony.

Using the ColonyJS library, you can build applications that query and interact with the Colony Network smart contracts through a simple and standard javascript interface.

![overview diagram](https://raw.githubusercontent.com/JoinColony/colony-js/docs/gatsby-docs/docs/img/colonyJS_overview_r1.svg?sanitize=true)


ColonyJS itself is split into a few components to allow for flexibility in development:

* [Loaders](../docs-loaders) provide a simple way to get the address and ABI of a deployed contract, in a certain version, at a particular location (testnet, mainnet, local). Loaders can pull from etherscan.io, or from Colony's own TrufflePig.

* [Adapters](../docs-adapters) are the ColonyJS solution for there being many different ways to access the Ethereum blockchain, through various JavaScript libraries such as `Ethers.js`. Adapters provide a wrapper for such libraries that enforce a standard and predictable API for use with Colony's contracts.

* The [Contract Client](../docs-contract) is the main event: it aggregates all of the interactions possible with Colony into a standard set of methods that can be used in your (d)application to hook into the Colony Network.
