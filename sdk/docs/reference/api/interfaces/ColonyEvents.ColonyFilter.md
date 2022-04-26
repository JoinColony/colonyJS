[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyEvents](../modules/ColonyEvents.md) / ColonyFilter

# Interface: ColonyFilter

[ColonyEvents](../modules/ColonyEvents.md).ColonyFilter

A Colony extended ethers Filter to keep track of where events are coming from

## Hierarchy

- `Filter`

  ↳ **`ColonyFilter`**

  ↳↳ [`ColonyEvent`](ColonyEvents.ColonyEvent.md)

## Table of contents

### Properties

- [address](ColonyEvents.ColonyFilter.md#address)
- [eventName](ColonyEvents.ColonyFilter.md#eventname)
- [eventSource](ColonyEvents.ColonyFilter.md#eventsource)
- [fromBlock](ColonyEvents.ColonyFilter.md#fromblock)
- [toBlock](ColonyEvents.ColonyFilter.md#toblock)
- [topics](ColonyEvents.ColonyFilter.md#topics)

## Properties

### address

• `Optional` **address**: `string`

#### Inherited from

Filter.address

___

### eventName

• **eventName**: `string`

___

### eventSource

• **eventSource**: keyof [`EventSources`](ColonyEvents.EventSources.md)

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

Filter.fromBlock

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

Filter.toBlock

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

Filter.topics
