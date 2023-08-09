# Interface: ColonyEvent<M\>

An Event that came from a contract within the Colony Network

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`MetadataType`](../enums/MetadataType.md) |

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

• **eventSource**: `BaseContract`

The generated id of the contract the event originated from

#### Inherited from

[ColonyFilter](ColonyFilter.md).[eventSource](ColonyFilter.md#eventsource)

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](ColonyFilter.md).[fromBlock](ColonyFilter.md#fromblock)

___

### getMetadata

• `Optional` **getMetadata**: () => `Promise`<[`MetadataTypeMap`](MetadataTypeMap.md)[`M`]\>

#### Type declaration

▸ (): `Promise`<[`MetadataTypeMap`](MetadataTypeMap.md)[`M`]\>

##### Returns

`Promise`<[`MetadataTypeMap`](MetadataTypeMap.md)[`M`]\>

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
