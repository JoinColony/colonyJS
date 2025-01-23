[**API**](../README.md)

***

# Interface: StakedExpenditureClientV7

## Extends

- `AugmentedStakedExpenditure`\<`StakedExpenditure`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedStakedExpenditure._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedStakedExpenditure._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedStakedExpenditure._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedStakedExpenditure.address`

***

### callStatic

> **callStatic**: `object`

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

#### cancelAndPunish()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndReclaimStake()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndReclaimStake(uint256,uint256,uint256)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecate()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecate(bool)()

##### Parameters

###### \_deprecated

`boolean`

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

#### finishUpgrade()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finishUpgrade()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### getCapabilityRoles()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getDeprecated()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

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

#### getStake()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`StakeStructOutput`\>

#### getStake(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`StakeStructOutput`\>

#### getStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### identifier()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### identifier()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### initialise()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialise(uint256)()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### install()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### install(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### makeExpenditureWithStake()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### reclaimStake()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### reclaimStake(uint256)()

##### Parameters

###### \_expenditureId

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

#### setStakeFraction()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setStakeFraction(uint256)()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### uninstall()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### uninstall()()

##### Parameters

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

#### version()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### version()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.callStatic`

***

### clientType

> **clientType**: [`StakedExpenditureClient`](../enumerations/ClientType.md#stakedexpenditureclient)

#### Inherited from

`AugmentedStakedExpenditure.clientType`

***

### clientVersion

> **clientVersion**: `7`

#### Overrides

`AugmentedStakedExpenditure.clientVersion`

***

### colonyClient

> **colonyClient**: `AugmentedIColony`\<`ValidColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

`AugmentedStakedExpenditure.colonyClient`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedStakedExpenditure.deployTransaction`

***

### estimateGas

> **estimateGas**: `object` & \{ authority(overrides?: CallOverrides \| undefined): Promise\<BigNumber\>; "authority()"(overrides?: CallOverrides \| undefined): Promise\<...\>; ... 47 more ...; "version()"(overrides?: CallOverrides \| undefined): Promise\<...\>; \} & AugmentedEstimate\<...\>

#### Type declaration

##### authority()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### authority()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndPunish()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndReclaimStake()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndReclaimStake(uint256,uint256,uint256)()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### deprecate()

###### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### deprecate(bool)()

###### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### executeMetaTransaction()

###### Parameters

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

###### Returns

`Promise`\<`BigNumber`\>

##### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

###### Parameters

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

###### Returns

`Promise`\<`BigNumber`\>

##### finishUpgrade()

###### Parameters

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### finishUpgrade()()

###### Parameters

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### getCapabilityRoles()

###### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getCapabilityRoles(bytes4)()

###### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getColony()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getColony()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getDeprecated()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getDeprecated()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMetatransactionNonce()

###### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMetatransactionNonce(address)()

###### Parameters

###### \_user

`string`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStake()

###### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStake(uint256)()

###### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStakeFraction()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStakeFraction()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### identifier()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### identifier()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### initialise()

###### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### initialise(uint256)()

###### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### install()

###### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### install(address)()

###### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### makeExpenditureWithStake()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### multicall()

###### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### multicall(bytes\[\])()

###### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### owner()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### owner()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### reclaimStake()

###### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### reclaimStake(uint256)()

###### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setAuthority()

###### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setAuthority(address)()

###### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setOwner()

###### Parameters

###### owner\_

`string`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setOwner(address)()

###### Parameters

###### owner\_

`string`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setStakeFraction()

###### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setStakeFraction(uint256)()

###### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### uninstall()

###### Parameters

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### uninstall()()

###### Parameters

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### verify()

###### Parameters

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

###### Returns

`Promise`\<`BigNumber`\>

##### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)()

###### Parameters

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

###### Returns

`Promise`\<`BigNumber`\>

##### version()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### version()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.estimateGas`

***

### filters

> **filters**: `object`

#### ExpenditureCancelled()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureCancelled(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureMadeViaStake()

##### Parameters

###### creator?

`null` | `string`

###### expenditureId?

`null`

###### stake?

`null`

##### Returns

`ExpenditureMadeViaStakeEventFilter`

#### ExpenditureMadeViaStake(address,uint256,uint256)()

##### Parameters

###### creator?

`null` | `string`

###### expenditureId?

`null`

###### stake?

`null`

##### Returns

`ExpenditureMadeViaStakeEventFilter`

#### ExpenditureStakerPunished()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

###### punished?

`null`

##### Returns

`ExpenditureStakerPunishedEventFilter`

#### ExpenditureStakerPunished(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

###### punished?

`null`

##### Returns

`ExpenditureStakerPunishedEventFilter`

#### ExtensionInitialised()

##### Returns

`ExtensionInitialisedEventFilter`

#### ExtensionInitialised()()

##### Returns

`ExtensionInitialisedEventFilter`

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

#### StakeFractionSet()

##### Parameters

###### agent?

`null`

###### stakeFraction?

`null`

##### Returns

`StakeFractionSetEventFilter`

#### StakeFractionSet(address,uint256)()

##### Parameters

###### agent?

`null`

###### stakeFraction?

`null`

##### Returns

`StakeFractionSetEventFilter`

#### StakeReclaimed()

##### Parameters

###### expenditureId?

`null`

##### Returns

`StakeReclaimedEventFilter`

#### StakeReclaimed(uint256)()

##### Parameters

###### expenditureId?

`null`

##### Returns

`StakeReclaimedEventFilter`

#### Inherited from

`AugmentedStakedExpenditure.filters`

***

### functions

> **functions**: `object`

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

#### cancelAndPunish()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndReclaimStake()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndReclaimStake(uint256,uint256,uint256)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecate()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecate(bool)()

##### Parameters

###### \_deprecated

`boolean`

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

#### finishUpgrade()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finishUpgrade()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### getCapabilityRoles()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### getDeprecated()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

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

#### getStake()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`StakeStructOutput`\] & `object`\>

#### getStake(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`StakeStructOutput`\] & `object`\>

#### getStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### identifier()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### identifier()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### initialise()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialise(uint256)()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### install()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### install(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### makeExpenditureWithStake()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

#### reclaimStake()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### reclaimStake(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

#### setStakeFraction()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setStakeFraction(uint256)()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### uninstall()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### uninstall()()

##### Parameters

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

#### version()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### version()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### Inherited from

`AugmentedStakedExpenditure.functions`

***

### interface

> **interface**: `StakedExpenditureInterface`

#### Inherited from

`AugmentedStakedExpenditure.interface`

***

### off

> **off**: `OnEvent`\<[`StakedExpenditureClientV7`](StakedExpenditureClientV7.md)\>

#### Inherited from

`AugmentedStakedExpenditure.off`

***

### on

> **on**: `OnEvent`\<[`StakedExpenditureClientV7`](StakedExpenditureClientV7.md)\>

#### Inherited from

`AugmentedStakedExpenditure.on`

***

### once

> **once**: `OnEvent`\<[`StakedExpenditureClientV7`](StakedExpenditureClientV7.md)\>

#### Inherited from

`AugmentedStakedExpenditure.once`

***

### populateTransaction

> **populateTransaction**: `object`

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

#### cancelAndPunish()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_callerPermissionDomainId

`BigNumberish`

###### \_callerChildSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### \_punish

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndReclaimStake()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndReclaimStake(uint256,uint256,uint256)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecate()

##### Parameters

###### \_deprecated

`boolean`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecate(bool)()

##### Parameters

###### \_deprecated

`boolean`

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

#### finishUpgrade()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finishUpgrade()()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getCapabilityRoles()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColony()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getDeprecated()()

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

#### getStake()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStake(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakeFraction()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakeFraction()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### identifier()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### identifier()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise(uint256)()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### install()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### install(address)()

##### Parameters

###### \_colony

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### makeExpenditureWithStake()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_key

`BytesLike`

###### \_value

`BytesLike`

###### \_branchMask

`BigNumberish`

###### \_siblings

`BytesLike`[]

###### overrides?

`Overrides` & `object`

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

#### reclaimStake()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### reclaimStake(uint256)()

##### Parameters

###### \_expenditureId

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

#### setStakeFraction()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setStakeFraction(uint256)()

##### Parameters

###### \_stakeFraction

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstall()

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstall()()

##### Parameters

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

#### version()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### version()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedStakedExpenditure.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`StakedExpenditureClientV7`](StakedExpenditureClientV7.md)\>

#### Inherited from

`AugmentedStakedExpenditure.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedStakedExpenditure.signer`

***

### stakedExpenditureEvents

> **stakedExpenditureEvents**: `StakedExpenditureEvents`

The stakedExpenditureEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedStakedExpenditure.stakedExpenditureEvents`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedStakedExpenditure._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedStakedExpenditure._deployed`

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

`AugmentedStakedExpenditure._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedStakedExpenditure.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.authority()`

***

### cancelAndPunish()

> **cancelAndPunish**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_expenditureId`, `_punish`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_callerPermissionDomainId

`BigNumberish`

##### \_callerChildSkillIndex

`BigNumberish`

##### \_expenditureId

`BigNumberish`

##### \_punish

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndPunish`

***

### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

> **cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_expenditureId`, `_punish`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_callerPermissionDomainId

`BigNumberish`

##### \_callerChildSkillIndex

`BigNumberish`

##### \_expenditureId

`BigNumberish`

##### \_punish

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)`

***

### cancelAndPunishWithProofs()

> **cancelAndPunishWithProofs**(`_expenditureId`, `_punish`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [cancelAndPunish](StakedExpenditureClientV7.md#cancelandpunish-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndPunishWithProofs`

***

### cancelAndReclaimStake()

> **cancelAndReclaimStake**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_expenditureId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndReclaimStake`

***

### cancelAndReclaimStake(uint256,uint256,uint256)()

> **cancelAndReclaimStake(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_expenditureId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndReclaimStake(uint256,uint256,uint256)`

***

### cancelAndReclaimStakeWithProofs()

> **cancelAndReclaimStakeWithProofs**(`_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [cancelAndReclaimStake](StakedExpenditureClientV7.md#cancelandreclaimstake-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndReclaimStakeWithProofs`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedStakedExpenditure.connect`

***

### deployed()

> **deployed**(): `Promise`\<[`StakedExpenditureClientV7`](StakedExpenditureClientV7.md)\>

#### Returns

`Promise`\<[`StakedExpenditureClientV7`](StakedExpenditureClientV7.md)\>

#### Inherited from

`AugmentedStakedExpenditure.deployed`

***

### deprecate()

> **deprecate**(`_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.deprecate`

***

### deprecate(bool)()

> **deprecate(bool)**(`_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_deprecated

`boolean`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.deprecate(bool)`

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

`AugmentedStakedExpenditure.emit`

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

#### Inherited from

`AugmentedStakedExpenditure.executeMetaTransaction`

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

#### Inherited from

`AugmentedStakedExpenditure.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedStakedExpenditure.fallback`

***

### finishUpgrade()

> **finishUpgrade**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.finishUpgrade`

***

### finishUpgrade()()

> **finishUpgrade()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.finishUpgrade()`

***

### getCapabilityRoles()

> **getCapabilityRoles**(`_sig`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_sig

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.getCapabilityRoles`

***

### getCapabilityRoles(bytes4)()

> **getCapabilityRoles(bytes4)**(`_sig`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### \_sig

`BytesLike`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.getCapabilityRoles(bytes4)`

***

### getColony()

> **getColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.getColony`

***

### getColony()()

> **getColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.getColony()`

***

### getDeprecated()

> **getDeprecated**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedStakedExpenditure.getDeprecated`

***

### getDeprecated()()

> **getDeprecated()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedStakedExpenditure.getDeprecated()`

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

#### Inherited from

`AugmentedStakedExpenditure.getMetatransactionNonce`

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

#### Inherited from

`AugmentedStakedExpenditure.getMetatransactionNonce(address)`

***

### getStake()

> **getStake**(`_expenditureId`, `overrides`?): `Promise`\<`StakeStructOutput`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`StakeStructOutput`\>

#### Inherited from

`AugmentedStakedExpenditure.getStake`

***

### getStake(uint256)()

> **getStake(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`StakeStructOutput`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`StakeStructOutput`\>

#### Inherited from

`AugmentedStakedExpenditure.getStake(uint256)`

***

### getStakeFraction()

> **getStakeFraction**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.getStakeFraction`

***

### getStakeFraction()()

> **getStakeFraction()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.getStakeFraction()`

***

### identifier()

> **identifier**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.identifier`

***

### identifier()()

> **identifier()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.identifier()`

***

### initialise()

> **initialise**(`_stakeFraction`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_stakeFraction

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.initialise`

***

### initialise(uint256)()

> **initialise(uint256)**(`_stakeFraction`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_stakeFraction

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.initialise(uint256)`

***

### install()

> **install**(`_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.install`

***

### install(address)()

> **install(address)**(`_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_colony

`string`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.install(address)`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedStakedExpenditure.listenerCount`

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

`AugmentedStakedExpenditure.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedStakedExpenditure.listeners`

***

### makeExpenditureWithStake()

> **makeExpenditureWithStake**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.makeExpenditureWithStake`

***

### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

> **makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_key

`BytesLike`

##### \_value

`BytesLike`

##### \_branchMask

`BigNumberish`

##### \_siblings

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])`

***

### makeExpenditureWithStakeWithProofs()

> **makeExpenditureWithStakeWithProofs**(`_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [makeExpenditureWithStake](StakedExpenditureClientV7.md#makeexpenditurewithstake-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where the expenditure belongs

##### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

##### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

##### \_branchMask

`BigNumberish`

The branchmask of the proof

##### \_siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.makeExpenditureWithStakeWithProofs`

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

`AugmentedStakedExpenditure.multicall`

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

`AugmentedStakedExpenditure.multicall(bytes[])`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.owner()`

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

`AugmentedStakedExpenditure.queryFilter`

***

### reclaimStake()

> **reclaimStake**(`_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.reclaimStake`

***

### reclaimStake(uint256)()

> **reclaimStake(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_expenditureId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.reclaimStake(uint256)`

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

`AugmentedStakedExpenditure.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedStakedExpenditure.removeAllListeners`

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

#### Inherited from

`AugmentedStakedExpenditure.setAuthority`

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

#### Inherited from

`AugmentedStakedExpenditure.setAuthority(address)`

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

#### Inherited from

`AugmentedStakedExpenditure.setOwner`

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

#### Inherited from

`AugmentedStakedExpenditure.setOwner(address)`

***

### setStakeFraction()

> **setStakeFraction**(`_stakeFraction`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_stakeFraction

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.setStakeFraction`

***

### setStakeFraction(uint256)()

> **setStakeFraction(uint256)**(`_stakeFraction`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_stakeFraction

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.setStakeFraction(uint256)`

***

### uninstall()

> **uninstall**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.uninstall`

***

### uninstall()()

> **uninstall()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.uninstall()`

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

#### Inherited from

`AugmentedStakedExpenditure.verify`

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

#### Inherited from

`AugmentedStakedExpenditure.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`

***

### version()

> **version**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.version`

***

### version()()

> **version()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.version()`
