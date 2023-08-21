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
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`LockStructOutput`\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `withdraw(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Inherited from

[TokenLocking](TokenLocking.md).[callStatic](TokenLocking.md#callstatic)

___

### clientType

• **clientType**: [`TokenLockingClient`](../enums/ClientType.md#tokenlockingclient)

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
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
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
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`LockStructOutput`] & { `lock`: `LockStructOutput`  }\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
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
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deobligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,uint256)` | (`_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,uint256,bool)` | (`_token`: `string`, `_amount`: `BigNumberish`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `depositFor` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getApproval` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getObligation` | (`_user`: `string`, `_token`: `string`, `_obligator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalLockCount` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalObligation` | (`_user`: `string`, `_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserLock` | (`_token`: `string`, `_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `incrementLockCounterTo` | (`_token`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `lockToken` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `obligateStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`_token`: `string`, `_amount`: `BigNumberish`, `_recipient`: `string`, `_force`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transferStake` | (`_user`: `string`, `_amount`: `BigNumberish`, `_token`: `string`, `_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokenForUser` | (`_token`: `string`, `_user`: `string`, `_lockId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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

### connect

▸ **connect**(`signerOrProvider`): [`TokenLockingClient`](TokenLockingClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

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

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

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

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | Address of user trying to do meta transaction |
| `_payload` | `BytesLike` | Function call to make via meta transaction |
| `_sigR` | `BytesLike` | R part of the signature |
| `_sigS` | `BytesLike` | S part of the signature |
| `_sigV` | `BigNumberish` | V part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[executeMetaTransaction](TokenLocking.md#executemetatransaction)

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

### getChainId

▸ **getChainId**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[TokenLocking](TokenLocking.md).[getChainId](TokenLocking.md#getchainid)

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
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

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

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

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
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

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

### verify

▸ **verify**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
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
