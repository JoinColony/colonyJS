[**API**](../../../README.md)

***

# Interface: TokenLockingEvents

## Extends

- `BaseContract`

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`BaseContract._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`BaseContract._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`BaseContract.address`

***

### callStatic

> **callStatic**: `object`

#### Overrides

`BaseContract.callStatic`

***

### deployTransaction

> `readonly` **deployTransaction**: [`TransactionResponse`](../../../interfaces/TransactionResponse.md)

#### Inherited from

`BaseContract.deployTransaction`

***

### estimateGas

> **estimateGas**: `object`

#### Overrides

`BaseContract.estimateGas`

***

### filters

> **filters**: `object`

#### ColonyNetworkSet()

##### Parameters

###### colonyNetwork?

`null`

##### Returns

[`ColonyNetworkSetEventFilter`](../type-aliases/ColonyNetworkSetEventFilter.md)

#### ColonyNetworkSet(address)()

##### Parameters

###### colonyNetwork?

`null`

##### Returns

[`ColonyNetworkSetEventFilter`](../type-aliases/ColonyNetworkSetEventFilter.md)

#### LogSetAuthority()

##### Parameters

###### authority?

`null` | `string`

##### Returns

[`LogSetAuthorityEventFilter`](../type-aliases/LogSetAuthorityEventFilter.md)

#### LogSetAuthority(address)()

##### Parameters

###### authority?

`null` | `string`

##### Returns

[`LogSetAuthorityEventFilter`](../type-aliases/LogSetAuthorityEventFilter.md)

#### LogSetOwner()

##### Parameters

###### owner?

`null` | `string`

##### Returns

[`LogSetOwnerEventFilter`](../type-aliases/LogSetOwnerEventFilter.md)

#### LogSetOwner(address)()

##### Parameters

###### owner?

`null` | `string`

##### Returns

[`LogSetOwnerEventFilter`](../type-aliases/LogSetOwnerEventFilter.md)

#### MetaTransactionExecuted()

##### Parameters

###### user?

`null`

###### relayerAddress?

`null`

###### functionSignature?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### user?

`null`

###### relayerAddress?

`null`

###### functionSignature?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### ReputationMinerPenalised()

##### Parameters

###### miner?

`null`

###### beneficiary?

`null`

###### tokensLost?

`null`

##### Returns

[`ReputationMinerPenalisedEventFilter`](../type-aliases/ReputationMinerPenalisedEventFilter.md)

#### ReputationMinerPenalised(address,address,uint256)()

##### Parameters

###### miner?

`null`

###### beneficiary?

`null`

###### tokensLost?

`null`

##### Returns

[`ReputationMinerPenalisedEventFilter`](../type-aliases/ReputationMinerPenalisedEventFilter.md)

#### StakeTransferred()

##### Parameters

###### token?

`null`

###### by?

`null`

###### from?

`null`

###### to?

`null`

###### amount?

`null`

##### Returns

[`StakeTransferredEventFilter`](../type-aliases/StakeTransferredEventFilter.md)

#### StakeTransferred(address,address,address,address,uint256)()

##### Parameters

###### token?

`null`

###### by?

`null`

###### from?

`null`

###### to?

`null`

###### amount?

`null`

##### Returns

[`StakeTransferredEventFilter`](../type-aliases/StakeTransferredEventFilter.md)

#### TokenLocked(address,address,uint256)()

##### Parameters

###### token?

`null` | `string`

###### lockedBy?

`null` | `string`

###### lockCount?

`null`

##### Returns

[`TokenLocked_address_address_uint256_EventFilter`](../type-aliases/TokenLocked_address_address_uint256_EventFilter.md)

#### TokenLocked(address,uint256)()

##### Parameters

###### token?

`null`

###### lockCount?

`null`

##### Returns

[`TokenLocked_address_uint256_EventFilter`](../type-aliases/TokenLocked_address_uint256_EventFilter.md)

#### UserTokenApproved()

##### Parameters

###### token?

`null`

###### user?

`null`

###### approvedBy?

`null`

###### amount?

`null`

##### Returns

[`UserTokenApprovedEventFilter`](../type-aliases/UserTokenApprovedEventFilter.md)

#### UserTokenApproved(address,address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### approvedBy?

`null`

###### amount?

`null`

##### Returns

[`UserTokenApprovedEventFilter`](../type-aliases/UserTokenApprovedEventFilter.md)

#### UserTokenClaimed()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

[`UserTokenClaimedEventFilter`](../type-aliases/UserTokenClaimedEventFilter.md)

#### UserTokenClaimed(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

[`UserTokenClaimedEventFilter`](../type-aliases/UserTokenClaimedEventFilter.md)

#### UserTokenDeobligated()

##### Parameters

###### token?

`null`

###### user?

`null`

###### obligatedBy?

`null`

###### amount?

`null`

##### Returns

[`UserTokenDeobligatedEventFilter`](../type-aliases/UserTokenDeobligatedEventFilter.md)

#### UserTokenDeobligated(address,address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### obligatedBy?

`null`

###### amount?

`null`

##### Returns

[`UserTokenDeobligatedEventFilter`](../type-aliases/UserTokenDeobligatedEventFilter.md)

#### UserTokenDeposited(address,address,uint256,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

###### timestamp?

`null`

##### Returns

[`UserTokenDeposited_address_address_uint256_uint256_EventFilter`](../type-aliases/UserTokenDeposited_address_address_uint256_uint256_EventFilter.md)

#### UserTokenDeposited(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

[`UserTokenDeposited_address_address_uint256_EventFilter`](../type-aliases/UserTokenDeposited_address_address_uint256_EventFilter.md)

#### UserTokenObligated()

##### Parameters

###### token?

`null`

###### user?

`null`

###### obligatedBy?

`null`

###### amount?

`null`

##### Returns

[`UserTokenObligatedEventFilter`](../type-aliases/UserTokenObligatedEventFilter.md)

#### UserTokenObligated(address,address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### obligatedBy?

`null`

###### amount?

`null`

##### Returns

[`UserTokenObligatedEventFilter`](../type-aliases/UserTokenObligatedEventFilter.md)

#### UserTokenTransferred()

##### Parameters

###### token?

`null`

###### user?

`null`

###### recipient?

`null`

###### amount?

`null`

##### Returns

[`UserTokenTransferredEventFilter`](../type-aliases/UserTokenTransferredEventFilter.md)

#### UserTokenTransferred(address,address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### recipient?

`null`

###### amount?

`null`

##### Returns

[`UserTokenTransferredEventFilter`](../type-aliases/UserTokenTransferredEventFilter.md)

#### UserTokenUnlocked()

##### Parameters

###### token?

`null`

###### user?

`null`

###### lockId?

`null`

##### Returns

[`UserTokenUnlockedEventFilter`](../type-aliases/UserTokenUnlockedEventFilter.md)

#### UserTokenUnlocked(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### lockId?

`null`

##### Returns

[`UserTokenUnlockedEventFilter`](../type-aliases/UserTokenUnlockedEventFilter.md)

#### UserTokenWithdrawn()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

[`UserTokenWithdrawnEventFilter`](../type-aliases/UserTokenWithdrawnEventFilter.md)

#### UserTokenWithdrawn(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

[`UserTokenWithdrawnEventFilter`](../type-aliases/UserTokenWithdrawnEventFilter.md)

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: [`TokenLockingEventsInterface`](TokenLockingEventsInterface.md)

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Overrides

`BaseContract.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### Overrides

`BaseContract.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Overrides

`BaseContract.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`BaseContract.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`BaseContract.signer`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`BaseContract._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`BaseContract._deployed`

***

### \_wrapEvent()

> **\_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

##### runningEvent

`RunningEvent`

##### log

`Log`

##### listener

`Listener`

#### Returns

`Event`

#### Inherited from

`BaseContract._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Overrides

`BaseContract.attach`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Overrides

`BaseContract.connect`

***

### deployed()

> **deployed**(): `Promise`\<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Returns

`Promise`\<[`TokenLockingEvents`](TokenLockingEvents.md)\>

#### Overrides

`BaseContract.deployed`

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

##### eventName

`string` | `EventFilter`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

`BaseContract.emit`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<[`TransactionResponse`](../../../interfaces/TransactionResponse.md)\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<[`TransactionResponse`](../../../interfaces/TransactionResponse.md)\>

#### Inherited from

`BaseContract.fallback`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`BaseContract.listenerCount`

***

### listeners()

#### Call Signature

> **listeners**\<`TEvent`\>(`eventFilter`?): `TypedListener`\<`TEvent`\>[]

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter?

`TypedEventFilter`\<`TEvent`\>

##### Returns

`TypedListener`\<`TEvent`\>[]

##### Overrides

`BaseContract.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Overrides

`BaseContract.listeners`

***

### queryFilter()

> **queryFilter**\<`TEvent`\>(`event`, `fromBlockOrBlockhash`?, `toBlock`?): `Promise`\<`TEvent`[]\>

#### Type Parameters

• **TEvent** *extends* `TypedEvent`

#### Parameters

##### event

`TypedEventFilter`\<`TEvent`\>

##### fromBlockOrBlockhash?

`string` | `number`

##### toBlock?

`string` | `number`

#### Returns

`Promise`\<`TEvent`[]\>

#### Overrides

`BaseContract.queryFilter`

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`TEvent`\>(`eventFilter`): `this`

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter

`TypedEventFilter`\<`TEvent`\>

##### Returns

`this`

##### Overrides

`BaseContract.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Overrides

`BaseContract.removeAllListeners`
