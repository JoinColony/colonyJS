[Colony SDK 🚀](../README.md) / [events](../modules/events.md) / IpfsMetadata

# Class: IpfsMetadata

[events](../modules/events.md).IpfsMetadata

## Table of contents

### Constructors

- [constructor](events.IpfsMetadata.md#constructor)

### Methods

- [getMetadataForEvent](events.IpfsMetadata.md#getmetadataforevent)
- [eventSupportMetadata](events.IpfsMetadata.md#eventsupportmetadata)

## Constructors

### • **new IpfsMetadata**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IpfsOptions`](../interfaces/events.IpfsOptions.md) |

## Methods

### ▸ **getMetadataForEvent**<`T`\>(`eventName`, `ipfsCid`): `Promise`<[`MetadataValue`](../modules/events.md#metadatavalue)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"Annotation(address,bytes32,string)"`` \| ``"ColonyMetadata(address,string)"`` \| ``"DomainMetadata(address,uint256,string)"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `T` |
| `ipfsCid` | `string` |

#### Returns

`Promise`<[`MetadataValue`](../modules/events.md#metadatavalue)<`T`\>\>

### ▸ `Static` **eventSupportMetadata**(`eventName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`boolean`
