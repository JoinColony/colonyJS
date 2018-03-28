---
id: docs-loaders
title: Loaders
---

Loaders make it possible to easily access and load Ethereum smart contracts. They provide a simple way to get the ABI and address of a certain deployed contract in a certain version in a particular location (testnet, mainnet, local). When intialsing a contract we need this information to be able to access it using our favourite web3 library.

## Loaders quickstart

Some pretty example

## How to use loaders

Use the http loader as an example. In the browser we don't have a lot of ways to access external data. One of them is HTTP requests which is why we think the http loader is the most important one (most frequently used). Here's how you'd use the http loader:

Some examples go here

## Officially supported loaders

- [http](https://github.com/JoinColony/colony-js/tree/master/packages/colony-js-contract-loader-http)

## Imaginable loaders

- File system (node)
- Databases (indexeddb on the browser, other dbs in node)
- IPFS (which might be a very specific http loader)
- Swarm
- Browser file API (for testing in the browser)
