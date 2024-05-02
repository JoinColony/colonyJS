# Interface: CoinMachineEvents

[CoinMachineEvents](../modules/CoinMachineEvents.md).CoinMachineEvents

## Hierarchy

- `BaseContract`

  ↳ **`CoinMachineEvents`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

___

### callStatic

• **callStatic**: `Object`

#### Overrides

BaseContract.callStatic

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](TransactionResponse.md)

#### Inherited from

BaseContract.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Overrides

BaseContract.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ExtensionInitialised` | () => [`ExtensionInitialisedEventFilter`](../modules/CoinMachineEvents.md#extensioninitialisedeventfilter) |
| `ExtensionInitialised()` | () => [`ExtensionInitialisedEventFilter`](../modules/CoinMachineEvents.md#extensioninitialisedeventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/CoinMachineEvents.md#logsetauthorityeventfilter) |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => [`LogSetAuthorityEventFilter`](../modules/CoinMachineEvents.md#logsetauthorityeventfilter) |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/CoinMachineEvents.md#logsetownereventfilter) |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => [`LogSetOwnerEventFilter`](../modules/CoinMachineEvents.md#logsetownereventfilter) |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/CoinMachineEvents.md#metatransactionexecutedeventfilter) |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => [`MetaTransactionExecutedEventFilter`](../modules/CoinMachineEvents.md#metatransactionexecutedeventfilter) |
| `PeriodUpdated` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => [`PeriodUpdatedEventFilter`](../modules/CoinMachineEvents.md#periodupdatedeventfilter) |
| `PeriodUpdated(uint256,uint256)` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => [`PeriodUpdatedEventFilter`](../modules/CoinMachineEvents.md#periodupdatedeventfilter) |
| `PriceEvolutionSet` | (`evolvePrice?`: ``null``) => [`PriceEvolutionSetEventFilter`](../modules/CoinMachineEvents.md#priceevolutionseteventfilter) |
| `PriceEvolutionSet(bool)` | (`evolvePrice?`: ``null``) => [`PriceEvolutionSetEventFilter`](../modules/CoinMachineEvents.md#priceevolutionseteventfilter) |
| `TokensBought(address,address,uint256,uint256)` | (`buyer?`: ``null`` \| `string`, `token?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => [`TokensBought_address_address_uint256_uint256_EventFilter`](../modules/CoinMachineEvents.md#tokensbought_address_address_uint256_uint256_eventfilter) |
| `TokensBought(address,uint256,uint256)` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => [`TokensBought_address_uint256_uint256_EventFilter`](../modules/CoinMachineEvents.md#tokensbought_address_uint256_uint256_eventfilter) |
| `WhitelistSet` | (`whitelist?`: ``null``) => [`WhitelistSetEventFilter`](../modules/CoinMachineEvents.md#whitelistseteventfilter) |
| `WhitelistSet(address)` | (`whitelist?`: ``null``) => [`WhitelistSetEventFilter`](../modules/CoinMachineEvents.md#whitelistseteventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`CoinMachineEventsInterface`](CoinMachineEvents.CoinMachineEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)\>

#### Overrides

BaseContract.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

BaseContract.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)\>

#### Overrides

BaseContract.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)\>

#### Returns

`Promise`<[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)\>

#### Overrides

BaseContract.deployed

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

BaseContract.fallback

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CoinMachineEvents`](CoinMachineEvents.CoinMachineEvents.md)

#### Overrides

BaseContract.removeAllListeners
