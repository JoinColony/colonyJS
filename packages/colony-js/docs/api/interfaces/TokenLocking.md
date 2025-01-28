# Interface: TokenLocking

## Extends

- `BaseContract`

## Extended by

- [`TokenLockingClient`](TokenLockingClient.md)

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

#### approveStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### approveStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### deobligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deobligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deposit(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deposit(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### depositFor()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### depositFor(address,uint256,address)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### getApproval()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getApproval(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getColonyNetwork()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColonyNetwork()()

##### Parameters

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

#### getObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getObligation(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalLockCount()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalLockCount(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalObligation(address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getUserLock()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`LockStructOutput`\>

#### getUserLock(address,address)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`LockStructOutput`\>

#### incrementLockCounterTo()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### incrementLockCounterTo(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### lockToken()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### lockToken(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### obligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### obligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### reward()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### reward(address,uint256)()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

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

#### setColonyNetwork()

##### Parameters

###### \_colonyNetwork

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setColonyNetwork(address)()

##### Parameters

###### \_colonyNetwork

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

#### transfer()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### transfer(address,uint256,address,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### transferStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### transferStake(address,uint256,address,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### unlockTokenForUser()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### unlockTokenForUser(address,address,uint256)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

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

#### withdraw(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### withdraw(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

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

#### approveStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### approveStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

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

#### deobligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### deobligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### deposit(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### deposit(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### depositFor()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### depositFor(address,uint256,address)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

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

#### getApproval()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getApproval(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getColonyNetwork()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getColonyNetwork()()

##### Parameters

###### overrides?

`CallOverrides`

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

#### getObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getObligation(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalLockCount()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalLockCount(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTotalObligation(address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getUserLock()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getUserLock(address,address)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### incrementLockCounterTo()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### incrementLockCounterTo(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### lockToken()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### lockToken(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### obligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### obligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

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

#### reward()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### reward(address,uint256)()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

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

#### setColonyNetwork()

##### Parameters

###### \_colonyNetwork

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setColonyNetwork(address)()

##### Parameters

###### \_colonyNetwork

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

#### transfer()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transfer(address,uint256,address,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transferStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### transferStake(address,uint256,address,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### unlockTokenForUser()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### unlockTokenForUser(address,address,uint256)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

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

#### withdraw(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### withdraw(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

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

#### ColonyNetworkSet()

##### Parameters

###### colonyNetwork?

`null`

##### Returns

`ColonyNetworkSetEventFilter`

#### ColonyNetworkSet(address)()

##### Parameters

###### colonyNetwork?

`null`

##### Returns

`ColonyNetworkSetEventFilter`

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

`StakeTransferredEventFilter`

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

`StakeTransferredEventFilter`

#### TokenLocked()

##### Parameters

###### token?

`null` | `string`

###### lockedBy?

`null` | `string`

###### lockCount?

`null`

##### Returns

`TokenLockedEventFilter`

#### TokenLocked(address,address,uint256)()

##### Parameters

###### token?

`null` | `string`

###### lockedBy?

`null` | `string`

###### lockCount?

`null`

##### Returns

`TokenLockedEventFilter`

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

`UserTokenApprovedEventFilter`

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

`UserTokenApprovedEventFilter`

#### UserTokenClaimed()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

`UserTokenClaimedEventFilter`

#### UserTokenClaimed(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

`UserTokenClaimedEventFilter`

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

`UserTokenDeobligatedEventFilter`

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

`UserTokenDeobligatedEventFilter`

#### UserTokenDeposited()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

`UserTokenDepositedEventFilter`

#### UserTokenDeposited(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

`UserTokenDepositedEventFilter`

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

`UserTokenObligatedEventFilter`

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

`UserTokenObligatedEventFilter`

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

`UserTokenTransferredEventFilter`

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

`UserTokenTransferredEventFilter`

#### UserTokenUnlocked()

##### Parameters

###### token?

`null`

###### user?

`null`

###### lockId?

`null`

##### Returns

`UserTokenUnlockedEventFilter`

#### UserTokenUnlocked(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### lockId?

`null`

##### Returns

`UserTokenUnlockedEventFilter`

#### UserTokenWithdrawn()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

`UserTokenWithdrawnEventFilter`

#### UserTokenWithdrawn(address,address,uint256)()

##### Parameters

###### token?

`null`

###### user?

`null`

###### amount?

`null`

##### Returns

`UserTokenWithdrawnEventFilter`

#### Overrides

`BaseContract.filters`

***

### functions

> **functions**: `object`

#### approveStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### approveStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

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

#### deobligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deobligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deposit(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deposit(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### depositFor()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### depositFor(address,uint256,address)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

#### getApproval()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getApproval(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getColonyNetwork()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getColonyNetwork()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

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

#### getObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getObligation(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getTotalLockCount()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getTotalLockCount(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getTotalObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getTotalObligation(address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getUserLock()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`LockStructOutput`\] & `object`\>

#### getUserLock(address,address)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`LockStructOutput`\] & `object`\>

#### incrementLockCounterTo()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### incrementLockCounterTo(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### lockToken()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### lockToken(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### obligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### obligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

#### reward()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`void`\]\>

#### reward(address,uint256)()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`void`\]\>

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

#### setColonyNetwork()

##### Parameters

###### \_colonyNetwork

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setColonyNetwork(address)()

##### Parameters

###### \_colonyNetwork

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

#### transfer()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transfer(address,uint256,address,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transferStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### transferStake(address,uint256,address,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### unlockTokenForUser()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### unlockTokenForUser(address,address,uint256)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

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

#### withdraw(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### withdraw(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### Overrides

`BaseContract.functions`

***

### interface

> **interface**: `TokenLockingInterface`

#### Overrides

`BaseContract.interface`

***

### off

> **off**: `OnEvent`\<[`TokenLocking`](TokenLocking.md)\>

#### Overrides

`BaseContract.off`

***

### on

> **on**: `OnEvent`\<[`TokenLocking`](TokenLocking.md)\>

#### Overrides

`BaseContract.on`

***

### once

> **once**: `OnEvent`\<[`TokenLocking`](TokenLocking.md)\>

#### Overrides

`BaseContract.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### approveStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approveStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

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

#### deobligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deobligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deposit(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deposit(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### depositFor()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### depositFor(address,uint256,address)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

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

#### getApproval()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getApproval(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyNetwork()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyNetwork()()

##### Parameters

###### overrides?

`CallOverrides`

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

#### getObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getObligation(address,address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### \_obligator

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalLockCount()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalLockCount(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalObligation()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTotalObligation(address,address)()

##### Parameters

###### \_user

`string`

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserLock()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserLock(address,address)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### incrementLockCounterTo()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### incrementLockCounterTo(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### lockToken()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### lockToken(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### obligateStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### obligateStake(address,uint256,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### overrides?

`Overrides` & `object`

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

#### reward()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### reward(address,uint256)()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

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

#### setColonyNetwork()

##### Parameters

###### \_colonyNetwork

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setColonyNetwork(address)()

##### Parameters

###### \_colonyNetwork

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

#### transfer()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transfer(address,uint256,address,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_recipient

`string`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transferStake()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### transferStake(address,uint256,address,address)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_token

`string`

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### unlockTokenForUser()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### unlockTokenForUser(address,address,uint256)()

##### Parameters

###### \_token

`string`

###### \_user

`string`

###### \_lockId

`BigNumberish`

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

#### withdraw(address,uint256,bool)()

##### Parameters

###### \_token

`string`

###### \_amount

`BigNumberish`

###### \_force

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### withdraw(address,uint256)()

##### Parameters

###### \_token

`string`

###### \_amount

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

> **removeListener**: `OnEvent`\<[`TokenLocking`](TokenLocking.md)\>

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

### approveStake()

> **approveStake**(`_user`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### approveStake(address,uint256,address)()

> **approveStake(address,uint256,address)**(`_user`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

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

### deobligateStake()

> **deobligateStake**(`_user`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### deobligateStake(address,uint256,address)()

> **deobligateStake(address,uint256,address)**(`_user`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### deployed()

> **deployed**(): `Promise`\<[`TokenLocking`](TokenLocking.md)\>

#### Returns

`Promise`\<[`TokenLocking`](TokenLocking.md)\>

#### Overrides

`BaseContract.deployed`

***

### deposit(address,uint256,bool)()

> **deposit(address,uint256,bool)**(`_token`, `_amount`, `_force`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### \_force

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### deposit(address,uint256)()

> **deposit(address,uint256)**(`_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### depositFor()

> **depositFor**(`_token`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### depositFor(address,uint256,address)()

> **depositFor(address,uint256,address)**(`_token`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

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

### getApproval()

> **getApproval**(`_user`, `_token`, `_obligator`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_token

`string`

##### \_obligator

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getApproval(address,address,address)()

> **getApproval(address,address,address)**(`_user`, `_token`, `_obligator`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_token

`string`

##### \_obligator

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getColonyNetwork()

> **getColonyNetwork**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

***

### getColonyNetwork()()

> **getColonyNetwork()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

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

***

### getObligation()

> **getObligation**(`_user`, `_token`, `_obligator`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_token

`string`

##### \_obligator

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getObligation(address,address,address)()

> **getObligation(address,address,address)**(`_user`, `_token`, `_obligator`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_token

`string`

##### \_obligator

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getTotalLockCount()

> **getTotalLockCount**(`_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getTotalLockCount(address)()

> **getTotalLockCount(address)**(`_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getTotalObligation()

> **getTotalObligation**(`_user`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getTotalObligation(address,address)()

> **getTotalObligation(address,address)**(`_user`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_user

`string`

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

***

### getUserLock()

> **getUserLock**(`_token`, `_user`, `overrides`?): `Promise`\<`LockStructOutput`\>

#### Parameters

##### \_token

`string`

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`LockStructOutput`\>

***

### getUserLock(address,address)()

> **getUserLock(address,address)**(`_token`, `_user`, `overrides`?): `Promise`\<`LockStructOutput`\>

#### Parameters

##### \_token

`string`

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`LockStructOutput`\>

***

### incrementLockCounterTo()

> **incrementLockCounterTo**(`_token`, `_lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_lockId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### incrementLockCounterTo(address,uint256)()

> **incrementLockCounterTo(address,uint256)**(`_token`, `_lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_lockId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

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

### lockToken()

> **lockToken**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### lockToken(address)()

> **lockToken(address)**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### obligateStake()

> **obligateStake**(`_user`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### obligateStake(address,uint256,address)()

> **obligateStake(address,uint256,address)**(`_user`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

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

### reward()

> **reward**(`_recipient`, `_amount`, `overrides`?): `Promise`\<`void`\>

#### Parameters

##### \_recipient

`string`

##### \_amount

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

***

### reward(address,uint256)()

> **reward(address,uint256)**(`_recipient`, `_amount`, `overrides`?): `Promise`\<`void`\>

#### Parameters

##### \_recipient

`string`

##### \_amount

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

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

### setColonyNetwork()

> **setColonyNetwork**(`_colonyNetwork`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colonyNetwork

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### setColonyNetwork(address)()

> **setColonyNetwork(address)**(`_colonyNetwork`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colonyNetwork

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

### transfer()

> **transfer**(`_token`, `_amount`, `_recipient`, `_force`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### \_recipient

`string`

##### \_force

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### transfer(address,uint256,address,bool)()

> **transfer(address,uint256,address,bool)**(`_token`, `_amount`, `_recipient`, `_force`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### \_recipient

`string`

##### \_force

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### transferStake()

> **transferStake**(`_user`, `_amount`, `_token`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### transferStake(address,uint256,address,address)()

> **transferStake(address,uint256,address,address)**(`_user`, `_amount`, `_token`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_token

`string`

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### unlockTokenForUser()

> **unlockTokenForUser**(`_token`, `_user`, `_lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_user

`string`

##### \_lockId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### unlockTokenForUser(address,address,uint256)()

> **unlockTokenForUser(address,address,uint256)**(`_token`, `_user`, `_lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_user

`string`

##### \_lockId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

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

***

### withdraw(address,uint256,bool)()

> **withdraw(address,uint256,bool)**(`_token`, `_amount`, `_force`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### \_force

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

***

### withdraw(address,uint256)()

> **withdraw(address,uint256)**(`_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>
