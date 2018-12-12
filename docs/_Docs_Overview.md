---
title: Overview
section: Docs
order: 0
---

[colonyJS](https://github.com/JoinColony/colonyJS) is a library to help developers build with Colony. Using the colonyJS library, you can build applications and services that query and interact with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts through a simple and standard JavaScript interface.

![overview diagram](img/colonyJS_overview_r1.svg)

colonyJS is split into a few components to allow for flexibility in development:

* [Loaders](/colonyjs/docs-loaders) provide a simple way to get the address and ABI of a deployed contract, in a certain version, at a particular location. For example, loaders can pull data from contracts deployed to public networks such as `rinkeby` or `mainnet` using the Etherscan API or from contracts deployed locally that are being served with [TrufflePig](https://github.com/JoinColony/trufflepig).

* [Adapters](/colonyjs/docs-adapters) represent the colonyJS solution for the many different ways to access the Ethereum blockchain provided by various JavaScript libraries. Adapters provide a wrapper for such libraries that enforces a standard and predictable API for use with the colonyNetwork smart contracts.

* [Clients](/colonyjs/docs-clients) are aggregations of all the interactions possible with the colonyNetwork smart contracts that can be used to easily integrate Colony into your JavaScript application or service. Currently there are four clients, each corresponding with a colonyNetwork smart contract: `ColonyNetworkClient`, `ColonyClient`, `MetaColonyClient` and `TokenClient`.

## Contribute

colonyJS is under active development and new features are constantly being added. If you notice any discrepancies in the documentation or a bug in the code, please help us out by [creating an issue](https://github.com/JoinColony/colonyJS/issues)!

## What's next?

* Everything you need to create your first colony can be found in [Get Started](/colonyjs/docs-get-started/).

* Learn about creating a task and running through the task lifecycle in [Task Lifecycle](/colonyjs/docs-task-lifecycle).

* Learn about domains and skills and how they relate to reputation in [Domains and Skills](/colonyjs/docs-domains-and-skills).

* Learn about native colony tokens and managing colony funds in [Managing Funds](/colonyjs/docs-managing-funds).

* If you want to see some colonyJS examples in action, check out [colonyStarter](https://github.com/JoinColony/colonyStarter).
