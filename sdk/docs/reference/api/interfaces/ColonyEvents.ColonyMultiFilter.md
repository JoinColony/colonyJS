[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyEvents](../modules/ColonyEvents.md) / ColonyMultiFilter

# Interface: ColonyMultiFilter

[ColonyEvents](../modules/ColonyEvents.md).ColonyMultiFilter

ColonyFilter with support for multi-events
For the multi-event compatible filters the following assumptions prevail:
- `address` is a mandatory field
- it can only take a single `topic`
- `fromBlock` and `toBlock` are not available

## Hierarchy

- `Omit`<[`ColonyFilter`](ColonyEvents.ColonyFilter.md), ``"address"`` \| ``"topics"`` \| ``"fromBlock"`` \| ``"toBlock"``\>

  ↳ **`ColonyMultiFilter`**

## Table of contents

### Properties

- [address](ColonyEvents.ColonyMultiFilter.md#address)
- [eventName](ColonyEvents.ColonyMultiFilter.md#eventname)
- [eventSource](ColonyEvents.ColonyMultiFilter.md#eventsource)
- [topic](ColonyEvents.ColonyMultiFilter.md#topic)

## Properties

### address

• **address**: `string`

___

### eventName

• **eventName**: `string`

#### Inherited from

Omit.eventName

___

### eventSource

• **eventSource**: keyof [`EventSources`](ColonyEvents.EventSources.md)

#### Inherited from

Omit.eventSource

___

### topic

• **topic**: `string`
