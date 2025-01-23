[**API**](../README.md)

***

# Interface: ColonyNetworkClient

## Extends

- `IColonyNetwork`

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`IColonyNetwork._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`IColonyNetwork._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`IColonyNetwork._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`IColonyNetwork.address`

***

### callStatic

> **callStatic**: `object`

#### addColonyVersion()

##### Parameters

###### \_version

`BigNumberish`

###### \_resolver

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addColonyVersion(uint256,address)()

##### Parameters

###### \_version

`BigNumberish`

###### \_resolver

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addExtensionToNetwork()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_resolver

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addExtensionToNetwork(bytes32,address)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_resolver

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addPendingReputationUpdate()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addPendingReputationUpdate(uint256,address)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addPendingSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addPendingSkill(uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addr()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### addr(bytes32)()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### addReputationUpdateLogFromBridge()

##### Parameters

###### \_colony

`string`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addReputationUpdateLogFromBridge(address,address,int256,uint256,uint256)()

##### Parameters

###### \_colony

`string`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addSkill()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### addSkill(uint256)()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### addSkillFromBridge()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### addSkillFromBridge(uint256,uint256)()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### appendReputationUpdateLog()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### appendReputationUpdateLog(address,int256,uint256)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### approveExitRecovery()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### approveExitRecovery()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### bridgeCurrentRootHash()

##### Parameters

###### chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### bridgeCurrentRootHash(uint256)()

##### Parameters

###### chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### bridgePendingReputationUpdate()

##### Parameters

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### bridgePendingReputationUpdate(address,uint256)()

##### Parameters

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### bridgeSkillIfNotMiningChain()

##### Parameters

###### skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### bridgeSkillIfNotMiningChain(uint256)()

##### Parameters

###### skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### burnUnneededRewards()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### burnUnneededRewards(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### calculateMinerWeight()

##### Parameters

###### \_timeStaked

`BigNumberish`

###### \_submissonIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### calculateMinerWeight(uint256,uint256)()

##### Parameters

###### \_timeStaked

`BigNumberish`

###### \_submissonIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### checkNotAdditionalProtectedVariable()

##### Parameters

###### \_slot

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### checkNotAdditionalProtectedVariable(uint256)()

##### Parameters

###### \_slot

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimMiningReward()

##### Parameters

###### \_recipient

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claimMiningReward(address)()

##### Parameters

###### \_recipient

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createColony(address,uint256,string,string,bool)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### \_useExtensionManager

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### createColony(address,uint256,string,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### createColony(address,uint256,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### createColony(address)()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### createColonyForFrontend()

##### Parameters

###### \_tokenAddress

`string`

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`, `string`\] & `object`\>

#### createColonyForFrontend(address,string,string,uint8,uint256,string,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`, `string`\] & `object`\>

#### createMetaColony()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createMetaColony(address)()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deployTokenAuthority()

##### Parameters

###### \_token

`string`

###### \_colony

`string`

###### \_allowedToTransfer

`string`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### deployTokenAuthority(address,address,address\[\])()

##### Parameters

###### \_token

`string`

###### \_colony

`string`

###### \_allowedToTransfer

`string`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### deployTokenViaNetwork()

##### Parameters

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### deployTokenViaNetwork(string,string,uint8)()

##### Parameters

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### deprecateExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_deprecated

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecateExtension(bytes32,bool)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_deprecated

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecateSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_deprecated

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### deprecateSkill(uint256,bool)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_deprecated

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### enterRecoveryMode()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### enterRecoveryMode()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### exitRecoveryMode()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### exitRecoveryMode()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### getBridgedReputationUpdateCount()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getBridgedReputationUpdateCount(uint256,address)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getBridgedSkillCounts()

##### Parameters

###### \_chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getBridgedSkillCounts(uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getChildSkillId()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getChildSkillId(uint256,uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getColony()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColony(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColonyBridgeAddress()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColonyBridgeAddress()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColonyCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getColonyCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getColonyCreationSalt()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColonyCreationSalt()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColonyVersionResolver()

##### Parameters

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColonyVersionResolver(uint256)()

##### Parameters

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getCurrentColonyVersion()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getCurrentColonyVersion()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getENSRegistrar()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getENSRegistrar()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getExtensionInstallation()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getExtensionInstallation(bytes32,address)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getExtensionResolver()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getExtensionResolver(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getFeeInverse()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getFeeInverse()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetaColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMetaColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMiningChainId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMiningChainId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMiningDelegator()

##### Parameters

###### \_delegate

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMiningDelegator(address)()

##### Parameters

###### \_delegate

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMiningResolver()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMiningResolver()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getMiningStake()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MiningStakeStructOutput`\>

#### getMiningStake(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MiningStakeStructOutput`\>

#### getParentSkillId()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_parentSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getParentSkillId(uint256,uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_parentSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getPayoutWhitelist()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getPayoutWhitelist(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getPendingReputationUpdate()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PendingReputationUpdateStructOutput`\>

#### getPendingReputationUpdate(uint256,address,uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PendingReputationUpdateStructOutput`\>

#### getPendingSkillAddition()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getPendingSkillAddition(uint256,uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getProfileDBAddress()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getProfileDBAddress(bytes32)()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getReplacementReputationUpdateLogEntry()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`ReputationLogEntryStructOutput`\>

#### getReplacementReputationUpdateLogEntry(address,uint256)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`ReputationLogEntryStructOutput`\>

#### getReplacementReputationUpdateLogsExist()

##### Parameters

###### \_reputationMiningCycle

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getReplacementReputationUpdateLogsExist(address)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getReputationMiningCycle()

##### Parameters

###### \_active

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getReputationMiningCycle(bool)()

##### Parameters

###### \_active

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getReputationMiningCycleReward()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getReputationMiningCycleReward()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getReputationMiningSkillId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getReputationMiningSkillId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getReputationRootHash()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getReputationRootHash()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getReputationRootHashNLeaves()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getReputationRootHashNLeaves()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getReputationRootHashNNodes()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getReputationRootHashNNodes()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`SkillStructOutput`\>

#### getSkill(uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`SkillStructOutput`\>

#### getSkillCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getSkillCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTokenLocking()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getTokenLocking()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### initialise()

##### Parameters

###### \_resolver

`string`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialise(address,uint256)()

##### Parameters

###### \_resolver

`string`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialiseReputationMining()

##### Parameters

###### miningChainId

`BigNumberish`

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialiseReputationMining(uint256,bytes32,uint256)()

##### Parameters

###### miningChainId

`BigNumberish`

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialiseRootLocalSkill()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### initialiseRootLocalSkill()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### installExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### installExtension(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### isColony()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### isColony(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### isInRecoveryMode()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### isInRecoveryMode()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### lookupRegisteredENSDomain()

##### Parameters

###### \_addr

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### lookupRegisteredENSDomain(address)()

##### Parameters

###### \_addr

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### multicall()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`[]\>

#### multicall(bytes\[\])()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`[]\>

#### numRecoveryRoles()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### numRecoveryRoles()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### punishStakers()

##### Parameters

###### \_stakers

`string`[]

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### punishStakers(address\[\],uint256)()

##### Parameters

###### \_stakers

`string`[]

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### registerColonyLabel()

##### Parameters

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### registerColonyLabel(string,string)()

##### Parameters

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### registerUserLabel()

##### Parameters

###### \_username

`string`

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### registerUserLabel(string,string)()

##### Parameters

###### \_username

`string`

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### removeRecoveryRole()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### removeRecoveryRole(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### setColonyBridgeAddress()

##### Parameters

###### \_bridgeAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setColonyBridgeAddress(address)()

##### Parameters

###### \_bridgeAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setFeeInverse()

##### Parameters

###### \_feeInverse

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setFeeInverse(uint256)()

##### Parameters

###### \_feeInverse

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setMiningDelegate()

##### Parameters

###### \_delegate

`string`

###### \_allowed

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setMiningDelegate(address,bool)()

##### Parameters

###### \_delegate

`string`

###### \_allowed

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setMiningResolver()

##### Parameters

###### \_miningResolverAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setMiningResolver(address)()

##### Parameters

###### \_miningResolverAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setPayoutWhitelist()

##### Parameters

###### \_token

`string`

###### \_status

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setPayoutWhitelist(address,bool)()

##### Parameters

###### \_token

`string`

###### \_status

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setRecoveryRole()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setRecoveryRole(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReplacementReputationUpdateLogEntry()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_colony

`string`

###### \_nUpdates

`BigNumberish`

###### \_nPreviousUpdates

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_colony

`string`

###### \_nUpdates

`BigNumberish`

###### \_nPreviousUpdates

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReputationMiningCycleReward()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReputationMiningCycleReward(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReputationRootHash()

##### Parameters

###### \_newHash

`BytesLike`

###### \_newNLeaves

`BigNumberish`

###### \_stakers

`string`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReputationRootHash(bytes32,uint256,address\[\])()

##### Parameters

###### \_newHash

`BytesLike`

###### \_newNLeaves

`BigNumberish`

###### \_stakers

`string`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReputationRootHashFromBridge()

##### Parameters

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### nonce

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setReputationRootHashFromBridge(bytes32,uint256,uint256)()

##### Parameters

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### nonce

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setStorageSlotRecovery()

##### Parameters

###### \_slot

`BigNumberish`

###### \_value

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setStorageSlotRecovery(uint256,bytes32)()

##### Parameters

###### \_slot

`BigNumberish`

###### \_value

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setTokenLocking()

##### Parameters

###### \_tokenLockingAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setTokenLocking(address)()

##### Parameters

###### \_tokenLockingAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setupRegistrar()

##### Parameters

###### \_ens

`string`

###### \_rootNode

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setupRegistrar(address,bytes32)()

##### Parameters

###### \_ens

`string`

###### \_rootNode

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### stakeForMining()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### stakeForMining(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### startNextCycle()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### startNextCycle()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### startTokenAuction()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### startTokenAuction(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### supportsInterface()

##### Parameters

###### \_interfaceID

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### supportsInterface(bytes4)()

##### Parameters

###### \_interfaceID

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### uninstallExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### uninstallExtension(bytes32)()

##### Parameters

###### \_extensionId

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### unstakeForMining()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### unstakeForMining(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### updateColonyOrbitDB()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### updateColonyOrbitDB(string)()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### updateUserOrbitDB()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### updateUserOrbitDB(string)()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### upgradeExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_newVersion

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### upgradeExtension(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_newVersion

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### Inherited from

`IColonyNetwork.callStatic`

***

### clientType

> **clientType**: [`NetworkClient`](../enumerations/ClientType.md#networkclient)

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`IColonyNetwork.deployTransaction`

***

### disableVersionCheck

> **disableVersionCheck**: `boolean`

***

### estimateGas

> **estimateGas**: `ExtendedEstimate`

#### Overrides

`IColonyNetwork.estimateGas`

***

### filters

> **filters**: `object`

#### AuctionCreated()

##### Parameters

###### auction?

`null`

###### token?

`null`

###### quantity?

`null`

##### Returns

`AuctionCreatedEventFilter`

#### AuctionCreated(address,address,uint256)()

##### Parameters

###### auction?

`null`

###### token?

`null`

###### quantity?

`null`

##### Returns

`AuctionCreatedEventFilter`

#### BridgeSet()

##### Parameters

###### bridgeAddress?

`null`

##### Returns

`BridgeSetEventFilter`

#### BridgeSet(address)()

##### Parameters

###### bridgeAddress?

`null`

##### Returns

`BridgeSetEventFilter`

#### ColonyAdded()

##### Parameters

###### colonyId?

`null` | `BigNumberish`

###### colonyAddress?

`null` | `string`

###### token?

`null`

##### Returns

`ColonyAddedEventFilter`

#### ColonyAdded(uint256,address,address)()

##### Parameters

###### colonyId?

`null` | `BigNumberish`

###### colonyAddress?

`null` | `string`

###### token?

`null`

##### Returns

`ColonyAddedEventFilter`

#### ColonyLabelRegistered()

##### Parameters

###### colony?

`null` | `string`

###### label?

`null`

##### Returns

`ColonyLabelRegisteredEventFilter`

#### ColonyLabelRegistered(address,bytes32)()

##### Parameters

###### colony?

`null` | `string`

###### label?

`null`

##### Returns

`ColonyLabelRegisteredEventFilter`

#### ColonyNetworkInitialised()

##### Parameters

###### resolver?

`null`

##### Returns

`ColonyNetworkInitialisedEventFilter`

#### ColonyNetworkInitialised(address)()

##### Parameters

###### resolver?

`null`

##### Returns

`ColonyNetworkInitialisedEventFilter`

#### ColonyVersionAdded()

##### Parameters

###### version?

`null`

###### resolver?

`null`

##### Returns

`ColonyVersionAddedEventFilter`

#### ColonyVersionAdded(uint256,address)()

##### Parameters

###### version?

`null`

###### resolver?

`null`

##### Returns

`ColonyVersionAddedEventFilter`

#### ExtensionAddedToNetwork()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### version?

`null`

##### Returns

`ExtensionAddedToNetworkEventFilter`

#### ExtensionAddedToNetwork(bytes32,uint256)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### version?

`null`

##### Returns

`ExtensionAddedToNetworkEventFilter`

#### ExtensionDeprecated()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### deprecated?

`null`

##### Returns

`ExtensionDeprecatedEventFilter`

#### ExtensionDeprecated(bytes32,address,bool)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### deprecated?

`null`

##### Returns

`ExtensionDeprecatedEventFilter`

#### ExtensionInstalled()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

`ExtensionInstalledEventFilter`

#### ExtensionInstalled(bytes32,address,uint256)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

`ExtensionInstalledEventFilter`

#### ExtensionUninstalled()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

##### Returns

`ExtensionUninstalledEventFilter`

#### ExtensionUninstalled(bytes32,address)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

##### Returns

`ExtensionUninstalledEventFilter`

#### ExtensionUpgraded()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

`ExtensionUpgradedEventFilter`

#### ExtensionUpgraded(bytes32,address,uint256)()

##### Parameters

###### extensionId?

`null` | `BytesLike`

###### colony?

`null` | `string`

###### version?

`null`

##### Returns

`ExtensionUpgradedEventFilter`

#### MetaColonyCreated()

##### Parameters

###### metaColony?

`null`

###### token?

`null`

###### rootSkillId?

`null`

##### Returns

`MetaColonyCreatedEventFilter`

#### MetaColonyCreated(address,address,uint256)()

##### Parameters

###### metaColony?

`null`

###### token?

`null`

###### rootSkillId?

`null`

##### Returns

`MetaColonyCreatedEventFilter`

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

#### MiningCycleResolverSet()

##### Parameters

###### miningCycleResolver?

`null`

##### Returns

`MiningCycleResolverSetEventFilter`

#### MiningCycleResolverSet(address)()

##### Parameters

###### miningCycleResolver?

`null`

##### Returns

`MiningCycleResolverSetEventFilter`

#### NetworkFeeInverseSet()

##### Parameters

###### feeInverse?

`null`

##### Returns

`NetworkFeeInverseSetEventFilter`

#### NetworkFeeInverseSet(uint256)()

##### Parameters

###### feeInverse?

`null`

##### Returns

`NetworkFeeInverseSetEventFilter`

#### RecoveryModeEntered()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeEnteredEventFilter`

#### RecoveryModeEntered(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeEnteredEventFilter`

#### RecoveryModeExitApproved()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitApprovedEventFilter`

#### RecoveryModeExitApproved(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitApprovedEventFilter`

#### RecoveryModeExited()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitedEventFilter`

#### RecoveryModeExited(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitedEventFilter`

#### RecoveryRoleSet()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

`RecoveryRoleSetEventFilter`

#### RecoveryRoleSet(address,bool)()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

`RecoveryRoleSetEventFilter`

#### RecoveryStorageSlotSet()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

`RecoveryStorageSlotSetEventFilter`

#### RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

`RecoveryStorageSlotSetEventFilter`

#### RegistrarInitialised()

##### Parameters

###### ens?

`null`

###### rootNode?

`null`

##### Returns

`RegistrarInitialisedEventFilter`

#### RegistrarInitialised(address,bytes32)()

##### Parameters

###### ens?

`null`

###### rootNode?

`null`

##### Returns

`RegistrarInitialisedEventFilter`

#### ReputationMinerPenalised()

##### Parameters

###### miner?

`null`

###### tokensLost?

`null`

##### Returns

`ReputationMinerPenalisedEventFilter`

#### ReputationMinerPenalised(address,uint256)()

##### Parameters

###### miner?

`null`

###### tokensLost?

`null`

##### Returns

`ReputationMinerPenalisedEventFilter`

#### ReputationMiningCycleComplete()

##### Parameters

###### hash?

`null`

###### nLeaves?

`null`

##### Returns

`ReputationMiningCycleCompleteEventFilter`

#### ReputationMiningCycleComplete(bytes32,uint256)()

##### Parameters

###### hash?

`null`

###### nLeaves?

`null`

##### Returns

`ReputationMiningCycleCompleteEventFilter`

#### ReputationMiningInitialised()

##### Parameters

###### inactiveReputationMiningCycle?

`null`

##### Returns

`ReputationMiningInitialisedEventFilter`

#### ReputationMiningInitialised(address)()

##### Parameters

###### inactiveReputationMiningCycle?

`null`

##### Returns

`ReputationMiningInitialisedEventFilter`

#### ReputationMiningRewardSet()

##### Parameters

###### amount?

`null`

##### Returns

`ReputationMiningRewardSetEventFilter`

#### ReputationMiningRewardSet(uint256)()

##### Parameters

###### amount?

`null`

##### Returns

`ReputationMiningRewardSetEventFilter`

#### ReputationRootHashSet()

##### Parameters

###### newHash?

`null`

###### newNLeaves?

`null`

###### stakers?

`null`

###### reward?

`null`

##### Returns

`ReputationRootHashSetEventFilter`

#### ReputationRootHashSet(bytes32,uint256,address\[\],uint256)()

##### Parameters

###### newHash?

`null`

###### newNLeaves?

`null`

###### stakers?

`null`

###### reward?

`null`

##### Returns

`ReputationRootHashSetEventFilter`

#### ReputationUpdateAddedFromBridge()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

`ReputationUpdateAddedFromBridgeEventFilter`

#### ReputationUpdateAddedFromBridge(uint256,address,uint256)()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

`ReputationUpdateAddedFromBridgeEventFilter`

#### ReputationUpdateSentToBridge()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

`ReputationUpdateSentToBridgeEventFilter`

#### ReputationUpdateSentToBridge(address,uint256)()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

`ReputationUpdateSentToBridgeEventFilter`

#### ReputationUpdateStored()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

`ReputationUpdateStoredEventFilter`

#### ReputationUpdateStored(address,uint256)()

##### Parameters

###### colony?

`null`

###### count?

`null`

##### Returns

`ReputationUpdateStoredEventFilter`

#### ReputationUpdateStoredFromBridge()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

`ReputationUpdateStoredFromBridgeEventFilter`

#### ReputationUpdateStoredFromBridge(uint256,address,uint256)()

##### Parameters

###### chainId?

`null`

###### colony?

`null`

###### updateNumber?

`null`

##### Returns

`ReputationUpdateStoredFromBridgeEventFilter`

#### SkillAdded()

##### Parameters

###### skillId?

`null`

###### parentSkillId?

`null`

##### Returns

`SkillAddedEventFilter`

#### SkillAdded(uint256,uint256)()

##### Parameters

###### skillId?

`null`

###### parentSkillId?

`null`

##### Returns

`SkillAddedEventFilter`

#### SkillAddedFromBridge()

##### Parameters

###### skillId?

`null`

##### Returns

`SkillAddedFromBridgeEventFilter`

#### SkillAddedFromBridge(uint256)()

##### Parameters

###### skillId?

`null`

##### Returns

`SkillAddedFromBridgeEventFilter`

#### SkillCreationStored()

##### Parameters

###### skillId?

`null`

##### Returns

`SkillCreationStoredEventFilter`

#### SkillCreationStored(uint256)()

##### Parameters

###### skillId?

`null`

##### Returns

`SkillCreationStoredEventFilter`

#### SkillStoredFromBridge()

##### Parameters

###### skillId?

`null`

##### Returns

`SkillStoredFromBridgeEventFilter`

#### SkillStoredFromBridge(uint256)()

##### Parameters

###### skillId?

`null`

##### Returns

`SkillStoredFromBridgeEventFilter`

#### TokenAuthorityDeployed()

##### Parameters

###### tokenAuthorityAddress?

`null`

##### Returns

`TokenAuthorityDeployedEventFilter`

#### TokenAuthorityDeployed(address)()

##### Parameters

###### tokenAuthorityAddress?

`null`

##### Returns

`TokenAuthorityDeployedEventFilter`

#### TokenDeployed()

##### Parameters

###### tokenAddress?

`null`

##### Returns

`TokenDeployedEventFilter`

#### TokenDeployed(address)()

##### Parameters

###### tokenAddress?

`null`

##### Returns

`TokenDeployedEventFilter`

#### TokenLockingAddressSet()

##### Parameters

###### tokenLocking?

`null`

##### Returns

`TokenLockingAddressSetEventFilter`

#### TokenLockingAddressSet(address)()

##### Parameters

###### tokenLocking?

`null`

##### Returns

`TokenLockingAddressSetEventFilter`

#### TokenWhitelisted()

##### Parameters

###### token?

`null`

###### status?

`null`

##### Returns

`TokenWhitelistedEventFilter`

#### TokenWhitelisted(address,bool)()

##### Parameters

###### token?

`null`

###### status?

`null`

##### Returns

`TokenWhitelistedEventFilter`

#### UserLabelRegistered()

##### Parameters

###### user?

`null` | `string`

###### label?

`null`

##### Returns

`UserLabelRegisteredEventFilter`

#### UserLabelRegistered(address,bytes32)()

##### Parameters

###### user?

`null` | `string`

###### label?

`null`

##### Returns

`UserLabelRegisteredEventFilter`

#### Inherited from

`IColonyNetwork.filters`

***

### functions

> **functions**: `object`

#### addColonyVersion()

##### Parameters

###### \_version

`BigNumberish`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addColonyVersion(uint256,address)()

##### Parameters

###### \_version

`BigNumberish`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addExtensionToNetwork()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addExtensionToNetwork(bytes32,address)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addPendingReputationUpdate()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addPendingReputationUpdate(uint256,address)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addPendingSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addPendingSkill(uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addr()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### addr(bytes32)()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### addReputationUpdateLogFromBridge()

##### Parameters

###### \_colony

`string`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addReputationUpdateLogFromBridge(address,address,int256,uint256,uint256)()

##### Parameters

###### \_colony

`string`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addSkill()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addSkill(uint256)()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addSkillFromBridge()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### addSkillFromBridge(uint256,uint256)()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### appendReputationUpdateLog()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### appendReputationUpdateLog(address,int256,uint256)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### approveExitRecovery()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### approveExitRecovery()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### bridgeCurrentRootHash()

##### Parameters

###### chainId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### bridgeCurrentRootHash(uint256)()

##### Parameters

###### chainId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### bridgePendingReputationUpdate()

##### Parameters

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### bridgePendingReputationUpdate(address,uint256)()

##### Parameters

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### bridgeSkillIfNotMiningChain()

##### Parameters

###### skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### bridgeSkillIfNotMiningChain(uint256)()

##### Parameters

###### skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### burnUnneededRewards()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### burnUnneededRewards(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### calculateMinerWeight()

##### Parameters

###### \_timeStaked

`BigNumberish`

###### \_submissonIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### calculateMinerWeight(uint256,uint256)()

##### Parameters

###### \_timeStaked

`BigNumberish`

###### \_submissonIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### checkNotAdditionalProtectedVariable()

##### Parameters

###### \_slot

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`void`\]\>

#### checkNotAdditionalProtectedVariable(uint256)()

##### Parameters

###### \_slot

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`void`\]\>

#### claimMiningReward()

##### Parameters

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claimMiningReward(address)()

##### Parameters

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createColony(address,uint256,string,string,bool)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### \_useExtensionManager

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createColony(address,uint256,string,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createColony(address,uint256,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createColony(address)()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createColonyForFrontend()

##### Parameters

###### \_tokenAddress

`string`

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createColonyForFrontend(address,string,string,uint8,uint256,string,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMetaColony()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMetaColony(address)()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deployTokenAuthority()

##### Parameters

###### \_token

`string`

###### \_colony

`string`

###### \_allowedToTransfer

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deployTokenAuthority(address,address,address\[\])()

##### Parameters

###### \_token

`string`

###### \_colony

`string`

###### \_allowedToTransfer

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deployTokenViaNetwork()

##### Parameters

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deployTokenViaNetwork(string,string,uint8)()

##### Parameters

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecateExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecateExtension(bytes32,bool)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecateSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecateSkill(uint256,bool)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### enterRecoveryMode()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### enterRecoveryMode()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### exitRecoveryMode()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### exitRecoveryMode()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### getBridgedReputationUpdateCount()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getBridgedReputationUpdateCount(uint256,address)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getBridgedSkillCounts()

##### Parameters

###### \_chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getBridgedSkillCounts(uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getChildSkillId()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getChildSkillId(uint256,uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getColony()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColony(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColonyBridgeAddress()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColonyBridgeAddress()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColonyCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getColonyCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getColonyCreationSalt()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColonyCreationSalt()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColonyVersionResolver()

##### Parameters

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getColonyVersionResolver(uint256)()

##### Parameters

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getCurrentColonyVersion()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getCurrentColonyVersion()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getENSRegistrar()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getENSRegistrar()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getExtensionInstallation()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getExtensionInstallation(bytes32,address)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getExtensionResolver()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getExtensionResolver(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getFeeInverse()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getFeeInverse()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetaColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getMetaColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMiningChainId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMiningChainId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMiningDelegator()

##### Parameters

###### \_delegate

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getMiningDelegator(address)()

##### Parameters

###### \_delegate

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getMiningResolver()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getMiningResolver()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getMiningStake()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MiningStakeStructOutput`\] & `object`\>

#### getMiningStake(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MiningStakeStructOutput`\] & `object`\>

#### getParentSkillId()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_parentSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getParentSkillId(uint256,uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_parentSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getPayoutWhitelist()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### getPayoutWhitelist(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### getPendingReputationUpdate()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`PendingReputationUpdateStructOutput`\] & `object`\>

#### getPendingReputationUpdate(uint256,address,uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`PendingReputationUpdateStructOutput`\] & `object`\>

#### getPendingSkillAddition()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getPendingSkillAddition(uint256,uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getProfileDBAddress()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getProfileDBAddress(bytes32)()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getReplacementReputationUpdateLogEntry()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`ReputationLogEntryStructOutput`\] & `object`\>

#### getReplacementReputationUpdateLogEntry(address,uint256)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`ReputationLogEntryStructOutput`\] & `object`\>

#### getReplacementReputationUpdateLogsExist()

##### Parameters

###### \_reputationMiningCycle

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### getReplacementReputationUpdateLogsExist(address)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### getReputationMiningCycle()

##### Parameters

###### \_active

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getReputationMiningCycle(bool)()

##### Parameters

###### \_active

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getReputationMiningCycleReward()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getReputationMiningCycleReward()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getReputationMiningSkillId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getReputationMiningSkillId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getReputationRootHash()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getReputationRootHash()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getReputationRootHashNLeaves()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getReputationRootHashNLeaves()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getReputationRootHashNNodes()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getReputationRootHashNNodes()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`SkillStructOutput`\] & `object`\>

#### getSkill(uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`SkillStructOutput`\] & `object`\>

#### getSkillCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getSkillCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTokenLocking()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getTokenLocking()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### initialise()

##### Parameters

###### \_resolver

`string`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialise(address,uint256)()

##### Parameters

###### \_resolver

`string`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialiseReputationMining()

##### Parameters

###### miningChainId

`BigNumberish`

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialiseReputationMining(uint256,bytes32,uint256)()

##### Parameters

###### miningChainId

`BigNumberish`

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialiseRootLocalSkill()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialiseRootLocalSkill()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### installExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### installExtension(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### isColony()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### isColony(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### isInRecoveryMode()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### isInRecoveryMode()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### lookupRegisteredENSDomain()

##### Parameters

###### \_addr

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### lookupRegisteredENSDomain(address)()

##### Parameters

###### \_addr

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### multicall()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### multicall(bytes\[\])()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### numRecoveryRoles()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### numRecoveryRoles()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### punishStakers()

##### Parameters

###### \_stakers

`string`[]

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### punishStakers(address\[\],uint256)()

##### Parameters

###### \_stakers

`string`[]

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### registerColonyLabel()

##### Parameters

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### registerColonyLabel(string,string)()

##### Parameters

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### registerUserLabel()

##### Parameters

###### \_username

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### registerUserLabel(string,string)()

##### Parameters

###### \_username

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### removeRecoveryRole()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### removeRecoveryRole(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### reward()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### reward(address,uint256)()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setColonyBridgeAddress()

##### Parameters

###### \_bridgeAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setColonyBridgeAddress(address)()

##### Parameters

###### \_bridgeAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setFeeInverse()

##### Parameters

###### \_feeInverse

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setFeeInverse(uint256)()

##### Parameters

###### \_feeInverse

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setMiningDelegate()

##### Parameters

###### \_delegate

`string`

###### \_allowed

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setMiningDelegate(address,bool)()

##### Parameters

###### \_delegate

`string`

###### \_allowed

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setMiningResolver()

##### Parameters

###### \_miningResolverAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setMiningResolver(address)()

##### Parameters

###### \_miningResolverAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setPayoutWhitelist()

##### Parameters

###### \_token

`string`

###### \_status

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setPayoutWhitelist(address,bool)()

##### Parameters

###### \_token

`string`

###### \_status

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setRecoveryRole()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setRecoveryRole(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReplacementReputationUpdateLogEntry()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_colony

`string`

###### \_nUpdates

`BigNumberish`

###### \_nPreviousUpdates

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_colony

`string`

###### \_nUpdates

`BigNumberish`

###### \_nPreviousUpdates

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReputationMiningCycleReward()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReputationMiningCycleReward(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReputationRootHash()

##### Parameters

###### \_newHash

`BytesLike`

###### \_newNLeaves

`BigNumberish`

###### \_stakers

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReputationRootHash(bytes32,uint256,address\[\])()

##### Parameters

###### \_newHash

`BytesLike`

###### \_newNLeaves

`BigNumberish`

###### \_stakers

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReputationRootHashFromBridge()

##### Parameters

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### nonce

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setReputationRootHashFromBridge(bytes32,uint256,uint256)()

##### Parameters

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### nonce

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setStorageSlotRecovery()

##### Parameters

###### \_slot

`BigNumberish`

###### \_value

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setStorageSlotRecovery(uint256,bytes32)()

##### Parameters

###### \_slot

`BigNumberish`

###### \_value

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setTokenLocking()

##### Parameters

###### \_tokenLockingAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setTokenLocking(address)()

##### Parameters

###### \_tokenLockingAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setupRegistrar()

##### Parameters

###### \_ens

`string`

###### \_rootNode

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setupRegistrar(address,bytes32)()

##### Parameters

###### \_ens

`string`

###### \_rootNode

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### stakeForMining()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### stakeForMining(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### startNextCycle()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### startNextCycle()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### startTokenAuction()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### startTokenAuction(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### supportsInterface()

##### Parameters

###### \_interfaceID

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### supportsInterface(bytes4)()

##### Parameters

###### \_interfaceID

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\] & `object`\>

#### uninstallExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### uninstallExtension(bytes32)()

##### Parameters

###### \_extensionId

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### unstakeForMining()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### unstakeForMining(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### updateColonyOrbitDB()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### updateColonyOrbitDB(string)()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### updateUserOrbitDB()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### updateUserOrbitDB(string)()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### upgradeExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_newVersion

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### upgradeExtension(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_newVersion

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.functions`

***

### interface

> **interface**: `IColonyNetworkInterface`

#### Inherited from

`IColonyNetwork.interface`

***

### network

> **network**: [`Network`](../enumerations/Network.md)

***

### off

> **off**: `OnEvent`\<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

`IColonyNetwork.off`

***

### on

> **on**: `OnEvent`\<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

`IColonyNetwork.on`

***

### once

> **once**: `OnEvent`\<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

`IColonyNetwork.once`

***

### populateTransaction

> **populateTransaction**: `object`

#### addColonyVersion()

##### Parameters

###### \_version

`BigNumberish`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addColonyVersion(uint256,address)()

##### Parameters

###### \_version

`BigNumberish`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addExtensionToNetwork()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addExtensionToNetwork(bytes32,address)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_resolver

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addPendingReputationUpdate()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addPendingReputationUpdate(uint256,address)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addPendingSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addPendingSkill(uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addr()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addr(bytes32)()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addReputationUpdateLogFromBridge()

##### Parameters

###### \_colony

`string`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addReputationUpdateLogFromBridge(address,address,int256,uint256,uint256)()

##### Parameters

###### \_colony

`string`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addSkill()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addSkill(uint256)()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addSkillFromBridge()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### addSkillFromBridge(uint256,uint256)()

##### Parameters

###### \_parentSkillId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### appendReputationUpdateLog()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### appendReputationUpdateLog(address,int256,uint256)()

##### Parameters

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approveExitRecovery()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### approveExitRecovery()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### bridgeCurrentRootHash()

##### Parameters

###### chainId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### bridgeCurrentRootHash(uint256)()

##### Parameters

###### chainId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### bridgePendingReputationUpdate()

##### Parameters

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### bridgePendingReputationUpdate(address,uint256)()

##### Parameters

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### bridgeSkillIfNotMiningChain()

##### Parameters

###### skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### bridgeSkillIfNotMiningChain(uint256)()

##### Parameters

###### skillId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### burnUnneededRewards()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### burnUnneededRewards(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### calculateMinerWeight()

##### Parameters

###### \_timeStaked

`BigNumberish`

###### \_submissonIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### calculateMinerWeight(uint256,uint256)()

##### Parameters

###### \_timeStaked

`BigNumberish`

###### \_submissonIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### checkNotAdditionalProtectedVariable()

##### Parameters

###### \_slot

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### checkNotAdditionalProtectedVariable(uint256)()

##### Parameters

###### \_slot

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimMiningReward()

##### Parameters

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claimMiningReward(address)()

##### Parameters

###### \_recipient

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createColony(address,uint256,string,string,bool)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### \_useExtensionManager

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createColony(address,uint256,string,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createColony(address,uint256,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createColony(address)()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createColonyForFrontend()

##### Parameters

###### \_tokenAddress

`string`

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createColonyForFrontend(address,string,string,uint8,uint256,string,string)()

##### Parameters

###### \_tokenAddress

`string`

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### \_version

`BigNumberish`

###### \_colonyName

`string`

###### \_metadata

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMetaColony()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMetaColony(address)()

##### Parameters

###### \_tokenAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deployTokenAuthority()

##### Parameters

###### \_token

`string`

###### \_colony

`string`

###### \_allowedToTransfer

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deployTokenAuthority(address,address,address\[\])()

##### Parameters

###### \_token

`string`

###### \_colony

`string`

###### \_allowedToTransfer

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deployTokenViaNetwork()

##### Parameters

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deployTokenViaNetwork(string,string,uint8)()

##### Parameters

###### \_name

`string`

###### \_symbol

`string`

###### \_decimals

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecateExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecateExtension(bytes32,bool)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecateSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecateSkill(uint256,bool)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### enterRecoveryMode()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### enterRecoveryMode()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

##### Parameters

###### userAddress

`string`

###### payload

`BytesLike`

###### sigR

`BytesLike`

###### sigS

`BytesLike`

###### sigV

`BigNumberish`

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### exitRecoveryMode()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### exitRecoveryMode()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getBridgedReputationUpdateCount()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getBridgedReputationUpdateCount(uint256,address)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getBridgedSkillCounts()

##### Parameters

###### \_chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getBridgedSkillCounts(uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getChildSkillId()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getChildSkillId(uint256,uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColony()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColony(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyBridgeAddress()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyBridgeAddress()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyCreationSalt()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyCreationSalt()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyVersionResolver()

##### Parameters

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColonyVersionResolver(uint256)()

##### Parameters

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getCurrentColonyVersion()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getCurrentColonyVersion()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getENSRegistrar()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getENSRegistrar()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExtensionInstallation()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExtensionInstallation(bytes32,address)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExtensionResolver()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getExtensionResolver(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getFeeInverse()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getFeeInverse()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetaColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetaColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce(address)()

##### Parameters

###### userAddress

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningChainId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningChainId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningDelegator()

##### Parameters

###### \_delegate

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningDelegator(address)()

##### Parameters

###### \_delegate

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningResolver()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningResolver()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningStake()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMiningStake(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getParentSkillId()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_parentSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getParentSkillId(uint256,uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### \_parentSkillIndex

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getPayoutWhitelist()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getPayoutWhitelist(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getPendingReputationUpdate()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getPendingReputationUpdate(uint256,address,uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_colony

`string`

###### \_updateNumber

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getPendingSkillAddition()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getPendingSkillAddition(uint256,uint256)()

##### Parameters

###### \_chainId

`BigNumberish`

###### \_skillCount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getProfileDBAddress()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getProfileDBAddress(bytes32)()

##### Parameters

###### \_node

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReplacementReputationUpdateLogEntry()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReplacementReputationUpdateLogEntry(address,uint256)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReplacementReputationUpdateLogsExist()

##### Parameters

###### \_reputationMiningCycle

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReplacementReputationUpdateLogsExist(address)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationMiningCycle()

##### Parameters

###### \_active

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationMiningCycle(bool)()

##### Parameters

###### \_active

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationMiningCycleReward()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationMiningCycleReward()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationMiningSkillId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationMiningSkillId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationRootHash()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationRootHash()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationRootHashNLeaves()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationRootHashNLeaves()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationRootHashNNodes()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getReputationRootHashNNodes()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSkill()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSkill(uint256)()

##### Parameters

###### \_skillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSkillCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSkillCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTokenLocking()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTokenLocking()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise()

##### Parameters

###### \_resolver

`string`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise(address,uint256)()

##### Parameters

###### \_resolver

`string`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialiseReputationMining()

##### Parameters

###### miningChainId

`BigNumberish`

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialiseReputationMining(uint256,bytes32,uint256)()

##### Parameters

###### miningChainId

`BigNumberish`

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialiseRootLocalSkill()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialiseRootLocalSkill()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### installExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### installExtension(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_version

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### isColony()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### isColony(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### isInRecoveryMode()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### isInRecoveryMode()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### lookupRegisteredENSDomain()

##### Parameters

###### \_addr

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### lookupRegisteredENSDomain(address)()

##### Parameters

###### \_addr

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### multicall()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### multicall(bytes\[\])()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### numRecoveryRoles()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### numRecoveryRoles()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### punishStakers()

##### Parameters

###### \_stakers

`string`[]

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### punishStakers(address\[\],uint256)()

##### Parameters

###### \_stakers

`string`[]

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### registerColonyLabel()

##### Parameters

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### registerColonyLabel(string,string)()

##### Parameters

###### \_colonyName

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### registerUserLabel()

##### Parameters

###### \_username

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### registerUserLabel(string,string)()

##### Parameters

###### \_username

`string`

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### removeRecoveryRole()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### removeRecoveryRole(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### reward()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### reward(address,uint256)()

##### Parameters

###### \_recipient

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setColonyBridgeAddress()

##### Parameters

###### \_bridgeAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setColonyBridgeAddress(address)()

##### Parameters

###### \_bridgeAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setFeeInverse()

##### Parameters

###### \_feeInverse

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setFeeInverse(uint256)()

##### Parameters

###### \_feeInverse

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setMiningDelegate()

##### Parameters

###### \_delegate

`string`

###### \_allowed

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setMiningDelegate(address,bool)()

##### Parameters

###### \_delegate

`string`

###### \_allowed

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setMiningResolver()

##### Parameters

###### \_miningResolverAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setMiningResolver(address)()

##### Parameters

###### \_miningResolverAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setPayoutWhitelist()

##### Parameters

###### \_token

`string`

###### \_status

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setPayoutWhitelist(address,bool)()

##### Parameters

###### \_token

`string`

###### \_status

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setRecoveryRole()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setRecoveryRole(address)()

##### Parameters

###### \_user

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReplacementReputationUpdateLogEntry()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_colony

`string`

###### \_nUpdates

`BigNumberish`

###### \_nPreviousUpdates

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)()

##### Parameters

###### \_reputationMiningCycle

`string`

###### \_id

`BigNumberish`

###### \_user

`string`

###### \_amount

`BigNumberish`

###### \_skillId

`BigNumberish`

###### \_colony

`string`

###### \_nUpdates

`BigNumberish`

###### \_nPreviousUpdates

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReputationMiningCycleReward()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReputationMiningCycleReward(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReputationRootHash()

##### Parameters

###### \_newHash

`BytesLike`

###### \_newNLeaves

`BigNumberish`

###### \_stakers

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReputationRootHash(bytes32,uint256,address\[\])()

##### Parameters

###### \_newHash

`BytesLike`

###### \_newNLeaves

`BigNumberish`

###### \_stakers

`string`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReputationRootHashFromBridge()

##### Parameters

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### nonce

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setReputationRootHashFromBridge(bytes32,uint256,uint256)()

##### Parameters

###### newHash

`BytesLike`

###### newNLeaves

`BigNumberish`

###### nonce

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setStorageSlotRecovery()

##### Parameters

###### \_slot

`BigNumberish`

###### \_value

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setStorageSlotRecovery(uint256,bytes32)()

##### Parameters

###### \_slot

`BigNumberish`

###### \_value

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setTokenLocking()

##### Parameters

###### \_tokenLockingAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setTokenLocking(address)()

##### Parameters

###### \_tokenLockingAddress

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setupRegistrar()

##### Parameters

###### \_ens

`string`

###### \_rootNode

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setupRegistrar(address,bytes32)()

##### Parameters

###### \_ens

`string`

###### \_rootNode

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### stakeForMining()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### stakeForMining(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### startNextCycle()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### startNextCycle()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### startTokenAuction()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### startTokenAuction(address)()

##### Parameters

###### \_token

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### supportsInterface()

##### Parameters

###### \_interfaceID

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### supportsInterface(bytes4)()

##### Parameters

###### \_interfaceID

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstallExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstallExtension(bytes32)()

##### Parameters

###### \_extensionId

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### unstakeForMining()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### unstakeForMining(uint256)()

##### Parameters

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### updateColonyOrbitDB()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### updateColonyOrbitDB(string)()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### updateUserOrbitDB()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### updateUserOrbitDB(string)()

##### Parameters

###### \_orbitdb

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### upgradeExtension()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_newVersion

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### upgradeExtension(bytes32,uint256)()

##### Parameters

###### \_extensionId

`BytesLike`

###### \_newVersion

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### Inherited from

`IColonyNetwork.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`IColonyNetwork.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

`IColonyNetwork.removeListener`

***

### reputationOracleEndpoint

> **reputationOracleEndpoint**: `string`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`IColonyNetwork.signer`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`IColonyNetwork._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`IColonyNetwork._deployed`

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

`IColonyNetwork._wrapEvent`

***

### addColonyVersion()

> **addColonyVersion**(`_version`, `_resolver`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_version

`BigNumberish`

##### \_resolver

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addColonyVersion`

***

### addColonyVersion(uint256,address)()

> **addColonyVersion(uint256,address)**(`_version`, `_resolver`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_version

`BigNumberish`

##### \_resolver

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addColonyVersion(uint256,address)`

***

### addExtensionToNetwork()

> **addExtensionToNetwork**(`_extensionId`, `_resolver`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_resolver

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addExtensionToNetwork`

***

### addExtensionToNetwork(bytes32,address)()

> **addExtensionToNetwork(bytes32,address)**(`_extensionId`, `_resolver`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_resolver

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addExtensionToNetwork(bytes32,address)`

***

### addPendingReputationUpdate()

> **addPendingReputationUpdate**(`_chainId`, `_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_colony

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addPendingReputationUpdate`

***

### addPendingReputationUpdate(uint256,address)()

> **addPendingReputationUpdate(uint256,address)**(`_chainId`, `_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_colony

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addPendingReputationUpdate(uint256,address)`

***

### addPendingSkill()

> **addPendingSkill**(`_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addPendingSkill`

***

### addPendingSkill(uint256)()

> **addPendingSkill(uint256)**(`_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addPendingSkill(uint256)`

***

### addr()

> **addr**(`_node`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_node

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.addr`

***

### addr(bytes32)()

> **addr(bytes32)**(`_node`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_node

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.addr(bytes32)`

***

### addReputationUpdateLogFromBridge()

> **addReputationUpdateLogFromBridge**(`_colony`, `_user`, `_amount`, `_skillId`, `_updateNumber`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_skillId

`BigNumberish`

##### \_updateNumber

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addReputationUpdateLogFromBridge`

***

### addReputationUpdateLogFromBridge(address,address,int256,uint256,uint256)()

> **addReputationUpdateLogFromBridge(address,address,int256,uint256,uint256)**(`_colony`, `_user`, `_amount`, `_skillId`, `_updateNumber`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_skillId

`BigNumberish`

##### \_updateNumber

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addReputationUpdateLogFromBridge(address,address,int256,uint256,uint256)`

***

### addSkill()

> **addSkill**(`_parentSkillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_parentSkillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addSkill`

***

### addSkill(uint256)()

> **addSkill(uint256)**(`_parentSkillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_parentSkillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addSkill(uint256)`

***

### addSkillFromBridge()

> **addSkillFromBridge**(`_parentSkillId`, `_skillCount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_parentSkillId

`BigNumberish`

##### \_skillCount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addSkillFromBridge`

***

### addSkillFromBridge(uint256,uint256)()

> **addSkillFromBridge(uint256,uint256)**(`_parentSkillId`, `_skillCount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_parentSkillId

`BigNumberish`

##### \_skillCount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.addSkillFromBridge(uint256,uint256)`

***

### appendReputationUpdateLog()

> **appendReputationUpdateLog**(`_user`, `_amount`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.appendReputationUpdateLog`

***

### appendReputationUpdateLog(address,int256,uint256)()

> **appendReputationUpdateLog(address,int256,uint256)**(`_user`, `_amount`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.appendReputationUpdateLog(address,int256,uint256)`

***

### approveExitRecovery()

> **approveExitRecovery**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.approveExitRecovery`

***

### approveExitRecovery()()

> **approveExitRecovery()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.approveExitRecovery()`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`IColonyNetwork.attach`

***

### bridgeCurrentRootHash()

> **bridgeCurrentRootHash**(`chainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### chainId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.bridgeCurrentRootHash`

***

### bridgeCurrentRootHash(uint256)()

> **bridgeCurrentRootHash(uint256)**(`chainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### chainId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.bridgeCurrentRootHash(uint256)`

***

### bridgePendingReputationUpdate()

> **bridgePendingReputationUpdate**(`_colony`, `_updateNumber`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### \_updateNumber

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.bridgePendingReputationUpdate`

***

### bridgePendingReputationUpdate(address,uint256)()

> **bridgePendingReputationUpdate(address,uint256)**(`_colony`, `_updateNumber`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### \_updateNumber

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.bridgePendingReputationUpdate(address,uint256)`

***

### bridgeSkillIfNotMiningChain()

> **bridgeSkillIfNotMiningChain**(`skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.bridgeSkillIfNotMiningChain`

***

### bridgeSkillIfNotMiningChain(uint256)()

> **bridgeSkillIfNotMiningChain(uint256)**(`skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### skillId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.bridgeSkillIfNotMiningChain(uint256)`

***

### burnUnneededRewards()

> **burnUnneededRewards**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.burnUnneededRewards`

***

### burnUnneededRewards(uint256)()

> **burnUnneededRewards(uint256)**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.burnUnneededRewards(uint256)`

***

### calculateMinerWeight()

> **calculateMinerWeight**(`_timeStaked`, `_submissonIndex`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_timeStaked

`BigNumberish`

##### \_submissonIndex

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.calculateMinerWeight`

***

### calculateMinerWeight(uint256,uint256)()

> **calculateMinerWeight(uint256,uint256)**(`_timeStaked`, `_submissonIndex`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_timeStaked

`BigNumberish`

##### \_submissonIndex

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.calculateMinerWeight(uint256,uint256)`

***

### checkNotAdditionalProtectedVariable()

> **checkNotAdditionalProtectedVariable**(`_slot`, `overrides`?): `Promise`\<`void`\>

#### Parameters

##### \_slot

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`IColonyNetwork.checkNotAdditionalProtectedVariable`

***

### checkNotAdditionalProtectedVariable(uint256)()

> **checkNotAdditionalProtectedVariable(uint256)**(`_slot`, `overrides`?): `Promise`\<`void`\>

#### Parameters

##### \_slot

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`IColonyNetwork.checkNotAdditionalProtectedVariable(uint256)`

***

### claimMiningReward()

> **claimMiningReward**(`_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.claimMiningReward`

***

### claimMiningReward(address)()

> **claimMiningReward(address)**(`_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_recipient

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.claimMiningReward(address)`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`IColonyNetwork.connect`

***

### createColony(address,uint256,string,string,bool)()

> **createColony(address,uint256,string,string,bool)**(`_tokenAddress`, `_version`, `_colonyName`, `_orbitdb`, `_useExtensionManager`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### \_version

`BigNumberish`

##### \_colonyName

`string`

##### \_orbitdb

`string`

##### \_useExtensionManager

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createColony(address,uint256,string,string,bool)`

***

### createColony(address,uint256,string,string)()

> **createColony(address,uint256,string,string)**(`_tokenAddress`, `_version`, `_colonyName`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### \_version

`BigNumberish`

##### \_colonyName

`string`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createColony(address,uint256,string,string)`

***

### createColony(address,uint256,string)()

> **createColony(address,uint256,string)**(`_tokenAddress`, `_version`, `_colonyName`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### \_version

`BigNumberish`

##### \_colonyName

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createColony(address,uint256,string)`

***

### createColony(address)()

> **createColony(address)**(`_tokenAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createColony(address)`

***

### createColonyForFrontend()

> **createColonyForFrontend**(`_tokenAddress`, `_name`, `_symbol`, `_decimals`, `_version`, `_colonyName`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### \_name

`string`

##### \_symbol

`string`

##### \_decimals

`BigNumberish`

##### \_version

`BigNumberish`

##### \_colonyName

`string`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createColonyForFrontend`

***

### createColonyForFrontend(address,string,string,uint8,uint256,string,string)()

> **createColonyForFrontend(address,string,string,uint8,uint256,string,string)**(`_tokenAddress`, `_name`, `_symbol`, `_decimals`, `_version`, `_colonyName`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### \_name

`string`

##### \_symbol

`string`

##### \_decimals

`BigNumberish`

##### \_version

`BigNumberish`

##### \_colonyName

`string`

##### \_metadata

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createColonyForFrontend(address,string,string,uint8,uint256,string,string)`

***

### createMetaColony()

> **createMetaColony**(`_tokenAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createMetaColony`

***

### createMetaColony(address)()

> **createMetaColony(address)**(`_tokenAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.createMetaColony(address)`

***

### deployed()

> **deployed**(): `Promise`\<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Returns

`Promise`\<[`ColonyNetworkClient`](ColonyNetworkClient.md)\>

#### Inherited from

`IColonyNetwork.deployed`

***

### deployToken()

> **deployToken**(`name`, `symbol`, `decimals`?, `overrides`?): `Promise`\<`ContractTransaction`\>

Deploy an ERC20 token contract, compatible with Colony

#### Parameters

##### name

`string`

The token name. Can be any string. Be creative

##### symbol

`string`

The symbol of the token (e.g. CLNY)

##### decimals?

`number`

The number of token decimals

##### overrides?

`Overrides`

#### Returns

`Promise`\<`ContractTransaction`\>

ethers compatible ContractTransaction

#### Remarks

For valid values see the spec here: https://eips.ethereum.org/EIPS/eip-20

***

### deployTokenAuthority()

> **deployTokenAuthority**(`_token`, `_colony`, `_allowedToTransfer`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_colony

`string`

##### \_allowedToTransfer

`string`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deployTokenAuthority`

***

### deployTokenAuthority(address,address,address\[\])()

> **deployTokenAuthority(address,address,address\[\])**(`_token`, `_colony`, `_allowedToTransfer`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_colony

`string`

##### \_allowedToTransfer

`string`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deployTokenAuthority(address,address,address[])`

***

### deployTokenViaNetwork()

> **deployTokenViaNetwork**(`_name`, `_symbol`, `_decimals`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_name

`string`

##### \_symbol

`string`

##### \_decimals

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deployTokenViaNetwork`

***

### deployTokenViaNetwork(string,string,uint8)()

> **deployTokenViaNetwork(string,string,uint8)**(`_name`, `_symbol`, `_decimals`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_name

`string`

##### \_symbol

`string`

##### \_decimals

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deployTokenViaNetwork(string,string,uint8)`

***

### deprecateExtension()

> **deprecateExtension**(`_extensionId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deprecateExtension`

***

### deprecateExtension(bytes32,bool)()

> **deprecateExtension(bytes32,bool)**(`_extensionId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deprecateExtension(bytes32,bool)`

***

### deprecateSkill()

> **deprecateSkill**(`_skillId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deprecateSkill`

***

### deprecateSkill(uint256,bool)()

> **deprecateSkill(uint256,bool)**(`_skillId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.deprecateSkill(uint256,bool)`

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

`IColonyNetwork.emit`

***

### enterRecoveryMode()

> **enterRecoveryMode**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.enterRecoveryMode`

***

### enterRecoveryMode()()

> **enterRecoveryMode()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.enterRecoveryMode()`

***

### executeMetaTransaction()

> **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### userAddress

`string`

##### payload

`BytesLike`

##### sigR

`BytesLike`

##### sigS

`BytesLike`

##### sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.executeMetaTransaction`

***

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

> **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### userAddress

`string`

##### payload

`BytesLike`

##### sigR

`BytesLike`

##### sigS

`BytesLike`

##### sigV

`BigNumberish`

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### exitRecoveryMode()

> **exitRecoveryMode**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.exitRecoveryMode`

***

### exitRecoveryMode()()

> **exitRecoveryMode()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.exitRecoveryMode()`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`IColonyNetwork.fallback`

***

### getBridgedReputationUpdateCount()

> **getBridgedReputationUpdateCount**(`_chainId`, `_colony`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_colony

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getBridgedReputationUpdateCount`

***

### getBridgedReputationUpdateCount(uint256,address)()

> **getBridgedReputationUpdateCount(uint256,address)**(`_chainId`, `_colony`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_colony

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getBridgedReputationUpdateCount(uint256,address)`

***

### getBridgedSkillCounts()

> **getBridgedSkillCounts**(`_chainId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getBridgedSkillCounts`

***

### getBridgedSkillCounts(uint256)()

> **getBridgedSkillCounts(uint256)**(`_chainId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getBridgedSkillCounts(uint256)`

***

### getChildSkillId()

> **getChildSkillId**(`_skillId`, `_childSkillIndex`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getChildSkillId`

***

### getChildSkillId(uint256,uint256)()

> **getChildSkillId(uint256,uint256)**(`_skillId`, `_childSkillIndex`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getChildSkillId(uint256,uint256)`

***

### getColony()

> **getColony**(`_id`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColony`

***

### getColony(uint256)()

> **getColony(uint256)**(`_id`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColony(uint256)`

***

### getColonyBridgeAddress()

> **getColonyBridgeAddress**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColonyBridgeAddress`

***

### getColonyBridgeAddress()()

> **getColonyBridgeAddress()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColonyBridgeAddress()`

***

### getColonyClient()

> **getColonyClient**(`addressOrId`): `Promise`\<[`AnyColonyClient`](../type-aliases/AnyColonyClient.md)\>

Get a ColonyClient instance for the currently deployed version of that Colony by providing the address or the integer colony number

#### Parameters

##### addressOrId

The colony address (string) or the auto-incremented Colony id (integer)

`string` | `number`

#### Returns

`Promise`\<[`AnyColonyClient`](../type-aliases/AnyColonyClient.md)\>

The corresponding initialized ColonyClient instance

***

### getColonyCount()

> **getColonyCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getColonyCount`

***

### getColonyCount()()

> **getColonyCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getColonyCount()`

***

### getColonyCreationSalt()

> **getColonyCreationSalt**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColonyCreationSalt`

***

### getColonyCreationSalt()()

> **getColonyCreationSalt()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColonyCreationSalt()`

***

### getColonyVersionResolver()

> **getColonyVersionResolver**(`_version`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_version

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColonyVersionResolver`

***

### getColonyVersionResolver(uint256)()

> **getColonyVersionResolver(uint256)**(`_version`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_version

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getColonyVersionResolver(uint256)`

***

### getCurrentColonyVersion()

> **getCurrentColonyVersion**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getCurrentColonyVersion`

***

### getCurrentColonyVersion()()

> **getCurrentColonyVersion()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getCurrentColonyVersion()`

***

### getENSRegistrar()

> **getENSRegistrar**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getENSRegistrar`

***

### getENSRegistrar()()

> **getENSRegistrar()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getENSRegistrar()`

***

### getExtensionInstallation()

> **getExtensionInstallation**(`_extensionId`, `_colony`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_colony

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getExtensionInstallation`

***

### getExtensionInstallation(bytes32,address)()

> **getExtensionInstallation(bytes32,address)**(`_extensionId`, `_colony`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_colony

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getExtensionInstallation(bytes32,address)`

***

### getExtensionResolver()

> **getExtensionResolver**(`_extensionId`, `_version`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_version

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getExtensionResolver`

***

### getExtensionResolver(bytes32,uint256)()

> **getExtensionResolver(bytes32,uint256)**(`_extensionId`, `_version`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_version

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getExtensionResolver(bytes32,uint256)`

***

### getFeeInverse()

> **getFeeInverse**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getFeeInverse`

***

### getFeeInverse()()

> **getFeeInverse()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getFeeInverse()`

***

### getMetaColony()

> **getMetaColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getMetaColony`

***

### getMetaColony()()

> **getMetaColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getMetaColony()`

***

### getMetaColonyClient()

> **getMetaColonyClient**(): `Promise`\<[`AnyColonyClient`](../type-aliases/AnyColonyClient.md)\>

Get the initialized MetaColony client

#### Returns

`Promise`\<[`AnyColonyClient`](../type-aliases/AnyColonyClient.md)\>

a ColonyClient instance of the MetaColony (id: 1)

***

### getMetatransactionNonce()

> **getMetatransactionNonce**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### userAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getMetatransactionNonce`

***

### getMetatransactionNonce(address)()

> **getMetatransactionNonce(address)**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### userAddress

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getMetatransactionNonce(address)`

***

### getMiningChainId()

> **getMiningChainId**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getMiningChainId`

***

### getMiningChainId()()

> **getMiningChainId()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getMiningChainId()`

***

### getMiningDelegator()

> **getMiningDelegator**(`_delegate`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_delegate

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getMiningDelegator`

***

### getMiningDelegator(address)()

> **getMiningDelegator(address)**(`_delegate`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_delegate

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getMiningDelegator(address)`

***

### getMiningResolver()

> **getMiningResolver**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getMiningResolver`

***

### getMiningResolver()()

> **getMiningResolver()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getMiningResolver()`

***

### getMiningStake()

> **getMiningStake**(`_user`, `overrides`?): `Promise`\<`MiningStakeStructOutput`\>

#### Parameters

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MiningStakeStructOutput`\>

#### Inherited from

`IColonyNetwork.getMiningStake`

***

### getMiningStake(address)()

> **getMiningStake(address)**(`_user`, `overrides`?): `Promise`\<`MiningStakeStructOutput`\>

#### Parameters

##### \_user

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MiningStakeStructOutput`\>

#### Inherited from

`IColonyNetwork.getMiningStake(address)`

***

### getParentSkillId()

> **getParentSkillId**(`_skillId`, `_parentSkillIndex`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_parentSkillIndex

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getParentSkillId`

***

### getParentSkillId(uint256,uint256)()

> **getParentSkillId(uint256,uint256)**(`_skillId`, `_parentSkillIndex`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### \_parentSkillIndex

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getParentSkillId(uint256,uint256)`

***

### getPayoutWhitelist()

> **getPayoutWhitelist**(`_token`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.getPayoutWhitelist`

***

### getPayoutWhitelist(address)()

> **getPayoutWhitelist(address)**(`_token`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_token

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.getPayoutWhitelist(address)`

***

### getPendingReputationUpdate()

> **getPendingReputationUpdate**(`_chainId`, `_colony`, `_updateNumber`, `overrides`?): `Promise`\<`PendingReputationUpdateStructOutput`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_colony

`string`

##### \_updateNumber

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`PendingReputationUpdateStructOutput`\>

#### Inherited from

`IColonyNetwork.getPendingReputationUpdate`

***

### getPendingReputationUpdate(uint256,address,uint256)()

> **getPendingReputationUpdate(uint256,address,uint256)**(`_chainId`, `_colony`, `_updateNumber`, `overrides`?): `Promise`\<`PendingReputationUpdateStructOutput`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_colony

`string`

##### \_updateNumber

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`PendingReputationUpdateStructOutput`\>

#### Inherited from

`IColonyNetwork.getPendingReputationUpdate(uint256,address,uint256)`

***

### getPendingSkillAddition()

> **getPendingSkillAddition**(`_chainId`, `_skillCount`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_skillCount

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getPendingSkillAddition`

***

### getPendingSkillAddition(uint256,uint256)()

> **getPendingSkillAddition(uint256,uint256)**(`_chainId`, `_skillCount`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_chainId

`BigNumberish`

##### \_skillCount

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getPendingSkillAddition(uint256,uint256)`

***

### getProfileDBAddress()

> **getProfileDBAddress**(`_node`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_node

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getProfileDBAddress`

***

### getProfileDBAddress(bytes32)()

> **getProfileDBAddress(bytes32)**(`_node`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_node

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getProfileDBAddress(bytes32)`

***

### getReplacementReputationUpdateLogEntry()

> **getReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `overrides`?): `Promise`\<`ReputationLogEntryStructOutput`\>

#### Parameters

##### \_reputationMiningCycle

`string`

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ReputationLogEntryStructOutput`\>

#### Inherited from

`IColonyNetwork.getReplacementReputationUpdateLogEntry`

***

### getReplacementReputationUpdateLogEntry(address,uint256)()

> **getReplacementReputationUpdateLogEntry(address,uint256)**(`_reputationMiningCycle`, `_id`, `overrides`?): `Promise`\<`ReputationLogEntryStructOutput`\>

#### Parameters

##### \_reputationMiningCycle

`string`

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ReputationLogEntryStructOutput`\>

#### Inherited from

`IColonyNetwork.getReplacementReputationUpdateLogEntry(address,uint256)`

***

### getReplacementReputationUpdateLogsExist()

> **getReplacementReputationUpdateLogsExist**(`_reputationMiningCycle`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_reputationMiningCycle

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.getReplacementReputationUpdateLogsExist`

***

### getReplacementReputationUpdateLogsExist(address)()

> **getReplacementReputationUpdateLogsExist(address)**(`_reputationMiningCycle`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_reputationMiningCycle

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.getReplacementReputationUpdateLogsExist(address)`

***

### getReputationMiningCycle()

> **getReputationMiningCycle**(`_active`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_active

`boolean`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getReputationMiningCycle`

***

### getReputationMiningCycle(bool)()

> **getReputationMiningCycle(bool)**(`_active`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_active

`boolean`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getReputationMiningCycle(bool)`

***

### getReputationMiningCycleReward()

> **getReputationMiningCycleReward**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationMiningCycleReward`

***

### getReputationMiningCycleReward()()

> **getReputationMiningCycleReward()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationMiningCycleReward()`

***

### getReputationMiningSkillId()

> **getReputationMiningSkillId**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationMiningSkillId`

***

### getReputationMiningSkillId()()

> **getReputationMiningSkillId()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationMiningSkillId()`

***

### getReputationRootHash()

> **getReputationRootHash**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getReputationRootHash`

***

### getReputationRootHash()()

> **getReputationRootHash()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getReputationRootHash()`

***

### getReputationRootHashNLeaves()

> **getReputationRootHashNLeaves**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationRootHashNLeaves`

***

### getReputationRootHashNLeaves()()

> **getReputationRootHashNLeaves()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationRootHashNLeaves()`

***

### getReputationRootHashNNodes()

> **getReputationRootHashNNodes**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationRootHashNNodes`

***

### getReputationRootHashNNodes()()

> **getReputationRootHashNNodes()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getReputationRootHashNNodes()`

***

### getSkill()

> **getSkill**(`_skillId`, `overrides`?): `Promise`\<`SkillStructOutput`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`SkillStructOutput`\>

#### Inherited from

`IColonyNetwork.getSkill`

***

### getSkill(uint256)()

> **getSkill(uint256)**(`_skillId`, `overrides`?): `Promise`\<`SkillStructOutput`\>

#### Parameters

##### \_skillId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`SkillStructOutput`\>

#### Inherited from

`IColonyNetwork.getSkill(uint256)`

***

### getSkillCount()

> **getSkillCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getSkillCount`

***

### getSkillCount()()

> **getSkillCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.getSkillCount()`

***

### getTokenLocking()

> **getTokenLocking**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getTokenLocking`

***

### getTokenLocking()()

> **getTokenLocking()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.getTokenLocking()`

***

### getTokenLockingClient()

> **getTokenLockingClient**(): `Promise`\<[`TokenLockingClient`](TokenLockingClient.md)\>

Gets the TokenLockingClient

#### Returns

`Promise`\<[`TokenLockingClient`](TokenLockingClient.md)\>

an initialized version of the TokenLockingClient

***

### initialise()

> **initialise**(`_resolver`, `_version`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_resolver

`string`

##### \_version

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.initialise`

***

### initialise(address,uint256)()

> **initialise(address,uint256)**(`_resolver`, `_version`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_resolver

`string`

##### \_version

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.initialise(address,uint256)`

***

### initialiseReputationMining()

> **initialiseReputationMining**(`miningChainId`, `newHash`, `newNLeaves`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### miningChainId

`BigNumberish`

##### newHash

`BytesLike`

##### newNLeaves

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.initialiseReputationMining`

***

### initialiseReputationMining(uint256,bytes32,uint256)()

> **initialiseReputationMining(uint256,bytes32,uint256)**(`miningChainId`, `newHash`, `newNLeaves`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### miningChainId

`BigNumberish`

##### newHash

`BytesLike`

##### newNLeaves

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.initialiseReputationMining(uint256,bytes32,uint256)`

***

### initialiseRootLocalSkill()

> **initialiseRootLocalSkill**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.initialiseRootLocalSkill`

***

### initialiseRootLocalSkill()()

> **initialiseRootLocalSkill()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.initialiseRootLocalSkill()`

***

### installExtension()

> **installExtension**(`_extensionId`, `_version`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_version

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.installExtension`

***

### installExtension(bytes32,uint256)()

> **installExtension(bytes32,uint256)**(`_extensionId`, `_version`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_version

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.installExtension(bytes32,uint256)`

***

### isColony()

> **isColony**(`_colony`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_colony

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.isColony`

***

### isColony(address)()

> **isColony(address)**(`_colony`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_colony

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.isColony(address)`

***

### isInRecoveryMode()

> **isInRecoveryMode**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.isInRecoveryMode`

***

### isInRecoveryMode()()

> **isInRecoveryMode()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.isInRecoveryMode()`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`IColonyNetwork.listenerCount`

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

##### Inherited from

`IColonyNetwork.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`IColonyNetwork.listeners`

***

### lookupRegisteredENSDomain()

> **lookupRegisteredENSDomain**(`_addr`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_addr

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.lookupRegisteredENSDomain`

***

### lookupRegisteredENSDomain(address)()

> **lookupRegisteredENSDomain(address)**(`_addr`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_addr

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`IColonyNetwork.lookupRegisteredENSDomain(address)`

***

### lookupRegisteredENSDomainWithNetworkPatches()

> **lookupRegisteredENSDomainWithNetworkPatches**(`address`): `Promise`\<`string`\>

Like [lookupRegisteredENSDomain](ColonyNetworkClient.md#lookupregisteredensdomain-18), but also working on the Goerli testnet

#### Parameters

##### address

`string`

Address we want to look up

#### Returns

`Promise`\<`string`\>

an ENS name in the form of `[username].user.joincolony.eth` or `[colonyName].colony.joincolony.eth`

#### Remarks

On Goerli, all ens domains have the `.test` suffix. The contracts return `.eth` anyways.
We patch the original function to fix this problem. On any other network it will return the
original function

***

### multicall()

> **multicall**(`data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.multicall`

***

### multicall(bytes\[\])()

> **multicall(bytes\[\])**(`data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.multicall(bytes[])`

***

### numRecoveryRoles()

> **numRecoveryRoles**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.numRecoveryRoles`

***

### numRecoveryRoles()()

> **numRecoveryRoles()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`IColonyNetwork.numRecoveryRoles()`

***

### punishStakers()

> **punishStakers**(`_stakers`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_stakers

`string`[]

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.punishStakers`

***

### punishStakers(address\[\],uint256)()

> **punishStakers(address\[\],uint256)**(`_stakers`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_stakers

`string`[]

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.punishStakers(address[],uint256)`

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

#### Inherited from

`IColonyNetwork.queryFilter`

***

### registerColonyLabel()

> **registerColonyLabel**(`_colonyName`, `_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colonyName

`string`

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.registerColonyLabel`

***

### registerColonyLabel(string,string)()

> **registerColonyLabel(string,string)**(`_colonyName`, `_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colonyName

`string`

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.registerColonyLabel(string,string)`

***

### registerUserLabel()

> **registerUserLabel**(`_username`, `_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_username

`string`

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.registerUserLabel`

***

### registerUserLabel(string,string)()

> **registerUserLabel(string,string)**(`_username`, `_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_username

`string`

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.registerUserLabel(string,string)`

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

##### Inherited from

`IColonyNetwork.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`IColonyNetwork.removeAllListeners`

***

### removeRecoveryRole()

> **removeRecoveryRole**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.removeRecoveryRole`

***

### removeRecoveryRole(address)()

> **removeRecoveryRole(address)**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.removeRecoveryRole(address)`

***

### reward()

> **reward**(`_recipient`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_recipient

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.reward`

***

### reward(address,uint256)()

> **reward(address,uint256)**(`_recipient`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_recipient

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.reward(address,uint256)`

***

### setColonyBridgeAddress()

> **setColonyBridgeAddress**(`_bridgeAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_bridgeAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setColonyBridgeAddress`

***

### setColonyBridgeAddress(address)()

> **setColonyBridgeAddress(address)**(`_bridgeAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_bridgeAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setColonyBridgeAddress(address)`

***

### setFeeInverse()

> **setFeeInverse**(`_feeInverse`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_feeInverse

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setFeeInverse`

***

### setFeeInverse(uint256)()

> **setFeeInverse(uint256)**(`_feeInverse`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_feeInverse

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setFeeInverse(uint256)`

***

### setMiningDelegate()

> **setMiningDelegate**(`_delegate`, `_allowed`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_delegate

`string`

##### \_allowed

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setMiningDelegate`

***

### setMiningDelegate(address,bool)()

> **setMiningDelegate(address,bool)**(`_delegate`, `_allowed`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_delegate

`string`

##### \_allowed

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setMiningDelegate(address,bool)`

***

### setMiningResolver()

> **setMiningResolver**(`_miningResolverAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_miningResolverAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setMiningResolver`

***

### setMiningResolver(address)()

> **setMiningResolver(address)**(`_miningResolverAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_miningResolverAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setMiningResolver(address)`

***

### setPayoutWhitelist()

> **setPayoutWhitelist**(`_token`, `_status`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_status

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setPayoutWhitelist`

***

### setPayoutWhitelist(address,bool)()

> **setPayoutWhitelist(address,bool)**(`_token`, `_status`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### \_status

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setPayoutWhitelist(address,bool)`

***

### setRecoveryRole()

> **setRecoveryRole**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setRecoveryRole`

***

### setRecoveryRole(address)()

> **setRecoveryRole(address)**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_user

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setRecoveryRole(address)`

***

### setReplacementReputationUpdateLogEntry()

> **setReplacementReputationUpdateLogEntry**(`_reputationMiningCycle`, `_id`, `_user`, `_amount`, `_skillId`, `_colony`, `_nUpdates`, `_nPreviousUpdates`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_reputationMiningCycle

`string`

##### \_id

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_skillId

`BigNumberish`

##### \_colony

`string`

##### \_nUpdates

`BigNumberish`

##### \_nPreviousUpdates

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReplacementReputationUpdateLogEntry`

***

### setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)()

> **setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)**(`_reputationMiningCycle`, `_id`, `_user`, `_amount`, `_skillId`, `_colony`, `_nUpdates`, `_nPreviousUpdates`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_reputationMiningCycle

`string`

##### \_id

`BigNumberish`

##### \_user

`string`

##### \_amount

`BigNumberish`

##### \_skillId

`BigNumberish`

##### \_colony

`string`

##### \_nUpdates

`BigNumberish`

##### \_nPreviousUpdates

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReplacementReputationUpdateLogEntry(address,uint256,address,int256,uint256,address,uint128,uint128)`

***

### setReputationMiningCycleReward()

> **setReputationMiningCycleReward**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReputationMiningCycleReward`

***

### setReputationMiningCycleReward(uint256)()

> **setReputationMiningCycleReward(uint256)**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReputationMiningCycleReward(uint256)`

***

### setReputationRootHash()

> **setReputationRootHash**(`_newHash`, `_newNLeaves`, `_stakers`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_newHash

`BytesLike`

##### \_newNLeaves

`BigNumberish`

##### \_stakers

`string`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReputationRootHash`

***

### setReputationRootHash(bytes32,uint256,address\[\])()

> **setReputationRootHash(bytes32,uint256,address\[\])**(`_newHash`, `_newNLeaves`, `_stakers`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_newHash

`BytesLike`

##### \_newNLeaves

`BigNumberish`

##### \_stakers

`string`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReputationRootHash(bytes32,uint256,address[])`

***

### setReputationRootHashFromBridge()

> **setReputationRootHashFromBridge**(`newHash`, `newNLeaves`, `nonce`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### newHash

`BytesLike`

##### newNLeaves

`BigNumberish`

##### nonce

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReputationRootHashFromBridge`

***

### setReputationRootHashFromBridge(bytes32,uint256,uint256)()

> **setReputationRootHashFromBridge(bytes32,uint256,uint256)**(`newHash`, `newNLeaves`, `nonce`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### newHash

`BytesLike`

##### newNLeaves

`BigNumberish`

##### nonce

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setReputationRootHashFromBridge(bytes32,uint256,uint256)`

***

### setStorageSlotRecovery()

> **setStorageSlotRecovery**(`_slot`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_slot

`BigNumberish`

##### \_value

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setStorageSlotRecovery`

***

### setStorageSlotRecovery(uint256,bytes32)()

> **setStorageSlotRecovery(uint256,bytes32)**(`_slot`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_slot

`BigNumberish`

##### \_value

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setStorageSlotRecovery(uint256,bytes32)`

***

### setTokenLocking()

> **setTokenLocking**(`_tokenLockingAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenLockingAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setTokenLocking`

***

### setTokenLocking(address)()

> **setTokenLocking(address)**(`_tokenLockingAddress`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_tokenLockingAddress

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setTokenLocking(address)`

***

### setupRegistrar()

> **setupRegistrar**(`_ens`, `_rootNode`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_ens

`string`

##### \_rootNode

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setupRegistrar`

***

### setupRegistrar(address,bytes32)()

> **setupRegistrar(address,bytes32)**(`_ens`, `_rootNode`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_ens

`string`

##### \_rootNode

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.setupRegistrar(address,bytes32)`

***

### stakeForMining()

> **stakeForMining**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.stakeForMining`

***

### stakeForMining(uint256)()

> **stakeForMining(uint256)**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.stakeForMining(uint256)`

***

### startNextCycle()

> **startNextCycle**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.startNextCycle`

***

### startNextCycle()()

> **startNextCycle()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.startNextCycle()`

***

### startTokenAuction()

> **startTokenAuction**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.startTokenAuction`

***

### startTokenAuction(address)()

> **startTokenAuction(address)**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_token

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.startTokenAuction(address)`

***

### supportsInterface()

> **supportsInterface**(`_interfaceID`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_interfaceID

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.supportsInterface`

***

### supportsInterface(bytes4)()

> **supportsInterface(bytes4)**(`_interfaceID`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_interfaceID

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`IColonyNetwork.supportsInterface(bytes4)`

***

### uninstallExtension()

> **uninstallExtension**(`_extensionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.uninstallExtension`

***

### uninstallExtension(bytes32)()

> **uninstallExtension(bytes32)**(`_extensionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.uninstallExtension(bytes32)`

***

### unstakeForMining()

> **unstakeForMining**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.unstakeForMining`

***

### unstakeForMining(uint256)()

> **unstakeForMining(uint256)**(`_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.unstakeForMining(uint256)`

***

### updateColonyOrbitDB()

> **updateColonyOrbitDB**(`_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.updateColonyOrbitDB`

***

### updateColonyOrbitDB(string)()

> **updateColonyOrbitDB(string)**(`_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.updateColonyOrbitDB(string)`

***

### updateUserOrbitDB()

> **updateUserOrbitDB**(`_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.updateUserOrbitDB`

***

### updateUserOrbitDB(string)()

> **updateUserOrbitDB(string)**(`_orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_orbitdb

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.updateUserOrbitDB(string)`

***

### upgradeExtension()

> **upgradeExtension**(`_extensionId`, `_newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_newVersion

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.upgradeExtension`

***

### upgradeExtension(bytes32,uint256)()

> **upgradeExtension(bytes32,uint256)**(`_extensionId`, `_newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_extensionId

`BytesLike`

##### \_newVersion

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`IColonyNetwork.upgradeExtension(bytes32,uint256)`
