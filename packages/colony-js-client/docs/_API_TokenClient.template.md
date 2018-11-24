---
title: TokenClient
section: API
order: 6
---

The `TokenClient` is a standard interface for interactions with functions and events described in `Token.sol`.

Upon creation, new colonies can either create or import existing token contracts. These contracts are expected to conform to the ERC20 or ERC20Extended token standard interface, the latter allowing for `mint` and `burn` functions. The token client is intended to help keep interactions with a colony's token straightforward.

Most functions are fairly self-explanatory and mirror their on-chain counterparts, but in some cases the function will return values passed from event data, rather than simple boolean expressions (which are returned from the contract on-chain).

==TOC==
