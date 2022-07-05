# Module: events

This is a description of the events module

## Classes

- [ColonyEventManager](../classes/events.ColonyEventManager.md)
- [IpfsMetadata](../classes/events.IpfsMetadata.md)

## Interfaces

- [ColonyEvent](../interfaces/events.ColonyEvent.md)
- [ColonyFilter](../interfaces/events.ColonyFilter.md)
- [ColonyMultiFilter](../interfaces/events.ColonyMultiFilter.md)
- [EventSources](../interfaces/events.EventSources.md)
- [IpfsOptions](../interfaces/events.IpfsOptions.md)

## Type Aliases

### AnyMetadataValue

Ƭ **AnyMetadataValue**: `Static`<typeof `IPFS_METADATA`[[`MetadataKey`](events.md#metadatakey)]\>

### EventSource

Ƭ **EventSource**: [`EventSources`](../interfaces/events.EventSources.md)[keyof [`EventSources`](../interfaces/events.EventSources.md)]

An EventSource is essentially an _ethers_ contract, that we can keep track of

### MetadataKey

Ƭ **MetadataKey**: keyof typeof `IPFS_METADATA`

### MetadataValue

Ƭ **MetadataValue**<`T`\>: `Static`<typeof `IPFS_METADATA`[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataKey`](events.md#metadatakey) |
