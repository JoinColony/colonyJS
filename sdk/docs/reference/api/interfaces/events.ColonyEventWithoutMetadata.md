[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [events](../modules/events.md) / ColonyEventWithoutMetadata

# Interface: ColonyEventWithoutMetadata

[events](../modules/events.md).ColonyEventWithoutMetadata

## Hierarchy

- [`ColonyFilter`](events.ColonyFilter.md)

  ↳ **`ColonyEventWithoutMetadata`**

  ↳↳ [`ColonyEventWithMetadata`](events.ColonyEventWithMetadata.md)

## Table of contents

### Properties

- [address](events.ColonyEventWithoutMetadata.md#address)
- [data](events.ColonyEventWithoutMetadata.md#data)
- [eventName](events.ColonyEventWithoutMetadata.md#eventname)
- [eventSource](events.ColonyEventWithoutMetadata.md#eventsource)
- [fromBlock](events.ColonyEventWithoutMetadata.md#fromblock)
- [toBlock](events.ColonyEventWithoutMetadata.md#toblock)
- [topics](events.ColonyEventWithoutMetadata.md#topics)

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[address](events.ColonyFilter.md#address)

___

### data

• **data**: `Result`

___

### eventName

• **eventName**: `string`

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[eventName](events.ColonyFilter.md#eventname)

___

### eventSource

• **eventSource**: keyof [`EventSources`](events.EventSources.md)

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[eventSource](events.ColonyFilter.md#eventsource)

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[fromBlock](events.ColonyFilter.md#fromblock)

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[toBlock](events.ColonyFilter.md#toblock)

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

[ColonyFilter](events.ColonyFilter.md).[topics](events.ColonyFilter.md#topics)
