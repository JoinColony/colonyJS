# Interface: ColonyFilter

A Colony extended ethers Filter to keep track of where events are coming from

## Hierarchy

- [`Ethers6Filter`](Ethers6Filter.md)

  ↳ **`ColonyFilter`**

  ↳↳ [`ColonyEvent`](ColonyEvent.md)

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

#### Inherited from

[Ethers6Filter](Ethers6Filter.md).[address](Ethers6Filter.md#address)

___

### eventName

• **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

___

### eventSource

• **eventSource**: keyof [`EventSources`](EventSources.md)

The Colony contract the event originated from

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

[Ethers6Filter](Ethers6Filter.md).[fromBlock](Ethers6Filter.md#fromblock)

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

[Ethers6Filter](Ethers6Filter.md).[toBlock](Ethers6Filter.md#toblock)

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

[Ethers6Filter](Ethers6Filter.md).[topics](Ethers6Filter.md#topics)
