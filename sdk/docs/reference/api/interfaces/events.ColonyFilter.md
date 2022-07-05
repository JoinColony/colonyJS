[Colony SDK 🚀](../README.md) / [events](../modules/events.md) / ColonyFilter

# Interface: ColonyFilter

[events](../modules/events.md).ColonyFilter

A Colony extended ethers Filter to keep track of where events are coming from

## Table of contents

### Properties

- [address](events.ColonyFilter.md#address)
- [eventName](events.ColonyFilter.md#eventname)
- [eventSource](events.ColonyFilter.md#eventsource)
- [fromBlock](events.ColonyFilter.md#fromblock)
- [toBlock](events.ColonyFilter.md#toblock)
- [topics](events.ColonyFilter.md#topics)

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

### eventName

• **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

### eventSource

• **eventSource**: keyof [`EventSources`](events.EventSources.md)

The Colony contract the event originated from

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

### toBlock

• `Optional` **toBlock**: `BlockTag`

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]
