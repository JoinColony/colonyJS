---
title: Contract Client
section: Docs
order: 4
---

The Contract Client is a superclass for all client implementations that access a Colony smart contract. It contains abstractions for callers and senders as well as certain tools for listening to events, providing information about the network state, and interacting with the reputation mining system.

The contract Client is split into two sub-classes, each of which interacts with a corresponding interface on-chain.

The on-chain interfaces are `IColonyNetwork.sol` and `IColony.sol`. For more information about these, please refer to the [Colony Network Documentation](../../colonynetwork/api-the-colony-network/)


## ColonyNetworkClient
The ColonyNetworkClient is the standard interface for functions and events that interact described in `IColonyNetwork.sol`.  

These interactions are generally concerned with the colony network as a whole, rather than at the colony level. This includes operations like getting a count of all colonies on the network, querying for information about skills, and interactions with the CLNY token and reputation system.

[ColonyNetworkClient API documentation](../_API_ColonyNetworkClient)

## ColonyClient
The ColonyClient class is a standard interface for interactions with the on-chain functions and events described in `IColony.sol`

These interactions are generally concerned with functions and events internal to a colony, such as creating a task, assigning a work rating, or moving funds between pots.

[ColonyClient API documentation](../_API_ColonyClient.md)

## Callers

**Callers** are functions that passively interact with objects on the blockchain and do not need to produce transactions. Usually these will expect certain parameters and will return an object or objects.

```javascript
import ColonyNetworkClient from '@colony/colony-js-client';

const colonyCount = await contract.functions.getColonyCount();
console.log(colonyCount); // 1337

```

## Senders

**Senders** are functions that will eventually generate a transaction on the blockchain. A sender can either be used to call `send()`, which will parse a transaction and pass it to web3, or `estimate()`, which will parse the transaction but will not pass to web3/ethers.

```javascript
import ColonyClient from '@colony/colony-js-client';

// some clear example needed for *both* a transaction to be passed and for an estimate()

```


## MultiSig implementation

Some text about our MultiSig approach
