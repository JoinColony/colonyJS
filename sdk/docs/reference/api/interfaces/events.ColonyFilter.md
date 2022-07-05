# Interface: ColonyFilter

[events](../modules/events.md).ColonyFilter

A Colony extended ethers Filter to keep track of where events are coming from

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
