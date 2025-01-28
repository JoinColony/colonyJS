# Interface: Token

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

#### Overrides

`BaseContract.estimateGas`

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

#### Overrides

`BaseContract.filters`

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

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: `TokenInterface`

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`Token`](Token.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`Token`](Token.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`Token`](Token.md)\>

#### Overrides

`BaseContract.once`

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

#### Overrides

`BaseContract.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`Token`](Token.md)\>

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

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

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

> **deployed**(): `Promise`\<[`Token`](Token.md)\>

#### Returns

`Promise`\<[`Token`](Token.md)\>

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

### locked()

> **locked**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

***

### locked()()

> **locked()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

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

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

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

### setAuthority()

> **setAuthority**(`authority_`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### authority\_

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

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

***

### unlock()

> **unlock**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### unlock()()

> **unlock()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>
