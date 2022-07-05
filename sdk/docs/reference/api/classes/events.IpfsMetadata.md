# Class: IpfsMetadata

[events](../modules/events.md).IpfsMetadata

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
