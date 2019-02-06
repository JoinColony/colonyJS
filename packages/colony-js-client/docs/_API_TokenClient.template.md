---
title: TokenClient
section: API
order: 3
---

The `TokenClient` is a standard interface for interactions with methods and events described in `Token.sol`. These interactions are extended from the ERC20 and DSToken standard token interfaces and are generally concerned with managing the native token assigned to a colony. This includes operations such as minting tokens, burning tokens, and transferring tokens.

==TOC==

## Initialize

The `TokenClient` is initialized for you when you ask the `ColonyNetworkClient` for a new instance of `ColonyClient`:

```js

const tokenClient = colonyClient.tokenClient;

```

You _could_ create an instance of `TokenClient` by providing an [adapter](/colonyjs/components-adapters) and a query:

```js

const tokenClient = new TokenClient({ adapter, query });

await tokenClient.init();

```
