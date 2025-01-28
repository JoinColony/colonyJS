# Interface: Erc2612TokenClient

## Extends

- [`ERC2612Token`](ERC2612Token.md)

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`_deployedPromise`](ERC2612Token.md#_deployedpromise)

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`_runningEvents`](ERC2612Token.md#_runningevents)

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`_wrappedEmits`](ERC2612Token.md#_wrappedemits)

***

### address

> `readonly` **address**: `string`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`address`](ERC2612Token.md#address)

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

#### DOMAIN\_SEPARATOR()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### DOMAIN\_SEPARATOR()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

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

#### nonces()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### nonces(address)()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### permit()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### permit(address,address,uint256,uint256,uint8,bytes32,bytes32)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

[`ERC2612Token`](ERC2612Token.md).[`callStatic`](ERC2612Token.md#callstatic)

***

### clientType

> **clientType**: [`TokenClient`](../enumerations/ClientTypeTokens.md#tokenclient)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`deployTransaction`](ERC2612Token.md#deploytransaction)

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

#### DOMAIN\_SEPARATOR()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### DOMAIN\_SEPARATOR()()

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

#### nonces()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### nonces(address)()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### permit()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### permit(address,address,uint256,uint256,uint8,bytes32,bytes32)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`Overrides` & `object`

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

[`ERC2612Token`](ERC2612Token.md).[`estimateGas`](ERC2612Token.md#estimategas)

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

[`ERC2612Token`](ERC2612Token.md).[`filters`](ERC2612Token.md#filters)

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

#### DOMAIN\_SEPARATOR()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### DOMAIN\_SEPARATOR()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

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

#### nonces()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### nonces(address)()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### permit()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### permit(address,address,uint256,uint256,uint8,bytes32,bytes32)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

[`ERC2612Token`](ERC2612Token.md).[`functions`](ERC2612Token.md#functions)

***

### interface

> **interface**: `TokenERC2612Interface`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`interface`](ERC2612Token.md#interface)

***

### off

> **off**: `OnEvent`\<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`off`](ERC2612Token.md#off)

***

### on

> **on**: `OnEvent`\<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`on`](ERC2612Token.md#on)

***

### once

> **once**: `OnEvent`\<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`once`](ERC2612Token.md#once)

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

#### DOMAIN\_SEPARATOR()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### DOMAIN\_SEPARATOR()()

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

#### nonces()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### nonces(address)()

##### Parameters

###### owner

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### permit()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### permit(address,address,uint256,uint256,uint8,bytes32,bytes32)()

##### Parameters

###### owner

`string`

###### spender

`string`

###### value

`BigNumberish`

###### deadline

`BigNumberish`

###### v

`BigNumberish`

###### r

`BytesLike`

###### s

`BytesLike`

###### overrides?

`Overrides` & `object`

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

[`ERC2612Token`](ERC2612Token.md).[`populateTransaction`](ERC2612Token.md#populatetransaction)

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`provider`](ERC2612Token.md#provider)

***

### removeListener

> **removeListener**: `OnEvent`\<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`removeListener`](ERC2612Token.md#removelistener)

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`resolvedAddress`](ERC2612Token.md#resolvedaddress)

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`signer`](ERC2612Token.md#signer)

***

### tokenClientType

> **tokenClientType**: [`Erc2612`](../enumerations/TokenClientType.md#erc2612)

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`_checkRunningEvents`](ERC2612Token.md#_checkrunningevents)

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`_deployed`](ERC2612Token.md#_deployed)

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

[`ERC2612Token`](ERC2612Token.md).[`_wrapEvent`](ERC2612Token.md#_wrapevent)

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

[`ERC2612Token`](ERC2612Token.md).[`allowance`](ERC2612Token.md#allowance-24)

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

[`ERC2612Token`](ERC2612Token.md).[`allowance(address,address)`](ERC2612Token.md#allowance(address,address)-24)

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

[`ERC2612Token`](ERC2612Token.md).[`approve`](ERC2612Token.md#approve-24)

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

[`ERC2612Token`](ERC2612Token.md).[`approve(address,uint256)`](ERC2612Token.md#approve(address,uint256)-24)

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`attach`](ERC2612Token.md#attach)

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

[`ERC2612Token`](ERC2612Token.md).[`balanceOf`](ERC2612Token.md#balanceof-24)

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

[`ERC2612Token`](ERC2612Token.md).[`balanceOf(address)`](ERC2612Token.md#balanceof(address)-24)

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`connect`](ERC2612Token.md#connect)

***

### decimals()

> **decimals**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`decimals`](ERC2612Token.md#decimals-24)

***

### decimals()()

> **decimals()**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`decimals()`](ERC2612Token.md#decimals()-24)

***

### deployed()

> **deployed**(): `Promise`\<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Returns

`Promise`\<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`deployed`](ERC2612Token.md#deployed)

***

### DOMAIN\_SEPARATOR()

> **DOMAIN\_SEPARATOR**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`DOMAIN_SEPARATOR`](ERC2612Token.md#domain_separator-24)

***

### DOMAIN\_SEPARATOR()()

> **DOMAIN\_SEPARATOR()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`DOMAIN_SEPARATOR()`](ERC2612Token.md#domain_separator()-24)

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

[`ERC2612Token`](ERC2612Token.md).[`emit`](ERC2612Token.md#emit)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`fallback`](ERC2612Token.md#fallback)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`listenerCount`](ERC2612Token.md#listenercount)

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

[`ERC2612Token`](ERC2612Token.md).[`listeners`](ERC2612Token.md#listeners)

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`listeners`](ERC2612Token.md#listeners)

***

### name()

> **name**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`name`](ERC2612Token.md#name-24)

***

### name()()

> **name()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`name()`](ERC2612Token.md#name()-24)

***

### nonces()

> **nonces**(`owner`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### owner

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`nonces`](ERC2612Token.md#nonces-24)

***

### nonces(address)()

> **nonces(address)**(`owner`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### owner

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`nonces(address)`](ERC2612Token.md#nonces(address)-24)

***

### permit()

> **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### owner

`string`

##### spender

`string`

##### value

`BigNumberish`

##### deadline

`BigNumberish`

##### v

`BigNumberish`

##### r

`BytesLike`

##### s

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`permit`](ERC2612Token.md#permit-24)

***

### permit(address,address,uint256,uint256,uint8,bytes32,bytes32)()

> **permit(address,address,uint256,uint256,uint8,bytes32,bytes32)**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### owner

`string`

##### spender

`string`

##### value

`BigNumberish`

##### deadline

`BigNumberish`

##### v

`BigNumberish`

##### r

`BytesLike`

##### s

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`permit(address,address,uint256,uint256,uint8,bytes32,bytes32)`](ERC2612Token.md#permit(address,address,uint256,uint256,uint8,bytes32,bytes32)-24)

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

[`ERC2612Token`](ERC2612Token.md).[`queryFilter`](ERC2612Token.md#queryfilter)

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

[`ERC2612Token`](ERC2612Token.md).[`removeAllListeners`](ERC2612Token.md#removealllisteners)

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`removeAllListeners`](ERC2612Token.md#removealllisteners)

***

### symbol()

> **symbol**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`symbol`](ERC2612Token.md#symbol-24)

***

### symbol()()

> **symbol()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`symbol()`](ERC2612Token.md#symbol()-24)

***

### totalSupply()

> **totalSupply**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`totalSupply`](ERC2612Token.md#totalsupply-24)

***

### totalSupply()()

> **totalSupply()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ERC2612Token`](ERC2612Token.md).[`totalSupply()`](ERC2612Token.md#totalsupply()-24)

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

[`ERC2612Token`](ERC2612Token.md).[`transfer`](ERC2612Token.md#transfer-30)

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

[`ERC2612Token`](ERC2612Token.md).[`transfer(address,uint256)`](ERC2612Token.md#transfer(address,uint256)-24)

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

[`ERC2612Token`](ERC2612Token.md).[`transferFrom`](ERC2612Token.md#transferfrom-24)

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

[`ERC2612Token`](ERC2612Token.md).[`transferFrom(address,address,uint256)`](ERC2612Token.md#transferfrom(address,address,uint256)-24)
