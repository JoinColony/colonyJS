# Interface: TokenAuthority

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

#### canCall()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### canCall(address,address,bytes4)()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### token()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### token()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

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

#### canCall()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### canCall(address,address,bytes4)()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### token()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### token()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### Overrides

`BaseContract.estimateGas`

***

### filters

> **filters**: `object`

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### canCall()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### canCall(address,address,bytes4)()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### token()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### token()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: `TokenAuthorityInterface`

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`TokenAuthority`](TokenAuthority.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`TokenAuthority`](TokenAuthority.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`TokenAuthority`](TokenAuthority.md)\>

#### Overrides

`BaseContract.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### canCall()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### canCall(address,address,bytes4)()

##### Parameters

###### src

`string`

###### dst

`string`

###### sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### token()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### token()()

##### Parameters

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

> **removeListener**: `OnEvent`\<[`TokenAuthority`](TokenAuthority.md)\>

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

### canCall()

> **canCall**(`src`, `dst`, `sig`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### src

`string`

##### dst

`string`

##### sig

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

***

### canCall(address,address,bytes4)()

> **canCall(address,address,bytes4)**(`src`, `dst`, `sig`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### src

`string`

##### dst

`string`

##### sig

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

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

> **deployed**(): `Promise`\<[`TokenAuthority`](TokenAuthority.md)\>

#### Returns

`Promise`\<[`TokenAuthority`](TokenAuthority.md)\>

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

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

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

***

### token()

> **token**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### token()()

> **token()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>
