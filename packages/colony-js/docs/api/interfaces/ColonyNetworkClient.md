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
| `addColonyVersion` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addColonyVersion(uint256,address)` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addExtensionToNetwork` | (`_extensionId`: `BytesLike`, `_resolver`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addExtensionToNetwork(bytes32,address)` | (`_extensionId`: `BytesLike`, `_resolver`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addSkill` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addSkill(uint256)` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addr` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `addr(bytes32)` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `appendReputationUpdateLog` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `appendReputationUpdateLog(address,int256,uint256)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveExitRecovery` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveExitRecovery()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burnUnneededRewards` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `burnUnneededRewards(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `calculateMinerWeight` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateMinerWeight(uint256,uint256)` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `checkNotAdditionalProtectedVariable(uint256)` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimMiningReward` | (`_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimMiningReward(address)` | (`_recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_orbitdb`: `string`, `_useExtensionManager`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `createColonyForFrontend` | (`_tokenAddress`: `string`, `_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `colony`: `string` ; `token`: `string`  }\> |
| `createColonyForFrontend(address,string,string,uint8,uint256,string,string)` | (`_tokenAddress`: `string`, `_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `colony`: `string` ; `token`: `string`  }\> |
| `createMetaColony` | (`_tokenAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMetaColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deployTokenAuthority` | (`_token`: `string`, `_colony`: `string`, `_allowedToTransfer`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deployTokenAuthority(address,address,address[])` | (`_token`: `string`, `_colony`: `string`, `_allowedToTransfer`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deployTokenViaNetwork` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deployTokenViaNetwork(string,string,uint8)` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecateExtension` | (`_extensionId`: `BytesLike`, `_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateExtension(bytes32,bool)` | (`_extensionId`: `BytesLike`, `_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `BigNumberish`, `_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `enterRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `enterRecoveryMode()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `exitRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `exitRecoveryMode()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getChildSkillId` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChildSkillId(uint256,uint256)` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyCount()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColonyVersionResolver` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColonyVersionResolver(uint256)` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentColonyVersion()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getENSRegistrar()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionInstallation` | (`_extensionId`: `BytesLike`, `_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionInstallation(bytes32,address)` | (`_extensionId`: `BytesLike`, `_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionResolver` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getExtensionResolver(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFeeInverse()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMetaColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMiningDelegator` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningDelegator(address)` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningResolver()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMiningStake` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`MiningStakeStructOutput`\> |
| `getMiningStake(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`MiningStakeStructOutput`\> |
| `getParentSkillId` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getParentSkillId(uint256,uint256)` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPayoutWhitelist` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getPayoutWhitelist(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getProfileDBAddress` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getProfileDBAddress(bytes32)` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`ReputationLogEntryStructOutput`\> |
| `getReplacementReputationUpdateLogEntry(address,uint256)` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`ReputationLogEntryStructOutput`\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getReplacementReputationUpdateLogsExist(address)` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getReputationMiningCycle` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationMiningCycle(bool)` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationMiningCycleReward()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationMiningSkillId()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationRootHash()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHashNLeaves()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getReputationRootHashNNodes()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSkill` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`SkillStructOutput`\> |
| `getSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`SkillStructOutput`\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSkillCount()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getTokenLocking()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialise(address,uint256)` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialiseReputationMining` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialiseReputationMining()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialiseRootLocalSkill()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `installExtension` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `installExtension(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isColony` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isColony(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isInRecoveryMode()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `lookupRegisteredENSDomain` | (`_addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `lookupRegisteredENSDomain(address)` | (`_addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `numRecoveryRoles()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `punishStakers` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `punishStakers(address[],uint256)` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerColonyLabel` | (`_colonyName`: `string`, `_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerColonyLabel(string,string)` | (`_colonyName`: `string`, `_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserLabel` | (`_username`: `string`, `_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserLabel(string,string)` | (`_username`: `string`, `_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeRecoveryRole(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `reward(address,uint256)` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFeeInverse` | (`_feeInverse`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFeeInverse(uint256)` | (`_feeInverse`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningDelegate` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningDelegate(address,bool)` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningResolver` | (`_miningResolverAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMiningResolver(address)` | (`_miningResolverAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPayoutWhitelist` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setPayoutWhitelist(address,bool)` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setRecoveryRole(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationMiningCycleReward` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationMiningCycleReward(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationRootHash` | (`_newHash`: `BytesLike`, `_newNLeaves`: `BigNumberish`, `_stakers`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setReputationRootHash(bytes32,uint256,address[])` | (`_newHash`: `BytesLike`, `_newNLeaves`: `BigNumberish`, `_stakers`: `string`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStorageSlotRecovery(uint256,bytes32)` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenLocking(address)` | (`_tokenLockingAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setupRegistrar` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setupRegistrar(address,bytes32)` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `stakeForMining(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startNextCycle` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startNextCycle()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startTokenAuction` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startTokenAuction(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`_interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `supportsInterface(bytes4)` | (`_interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `uninstallExtension` | (`_extensionId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstallExtension(bytes32)` | (`_extensionId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unstakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unstakeForMining(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateColonyOrbitDB` | (`_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateColonyOrbitDB(string)` | (`_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateUserOrbitDB` | (`_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateUserOrbitDB(string)` | (`_orbitdb`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeExtension` | (`_extensionId`: `BytesLike`, `_newVersion`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `upgradeExtension(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_newVersion`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

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

#### Inherited from

IColonyNetwork.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addColonyVersion` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `addColonyVersion(uint256,address)` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `addExtensionToNetwork` | (`_extensionId`: `BytesLike`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `addExtensionToNetwork(bytes32,address)` | (`_extensionId`: `BytesLike`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `addSkill` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `addSkill(uint256)` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `addr` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_address`: `string`  }\> |
| `addr(bytes32)` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_address`: `string`  }\> |
| `appendReputationUpdateLog` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `appendReputationUpdateLog(address,int256,uint256)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `approveExitRecovery()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `burnUnneededRewards` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `burnUnneededRewards(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `calculateMinerWeight` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_minerWeight`: `BigNumber`  }\> |
| `calculateMinerWeight(uint256,uint256)` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_minerWeight`: `BigNumber`  }\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `checkNotAdditionalProtectedVariable(uint256)` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`void`]\> |
| `claimMiningReward` | (`_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `claimMiningReward(address)` | (`_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_orbitdb`: `string`, `_useExtensionManager`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createColonyForFrontend` | (`_tokenAddress`: `string`, `_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createColonyForFrontend(address,string,string,uint8,uint256,string,string)` | (`_tokenAddress`: `string`, `_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createMetaColony` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `createMetaColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenAuthority` | (`_token`: `string`, `_colony`: `string`, `_allowedToTransfer`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenAuthority(address,address,address[])` | (`_token`: `string`, `_colony`: `string`, `_allowedToTransfer`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenViaNetwork` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deployTokenViaNetwork(string,string,uint8)` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecateExtension` | (`_extensionId`: `BytesLike`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecateExtension(bytes32,bool)` | (`_extensionId`: `BytesLike`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `BigNumberish`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `enterRecoveryMode()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `exitRecoveryMode()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getChildSkillId` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_childSkillId`: `BigNumber`  }\> |
| `getChildSkillId(uint256,uint256)` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_childSkillId`: `BigNumber`  }\> |
| `getColony` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_colonyAddress`: `string`  }\> |
| `getColony(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_colonyAddress`: `string`  }\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getColonyCount()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getColonyVersionResolver` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_resolverAddress`: `string`  }\> |
| `getColonyVersionResolver(uint256)` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_resolverAddress`: `string`  }\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `getCurrentColonyVersion()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_address`: `string`  }\> |
| `getENSRegistrar()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_address`: `string`  }\> |
| `getExtensionInstallation` | (`_extensionId`: `BytesLike`, `_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_installation`: `string`  }\> |
| `getExtensionInstallation(bytes32,address)` | (`_extensionId`: `BytesLike`, `_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_installation`: `string`  }\> |
| `getExtensionResolver` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_resolver`: `string`  }\> |
| `getExtensionResolver(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_resolver`: `string`  }\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_feeInverse`: `BigNumber`  }\> |
| `getFeeInverse()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_feeInverse`: `BigNumber`  }\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_colonyAddress`: `string`  }\> |
| `getMetaColony()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_colonyAddress`: `string`  }\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMiningDelegator` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_delegator`: `string`  }\> |
| `getMiningDelegator(address)` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_delegator`: `string`  }\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `miningResolverAddress`: `string`  }\> |
| `getMiningResolver()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `miningResolverAddress`: `string`  }\> |
| `getMiningStake` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`MiningStakeStructOutput`] & { `_info`: `MiningStakeStructOutput`  }\> |
| `getMiningStake(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`MiningStakeStructOutput`] & { `_info`: `MiningStakeStructOutput`  }\> |
| `getParentSkillId` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_parentSkillId`: `BigNumber`  }\> |
| `getParentSkillId(uint256,uint256)` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_parentSkillId`: `BigNumber`  }\> |
| `getPayoutWhitelist` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getPayoutWhitelist(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getProfileDBAddress` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_orbitdb`: `string`  }\> |
| `getProfileDBAddress(bytes32)` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_orbitdb`: `string`  }\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`ReputationLogEntryStructOutput`] & { `_reputationLogEntry`: `ReputationLogEntryStructOutput`  }\> |
| `getReplacementReputationUpdateLogEntry(address,uint256)` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`ReputationLogEntryStructOutput`] & { `_reputationLogEntry`: `ReputationLogEntryStructOutput`  }\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_exists`: `boolean`  }\> |
| `getReplacementReputationUpdateLogsExist(address)` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_exists`: `boolean`  }\> |
| `getReputationMiningCycle` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_repMiningCycleAddress`: `string`  }\> |
| `getReputationMiningCycle(bool)` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_repMiningCycleAddress`: `string`  }\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_amount`: `BigNumber`  }\> |
| `getReputationMiningCycleReward()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_amount`: `BigNumber`  }\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_skillId`: `BigNumber`  }\> |
| `getReputationMiningSkillId()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_skillId`: `BigNumber`  }\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `rootHash`: `string`  }\> |
| `getReputationRootHash()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `rootHash`: `string`  }\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nLeaves`: `BigNumber`  }\> |
| `getReputationRootHashNLeaves()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nLeaves`: `BigNumber`  }\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nNodes`: `BigNumber`  }\> |
| `getReputationRootHashNNodes()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nNodes`: `BigNumber`  }\> |
| `getSkill` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`SkillStructOutput`] & { `_skill`: `SkillStructOutput`  }\> |
| `getSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`SkillStructOutput`] & { `_skill`: `SkillStructOutput`  }\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getSkillCount()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_count`: `BigNumber`  }\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_lockingAddress`: `string`  }\> |
| `getTokenLocking()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_lockingAddress`: `string`  }\> |
| `initialise` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialise(address,uint256)` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialiseReputationMining` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialiseReputationMining()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialiseRootLocalSkill()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `installExtension` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `installExtension(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `isColony` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_addressIsColony`: `boolean`  }\> |
| `isColony(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_addressIsColony`: `boolean`  }\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `inRecoveryMode`: `boolean`  }\> |
| `isInRecoveryMode()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `inRecoveryMode`: `boolean`  }\> |
| `lookupRegisteredENSDomain` | (`_addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_domain`: `string`  }\> |
| `lookupRegisteredENSDomain(address)` | (`_addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_domain`: `string`  }\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numRoles`: `BigNumber`  }\> |
| `numRecoveryRoles()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numRoles`: `BigNumber`  }\> |
| `punishStakers` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `punishStakers(address[],uint256)` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `registerColonyLabel` | (`_colonyName`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `registerColonyLabel(string,string)` | (`_colonyName`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `registerUserLabel` | (`_username`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `registerUserLabel(string,string)` | (`_username`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `removeRecoveryRole(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `reward(address,uint256)` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setFeeInverse` | (`_feeInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setFeeInverse(uint256)` | (`_feeInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setMiningDelegate` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setMiningDelegate(address,bool)` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setMiningResolver` | (`_miningResolverAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setMiningResolver(address)` | (`_miningResolverAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setPayoutWhitelist` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setPayoutWhitelist(address,bool)` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setRecoveryRole(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setReputationMiningCycleReward` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setReputationMiningCycleReward(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setReputationRootHash` | (`_newHash`: `BytesLike`, `_newNLeaves`: `BigNumberish`, `_stakers`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setReputationRootHash(bytes32,uint256,address[])` | (`_newHash`: `BytesLike`, `_newNLeaves`: `BigNumberish`, `_stakers`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setStorageSlotRecovery(uint256,bytes32)` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setTokenLocking(address)` | (`_tokenLockingAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setupRegistrar` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setupRegistrar(address,bytes32)` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `stakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `stakeForMining(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `startNextCycle` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `startNextCycle()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `startTokenAuction` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `startTokenAuction(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`_interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `supportsInterface(bytes4)` | (`_interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `uninstallExtension` | (`_extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstallExtension(bytes32)` | (`_extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `unstakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `unstakeForMining(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `updateColonyOrbitDB` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `updateColonyOrbitDB(string)` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `updateUserOrbitDB` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `updateUserOrbitDB(string)` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `upgradeExtension` | (`_extensionId`: `BytesLike`, `_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `upgradeExtension(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |

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
| `addColonyVersion` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `addColonyVersion(uint256,address)` | (`_version`: `BigNumberish`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `addExtensionToNetwork` | (`_extensionId`: `BytesLike`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `addExtensionToNetwork(bytes32,address)` | (`_extensionId`: `BytesLike`, `_resolver`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `addSkill` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `addSkill(uint256)` | (`_parentSkillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `addr` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `addr(bytes32)` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `appendReputationUpdateLog` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `appendReputationUpdateLog(address,int256,uint256)` | (`_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `approveExitRecovery` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `approveExitRecovery()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `burnUnneededRewards` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `burnUnneededRewards(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateMinerWeight` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateMinerWeight(uint256,uint256)` | (`_timeStaked`: `BigNumberish`, `_submissonIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `checkNotAdditionalProtectedVariable` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `checkNotAdditionalProtectedVariable(uint256)` | (`_slot`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimMiningReward` | (`_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `claimMiningReward(address)` | (`_recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string,string)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createColony(address,uint256,string,string,bool)` | (`_tokenAddress`: `string`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_orbitdb`: `string`, `_useExtensionManager`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createColonyForFrontend` | (`_tokenAddress`: `string`, `_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createColonyForFrontend(address,string,string,uint8,uint256,string,string)` | (`_tokenAddress`: `string`, `_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `_version`: `BigNumberish`, `_colonyName`: `string`, `_metadata`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createMetaColony` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `createMetaColony(address)` | (`_tokenAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenAuthority` | (`_token`: `string`, `_colony`: `string`, `_allowedToTransfer`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenAuthority(address,address,address[])` | (`_token`: `string`, `_colony`: `string`, `_allowedToTransfer`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenViaNetwork` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deployTokenViaNetwork(string,string,uint8)` | (`_name`: `string`, `_symbol`: `string`, `_decimals`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateExtension` | (`_extensionId`: `BytesLike`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateExtension(bytes32,bool)` | (`_extensionId`: `BytesLike`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecateSkill(uint256,bool)` | (`_skillId`: `BigNumberish`, `_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `enterRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `enterRecoveryMode()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`userAddress`: `string`, `payload`: `BytesLike`, `sigR`: `BytesLike`, `sigS`: `BytesLike`, `sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `exitRecoveryMode` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `exitRecoveryMode()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getChildSkillId` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChildSkillId(uint256,uint256)` | (`_skillId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyCount()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyVersionResolver` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColonyVersionResolver(uint256)` | (`_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentColonyVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentColonyVersion()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getENSRegistrar` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getENSRegistrar()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionInstallation` | (`_extensionId`: `BytesLike`, `_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionInstallation(bytes32,address)` | (`_extensionId`: `BytesLike`, `_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionResolver` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getExtensionResolver(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFeeInverse` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFeeInverse()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetaColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetaColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningDelegator` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningDelegator(address)` | (`_delegate`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningResolver` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningResolver()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningStake` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMiningStake(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getParentSkillId` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getParentSkillId(uint256,uint256)` | (`_skillId`: `BigNumberish`, `_parentSkillIndex`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPayoutWhitelist` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPayoutWhitelist(address)` | (`_token`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProfileDBAddress` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProfileDBAddress(bytes32)` | (`_node`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogEntry(address,uint256)` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogsExist` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReplacementReputationUpdateLogsExist(address)` | (`_reputationMiningCycle`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycle` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycle(bool)` | (`_active`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycleReward` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningCycleReward()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningSkillId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationMiningSkillId()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHash` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHash()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNLeaves` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNLeaves()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNNodes` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getReputationRootHashNNodes()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkill` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkill(uint256)` | (`_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkillCount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSkillCount()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenLocking` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenLocking()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialise(address,uint256)` | (`_resolver`: `string`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseReputationMining` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseReputationMining()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseRootLocalSkill` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialiseRootLocalSkill()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `installExtension` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `installExtension(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_version`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `isColony` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isColony(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInRecoveryMode` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isInRecoveryMode()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lookupRegisteredENSDomain` | (`_addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lookupRegisteredENSDomain(address)` | (`_addr`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `numRecoveryRoles` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `numRecoveryRoles()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `punishStakers` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `punishStakers(address[],uint256)` | (`_stakers`: `string`[], `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `registerColonyLabel` | (`_colonyName`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `registerColonyLabel(string,string)` | (`_colonyName`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserLabel` | (`_username`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserLabel(string,string)` | (`_username`: `string`, `_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `removeRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `removeRecoveryRole(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `reward` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `reward(address,uint256)` | (`_recipient`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeInverse` | (`_feeInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setFeeInverse(uint256)` | (`_feeInverse`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningDelegate` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningDelegate(address,bool)` | (`_delegate`: `string`, `_allowed`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningResolver` | (`_miningResolverAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setMiningResolver(address)` | (`_miningResolverAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setPayoutWhitelist` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setPayoutWhitelist(address,bool)` | (`_token`: `string`, `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setRecoveryRole` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setRecoveryRole(address)` | (`_user`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setReplacementReputationUpdateLogEntry` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)` | (`_reputationMiningCycle`: `string`, `_id`: `BigNumberish`, `_user`: `string`, `_amount`: `BigNumberish`, `_skillId`: `BigNumberish`, `_colony`: `string`, `_nUpdates`: `BigNumberish`, `_nPreviousUpdates`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationMiningCycleReward` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationMiningCycleReward(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationRootHash` | (`_newHash`: `BytesLike`, `_newNLeaves`: `BigNumberish`, `_stakers`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setReputationRootHash(bytes32,uint256,address[])` | (`_newHash`: `BytesLike`, `_newNLeaves`: `BigNumberish`, `_stakers`: `string`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setStorageSlotRecovery` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setStorageSlotRecovery(uint256,bytes32)` | (`_slot`: `BigNumberish`, `_value`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenLocking` | (`_tokenLockingAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenLocking(address)` | (`_tokenLockingAddress`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setupRegistrar` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setupRegistrar(address,bytes32)` | (`_ens`: `string`, `_rootNode`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `stakeForMining(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `startNextCycle` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `startNextCycle()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `startTokenAuction` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `startTokenAuction(address)` | (`_token`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`_interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface(bytes4)` | (`_interfaceID`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uninstallExtension` | (`_extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstallExtension(bytes32)` | (`_extensionId`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `unstakeForMining` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `unstakeForMining(uint256)` | (`_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `updateColonyOrbitDB` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `updateColonyOrbitDB(string)` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `updateUserOrbitDB` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `updateUserOrbitDB(string)` | (`_orbitdb`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeExtension` | (`_extensionId`: `BytesLike`, `_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `upgradeExtension(bytes32,uint256)` | (`_extensionId`: `BytesLike`, `_newVersion`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |

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
| `_version` | `BigNumberish` | The new Colony contract version |
| `_resolver` | `string` | Address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addColonyVersion

___

### addColonyVersion(uint256,address)

▸ **addColonyVersion(uint256,address)**(`_version`, `_resolver`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds a new Colony contract version and the address of associated `_resolver` contract. Secured function to authorised members. Allowed to be called by the Meta Colony only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_version` | `BigNumberish` | The new Colony contract version |
| `_resolver` | `string` | Address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addColonyVersion(uint256,address)

___

### addExtensionToNetwork

▸ **addExtensionToNetwork**(`_extensionId`, `_resolver`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.The extension version is queried from the resolver itself.
Add a new extension resolver to the Extensions repository.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_resolver` | `string` | The deployed resolver containing the extension contract logic |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addExtensionToNetwork

___

### addExtensionToNetwork(bytes32,address)

▸ **addExtensionToNetwork(bytes32,address)**(`_extensionId`, `_resolver`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.The extension version is queried from the resolver itself.
Add a new extension resolver to the Extensions repository.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_resolver` | `string` | The deployed resolver containing the extension contract logic |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addExtensionToNetwork(bytes32,address)

___

### addSkill

▸ **addSkill**(`_parentSkillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if the parent skill does not exist or if this is called by an unauthorised sender.
Adds a new skill to the global or local skills tree, under skill `_parentSkillId`. Only the Meta Colony is allowed to add a global skill, called via `IColony.addGlobalSkill`. Any colony is allowed to add a local skill and which is associated with a new domain via `IColony.addDomain`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parentSkillId` | `BigNumberish` | Id of the skill under which the new skill will be added. If 0, a global skill is added with no parent. |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addSkill

___

### addSkill(uint256)

▸ **addSkill(uint256)**(`_parentSkillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if the parent skill does not exist or if this is called by an unauthorised sender.
Adds a new skill to the global or local skills tree, under skill `_parentSkillId`. Only the Meta Colony is allowed to add a global skill, called via `IColony.addGlobalSkill`. Any colony is allowed to add a local skill and which is associated with a new domain via `IColony.addDomain`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parentSkillId` | `BigNumberish` | Id of the skill under which the new skill will be added. If 0, a global skill is added with no parent. |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.addSkill(uint256)

___

### addr

▸ **addr**(`_node`, `overrides?`): `Promise`<`string`\>

Returns the address the supplied node resolves do, if we are the resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_node` | `BytesLike` | The namehash of the ENS address being requested |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.addr

___

### addr(bytes32)

▸ **addr(bytes32)**(`_node`, `overrides?`): `Promise`<`string`\>

Returns the address the supplied node resolves do, if we are the resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_node` | `BytesLike` | The namehash of the ENS address being requested |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.addr(bytes32)

___

### appendReputationUpdateLog

▸ **appendReputationUpdateLog**(`_user`, `_amount`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if it is called by anyone but a colony or if skill with id `_skillId` does not exist or.
Adds a reputation update entry to log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user for the reputation update |
| `_amount` | `BigNumberish` | The amount of reputation change for the update, this can be a negative as well as a positive value |
| `_skillId` | `BigNumberish` | The skill for the reputation update |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.appendReputationUpdateLog

___

### appendReputationUpdateLog(address,int256,uint256)

▸ **appendReputationUpdateLog(address,int256,uint256)**(`_user`, `_amount`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Errors if it is called by anyone but a colony or if skill with id `_skillId` does not exist or.
Adds a reputation update entry to log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user for the reputation update |
| `_amount` | `BigNumberish` | The amount of reputation change for the update, this can be a negative as well as a positive value |
| `_skillId` | `BigNumberish` | The skill for the reputation update |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.appendReputationUpdateLog(address,int256,uint256)

___

### approveExitRecovery

▸ **approveExitRecovery**(`overrides?`): `Promise`<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.approveExitRecovery

___

### approveExitRecovery()

▸ **approveExitRecovery()**(`overrides?`): `Promise`<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.approveExitRecovery()

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
| `_amount` | `BigNumberish` | The amount of CLNY to burn |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.burnUnneededRewards

___

### burnUnneededRewards(uint256)

▸ **burnUnneededRewards(uint256)**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the active reputation mining cycle
Used to burn tokens that are not needed to pay out rewards (because not every possible defence was made for all submissions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | The amount of CLNY to burn |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.burnUnneededRewards(uint256)

___

### calculateMinerWeight

▸ **calculateMinerWeight**(`_timeStaked`, `_submissonIndex`, `overrides?`): `Promise`<`BigNumber`\>

Calculate raw miner weight in WADs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_timeStaked` | `BigNumberish` | Amount of time (in seconds) that the miner has staked their CLNY |
| `_submissonIndex` | `BigNumberish` | Index of reputation hash submission (between 0 and 11) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.calculateMinerWeight

___

### calculateMinerWeight(uint256,uint256)

▸ **calculateMinerWeight(uint256,uint256)**(`_timeStaked`, `_submissonIndex`, `overrides?`): `Promise`<`BigNumber`\>

Calculate raw miner weight in WADs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_timeStaked` | `BigNumberish` | Amount of time (in seconds) that the miner has staked their CLNY |
| `_submissonIndex` | `BigNumberish` | Index of reputation hash submission (between 0 and 11) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.calculateMinerWeight(uint256,uint256)

___

### checkNotAdditionalProtectedVariable

▸ **checkNotAdditionalProtectedVariable**(`_slot`, `overrides?`): `Promise`<`void`\>

No return value, but should throw if protected.This is external, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `BigNumberish` | The storage slot number to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`void`\>

#### Inherited from

IColonyNetwork.checkNotAdditionalProtectedVariable

___

### checkNotAdditionalProtectedVariable(uint256)

▸ **checkNotAdditionalProtectedVariable(uint256)**(`_slot`, `overrides?`): `Promise`<`void`\>

No return value, but should throw if protected.This is external, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `BigNumberish` | The storage slot number to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`void`\>

#### Inherited from

IColonyNetwork.checkNotAdditionalProtectedVariable(uint256)

___

### claimMiningReward

▸ **claimMiningReward**(`_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Can be called by anyone, not just _recipient
Used by a user to claim any mining rewards due to them. This will place them in their balance or pending balance, as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `string` | The user whose rewards to claim |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.claimMiningReward

___

### claimMiningReward(address)

▸ **claimMiningReward(address)**(`_recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Can be called by anyone, not just _recipient
Used by a user to claim any mining rewards due to them. This will place them in their balance or pending balance, as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `string` | The user whose rewards to claim |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.claimMiningReward(address)

___

### connect

▸ **connect**(`signerOrProvider`): [`ColonyNetworkClient`](ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

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
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token. |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

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
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

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
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `_metadata` | `string` | The metadata associated with the new colony |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

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
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `_orbitdb` | `string` | DEPRECATED Currently a no-op |
| `_useExtensionManager` | `boolean` | DEPRECATED Currently a no-op |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

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
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token (optional) |
| `_name` | `string` | The name of the token (optional) |
| `_symbol` | `string` | The short 'ticket' symbol for the token (optional) |
| `_decimals` | `BigNumberish` | The number of decimal places that 1 user-facing token can be divided up in to (optional) In the case of ETH, and most tokens, this is 18. |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `_metadata` | `string` | The metadata associated with the new colony |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createColonyForFrontend

___

### createColonyForFrontend(address,string,string,uint8,uint256,string,string)

▸ **createColonyForFrontend(address,string,string,uint8,uint256,string,string)**(`_tokenAddress`, `_name`, `_symbol`, `_decimals`, `_version`, `_colonyName`, `_metadata`, `overrides?`): `Promise`<`ContractTransaction`\>

We expect this function to only be used by the dapp
Creates a new colony in the network, possibly with a token and token authority, with an optional ENS name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of an ERC20 token to serve as the colony token (optional) |
| `_name` | `string` | The name of the token (optional) |
| `_symbol` | `string` | The short 'ticket' symbol for the token (optional) |
| `_decimals` | `BigNumberish` | The number of decimal places that 1 user-facing token can be divided up in to (optional) In the case of ETH, and most tokens, this is 18. |
| `_version` | `BigNumberish` | The version of colony to deploy (pass 0 for the current version) |
| `_colonyName` | `string` | The label to register (if null, no label is registered) |
| `_metadata` | `string` | The metadata associated with the new colony |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createColonyForFrontend(address,string,string,uint8,uint256,string,string)

___

### createMetaColony

▸ **createMetaColony**(`_tokenAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Create the Meta Colony, same as a normal colony plus the root skill.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of the CLNY token |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createMetaColony

___

### createMetaColony(address)

▸ **createMetaColony(address)**(`_tokenAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Create the Meta Colony, same as a normal colony plus the root skill.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenAddress` | `string` | Address of the CLNY token |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.createMetaColony(address)

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
| `_token` | `string` | The address of the token |
| `_colony` | `string` | The address of the colony in control of the token |
| `_allowedToTransfer` | `string`[] | An array of addresses that are allowed to transfer the token even if it's locked |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deployTokenAuthority

___

### deployTokenAuthority(address,address,address[])

▸ **deployTokenAuthority(address,address,address[])**(`_token`, `_colony`, `_allowedToTransfer`, `overrides?`): `Promise`<`ContractTransaction`\>

This is more expensive than deploying a token directly, but is able to be done via a metatransaction
Called to deploy a token authority

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The address of the token |
| `_colony` | `string` | The address of the colony in control of the token |
| `_allowedToTransfer` | `string`[] | An array of addresses that are allowed to transfer the token even if it's locked |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deployTokenAuthority(address,address,address[])

___

### deployTokenViaNetwork

▸ **deployTokenViaNetwork**(`_name`, `_symbol`, `_decimals`, `overrides?`): `Promise`<`ContractTransaction`\>

This is more expensive than deploying a token directly, but is able to be done via a metatransaction
Called to deploy a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_name` | `string` | The name of the token |
| `_symbol` | `string` | The short 'ticket' symbol for the token |
| `_decimals` | `BigNumberish` | The number of decimal places that 1 user-facing token can be divided up in to In the case of ETH, and most tokens, this is 18. |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deployTokenViaNetwork

___

### deployTokenViaNetwork(string,string,uint8)

▸ **deployTokenViaNetwork(string,string,uint8)**(`_name`, `_symbol`, `_decimals`, `overrides?`): `Promise`<`ContractTransaction`\>

This is more expensive than deploying a token directly, but is able to be done via a metatransaction
Called to deploy a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_name` | `string` | The name of the token |
| `_symbol` | `string` | The short 'ticket' symbol for the token |
| `_decimals` | `BigNumberish` | The number of decimal places that 1 user-facing token can be divided up in to In the case of ETH, and most tokens, this is 18. |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deployTokenViaNetwork(string,string,uint8)

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
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_deprecated` | `boolean` | Whether to deprecate the extension or not |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deprecateExtension

___

### deprecateExtension(bytes32,bool)

▸ **deprecateExtension(bytes32,bool)**(`_extensionId`, `_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the deprecation of an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_deprecated` | `boolean` | Whether to deprecate the extension or not |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deprecateExtension(bytes32,bool)

___

### deprecateSkill(uint256)

▸ **deprecateSkill(uint256)**(`_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

This function is deprecated and will be removed in a future release
Mark a skill as deprecated which stops new tasks and payments from using it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

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
| `_skillId` | `BigNumberish` | Id of the skill |
| `_deprecated` | `boolean` | Deprecation status |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.deprecateSkill(uint256,bool)

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

IColonyNetwork.emit

___

### enterRecoveryMode

▸ **enterRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.enterRecoveryMode

___

### enterRecoveryMode()

▸ **enterRecoveryMode()**(`overrides?`): `Promise`<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.enterRecoveryMode()

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Executes a metatransaction targeting this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The address of the user that signed the metatransaction |
| `payload` | `BytesLike` | The transaction data that will be executed if signature valid |
| `sigR` | `BytesLike` | The 'r' part of the signature |
| `sigS` | `BytesLike` | The 's' part of the signature |
| `sigV` | `BigNumberish` | The 'v' part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.executeMetaTransaction

___

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

▸ **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Executes a metatransaction targeting this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The address of the user that signed the metatransaction |
| `payload` | `BytesLike` | The transaction data that will be executed if signature valid |
| `sigR` | `BytesLike` | The 'r' part of the signature |
| `sigS` | `BytesLike` | The 's' part of the signature |
| `sigV` | `BigNumberish` | The 'v' part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

___

### exitRecoveryMode

▸ **exitRecoveryMode**(`overrides?`): `Promise`<`ContractTransaction`\>

Exit recovery mode, can be called by anyone if enough whitelist approvals are given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.exitRecoveryMode

___

### exitRecoveryMode()

▸ **exitRecoveryMode()**(`overrides?`): `Promise`<`ContractTransaction`\>

Exit recovery mode, can be called by anyone if enough whitelist approvals are given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.exitRecoveryMode()

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
| `_skillId` | `BigNumberish` | Id of the skill |
| `_childSkillIndex` | `BigNumberish` | Index of the `skill.children` array to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getChildSkillId

___

### getChildSkillId(uint256,uint256)

▸ **getChildSkillId(uint256,uint256)**(`_skillId`, `_childSkillIndex`, `overrides?`): `Promise`<`BigNumber`\>

Get the id of the child skill at index `_childSkillIndex` for skill with Id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `_childSkillIndex` | `BigNumberish` | Index of the `skill.children` array to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getChildSkillId(uint256,uint256)

___

### getColony

▸ **getColony**(`_id`, `overrides?`): `Promise`<`string`\>

Get a colony address by its Id in the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the colony to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getColony

___

### getColony(uint256)

▸ **getColony(uint256)**(`_id`, `overrides?`): `Promise`<`string`\>

Get a colony address by its Id in the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | Id of the colony to get |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getColony(uint256)

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

### getColonyCount()

▸ **getColonyCount()**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of colonies in the network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getColonyCount()

___

### getColonyVersionResolver

▸ **getColonyVersionResolver**(`_version`, `overrides?`): `Promise`<`string`\>

Get the `Resolver` address for Colony contract version `_version`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_version` | `BigNumberish` | The Colony contract version |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getColonyVersionResolver

___

### getColonyVersionResolver(uint256)

▸ **getColonyVersionResolver(uint256)**(`_version`, `overrides?`): `Promise`<`string`\>

Get the `Resolver` address for Colony contract version `_version`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_version` | `BigNumberish` | The Colony contract version |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getColonyVersionResolver(uint256)

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

### getCurrentColonyVersion()

▸ **getCurrentColonyVersion()**(`overrides?`): `Promise`<`BigNumber`\>

Returns the latest Colony contract version. This is the version used to create all new colonies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getCurrentColonyVersion()

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

### getENSRegistrar()

▸ **getENSRegistrar()**(`overrides?`): `Promise`<`string`\>

Returns the address of the ENSRegistrar for the Network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getENSRegistrar()

___

### getExtensionInstallation

▸ **getExtensionInstallation**(`_extensionId`, `_colony`, `overrides?`): `Promise`<`string`\>

Get an extension's installation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_colony` | `string` | Address of the colony the extension is installed in |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getExtensionInstallation

___

### getExtensionInstallation(bytes32,address)

▸ **getExtensionInstallation(bytes32,address)**(`_extensionId`, `_colony`, `overrides?`): `Promise`<`string`\>

Get an extension's installation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_colony` | `string` | Address of the colony the extension is installed in |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getExtensionInstallation(bytes32,address)

___

### getExtensionResolver

▸ **getExtensionResolver**(`_extensionId`, `_version`, `overrides?`): `Promise`<`string`\>

Get an extension's resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_version` | `BigNumberish` | Version of the extension |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getExtensionResolver

___

### getExtensionResolver(bytes32,uint256)

▸ **getExtensionResolver(bytes32,uint256)**(`_extensionId`, `_version`, `overrides?`): `Promise`<`string`\>

Get an extension's resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_version` | `BigNumberish` | Version of the extension |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getExtensionResolver(bytes32,uint256)

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

### getFeeInverse()

▸ **getFeeInverse()**(`overrides?`): `Promise`<`BigNumber`\>

Return 1 / the fee to pay to the network. e.g. if the fee is 1% (or 0.01), return 100.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getFeeInverse()

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

### getMetaColony()

▸ **getMetaColony()**(`overrides?`): `Promise`<`string`\>

Get the Meta Colony address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getMetaColony()

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
| `userAddress` | `string` | The address of the user that will sign the metatransaction |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getMetatransactionNonce

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next metatransaction nonce for user that should be used targeting this contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The address of the user that will sign the metatransaction |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getMetatransactionNonce(address)

___

### getMiningDelegator

▸ **getMiningDelegator**(`_delegate`, `overrides?`): `Promise`<`string`\>

Called to get the address _delegate is allowed to mine for

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `string` | The address that wants to mine |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getMiningDelegator

___

### getMiningDelegator(address)

▸ **getMiningDelegator(address)**(`_delegate`, `overrides?`): `Promise`<`string`\>

Called to get the address _delegate is allowed to mine for

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `string` | The address that wants to mine |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getMiningDelegator(address)

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

### getMiningResolver()

▸ **getMiningResolver()**(`overrides?`): `Promise`<`string`\>

Get the resolver to be used by new instances of ReputationMiningCycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getMiningResolver()

___

### getMiningStake

▸ **getMiningStake**(`_user`, `overrides?`): `Promise`<`MiningStakeStructOutput`\>

returns how much CLNY _user has staked for the purposes of reputation mining

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user to query |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`MiningStakeStructOutput`\>

#### Inherited from

IColonyNetwork.getMiningStake

___

### getMiningStake(address)

▸ **getMiningStake(address)**(`_user`, `overrides?`): `Promise`<`MiningStakeStructOutput`\>

returns how much CLNY _user has staked for the purposes of reputation mining

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user to query |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`MiningStakeStructOutput`\>

#### Inherited from

IColonyNetwork.getMiningStake(address)

___

### getParentSkillId

▸ **getParentSkillId**(`_skillId`, `_parentSkillIndex`, `overrides?`): `Promise`<`BigNumber`\>

Get the id of the parent skill at index `_parentSkillIndex` for skill with Id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `_parentSkillIndex` | `BigNumberish` | Index of the `skill.parents` array to get Note that not all parent skill ids are stored here. See `Skill.parents` member for definition on which parents are stored |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getParentSkillId

___

### getParentSkillId(uint256,uint256)

▸ **getParentSkillId(uint256,uint256)**(`_skillId`, `_parentSkillIndex`, `overrides?`): `Promise`<`BigNumber`\>

Get the id of the parent skill at index `_parentSkillIndex` for skill with Id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `_parentSkillIndex` | `BigNumberish` | Index of the `skill.parents` array to get Note that not all parent skill ids are stored here. See `Skill.parents` member for definition on which parents are stored |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getParentSkillId(uint256,uint256)

___

### getPayoutWhitelist

▸ **getPayoutWhitelist**(`_token`, `overrides?`): `Promise`<`boolean`\>

Get a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The token being queried |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.getPayoutWhitelist

___

### getPayoutWhitelist(address)

▸ **getPayoutWhitelist(address)**(`_token`, `overrides?`): `Promise`<`boolean`\>

Get a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The token being queried |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.getPayoutWhitelist(address)

___

### getProfileDBAddress

▸ **getProfileDBAddress**(`_node`, `overrides?`): `Promise`<`string`\>

Retrieve the orbitdb address corresponding to a registered account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_node` | `BytesLike` | The Namehash of the account being queried. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getProfileDBAddress

___

### getProfileDBAddress(bytes32)

▸ **getProfileDBAddress(bytes32)**(`_node`, `overrides?`): `Promise`<`string`\>

Retrieve the orbitdb address corresponding to a registered account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_node` | `BytesLike` | The Namehash of the account being queried. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getProfileDBAddress(bytes32)

___

### getReplacementReputationUpdateLogEntry

▸ **getReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `overrides?`): `Promise`<`ReputationLogEntryStructOutput`\>

Get a replacement log entry (if set) for the log entry `_id` in the mining cycle that was at the address `_reputationMiningCycle`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `string` | The address of the reputation mining cycle we are asking about |
| `_id` | `BigNumberish` | The log entry number we wish to see if there is a replacement for |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ReputationLogEntryStructOutput`\>

#### Inherited from

IColonyNetwork.getReplacementReputationUpdateLogEntry

___

### getReplacementReputationUpdateLogEntry(address,uint256)

▸ **getReplacementReputationUpdateLogEntry(address,uint256)**(`_reputationMiningCycle`, `_id`, `overrides?`): `Promise`<`ReputationLogEntryStructOutput`\>

Get a replacement log entry (if set) for the log entry `_id` in the mining cycle that was at the address `_reputationMiningCycle`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `string` | The address of the reputation mining cycle we are asking about |
| `_id` | `BigNumberish` | The log entry number we wish to see if there is a replacement for |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ReputationLogEntryStructOutput`\>

#### Inherited from

IColonyNetwork.getReplacementReputationUpdateLogEntry(address,uint256)

___

### getReplacementReputationUpdateLogsExist

▸ **getReplacementReputationUpdateLogsExist**(`_reputationMiningCycle`, `overrides?`): `Promise`<`boolean`\>

Get whether any replacement log entries have been set for the supplied reputation mining cycle.Used by the client to avoid doubling the number of RPC calls when syncing from scratch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `string` | The reputation mining cycle address we want to know if any entries have been replaced in. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.getReplacementReputationUpdateLogsExist

___

### getReplacementReputationUpdateLogsExist(address)

▸ **getReplacementReputationUpdateLogsExist(address)**(`_reputationMiningCycle`, `overrides?`): `Promise`<`boolean`\>

Get whether any replacement log entries have been set for the supplied reputation mining cycle.Used by the client to avoid doubling the number of RPC calls when syncing from scratch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_reputationMiningCycle` | `string` | The reputation mining cycle address we want to know if any entries have been replaced in. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.getReplacementReputationUpdateLogsExist(address)

___

### getReputationMiningCycle

▸ **getReputationMiningCycle**(`_active`, `overrides?`): `Promise`<`string`\>

Get the address of either the active or inactive reputation mining cycle, based on `active`. The active reputation mining cycle is the one currently under consideration by reputation miners. The inactive reputation cycle is the one with the log that is being appended to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_active` | `boolean` | Whether the user wants the active or inactive reputation mining cycle |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getReputationMiningCycle

___

### getReputationMiningCycle(bool)

▸ **getReputationMiningCycle(bool)**(`_active`, `overrides?`): `Promise`<`string`\>

Get the address of either the active or inactive reputation mining cycle, based on `active`. The active reputation mining cycle is the one currently under consideration by reputation miners. The inactive reputation cycle is the one with the log that is being appended to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_active` | `boolean` | Whether the user wants the active or inactive reputation mining cycle |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getReputationMiningCycle(bool)

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

### getReputationMiningCycleReward()

▸ **getReputationMiningCycleReward()**(`overrides?`): `Promise`<`BigNumber`\>

Called to get the total per-cycle reputation mining reward.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationMiningCycleReward()

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

### getReputationMiningSkillId()

▸ **getReputationMiningSkillId()**(`overrides?`): `Promise`<`BigNumber`\>

Get the `skillId` of the reputation mining skill. Only set once the metacolony is set up.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationMiningSkillId()

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

### getReputationRootHash()

▸ **getReputationRootHash()**(`overrides?`): `Promise`<`string`\>

Get the root hash of the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getReputationRootHash()

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

### getReputationRootHashNLeaves()

▸ **getReputationRootHashNLeaves()**(`overrides?`): `Promise`<`BigNumber`\>

I cannot see a reason why a user's client would need to call this - only stored to help with some edge cases in reputation mining dispute resolution.
Get the number of leaves in the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationRootHashNLeaves()

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

### getReputationRootHashNNodes()

▸ **getReputationRootHashNNodes()**(`overrides?`): `Promise`<`BigNumber`\>

Deprecated, replaced by getReputationRootHashNLeaves which does the same thing but is more accurately named.will be removed in a later version.
Get the number of leaves in the current reputation state tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getReputationRootHashNNodes()

___

### getSkill

▸ **getSkill**(`_skillId`, `overrides?`): `Promise`<`SkillStructOutput`\>

Get the `nParents` and `nChildren` of skill with id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`SkillStructOutput`\>

#### Inherited from

IColonyNetwork.getSkill

___

### getSkill(uint256)

▸ **getSkill(uint256)**(`_skillId`, `overrides?`): `Promise`<`SkillStructOutput`\>

Get the `nParents` and `nChildren` of skill with id `_skillId`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_skillId` | `BigNumberish` | Id of the skill |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`SkillStructOutput`\>

#### Inherited from

IColonyNetwork.getSkill(uint256)

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

### getSkillCount()

▸ **getSkillCount()**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of skills in the network including both global and local skills.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.getSkillCount()

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

### getTokenLocking()

▸ **getTokenLocking()**(`overrides?`): `Promise`<`string`\>

Get token locking contract address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.getTokenLocking()

___

### getTokenLockingClient

▸ **getTokenLockingClient**(): `Promise`<`TokenLockingClient`\>

Gets the TokenLockingClient

#### Returns

`Promise`<`TokenLockingClient`\>

an initialized version of the TokenLockingClient

___

### initialise

▸ **initialise**(`_resolver`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

Only allowed to be run once, by the Network owner before any Colony versions are added.
Initialises the colony network by setting the first Colony version resolver to `_resolver` address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_resolver` | `string` | Address of the resolver for Colony contract |
| `_version` | `BigNumberish` | Version of the Colony contract the resolver represents |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialise

___

### initialise(address,uint256)

▸ **initialise(address,uint256)**(`_resolver`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

Only allowed to be run once, by the Network owner before any Colony versions are added.
Initialises the colony network by setting the first Colony version resolver to `_resolver` address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_resolver` | `string` | Address of the resolver for Colony contract |
| `_version` | `BigNumberish` | Version of the Colony contract the resolver represents |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialise(address,uint256)

___

### initialiseReputationMining

▸ **initialiseReputationMining**(`overrides?`): `Promise`<`ContractTransaction`\>

Creates initial inactive reputation mining cycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialiseReputationMining

___

### initialiseReputationMining()

▸ **initialiseReputationMining()**(`overrides?`): `Promise`<`ContractTransaction`\>

Creates initial inactive reputation mining cycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialiseReputationMining()

___

### initialiseRootLocalSkill

▸ **initialiseRootLocalSkill**(`overrides?`): `Promise`<`ContractTransaction`\>

Initialise the local skills tree for a colony

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialiseRootLocalSkill

___

### initialiseRootLocalSkill()

▸ **initialiseRootLocalSkill()**(`overrides?`): `Promise`<`ContractTransaction`\>

Initialise the local skills tree for a colony

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.initialiseRootLocalSkill()

___

### installExtension

▸ **installExtension**(`_extensionId`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

Install an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_version` | `BigNumberish` | Version of the extension to install |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.installExtension

___

### installExtension(bytes32,uint256)

▸ **installExtension(bytes32,uint256)**(`_extensionId`, `_version`, `overrides?`): `Promise`<`ContractTransaction`\>

Install an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_version` | `BigNumberish` | Version of the extension to install |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.installExtension(bytes32,uint256)

___

### isColony

▸ **isColony**(`_colony`, `overrides?`): `Promise`<`boolean`\>

Check if specific address is a colony created on colony network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `string` | Address of the colony |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.isColony

___

### isColony(address)

▸ **isColony(address)**(`_colony`, `overrides?`): `Promise`<`boolean`\>

Check if specific address is a colony created on colony network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `string` | Address of the colony |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.isColony(address)

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

### isInRecoveryMode()

▸ **isInRecoveryMode()**(`overrides?`): `Promise`<`boolean`\>

Is colony network in recovery mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.isInRecoveryMode()

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
| `_addr` | `string` | The address we wish to find the corresponding ENS domain for (if any) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.lookupRegisteredENSDomain

___

### lookupRegisteredENSDomain(address)

▸ **lookupRegisteredENSDomain(address)**(`_addr`, `overrides?`): `Promise`<`string`\>

Reverse lookup a username from an address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_addr` | `string` | The address we wish to find the corresponding ENS domain for (if any) |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

IColonyNetwork.lookupRegisteredENSDomain(address)

___

### lookupRegisteredENSDomainWithNetworkPatches

▸ **lookupRegisteredENSDomainWithNetworkPatches**(`address`): `Promise`<`string`\>

Like [lookupRegisteredENSDomain](ColonyNetworkClient.md#lookupregisteredensdomain), but also working on the Goerli testnet

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
| `data` | `BytesLike`[] | The encoded function data for each of the calls to make to this contract |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.multicall

___

### multicall(bytes[])

▸ **multicall(bytes[])**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

The `msg.value` should not be trusted for any method callable from multicall.
Call multiple functions in the current contract and return the data from all of them if they all succeed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `BytesLike`[] | The encoded function data for each of the calls to make to this contract |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.multicall(bytes[])

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

### numRecoveryRoles()

▸ **numRecoveryRoles()**(`overrides?`): `Promise`<`BigNumber`\>

Return number of recovery roles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

IColonyNetwork.numRecoveryRoles()

___

### punishStakers

▸ **punishStakers**(`_stakers`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

While external, it can only be called successfully by the current ReputationMiningCycle.
Function called to punish people who staked against a new reputation root hash that turned out to be incorrect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_stakers` | `string`[] | Array of the addresses of stakers to punish |
| `_amount` | `BigNumberish` | Amount of stake to slash |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.punishStakers

___

### punishStakers(address[],uint256)

▸ **punishStakers(address[],uint256)**(`_stakers`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

While external, it can only be called successfully by the current ReputationMiningCycle.
Function called to punish people who staked against a new reputation root hash that turned out to be incorrect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_stakers` | `string`[] | Array of the addresses of stakers to punish |
| `_amount` | `BigNumberish` | Amount of stake to slash |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.punishStakers(address[],uint256)

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
| `_colonyName` | `string` | The label to register. |
| `_orbitdb` | `string` | The path of the orbitDB database associated with the colony name |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.registerColonyLabel

___

### registerColonyLabel(string,string)

▸ **registerColonyLabel(string,string)**(`_colonyName`, `_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register a "colony.joincolony.eth" label. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colonyName` | `string` | The label to register. |
| `_orbitdb` | `string` | The path of the orbitDB database associated with the colony name |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.registerColonyLabel(string,string)

___

### registerUserLabel

▸ **registerUserLabel**(`_username`, `_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register a "user.joincolony.eth" label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_username` | `string` | The label to register |
| `_orbitdb` | `string` | The path of the orbitDB database associated with the user profile |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.registerUserLabel

___

### registerUserLabel(string,string)

▸ **registerUserLabel(string,string)**(`_username`, `_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Register a "user.joincolony.eth" label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_username` | `string` | The label to register |
| `_orbitdb` | `string` | The path of the orbitDB database associated with the user profile |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.registerUserLabel(string,string)

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
| `_user` | `string` | User we want to remove recovery role from |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.removeRecoveryRole

___

### removeRecoveryRole(address)

▸ **removeRecoveryRole(address)**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Remove colony recovery role. Can only be called by root role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to remove recovery role from |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.removeRecoveryRole(address)

___

### reward

▸ **reward**(`_recipient`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the active reputation mining cycle
Used to track that a user is eligible to claim a reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `string` | The address receiving the award |
| `_amount` | `BigNumberish` | The amount of CLNY to be awarded |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.reward

___

### reward(address,uint256)

▸ **reward(address,uint256)**(`_recipient`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Only callable by the active reputation mining cycle
Used to track that a user is eligible to claim a reward

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_recipient` | `string` | The address receiving the award |
| `_amount` | `BigNumberish` | The amount of CLNY to be awarded |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.reward(address,uint256)

___

### setFeeInverse

▸ **setFeeInverse**(`_feeInverse`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the colony network fee to pay. e.g. if the fee is 1% (or 0.01), pass 100 as `_feeInverse`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_feeInverse` | `BigNumberish` | The inverse of the network fee to set |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setFeeInverse

___

### setFeeInverse(uint256)

▸ **setFeeInverse(uint256)**(`_feeInverse`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the colony network fee to pay. e.g. if the fee is 1% (or 0.01), pass 100 as `_feeInverse`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_feeInverse` | `BigNumberish` | The inverse of the network fee to set |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setFeeInverse(uint256)

___

### setMiningDelegate

▸ **setMiningDelegate**(`_delegate`, `_allowed`, `overrides?`): `Promise`<`ContractTransaction`\>

Called to give or remove another address's permission to mine on your behalf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `string` | The address you're giving or removing permission from |
| `_allowed` | `boolean` | Whether they are allowed (true) or not (false) to mine on your behalf |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setMiningDelegate

___

### setMiningDelegate(address,bool)

▸ **setMiningDelegate(address,bool)**(`_delegate`, `_allowed`, `overrides?`): `Promise`<`ContractTransaction`\>

Called to give or remove another address's permission to mine on your behalf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_delegate` | `string` | The address you're giving or removing permission from |
| `_allowed` | `boolean` | Whether they are allowed (true) or not (false) to mine on your behalf |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setMiningDelegate(address,bool)

___

### setMiningResolver

▸ **setMiningResolver**(`_miningResolverAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the resolver to be used by new instances of ReputationMiningCycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_miningResolverAddress` | `string` | The address of the Resolver contract with the functions correctly wired. |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setMiningResolver

___

### setMiningResolver(address)

▸ **setMiningResolver(address)**(`_miningResolverAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the resolver to be used by new instances of ReputationMiningCycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_miningResolverAddress` | `string` | The address of the Resolver contract with the functions correctly wired. |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setMiningResolver(address)

___

### setPayoutWhitelist

▸ **setPayoutWhitelist**(`_token`, `_status`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The token being set |
| `_status` | `boolean` | The whitelist status |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setPayoutWhitelist

___

### setPayoutWhitelist(address,bool)

▸ **setPayoutWhitelist(address,bool)**(`_token`, `_status`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a token's status in the payout whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The token being set |
| `_status` | `boolean` | The whitelist status |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setPayoutWhitelist(address,bool)

___

### setRecoveryRole

▸ **setRecoveryRole**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony recovery role. Can be called by root.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give a recovery role to |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setRecoveryRole

___

### setRecoveryRole(address)

▸ **setRecoveryRole(address)**(`_user`, `overrides?`): `Promise`<`ContractTransaction`\>

Set new colony recovery role. Can be called by root.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | User we want to give a recovery role to |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setRecoveryRole(address)

___

### setReplacementReputationUpdateLogEntry

▸ **setReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `_user`, `_amount`, `_skillId`, `_colony`, `_nUpdates`, `_nPreviousUpdates`, `overrides?`): `Promise`<`ContractTransaction`\>

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
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReplacementReputationUpdateLogEntry

___

### setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)

▸ **setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)**(`_reputationMiningCycle`, `_id`, `_user`, `_amount`, `_skillId`, `_colony`, `_nUpdates`, `_nPreviousUpdates`, `overrides?`): `Promise`<`ContractTransaction`\>

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
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)

___

### setReputationMiningCycleReward

▸ **setReputationMiningCycleReward**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.
Called to set the total per-cycle reputation reward, which will be split between all miners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | The CLNY awarded per mining cycle to the miners |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReputationMiningCycleReward

___

### setReputationMiningCycleReward(uint256)

▸ **setReputationMiningCycleReward(uint256)**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the MetaColony.
Called to set the total per-cycle reputation reward, which will be split between all miners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | The CLNY awarded per mining cycle to the miners |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReputationMiningCycleReward(uint256)

___

### setReputationRootHash

▸ **setReputationRootHash**(`_newHash`, `_newNLeaves`, `_stakers`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a new Reputation root hash and starts a new mining cycle. Can only be called by the ReputationMiningCycle contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_newHash` | `BytesLike` | The reputation root hash |
| `_newNLeaves` | `BigNumberish` | The updated leaves count value |
| `_stakers` | `string`[] | Array of users who submitted or backed the hash, being accepted here as the new reputation root hash |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReputationRootHash

___

### setReputationRootHash(bytes32,uint256,address[])

▸ **setReputationRootHash(bytes32,uint256,address[])**(`_newHash`, `_newNLeaves`, `_stakers`, `overrides?`): `Promise`<`ContractTransaction`\>

Set a new Reputation root hash and starts a new mining cycle. Can only be called by the ReputationMiningCycle contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_newHash` | `BytesLike` | The reputation root hash |
| `_newNLeaves` | `BigNumberish` | The updated leaves count value |
| `_stakers` | `string`[] | Array of users who submitted or backed the hash, being accepted here as the new reputation root hash |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setReputationRootHash(bytes32,uint256,address[])

___

### setStorageSlotRecovery

▸ **setStorageSlotRecovery**(`_slot`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

certain critical variables are protected from editing in this function
Update value of arbitrary storage variable. Can only be called by user with recovery role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `BigNumberish` | Uint address of storage slot to be updated |
| `_value` | `BytesLike` | word of data to be set |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setStorageSlotRecovery

___

### setStorageSlotRecovery(uint256,bytes32)

▸ **setStorageSlotRecovery(uint256,bytes32)**(`_slot`, `_value`, `overrides?`): `Promise`<`ContractTransaction`\>

certain critical variables are protected from editing in this function
Update value of arbitrary storage variable. Can only be called by user with recovery role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_slot` | `BigNumberish` | Uint address of storage slot to be updated |
| `_value` | `BytesLike` | word of data to be set |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setStorageSlotRecovery(uint256,bytes32)

___

### setTokenLocking

▸ **setTokenLocking**(`_tokenLockingAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the token locking address. This is only set once, and can't be changed afterwards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenLockingAddress` | `string` | Address of the locking contract |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setTokenLocking

___

### setTokenLocking(address)

▸ **setTokenLocking(address)**(`_tokenLockingAddress`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the token locking address. This is only set once, and can't be changed afterwards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenLockingAddress` | `string` | Address of the locking contract |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setTokenLocking(address)

___

### setupRegistrar

▸ **setupRegistrar**(`_ens`, `_rootNode`, `overrides?`): `Promise`<`ContractTransaction`\>

Setup registrar with ENS and root node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_ens` | `string` | Address of ENS registrar |
| `_rootNode` | `BytesLike` | Namehash of the root node for the domain |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setupRegistrar

___

### setupRegistrar(address,bytes32)

▸ **setupRegistrar(address,bytes32)**(`_ens`, `_rootNode`, `overrides?`): `Promise`<`ContractTransaction`\>

Setup registrar with ENS and root node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_ens` | `string` | Address of ENS registrar |
| `_rootNode` | `BytesLike` | Namehash of the root node for the domain |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.setupRegistrar(address,bytes32)

___

### stakeForMining

▸ **stakeForMining**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Stake CLNY to allow the staker to participate in reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | Amount of CLNY to stake for the purposes of mining |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.stakeForMining

___

### stakeForMining(uint256)

▸ **stakeForMining(uint256)**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Stake CLNY to allow the staker to participate in reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | Amount of CLNY to stake for the purposes of mining |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.stakeForMining(uint256)

___

### startNextCycle

▸ **startNextCycle**(`overrides?`): `Promise`<`ContractTransaction`\>

Starts a new Reputation Mining cycle. Explicitly called only the first time, subsequently called from within `setReputationRootHash`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.startNextCycle

___

### startNextCycle()

▸ **startNextCycle()**(`overrides?`): `Promise`<`ContractTransaction`\>

Starts a new Reputation Mining cycle. Explicitly called only the first time, subsequently called from within `setReputationRootHash`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.startNextCycle()

___

### startTokenAuction

▸ **startTokenAuction**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Create and start a new `DutchAuction` for the entire amount of `_token` owned by the Colony Network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | Address of the token held by the network to be auctioned |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.startTokenAuction

___

### startTokenAuction(address)

▸ **startTokenAuction(address)**(`_token`, `overrides?`): `Promise`<`ContractTransaction`\>

Create and start a new `DutchAuction` for the entire amount of `_token` owned by the Colony Network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | Address of the token held by the network to be auctioned |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.startTokenAuction(address)

___

### supportsInterface

▸ **supportsInterface**(`_interfaceID`, `overrides?`): `Promise`<`boolean`\>

Interface identification is specified in ERC-165.
Query if a contract implements an interface

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_interfaceID` | `BytesLike` | The interface identifier, as specified in ERC-165 |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.supportsInterface

___

### supportsInterface(bytes4)

▸ **supportsInterface(bytes4)**(`_interfaceID`, `overrides?`): `Promise`<`boolean`\>

Interface identification is specified in ERC-165.
Query if a contract implements an interface

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_interfaceID` | `BytesLike` | The interface identifier, as specified in ERC-165 |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

IColonyNetwork.supportsInterface(bytes4)

___

### uninstallExtension

▸ **uninstallExtension**(`_extensionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Uninstall an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.uninstallExtension

___

### uninstallExtension(bytes32)

▸ **uninstallExtension(bytes32)**(`_extensionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Uninstall an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.uninstallExtension(bytes32)

___

### unstakeForMining

▸ **unstakeForMining**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Unstake CLNY currently staked for reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | Amount of CLNY staked for mining to unstake |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.unstakeForMining

___

### unstakeForMining(uint256)

▸ **unstakeForMining(uint256)**(`_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Unstake CLNY currently staked for reputation mining.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_amount` | `BigNumberish` | Amount of CLNY staked for mining to unstake |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.unstakeForMining(uint256)

___

### updateColonyOrbitDB

▸ **updateColonyOrbitDB**(`_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_orbitdb` | `string` | The path of the orbitDB database to be associated with the colony |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.updateColonyOrbitDB

___

### updateColonyOrbitDB(string)

▸ **updateColonyOrbitDB(string)**(`_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_orbitdb` | `string` | The path of the orbitDB database to be associated with the colony |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.updateColonyOrbitDB(string)

___

### updateUserOrbitDB

▸ **updateUserOrbitDB**(`_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a user's orbitdb address. Can only be called by a user with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_orbitdb` | `string` | The path of the orbitDB database to be associated with the user |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.updateUserOrbitDB

___

### updateUserOrbitDB(string)

▸ **updateUserOrbitDB(string)**(`_orbitdb`, `overrides?`): `Promise`<`ContractTransaction`\>

Update a user's orbitdb address. Can only be called by a user with a registered subdomain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_orbitdb` | `string` | The path of the orbitDB database to be associated with the user |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.updateUserOrbitDB(string)

___

### upgradeExtension

▸ **upgradeExtension**(`_extensionId`, `_newVersion`, `overrides?`): `Promise`<`ContractTransaction`\>

Upgrade an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_newVersion` | `BigNumberish` | Version of the extension to upgrade to (must be one greater than current) |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.upgradeExtension

___

### upgradeExtension(bytes32,uint256)

▸ **upgradeExtension(bytes32,uint256)**(`_extensionId`, `_newVersion`, `overrides?`): `Promise`<`ContractTransaction`\>

Upgrade an extension in a colony. Can only be called by a Colony.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extensionId` | `BytesLike` | keccak256 hash of the extension name, used as an indentifier |
| `_newVersion` | `BigNumberish` | Version of the extension to upgrade to (must be one greater than current) |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

IColonyNetwork.upgradeExtension(bytes32,uint256)
