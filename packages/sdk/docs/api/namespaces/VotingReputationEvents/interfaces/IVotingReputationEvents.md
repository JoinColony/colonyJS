# Interface: IVotingReputationEvents

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

#### MetaTransactionExecuted()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

[`MetaTransactionExecutedEventFilter`](../type-aliases/MetaTransactionExecutedEventFilter.md)

#### MotionCreated()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### creator?

`null`

###### domainId?

`null` | `BigNumberish`

##### Returns

[`MotionCreatedEventFilter`](../type-aliases/MotionCreatedEventFilter.md)

#### MotionCreated(uint256,address,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### creator?

`null`

###### domainId?

`null` | `BigNumberish`

##### Returns

[`MotionCreatedEventFilter`](../type-aliases/MotionCreatedEventFilter.md)

#### MotionEscalated()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### escalator?

`null`

###### domainId?

`null` | `BigNumberish`

###### newDomainId?

`null` | `BigNumberish`

##### Returns

[`MotionEscalatedEventFilter`](../type-aliases/MotionEscalatedEventFilter.md)

#### MotionEscalated(uint256,address,uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### escalator?

`null`

###### domainId?

`null` | `BigNumberish`

###### newDomainId?

`null` | `BigNumberish`

##### Returns

[`MotionEscalatedEventFilter`](../type-aliases/MotionEscalatedEventFilter.md)

#### MotionEventSet()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### eventIndex?

`null`

##### Returns

[`MotionEventSetEventFilter`](../type-aliases/MotionEventSetEventFilter.md)

#### MotionEventSet(uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### eventIndex?

`null`

##### Returns

[`MotionEventSetEventFilter`](../type-aliases/MotionEventSetEventFilter.md)

#### MotionFinalized()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### action?

`null`

###### executed?

`null`

##### Returns

[`MotionFinalizedEventFilter`](../type-aliases/MotionFinalizedEventFilter.md)

#### MotionFinalized(uint256,bytes,bool)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### action?

`null`

###### executed?

`null`

##### Returns

[`MotionFinalizedEventFilter`](../type-aliases/MotionFinalizedEventFilter.md)

#### MotionRewardClaimed()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

[`MotionRewardClaimedEventFilter`](../type-aliases/MotionRewardClaimedEventFilter.md)

#### MotionRewardClaimed(uint256,address,uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

[`MotionRewardClaimedEventFilter`](../type-aliases/MotionRewardClaimedEventFilter.md)

#### MotionStaked()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

[`MotionStakedEventFilter`](../type-aliases/MotionStakedEventFilter.md)

#### MotionStaked(uint256,address,uint256,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### staker?

`null` | `string`

###### vote?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

[`MotionStakedEventFilter`](../type-aliases/MotionStakedEventFilter.md)

#### MotionVoteRevealed()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

###### vote?

`null` | `BigNumberish`

##### Returns

[`MotionVoteRevealedEventFilter`](../type-aliases/MotionVoteRevealedEventFilter.md)

#### MotionVoteRevealed(uint256,address,uint256)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

###### vote?

`null` | `BigNumberish`

##### Returns

[`MotionVoteRevealedEventFilter`](../type-aliases/MotionVoteRevealedEventFilter.md)

#### MotionVoteSubmitted()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

##### Returns

[`MotionVoteSubmittedEventFilter`](../type-aliases/MotionVoteSubmittedEventFilter.md)

#### MotionVoteSubmitted(uint256,address)()

##### Parameters

###### motionId?

`null` | `BigNumberish`

###### voter?

`null` | `string`

##### Returns

[`MotionVoteSubmittedEventFilter`](../type-aliases/MotionVoteSubmittedEventFilter.md)

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: [`IVotingReputationEventsInterface`](IVotingReputationEventsInterface.md)

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`IVotingReputationEvents`](IVotingReputationEvents.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`IVotingReputationEvents`](IVotingReputationEvents.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`IVotingReputationEvents`](IVotingReputationEvents.md)\>

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

> **removeListener**: `OnEvent`\<[`IVotingReputationEvents`](IVotingReputationEvents.md)\>

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

> **deployed**(): `Promise`\<[`IVotingReputationEvents`](IVotingReputationEvents.md)\>

#### Returns

`Promise`\<[`IVotingReputationEvents`](IVotingReputationEvents.md)\>

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
