# Interface: ColonyFilter

A Colony extended ethers Filter to keep track of where events are coming from

## Extends

- [`Ethers6Filter`](Ethers6Filter.md)

## Extended by

- [`ColonyEvent`](ColonyEvent.md)

## Properties

### address?

> `optional` **address**: `string` \| `string`[]

#### Inherited from

[`Ethers6Filter`](Ethers6Filter.md).[`address`](Ethers6Filter.md#address)

***

### eventName

> **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

***

### eventSource

> **eventSource**: `BaseContract`

The generated id of the contract the event originated from

***

### fromBlock?

> `optional` **fromBlock**: `BlockTag`

#### Inherited from

[`Ethers6Filter`](Ethers6Filter.md).[`fromBlock`](Ethers6Filter.md#fromblock)

***

### toBlock?

> `optional` **toBlock**: `BlockTag`

#### Inherited from

[`Ethers6Filter`](Ethers6Filter.md).[`toBlock`](Ethers6Filter.md#toblock)

***

### topics?

> `optional` **topics**: (`null` \| `string` \| `string`[])[]

#### Inherited from

[`Ethers6Filter`](Ethers6Filter.md).[`topics`](Ethers6Filter.md#topics)
