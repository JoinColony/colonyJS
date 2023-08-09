# Class: ColonyEventManager

The ColonyEvents class is a wrapper around _ethers_'s event implementations to make it easier to track and fetch Colony related events.
It works by creating specific filters that can keep track of event sources and map filters to their respective events. This allows for
easy parsing of event data, without necessarily knowing the contract that emitted it.

**`Remarks`**

The API is subject to change as we find more applications for this

## Constructors

### constructor

• **new ColonyEventManager**(`provider`, `options?`)

Create a new ColonyEvents instance

**`Remarks`**

As opposed to the [ColonyNetwork](ColonyNetwork.md) class, this constructor _needs_ an _ethers_ JsonRpcProvider (or a subclass of it) as it's
the only provider that supports topic filtering by multiple addresses

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `JsonRpcProvider` | An _ethers_ `JsonRpcProvider` |
| `options?` | [`ColonyEventManagerOptions`](../interfaces/ColonyEventManagerOptions.md) | Optional custom [ColonyEventManagerOptions](../interfaces/ColonyEventManagerOptions.md) |

## Properties

### ipfs

• **ipfs**: [`IpfsMetadata`](IpfsMetadata.md)

___

### provider

• **provider**: `JsonRpcProvider`

## Methods

### createEventSource

▸ **createEventSource**<`T`\>(`contractFactory`): `T`

Create an event source to create filters with

This method can be used to instantiate contract event sources from virtually any
TypeChain ContractFactory (has to have the `.connect()` method) that can then
be used with the EventManager. Best to use with the contracts from `@colony/events`
as they all are compatible

**`Example`**

Create an event source from the IColonyEventsFactory
```typescript
import { ColonyEventManager } from '@colony/sdk';
import { IColonyEvents__factory as ColonyEventsFactory } from '@colony/events';

const manager = new ColonyEventManager(provider);
// Event source that can be plugged into a filter creation method
const colonyEventSource = manager.createEventSource(ColonyEventsFactory);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `BaseContract` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractFactory` | `ContractFactory`<`T`\> | A TypeChain compatible contract factory |

#### Returns

`T`

An event source contract (it's just an ethers `Contract`)

___

### createFilter

▸ **createFilter**<`T`, `N`\>(`eventSource`, `eventName`, `address?`, `params?`, `options?`): [`ColonyFilter`](../interfaces/ColonyFilter.md)

Create a [ColonyFilter](../interfaces/ColonyFilter.md) that keeps track of its event source

To create a [ColonyFilter](../interfaces/ColonyFilter.md), we need to not only give it the topics and addresses as required by _ethers_
[`Filter`s](https://docs.ethers.io/v5/api/providers/types/#providers-Filter), but also the actual source contract of that Filter.
Like this we can keep track of the source contract interface to parse the event data when it's emitted

**`Remarks`**

We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on

**`Example`**

Filter for all `DomainAdded` events between block 21830000 and 21840000 (across all deployed [ColonyNetwork](ColonyNetwork.md) contracts)
```typescript
 const domainAdded = colonyEvents.createFilter(
   colonyEventSource,
   'DomainAdded(address,uint256)',
   null,
   { fromBlock: 21830000 , toBlock: 21840000  },
);
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BaseContract` & { `filters`: { [P in string \| number \| symbol]: Function }  } | Needs to be a valid [EventSource](../README.md#eventsource) (i.e. from `colonyEvents.eventSources`) |
| `N` | extends `string` \| `number` \| `symbol` | An event signature as defined in the _ethers_ contract's [`filters`](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters) object. See the [ColonyJS documentation](https://colony.gitbook.io/colony/colonyjs) for a list of all available contracts and events |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventSource` | `T` | - |
| `eventName` | `N` | A valid event signature from the contract's `filters` object |
| `address?` | `string` | Address of the contract that can emit this event. Will listen to any contract if not provided |
| `params?` | `Parameters`<`T`[``"filters"``][`N`]\> | Parameters to filter by for the event. Has to be indexed in the contract (see _ethers_ [Event Filters](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters)) |
| `options?` | `Object` | You can define `fromBlock` and `toBlock` only once for all the filters given (default for both is `latest`) |
| `options.fromBlock?` | `BlockTag` | - |
| `options.toBlock?` | `BlockTag` | - |

#### Returns

[`ColonyFilter`](../interfaces/ColonyFilter.md)

A [ColonyFilter](../interfaces/ColonyFilter.md)

___

### createMultiFilter

▸ **createMultiFilter**<`T`, `N`\>(`contract`, `eventNames`, `address?`): [`ColonyMultiFilter`](../interfaces/ColonyMultiFilter.md)

Create a [ColonyMultiFilter](../interfaces/ColonyMultiFilter.md) that keeps track of its event source and can work alongside other filters in [getMultiEvents](ColonyEventManager.md#getmultievents)

The [ColonyMultiFilter](../interfaces/ColonyMultiFilter.md) works much like the [ColonyFilter](../interfaces/ColonyFilter.md), just that we _have_ to specify an address of the contract which emits this event.
Furthermore, no `fromBlock` or `toBlock` requirements can be given (that is done on a global level in [getMultiEvents](ColonyEventManager.md#getmultievents))

**`Remarks`**

We can do that as we do not have ambiguous events across our contracts, so we will always be able to find the right contract to parse the event data later on. Note that `ColonyMultiFilter` does not allow for params to be passed in.

**`Example`**

Filter for all `DomainAdded` events for a specific [Colony](Colony.md) contract
```typescript
const domainAdded = colonyEvents.createFilter(
  colonyEventSource,
  'DomainAdded(address,uint256)',
  colonyAddress,
);
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BaseContract` & { `filters`: { [P in string \| number \| symbol]: Function }  } | Needs to be a valid [EventSource](../README.md#eventsource) (i.e. from `colonyEvents.eventSources`) |
| `N` | extends `string` \| `number` \| `symbol` | An event signature as defined in the _ethers_ contract's [`filters`](https://docs.ethers.io/v5/api/contract/contract/#Contract--filters) object. See the [ColonyJS documentation](https://colony.gitbook.io/colony/colonyjs) for a list of all available contracts and events |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contract` | `T` | A valid [EventSource](../README.md#eventsource) |
| `eventNames` | `N`[] | A list of valid event signatures from the contract's `filters` object |
| `address?` | `string` | Address of the contract that can emit this event. Will listen to any contract if not provided |

#### Returns

[`ColonyMultiFilter`](../interfaces/ColonyMultiFilter.md)

A [ColonyMultiFilter](../interfaces/ColonyMultiFilter.md)

___

### getEvents

▸ **getEvents**<`T`\>(`filter`): `Promise`<[`ColonyEvent`](../interfaces/ColonyEvent.md)<`T`\>[]\>

Get events for a single filter

Gets events for an individual filter and automatically parses the data if possible

**`Example`**

Retrieve and parse all `DomainAdded` events for a specific [Colony](Colony.md) contract
```typescript
const domainAdded = colonyEvents.createFilter(
   colonyEventSource,
  'DomainAdded(address,uint256)',
  colonyAddress,
);
// Immediately executing async function
(async function() {
  const events = await colonyEvents.getEvents(domainAdded);
})();
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`ColonyFilter`](../interfaces/ColonyFilter.md) | A [ColonyFilter](../interfaces/ColonyFilter.md), [ColonyMultiFilter](../interfaces/ColonyMultiFilter.md)s will not work |

#### Returns

`Promise`<[`ColonyEvent`](../interfaces/ColonyEvent.md)<`T`\>[]\>

An array of [ColonyEvent](../interfaces/ColonyEvent.md)s

___

### getMultiEvents

▸ **getMultiEvents**<`T`\>(`filters`, `options?`): `Promise`<[`ColonyEvent`](../interfaces/ColonyEvent.md)<`T`\>[]\>

Get events for multiple filters across multiple addresses at once

All the filters are connected by a logical OR, i.e. it will find ALL given events for ALL the given contract addresses
This is handy when you want to listen to a fixed set of events for a lot of different contracts

**`Remarks`**

`fromBlock` and `toBlock` properties of the indivdual filters will be ignored

**`Example`**

Retrieve and parse all `DomainAdded` and `DomainMetadata` events for a specific [ColonyNetwork](ColonyNetwork.md) contract.
Note that we're using [createMultiFilter](ColonyEventManager.md#createmultifilter) here. The two `colonyAddress`es could also be different

```typescript
const domainAdded = colonyEvents.createMultiFilter(
  colonyEventSource,
  'DomainAdded(address,uint256)',
  colonyAddress,
);
const domainMetadata = colonyEvents.createMultiFilter(
  colonyEventSource,
  'DomainMetadata(address,uint256,string)',
  colonyAddress,
);

// Immediately executing async function
(async function() {
  const events = await colonyEvents.getMultiEvents([domainAdded, domainMetadata]);
})();
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`ColonyMultiFilter`](../interfaces/ColonyMultiFilter.md) \| [`ColonyMultiFilter`](../interfaces/ColonyMultiFilter.md)[] | An array of [ColonyMultiFilter](../interfaces/ColonyMultiFilter.md)s. Normal [ColonyFilter](../interfaces/ColonyFilter.md)s will not work |
| `options?` | `Object` | You can define `fromBlock` and `toBlock` only once for all the filters given (default for both is `latest`) |
| `options.fromBlock?` | `BlockTag` | - |
| `options.toBlock?` | `BlockTag` | - |

#### Returns

`Promise`<[`ColonyEvent`](../interfaces/ColonyEvent.md)<`T`\>[]\>

An array of [ColonyEvent](../interfaces/ColonyEvent.md)s
