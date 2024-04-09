# Interface: TokenLockingClient

## Hierarchy

- [`TokenLocking`](TokenLocking.md)

  ↳ **`TokenLockingClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[_deployedPromise](TokenLocking.md#_deployedpromise)

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

[TokenLocking](TokenLocking.md).[_runningEvents](TokenLocking.md#_runningevents)

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[TokenLocking](TokenLocking.md).[_wrappedEmits](TokenLocking.md#_wrappedemits)

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[TokenLocking](TokenLocking.md).[address](TokenLocking.md#address)

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deobligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositFor(address,uint256,address)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproval(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColonyNetwork()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`LockStructOutput`\> |
| `getUserLock(address,address)` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`LockStructOutput`\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `incrementLockCounterTo(address,uint256)` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lockToken(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `obligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `reward(address,uint256)` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setColonyNetwork(address)` | (`_colonyNetwork`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transfer(address,uint256,address,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferStake(address,uint256,address,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockTokenForUser(address,address,uint256)` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `withdraw(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Inherited from

[TokenLocking](TokenLocking.md).[callStatic](TokenLocking.md#callstatic)

___

### clientType

• **clientType**: [`TokenLockingClient`](../enums/ClientTypeTokens.md#tokenlockingclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[TokenLocking](TokenLocking.md).[deployTransaction](TokenLocking.md#deploytransaction)

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `approveStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deobligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `depositFor(address,uint256,address)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproval(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyNetwork()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLock(address,address)` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `incrementLockCounterTo(address,uint256)` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `lockToken(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `obligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `reward(address,uint256)` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setColonyNetwork(address)` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transfer(address,uint256,address,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transferStake(address,uint256,address,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `unlockTokenForUser(address,address,uint256)` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |

#### Inherited from

[TokenLocking](TokenLocking.md).[estimateGas](TokenLocking.md#estimategas)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ColonyNetworkSet` | (`colonyNetwork?`: ``null``) => `ColonyNetworkSetEventFilter` |
| `ColonyNetworkSet(address)` | (`colonyNetwork?`: ``null``) => `ColonyNetworkSetEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `StakeTransferred` | (`token?`: ``null``, `by?`: ``null``, `from?`: ``null``, `to?`: ``null``, `amount?`: ``null``) => `StakeTransferredEventFilter` |
| `StakeTransferred(address,address,address,address,uint256)` | (`token?`: ``null``, `by?`: ``null``, `from?`: ``null``, `to?`: ``null``, `amount?`: ``null``) => `StakeTransferredEventFilter` |
| `TokenLocked` | (`token?`: ``null`` \| `string`, `lockedBy?`: ``null`` \| `string`, `lockCount?`: ``null``) => `TokenLockedEventFilter` |
| `TokenLocked(address,address,uint256)` | (`token?`: ``null`` \| `string`, `lockedBy?`: ``null`` \| `string`, `lockCount?`: ``null``) => `TokenLockedEventFilter` |
| `UserTokenApproved` | (`token?`: ``null``, `user?`: ``null``, `approvedBy?`: ``null``, `amount?`: ``null``) => `UserTokenApprovedEventFilter` |
| `UserTokenApproved(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `approvedBy?`: ``null``, `amount?`: ``null``) => `UserTokenApprovedEventFilter` |
| `UserTokenClaimed` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => `UserTokenClaimedEventFilter` |
| `UserTokenClaimed(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => `UserTokenClaimedEventFilter` |
| `UserTokenDeobligated` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => `UserTokenDeobligatedEventFilter` |
| `UserTokenDeobligated(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => `UserTokenDeobligatedEventFilter` |
| `UserTokenDeposited` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => `UserTokenDepositedEventFilter` |
| `UserTokenDeposited(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => `UserTokenDepositedEventFilter` |
| `UserTokenObligated` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => `UserTokenObligatedEventFilter` |
| `UserTokenObligated(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `obligatedBy?`: ``null``, `amount?`: ``null``) => `UserTokenObligatedEventFilter` |
| `UserTokenTransferred` | (`token?`: ``null``, `user?`: ``null``, `recipient?`: ``null``, `amount?`: ``null``) => `UserTokenTransferredEventFilter` |
| `UserTokenTransferred(address,address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `recipient?`: ``null``, `amount?`: ``null``) => `UserTokenTransferredEventFilter` |
| `UserTokenUnlocked` | (`token?`: ``null``, `user?`: ``null``, `lockId?`: ``null``) => `UserTokenUnlockedEventFilter` |
| `UserTokenUnlocked(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `lockId?`: ``null``) => `UserTokenUnlockedEventFilter` |
| `UserTokenWithdrawn` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => `UserTokenWithdrawnEventFilter` |
| `UserTokenWithdrawn(address,address,uint256)` | (`token?`: ``null``, `user?`: ``null``, `amount?`: ``null``) => `UserTokenWithdrawnEventFilter` |

#### Inherited from

[TokenLocking](TokenLocking.md).[filters](TokenLocking.md#filters)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `approveStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deobligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `depositFor(address,uint256,address)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getApproval(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColonyNetwork()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getObligation(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalLockCount(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalObligation(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`LockStructOutput`] & { `lock`: `LockStructOutput`  }\> |
| `getUserLock(address,address)` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`LockStructOutput`] & { `lock`: `LockStructOutput`  }\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `incrementLockCounterTo(address,uint256)` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `lockToken(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `obligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `reward(address,uint256)` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setColonyNetwork(address)` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,uint256,address,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transferStake(address,uint256,address,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokenForUser(address,address,uint256)` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `withdraw(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |

#### Inherited from

[TokenLocking](TokenLocking.md).[functions](TokenLocking.md#functions)

___

### interface

• **interface**: `TokenLockingInterface`

#### Inherited from

[TokenLocking](TokenLocking.md).[interface](TokenLocking.md#interface)

___

### off

• **off**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

[TokenLocking](TokenLocking.md).[off](TokenLocking.md#off)

___

### on

• **on**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

[TokenLocking](TokenLocking.md).[on](TokenLocking.md#on)

___

### once

• **once**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

[TokenLocking](TokenLocking.md).[once](TokenLocking.md#once)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `approveStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deobligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `depositFor(address,uint256,address)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproval(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyNetwork()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getObligation(address,address,address)` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalLockCount(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalObligation(address,address)` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserLock(address,address)` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `incrementLockCounterTo(address,uint256)` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `lockToken(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `obligateStake(address,uint256,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `reward(address,uint256)` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setColonyNetwork(address)` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,uint256,address,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transferStake(address,uint256,address,address)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokenForUser(address,address,uint256)` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

[TokenLocking](TokenLocking.md).[populateTransaction](TokenLocking.md#populatetransaction)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

[TokenLocking](TokenLocking.md).[provider](TokenLocking.md#provider)

___

### removeListener

• **removeListener**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

[TokenLocking](TokenLocking.md).[removeListener](TokenLocking.md#removelistener)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[resolvedAddress](TokenLocking.md#resolvedaddress)

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

[TokenLocking](TokenLocking.md).[signer](TokenLocking.md#signer)

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

[TokenLocking](TokenLocking.md).[_checkRunningEvents](TokenLocking.md#_checkrunningevents)

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[_deployed](TokenLocking.md#_deployed)

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

[TokenLocking](TokenLocking.md).[_wrapEvent](TokenLocking.md#_wrapevent)

___

### approveStake

▸ **approveStake**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[approveStake](TokenLocking.md#approvestake)

___

### approveStake(address,uint256,address)

▸ **approveStake(address,uint256,address)**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[approveStake(address,uint256,address)](TokenLocking.md#approvestake(address,uint256,address))

___

### attach

▸ **attach**(`addressOrName`): [`TokenLockingClient`](TokenLockingClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`TokenLockingClient`](TokenLockingClient.md)

#### Inherited from

[TokenLocking](TokenLocking.md).[attach](TokenLocking.md#attach)

___

### authority

▸ **authority**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[authority](TokenLocking.md#authority)

___

### authority()

▸ **authority()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[authority()](TokenLocking.md#authority())

___

### connect

▸ **connect**(`signerOrProvider`): [`TokenLockingClient`](TokenLockingClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`TokenLockingClient`](TokenLockingClient.md)

#### Inherited from

[TokenLocking](TokenLocking.md).[connect](TokenLocking.md#connect)

___

### deobligateStake

▸ **deobligateStake**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[deobligateStake](TokenLocking.md#deobligatestake)

___

### deobligateStake(address,uint256,address)

▸ **deobligateStake(address,uint256,address)**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[deobligateStake(address,uint256,address)](TokenLocking.md#deobligatestake(address,uint256,address))

___

### deployed

▸ **deployed**(): `Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Returns

`Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

[TokenLocking](TokenLocking.md).[deployed](TokenLocking.md#deployed)

___

### deposit(address,uint256)

▸ **deposit(address,uint256)**(`_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[deposit(address,uint256)](TokenLocking.md#deposit(address,uint256))

___

### deposit(address,uint256,bool)

▸ **deposit(address,uint256,bool)**(`_token`, `_amount`, `_force`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `_force` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[deposit(address,uint256,bool)](TokenLocking.md#deposit(address,uint256,bool))

___

### depositFor

▸ **depositFor**(`_token`, `_amount`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `_recipient` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[depositFor](TokenLocking.md#depositfor)

___

### depositFor(address,uint256,address)

▸ **depositFor(address,uint256,address)**(`_token`, `_amount`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `_recipient` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[depositFor(address,uint256,address)](TokenLocking.md#depositfor(address,uint256,address))

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[TokenLocking](TokenLocking.md).[emit](TokenLocking.md#emit)

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[executeMetaTransaction](TokenLocking.md#executemetatransaction)

___

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

▸ **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)](TokenLocking.md#executemetatransaction(address,bytes,bytes32,bytes32,uint8))

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[fallback](TokenLocking.md#fallback)

___

### getApproval

▸ **getApproval**(`_user`, `_token`, `_obligator`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `_obligator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getApproval](TokenLocking.md#getapproval)

___

### getApproval(address,address,address)

▸ **getApproval(address,address,address)**(`_user`, `_token`, `_obligator`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `_obligator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getApproval(address,address,address)](TokenLocking.md#getapproval(address,address,address))

___

### getColonyNetwork

▸ **getColonyNetwork**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getColonyNetwork](TokenLocking.md#getcolonynetwork)

___

### getColonyNetwork()

▸ **getColonyNetwork()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getColonyNetwork()](TokenLocking.md#getcolonynetwork())

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getMetatransactionNonce](TokenLocking.md#getmetatransactionnonce)

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getMetatransactionNonce(address)](TokenLocking.md#getmetatransactionnonce(address))

___

### getObligation

▸ **getObligation**(`_user`, `_token`, `_obligator`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `_obligator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getObligation](TokenLocking.md#getobligation)

___

### getObligation(address,address,address)

▸ **getObligation(address,address,address)**(`_user`, `_token`, `_obligator`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `_obligator` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getObligation(address,address,address)](TokenLocking.md#getobligation(address,address,address))

___

### getTotalLockCount

▸ **getTotalLockCount**(`_token`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getTotalLockCount](TokenLocking.md#gettotallockcount)

___

### getTotalLockCount(address)

▸ **getTotalLockCount(address)**(`_token`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getTotalLockCount(address)](TokenLocking.md#gettotallockcount(address))

___

### getTotalObligation

▸ **getTotalObligation**(`_user`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getTotalObligation](TokenLocking.md#gettotalobligation)

___

### getTotalObligation(address,address)

▸ **getTotalObligation(address,address)**(`_user`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_token` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getTotalObligation(address,address)](TokenLocking.md#gettotalobligation(address,address))

___

### getUserLock

▸ **getUserLock**(`_token`, `_user`, `overrides?`): `Promise`<`LockStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`LockStructOutput`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getUserLock](TokenLocking.md#getuserlock)

___

### getUserLock(address,address)

▸ **getUserLock(address,address)**(`_token`, `_user`, `overrides?`): `Promise`<`LockStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`LockStructOutput`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getUserLock(address,address)](TokenLocking.md#getuserlock(address,address))

___

### incrementLockCounterTo

▸ **incrementLockCounterTo**(`_token`, `_lockId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_lockId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[incrementLockCounterTo](TokenLocking.md#incrementlockcounterto)

___

### incrementLockCounterTo(address,uint256)

▸ **incrementLockCounterTo(address,uint256)**(`_token`, `_lockId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_lockId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[incrementLockCounterTo(address,uint256)](TokenLocking.md#incrementlockcounterto(address,uint256))

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

[TokenLocking](TokenLocking.md).[listenerCount](TokenLocking.md#listenercount)

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Inherited from

[TokenLocking](TokenLocking.md).[listeners](TokenLocking.md#listeners)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

[TokenLocking](TokenLocking.md).[listeners](TokenLocking.md#listeners)

___

### lockToken

▸ **lockToken**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[lockToken](TokenLocking.md#locktoken)

___

### lockToken(address)

▸ **lockToken(address)**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[lockToken(address)](TokenLocking.md#locktoken(address))

___

### obligateStake

▸ **obligateStake**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[obligateStake](TokenLocking.md#obligatestake)

___

### obligateStake(address,uint256,address)

▸ **obligateStake(address,uint256,address)**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[obligateStake(address,uint256,address)](TokenLocking.md#obligatestake(address,uint256,address))

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[owner](TokenLocking.md#owner)

___

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[owner()](TokenLocking.md#owner())

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Inherited from

[TokenLocking](TokenLocking.md).[queryFilter](TokenLocking.md#queryfilter)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`TokenLockingClient`](TokenLockingClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`TokenLockingClient`](TokenLockingClient.md)

#### Inherited from

[TokenLocking](TokenLocking.md).[removeAllListeners](TokenLocking.md#removealllisteners)

▸ **removeAllListeners**(`eventName?`): [`TokenLockingClient`](TokenLockingClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TokenLockingClient`](TokenLockingClient.md)

#### Inherited from

[TokenLocking](TokenLocking.md).[removeAllListeners](TokenLocking.md#removealllisteners)

___

### reward

▸ **reward**(`_recipient`, `_amount`, `overrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_recipient` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[reward](TokenLocking.md#reward)

___

### reward(address,uint256)

▸ **reward(address,uint256)**(`_recipient`, `_amount`, `overrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_recipient` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[reward(address,uint256)](TokenLocking.md#reward(address,uint256))

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[setAuthority](TokenLocking.md#setauthority)

___

### setAuthority(address)

▸ **setAuthority(address)**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[setAuthority(address)](TokenLocking.md#setauthority(address))

___

### setColonyNetwork

▸ **setColonyNetwork**(`_colonyNetwork`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colonyNetwork` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[setColonyNetwork](TokenLocking.md#setcolonynetwork)

___

### setColonyNetwork(address)

▸ **setColonyNetwork(address)**(`_colonyNetwork`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colonyNetwork` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[setColonyNetwork(address)](TokenLocking.md#setcolonynetwork(address))

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[setOwner](TokenLocking.md#setowner)

___

### setOwner(address)

▸ **setOwner(address)**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[setOwner(address)](TokenLocking.md#setowner(address))

___

### transfer

▸ **transfer**(`_token`, `_amount`, `_recipient`, `_force`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `_recipient` | `string` |
| `_force` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[transfer](TokenLocking.md#transfer)

___

### transfer(address,uint256,address,bool)

▸ **transfer(address,uint256,address,bool)**(`_token`, `_amount`, `_recipient`, `_force`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `_recipient` | `string` |
| `_force` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[transfer(address,uint256,address,bool)](TokenLocking.md#transfer(address,uint256,address,bool))

___

### transferStake

▸ **transferStake**(`_user`, `_amount`, `_token`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `_recipient` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[transferStake](TokenLocking.md#transferstake)

___

### transferStake(address,uint256,address,address)

▸ **transferStake(address,uint256,address,address)**(`_user`, `_amount`, `_token`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_amount` | `BigNumberish` |
| `_token` | `string` |
| `_recipient` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[transferStake(address,uint256,address,address)](TokenLocking.md#transferstake(address,uint256,address,address))

___

### unlockTokenForUser

▸ **unlockTokenForUser**(`_token`, `_user`, `_lockId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_user` | `string` |
| `_lockId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[unlockTokenForUser](TokenLocking.md#unlocktokenforuser)

___

### unlockTokenForUser(address,address,uint256)

▸ **unlockTokenForUser(address,address,uint256)**(`_token`, `_user`, `_lockId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_user` | `string` |
| `_lockId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[unlockTokenForUser(address,address,uint256)](TokenLocking.md#unlocktokenforuser(address,address,uint256))

___

### verify

▸ **verify**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_nonce` | `BigNumberish` |
| `_chainId` | `BigNumberish` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[verify](TokenLocking.md#verify)

___

### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

▸ **verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_nonce` | `BigNumberish` |
| `_chainId` | `BigNumberish` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)](TokenLocking.md#verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8))

___

### withdraw(address,uint256)

▸ **withdraw(address,uint256)**(`_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[withdraw(address,uint256)](TokenLocking.md#withdraw(address,uint256))

___

### withdraw(address,uint256,bool)

▸ **withdraw(address,uint256,bool)**(`_token`, `_amount`, `_force`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `_force` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[withdraw(address,uint256,bool)](TokenLocking.md#withdraw(address,uint256,bool))
