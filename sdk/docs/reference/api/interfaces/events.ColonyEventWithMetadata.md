[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [events](../modules/events.md) / ColonyEventWithMetadata

# Interface: ColonyEventWithMetadata<T\>

[events](../modules/events.md).ColonyEventWithMetadata

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataKey`](../modules/events.md#metadatakey) |

## Hierarchy

- [`ColonyEventWithoutMetadata`](events.ColonyEventWithoutMetadata.md)

  ↳ **`ColonyEventWithMetadata`**

## Table of contents

### Properties

- [address](events.ColonyEventWithMetadata.md#address)
- [data](events.ColonyEventWithMetadata.md#data)
- [eventName](events.ColonyEventWithMetadata.md#eventname)
- [eventSource](events.ColonyEventWithMetadata.md#eventsource)
- [fromBlock](events.ColonyEventWithMetadata.md#fromblock)
- [toBlock](events.ColonyEventWithMetadata.md#toblock)
- [topics](events.ColonyEventWithMetadata.md#topics)

### Methods

- [getMetadata](events.ColonyEventWithMetadata.md#getmetadata)

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

#### Inherited from

[ColonyEventWithoutMetadata](events.ColonyEventWithoutMetadata.md).[address](events.ColonyEventWithoutMetadata.md#address)

___

### data

• **data**: `Result`

#### Inherited from

[ColonyEventWithoutMetadata](events.ColonyEventWithoutMetadata.md).[data](events.ColonyEventWithoutMetadata.md#data)

___

### eventName

• **eventName**: `string`

#### Inherited from

[ColonyEventWithoutMetadata](events.ColonyEventWithoutMetadata.md).[eventName](events.ColonyEventWithoutMetadata.md#eventname)

___

### eventSource

• **eventSource**: keyof [`EventSources`](events.EventSources.md)

#### Inherited from

[ColonyEventWithoutMetadata](events.ColonyEventWithoutMetadata.md).[eventSource](events.ColonyEventWithoutMetadata.md#eventsource)

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

[ColonyEventWithoutMetadata](events.ColonyEventWithoutMetadata.md).[fromBlock](events.ColonyEventWithoutMetadata.md#fromblock)

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

[ColonyEventWithoutMetadata](events.ColonyEventWithoutMetadata.md).[toBlock](events.ColonyEventWithoutMetadata.md#toblock)

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

[ColonyEventWithoutMetadata](events.ColonyEventWithoutMetadata.md).[topics](events.ColonyEventWithoutMetadata.md#topics)

## Methods

### getMetadata

▸ **getMetadata**(): `Promise`<[`MetadataValue`](../modules/events.md#metadatavalue)<`T`\>\>

#### Returns

`Promise`<[`MetadataValue`](../modules/events.md#metadatavalue)<`T`\>\>
