[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyEvents](../modules/ColonyEvents.md) / ColonyEvents

# Class: ColonyEvents

[ColonyEvents](../modules/ColonyEvents.md).ColonyEvents

## Table of contents

### Constructors

- [constructor](ColonyEvents.ColonyEvents-1.md#constructor)

### Properties

- [eventSources](ColonyEvents.ColonyEvents-1.md#eventsources)
- [provider](ColonyEvents.ColonyEvents-1.md#provider)

### Methods

- [createFilter](ColonyEvents.ColonyEvents-1.md#createfilter)
- [createMultiFilter](ColonyEvents.ColonyEvents-1.md#createmultifilter)
- [getMultiEvents](ColonyEvents.ColonyEvents-1.md#getmultievents)

## Constructors

### constructor

• **new ColonyEvents**(`provider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `JsonRpcProvider` |

## Properties

### eventSources

• **eventSources**: `EventSources`

___

### provider

• **provider**: `JsonRpcProvider`

## Methods

### createFilter

▸ **createFilter**<`T`, `N`\>(`contract`, `eventName`, `address?`, `params?`, `options?`): [`ColonyFilter`](../interfaces/ColonyEvents.ColonyFilter.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IColonyEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `IColonyNetwork` & { `filters`: { [P in string \| number \| symbol]: Function }  } |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `T` |
| `eventName` | `N` |
| `address?` | `string` |
| `params?` | `Parameters`<`T`[``"filters"``][`N`]\> |
| `options` | `Object` |
| `options.fromBlock?` | `BlockTag` |
| `options.toBlock?` | `BlockTag` |

#### Returns

[`ColonyFilter`](../interfaces/ColonyEvents.ColonyFilter.md)

___

### createMultiFilter

▸ **createMultiFilter**<`T`, `N`\>(`contract`, `eventName`, `address`, `params?`): [`ColonyMultiFilter`](../interfaces/ColonyEvents.ColonyMultiFilter.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IColonyEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `IColonyNetwork` & { `filters`: { [P in string \| number \| symbol]: Function }  } |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `T` |
| `eventName` | `N` |
| `address` | `string` |
| `params?` | `Parameters`<`T`[``"filters"``][`N`]\> |

#### Returns

[`ColonyMultiFilter`](../interfaces/ColonyEvents.ColonyMultiFilter.md)

___

### getMultiEvents

▸ **getMultiEvents**(`filters`, `options?`): `Promise`<[`ColonyEvent`](../interfaces/ColonyEvents.ColonyEvent.md)[]\>

Get all events for the defined filter list and a certain block number.
All the filters are connected by a logical OR, i.e. it will find ALL given events for ALL the given contract addresses
This is handy when you want to listen to a fixed set of events for a lot of different contracts

**`remarks:`** `fromBlock` and `toBlock` properties of the indivdual filters will be ignored

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`ColonyMultiFilter`](../interfaces/ColonyEvents.ColonyMultiFilter.md)[] |
| `options` | `Object` |
| `options.fromBlock?` | `BlockTag` |
| `options.toBlock?` | `BlockTag` |

#### Returns

`Promise`<[`ColonyEvent`](../interfaces/ColonyEvents.ColonyEvent.md)[]\>
