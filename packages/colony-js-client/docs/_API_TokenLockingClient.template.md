---
title: TokenLockingClient
section: API
order: 4
---

The `TokenLockingClient` is a standard interface for interactions with methods and events described in `ITokenLocking.sol`. These interactions are generally concerned token locking, such as locking and unlocking tokens.

==TOC==

## Initialize

The `TokenLockingClient` is initialized for you when you ask the `ColonyNetworkClient` for a new instance of `ColonyClient`:

```js

const tokenLockingClient = colonyClient.tokenLockingClient;

```

You _could_ create an instance of `TokenLockingClient` by providing an [adapter](/colonyjs/components-adapters) and a query:

```js

const tokenLockingClient = new TokenLockingClient({ adapter, query });

await tokenLockingClient.init();

```
