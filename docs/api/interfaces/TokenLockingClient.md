# Interface: TokenLockingClient

## Hierarchy

- `TokenLocking`

  ↳ **`TokenLockingClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

TokenLocking.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

TokenLocking.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

TokenLocking.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

TokenLocking.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deobligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositFor` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLock` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`LockStructOutput`\> |
| `incrementLockCounterTo` | (`_token`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `lockToken` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `obligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `reward` | (`_recipient`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transfer` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unlockTokenForUser` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `withdraw(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Inherited from

TokenLocking.callStatic

___

### clientType

• **clientType**: [`TokenLockingClient`](../enums/ClientType.md#tokenlockingclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

TokenLocking.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deobligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositFor` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalLockCount` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTotalObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLock` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `incrementLockCounterTo` | (`_token`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `lockToken` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `obligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `reward` | (`_recipient`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transfer` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unlockTokenForUser` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdraw(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Inherited from

TokenLocking.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ColonyNetworkSet` | (`colonyNetwork?`: ``null``) => `ColonyNetworkSetEventFilter` |
| `ColonyNetworkSet(address)` | (`colonyNetwork?`: ``null``) => `ColonyNetworkSetEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `StakeTransferred` | (`token?`: ``null``, `by?`: ``null``, `from?`: ``null``, `to?`: ``null``, `amount?`: ``null``) => `StakeTransferredEventFilter` |
| `StakeTransferred(address,address,address,address,uint256)` | (`token?`: ``null``, `by?`: ``null``, `from?`: ``null``, `to?`: ``null``, `amount?`: ``null``) => `StakeTransferredEventFilter` |
| `TokenLocked` | (`token?`: ``null`` \| `PromiseOrValue`<`string`\>, `lockedBy?`: ``null`` \| `PromiseOrValue`<`string`\>, `lockCount?`: ``null``) => `TokenLockedEventFilter` |
| `TokenLocked(address,address,uint256)` | (`token?`: ``null`` \| `PromiseOrValue`<`string`\>, `lockedBy?`: ``null`` \| `PromiseOrValue`<`string`\>, `lockCount?`: ``null``) => `TokenLockedEventFilter` |
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

TokenLocking.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deobligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositFor` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalLockCount` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTotalObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getUserLock` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`LockStructOutput`] & { `lock`: `LockStructOutput`  }\> |
| `incrementLockCounterTo` | (`_token`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `lockToken` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `obligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `reward` | (`_recipient`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transfer` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unlockTokenForUser` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `withdraw(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Inherited from

TokenLocking.functions

___

### interface

• **interface**: `TokenLockingInterface`

#### Inherited from

TokenLocking.interface

___

### off

• **off**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

TokenLocking.off

___

### on

• **on**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

TokenLocking.on

___

### once

• **once**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

TokenLocking.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deobligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositFor` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyNetwork` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `_obligator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalLockCount` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTotalObligation` | (`_user`: `PromiseOrValue`<`string`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserLock` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `incrementLockCounterTo` | (`_token`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `lockToken` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `obligateStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `reward` | (`_recipient`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setColonyNetwork` | (`_colonyNetwork`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferStake` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unlockTokenForUser` | (`_token`: `PromiseOrValue`<`string`\>, `_user`: `PromiseOrValue`<`string`\>, `_lockId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(address,uint256)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw(address,uint256,bool)` | (`_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_force`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

TokenLocking.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

TokenLocking.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

TokenLocking.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

TokenLocking.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

TokenLocking.signer

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

TokenLocking.\_checkRunningEvents

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

TokenLocking.\_deployed

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

TokenLocking.\_wrapEvent

___

### approveStake

▸ **approveStake**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_token` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.approveStake

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

TokenLocking.attach

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

TokenLocking.authority

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

TokenLocking.connect

___

### deobligateStake

▸ **deobligateStake**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_token` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.deobligateStake

___

### deployed

▸ **deployed**(): `Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Returns

`Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

#### Inherited from

TokenLocking.deployed

___

### deposit(address,uint256)

▸ **deposit(address,uint256)**(`_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.deposit(address,uint256)

___

### deposit(address,uint256,bool)

▸ **deposit(address,uint256,bool)**(`_token`, `_amount`, `_force`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_force` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.deposit(address,uint256,bool)

___

### depositFor

▸ **depositFor**(`_token`, `_amount`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_recipient` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.depositFor

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

TokenLocking.emit

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | Address of user trying to do meta transaction |
| `_payload` | `PromiseOrValue`<`BytesLike`\> | Function call to make via meta transaction |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> | R part of the signature |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> | S part of the signature |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> | V part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.executeMetaTransaction

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

TokenLocking.fallback

___

### getApproval

▸ **getApproval**(`_user`, `_token`, `_obligator`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `_token` | `PromiseOrValue`<`string`\> |
| `_obligator` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

TokenLocking.getApproval

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

TokenLocking.getChainId

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

TokenLocking.getColonyNetwork

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

TokenLocking.getMetatransactionNonce

___

### getObligation

▸ **getObligation**(`_user`, `_token`, `_obligator`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `_token` | `PromiseOrValue`<`string`\> |
| `_obligator` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

TokenLocking.getObligation

___

### getTotalLockCount

▸ **getTotalLockCount**(`_token`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

TokenLocking.getTotalLockCount

___

### getTotalObligation

▸ **getTotalObligation**(`_user`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `_token` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

TokenLocking.getTotalObligation

___

### getUserLock

▸ **getUserLock**(`_token`, `_user`, `overrides?`): `Promise`<`LockStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_user` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`LockStructOutput`\>

#### Inherited from

TokenLocking.getUserLock

___

### incrementLockCounterTo

▸ **incrementLockCounterTo**(`_token`, `_lockId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_lockId` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.incrementLockCounterTo

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

TokenLocking.listenerCount

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

TokenLocking.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

TokenLocking.listeners

___

### lockToken

▸ **lockToken**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.lockToken

___

### obligateStake

▸ **obligateStake**(`_user`, `_amount`, `_token`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_token` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.obligateStake

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

TokenLocking.owner

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

TokenLocking.queryFilter

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

TokenLocking.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`TokenLockingClient`](TokenLockingClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TokenLockingClient`](TokenLockingClient.md)

#### Inherited from

TokenLocking.removeAllListeners

___

### reward

▸ **reward**(`_recipient`, `_amount`, `overrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_recipient` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`void`\>

#### Inherited from

TokenLocking.reward

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.setAuthority

___

### setColonyNetwork

▸ **setColonyNetwork**(`_colonyNetwork`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colonyNetwork` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.setColonyNetwork

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.setOwner

___

### transfer

▸ **transfer**(`_token`, `_amount`, `_recipient`, `_force`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_recipient` | `PromiseOrValue`<`string`\> |
| `_force` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.transfer

___

### transferStake

▸ **transferStake**(`_user`, `_amount`, `_token`, `_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_token` | `PromiseOrValue`<`string`\> |
| `_recipient` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.transferStake

___

### unlockTokenForUser

▸ **unlockTokenForUser**(`_token`, `_user`, `_lockId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_user` | `PromiseOrValue`<`string`\> |
| `_lockId` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.unlockTokenForUser

___

### verify

▸ **verify**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> |
| `_nonce` | `PromiseOrValue`<`BigNumberish`\> |
| `_chainId` | `PromiseOrValue`<`BigNumberish`\> |
| `_payload` | `PromiseOrValue`<`BytesLike`\> |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

TokenLocking.verify

___

### withdraw(address,uint256)

▸ **withdraw(address,uint256)**(`_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.withdraw(address,uint256)

___

### withdraw(address,uint256,bool)

▸ **withdraw(address,uint256,bool)**(`_token`, `_amount`, `_force`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> |
| `_force` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

TokenLocking.withdraw(address,uint256,bool)
