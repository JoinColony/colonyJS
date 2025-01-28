# Interface: Erc20TokenClient

A standard ERC20 token

## Extends

- [`ERC20Token`](ERC20Token.md)

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`_deployedPromise`](ERC20Token.md#_deployedpromise)

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`_runningEvents`](ERC20Token.md#_runningevents)

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`_wrappedEmits`](ERC20Token.md#_wrappedemits)

***

### address

> `readonly` **address**: `string`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`address`](ERC20Token.md#address)

***

### callStatic

> **callStatic**: `object`

#### allowance()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### allowance(address,address)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### approve()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### approve(address,uint256)()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### balanceOf()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### balanceOf(address)()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### decimals()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`number`\>

#### decimals()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`number`\>

#### name()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### name()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### symbol()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### symbol()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### totalSupply()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### totalSupply()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### transfer()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### transfer(address,uint256)()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### transferFrom()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`callStatic`](ERC20Token.md#callstatic)

***

### clientType

> **clientType**: [`TokenClient`](../enumerations/ClientTypeTokens.md#tokenclient)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`deployTransaction`](ERC20Token.md#deploytransaction)

***

### estimateGas

> **estimateGas**: `object`

#### allowance()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### allowance(address,address)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### approve()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### approve(address,uint256)()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### balanceOf()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### balanceOf(address)()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### decimals()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### decimals()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### name()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### name()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### symbol()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### symbol()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### totalSupply()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### totalSupply()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### transfer()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transfer(address,uint256)()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transferFrom()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`estimateGas`](ERC20Token.md#estimategas)

***

### filters

> **filters**: `object`

#### Approval()

##### Parameters

###### owner?

`null` | `string`

###### spender?

`null` | `string`

###### value?

`null`

##### Returns

`ApprovalEventFilter`

#### Approval(address,address,uint256)()

##### Parameters

###### owner?

`null` | `string`

###### spender?

`null` | `string`

###### value?

`null`

##### Returns

`ApprovalEventFilter`

#### Transfer()

##### Parameters

###### from?

`null` | `string`

###### to?

`null` | `string`

###### value?

`null`

##### Returns

`TransferEventFilter`

#### Transfer(address,address,uint256)()

##### Parameters

###### from?

`null` | `string`

###### to?

`null` | `string`

###### value?

`null`

##### Returns

`TransferEventFilter`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`filters`](ERC20Token.md#filters)

***

### functions

> **functions**: `object`

#### allowance()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### allowance(address,address)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### approve()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### approve(address,uint256)()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### balanceOf()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### balanceOf(address)()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### decimals()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`number`\]\>

#### decimals()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`number`\]\>

#### name()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### name()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### symbol()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### symbol()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### totalSupply()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### totalSupply()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### transfer()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transfer(address,uint256)()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transferFrom()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`functions`](ERC20Token.md#functions)

***

### interface

> **interface**: `TokenERC20Interface`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`interface`](ERC20Token.md#interface)

***

### off

> **off**: `OnEvent`\<[`Erc20TokenClient`](Erc20TokenClient.md)\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`off`](ERC20Token.md#off)

***

### on

> **on**: `OnEvent`\<[`Erc20TokenClient`](Erc20TokenClient.md)\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`on`](ERC20Token.md#on)

***

### once

> **once**: `OnEvent`\<[`Erc20TokenClient`](Erc20TokenClient.md)\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`once`](ERC20Token.md#once)

***

### populateTransaction

> **populateTransaction**: `object`

#### allowance()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### allowance(address,address)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approve()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approve(address,uint256)()

##### Parameters

###### spender

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### balanceOf()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### balanceOf(address)()

##### Parameters

###### account

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### decimals()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### decimals()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### name()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### name()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### symbol()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### symbol()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### totalSupply()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### totalSupply()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transfer()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transfer(address,uint256)()

##### Parameters

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transferFrom()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### from

`string`

###### to

`string`

###### amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`populateTransaction`](ERC20Token.md#populatetransaction)

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`provider`](ERC20Token.md#provider)

***

### removeListener

> **removeListener**: `OnEvent`\<[`Erc20TokenClient`](Erc20TokenClient.md)\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`removeListener`](ERC20Token.md#removelistener)

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`resolvedAddress`](ERC20Token.md#resolvedaddress)

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`signer`](ERC20Token.md#signer)

***

### tokenClientType

> **tokenClientType**: [`Erc20`](../enumerations/TokenClientType.md#erc20)

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`_checkRunningEvents`](ERC20Token.md#_checkrunningevents)

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`_deployed`](ERC20Token.md#_deployed)

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

[`ERC20Token`](ERC20Token.md).[`_wrapEvent`](ERC20Token.md#_wrapevent)

***

### allowance()

> **allowance**(`owner`, `spender`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### owner

`string`

##### spender

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`allowance`](ERC20Token.md#allowance-24)

***

### allowance(address,address)()

> **allowance(address,address)**(`owner`, `spender`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### owner

`string`

##### spender

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`allowance(address,address)`](ERC20Token.md#allowance(address,address)-24)

***

### approve()

> **approve**(`spender`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### spender

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`approve`](ERC20Token.md#approve-24)

***

### approve(address,uint256)()

> **approve(address,uint256)**(`spender`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### spender

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`approve(address,uint256)`](ERC20Token.md#approve(address,uint256)-24)

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`attach`](ERC20Token.md#attach)

***

### balanceOf()

> **balanceOf**(`account`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### account

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`balanceOf`](ERC20Token.md#balanceof-24)

***

### balanceOf(address)()

> **balanceOf(address)**(`account`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### account

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`balanceOf(address)`](ERC20Token.md#balanceof(address)-24)

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`connect`](ERC20Token.md#connect)

***

### decimals()

> **decimals**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`decimals`](ERC20Token.md#decimals-24)

***

### decimals()()

> **decimals()**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`decimals()`](ERC20Token.md#decimals()-24)

***

### deployed()

> **deployed**(): `Promise`\<[`Erc20TokenClient`](Erc20TokenClient.md)\>

#### Returns

`Promise`\<[`Erc20TokenClient`](Erc20TokenClient.md)\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`deployed`](ERC20Token.md#deployed)

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

[`ERC20Token`](ERC20Token.md).[`emit`](ERC20Token.md#emit)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`fallback`](ERC20Token.md#fallback)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`listenerCount`](ERC20Token.md#listenercount)

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

##### Inherited from

[`ERC20Token`](ERC20Token.md).[`listeners`](ERC20Token.md#listeners)

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

[`ERC20Token`](ERC20Token.md).[`listeners`](ERC20Token.md#listeners)

***

### name()

> **name**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`name`](ERC20Token.md#name-24)

***

### name()()

> **name()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`name()`](ERC20Token.md#name()-24)

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

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`queryFilter`](ERC20Token.md#queryfilter)

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

##### Inherited from

[`ERC20Token`](ERC20Token.md).[`removeAllListeners`](ERC20Token.md#removealllisteners)

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

[`ERC20Token`](ERC20Token.md).[`removeAllListeners`](ERC20Token.md#removealllisteners)

***

### symbol()

> **symbol**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`symbol`](ERC20Token.md#symbol-24)

***

### symbol()()

> **symbol()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`symbol()`](ERC20Token.md#symbol()-24)

***

### totalSupply()

> **totalSupply**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`totalSupply`](ERC20Token.md#totalsupply-24)

***

### totalSupply()()

> **totalSupply()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`totalSupply()`](ERC20Token.md#totalsupply()-24)

***

### transfer()

> **transfer**(`to`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### to

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`transfer`](ERC20Token.md#transfer-30)

***

### transfer(address,uint256)()

> **transfer(address,uint256)**(`to`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### to

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`transfer(address,uint256)`](ERC20Token.md#transfer(address,uint256)-24)

***

### transferFrom()

> **transferFrom**(`from`, `to`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### from

`string`

##### to

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`transferFrom`](ERC20Token.md#transferfrom-24)

***

### transferFrom(address,address,uint256)()

> **transferFrom(address,address,uint256)**(`from`, `to`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### from

`string`

##### to

`string`

##### amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`transferFrom(address,address,uint256)`](ERC20Token.md#transferfrom(address,address,uint256)-24)
