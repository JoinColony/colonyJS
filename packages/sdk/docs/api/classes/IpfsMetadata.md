# Class: IpfsMetadata

IpfsMetadata

This is part of the [ColonyNetwork](ColonyNetwork.md) and [ColonyEventManager](ColonyEventManager.md) classes and not to be meant to instantiated directly.
You can find an instance of this under `colonyNetwork.ipfs` or `eventManager.ipfs`

## Constructors

### constructor

• **new IpfsMetadata**(`adapter?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapter?` | [`IpfsAdapter`](../interfaces/IpfsAdapter.md) |

## Methods

### getMetadata

▸ **getMetadata**<`K`\>(`cid`, `type?`): `Promise`<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | `string` |
| `type?` | `K` |

#### Returns

`Promise`<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)[`K`]\>

___

### getMetadataForEvent

▸ **getMetadataForEvent**<`T`, `E`\>(`eventName`, `cid`): `Promise`<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataType`](../enums/MetadataType.md) |
| `E` | extends ``""`` \| ``"Annotation(address,bytes32,string)"`` \| ``"ColonyMetadata(address,string)"`` \| ``"DomainMetadata(address,uint256,string)"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `E` |
| `cid` | `string` |

#### Returns

`Promise`<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)[`T`]\>

___

### getRawMetadata

▸ **getRawMetadata**(`cid`): `Promise`<[`Metadata`](../README.md#metadata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | `string` |

#### Returns

`Promise`<[`Metadata`](../README.md#metadata)\>

___

### uploadMetadata

▸ **uploadMetadata**<`T`\>(`type`, `input`): `Promise`<`string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `input` | [`DataTypeMap`](../interfaces/DataTypeMap.md)[`T`] |

#### Returns

`Promise`<`string`\>

___

### eventSupportsMetadata

▸ `Static` **eventSupportsMetadata**(`eventName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`boolean`
