[Colony SDK 🚀](../README.md) / [events](../modules/events.md) / ColonyEvent

# Interface: ColonyEvent

[events](../modules/events.md).ColonyEvent

An Event that came from a contract within the Colony Network

## Hierarchy

- [`ColonyFilter`](events.ColonyFilter.md)

  ↳ **`ColonyEvent`**

## Table of contents

### Properties

- [address](events.ColonyEvent.md#address)
- [data](events.ColonyEvent.md#data)
- [eventName](events.ColonyEvent.md#eventname)
- [eventSource](events.ColonyEvent.md#eventsource)
- [fromBlock](events.ColonyEvent.md#fromblock)
- [toBlock](events.ColonyEvent.md#toblock)
- [topics](events.ColonyEvent.md#topics)
- [transactionHash](events.ColonyEvent.md#transactionhash)

### Methods

- [getMetadata](events.ColonyEvent.md#getmetadata)

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[address](events.ColonyFilter.md#address)

___

### data

• **data**: `Result`

___

### eventName

• **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[eventName](events.ColonyFilter.md#eventname)

___

### eventSource

• **eventSource**: keyof [`EventSources`](events.EventSources.md)

The Colony contract the event originated from

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[eventSource](events.ColonyFilter.md#eventsource)

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[fromBlock](events.ColonyFilter.md#fromblock)

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[toBlock](events.ColonyFilter.md#toblock)

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[topics](events.ColonyFilter.md#topics)

___

### transactionHash

• **transactionHash**: `string`

## Methods

### getMetadata

▸ `Optional` **getMetadata**(): `Promise`<{ `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  } \| { `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  }\>

#### Returns

`Promise`<{ `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  } \| { `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  }\>
