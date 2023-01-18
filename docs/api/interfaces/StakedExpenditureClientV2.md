# Interface: StakedExpenditureClientV2

## Hierarchy

- `AugmentedStakedExpenditure`<`StakedExpenditure`\>

  ↳ **`StakedExpenditureClientV2`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedStakedExpenditure.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedStakedExpenditure.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedStakedExpenditure.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedStakedExpenditure.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `cancelAndPunish` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_callerPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_callerChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `_punish`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAndReclaimStake` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStake` | (`_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`StakeStructOutput`\> |
| `getStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makeExpenditureWithStake` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `reclaimStake` | (`_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStakeFraction` | (`_stakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedStakedExpenditure.callStatic

___

### clientType

• **clientType**: [`StakedExpenditureClient`](../enums/ClientType.md#stakedexpenditureclient)

#### Inherited from

AugmentedStakedExpenditure.clientType

___

### clientVersion

• **clientVersion**: ``2``

#### Overrides

AugmentedStakedExpenditure.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`<`ValidColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedStakedExpenditure.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedStakedExpenditure.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Inherited from

AugmentedStakedExpenditure.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ExpenditureCancelled` | (`expenditureId?`: ``null``) => `ExpenditureCancelledEventFilter` |
| `ExpenditureCancelled(uint256)` | (`expenditureId?`: ``null``) => `ExpenditureCancelledEventFilter` |
| `ExpenditureMadeViaStake` | (`creator?`: ``null`` \| `PromiseOrValue`<`string`\>, `expenditureId?`: ``null``, `stake?`: ``null``) => `ExpenditureMadeViaStakeEventFilter` |
| `ExpenditureMadeViaStake(address,uint256,uint256)` | (`creator?`: ``null`` \| `PromiseOrValue`<`string`\>, `expenditureId?`: ``null``, `stake?`: ``null``) => `ExpenditureMadeViaStakeEventFilter` |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `StakeFractionSet` | (`stakeFraction?`: ``null``) => `StakeFractionSetEventFilter` |
| `StakeFractionSet(uint256)` | (`stakeFraction?`: ``null``) => `StakeFractionSetEventFilter` |
| `StakeReclaimed` | (`expenditureId?`: ``null``) => `StakeReclaimedEventFilter` |
| `StakeReclaimed(uint256)` | (`expenditureId?`: ``null``) => `StakeReclaimedEventFilter` |

#### Inherited from

AugmentedStakedExpenditure.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `cancelAndPunish` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_callerPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_callerChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `_punish`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelAndReclaimStake` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getStake` | (`_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`StakeStructOutput`] & { `stake`: `StakeStructOutput`  }\> |
| `getStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_stakeFraction`: `BigNumber`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makeExpenditureWithStake` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `reclaimStake` | (`_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStakeFraction` | (`_stakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

#### Inherited from

AugmentedStakedExpenditure.functions

___

### interface

• **interface**: `StakedExpenditureInterface`

#### Inherited from

AugmentedStakedExpenditure.interface

___

### off

• **off**: `OnEvent`<[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)\>

#### Inherited from

AugmentedStakedExpenditure.off

___

### on

• **on**: `OnEvent`<[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)\>

#### Inherited from

AugmentedStakedExpenditure.on

___

### once

• **once**: `OnEvent`<[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)\>

#### Inherited from

AugmentedStakedExpenditure.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndPunish` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_callerPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_callerChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `_punish`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndReclaimStake` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStake` | (`_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makeExpenditureWithStake` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_key`: `PromiseOrValue`<`BytesLike`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `_branchMask`: `PromiseOrValue`<`BigNumberish`\>, `_siblings`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `reclaimStake` | (`_expenditureId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStakeFraction` | (`_stakeFraction`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedStakedExpenditure.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedStakedExpenditure.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)\>

#### Inherited from

AugmentedStakedExpenditure.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedStakedExpenditure.signer

___

### stakedExpenditureEvents

• **stakedExpenditureEvents**: `StakedExpenditureEvents`

The stakedExpenditureEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedStakedExpenditure.stakedExpenditureEvents

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

AugmentedStakedExpenditure.\_checkRunningEvents

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

AugmentedStakedExpenditure.\_deployed

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

AugmentedStakedExpenditure.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Inherited from

AugmentedStakedExpenditure.attach

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

AugmentedStakedExpenditure.authority

___

### cancelAndPunish

▸ **cancelAndPunish**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_expenditureId`, `_punish`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which the extension has the arbitration permission |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_callerPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which the caller has the arbitration permission |
| `_callerChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_callerPermissionDomainId` |
| `_expenditureId` | `PromiseOrValue`<`BigNumberish`\> | The id of the expenditure |
| `_punish` | `PromiseOrValue`<`boolean`\> | Whether the staker should be punished by losing an amount of reputation equal to the stake |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndPunish

___

### cancelAndPunishWithProofs

▸ **cancelAndPunishWithProofs**(`_expenditureId`, `_punish`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [cancelAndPunish](StakedExpenditureClientV2.md#cancelandpunish), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_expenditureId` | `BigNumberish` | The id of the expenditure |
| `_punish` | `boolean` | Whether the staker should be punished by losing an amount of reputation equal to the stake |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndPunishWithProofs

___

### cancelAndReclaimStake

▸ **cancelAndReclaimStake**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which the extension has the arbitration permission |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId` |
| `_expenditureId` | `PromiseOrValue`<`BigNumberish`\> | The id of the expenditure |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndReclaimStake

___

### cancelAndReclaimStakeWithProofs

▸ **cancelAndReclaimStakeWithProofs**(`_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [cancelAndReclaimStake](StakedExpenditureClientV2.md#cancelandreclaimstake), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_expenditureId` | `BigNumberish` | The id of the expenditure |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndReclaimStakeWithProofs

___

### connect

▸ **connect**(`signerOrProvider`): [`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Inherited from

AugmentedStakedExpenditure.connect

___

### deployed

▸ **deployed**(): `Promise`<[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)\>

#### Returns

`Promise`<[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)\>

#### Inherited from

AugmentedStakedExpenditure.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_deprecated` | `PromiseOrValue`<`boolean`\> | Indicates whether the extension should be deprecated or undeprecated |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.deprecate

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

AugmentedStakedExpenditure.emit

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

AugmentedStakedExpenditure.executeMetaTransaction

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

AugmentedStakedExpenditure.fallback

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.finishUpgrade

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.getCapabilityRoles

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

AugmentedStakedExpenditure.getChainId

___

### getColony

▸ **getColony**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.getColony

___

### getDeprecated

▸ **getDeprecated**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedStakedExpenditure.getDeprecated

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.getMetatransactionNonce

___

### getStake

▸ **getStake**(`_expenditureId`, `overrides?`): `Promise`<`StakeStructOutput`\>

Get the stake for an expenditure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_expenditureId` | `PromiseOrValue`<`BigNumberish`\> | The id of the expenditure to get the stake for |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`StakeStructOutput`\>

#### Inherited from

AugmentedStakedExpenditure.getStake

___

### getStakeFraction

▸ **getStakeFraction**(`overrides?`): `Promise`<`BigNumber`\>

Get the stake fraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.getStakeFraction

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

Returns the identifier of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.identifier

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Configures the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `PromiseOrValue`<`string`\> | The colony in which the extension holds permissions |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.install

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

AugmentedStakedExpenditure.listenerCount

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

AugmentedStakedExpenditure.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedStakedExpenditure.listeners

___

### makeExpenditureWithStake

▸ **makeExpenditureWithStake**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Make an expenditure by putting up a stake

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domainId in which the extension has the administration permission |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index that the `_domainId` is relative to `_permissionDomainId`, |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain where the expenditure belongs |
| `_key` | `PromiseOrValue`<`BytesLike`\> | A reputation hash tree key, of the total reputation in _domainId |
| `_value` | `PromiseOrValue`<`BytesLike`\> | Reputation value indicating the total reputation in _domainId |
| `_branchMask` | `PromiseOrValue`<`BigNumberish`\> | The branchmask of the proof |
| `_siblings` | `PromiseOrValue`<`BytesLike`\>[] | The siblings of the proof |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.makeExpenditureWithStake

___

### makeExpenditureWithStakeWithProofs

▸ **makeExpenditureWithStakeWithProofs**(`_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makeExpenditureWithStake](StakedExpenditureClientV2.md#makeexpenditurewithstake), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where the expenditure belongs |
| `_key` | `BytesLike` | A reputation hash tree key, of the total reputation in _domainId |
| `_value` | `BytesLike` | Reputation value indicating the total reputation in _domainId |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.makeExpenditureWithStakeWithProofs

___

### multicall

▸ **multicall**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PromiseOrValue`<`BytesLike`\>[] |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.multicall

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

AugmentedStakedExpenditure.owner

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

AugmentedStakedExpenditure.queryFilter

___

### reclaimStake

▸ **reclaimStake**(`_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

Reclaims the stake if the expenditure is finalized or cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_expenditureId` | `PromiseOrValue`<`BigNumberish`\> | The id of the expenditure |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.reclaimStake

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Inherited from

AugmentedStakedExpenditure.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StakedExpenditureClientV2`](StakedExpenditureClientV2.md)

#### Inherited from

AugmentedStakedExpenditure.removeAllListeners

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

AugmentedStakedExpenditure.setAuthority

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

AugmentedStakedExpenditure.setOwner

___

### setStakeFraction

▸ **setStakeFraction**(`_stakeFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the stake fraction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_stakeFraction` | `PromiseOrValue`<`BigNumberish`\> | WAD-denominated fraction, used to determine stake as fraction of rep in domain |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.setStakeFraction

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.uninstall

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

AugmentedStakedExpenditure.verify

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

Returns the version of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.version
