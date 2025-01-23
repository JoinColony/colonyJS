[**API**](../../../README.md)

***

# Interface: StreamingPaymentsEvents

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

#### ClaimWaived()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

##### Returns

[`ClaimWaivedEventFilter`](../type-aliases/ClaimWaivedEventFilter.md)

#### ClaimWaived(address,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

##### Returns

[`ClaimWaivedEventFilter`](../type-aliases/ClaimWaivedEventFilter.md)

#### EndTimeSet()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### endTime?

`null`

##### Returns

[`EndTimeSetEventFilter`](../type-aliases/EndTimeSetEventFilter.md)

#### EndTimeSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### endTime?

`null`

##### Returns

[`EndTimeSetEventFilter`](../type-aliases/EndTimeSetEventFilter.md)

#### ExtensionInitialised()

##### Returns

[`ExtensionInitialisedEventFilter`](../type-aliases/ExtensionInitialisedEventFilter.md)

#### ExtensionInitialised()()

##### Returns

[`ExtensionInitialisedEventFilter`](../type-aliases/ExtensionInitialisedEventFilter.md)

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

#### PaymentTokenUpdated(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

[`PaymentTokenUpdated_address_uint256_address_uint256_EventFilter`](../type-aliases/PaymentTokenUpdated_address_uint256_address_uint256_EventFilter.md)

#### PaymentTokenUpdated(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### amount?

`null`

###### interval?

`null`

##### Returns

[`PaymentTokenUpdated_address_uint256_uint256_uint256_EventFilter`](../type-aliases/PaymentTokenUpdated_address_uint256_uint256_uint256_EventFilter.md)

#### PaymentTokenUpdated(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### amount?

`null`

##### Returns

[`PaymentTokenUpdated_address_uint256_uint256_EventFilter`](../type-aliases/PaymentTokenUpdated_address_uint256_uint256_EventFilter.md)

#### StartTimeSet()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### startTime?

`null`

##### Returns

[`StartTimeSetEventFilter`](../type-aliases/StartTimeSetEventFilter.md)

#### StartTimeSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### startTime?

`null`

##### Returns

[`StartTimeSetEventFilter`](../type-aliases/StartTimeSetEventFilter.md)

#### StreamingPaymentClaimed()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

[`StreamingPaymentClaimedEventFilter`](../type-aliases/StreamingPaymentClaimedEventFilter.md)

#### StreamingPaymentClaimed(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

[`StreamingPaymentClaimedEventFilter`](../type-aliases/StreamingPaymentClaimedEventFilter.md)

#### StreamingPaymentCreated()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null`

##### Returns

[`StreamingPaymentCreatedEventFilter`](../type-aliases/StreamingPaymentCreatedEventFilter.md)

#### StreamingPaymentCreated(address,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null`

##### Returns

[`StreamingPaymentCreatedEventFilter`](../type-aliases/StreamingPaymentCreatedEventFilter.md)

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: [`StreamingPaymentsEventsInterface`](StreamingPaymentsEventsInterface.md)

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.md)\>

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

> **removeListener**: `OnEvent`\<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.md)\>

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

> **deployed**(): `Promise`\<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.md)\>

#### Returns

`Promise`\<[`StreamingPaymentsEvents`](StreamingPaymentsEvents.md)\>

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
