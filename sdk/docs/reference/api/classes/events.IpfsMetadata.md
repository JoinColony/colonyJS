[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [events](../modules/events.md) / IpfsMetadata

# Class: IpfsMetadata

[events](../modules/events.md).IpfsMetadata

## Table of contents

### Constructors

- [constructor](events.IpfsMetadata.md#constructor)

### Methods

- [getMetadataForEvent](events.IpfsMetadata.md#getmetadataforevent)
- [eventSupportMetadata](events.IpfsMetadata.md#eventsupportmetadata)

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
| `T` | extends ``"DomainMetadata(address,uint256,string)"`` \| ``"Annotation(address,bytes32,string)"`` \| ``"ColonyMetadata(address,string)"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `T` |
| `ipfsCid` | `string` |

#### Returns

`Promise`<[`MetadataValue`](../modules/events.md#metadatavalue)<`T`\>\>

___

### eventSupportMetadata

▸ `Static` **eventSupportMetadata**(`eventName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`boolean`
