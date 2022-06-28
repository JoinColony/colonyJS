# Interface: ColonyNetworkClient

## Hierarchy

- `IColonyNetwork`

  ↳ **`ColonyNetworkClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

### address

• `Readonly` **address**: `string`

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addColonyVersion` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addExtensionToNetwork` | (`extensionId`: `BytesLike`, `resolver`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addSkill` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addr` | (`node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `appendReputationUpdateLog` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveExitRecovery` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burnUnneededRewards` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `calculateMinerWeight` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimMiningReward` | (`_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_orbitdb`: `string`, `_useExtensionManager`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createMetaColony` | (`_tokenAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deployTokenAuthority` | (`_token`: `string`, `_colony`: `string`, `allowedToTransfer`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deployTokenViaNetwork` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecateExtension` | (`extensionId`: `BytesLike`, `deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `BigNumberish`, `_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `enterRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `exitRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getChildSkillId` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyVersionResolver` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionInstallation` | (`extensionId`: `BytesLike`, `colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionResolver` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMiningDelegator` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningStake` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`MiningStakeStructOutput`\> |
| `getParentSkillId` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPayoutWhitelist` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getProfileDBAddress` | (`node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`ReputationLogEntryStructOutput`\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getReputationMiningCycle` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSkill` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`SkillStructOutput`\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialiseReputationMining` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `installExtension` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isColony` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `lookupRegisteredENSDomain` | (`addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `punishStakers` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserLabel` | (`username`: `string`, `orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFeeInverse` | (`_feeInverse`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningDelegate` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningResolver` | (`miningResolverAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPayoutWhitelist` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationMiningCycleReward` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationRootHash(bytes32,uint256,address[])` | (`newHash`: `BytesLike`, `newNLeaves`: `BigNumberish`, `stakers`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationRootHash(bytes32,uint256,address[],uint256)` | (`newHash`: `BytesLike`, `newNLeaves`: `BigNumberish`, `stakers`: `string`[], `reward`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setupRegistrar` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startNextCycle` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startTokenAuction` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `uninstallExtension` | (`extensionId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unstakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateColonyOrbitDB` | (`orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateUserOrbitDB` | (`orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeExtension` | (`extensionId`: `BytesLike`, `newVersion`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

### clientType

• **clientType**: [`NetworkClient`](../enums/ClientType.md#networkclient)

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

### estimateGas

• **estimateGas**: `ExtendedEstimate`

#### Overrides

IColonyNetwork.estimateGas

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuctionCreated` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => `AuctionCreatedEventFilter` |
| `AuctionCreated(address,address,uint256)` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => `AuctionCreatedEventFilter` |
| `ColonyAdded` | (`colonyId?`: ``null`` \| `BigNumberish`, `colonyAddress?`: ``null`` \| `string`, `token?`: ``null``) => `ColonyAddedEventFilter` |
| `ColonyAdded(uint256,address,address)` | (`colonyId?`: ``null`` \| `BigNumberish`, `colonyAddress?`: ``null`` \| `string`, `token?`: ``null``) => `ColonyAddedEventFilter` |
| `ColonyLabelRegistered` | (`colony?`: ``null`` \| `string`, `label?`: ``null``) => `ColonyLabelRegisteredEventFilter` |
| `ColonyLabelRegistered(address,bytes32)` | (`colony?`: ``null`` \| `string`, `label?`: ``null``) => `ColonyLabelRegisteredEventFilter` |
| `ColonyNetworkInitialised` | (`resolver?`: ``null``) => `ColonyNetworkInitialisedEventFilter` |
| `ColonyNetworkInitialised(address)` | (`resolver?`: ``null``) => `ColonyNetworkInitialisedEventFilter` |
| `ColonyVersionAdded` | (`version?`: ``null``, `resolver?`: ``null``) => `ColonyVersionAddedEventFilter` |
| `ColonyVersionAdded(uint256,address)` | (`version?`: ``null``, `resolver?`: ``null``) => `ColonyVersionAddedEventFilter` |
| `ExtensionAddedToNetwork` | (`extensionId?`: ``null`` \| `BytesLike`, `version?`: ``null``) => `ExtensionAddedToNetworkEventFilter` |
| `ExtensionAddedToNetwork(bytes32,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `version?`: ``null``) => `ExtensionAddedToNetworkEventFilter` |
| `ExtensionDeprecated` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `deprecated?`: ``null``) => `ExtensionDeprecatedEventFilter` |
| `ExtensionDeprecated(bytes32,address,bool)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `deprecated?`: ``null``) => `ExtensionDeprecatedEventFilter` |
| `ExtensionInstalled` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => `ExtensionInstalledEventFilter` |
| `ExtensionInstalled(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => `ExtensionInstalledEventFilter` |
| `ExtensionUninstalled` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`) => `ExtensionUninstalledEventFilter` |
| `ExtensionUninstalled(bytes32,address)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`) => `ExtensionUninstalledEventFilter` |
| `ExtensionUpgraded` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => `ExtensionUpgradedEventFilter` |
| `ExtensionUpgraded(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `BytesLike`, `colony?`: ``null`` \| `string`, `version?`: ``null``) => `ExtensionUpgradedEventFilter` |
| `MetaColonyCreated` | (`metaColony?`: ``null``, `token?`: ``null``, `rootSkillId?`: ``null``) => `MetaColonyCreatedEventFilter` |
| `MetaColonyCreated(address,address,uint256)` | (`metaColony?`: ``null``, `token?`: ``null``, `rootSkillId?`: ``null``) => `MetaColonyCreatedEventFilter` |
| `MetaTransactionExecuted` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MiningCycleResolverSet` | (`miningCycleResolver?`: ``null``) => `MiningCycleResolverSetEventFilter` |
| `MiningCycleResolverSet(address)` | (`miningCycleResolver?`: ``null``) => `MiningCycleResolverSetEventFilter` |
| `NetworkFeeInverseSet` | (`feeInverse?`: ``null``) => `NetworkFeeInverseSetEventFilter` |
| `NetworkFeeInverseSet(uint256)` | (`feeInverse?`: ``null``) => `NetworkFeeInverseSetEventFilter` |
| `RecoveryModeEntered` | (`user?`: ``null``) => `RecoveryModeEnteredEventFilter` |
| `RecoveryModeEntered(address)` | (`user?`: ``null``) => `RecoveryModeEnteredEventFilter` |
| `RecoveryModeExitApproved` | (`user?`: ``null``) => `RecoveryModeExitApprovedEventFilter` |
| `RecoveryModeExitApproved(address)` | (`user?`: ``null``) => `RecoveryModeExitApprovedEventFilter` |
| `RecoveryModeExited` | (`user?`: ``null``) => `RecoveryModeExitedEventFilter` |
| `RecoveryModeExited(address)` | (`user?`: ``null``) => `RecoveryModeExitedEventFilter` |
| `RecoveryRoleSet` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
| `RecoveryRoleSet(address,bool)` | (`user?`: ``null`` \| `string`, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
| `RecoveryStorageSlotSet` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => `RecoveryStorageSlotSetEventFilter` |
| `RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)` | (`user?`: ``null``, `slot?`: ``null``, `fromValue?`: ``null``, `toValue?`: ``null``) => `RecoveryStorageSlotSetEventFilter` |
| `RegistrarInitialised` | (`ens?`: ``null``, `rootNode?`: ``null``) => `RegistrarInitialisedEventFilter` |
| `RegistrarInitialised(address,bytes32)` | (`ens?`: ``null``, `rootNode?`: ``null``) => `RegistrarInitialisedEventFilter` |
| `ReputationMinerPenalised` | (`miner?`: ``null``, `tokensLost?`: ``null``) => `ReputationMinerPenalisedEventFilter` |
| `ReputationMinerPenalised(address,uint256)` | (`miner?`: ``null``, `tokensLost?`: ``null``) => `ReputationMinerPenalisedEventFilter` |
| `ReputationMiningCycleComplete` | (`hash?`: ``null``, `nLeaves?`: ``null``) => `ReputationMiningCycleCompleteEventFilter` |
| `ReputationMiningCycleComplete(bytes32,uint256)` | (`hash?`: ``null``, `nLeaves?`: ``null``) => `ReputationMiningCycleCompleteEventFilter` |
| `ReputationMiningInitialised` | (`inactiveReputationMiningCycle?`: ``null``) => `ReputationMiningInitialisedEventFilter` |
| `ReputationMiningInitialised(address)` | (`inactiveReputationMiningCycle?`: ``null``) => `ReputationMiningInitialisedEventFilter` |
| `ReputationMiningRewardSet` | (`amount?`: ``null``) => `ReputationMiningRewardSetEventFilter` |
| `ReputationMiningRewardSet(uint256)` | (`amount?`: ``null``) => `ReputationMiningRewardSetEventFilter` |
| `ReputationRootHashSet` | (`newHash?`: ``null``, `newNLeaves?`: ``null``, `stakers?`: ``null``, `reward?`: ``null``) => `ReputationRootHashSetEventFilter` |
| `ReputationRootHashSet(bytes32,uint256,address[],uint256)` | (`newHash?`: ``null``, `newNLeaves?`: ``null``, `stakers?`: ``null``, `reward?`: ``null``) => `ReputationRootHashSetEventFilter` |
| `SkillAdded` | (`skillId?`: ``null``, `parentSkillId?`: ``null``) => `SkillAddedEventFilter` |
| `SkillAdded(uint256,uint256)` | (`skillId?`: ``null``, `parentSkillId?`: ``null``) => `SkillAddedEventFilter` |
| `TokenAuthorityDeployed` | (`tokenAuthorityAddress?`: ``null``) => `TokenAuthorityDeployedEventFilter` |
| `TokenAuthorityDeployed(address)` | (`tokenAuthorityAddress?`: ``null``) => `TokenAuthorityDeployedEventFilter` |
| `TokenDeployed` | (`tokenAddress?`: ``null``) => `TokenDeployedEventFilter` |
| `TokenDeployed(address)` | (`tokenAddress?`: ``null``) => `TokenDeployedEventFilter` |
| `TokenLockingAddressSet` | (`tokenLocking?`: ``null``) => `TokenLockingAddressSetEventFilter` |
| `TokenLockingAddressSet(address)` | (`tokenLocking?`: ``null``) => `TokenLockingAddressSetEventFilter` |
| `TokenWhitelisted` | (`token?`: ``null``, `status?`: ``null``) => `TokenWhitelistedEventFilter` |
| `TokenWhitelisted(address,bool)` | (`token?`: ``null``, `status?`: ``null``) => `TokenWhitelistedEventFilter` |
| `UserLabelRegistered` | (`user?`: ``null`` \| `string`, `label?`: ``null``) => `UserLabelRegisteredEventFilter` |
| `UserLabelRegistered(address,bytes32)` | (`user?`: ``null`` \| `string`, `label?`: ``null``) => `UserLabelRegisteredEventFilter` |

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addColonyVersion` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addExtensionToNetwork` | (`extensionId`: `BytesLike`, `resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addSkill` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addr` | (`node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `appendReputationUpdateLog` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `burnUnneededRewards` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateMinerWeight` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `minerWeight`: `BigNumber`  }\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `claimMiningReward` | (`_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_orbitdb`: `string`, `_useExtensionManager`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMetaColony` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenAuthority` | (`_token`: `string`, `_colony`: `string`, `allowedToTransfer`: `string`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenViaNetwork` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecateExtension` | (`extensionId`: `BytesLike`, `deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `BigNumberish`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getChildSkillId` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `skillId`: `BigNumber`  }\> |
| `getColony` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyAddress`: `string`  }\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getColonyVersionResolver` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `resolverAddress`: `string`  }\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `version`: `BigNumber`  }\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getExtensionInstallation` | (`extensionId`: `BytesLike`, `colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `installation`: `string`  }\> |
| `getExtensionResolver` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `resolver`: `string`  }\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_feeInverse`: `BigNumber`  }\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `colonyAddress`: `string`  }\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMiningDelegator` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `miningResolverAddress`: `string`  }\> |
| `getMiningStake` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`MiningStakeStructOutput`] & { `_info`: `MiningStakeStructOutput`  }\> |
| `getParentSkillId` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `skillId`: `BigNumber`  }\> |
| `getPayoutWhitelist` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `status`: `boolean`  }\> |
| `getProfileDBAddress` | (`node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `orbitDB`: `string`  }\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`ReputationLogEntryStructOutput`] & { `reputationLogEntry`: `ReputationLogEntryStructOutput`  }\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `exists`: `boolean`  }\> |
| `getReputationMiningCycle` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `repMiningCycleAddress`: `string`  }\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `skillId`: `BigNumber`  }\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `rootHash`: `string`  }\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nLeaves`: `BigNumber`  }\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nNodes`: `BigNumber`  }\> |
| `getSkill` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`SkillStructOutput`] & { `skill`: `SkillStructOutput`  }\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `count`: `BigNumber`  }\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `lockingAddress`: `string`  }\> |
| `initialise` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialiseReputationMining` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `installExtension` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isColony` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `addressIsColony`: `boolean`  }\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `inRecoveryMode`: `boolean`  }\> |
| `lookupRegisteredENSDomain` | (`addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `domain`: `string`  }\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numRoles`: `BigNumber`  }\> |
| `punishStakers` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUserLabel` | (`username`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFeeInverse` | (`_feeInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMiningDelegate` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMiningResolver` | (`miningResolverAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPayoutWhitelist` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setReputationMiningCycleReward` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setReputationRootHash(bytes32,uint256,address[])` | (`newHash`: `BytesLike`, `newNLeaves`: `BigNumberish`, `stakers`: `string`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setReputationRootHash(bytes32,uint256,address[],uint256)` | (`newHash`: `BytesLike`, `newNLeaves`: `BigNumberish`, `stakers`: `string`[], `reward`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setupRegistrar` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `stakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startNextCycle` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startTokenAuction` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `status`: `boolean`  }\> |
| `uninstallExtension` | (`extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unstakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateColonyOrbitDB` | (`orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateUserOrbitDB` | (`orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgradeExtension` | (`extensionId`: `BytesLike`, `newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

### interface

• **interface**: `IColonyNetworkInterface`

### network

• **network**: [`Network`](../enums/Network.md)

### off

• **off**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

### on

• **on**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

### once

• **once**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addColonyVersion` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addExtensionToNetwork` | (`extensionId`: `BytesLike`, `resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addSkill` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addr` | (`node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `appendReputationUpdateLog` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `burnUnneededRewards` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateMinerWeight` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimMiningReward` | (`_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_orbitdb`: `string`, `_useExtensionManager`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMetaColony` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenAuthority` | (`_token`: `string`, `_colony`: `string`, `allowedToTransfer`: `string`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenViaNetwork` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateExtension` | (`extensionId`: `BytesLike`, `deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `BigNumberish`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getChildSkillId` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyVersionResolver` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionInstallation` | (`extensionId`: `BytesLike`, `colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionResolver` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningDelegator` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningStake` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getParentSkillId` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPayoutWhitelist` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProfileDBAddress` | (`node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycle` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkill` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseReputationMining` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `installExtension` | (`extensionId`: `BytesLike`, `version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isColony` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lookupRegisteredENSDomain` | (`addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `punishStakers` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerColonyLabel` | (`colonyName`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserLabel` | (`username`: `string`, `orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeInverse` | (`_feeInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningDelegate` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningResolver` | (`miningResolverAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPayoutWhitelist` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationMiningCycleReward` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationRootHash(bytes32,uint256,address[])` | (`newHash`: `BytesLike`, `newNLeaves`: `BigNumberish`, `stakers`: `string`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationRootHash(bytes32,uint256,address[],uint256)` | (`newHash`: `BytesLike`, `newNLeaves`: `BigNumberish`, `stakers`: `string`[], `reward`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setupRegistrar` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startNextCycle` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startTokenAuction` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uninstallExtension` | (`extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unstakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateColonyOrbitDB` | (`orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateUserOrbitDB` | (`orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeExtension` | (`extensionId`: `BytesLike`, `newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

### provider

• `Readonly` **provider**: `Provider`

### removeListener

• **removeListener**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

### reputationOracleEndpoint

• **reputationOracleEndpoint**: `string`

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

### signer

• `Readonly` **signer**: `Signer`

## Methods

### ▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

### ▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

### ▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

### ▸ **addColonyVersion**(`_version`, `_resolver`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds a new Colony contract version and the address of associated `_resolver` contract. Secured function to authorised members. Allowed to be called by the Meta Colony only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_version` | `BigNumberish` | The new Colony contract version |
| `_resolver` | `string` | Address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **addExtensionToNetwork**(`extensionId`, `resolver`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.The extension version is queried from the resolver itself.
Add a new extension resolver to the Extensions repository.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `resolver` | `string` | The deployed resolver containing the extension contract logic |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **addSkill**(`_parentSkillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if the parent skill does not exist or if this is called by an unauthorised sender.
Adds a new skill to the global or local skills tree, under skill `_parentSkillId`. Only the Meta Colony is allowed to add a global skill, called via `IColony.addGlobalSkill`. Any colony is allowed to add a local skill and which is associated with a new domain via `IColony.addDomain`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parentSkillId` | `BigNumberish` | Id of the skill under which the new skill will be added. If 0, a global skill is added with no parent. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **addr**(`node`, `overrides?`): `Promise`<`string`\>

Returns the address the supplied node resolves do, if we are the resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `BytesLike` | The namehash of the ENS address being requested |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **appendReputationUpdateLog**(`_user`, `_amount`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if it is called by anyone but a colony or if skill with id `_skillId` does not exist or.
Adds a reputation update entry to log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user for the reputation update |
| `_amount` | `BigNumberish` | The amount of reputation change for the update, this can be a negative as well as a positive value |
| `_skillId` | `BigNumberish` | The skill for the reputation update |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **approveExitRecovery**(`overrides?`): `Promise`<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **attach**(`addressOrName`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ColonyNetworkClient`](ColonyNetworkClient.md)

### ▸ **burnUnneededRewards**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the active reputation mining cycle
Used to burn tokens that are not needed to pay out rewards (because not every possible defence was made for all submissions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | The amount of CLNY to burn |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **calculateMinerWeight**(`_timeStaked`, `_submissonIndex`, `overrides?`): `Promise`<`BigNumber`\>

Calculate raw miner weight in WADs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_timeStaked` | `BigNumberish` | Amount of time (in seconds) that the miner has staked their CLNY |
| `_submissonIndex` | `BigNumberish` | Index of reputation hash submission (between 0 and 11) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **checkNotAdditionalProtectedVariable**(`_slot`, `overrides?`): `Promise`<`void`\>

No return value, but should throw if protected.This is external, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `BigNumberish` | The storage slot number to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`void`\>

### ▸ **claimMiningReward**(`_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Can be called by anyone, not just _recipient
Used by a user to claim any mining rewards due to them. This will place them in their balance or pending balance, as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `string` | The user whose rewards to claim |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **connect**(`signerOrProvider`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ColonyNetworkClient`](ColonyNetworkClient.md)

### ▸ **createColony(address)**(`_tokenAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

This is now deprecated and will be removed in a future versionFor the colony to mint tokens, token ownership must be transferred to the new colony
Creates a new colony in the network, at version 3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **createColony(address,uint256,string)**(`_tokenAddress`, `_version`, `_colonyName`, `overrides?`): `Promise`<`ContractTransaction`\>

For the colony to mint tokens, token ownership must be transferred to the new colony
Creates a new colony in the network, with an optional ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **createColony(address,uint256,string,string)**(`_tokenAddress`, `_version`, `_colonyName`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

For the colony to mint tokens, token ownership must be transferred to the new colonyWe expect this function to only be used by the dapp
Creates a new colony in the network, with an optional ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `_metadata` | `string` | The metadata associated with the new colony |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **createColony(address,uint256,string,string,bool)**(`_tokenAddress`, `_version`, `_colonyName`, `_orbitdb`, `_useExtensionManager`, `overrides?`): `Promise`<`ContractTransaction`\>

This is now deprecated and will be removed in a future versionFor the colony to mint tokens, token ownership must be transferred to the new colony
Overload of the simpler `createColony` -- creates a new colony in the network with a variety of options, at version 4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `_orbitdb` | `string` | DEPRECATED Currently a no-op |
| `_useExtensionManager` | `boolean` | DEPRECATED Currently a no-op |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **createMetaColony**(`_tokenAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Create the Meta Colony, same as a normal colony plus the root skill.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of the CLNY token |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **deployToken**(`name`, `symbol`, `decimals?`, `overrides?`): `Promise`<`ContractTransaction`\>

Deploy an ERC20 token contract, compatible with Colony

**`remarks`**
For valid values see the spec here: https://eips.ethereum.org/EIPS/eip-20

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The token name. Can be any string. Be creative |
| `symbol` | `string` | The symbol of the token (e.g. CLNY) |
| `decimals?` | `number` | The number of token decimals |
| `overrides?` | `Overrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

ethers compatible ContractTransaction

### ▸ **deployTokenAuthority**(`_token`, `_colony`, `allowedToTransfer`, `overrides?`): `Promise`<`ContractTransaction`\>

This is more expensive than deploying a token directly, but is able to be done via a metatransaction
Called to deploy a token authority

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The address of the otken |
| `_colony` | `string` | The address of the colony in control of the token |
| `allowedToTransfer` | `string`[] | An array of addresses that are allowed to transfer the token even if it's locked |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **deployTokenViaNetwork**(`_name`, `_symbol`, `_decimals`, `overrides?`): `Promise`<`ContractTransaction`\>

This is more expensive than deploying a token directly, but is able to be done via a metatransaction
Called to deploy a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_name` | `string` | The name of the token |
| `_symbol` | `string` | The short 'ticket' symbol for the token |
| `_decimals` | `BigNumberish` | The number of decimal places that 1 user-facing token can be divided up in to In the case of ETH, and most tokens, this is 18. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **deployed**(): `Promise`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Returns

`Promise`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

### ▸ **deprecateExtension**(`extensionId`, `deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the deprecation of an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `deprecated` | `boolean` | Whether to deprecate the extension or not |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **deprecateSkill(uint256)**(`_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

This function is deprecated and will be removed in a future release
Mark a skill as deprecated which stops new tasks and payments from using it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **deprecateSkill(uint256,bool)**(`_skillId`, `_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Set deprecation status for a skill

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `_deprecated` | `boolean` | Deprecation status |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

### ▸ **enterRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Executes a metatransaction targeting this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The address of the user that signed the metatransaction |
| `payload` | `BytesLike` | The transaction data that will be executed if signature valid |
| `sigR` | `BytesLike` | The 'r' part of the signature |
| `sigS` | `BytesLike` | The 's' part of the signature |
| `sigV` | `BigNumberish` | The 'v' part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **exitRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Exit recovery mode, can be called by anyone if enough whitelist approvals are given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

### ▸ **getChildSkillId**(`_skillId`, `_childSkillIndex`, `overrides?`): `Promise`<`BigNumber`\>

Get the id of the child skill at index `_childSkillIndex` for skill with Id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `_childSkillIndex` | `BigNumberish` | Index of the `skill.children` array to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getColony**(`_id`, `overrides?`): `Promise`<`string`\>

Get a colony address by its Id in the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the colony to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **getColonyClient**(`addressOrId`): `Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

Get a ColonyClient instance for the currently deployed version of that Colony by providing the address or the integer colony number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addressOrId` | `string` \| `number` | The colony address (string) or the auto-incremented Colony id (integer) |

#### Returns

`Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

The corresponding initialized ColonyClient instance

### ▸ **getColonyCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of colonies in the network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getColonyVersionResolver**(`_version`, `overrides?`): `Promise`<`string`\>

Get the `Resolver` address for Colony contract version `_version`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_version` | `BigNumberish` | The Colony contract version |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **getCurrentColonyVersion**(`overrides?`): `Promise`<`BigNumber`\>

Returns the latest Colony contract version. This is the version used to create all new colonies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getENSRegistrar**(`overrides?`): `Promise`<`string`\>

Returns the address of the ENSRegistrar for the Network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getExtensionInstallation**(`extensionId`, `colony`, `overrides?`): `Promise`<`string`\>

Get an extension's installation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `colony` | `string` | Address of the colony the extension is installed in |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **getExtensionResolver**(`extensionId`, `version`, `overrides?`): `Promise`<`string`\>

Get an extension's resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `version` | `BigNumberish` | Version of the extension |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **getFeeInverse**(`overrides?`): `Promise`<`BigNumber`\>

Return 1 / the fee to pay to the network. e.g. if the fee is 1% (or 0.01), return 100.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getMetaColony**(`overrides?`): `Promise`<`string`\>

Get the Meta Colony address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getMetaColonyClient**(): `Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

Get the initialized MetaColony client

#### Returns

`Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

a ColonyClient instance of the MetaColony (id: 1)

### ▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next metatransaction nonce for user that should be used targeting this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The address of the user that will sign the metatransaction |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getMiningDelegator**(`_delegate`, `overrides?`): `Promise`<`string`\>

Called to get the address _delegate is allowed to mine for

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `string` | The address that wants to mine |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **getMiningResolver**(`overrides?`): `Promise`<`string`\>

Get the resolver to be used by new instances of ReputationMiningCycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getMiningStake**(`_user`, `overrides?`): `Promise`<`MiningStakeStructOutput`\>

returns how much CLNY _user has staked for the purposes of reputation mining

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user to query |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`MiningStakeStructOutput`\>

### ▸ **getParentSkillId**(`_skillId`, `_parentSkillIndex`, `overrides?`): `Promise`<`BigNumber`\>

Get the id of the parent skill at index `_parentSkillIndex` for skill with Id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `_parentSkillIndex` | `BigNumberish` | Index of the `skill.parents` array to get Note that not all parent skill ids are stored here. See `Skill.parents` member for definition on which parents are stored |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getPayoutWhitelist**(`_token`, `overrides?`): `Promise`<`boolean`\>

Get a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The token being queried |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

### ▸ **getProfileDBAddress**(`node`, `overrides?`): `Promise`<`string`\>

Retrieve the orbitdb address corresponding to a registered account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `BytesLike` | The Namehash of the account being queried. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **getReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `overrides?`): `Promise`<`ReputationLogEntryStructOutput`\>

Get a replacement log entry (if set) for the log entry `_id` in the mining cycle that was at the address `_reputationMiningCycle`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `string` | The address of the reputation mining cycle we are asking about |
| `_id` | `BigNumberish` | The log entry number we wish to see if there is a replacement for |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ReputationLogEntryStructOutput`\>

### ▸ **getReplacementReputationUpdateLogsExist**(`_reputationMiningCycle`, `overrides?`): `Promise`<`boolean`\>

Get whether any replacement log entries have been set for the supplied reputation mining cycle.Used by the client to avoid doubling the number of RPC calls when syncing from scratch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `string` | The reputation mining cycle address we want to know if any entries have been replaced in. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

### ▸ **getReputationMiningCycle**(`_active`, `overrides?`): `Promise`<`string`\>

Get the address of either the active or inactive reputation mining cycle, based on `active`. The active reputation mining cycle is the one currently under consideration by reputation miners. The inactive reputation cycle is the one with the log that is being appended to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_active` | `boolean` | Whether the user wants the active or inactive reputation mining cycle |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **getReputationMiningCycleReward**(`overrides?`): `Promise`<`BigNumber`\>

Called to get the total per-cycle reputation mining reward.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getReputationMiningSkillId**(`overrides?`): `Promise`<`BigNumber`\>

Get the `skillId` of the reputation mining skill. Only set once the metacolony is set up.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getReputationRootHash**(`overrides?`): `Promise`<`string`\>

Get the root hash of the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getReputationRootHashNLeaves**(`overrides?`): `Promise`<`BigNumber`\>

I cannot see a reason why a user's client would need to call this - only stored to help with some edge cases in reputation mining dispute resolution.
Get the number of leaves in the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getReputationRootHashNNodes**(`overrides?`): `Promise`<`BigNumber`\>

Deprecated, replaced by getReputationRootHashNLeaves which does the same thing but is more accurately named.will be removed in a later version.
Get the number of leaves in the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getSkill**(`_skillId`, `overrides?`): `Promise`<`SkillStructOutput`\>

Get the `nParents` and `nChildren` of skill with id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`SkillStructOutput`\>

### ▸ **getSkillCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of skills in the network including both global and local skills.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getTokenLocking**(`overrides?`): `Promise`<`string`\>

Get token locking contract address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getTokenLockingClient**(): `Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

Gets the TokenLockingClient

#### Returns

`Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

an initialized version of the TokenLockingClient

### ▸ **initialise**(`_resolver`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

Only allowed to be run once, by the Network owner before any Colony versions are added.
Initialises the colony network by setting the first Colony version resolver to `_resolver` address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_resolver` | `string` | Address of the resolver for Colony contract |
| `_version` | `BigNumberish` | Version of the Colony contract the resolver represents |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **initialiseReputationMining**(`overrides?`): `Promise`<`ContractTransaction`\>

Creates initial inactive reputation mining cycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **initialiseRootLocalSkill**(`overrides?`): `Promise`<`ContractTransaction`\>

Initialise the local skills tree for a colony

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **installExtension**(`extensionId`, `version`, `overrides?`): `Promise`<`ContractTransaction`\>

Install an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `version` | `BigNumberish` | Version of the extension to install |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **isColony**(`_colony`, `overrides?`): `Promise`<`boolean`\>

Check if specific address is a colony created on colony network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `string` | Address of the colony |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

### ▸ **isInRecoveryMode**(`overrides?`): `Promise`<`boolean`\>

Is colony network in recovery mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

### ▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

### ▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

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

### ▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

### ▸ **lookupRegisteredENSDomain**(`addr`, `overrides?`): `Promise`<`string`\>

Reverse lookup a username from an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addr` | `string` | The address we wish to find the corresponding ENS domain for (if any) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

### ▸ **lookupRegisteredENSDomainWithNetworkPatches**(`address`): `Promise`<`string`\>

Like [[`lookupRegisteredENSDomain`]], but also working on the Goerli testnet

**`remarks`**
On Goerli, all ens domains have the `.test` suffix. The contracts return `.eth` anyways.
We patch the original function to fix this problem. On any other network it will return the
original function

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

an ENS name in the form of `[username].user.joincolony.eth` or `[colonyName].colony.joincolony.eth`

### ▸ **numRecoveryRoles**(`overrides?`): `Promise`<`BigNumber`\>

Return number of recovery roles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **punishStakers**(`_stakers`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

While external, it can only be called successfully by the current ReputationMiningCycle.
Function called to punish people who staked against a new reputation root hash that turned out to be incorrect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_stakers` | `string`[] | Array of the addresses of stakers to punish |
| `_amount` | `BigNumberish` | Amount of stake to slash |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

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

### ▸ **registerColonyLabel**(`colonyName`, `orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register a "colony.joincolony.eth" label. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colonyName` | `string` | The label to register. |
| `orbitdb` | `string` | The path of the orbitDB database associated with the colony name |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **registerUserLabel**(`username`, `orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register a "user.joincolony.eth" label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | The label to register |
| `orbitdb` | `string` | The path of the orbitDB database associated with the user profile |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ColonyNetworkClient`](ColonyNetworkClient.md)

### ▸ **removeAllListeners**(`eventName?`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ColonyNetworkClient`](ColonyNetworkClient.md)

### ▸ **removeRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Remove colony recovery role. Can only be called by root role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to remove recovery role from |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **reward**(`_recipient`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the active reputation mining cycle
Used to track that a user is eligible to claim a reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `string` | The address receiving the award |
| `_amount` | `BigNumberish` | The amount of CLNY to be awarded |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setFeeInverse**(`_feeInverse`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the colony network fee to pay. e.g. if the fee is 1% (or 0.01), pass 100 as `_feeInverse`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_feeInverse` | `BigNumberish` | The inverse of the network fee to set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setMiningDelegate**(`_delegate`, `_allowed`, `overrides?`): `Promise`<`ContractTransaction`\>

Called to give or remove another address's permission to mine on your behalf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `string` | The address you're giving or removing permission from |
| `_allowed` | `boolean` | Whether they are allowed (true) or not (false) to mine on your behalf |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setMiningResolver**(`miningResolverAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the resolver to be used by new instances of ReputationMiningCycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miningResolverAddress` | `string` | The address of the Resolver contract with the functions correctly wired. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setPayoutWhitelist**(`_token`, `_status`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The token being set |
| `_status` | `boolean` | The whitelist status |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony recovery role. Can be called by root.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give a recovery role to |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `_user`, `_amount`, `_skillId`, `_colony`, `_nUpdates`, `_nPreviousUpdates`, `overrides?`): `Promise`<`ContractTransaction`\>

Note that strictly, `_nUpdates` and `_nPreviousUpdates` don't need to be set - they're only used during dispute resolution, which these replacement log entries are never used for. However, for ease of resyncing the client, we have decided to include them for now.
Set a replacement log entry if we're in recovery mode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `string` | The address of the reputation mining cycle that the log was in. |
| `_id` | `BigNumberish` | The number of the log entry in the reputation mining cycle in question. |
| `_user` | `string` | The address of the user earning / losing the reputation |
| `_amount` | `BigNumberish` | The amount of reputation being earned / lost |
| `_skillId` | `BigNumberish` | The id of the origin skill for the reputation update |
| `_colony` | `string` | The address of the colony being updated |
| `_nUpdates` | `BigNumberish` | The number of updates the log entry corresponds to |
| `_nPreviousUpdates` | `BigNumberish` | The number of updates in the log before this entry |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setReputationMiningCycleReward**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.
Called to set the total per-cycle reputation reward, which will be split between all miners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setReputationRootHash(bytes32,uint256,address[])**(`newHash`, `newNLeaves`, `stakers`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a new Reputation root hash and starts a new mining cycle. Can only be called by the ReputationMiningCycle contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newHash` | `BytesLike` | The reputation root hash |
| `newNLeaves` | `BigNumberish` | The updated leaves count value |
| `stakers` | `string`[] | Array of users who submitted or backed the hash, being accepted here as the new reputation root hash |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setReputationRootHash(bytes32,uint256,address[],uint256)**(`newHash`, `newNLeaves`, `stakers`, `reward`, `overrides?`): `Promise`<`ContractTransaction`\>

This version of setReputationRootHash is deprecated and will be removed in a future release. It transparently calls the new version if it is called (essentially, removing the `reward` parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newHash` | `BytesLike` | The reputation root hash |
| `newNLeaves` | `BigNumberish` | The updated leaves count value |
| `stakers` | `string`[] | Array of users who submitted or backed the hash, being accepted here as the new reputation root hash |
| `reward` | `BigNumberish` | Amount of CLNY to be distributed as reward to miners (not used) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setStorageSlotRecovery**(`_slot`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

certain critical variables are protected from editing in this function
Update value of arbitrary storage variable. Can only be called by user with recovery role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `BigNumberish` | Uint address of storage slot to be updated |
| `_value` | `BytesLike` | word of data to be set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setTokenLocking**(`_tokenLockingAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the token locking address. This is only set once, and can't be changed afterwards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenLockingAddress` | `string` | Address of the locking contract |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setupRegistrar**(`_ens`, `_rootNode`, `overrides?`): `Promise`<`ContractTransaction`\>

Setup registrar with ENS and root node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_ens` | `string` | Address of ENS registrar |
| `_rootNode` | `BytesLike` | Namehash of the root node for the domain |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **stakeForMining**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Stake CLNY to allow the staker to participate in reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | Amount of CLNY to stake for the purposes of mining |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **startNextCycle**(`overrides?`): `Promise`<`ContractTransaction`\>

Starts a new Reputation Mining cycle. Explicitly called only the first time, subsequently called from within `setReputationRootHash`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **startTokenAuction**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Create and start a new `DutchAuction` for the entire amount of `_token` owned by the Colony Network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | Address of the token held by the network to be auctioned |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **supportsInterface**(`interfaceID`, `overrides?`): `Promise`<`boolean`\>

Interface identification is specified in ERC-165.
Query if a contract implements an interface

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interfaceID` | `BytesLike` | The interface identifier, as specified in ERC-165 |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

### ▸ **uninstallExtension**(`extensionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Uninstall an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **unstakeForMining**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Unstake CLNY currently staked for reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | Amount of CLNY staked for mining to unstake |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **updateColonyOrbitDB**(`orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orbitdb` | `string` | The path of the orbitDB database to be associated with the colony |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **updateUserOrbitDB**(`orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a user's orbitdb address. Can only be called by a user with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orbitdb` | `string` | The path of the orbitDB database to be associated with the user |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **upgradeExtension**(`extensionId`, `newVersion`, `overrides?`): `Promise`<`ContractTransaction`\>

Upgrade an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `newVersion` | `BigNumberish` | Version of the extension to upgrade to (must be one greater than current) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>
