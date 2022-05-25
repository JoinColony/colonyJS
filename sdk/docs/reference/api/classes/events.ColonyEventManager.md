[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [events](../modules/events.md) / ColonyEventManager

# Class: ColonyEventManager

[events](../modules/events.md).ColonyEventManager

The ColonyEvents class is a wrapper around _ethers_'s event implementations to make it easier to track and fetch Colony related events.
It works by creating specific filters that can keep track of event sources and map filters to their respective events. This allows for
easy parsing of event data, without necessarily knowing the contract that emitted it.

**`remarks`**
The API is subject to change as we find more applications for this

## Table of contents

### Constructors

- [constructor](events.ColonyEventManager.md#constructor)

### Properties

- [eventSources](events.ColonyEventManager.md#eventsources)
- [ipfsMetadata](events.ColonyEventManager.md#ipfsmetadata)
- [provider](events.ColonyEventManager.md#provider)

### Methods

- [createFilter](events.ColonyEventManager.md#createfilter)
- [createMultiFilter](events.ColonyEventManager.md#createmultifilter)
- [getEvents](events.ColonyEventManager.md#getevents)
- [getMultiEvents](events.ColonyEventManager.md#getmultievents)

## Constructors

### constructor

• **new ColonyEventManager**(`provider`)

Create a new ColonyEvents instance

**`remarks`**
As opposed to the [ColonyNetwork.ColonyNetwork](ColonyNetwork.ColonyNetwork-1.md) class, this constructor _needs_ an _ethers_ JsonRpcProvider (or a subclass of it) as it's
the only provider that supports topic filtering by multiple addresses

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `JsonRpcProvider` | An _ethers_ `JsonRpcProvider` |

## Properties

### eventSources

• **eventSources**: [`EventSources`](../interfaces/events.EventSources.md)

___

### ipfsMetadata

• **ipfsMetadata**: [`IpfsMetadata`](events.IpfsMetadata.md)

___

### provider

• **provider**: `JsonRpcProvider`

## Methods

### createFilter

▸ **createFilter**<`T`, `N`\>(`contract`, `eventName`, `address?`, `params?`, `options?`): [`ColonyFilter`](../interfaces/events.ColonyFilter.md)

Create a [ColonyFilter](../interfaces/events.ColonyFilter.md) that keeps track of its event source

To create a [ColonyFilter](../interfaces/events.ColonyFilter.md), we need to not only give it the topics and addresses as required by _ethers_
[`Filter`s](https://docs.ethers.io/v5/api/providers/types/#providers-Filter), but also the actual source contract of that Filter.
Like this we can keep track of the source contract interface to parse the event data when it's emitted

**`remarks`**
We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on

**`example`**
Filter for all `DomainAdded` events between block 21830000 and 21840000 (across all deployed [ColonyNetwork.Colony](ColonyNetwork.Colony.md) contracts)
```typescript
 const domainAdded = colonyEvents.createFilter(
   colonyEvents.eventSources.Colony,
   'DomainAdded(address,uint256)',
   null,
   { fromBlock: 21830000 , toBlock: 21840000  },
);
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `IColonyEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `OneTxPaymentEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `IColonyNetworkEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `VotingReputationEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } | Needs to be a valid [EventSource](../modules/events.md#eventsource) (i.e. from `colonyEvents.eventSources`) |
| `N` | extends `string` \| `number` \| `symbol` | An event signature as defined in the _ethers_ contract's [`filters`](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters) object. See the [ColonyJS documentation](https://colony.gitbook.io/colony/colonyjs) for a list of all available contracts and events |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contract` | `T` | A valid [EventSource](../modules/events.md#eventsource) |
| `eventName` | `N` | A valid event signature from the contract's `filters` object |
| `address?` | `string` | Address of the contract that can emit this event |
| `params?` | `Parameters`<`T`[``"filters"``][`N`]\> | Parameters to filter by for the event. Has to be indexed in the contract (see _ethers_ [Event Filters](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters)) |
| `options?` | `Object` | You can define `fromBlock` and `toBlock` only once for all the filters given |
| `options.fromBlock?` | `BlockTag` | - |
| `options.toBlock?` | `BlockTag` | - |

#### Returns

[`ColonyFilter`](../interfaces/events.ColonyFilter.md)

A [ColonyFilter](../interfaces/events.ColonyFilter.md)

___

### createMultiFilter

▸ **createMultiFilter**<`T`, `N`\>(`contract`, `eventName`, `address`, `params?`): [`ColonyMultiFilter`](../interfaces/events.ColonyMultiFilter.md)

Create a [ColonyMultiFilter](../interfaces/events.ColonyMultiFilter.md) that keeps track of its event source and can work alongside other filters in [getMultiEvents](events.ColonyEventManager.md#getmultievents)

The [ColonyMultiFilter](../interfaces/events.ColonyMultiFilter.md) works much like the [ColonyFilter](../interfaces/events.ColonyFilter.md), just that we _have_ to specify an address of the contract which emits this event.
Furthermore, no `fromBlock` or `toBlock` requirements can be given (that is done on a global level in [getMultiEvents](events.ColonyEventManager.md#getmultievents))

**`remarks`**
We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on

**`example`**
Filter for all `DomainAdded` events for a specific [ColonyNetwork.Colony](ColonyNetwork.Colony.md) contract
```typescript
const domainAdded = colonyEvents.createFilter(
  colonyEvents.eventSources.Colony,
  'DomainAdded(address,uint256)',
  colonyAddress,
);
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `IColonyEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `OneTxPaymentEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `IColonyNetworkEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } & `VotingReputationEvents` & { `filters`: { [P in string \| number \| symbol]: Function }  } | Needs to be a valid [EventSource](../modules/events.md#eventsource) (i.e. from `colonyEvents.eventSources`) |
| `N` | extends `string` \| `number` \| `symbol` | An event signature as defined in the _ethers_ contract's [`filters`](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters) object. See the [ColonyJS documentation](https://colony.gitbook.io/colony/colonyjs) for a list of all available contracts and events |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contract` | `T` | A valid [EventSource](../modules/events.md#eventsource) |
| `eventName` | `N` | A valid event signature from the contract's `filters` object |
| `address` | `string` | Address of the contract that can emit this event |
| `params?` | `Parameters`<`T`[``"filters"``][`N`]\> | Parameters to filter by for the event. Has to be indexed in the contract (see _ethers_ [Event Filters](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters)) |

#### Returns

[`ColonyMultiFilter`](../interfaces/events.ColonyMultiFilter.md)

A [ColonyMultiFilter](../interfaces/events.ColonyMultiFilter.md)

___

### getEvents

▸ **getEvents**(`filter`): `Promise`<[`ColonyEventWithoutMetadata`](../interfaces/events.ColonyEventWithoutMetadata.md)[]\>

Get events for a single filter

Gets events for an individual filter and automatically parses the data if possible

**`example`**
Retrieve and parse all `DomainAdded` events for a specific [ColonyNetwork.Colony](ColonyNetwork.Colony.md) contract
```typescript
const domainAdded = colonyEvents.createFilter(
  colonyEvents.eventSources.Colony,
  'DomainAdded(address,uint256)',
  colonyAddress,
);
// Immediately executing async function
(async function() {
  const events = await colonyEvents.getEvents(domainAdded);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`ColonyFilter`](../interfaces/events.ColonyFilter.md) | A [ColonyFilter](../interfaces/events.ColonyFilter.md). [[ColonyMultiFilters]] will not work |

#### Returns

`Promise`<[`ColonyEventWithoutMetadata`](../interfaces/events.ColonyEventWithoutMetadata.md)[]\>

An array of [ColonyEvent](../modules/events.md#colonyevent)s

___

### getMultiEvents

▸ **getMultiEvents**(`filters`, `options?`): `Promise`<[`ColonyEventWithoutMetadata`](../interfaces/events.ColonyEventWithoutMetadata.md)[]\>

Get events for multiple filters across multiple addresses at once

All the filters are connected by a logical OR, i.e. it will find ALL given events for ALL the given contract addresses
This is handy when you want to listen to a fixed set of events for a lot of different contracts

**`remarks`**
`fromBlock` and `toBlock` properties of the indivdual filters will be ignored

**`example`**
Retrieve and parse all `DomainAdded` and `DomainMetadata` events for a specific [ColonyNetwork.Colony](ColonyNetwork.Colony.md) contract.
Note that we're using [[ColonyEvents.createMultiFilter]] here. The two `colonyAddress`es could also be different

```typescript
const domainAdded = colonyEvents.createMultiFilter(
  colonyEvents.eventSources.Colony,
  'DomainAdded(address,uint256)',
  colonyAddress,
);
const domainMetadata = colonyEvents.createMultiFilter(
  colonyEvents.eventSources.Colony,
  'DomainMetadata(address,uint256,string)',
  colonyAddress,
);

// Immediately executing async function
(async function() {
  const events = await colonyEvents.getMultiEvents([domainAdded, domainMetadata]);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`ColonyMultiFilter`](../interfaces/events.ColonyMultiFilter.md)[] | An array of [ColonyMultiFilter](../interfaces/events.ColonyMultiFilter.md)s. Normal [[ColonyFilters]] will not work |
| `options` | `Object` | You can define `fromBlock` and `toBlock` only once for all the filters given |
| `options.fromBlock?` | `BlockTag` | Starting block in which to look for this event - inclusive (default: 'latest') |
| `options.toBlock?` | `BlockTag` | Ending block in which to look for this event - inclusive (default: 'latest') |

#### Returns

`Promise`<[`ColonyEventWithoutMetadata`](../interfaces/events.ColonyEventWithoutMetadata.md)[]\>

An array of [ColonyEvent](../modules/events.md#colonyevent)s
