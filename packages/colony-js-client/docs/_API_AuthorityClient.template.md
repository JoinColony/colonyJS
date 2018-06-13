---
title: AuthorityClient
section: API
order: 4
---

The `AuthorityClient` is a standard interface for interactions with functions and events described in `Authority.sol`.

In the current implementation of the Colony Network, some events on-chain are not mediated by reputation scores as described in the whitepaper. Rather, certain actions within a colony that would ordinarily require some minimum reputation are assigned an 'authority' of colony Admin. This includes colony-wide actions such as minting new colony tokens as well as the creation of tasks.

Note: these authority roles are distinct from the 'roles' assigned in a task (manager, worker, and evaluator); because 'authority' roles are intended to be replaced by reputation-mediated authority in subsequent versions of the colonyNetwork, the overlapping terminology will be temporary.

==TOC==
