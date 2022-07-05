[Colony SDK 🚀](../README.md) / [events](../modules/events.md) / ColonyEvent

# Interface: ColonyEvent

[events](../modules/events.md).ColonyEvent

An Event that came from a contract within the Colony Network

## Table of contents

### Properties

- [address](events.ColonyEvent.md#address)
- [data](events.ColonyEvent.md#data)
- [eventName](events.ColonyEvent.md#eventname)
- [eventSource](events.ColonyEvent.md#eventsource)
- [fromBlock](events.ColonyEvent.md#fromblock)
- [getMetadata](events.ColonyEvent.md#getmetadata)
- [toBlock](events.ColonyEvent.md#toblock)
- [topics](events.ColonyEvent.md#topics)
- [transactionHash](events.ColonyEvent.md#transactionhash)

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

### data

• **data**: `Result`

### eventName

• **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

### eventSource

• **eventSource**: keyof [`EventSources`](events.EventSources.md)

The Colony contract the event originated from

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

### getMetadata

• `Optional` **getMetadata**: () => `Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

#### Type declaration

▸ (): `Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

##### Returns

`Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

### toBlock

• `Optional` **toBlock**: `BlockTag`

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

### transactionHash

• **transactionHash**: `string`
