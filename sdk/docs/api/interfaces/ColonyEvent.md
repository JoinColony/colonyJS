# Interface: ColonyEvent<T\>

An Event that came from a contract within the Colony Network

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataType`](../enums/MetadataType.md) |

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

• `Optional` **getMetadata**: () => `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`T`]\>\>

#### Type declaration

▸ (): `Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`T`]\>\>

##### Returns

`Promise`<`ReturnType`<{ `None`: () => `void` ; `annotation`: (`res`: `string`) => `string` = getAnnotationMsgFromResponse; `colony`: (`res`: `string`) => [`ColonyMetadata`](ColonyMetadata.md) = getColonyMetadataFromResponse; `decision`: (`res`: `string`) => `DecisionMetadata` = getDecisionDetailsFromResponse; `domain`: (`res`: `string`) => [`DomainMetadata`](DomainMetadata.md) = getDomainMetadataFromResponse; `misc`: (`res`: `string`) => `MiscMetadata` = getMiscDataFromResponse }[`T`]\>\>

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
