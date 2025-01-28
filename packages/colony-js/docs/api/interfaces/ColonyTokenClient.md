# Interface: ColonyTokenClient

A ColonyToken has special abilities that go beyond the capabilities of an ERC20 token

## Extends

- [`ColonyToken`](ColonyToken.md)

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`_deployedPromise`](ColonyToken.md#_deployedpromise)

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`_runningEvents`](ColonyToken.md#_runningevents)

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`_wrappedEmits`](ColonyToken.md#_wrappedemits)

***

### address

> `readonly` **address**: `string`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`address`](ColonyToken.md#address)

***

### callStatic

> **callStatic**: `object`

#### allowance()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### allowance(address,address)()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### approve()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### approve(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### authority()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### authority()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### balanceOf()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### balanceOf(address)()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### burn(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### burn(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### executeMetaTransaction()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMetatransactionNonce()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### locked()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### locked()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### mint(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### mint(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### nonces(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### owner()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### owner()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

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

#### PERMIT\_TYPEHASH()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### PERMIT\_TYPEHASH()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

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

#### setAuthority()

##### Parameters

###### authority\_

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setAuthority(address)()

##### Parameters

###### authority\_

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setOwner()

##### Parameters

###### owner\_

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setOwner(address)()

##### Parameters

###### owner\_

`string`

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

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### transfer(address,uint256)()

##### Parameters

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### transferFrom()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### unlock()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### unlock()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### verify()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`callStatic`](ColonyToken.md#callstatic)

***

### clientType

> **clientType**: [`TokenClient`](../enumerations/ClientTypeTokens.md#tokenclient)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`deployTransaction`](ColonyToken.md#deploytransaction)

***

### estimateGas

> **estimateGas**: `object`

#### allowance()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### allowance(address,address)()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### approve()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### approve(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### authority()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### authority()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### balanceOf()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### balanceOf(address)()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### burn(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### burn(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

#### executeMetaTransaction()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### locked()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### locked()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### mint(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### mint(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### nonces(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### owner()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### owner()()

##### Parameters

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

#### PERMIT\_TYPEHASH()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### PERMIT\_TYPEHASH()()

##### Parameters

###### overrides?

`CallOverrides`

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

#### setAuthority()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setAuthority(address)()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setOwner()

##### Parameters

###### owner\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setOwner(address)()

##### Parameters

###### owner\_

`string`

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

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transfer(address,uint256)()

##### Parameters

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transferFrom()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### unlock()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### unlock()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### verify()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`estimateGas`](ColonyToken.md#estimategas)

***

### filters

> **filters**: `object`

#### Approval()

##### Parameters

###### src?

`null` | `string`

###### guy?

`null` | `string`

###### wad?

`null`

##### Returns

`ApprovalEventFilter`

#### Approval(address,address,uint256)()

##### Parameters

###### src?

`null` | `string`

###### guy?

`null` | `string`

###### wad?

`null`

##### Returns

`ApprovalEventFilter`

#### Burn()

##### Parameters

###### guy?

`null` | `string`

###### wad?

`null`

##### Returns

`BurnEventFilter`

#### Burn(address,uint256)()

##### Parameters

###### guy?

`null` | `string`

###### wad?

`null`

##### Returns

`BurnEventFilter`

#### LogSetAuthority()

##### Parameters

###### authority?

`null` | `string`

##### Returns

`LogSetAuthorityEventFilter`

#### LogSetAuthority(address)()

##### Parameters

###### authority?

`null` | `string`

##### Returns

`LogSetAuthorityEventFilter`

#### LogSetOwner()

##### Parameters

###### owner?

`null` | `string`

##### Returns

`LogSetOwnerEventFilter`

#### LogSetOwner(address)()

##### Parameters

###### owner?

`null` | `string`

##### Returns

`LogSetOwnerEventFilter`

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

#### Mint()

##### Parameters

###### guy?

`null` | `string`

###### wad?

`null`

##### Returns

`MintEventFilter`

#### Mint(address,uint256)()

##### Parameters

###### guy?

`null` | `string`

###### wad?

`null`

##### Returns

`MintEventFilter`

#### Transfer()

##### Parameters

###### src?

`null` | `string`

###### dst?

`null` | `string`

###### wad?

`null`

##### Returns

`TransferEventFilter`

#### Transfer(address,address,uint256)()

##### Parameters

###### src?

`null` | `string`

###### dst?

`null` | `string`

###### wad?

`null`

##### Returns

`TransferEventFilter`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`filters`](ColonyToken.md#filters)

***

### functions

> **functions**: `object`

#### allowance()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### allowance(address,address)()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### approve()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### approve(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### authority()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### authority()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### balanceOf()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### balanceOf(address)()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### burn(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### burn(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

#### executeMetaTransaction()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### getMetatransactionNonce()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### locked()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### locked()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### mint(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### mint(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### nonces(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### owner()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### owner()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

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

#### PERMIT\_TYPEHASH()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### PERMIT\_TYPEHASH()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

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

#### setAuthority()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setAuthority(address)()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setOwner()

##### Parameters

###### owner\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setOwner(address)()

##### Parameters

###### owner\_

`string`

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

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transfer(address,uint256)()

##### Parameters

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transferFrom()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### unlock()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### unlock()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### verify()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`functions`](ColonyToken.md#functions)

***

### interface

> **interface**: `MetaTxTokenInterface`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`interface`](ColonyToken.md#interface)

***

### off

> **off**: `OnEvent`\<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`off`](ColonyToken.md#off)

***

### on

> **on**: `OnEvent`\<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`on`](ColonyToken.md#on)

***

### once

> **once**: `OnEvent`\<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`once`](ColonyToken.md#once)

***

### populateTransaction

> **populateTransaction**: `object`

#### allowance()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### allowance(address,address)()

##### Parameters

###### src

`string`

###### guy

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approve()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approve(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### authority()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### authority()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### balanceOf()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### balanceOf(address)()

##### Parameters

###### src

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### burn(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### burn(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

#### executeMetaTransaction()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### locked()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### locked()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### mint(address,uint256)()

##### Parameters

###### guy

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### mint(uint256)()

##### Parameters

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### nonces(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### owner()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### owner()()

##### Parameters

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

#### PERMIT\_TYPEHASH()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### PERMIT\_TYPEHASH()()

##### Parameters

###### overrides?

`CallOverrides`

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

#### setAuthority()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setAuthority(address)()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setOwner()

##### Parameters

###### owner\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setOwner(address)()

##### Parameters

###### owner\_

`string`

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

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transfer(address,uint256)()

##### Parameters

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transferFrom()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transferFrom(address,address,uint256)()

##### Parameters

###### src

`string`

###### dst

`string`

###### wad

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### unlock()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### unlock()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### verify()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### \_user

`string`

###### \_nonce

`BigNumberish`

###### \_chainId

`BigNumberish`

###### \_payload

`BytesLike`

###### \_sigR

`BytesLike`

###### \_sigS

`BytesLike`

###### \_sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`populateTransaction`](ColonyToken.md#populatetransaction)

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`provider`](ColonyToken.md#provider)

***

### removeListener

> **removeListener**: `OnEvent`\<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`removeListener`](ColonyToken.md#removelistener)

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`resolvedAddress`](ColonyToken.md#resolvedaddress)

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`signer`](ColonyToken.md#signer)

***

### tokenClientType

> **tokenClientType**: [`Colony`](../enumerations/TokenClientType.md#colony)

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`_checkRunningEvents`](ColonyToken.md#_checkrunningevents)

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`_deployed`](ColonyToken.md#_deployed)

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

[`ColonyToken`](ColonyToken.md).[`_wrapEvent`](ColonyToken.md#_wrapevent)

***

### allowance()

> **allowance**(`src`, `guy`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### src

`string`

##### guy

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`allowance`](ColonyToken.md#allowance-24)

***

### allowance(address,address)()

> **allowance(address,address)**(`src`, `guy`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### src

`string`

##### guy

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`allowance(address,address)`](ColonyToken.md#allowance(address,address)-24)

***

### approve()

> **approve**(`guy`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### guy

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`approve`](ColonyToken.md#approve-24)

***

### approve(address,uint256)()

> **approve(address,uint256)**(`guy`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### guy

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`approve(address,uint256)`](ColonyToken.md#approve(address,uint256)-24)

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`attach`](ColonyToken.md#attach)

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`authority`](ColonyToken.md#authority-30)

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`authority()`](ColonyToken.md#authority()-24)

***

### balanceOf()

> **balanceOf**(`src`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### src

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`balanceOf`](ColonyToken.md#balanceof-24)

***

### balanceOf(address)()

> **balanceOf(address)**(`src`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### src

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`balanceOf(address)`](ColonyToken.md#balanceof(address)-24)

***

### burn(address,uint256)()

> **burn(address,uint256)**(`guy`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### guy

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`burn(address,uint256)`](ColonyToken.md#burn(address,uint256)-30)

***

### burn(uint256)()

> **burn(uint256)**(`wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`burn(uint256)`](ColonyToken.md#burn(uint256)-24)

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`connect`](ColonyToken.md#connect)

***

### decimals()

> **decimals**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`decimals`](ColonyToken.md#decimals-24)

***

### decimals()()

> **decimals()**(`overrides`?): `Promise`\<`number`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`decimals()`](ColonyToken.md#decimals()-24)

***

### deployed()

> **deployed**(): `Promise`\<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Returns

`Promise`\<[`ColonyTokenClient`](ColonyTokenClient.md)\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`deployed`](ColonyToken.md#deployed)

***

### DOMAIN\_SEPARATOR()

> **DOMAIN\_SEPARATOR**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`DOMAIN_SEPARATOR`](ColonyToken.md#domain_separator-24)

***

### DOMAIN\_SEPARATOR()()

> **DOMAIN\_SEPARATOR()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`DOMAIN_SEPARATOR()`](ColonyToken.md#domain_separator()-24)

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

[`ColonyToken`](ColonyToken.md).[`emit`](ColonyToken.md#emit)

***

### executeMetaTransaction()

> **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_payload

`BytesLike`

##### \_sigR

`BytesLike`

##### \_sigS

`BytesLike`

##### \_sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`executeMetaTransaction`](ColonyToken.md#executemetatransaction-24)

***

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

> **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_payload

`BytesLike`

##### \_sigR

`BytesLike`

##### \_sigS

`BytesLike`

##### \_sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`](ColonyToken.md#executemetatransaction(address,bytes,bytes32,bytes32,uint8)-24)

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`fallback`](ColonyToken.md#fallback)

***

### getMetatransactionNonce()

> **getMetatransactionNonce**(`_user`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`getMetatransactionNonce`](ColonyToken.md#getmetatransactionnonce-24)

***

### getMetatransactionNonce(address)()

> **getMetatransactionNonce(address)**(`_user`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`getMetatransactionNonce(address)`](ColonyToken.md#getmetatransactionnonce(address)-24)

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`listenerCount`](ColonyToken.md#listenercount)

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

[`ColonyToken`](ColonyToken.md).[`listeners`](ColonyToken.md#listeners)

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

[`ColonyToken`](ColonyToken.md).[`listeners`](ColonyToken.md#listeners)

***

### locked()

> **locked**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`locked`](ColonyToken.md#locked-24)

***

### locked()()

> **locked()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`locked()`](ColonyToken.md#locked()-24)

***

### mint(address,uint256)()

> **mint(address,uint256)**(`guy`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### guy

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`mint(address,uint256)`](ColonyToken.md#mint(address,uint256)-30)

***

### mint(uint256)()

> **mint(uint256)**(`wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`mint(uint256)`](ColonyToken.md#mint(uint256)-24)

***

### name()

> **name**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`name`](ColonyToken.md#name-24)

***

### name()()

> **name()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`name()`](ColonyToken.md#name()-24)

***

### nonces()

> **nonces**(`_user`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`nonces`](ColonyToken.md#nonces-24)

***

### nonces(address)()

> **nonces(address)**(`_user`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`nonces(address)`](ColonyToken.md#nonces(address)-24)

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`owner`](ColonyToken.md#owner-54)

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`owner()`](ColonyToken.md#owner()-24)

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

[`ColonyToken`](ColonyToken.md).[`permit`](ColonyToken.md#permit-24)

***

### PERMIT\_TYPEHASH()

> **PERMIT\_TYPEHASH**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`PERMIT_TYPEHASH`](ColonyToken.md#permit_typehash-24)

***

### PERMIT\_TYPEHASH()()

> **PERMIT\_TYPEHASH()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`PERMIT_TYPEHASH()`](ColonyToken.md#permit_typehash()-24)

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

[`ColonyToken`](ColonyToken.md).[`permit(address,address,uint256,uint256,uint8,bytes32,bytes32)`](ColonyToken.md#permit(address,address,uint256,uint256,uint8,bytes32,bytes32)-24)

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

[`ColonyToken`](ColonyToken.md).[`queryFilter`](ColonyToken.md#queryfilter)

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

[`ColonyToken`](ColonyToken.md).[`removeAllListeners`](ColonyToken.md#removealllisteners)

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

[`ColonyToken`](ColonyToken.md).[`removeAllListeners`](ColonyToken.md#removealllisteners)

***

### setAuthority()

> **setAuthority**(`authority_`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### authority\_

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`setAuthority`](ColonyToken.md#setauthority-24)

***

### setAuthority(address)()

> **setAuthority(address)**(`authority_`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### authority\_

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`setAuthority(address)`](ColonyToken.md#setauthority(address)-24)

***

### setOwner()

> **setOwner**(`owner_`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### owner\_

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`setOwner`](ColonyToken.md#setowner-24)

***

### setOwner(address)()

> **setOwner(address)**(`owner_`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### owner\_

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`setOwner(address)`](ColonyToken.md#setowner(address)-24)

***

### symbol()

> **symbol**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`symbol`](ColonyToken.md#symbol-24)

***

### symbol()()

> **symbol()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`symbol()`](ColonyToken.md#symbol()-24)

***

### totalSupply()

> **totalSupply**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`totalSupply`](ColonyToken.md#totalsupply-24)

***

### totalSupply()()

> **totalSupply()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`totalSupply()`](ColonyToken.md#totalsupply()-24)

***

### transfer()

> **transfer**(`dst`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### dst

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`transfer`](ColonyToken.md#transfer-30)

***

### transfer(address,uint256)()

> **transfer(address,uint256)**(`dst`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### dst

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`transfer(address,uint256)`](ColonyToken.md#transfer(address,uint256)-24)

***

### transferFrom()

> **transferFrom**(`src`, `dst`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### src

`string`

##### dst

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`transferFrom`](ColonyToken.md#transferfrom-24)

***

### transferFrom(address,address,uint256)()

> **transferFrom(address,address,uint256)**(`src`, `dst`, `wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### src

`string`

##### dst

`string`

##### wad

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`transferFrom(address,address,uint256)`](ColonyToken.md#transferfrom(address,address,uint256)-24)

***

### unlock()

> **unlock**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`unlock`](ColonyToken.md#unlock-24)

***

### unlock()()

> **unlock()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`unlock()`](ColonyToken.md#unlock()-24)

***

### verify()

> **verify**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_nonce

`BigNumberish`

##### \_chainId

`BigNumberish`

##### \_payload

`BytesLike`

##### \_sigR

`BytesLike`

##### \_sigS

`BytesLike`

##### \_sigV

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`verify`](ColonyToken.md#verify-24)

***

### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)()

> **verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_user

`string`

##### \_nonce

`BigNumberish`

##### \_chainId

`BigNumberish`

##### \_payload

`BytesLike`

##### \_sigR

`BytesLike`

##### \_sigS

`BytesLike`

##### \_sigV

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`ColonyToken`](ColonyToken.md).[`verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`](ColonyToken.md#verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)-24)
