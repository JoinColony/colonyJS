[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / events

# Module: events

This is a description of the events module

## Table of contents

### Classes

- [ColonyEventManager](../classes/events.ColonyEventManager.md)
- [IpfsMetadata](../classes/events.IpfsMetadata.md)

### Interfaces

- [ColonyEventWithMetadata](../interfaces/events.ColonyEventWithMetadata.md)
- [ColonyEventWithoutMetadata](../interfaces/events.ColonyEventWithoutMetadata.md)
- [ColonyFilter](../interfaces/events.ColonyFilter.md)
- [ColonyMultiFilter](../interfaces/events.ColonyMultiFilter.md)
- [EventSources](../interfaces/events.EventSources.md)
- [IpfsOptions](../interfaces/events.IpfsOptions.md)

### Type aliases

- [ColonyEvent](events.md#colonyevent)
- [EventSource](events.md#eventsource)
- [MetadataKey](events.md#metadatakey)
- [MetadataValue](events.md#metadatavalue)

### Variables

- [IPFS\_METADATA](events.md#ipfs_metadata)

## Type aliases

### ColonyEvent

Ƭ **ColonyEvent**<`T`\>: `T` extends [`MetadataKey`](events.md#metadatakey) ? [`ColonyEventWithMetadata`](../interfaces/events.ColonyEventWithMetadata.md)<`T`\> : [`ColonyEventWithoutMetadata`](../interfaces/events.ColonyEventWithoutMetadata.md)

An Event that came from a contract within the Colony Network

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataKey`](events.md#metadatakey) \| `undefined` = `undefined` |

___

### EventSource

Ƭ **EventSource**: [`EventSources`](../interfaces/events.EventSources.md)[keyof [`EventSources`](../interfaces/events.EventSources.md)]

An EventSource is essentially an _ethers_ contract, that we can keep track of

___

### MetadataKey

Ƭ **MetadataKey**: keyof typeof [`IPFS_METADATA`](events.md#ipfs_metadata)

___

### MetadataValue

Ƭ **MetadataValue**<`T`\>: `Static`<typeof [`IPFS_METADATA`](events.md#ipfs_metadata)[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataKey`](events.md#metadatakey) |

## Variables

### IPFS\_METADATA

• `Const` **IPFS\_METADATA**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Annotation` | `Record`<{ `annotationMessage`: `String` = String }, ``false``\> |
| `ColonyMetadata` | `Record`<{ `colonyAvatarHash`: `String` = String; `colonyDisplayName`: `String` = String; `colonyTokens`: `Arr`<`String`, ``false``\>  }, ``false``\> |
| `DomainMetadata` | `Record`<{ `domainColor`: `String` = String; `domainName`: `String` = String; `domainPurpose`: `String` = String }, ``false``\> |
