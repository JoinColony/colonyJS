# Interface: ColonyTopic

A Colony specific topic that keeps track of which contract it belongs to

## Properties

### eventName

> **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

***

### eventSource

> **eventSource**: `BaseContract`

The generated id of the contract the event originated from

***

### topic

> **topic**: `string`

The encoded topic
