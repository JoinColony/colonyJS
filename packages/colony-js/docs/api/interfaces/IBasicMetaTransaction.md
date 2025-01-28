# Interface: IBasicMetaTransaction

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

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### Overrides

`BaseContract.callStatic`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`BaseContract.deployTransaction`

***

### estimateGas

> **estimateGas**: `object`

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

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

`MetaTransactionExecutedEventFilter`

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

`MetaTransactionExecutedEventFilter`

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: `IBasicMetaTransactionInterface`

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`IBasicMetaTransaction`](IBasicMetaTransaction.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`IBasicMetaTransaction`](IBasicMetaTransaction.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`IBasicMetaTransaction`](IBasicMetaTransaction.md)\>

#### Overrides

`BaseContract.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### Overrides

`BaseContract.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`IBasicMetaTransaction`](IBasicMetaTransaction.md)\>

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

> **deployed**(): `Promise`\<[`IBasicMetaTransaction`](IBasicMetaTransaction.md)\>

#### Returns

`Promise`\<[`IBasicMetaTransaction`](IBasicMetaTransaction.md)\>

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

### executeMetaTransaction()

> **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### userAddress

`string`

##### payload

`BytesLike`

##### sigR

`BytesLike`

##### sigS

`BytesLike`

##### sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

> **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### userAddress

`string`

##### payload

`BytesLike`

##### sigR

`BytesLike`

##### sigS

`BytesLike`

##### sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`BaseContract.fallback`

***

### getMetatransactionNonce()

> **getMetatransactionNonce**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### userAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getMetatransactionNonce(address)()

> **getMetatransactionNonce(address)**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### userAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

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
