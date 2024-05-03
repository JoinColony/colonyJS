# Interface: StakedExpenditureClientV5

## Hierarchy

- `AugmentedStakedExpenditure`<`StakedExpenditure`\>

  ↳ **`StakedExpenditureClientV5`**

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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `cancelAndPunish` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `_punish`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `_punish`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAndReclaimStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAndReclaimStake(uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStake` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`StakeStructOutput`\> |
| `getStake(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`StakeStructOutput`\> |
| `getStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialise(uint256)` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makeExpenditureWithStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `reclaimStake` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `reclaimStake(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStakeFraction` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStakeFraction(uint256)` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedStakedExpenditure.callStatic

___

### clientType

• **clientType**: [`StakedExpenditureClient`](../enums/ClientType.md#stakedexpenditureclient)

#### Inherited from

AugmentedStakedExpenditure.clientType

___

### clientVersion

• **clientVersion**: ``5``

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
| `ExpenditureCancelled` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureCancelledEventFilter` |
| `ExpenditureCancelled(address,uint256)` | (`agent?`: ``null``, `expenditureId?`: ``null``) => `ExpenditureCancelledEventFilter` |
| `ExpenditureMadeViaStake` | (`creator?`: ``null`` \| `string`, `expenditureId?`: ``null``, `stake?`: ``null``) => `ExpenditureMadeViaStakeEventFilter` |
| `ExpenditureMadeViaStake(address,uint256,uint256)` | (`creator?`: ``null`` \| `string`, `expenditureId?`: ``null``, `stake?`: ``null``) => `ExpenditureMadeViaStakeEventFilter` |
| `ExpenditureStakerPunished` | (`agent?`: ``null``, `expenditureId?`: ``null``, `punished?`: ``null``) => `ExpenditureStakerPunishedEventFilter` |
| `ExpenditureStakerPunished(address,uint256,bool)` | (`agent?`: ``null``, `expenditureId?`: ``null``, `punished?`: ``null``) => `ExpenditureStakerPunishedEventFilter` |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `StakeFractionSet` | (`agent?`: ``null``, `stakeFraction?`: ``null``) => `StakeFractionSetEventFilter` |
| `StakeFractionSet(address,uint256)` | (`agent?`: ``null``, `stakeFraction?`: ``null``) => `StakeFractionSetEventFilter` |
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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `cancelAndPunish` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `_punish`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `_punish`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `cancelAndReclaimStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `cancelAndReclaimStake(uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getStake` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`StakeStructOutput`] & { `stake`: `StakeStructOutput`  }\> |
| `getStake(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`StakeStructOutput`] & { `stake`: `StakeStructOutput`  }\> |
| `getStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_stakeFraction`: `BigNumber`  }\> |
| `getStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_stakeFraction`: `BigNumber`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `initialise` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialise(uint256)` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `makeExpenditureWithStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `reclaimStake` | (`_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `reclaimStake(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setStakeFraction` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setStakeFraction(uint256)` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

#### Inherited from

AugmentedStakedExpenditure.functions

___

### interface

• **interface**: `StakedExpenditureInterface`

#### Inherited from

AugmentedStakedExpenditure.interface

___

### off

• **off**: `OnEvent`<[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)\>

#### Inherited from

AugmentedStakedExpenditure.off

___

### on

• **on**: `OnEvent`<[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)\>

#### Inherited from

AugmentedStakedExpenditure.on

___

### once

• **once**: `OnEvent`<[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)\>

#### Inherited from

AugmentedStakedExpenditure.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndPunish` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `_punish`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `_punish`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndReclaimStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndReclaimStake(uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStake` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStake(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakeFraction` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStakeFraction()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialise(uint256)` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `makeExpenditureWithStake` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_key`: `BytesLike`, `_value`: `BytesLike`, `_branchMask`: `BigNumberish`, `_siblings`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `reclaimStake` | (`_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `reclaimStake(uint256)` | (`_expenditureId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setStakeFraction` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setStakeFraction(uint256)` | (`_stakeFraction`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedStakedExpenditure.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedStakedExpenditure.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)\>

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

▸ **attach**(`addressOrName`): [`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

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

### authority()

▸ **authority()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.authority()

___

### cancelAndPunish

▸ **cancelAndPunish**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_expenditureId`, `_punish`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_callerPermissionDomainId` | `BigNumberish` |
| `_callerChildSkillIndex` | `BigNumberish` |
| `_expenditureId` | `BigNumberish` |
| `_punish` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndPunish

___

### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)

▸ **cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_expenditureId`, `_punish`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_callerPermissionDomainId` | `BigNumberish` |
| `_callerChildSkillIndex` | `BigNumberish` |
| `_expenditureId` | `BigNumberish` |
| `_punish` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)

___

### cancelAndPunishWithProofs

▸ **cancelAndPunishWithProofs**(`_expenditureId`, `_punish`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [cancelAndPunish](StakedExpenditureClientV5.md#cancelandpunish), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_expenditureId` | `BigNumberish` | The id of the expenditure |
| `_punish` | `boolean` | Whether the staker should be punished by losing an amount of reputation equal to the stake |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndPunishWithProofs

___

### cancelAndReclaimStake

▸ **cancelAndReclaimStake**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndReclaimStake

___

### cancelAndReclaimStake(uint256,uint256,uint256)

▸ **cancelAndReclaimStake(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndReclaimStake(uint256,uint256,uint256)

___

### cancelAndReclaimStakeWithProofs

▸ **cancelAndReclaimStakeWithProofs**(`_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [cancelAndReclaimStake](StakedExpenditureClientV5.md#cancelandreclaimstake), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_expenditureId` | `BigNumberish` | The id of the expenditure |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.cancelAndReclaimStakeWithProofs

___

### connect

▸ **connect**(`signerOrProvider`): [`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

#### Inherited from

AugmentedStakedExpenditure.connect

___

### deployed

▸ **deployed**(): `Promise`<[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)\>

#### Returns

`Promise`<[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)\>

#### Inherited from

AugmentedStakedExpenditure.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.deprecate

___

### deprecate(bool)

▸ **deprecate(bool)**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.deprecate(bool)

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

AugmentedStakedExpenditure.emit

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

AugmentedStakedExpenditure.executeMetaTransaction

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

AugmentedStakedExpenditure.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.finishUpgrade

___

### finishUpgrade()

▸ **finishUpgrade()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.finishUpgrade()

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.getCapabilityRoles

___

### getCapabilityRoles(bytes4)

▸ **getCapabilityRoles(bytes4)**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.getCapabilityRoles(bytes4)

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

### getColony()

▸ **getColony()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.getColony()

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

### getDeprecated()

▸ **getDeprecated()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedStakedExpenditure.getDeprecated()

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.getMetatransactionNonce

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.getMetatransactionNonce(address)

___

### getStake

▸ **getStake**(`_expenditureId`, `overrides?`): `Promise`<`StakeStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`StakeStructOutput`\>

#### Inherited from

AugmentedStakedExpenditure.getStake

___

### getStake(uint256)

▸ **getStake(uint256)**(`_expenditureId`, `overrides?`): `Promise`<`StakeStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`StakeStructOutput`\>

#### Inherited from

AugmentedStakedExpenditure.getStake(uint256)

___

### getStakeFraction

▸ **getStakeFraction**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.getStakeFraction

___

### getStakeFraction()

▸ **getStakeFraction()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.getStakeFraction()

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.identifier

___

### identifier()

▸ **identifier()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.identifier()

___

### initialise

▸ **initialise**(`_stakeFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_stakeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.initialise

___

### initialise(uint256)

▸ **initialise(uint256)**(`_stakeFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_stakeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.initialise(uint256)

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.install

___

### install(address)

▸ **install(address)**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.install(address)

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
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_domainId` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.makeExpenditureWithStake

___

### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])

▸ **makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_domainId` | `BigNumberish` |
| `_key` | `BytesLike` |
| `_value` | `BytesLike` |
| `_branchMask` | `BigNumberish` |
| `_siblings` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])

___

### makeExpenditureWithStakeWithProofs

▸ **makeExpenditureWithStakeWithProofs**(`_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makeExpenditureWithStake](StakedExpenditureClientV5.md#makeexpenditurewithstake), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain where the expenditure belongs |
| `_key` | `BytesLike` | A reputation hash tree key, of the total reputation in _domainId |
| `_value` | `BytesLike` | Reputation value indicating the total reputation in _domainId |
| `_branchMask` | `BigNumberish` | The branchmask of the proof |
| `_siblings` | `BytesLike`[] | The siblings of the proof |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

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
| `data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.multicall

___

### multicall(bytes[])

▸ **multicall(bytes[])**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.multicall(bytes[])

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

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStakedExpenditure.owner()

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

AugmentedStakedExpenditure.queryFilter

___

### reclaimStake

▸ **reclaimStake**(`_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.reclaimStake

___

### reclaimStake(uint256)

▸ **reclaimStake(uint256)**(`_expenditureId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_expenditureId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.reclaimStake(uint256)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

#### Inherited from

AugmentedStakedExpenditure.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StakedExpenditureClientV5`](StakedExpenditureClientV5.md)

#### Inherited from

AugmentedStakedExpenditure.removeAllListeners

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

AugmentedStakedExpenditure.setAuthority

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

AugmentedStakedExpenditure.setAuthority(address)

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

AugmentedStakedExpenditure.setOwner

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

AugmentedStakedExpenditure.setOwner(address)

___

### setStakeFraction

▸ **setStakeFraction**(`_stakeFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_stakeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.setStakeFraction

___

### setStakeFraction(uint256)

▸ **setStakeFraction(uint256)**(`_stakeFraction`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_stakeFraction` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.setStakeFraction(uint256)

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.uninstall

___

### uninstall()

▸ **uninstall()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStakedExpenditure.uninstall()

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

AugmentedStakedExpenditure.verify

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

AugmentedStakedExpenditure.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.version

___

### version()

▸ **version()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStakedExpenditure.version()
