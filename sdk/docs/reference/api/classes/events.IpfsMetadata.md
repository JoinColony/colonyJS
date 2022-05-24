[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [events](../modules/events.md) / IpfsMetadata

# Class: IpfsMetadata

[events](../modules/events.md).IpfsMetadata

## Table of contents

### Constructors

- [constructor](events.IpfsMetadata.md#constructor)

### Methods

- [getMetadataForEvent](events.IpfsMetadata.md#getmetadataforevent)

## Constructors

### constructor

• **new IpfsMetadata**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IpfsOptions`](../interfaces/events.IpfsOptions.md) |

## Methods

### getMetadataForEvent

▸ **getMetadataForEvent**<`T`\>(`eventName`, `ipfsCid`): `Promise`<[`MetadataValue`](../modules/events.md#metadatavalue)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"DomainMetadata"`` \| ``"Annotation"`` \| ``"ColonyMetadata"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `T` |
| `ipfsCid` | `string` |

#### Returns

`Promise`<[`MetadataValue`](../modules/events.md#metadatavalue)<`T`\>\>
