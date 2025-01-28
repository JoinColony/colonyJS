# Interface: ERC2612Token

## Extends

- `BaseContract`

## Extended by

- [`Erc2612TokenClient`](Erc2612TokenClient.md)

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

#### Overrides

`BaseContract.estimateGas`

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

#### Overrides

`BaseContract.filters`

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

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: `TokenERC2612Interface`

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`ERC2612Token`](ERC2612Token.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`ERC2612Token`](ERC2612Token.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`ERC2612Token`](ERC2612Token.md)\>

#### Overrides

`BaseContract.once`

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

#### Overrides

`BaseContract.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`ERC2612Token`](ERC2612Token.md)\>

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

### balanceOf()

> **balanceOf**(`account`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### account

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

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

### decimals()

> **decimals**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

***

### decimals()()

> **decimals()**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

***

### deployed()

> **deployed**(): `Promise`\<[`ERC2612Token`](ERC2612Token.md)\>

#### Returns

`Promise`\<[`ERC2612Token`](ERC2612Token.md)\>

#### Overrides

`BaseContract.deployed`

***

### DOMAIN\_SEPARATOR()

> **DOMAIN\_SEPARATOR**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### DOMAIN\_SEPARATOR()()

> **DOMAIN\_SEPARATOR()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

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

### name()

> **name**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### name()()

> **name()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

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

### symbol()

> **symbol**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### symbol()()

> **symbol()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### totalSupply()

> **totalSupply**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### totalSupply()()

> **totalSupply()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

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
