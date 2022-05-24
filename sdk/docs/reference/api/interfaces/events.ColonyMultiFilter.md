[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [events](../modules/events.md) / ColonyMultiFilter

# Interface: ColonyMultiFilter

[events](../modules/events.md).ColonyMultiFilter

ColonyFilter with support for multi-events
For the multi-event compatible filters the following assumptions prevail:
- `address` is a mandatory field
- it can only take a single `topic`
- `fromBlock` and `toBlock` are not available

## Hierarchy

- `Omit`<[`ColonyFilter`](events.ColonyFilter.md), ``"address"`` \| ``"topics"`` \| ``"fromBlock"`` \| ``"toBlock"``\>

  ↳ **`ColonyMultiFilter`**

## Table of contents

### Properties

- [address](events.ColonyMultiFilter.md#address)
- [eventName](events.ColonyMultiFilter.md#eventname)
- [eventSource](events.ColonyMultiFilter.md#eventsource)
- [topic](events.ColonyMultiFilter.md#topic)

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

• **eventSource**: keyof [`EventSources`](events.EventSources.md)

#### Inherited from

Omit.eventSource

___

### topic

• **topic**: `string`
