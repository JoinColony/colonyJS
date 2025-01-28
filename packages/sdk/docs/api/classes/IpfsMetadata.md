# Class: IpfsMetadata

IpfsMetadata

This is part of the [ColonyNetwork](ColonyNetwork.md) and [ColonyEventManager](ColonyEventManager.md) classes and not to be meant to instantiated directly.
You can find an instance of this under `colonyNetwork.ipfs` or `eventManager.ipfs`

## Constructors

### new IpfsMetadata()

> **new IpfsMetadata**(`adapter`?): [`IpfsMetadata`](IpfsMetadata.md)

#### Parameters

##### adapter?

[`IpfsAdapter`](../interfaces/IpfsAdapter.md)

#### Returns

[`IpfsMetadata`](IpfsMetadata.md)

## Methods

### getMetadata()

> **getMetadata**\<`K`\>(`cid`, `type`?): `Promise`\<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`K`\]\>

#### Type Parameters

• **K** *extends* [`MetadataType`](../enumerations/MetadataType.md)

#### Parameters

##### cid

`string`

##### type?

`K`

#### Returns

`Promise`\<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`K`\]\>

***

### getMetadataForEvent()

> **getMetadataForEvent**\<`T`, `E`\>(`eventName`, `cid`): `Promise`\<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`T`\]\>

#### Type Parameters

• **T** *extends* [`MetadataType`](../enumerations/MetadataType.md)

• **E** *extends* `""` \| `"Annotation(address,bytes32,string)"` \| `"ColonyMetadata(address,string)"` \| `"DomainMetadata(address,uint256,string)"`

#### Parameters

##### eventName

`E`

##### cid

`string`

#### Returns

`Promise`\<[`MetadataTypeMap`](../interfaces/MetadataTypeMap.md)\[`T`\]\>

***

### getRawMetadata()

> **getRawMetadata**(`cid`): `Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

#### Parameters

##### cid

`string`

#### Returns

`Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

***

### uploadMetadata()

> **uploadMetadata**\<`T`\>(`type`, `input`): `Promise`\<`string`\>

#### Type Parameters

• **T** *extends* [`MetadataType`](../enumerations/MetadataType.md)

#### Parameters

##### type

`T`

##### input

[`DataTypeMap`](../interfaces/DataTypeMap.md)\[`T`\]

#### Returns

`Promise`\<`string`\>

***

### eventSupportsMetadata()

> `static` **eventSupportsMetadata**(`eventName`): `boolean`

#### Parameters

##### eventName

`string`

#### Returns

`boolean`
