# Interface: ColonyEvent<E\>

An Event that came from a contract within the Colony Network

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`MetadataEvent`](../README.md#metadataevent) = [`MetadataEvent`](../README.md#metadataevent) |

## Hierarchy

- [`ColonyFilter`](ColonyFilter.md)

  ↳ **`ColonyEvent`**

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

#### Inherited from

[ColonyFilter](ColonyFilter.md).[address](ColonyFilter.md#address)

___

### data

• **data**: `Result`

___

### eventName

• **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

#### Inherited from

[ColonyFilter](ColonyFilter.md).[eventName](ColonyFilter.md#eventname)

___

### eventSource

• **eventSource**: keyof [`EventSources`](EventSources.md)

The Colony contract the event originated from

#### Inherited from

[ColonyFilter](ColonyFilter.md).[eventSource](ColonyFilter.md#eventsource)

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](ColonyFilter.md).[fromBlock](ColonyFilter.md#fromblock)

___

### getMetadata

• `Optional` **getMetadata**: () => `Promise`<`ReturnType`<{ `annotation`: (`res`: `string`) => `undefined` \| `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => `undefined` \| `ColonyMetadata` = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `undefined` \| `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => `undefined` \| `DomainMetadata` = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `undefined` \| `MiscMetadata` = getMiscDataFromResponse }[{ `Annotation(address,bytes32,string)`: `Annotation` = MetadataType.Annotation; `ColonyMetadata(address,string)`: `Colony` = MetadataType.Colony; `Decision`: `Decision` = MetadataType.Decision; `DomainMetadata(address,uint256,string)`: `Domain` = MetadataType.Domain; `MISC`: `Misc` = MetadataType.Misc }[`E`]]\>\>

#### Type declaration

▸ (): `Promise`<`ReturnType`<{ `annotation`: (`res`: `string`) => `undefined` \| `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => `undefined` \| `ColonyMetadata` = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `undefined` \| `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => `undefined` \| `DomainMetadata` = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `undefined` \| `MiscMetadata` = getMiscDataFromResponse }[{ `Annotation(address,bytes32,string)`: `Annotation` = MetadataType.Annotation; `ColonyMetadata(address,string)`: `Colony` = MetadataType.Colony; `Decision`: `Decision` = MetadataType.Decision; `DomainMetadata(address,uint256,string)`: `Domain` = MetadataType.Domain; `MISC`: `Misc` = MetadataType.Misc }[`E`]]\>\>

##### Returns

`Promise`<`ReturnType`<{ `annotation`: (`res`: `string`) => `undefined` \| `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => `undefined` \| `ColonyMetadata` = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `undefined` \| `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => `undefined` \| `DomainMetadata` = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `undefined` \| `MiscMetadata` = getMiscDataFromResponse }[{ `Annotation(address,bytes32,string)`: `Annotation` = MetadataType.Annotation; `ColonyMetadata(address,string)`: `Colony` = MetadataType.Colony; `Decision`: `Decision` = MetadataType.Decision; `DomainMetadata(address,uint256,string)`: `Domain` = MetadataType.Domain; `MISC`: `Misc` = MetadataType.Misc }[`E`]]\>\>

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](ColonyFilter.md).[toBlock](ColonyFilter.md#toblock)

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

[ColonyFilter](ColonyFilter.md).[topics](ColonyFilter.md#topics)

___

### transactionHash

• **transactionHash**: `string`
