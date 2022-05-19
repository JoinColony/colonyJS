[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyEvents](../modules/ColonyEvents.md) / ColonyFilter

# Interface: ColonyFilter

[ColonyEvents](../modules/ColonyEvents.md).ColonyFilter

A Colony extended ethers Filter to keep track of where events are coming from

## Hierarchy

- [`Ethers6Filter`](types.Ethers6Filter.md)

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

• `Optional` **address**: `string` \| `string`[]

#### Inherited from

[Ethers6Filter](types.Ethers6Filter.md).[address](types.Ethers6Filter.md#address)

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

[Ethers6Filter](types.Ethers6Filter.md).[fromBlock](types.Ethers6Filter.md#fromblock)

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

[Ethers6Filter](types.Ethers6Filter.md).[toBlock](types.Ethers6Filter.md#toblock)

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

[Ethers6Filter](types.Ethers6Filter.md).[topics](types.Ethers6Filter.md#topics)
