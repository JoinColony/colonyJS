# Interface: TokenLockingEvents

## Hierarchy

- `BaseContract`

  ↳ **`TokenLockingEvents`**

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
| `ColonyNetworkSet` | (`colonyNetwork?`: ``null``) => [`ColonyNetworkSetEventFilter`](../README.md#colonynetworkseteventfilter) |
| `ColonyNetworkSet(address)` | (`colonyNetwork?`: ``null``) => [`ColonyNetworkSetEventFilter`](../README.md#colonynetworkseteventfilter) |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `ReputationMinerPenalised` | (`miner?`: ``null``, `beneficiary?`: ``null``, `tokensLost?`: ``null``) => `ReputationMinerPenalisedEventFilter` |
| `ReputationMinerPenalised(address,address,uint256)` | (`miner?`: ``null``, `beneficiary?`: ``null``, `tokensLost?`: ``null``) => `ReputationMinerPenalisedEventFilter` |
| `StakeTransferred` | (`token?`: ``null``, `by?`: ``null``, `from?`: ``null``, `to?`: ``null``, `amount?`: ``null``) => [`StakeTransferredEventFilter`](../README.md#staketransferredeventfilter) |
| `StakeTransferred(address,address,address,address,uint256)` | (`token?`: ``null``, `by?`: ``null``, `from?`: ``null``, `to?`: ``null``, `amount?`: ``null``) => [`StakeTransferredEventFilter`](../README.md#staketransferredeventfilter) |
| `TokenLocked(address,address,uint256)` | (`token?`: ``null`` \| `string`, `lockedBy?`: ``null`` \| `string`, `lockCount?`: ``null``) => [`TokenLocked_address_address_uint256_EventFilter`](../README.md#tokenlocked_address_address_uint256_eventfilter) |
| `TokenLocked(address,uint256)` | (`token?`: ``null``, `lockCount?`: ``null``) => [`TokenLocked_address_uint256_EventFilter`](../README.md#tokenlocked_address_uint256_eventfilter) |
| `UserTokenApproved` | (`token?`: ``null``, `user?`: ``null``, `approvedBy?`: ``null``, `amount?`: ``null``) => [`UserTokenApprovedEventFilter`](../README.md#usertokenapprovedeventfilter) |
| `UserTokenApproved(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `approvedBy?`: ``null``, `amount?`: ``null``) => [`UserTokenApprovedEventFilter`](../README.md#usertokenapprovedeventfilter) |
| `UserTokenClaimed` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => [`UserTokenClaimedEventFilter`](../README.md#usertokenclaimedeventfilter) |
| `UserTokenClaimed(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => [`UserTokenClaimedEventFilter`](../README.md#usertokenclaimedeventfilter) |
| `UserTokenDeobligated` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => [`UserTokenDeobligatedEventFilter`](../README.md#usertokendeobligatedeventfilter) |
| `UserTokenDeobligated(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => [`UserTokenDeobligatedEventFilter`](../README.md#usertokendeobligatedeventfilter) |
| `UserTokenDeposited(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => [`UserTokenDeposited_address_address_uint256_EventFilter`](../README.md#usertokendeposited_address_address_uint256_eventfilter) |
| `UserTokenDeposited(address,address,uint256,uint256)` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``, `timestamp?`: ``null``) => [`UserTokenDeposited_address_address_uint256_uint256_EventFilter`](../README.md#usertokendeposited_address_address_uint256_uint256_eventfilter) |
| `UserTokenObligated` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => [`UserTokenObligatedEventFilter`](../README.md#usertokenobligatedeventfilter) |
| `UserTokenObligated(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => [`UserTokenObligatedEventFilter`](../README.md#usertokenobligatedeventfilter) |
| `UserTokenTransferred` | (`token?`: ``null``, `user?`: ``null``, `recipient?`: ``null``, `amount?`: ``null``) => [`UserTokenTransferredEventFilter`](../README.md#usertokentransferredeventfilter) |
| `UserTokenTransferred(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `recipient?`: ``null``, `amount?`: ``null``) => [`UserTokenTransferredEventFilter`](../README.md#usertokentransferredeventfilter) |
| `UserTokenUnlocked` | (`token?`: ``null``, `user?`: ``null``, `lockId?`: ``null``) => [`UserTokenUnlockedEventFilter`](../README.md#usertokenunlockedeventfilter) |
| `UserTokenUnlocked(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `lockId?`: ``null``) => [`UserTokenUnlockedEventFilter`](../README.md#usertokenunlockedeventfilter) |
| `UserTokenWithdrawn` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => [`UserTokenWithdrawnEventFilter`](../README.md#usertokenwithdrawneventfilter) |
| `UserTokenWithdrawn(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => [`UserTokenWithdrawnEventFilter`](../README.md#usertokenwithdrawneventfilter) |

#### Overrides

BaseContract.filters

___

### functions

• **functions**: `Object`

#### Overrides

BaseContract.functions

___

### interface

• **interface**: [`TokenLockingEventsInterface`](TokenLockingEventsInterface.md)

#### Overrides

BaseContract.interface

___

### off

• **off**: `OnEvent`<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Overrides

BaseContract.off

___

### on

• **on**: `OnEvent`<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Overrides

BaseContract.on

___

### once

• **once**: `OnEvent`<[`TokenLockingEvents`](TokenLockingEvents.md)\>

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

• **removeListener**: `OnEvent`<[`TokenLockingEvents`](TokenLockingEvents.md)\>

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

▸ **attach**(`addressOrName`): [`TokenLockingEvents`](TokenLockingEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`TokenLockingEvents`](TokenLockingEvents.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`TokenLockingEvents`](TokenLockingEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`TokenLockingEvents`](TokenLockingEvents.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Returns

`Promise`<[`TokenLockingEvents`](TokenLockingEvents.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`TokenLockingEvents`](TokenLockingEvents.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`TokenLockingEvents`](TokenLockingEvents.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`TokenLockingEvents`](TokenLockingEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TokenLockingEvents`](TokenLockingEvents.md)

#### Overrides

BaseContract.removeAllListeners
