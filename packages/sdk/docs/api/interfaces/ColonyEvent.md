[**API**](../README.md)

***

# Interface: ColonyEvent\<M\>

An Event that came from a contract within the Colony Network

## Extends

- [`ColonyFilter`](ColonyFilter.md)

## Type Parameters

• **M** *extends* [`MetadataType`](../enumerations/MetadataType.md)

## Properties

### address?

> `optional` **address**: `string` \| `string`[]

#### Inherited from

[`ColonyFilter`](ColonyFilter.md).[`address`](ColonyFilter.md#address)

***

### data

> **data**: `Result`

***

### eventName

> **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

#### Inherited from

[`ColonyFilter`](ColonyFilter.md).[`eventName`](ColonyFilter.md#eventname)

***

### eventSource

> **eventSource**: `BaseContract`

The generated id of the contract the event originated from

#### Inherited from

[`ColonyFilter`](ColonyFilter.md).[`eventSource`](ColonyFilter.md#eventsource)

***

### fromBlock?

> `optional` **fromBlock**: `BlockTag`

#### Inherited from

[`ColonyFilter`](ColonyFilter.md).[`fromBlock`](ColonyFilter.md#fromblock)

***

### getMetadata()?

> `optional` **getMetadata**: () => `Promise`\<[`MetadataTypeMap`](MetadataTypeMap.md)\[`M`\]\>

#### Returns

`Promise`\<[`MetadataTypeMap`](MetadataTypeMap.md)\[`M`\]\>

***

### toBlock?

> `optional` **toBlock**: `BlockTag`

#### Inherited from

[`ColonyFilter`](ColonyFilter.md).[`toBlock`](ColonyFilter.md#toblock)

***

### topics?

> `optional` **topics**: (`null` \| `string` \| `string`[])[]

#### Inherited from

[`ColonyFilter`](ColonyFilter.md).[`topics`](ColonyFilter.md#topics)

***

### transactionHash

> **transactionHash**: `string`
