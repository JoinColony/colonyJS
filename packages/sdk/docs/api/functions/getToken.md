[**API**](../README.md)

***

# Function: getToken()

> **getToken**(`colonyNetwork`, `address`): `Promise`\<[`ERC20Token`](../classes/ERC20Token.md)\>

Get a properly instantiated Token contract client

This method tries to auto-detect the type of the token under the given address

## Parameters

### colonyNetwork

[`ColonyNetwork`](../classes/ColonyNetwork.md)

A [ColonyNetwork](../classes/ColonyNetwork.md) instance

### address

`string`

The token's address

## Returns

`Promise`\<[`ERC20Token`](../classes/ERC20Token.md)\>

A Token contract client
