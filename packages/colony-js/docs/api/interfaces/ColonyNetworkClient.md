# Interface: ColonyNetworkClient

## Hierarchy

- `IColonyNetwork`

  ↳ **`ColonyNetworkClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

IColonyNetwork.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

IColonyNetwork.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

IColonyNetwork.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

IColonyNetwork.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addColonyVersion` | (`_version`: `PromiseOrValue`<`BigNumberish`\>, `_resolver`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addExtensionToNetwork` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_resolver`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addSkill` | (`_parentSkillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addr` | (`_node`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `appendReputationUpdateLog` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveExitRecovery` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burnUnneededRewards` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `calculateMinerWeight` | (`_timeStaked`: `PromiseOrValue`<`BigNumberish`\>, `_submissonIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimMiningReward` | (`_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createColony(address)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_metadata`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `_useExtensionManager`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColonyForFrontend` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_name`: `PromiseOrValue`<`string`\>, `_symbol`: `PromiseOrValue`<`string`\>, `_decimals`: `PromiseOrValue`<`BigNumberish`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_metadata`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `colony`: `string` ; `token`: `string`  }\> |
| `createMetaColony` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deployTokenAuthority` | (`_token`: `PromiseOrValue`<`string`\>, `_colony`: `PromiseOrValue`<`string`\>, `_allowedToTransfer`: `PromiseOrValue`<`string`\>[], `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deployTokenViaNetwork` | (`_name`: `PromiseOrValue`<`string`\>, `_symbol`: `PromiseOrValue`<`string`\>, `_decimals`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecateExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `enterRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`userAddress`: `PromiseOrValue`<`string`\>, `payload`: `PromiseOrValue`<`BytesLike`\>, `sigR`: `PromiseOrValue`<`BytesLike`\>, `sigS`: `PromiseOrValue`<`BytesLike`\>, `sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `exitRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getChildSkillId` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyVersionResolver` | (`_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionInstallation` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionResolver` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMiningDelegator` | (`_delegate`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningStake` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`MiningStakeStructOutput`\> |
| `getParentSkillId` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_parentSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPayoutWhitelist` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getProfileDBAddress` | (`_node`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`ReputationLogEntryStructOutput`\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getReputationMiningCycle` | (`_active`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSkill` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`SkillStructOutput`\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_resolver`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialiseReputationMining` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `installExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isColony` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `lookupRegisteredENSDomain` | (`_addr`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `punishStakers` | (`_stakers`: `PromiseOrValue`<`string`\>[], `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerColonyLabel` | (`_colonyName`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserLabel` | (`_username`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeRecoveryRole` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `reward` | (`_recipient`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFeeInverse` | (`_feeInverse`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningDelegate` | (`_delegate`: `PromiseOrValue`<`string`\>, `_allowed`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningResolver` | (`_miningResolverAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPayoutWhitelist` | (`_token`: `PromiseOrValue`<`string`\>, `_status`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRecoveryRole` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_colony`: `PromiseOrValue`<`string`\>, `_nUpdates`: `PromiseOrValue`<`BigNumberish`\>, `_nPreviousUpdates`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationMiningCycleReward` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationRootHash` | (`_newHash`: `PromiseOrValue`<`BytesLike`\>, `_newNLeaves`: `PromiseOrValue`<`BigNumberish`\>, `_stakers`: `PromiseOrValue`<`string`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStorageSlotRecovery` | (`_slot`: `PromiseOrValue`<`BigNumberish`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setupRegistrar` | (`_ens`: `PromiseOrValue`<`string`\>, `_rootNode`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeForMining` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startNextCycle` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startTokenAuction` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`_interfaceID`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `uninstallExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unstakeForMining` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateColonyOrbitDB` | (`_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateUserOrbitDB` | (`_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_newVersion`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Inherited from

IColonyNetwork.callStatic

___

### clientType

• **clientType**: [`NetworkClient`](../enums/ClientType.md#networkclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

IColonyNetwork.deployTransaction

___

### estimateGas

• **estimateGas**: `ExtendedEstimate`

#### Overrides

IColonyNetwork.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuctionCreated` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => `AuctionCreatedEventFilter` |
| `AuctionCreated(address,address,uint256)` | (`auction?`: ``null``, `token?`: ``null``, `quantity?`: ``null``) => `AuctionCreatedEventFilter` |
| `ColonyAdded` | (`colonyId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `colonyAddress?`: ``null`` \| `PromiseOrValue`<`string`\>, `token?`: ``null``) => `ColonyAddedEventFilter` |
| `ColonyAdded(uint256,address,address)` | (`colonyId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `colonyAddress?`: ``null`` \| `PromiseOrValue`<`string`\>, `token?`: ``null``) => `ColonyAddedEventFilter` |
| `ColonyLabelRegistered` | (`colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `label?`: ``null``) => `ColonyLabelRegisteredEventFilter` |
| `ColonyLabelRegistered(address,bytes32)` | (`colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `label?`: ``null``) => `ColonyLabelRegisteredEventFilter` |
| `ColonyNetworkInitialised` | (`resolver?`: ``null``) => `ColonyNetworkInitialisedEventFilter` |
| `ColonyNetworkInitialised(address)` | (`resolver?`: ``null``) => `ColonyNetworkInitialisedEventFilter` |
| `ColonyVersionAdded` | (`version?`: ``null``, `resolver?`: ``null``) => `ColonyVersionAddedEventFilter` |
| `ColonyVersionAdded(uint256,address)` | (`version?`: ``null``, `resolver?`: ``null``) => `ColonyVersionAddedEventFilter` |
| `ExtensionAddedToNetwork` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `version?`: ``null``) => `ExtensionAddedToNetworkEventFilter` |
| `ExtensionAddedToNetwork(bytes32,uint256)` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `version?`: ``null``) => `ExtensionAddedToNetworkEventFilter` |
| `ExtensionDeprecated` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `deprecated?`: ``null``) => `ExtensionDeprecatedEventFilter` |
| `ExtensionDeprecated(bytes32,address,bool)` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `deprecated?`: ``null``) => `ExtensionDeprecatedEventFilter` |
| `ExtensionInstalled` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `version?`: ``null``) => `ExtensionInstalledEventFilter` |
| `ExtensionInstalled(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `version?`: ``null``) => `ExtensionInstalledEventFilter` |
| `ExtensionUninstalled` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>) => `ExtensionUninstalledEventFilter` |
| `ExtensionUninstalled(bytes32,address)` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>) => `ExtensionUninstalledEventFilter` |
| `ExtensionUpgraded` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `version?`: ``null``) => `ExtensionUpgradedEventFilter` |
| `ExtensionUpgraded(bytes32,address,uint256)` | (`extensionId?`: ``null`` \| `PromiseOrValue`<`BytesLike`\>, `colony?`: ``null`` \| `PromiseOrValue`<`string`\>, `version?`: ``null``) => `ExtensionUpgradedEventFilter` |
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
| `RecoveryRoleSet` | (`user?`: ``null`` \| `PromiseOrValue`<`string`\>, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
| `RecoveryRoleSet(address,bool)` | (`user?`: ``null`` \| `PromiseOrValue`<`string`\>, `setTo?`: ``null``) => `RecoveryRoleSetEventFilter` |
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
| `UserLabelRegistered` | (`user?`: ``null`` \| `PromiseOrValue`<`string`\>, `label?`: ``null``) => `UserLabelRegisteredEventFilter` |
| `UserLabelRegistered(address,bytes32)` | (`user?`: ``null`` \| `PromiseOrValue`<`string`\>, `label?`: ``null``) => `UserLabelRegisteredEventFilter` |

#### Inherited from

IColonyNetwork.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addColonyVersion` | (`_version`: `PromiseOrValue`<`BigNumberish`\>, `_resolver`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addExtensionToNetwork` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_resolver`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addSkill` | (`_parentSkillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addr` | (`_node`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_address`: `string`  }\> |
| `appendReputationUpdateLog` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `burnUnneededRewards` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateMinerWeight` | (`_timeStaked`: `PromiseOrValue`<`BigNumberish`\>, `_submissonIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_minerWeight`: `BigNumber`  }\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `claimMiningReward` | (`_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_metadata`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `_useExtensionManager`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createColonyForFrontend` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_name`: `PromiseOrValue`<`string`\>, `_symbol`: `PromiseOrValue`<`string`\>, `_decimals`: `PromiseOrValue`<`BigNumberish`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_metadata`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMetaColony` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenAuthority` | (`_token`: `PromiseOrValue`<`string`\>, `_colony`: `PromiseOrValue`<`string`\>, `_allowedToTransfer`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenViaNetwork` | (`_name`: `PromiseOrValue`<`string`\>, `_symbol`: `PromiseOrValue`<`string`\>, `_decimals`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecateExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `PromiseOrValue`<`string`\>, `payload`: `PromiseOrValue`<`BytesLike`\>, `sigR`: `PromiseOrValue`<`BytesLike`\>, `sigS`: `PromiseOrValue`<`BytesLike`\>, `sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getChildSkillId` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_childSkillId`: `BigNumber`  }\> |
| `getColony` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_colonyAddress`: `string`  }\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getColonyVersionResolver` | (`_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_resolverAddress`: `string`  }\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_address`: `string`  }\> |
| `getExtensionInstallation` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_installation`: `string`  }\> |
| `getExtensionResolver` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_resolver`: `string`  }\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_feeInverse`: `BigNumber`  }\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_colonyAddress`: `string`  }\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMiningDelegator` | (`_delegate`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_delegator`: `string`  }\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `miningResolverAddress`: `string`  }\> |
| `getMiningStake` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`MiningStakeStructOutput`] & { `_info`: `MiningStakeStructOutput`  }\> |
| `getParentSkillId` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_parentSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_parentSkillId`: `BigNumber`  }\> |
| `getPayoutWhitelist` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getProfileDBAddress` | (`_node`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_orbitdb`: `string`  }\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`ReputationLogEntryStructOutput`] & { `_reputationLogEntry`: `ReputationLogEntryStructOutput`  }\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_exists`: `boolean`  }\> |
| `getReputationMiningCycle` | (`_active`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_repMiningCycleAddress`: `string`  }\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_amount`: `BigNumber`  }\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_skillId`: `BigNumber`  }\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `rootHash`: `string`  }\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nLeaves`: `BigNumber`  }\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nNodes`: `BigNumber`  }\> |
| `getSkill` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`SkillStructOutput`] & { `_skill`: `SkillStructOutput`  }\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_lockingAddress`: `string`  }\> |
| `initialise` | (`_resolver`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialiseReputationMining` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `installExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isColony` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_addressIsColony`: `boolean`  }\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `inRecoveryMode`: `boolean`  }\> |
| `lookupRegisteredENSDomain` | (`_addr`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_domain`: `string`  }\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numRoles`: `BigNumber`  }\> |
| `punishStakers` | (`_stakers`: `PromiseOrValue`<`string`\>[], `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerColonyLabel` | (`_colonyName`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUserLabel` | (`_username`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeRecoveryRole` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `reward` | (`_recipient`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFeeInverse` | (`_feeInverse`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMiningDelegate` | (`_delegate`: `PromiseOrValue`<`string`\>, `_allowed`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMiningResolver` | (`_miningResolverAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setPayoutWhitelist` | (`_token`: `PromiseOrValue`<`string`\>, `_status`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setRecoveryRole` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_colony`: `PromiseOrValue`<`string`\>, `_nUpdates`: `PromiseOrValue`<`BigNumberish`\>, `_nPreviousUpdates`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setReputationMiningCycleReward` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setReputationRootHash` | (`_newHash`: `PromiseOrValue`<`BytesLike`\>, `_newNLeaves`: `PromiseOrValue`<`BigNumberish`\>, `_stakers`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `PromiseOrValue`<`BigNumberish`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setupRegistrar` | (`_ens`: `PromiseOrValue`<`string`\>, `_rootNode`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `stakeForMining` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startNextCycle` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startTokenAuction` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`_interfaceID`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `uninstallExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unstakeForMining` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateColonyOrbitDB` | (`_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateUserOrbitDB` | (`_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `upgradeExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_newVersion`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Inherited from

IColonyNetwork.functions

___

### interface

• **interface**: `IColonyNetworkInterface`

#### Inherited from

IColonyNetwork.interface

___

### network

• **network**: [`Network`](../enums/Network.md)

___

### off

• **off**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

IColonyNetwork.off

___

### on

• **on**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

IColonyNetwork.on

___

### once

• **once**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

IColonyNetwork.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addColonyVersion` | (`_version`: `PromiseOrValue`<`BigNumberish`\>, `_resolver`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addExtensionToNetwork` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_resolver`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addSkill` | (`_parentSkillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addr` | (`_node`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `appendReputationUpdateLog` | (`_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `burnUnneededRewards` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateMinerWeight` | (`_timeStaked`: `PromiseOrValue`<`BigNumberish`\>, `_submissonIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimMiningReward` | (`_recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_metadata`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `_useExtensionManager`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createColonyForFrontend` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `_name`: `PromiseOrValue`<`string`\>, `_symbol`: `PromiseOrValue`<`string`\>, `_decimals`: `PromiseOrValue`<`BigNumberish`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `_colonyName`: `PromiseOrValue`<`string`\>, `_metadata`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMetaColony` | (`_tokenAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenAuthority` | (`_token`: `PromiseOrValue`<`string`\>, `_colony`: `PromiseOrValue`<`string`\>, `_allowedToTransfer`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenViaNetwork` | (`_name`: `PromiseOrValue`<`string`\>, `_symbol`: `PromiseOrValue`<`string`\>, `_decimals`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `PromiseOrValue`<`string`\>, `payload`: `PromiseOrValue`<`BytesLike`\>, `sigR`: `PromiseOrValue`<`BytesLike`\>, `sigS`: `PromiseOrValue`<`BytesLike`\>, `sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getChildSkillId` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyVersionResolver` | (`_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionInstallation` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionResolver` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningDelegator` | (`_delegate`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningStake` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getParentSkillId` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_parentSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPayoutWhitelist` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProfileDBAddress` | (`_node`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycle` | (`_active`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkill` | (`_skillId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_resolver`: `PromiseOrValue`<`string`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseReputationMining` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `installExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isColony` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lookupRegisteredENSDomain` | (`_addr`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `punishStakers` | (`_stakers`: `PromiseOrValue`<`string`\>[], `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerColonyLabel` | (`_colonyName`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserLabel` | (`_username`: `PromiseOrValue`<`string`\>, `_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeRecoveryRole` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `reward` | (`_recipient`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeInverse` | (`_feeInverse`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningDelegate` | (`_delegate`: `PromiseOrValue`<`string`\>, `_allowed`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningResolver` | (`_miningResolverAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setPayoutWhitelist` | (`_token`: `PromiseOrValue`<`string`\>, `_status`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setRecoveryRole` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `PromiseOrValue`<`string`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_user`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `_skillId`: `PromiseOrValue`<`BigNumberish`\>, `_colony`: `PromiseOrValue`<`string`\>, `_nUpdates`: `PromiseOrValue`<`BigNumberish`\>, `_nPreviousUpdates`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationMiningCycleReward` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationRootHash` | (`_newHash`: `PromiseOrValue`<`BytesLike`\>, `_newNLeaves`: `PromiseOrValue`<`BigNumberish`\>, `_stakers`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `PromiseOrValue`<`BigNumberish`\>, `_value`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setupRegistrar` | (`_ens`: `PromiseOrValue`<`string`\>, `_rootNode`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeForMining` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startNextCycle` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startTokenAuction` | (`_token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`_interfaceID`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uninstallExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unstakeForMining` | (`_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateColonyOrbitDB` | (`_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateUserOrbitDB` | (`_orbitdb`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeExtension` | (`_extensionId`: `PromiseOrValue`<`BytesLike`\>, `_newVersion`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

IColonyNetwork.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

IColonyNetwork.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

IColonyNetwork.removeListener

___

### reputationOracleEndpoint

• **reputationOracleEndpoint**: `string`

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

IColonyNetwork.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

IColonyNetwork.signer

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

IColonyNetwork.\_checkRunningEvents

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

IColonyNetwork.\_deployed

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

IColonyNetwork.\_wrapEvent

___

### addColonyVersion

▸ **addColonyVersion**(`_version`, `_resolver`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds a new Colony contract version and the address of associated `_resolver` contract. Secured function to authorised members. Allowed to be called by the Meta Colony only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | The new Colony contract version |
| `_resolver` | `PromiseOrValue`<`string`\> | Address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addColonyVersion

___

### addExtensionToNetwork

▸ **addExtensionToNetwork**(`_extensionId`, `_resolver`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.The extension version is queried from the resolver itself.
Add a new extension resolver to the Extensions repository.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `_resolver` | `PromiseOrValue`<`string`\> | The deployed resolver containing the extension contract logic |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addExtensionToNetwork

___

### addSkill

▸ **addSkill**(`_parentSkillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if the parent skill does not exist or if this is called by an unauthorised sender.
Adds a new skill to the global or local skills tree, under skill `_parentSkillId`. Only the Meta Colony is allowed to add a global skill, called via `IColony.addGlobalSkill`. Any colony is allowed to add a local skill and which is associated with a new domain via `IColony.addDomain`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parentSkillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the skill under which the new skill will be added. If 0, a global skill is added with no parent. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addSkill

___

### addr

▸ **addr**(`_node`, `overrides?`): `Promise`<`string`\>

Returns the address the supplied node resolves do, if we are the resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_node` | `PromiseOrValue`<`BytesLike`\> | The namehash of the ENS address being requested |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.addr

___

### appendReputationUpdateLog

▸ **appendReputationUpdateLog**(`_user`, `_amount`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if it is called by anyone but a colony or if skill with id `_skillId` does not exist or.
Adds a reputation update entry to log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The address of the user for the reputation update |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of reputation change for the update, this can be a negative as well as a positive value |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | The skill for the reputation update |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.appendReputationUpdateLog

___

### approveExitRecovery

▸ **approveExitRecovery**(`overrides?`): `Promise`<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.approveExitRecovery

___

### attach

▸ **attach**(`addressOrName`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Inherited from

IColonyNetwork.attach

___

### burnUnneededRewards

▸ **burnUnneededRewards**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the active reputation mining cycle
Used to burn tokens that are not needed to pay out rewards (because not every possible defence was made for all submissions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of CLNY to burn |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.burnUnneededRewards

___

### calculateMinerWeight

▸ **calculateMinerWeight**(`_timeStaked`, `_submissonIndex`, `overrides?`): `Promise`<`BigNumber`\>

Calculate raw miner weight in WADs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_timeStaked` | `PromiseOrValue`<`BigNumberish`\> | Amount of time (in seconds) that the miner has staked their CLNY |
| `_submissonIndex` | `PromiseOrValue`<`BigNumberish`\> | Index of reputation hash submission (between 0 and 11) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.calculateMinerWeight

___

### checkNotAdditionalProtectedVariable

▸ **checkNotAdditionalProtectedVariable**(`_slot`, `overrides?`): `Promise`<`void`\>

No return value, but should throw if protected.This is external, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | The storage slot number to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`void`\>

#### Inherited from

IColonyNetwork.checkNotAdditionalProtectedVariable

___

### claimMiningReward

▸ **claimMiningReward**(`_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Can be called by anyone, not just _recipient
Used by a user to claim any mining rewards due to them. This will place them in their balance or pending balance, as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `PromiseOrValue`<`string`\> | The user whose rewards to claim |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.claimMiningReward

___

### connect

▸ **connect**(`signerOrProvider`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Inherited from

IColonyNetwork.connect

___

### createColony(address)

▸ **createColony(address)**(`_tokenAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

This is now deprecated and will be removed in a future versionFor the colony to mint tokens, token ownership must be transferred to the new colony
Creates a new colony in the network, at version 3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `PromiseOrValue`<`string`\> | Address of an ERC20 token to serve as the colony token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createColony(address)

___

### createColony(address,uint256,string)

▸ **createColony(address,uint256,string)**(`_tokenAddress`, `_version`, `_colonyName`, `overrides?`): `Promise`<`ContractTransaction`\>

For the colony to mint tokens, token ownership must be transferred to the new colony
Creates a new colony in the network, with an optional ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `PromiseOrValue`<`string`\> | Address of an ERC20 token to serve as the colony token |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `PromiseOrValue`<`string`\> | The label to register (if null, no label is registered) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createColony(address,uint256,string)

___

### createColony(address,uint256,string,string)

▸ **createColony(address,uint256,string,string)**(`_tokenAddress`, `_version`, `_colonyName`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

For the colony to mint tokens, token ownership must be transferred to the new colonyWe expect this function to only be used by the dapp
Creates a new colony in the network, with an optional ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `PromiseOrValue`<`string`\> | Address of an ERC20 token to serve as the colony token |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `PromiseOrValue`<`string`\> | The label to register (if null, no label is registered) |
| `_metadata` | `PromiseOrValue`<`string`\> | The metadata associated with the new colony |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createColony(address,uint256,string,string)

___

### createColony(address,uint256,string,string,bool)

▸ **createColony(address,uint256,string,string,bool)**(`_tokenAddress`, `_version`, `_colonyName`, `_orbitdb`, `_useExtensionManager`, `overrides?`): `Promise`<`ContractTransaction`\>

This is now deprecated and will be removed in a future versionFor the colony to mint tokens, token ownership must be transferred to the new colony
Overload of the simpler `createColony` -- creates a new colony in the network with a variety of options, at version 4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `PromiseOrValue`<`string`\> | Address of an ERC20 token to serve as the colony token |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `PromiseOrValue`<`string`\> | The label to register (if null, no label is registered) |
| `_orbitdb` | `PromiseOrValue`<`string`\> | DEPRECATED Currently a no-op |
| `_useExtensionManager` | `PromiseOrValue`<`boolean`\> | DEPRECATED Currently a no-op |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createColony(address,uint256,string,string,bool)

___

### createColonyForFrontend

▸ **createColonyForFrontend**(`_tokenAddress`, `_name`, `_symbol`, `_decimals`, `_version`, `_colonyName`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

We expect this function to only be used by the dapp
Creates a new colony in the network, possibly with a token and token authority, with an optional ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `PromiseOrValue`<`string`\> | Address of an ERC20 token to serve as the colony token (optional) |
| `_name` | `PromiseOrValue`<`string`\> | The name of the token (optional) |
| `_symbol` | `PromiseOrValue`<`string`\> | The short 'ticket' symbol for the token (optional) |
| `_decimals` | `PromiseOrValue`<`BigNumberish`\> | The number of decimal places that 1 user-facing token can be divided up in to (optional) In the case of ETH, and most tokens, this is 18. |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `PromiseOrValue`<`string`\> | The label to register (if null, no label is registered) |
| `_metadata` | `PromiseOrValue`<`string`\> | The metadata associated with the new colony |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createColonyForFrontend

___

### createMetaColony

▸ **createMetaColony**(`_tokenAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Create the Meta Colony, same as a normal colony plus the root skill.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `PromiseOrValue`<`string`\> | Address of the CLNY token |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createMetaColony

___

### deployToken

▸ **deployToken**(`name`, `symbol`, `decimals?`, `overrides?`): `Promise`<`ContractTransaction`\>

Deploy an ERC20 token contract, compatible with Colony

**`Remarks`**

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

___

### deployTokenAuthority

▸ **deployTokenAuthority**(`_token`, `_colony`, `_allowedToTransfer`, `overrides?`): `Promise`<`ContractTransaction`\>

This is more expensive than deploying a token directly, but is able to be done via a metatransaction
Called to deploy a token authority

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> | The address of the otken |
| `_colony` | `PromiseOrValue`<`string`\> | The address of the colony in control of the token |
| `_allowedToTransfer` | `PromiseOrValue`<`string`\>[] | An array of addresses that are allowed to transfer the token even if it's locked |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deployTokenAuthority

___

### deployTokenViaNetwork

▸ **deployTokenViaNetwork**(`_name`, `_symbol`, `_decimals`, `overrides?`): `Promise`<`ContractTransaction`\>

This is more expensive than deploying a token directly, but is able to be done via a metatransaction
Called to deploy a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_name` | `PromiseOrValue`<`string`\> | The name of the token |
| `_symbol` | `PromiseOrValue`<`string`\> | The short 'ticket' symbol for the token |
| `_decimals` | `PromiseOrValue`<`BigNumberish`\> | The number of decimal places that 1 user-facing token can be divided up in to In the case of ETH, and most tokens, this is 18. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deployTokenViaNetwork

___

### deployed

▸ **deployed**(): `Promise`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Returns

`Promise`<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

IColonyNetwork.deployed

___

### deprecateExtension

▸ **deprecateExtension**(`_extensionId`, `_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the deprecation of an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `_deprecated` | `PromiseOrValue`<`boolean`\> | Whether to deprecate the extension or not |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deprecateExtension

___

### deprecateSkill(uint256)

▸ **deprecateSkill(uint256)**(`_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

This function is deprecated and will be removed in a future release
Mark a skill as deprecated which stops new tasks and payments from using it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the skill |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deprecateSkill(uint256)

___

### deprecateSkill(uint256,bool)

▸ **deprecateSkill(uint256,bool)**(`_skillId`, `_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Set deprecation status for a skill

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the skill |
| `_deprecated` | `PromiseOrValue`<`boolean`\> | Deprecation status |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deprecateSkill(uint256,bool)

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

IColonyNetwork.emit

___

### enterRecoveryMode

▸ **enterRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.enterRecoveryMode

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Executes a metatransaction targeting this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `PromiseOrValue`<`string`\> | The address of the user that signed the metatransaction |
| `payload` | `PromiseOrValue`<`BytesLike`\> | The transaction data that will be executed if signature valid |
| `sigR` | `PromiseOrValue`<`BytesLike`\> | The 'r' part of the signature |
| `sigS` | `PromiseOrValue`<`BytesLike`\> | The 's' part of the signature |
| `sigV` | `PromiseOrValue`<`BigNumberish`\> | The 'v' part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.executeMetaTransaction

___

### exitRecoveryMode

▸ **exitRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Exit recovery mode, can be called by anyone if enough whitelist approvals are given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.exitRecoveryMode

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

IColonyNetwork.fallback

___

### getChildSkillId

▸ **getChildSkillId**(`_skillId`, `_childSkillIndex`, `overrides?`): `Promise`<`BigNumber`\>

Get the id of the child skill at index `_childSkillIndex` for skill with Id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the skill |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | Index of the `skill.children` array to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getChildSkillId

___

### getColony

▸ **getColony**(`_id`, `overrides?`): `Promise`<`string`\>

Get a colony address by its Id in the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | Id of the colony to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getColony

___

### getColonyClient

▸ **getColonyClient**(`addressOrId`): `Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

Get a ColonyClient instance for the currently deployed version of that Colony by providing the address or the integer colony number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addressOrId` | `string` \| `number` | The colony address (string) or the auto-incremented Colony id (integer) |

#### Returns

`Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

The corresponding initialized ColonyClient instance

___

### getColonyCount

▸ **getColonyCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of colonies in the network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getColonyCount

___

### getColonyVersionResolver

▸ **getColonyVersionResolver**(`_version`, `overrides?`): `Promise`<`string`\>

Get the `Resolver` address for Colony contract version `_version`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | The Colony contract version |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getColonyVersionResolver

___

### getCurrentColonyVersion

▸ **getCurrentColonyVersion**(`overrides?`): `Promise`<`BigNumber`\>

Returns the latest Colony contract version. This is the version used to create all new colonies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getCurrentColonyVersion

___

### getENSRegistrar

▸ **getENSRegistrar**(`overrides?`): `Promise`<`string`\>

Returns the address of the ENSRegistrar for the Network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getENSRegistrar

___

### getExtensionInstallation

▸ **getExtensionInstallation**(`_extensionId`, `_colony`, `overrides?`): `Promise`<`string`\>

Get an extension's installation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `_colony` | `PromiseOrValue`<`string`\> | Address of the colony the extension is installed in |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getExtensionInstallation

___

### getExtensionResolver

▸ **getExtensionResolver**(`_extensionId`, `_version`, `overrides?`): `Promise`<`string`\>

Get an extension's resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | Version of the extension |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getExtensionResolver

___

### getFeeInverse

▸ **getFeeInverse**(`overrides?`): `Promise`<`BigNumber`\>

Return 1 / the fee to pay to the network. e.g. if the fee is 1% (or 0.01), return 100.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getFeeInverse

___

### getMetaColony

▸ **getMetaColony**(`overrides?`): `Promise`<`string`\>

Get the Meta Colony address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getMetaColony

___

### getMetaColonyClient

▸ **getMetaColonyClient**(): `Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

Get the initialized MetaColony client

#### Returns

`Promise`<[`AnyColonyClient`](../README.md#anycolonyclient)\>

a ColonyClient instance of the MetaColony (id: 1)

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next metatransaction nonce for user that should be used targeting this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `PromiseOrValue`<`string`\> | The address of the user that will sign the metatransaction |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getMetatransactionNonce

___

### getMiningDelegator

▸ **getMiningDelegator**(`_delegate`, `overrides?`): `Promise`<`string`\>

Called to get the address _delegate is allowed to mine for

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `PromiseOrValue`<`string`\> | The address that wants to mine |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getMiningDelegator

___

### getMiningResolver

▸ **getMiningResolver**(`overrides?`): `Promise`<`string`\>

Get the resolver to be used by new instances of ReputationMiningCycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getMiningResolver

___

### getMiningStake

▸ **getMiningStake**(`_user`, `overrides?`): `Promise`<`MiningStakeStructOutput`\>

returns how much CLNY _user has staked for the purposes of reputation mining

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The user to query |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`MiningStakeStructOutput`\>

#### Inherited from

IColonyNetwork.getMiningStake

___

### getParentSkillId

▸ **getParentSkillId**(`_skillId`, `_parentSkillIndex`, `overrides?`): `Promise`<`BigNumber`\>

Get the id of the parent skill at index `_parentSkillIndex` for skill with Id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the skill |
| `_parentSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | Index of the `skill.parents` array to get Note that not all parent skill ids are stored here. See `Skill.parents` member for definition on which parents are stored |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getParentSkillId

___

### getPayoutWhitelist

▸ **getPayoutWhitelist**(`_token`, `overrides?`): `Promise`<`boolean`\>

Get a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> | The token being queried |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.getPayoutWhitelist

___

### getProfileDBAddress

▸ **getProfileDBAddress**(`_node`, `overrides?`): `Promise`<`string`\>

Retrieve the orbitdb address corresponding to a registered account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_node` | `PromiseOrValue`<`BytesLike`\> | The Namehash of the account being queried. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getProfileDBAddress

___

### getReplacementReputationUpdateLogEntry

▸ **getReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `overrides?`): `Promise`<`ReputationLogEntryStructOutput`\>

Get a replacement log entry (if set) for the log entry `_id` in the mining cycle that was at the address `_reputationMiningCycle`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `PromiseOrValue`<`string`\> | The address of the reputation mining cycle we are asking about |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The log entry number we wish to see if there is a replacement for |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ReputationLogEntryStructOutput`\>

#### Inherited from

IColonyNetwork.getReplacementReputationUpdateLogEntry

___

### getReplacementReputationUpdateLogsExist

▸ **getReplacementReputationUpdateLogsExist**(`_reputationMiningCycle`, `overrides?`): `Promise`<`boolean`\>

Get whether any replacement log entries have been set for the supplied reputation mining cycle.Used by the client to avoid doubling the number of RPC calls when syncing from scratch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `PromiseOrValue`<`string`\> | The reputation mining cycle address we want to know if any entries have been replaced in. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.getReplacementReputationUpdateLogsExist

___

### getReputationMiningCycle

▸ **getReputationMiningCycle**(`_active`, `overrides?`): `Promise`<`string`\>

Get the address of either the active or inactive reputation mining cycle, based on `active`. The active reputation mining cycle is the one currently under consideration by reputation miners. The inactive reputation cycle is the one with the log that is being appended to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_active` | `PromiseOrValue`<`boolean`\> | Whether the user wants the active or inactive reputation mining cycle |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getReputationMiningCycle

___

### getReputationMiningCycleReward

▸ **getReputationMiningCycleReward**(`overrides?`): `Promise`<`BigNumber`\>

Called to get the total per-cycle reputation mining reward.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationMiningCycleReward

___

### getReputationMiningSkillId

▸ **getReputationMiningSkillId**(`overrides?`): `Promise`<`BigNumber`\>

Get the `skillId` of the reputation mining skill. Only set once the metacolony is set up.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationMiningSkillId

___

### getReputationRootHash

▸ **getReputationRootHash**(`overrides?`): `Promise`<`string`\>

Get the root hash of the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getReputationRootHash

___

### getReputationRootHashNLeaves

▸ **getReputationRootHashNLeaves**(`overrides?`): `Promise`<`BigNumber`\>

I cannot see a reason why a user's client would need to call this - only stored to help with some edge cases in reputation mining dispute resolution.
Get the number of leaves in the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationRootHashNLeaves

___

### getReputationRootHashNNodes

▸ **getReputationRootHashNNodes**(`overrides?`): `Promise`<`BigNumber`\>

Deprecated, replaced by getReputationRootHashNLeaves which does the same thing but is more accurately named.will be removed in a later version.
Get the number of leaves in the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationRootHashNNodes

___

### getSkill

▸ **getSkill**(`_skillId`, `overrides?`): `Promise`<`SkillStructOutput`\>

Get the `nParents` and `nChildren` of skill with id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | Id of the skill |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`SkillStructOutput`\>

#### Inherited from

IColonyNetwork.getSkill

___

### getSkillCount

▸ **getSkillCount**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of skills in the network including both global and local skills.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getSkillCount

___

### getTokenLocking

▸ **getTokenLocking**(`overrides?`): `Promise`<`string`\>

Get token locking contract address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getTokenLocking

___

### getTokenLockingClient

▸ **getTokenLockingClient**(): `Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

Gets the TokenLockingClient

#### Returns

`Promise`<[`TokenLockingClient`](TokenLockingClient.md)\>

an initialized version of the TokenLockingClient

___

### initialise

▸ **initialise**(`_resolver`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

Only allowed to be run once, by the Network owner before any Colony versions are added.
Initialises the colony network by setting the first Colony version resolver to `_resolver` address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_resolver` | `PromiseOrValue`<`string`\> | Address of the resolver for Colony contract |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | Version of the Colony contract the resolver represents |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialise

___

### initialiseReputationMining

▸ **initialiseReputationMining**(`overrides?`): `Promise`<`ContractTransaction`\>

Creates initial inactive reputation mining cycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialiseReputationMining

___

### initialiseRootLocalSkill

▸ **initialiseRootLocalSkill**(`overrides?`): `Promise`<`ContractTransaction`\>

Initialise the local skills tree for a colony

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialiseRootLocalSkill

___

### installExtension

▸ **installExtension**(`_extensionId`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

Install an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `_version` | `PromiseOrValue`<`BigNumberish`\> | Version of the extension to install |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.installExtension

___

### isColony

▸ **isColony**(`_colony`, `overrides?`): `Promise`<`boolean`\>

Check if specific address is a colony created on colony network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `PromiseOrValue`<`string`\> | Address of the colony |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.isColony

___

### isInRecoveryMode

▸ **isInRecoveryMode**(`overrides?`): `Promise`<`boolean`\>

Is colony network in recovery mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.isInRecoveryMode

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

IColonyNetwork.listenerCount

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

IColonyNetwork.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

IColonyNetwork.listeners

___

### lookupRegisteredENSDomain

▸ **lookupRegisteredENSDomain**(`_addr`, `overrides?`): `Promise`<`string`\>

Reverse lookup a username from an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_addr` | `PromiseOrValue`<`string`\> | The address we wish to find the corresponding ENS domain for (if any) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.lookupRegisteredENSDomain

___

### lookupRegisteredENSDomainWithNetworkPatches

▸ **lookupRegisteredENSDomainWithNetworkPatches**(`address`): `Promise`<`string`\>

Like [[`lookupRegisteredENSDomain`]], but also working on the Goerli testnet

**`Remarks`**

On Goerli, all ens domains have the `.test` suffix. The contracts return `.eth` anyways.
We patch the original function to fix this problem. On any other network it will return the
original function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | Address we want to look up |

#### Returns

`Promise`<`string`\>

an ENS name in the form of `[username].user.joincolony.eth` or `[colonyName].colony.joincolony.eth`

___

### multicall

▸ **multicall**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

The `msg.value` should not be trusted for any method callable from multicall.
Call multiple functions in the current contract and return the data from all of them if they all succeed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `PromiseOrValue`<`BytesLike`\>[] | The encoded function data for each of the calls to make to this contract |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.multicall

___

### numRecoveryRoles

▸ **numRecoveryRoles**(`overrides?`): `Promise`<`BigNumber`\>

Return number of recovery roles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.numRecoveryRoles

___

### punishStakers

▸ **punishStakers**(`_stakers`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

While external, it can only be called successfully by the current ReputationMiningCycle.
Function called to punish people who staked against a new reputation root hash that turned out to be incorrect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_stakers` | `PromiseOrValue`<`string`\>[] | Array of the addresses of stakers to punish |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of stake to slash |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.punishStakers

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

IColonyNetwork.queryFilter

___

### registerColonyLabel

▸ **registerColonyLabel**(`_colonyName`, `_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register a "colony.joincolony.eth" label. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colonyName` | `PromiseOrValue`<`string`\> | The label to register. |
| `_orbitdb` | `PromiseOrValue`<`string`\> | The path of the orbitDB database associated with the colony name |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.registerColonyLabel

___

### registerUserLabel

▸ **registerUserLabel**(`_username`, `_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register a "user.joincolony.eth" label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_username` | `PromiseOrValue`<`string`\> | The label to register |
| `_orbitdb` | `PromiseOrValue`<`string`\> | The path of the orbitDB database associated with the user profile |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.registerUserLabel

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

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

#### Inherited from

IColonyNetwork.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Inherited from

IColonyNetwork.removeAllListeners

___

### removeRecoveryRole

▸ **removeRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Remove colony recovery role. Can only be called by root role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | User we want to remove recovery role from |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.removeRecoveryRole

___

### reward

▸ **reward**(`_recipient`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the active reputation mining cycle
Used to track that a user is eligible to claim a reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `PromiseOrValue`<`string`\> | The address receiving the award |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of CLNY to be awarded |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.reward

___

### setFeeInverse

▸ **setFeeInverse**(`_feeInverse`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the colony network fee to pay. e.g. if the fee is 1% (or 0.01), pass 100 as `_feeInverse`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_feeInverse` | `PromiseOrValue`<`BigNumberish`\> | The inverse of the network fee to set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setFeeInverse

___

### setMiningDelegate

▸ **setMiningDelegate**(`_delegate`, `_allowed`, `overrides?`): `Promise`<`ContractTransaction`\>

Called to give or remove another address's permission to mine on your behalf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `PromiseOrValue`<`string`\> | The address you're giving or removing permission from |
| `_allowed` | `PromiseOrValue`<`boolean`\> | Whether they are allowed (true) or not (false) to mine on your behalf |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setMiningDelegate

___

### setMiningResolver

▸ **setMiningResolver**(`_miningResolverAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the resolver to be used by new instances of ReputationMiningCycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_miningResolverAddress` | `PromiseOrValue`<`string`\> | The address of the Resolver contract with the functions correctly wired. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setMiningResolver

___

### setPayoutWhitelist

▸ **setPayoutWhitelist**(`_token`, `_status`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> | The token being set |
| `_status` | `PromiseOrValue`<`boolean`\> | The whitelist status |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setPayoutWhitelist

___

### setRecoveryRole

▸ **setRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony recovery role. Can be called by root.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | User we want to give a recovery role to |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setRecoveryRole

___

### setReplacementReputationUpdateLogEntry

▸ **setReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `_user`, `_amount`, `_skillId`, `_colony`, `_nUpdates`, `_nPreviousUpdates`, `overrides?`): `Promise`<`ContractTransaction`\>

Note that strictly, `_nUpdates` and `_nPreviousUpdates` don't need to be set - they're only used during dispute resolution, which these replacement log entries are never used for. However, for ease of resyncing the client, we have decided to include them for now.
Set a replacement log entry if we're in recovery mode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `PromiseOrValue`<`string`\> | The address of the reputation mining cycle that the log was in. |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The number of the log entry in the reputation mining cycle in question. |
| `_user` | `PromiseOrValue`<`string`\> | The address of the user earning / losing the reputation |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of reputation being earned / lost |
| `_skillId` | `PromiseOrValue`<`BigNumberish`\> | The id of the origin skill for the reputation update |
| `_colony` | `PromiseOrValue`<`string`\> | The address of the colony being updated |
| `_nUpdates` | `PromiseOrValue`<`BigNumberish`\> | The number of updates the log entry corresponds to |
| `_nPreviousUpdates` | `PromiseOrValue`<`BigNumberish`\> | The number of updates in the log before this entry |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReplacementReputationUpdateLogEntry

___

### setReputationMiningCycleReward

▸ **setReputationMiningCycleReward**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.
Called to set the total per-cycle reputation reward, which will be split between all miners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The CLNY awarded per mining cycle to the miners |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReputationMiningCycleReward

___

### setReputationRootHash

▸ **setReputationRootHash**(`_newHash`, `_newNLeaves`, `_stakers`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a new Reputation root hash and starts a new mining cycle. Can only be called by the ReputationMiningCycle contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_newHash` | `PromiseOrValue`<`BytesLike`\> | The reputation root hash |
| `_newNLeaves` | `PromiseOrValue`<`BigNumberish`\> | The updated leaves count value |
| `_stakers` | `PromiseOrValue`<`string`\>[] | Array of users who submitted or backed the hash, being accepted here as the new reputation root hash |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReputationRootHash

___

### setStorageSlotRecovery

▸ **setStorageSlotRecovery**(`_slot`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

certain critical variables are protected from editing in this function
Update value of arbitrary storage variable. Can only be called by user with recovery role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `PromiseOrValue`<`BigNumberish`\> | Uint address of storage slot to be updated |
| `_value` | `PromiseOrValue`<`BytesLike`\> | word of data to be set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setStorageSlotRecovery

___

### setTokenLocking

▸ **setTokenLocking**(`_tokenLockingAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the token locking address. This is only set once, and can't be changed afterwards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenLockingAddress` | `PromiseOrValue`<`string`\> | Address of the locking contract |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setTokenLocking

___

### setupRegistrar

▸ **setupRegistrar**(`_ens`, `_rootNode`, `overrides?`): `Promise`<`ContractTransaction`\>

Setup registrar with ENS and root node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_ens` | `PromiseOrValue`<`string`\> | Address of ENS registrar |
| `_rootNode` | `PromiseOrValue`<`BytesLike`\> | Namehash of the root node for the domain |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setupRegistrar

___

### stakeForMining

▸ **stakeForMining**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Stake CLNY to allow the staker to participate in reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of CLNY to stake for the purposes of mining |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.stakeForMining

___

### startNextCycle

▸ **startNextCycle**(`overrides?`): `Promise`<`ContractTransaction`\>

Starts a new Reputation Mining cycle. Explicitly called only the first time, subsequently called from within `setReputationRootHash`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.startNextCycle

___

### startTokenAuction

▸ **startTokenAuction**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Create and start a new `DutchAuction` for the entire amount of `_token` owned by the Colony Network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `PromiseOrValue`<`string`\> | Address of the token held by the network to be auctioned |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.startTokenAuction

___

### supportsInterface

▸ **supportsInterface**(`_interfaceID`, `overrides?`): `Promise`<`boolean`\>

Interface identification is specified in ERC-165.
Query if a contract implements an interface

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_interfaceID` | `PromiseOrValue`<`BytesLike`\> | The interface identifier, as specified in ERC-165 |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.supportsInterface

___

### uninstallExtension

▸ **uninstallExtension**(`_extensionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Uninstall an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.uninstallExtension

___

### unstakeForMining

▸ **unstakeForMining**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Unstake CLNY currently staked for reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | Amount of CLNY staked for mining to unstake |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.unstakeForMining

___

### updateColonyOrbitDB

▸ **updateColonyOrbitDB**(`_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_orbitdb` | `PromiseOrValue`<`string`\> | The path of the orbitDB database to be associated with the colony |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.updateColonyOrbitDB

___

### updateUserOrbitDB

▸ **updateUserOrbitDB**(`_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a user's orbitdb address. Can only be called by a user with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_orbitdb` | `PromiseOrValue`<`string`\> | The path of the orbitDB database to be associated with the user |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.updateUserOrbitDB

___

### upgradeExtension

▸ **upgradeExtension**(`_extensionId`, `_newVersion`, `overrides?`): `Promise`<`ContractTransaction`\>

Upgrade an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `PromiseOrValue`<`BytesLike`\> | keccak256 hash of the extension name, used as an indentifier |
| `_newVersion` | `PromiseOrValue`<`BigNumberish`\> | Version of the extension to upgrade to (must be one greater than current) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.upgradeExtension
