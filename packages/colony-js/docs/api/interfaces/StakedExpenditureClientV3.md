# Interface: StakedExpenditureClientV3

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

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndReclaimStake()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndReclaimStake(uint256,uint256,uint256)()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecate()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### deprecate(bool)()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### executeMetaTransaction()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

##### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

##### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### finishUpgrade()

Called when upgrading the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finishUpgrade()()

Called when upgrading the extension

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

#### getChainId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getChainId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

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

Get the stake for an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`StakeStructOutput`\>

#### getStake(uint256)()

Get the stake for an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`StakeStructOutput`\>

#### getStakeFraction()

Get the stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStakeFraction()()

Get the stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### identifier()

Returns the identifier of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### identifier()()

Returns the identifier of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### install()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### install(address)()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### makeExpenditureWithStake()

Make an expenditure by putting up a stake

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Make an expenditure by putting up a stake

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

Reclaims the stake if the expenditure is finalized or cancelled

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### reclaimStake(uint256)()

Reclaims the stake if the expenditure is finalized or cancelled

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

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

Sets the stake fraction

##### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setStakeFraction(uint256)()

Sets the stake fraction

##### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### uninstall()

Called when uninstalling the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### uninstall()()

Called when uninstalling the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### verify()

##### Parameters

###### \_owner

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

###### \_owner

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

Returns the version of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### version()()

Returns the version of the extension

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

> **clientVersion**: `3`

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

> **estimateGas**: `object` & \{ authority(overrides?: CallOverrides \| undefined): Promise\<BigNumber\>; "authority()"(overrides?: CallOverrides \| undefined): Promise\<...\>; ... 47 more ...; "getStake(uint256)"(\_expenditureId: BigNumberish, overrides?: CallOverrides \| undefined): Promise\<...\>; \} & AugmentedEstimate\<...\>

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

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndReclaimStake()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndReclaimStake(uint256,uint256,uint256)()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### deprecate()

Called when deprecating (or undeprecating) the extension

###### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### deprecate(bool)()

Called when deprecating (or undeprecating) the extension

###### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### executeMetaTransaction()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

###### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`PayableOverrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

###### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`PayableOverrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### finishUpgrade()

Called when upgrading the extension

###### Parameters

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### finishUpgrade()()

Called when upgrading the extension

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

##### getChainId()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getChainId()()

###### Parameters

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

Get the stake for an expenditure

###### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStake(uint256)()

Get the stake for an expenditure

###### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStakeFraction()

Get the stake fraction

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStakeFraction()()

Get the stake fraction

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### identifier()

Returns the identifier of the extension

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### identifier()()

Returns the identifier of the extension

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### install()

Configures the extension

###### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### install(address)()

Configures the extension

###### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### makeExpenditureWithStake()

Make an expenditure by putting up a stake

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Make an expenditure by putting up a stake

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

Reclaims the stake if the expenditure is finalized or cancelled

###### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### reclaimStake(uint256)()

Reclaims the stake if the expenditure is finalized or cancelled

###### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

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

Sets the stake fraction

###### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setStakeFraction(uint256)()

Sets the stake fraction

###### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### uninstall()

Called when uninstalling the extension

###### Parameters

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### uninstall()()

Called when uninstalling the extension

###### Parameters

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### verify()

###### Parameters

###### \_owner

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

###### \_owner

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

Returns the version of the extension

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### version()()

Returns the version of the extension

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

###### expenditureId?

`null`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureCancelled(uint256)()

##### Parameters

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

###### user?

`null`

###### relayerAddress?

`null`

###### functionSignature?

`null`

##### Returns

`MetaTransactionExecutedEventFilter`

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### user?

`null`

###### relayerAddress?

`null`

###### functionSignature?

`null`

##### Returns

`MetaTransactionExecutedEventFilter`

#### StakeFractionSet()

##### Parameters

###### stakeFraction?

`null`

##### Returns

`StakeFractionSetEventFilter`

#### StakeFractionSet(uint256)()

##### Parameters

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

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndReclaimStake()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndReclaimStake(uint256,uint256,uint256)()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecate()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### deprecate(bool)()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

##### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

##### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finishUpgrade()

Called when upgrading the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finishUpgrade()()

Called when upgrading the extension

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

#### getChainId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getChainId()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

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

Get the stake for an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`StakeStructOutput`\] & `object`\>

#### getStake(uint256)()

Get the stake for an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`StakeStructOutput`\] & `object`\>

#### getStakeFraction()

Get the stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStakeFraction()()

Get the stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### identifier()

Returns the identifier of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### identifier()()

Returns the identifier of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### install()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### install(address)()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### makeExpenditureWithStake()

Make an expenditure by putting up a stake

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Make an expenditure by putting up a stake

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

Reclaims the stake if the expenditure is finalized or cancelled

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### reclaimStake(uint256)()

Reclaims the stake if the expenditure is finalized or cancelled

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

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

Sets the stake fraction

##### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setStakeFraction(uint256)()

Sets the stake fraction

##### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### uninstall()

Called when uninstalling the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### uninstall()()

Called when uninstalling the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### verify()

##### Parameters

###### \_owner

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

###### \_owner

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

Returns the version of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### version()()

Returns the version of the extension

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

> **off**: `OnEvent`\<[`StakedExpenditureClientV3`](StakedExpenditureClientV3.md)\>

#### Inherited from

`AugmentedStakedExpenditure.off`

***

### on

> **on**: `OnEvent`\<[`StakedExpenditureClientV3`](StakedExpenditureClientV3.md)\>

#### Inherited from

`AugmentedStakedExpenditure.on`

***

### once

> **once**: `OnEvent`\<[`StakedExpenditureClientV3`](StakedExpenditureClientV3.md)\>

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

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndReclaimStake()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndReclaimStake(uint256,uint256,uint256)()

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecate()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### deprecate(bool)()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

##### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

##### Parameters

###### \_user

`string`

Address of user trying to do meta transaction

###### \_payload

`BytesLike`

Function call to make via meta transaction

###### \_sigR

`BytesLike`

R part of the signature

###### \_sigS

`BytesLike`

S part of the signature

###### \_sigV

`BigNumberish`

V part of the signature

###### overrides?

`PayableOverrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finishUpgrade()

Called when upgrading the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finishUpgrade()()

Called when upgrading the extension

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

#### getChainId()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getChainId()()

##### Parameters

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

Get the stake for an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStake(uint256)()

Get the stake for an expenditure

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakeFraction()

Get the stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStakeFraction()()

Get the stake fraction

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### identifier()

Returns the identifier of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### identifier()()

Returns the identifier of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### install()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### install(address)()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### makeExpenditureWithStake()

Make an expenditure by putting up a stake

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

Make an expenditure by putting up a stake

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

###### \_domainId

`BigNumberish`

The domain where the expenditure belongs

###### \_key

`BytesLike`

A reputation hash tree key, of the total reputation in _domainId

###### \_value

`BytesLike`

Reputation value indicating the total reputation in _domainId

###### \_branchMask

`BigNumberish`

The branchmask of the proof

###### \_siblings

`BytesLike`[]

The siblings of the proof

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

Reclaims the stake if the expenditure is finalized or cancelled

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### reclaimStake(uint256)()

Reclaims the stake if the expenditure is finalized or cancelled

##### Parameters

###### \_expenditureId

`BigNumberish`

The id of the expenditure

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

Sets the stake fraction

##### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setStakeFraction(uint256)()

Sets the stake fraction

##### Parameters

###### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstall()

Called when uninstalling the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### uninstall()()

Called when uninstalling the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### verify()

##### Parameters

###### \_owner

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

###### \_owner

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

Returns the version of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### version()()

Returns the version of the extension

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

> **removeListener**: `OnEvent`\<[`StakedExpenditureClientV3`](StakedExpenditureClientV3.md)\>

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

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

##### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndPunish`

***

### cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)()

> **cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_expenditureId`, `_punish`, `overrides`?): `Promise`\<`ContractTransaction`\>

Cancel the expenditure and punish the stakerCan only be called by an arbitration user

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

##### \_callerChildSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_callerPermissionDomainId`

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### \_punish

`boolean`

Whether the staker should be punished by losing an amount of reputation equal to the stake

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndPunish(uint256,uint256,uint256,uint256,uint256,bool)`

***

### cancelAndPunishWithProofs()

> **cancelAndPunishWithProofs**(`_expenditureId`, `_punish`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [cancelAndPunish](StakedExpenditureClientV3.md#cancelandpunish-18), but let colonyJS figure out the permission proofs for you.
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

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndReclaimStake`

***

### cancelAndReclaimStake(uint256,uint256,uint256)()

> **cancelAndReclaimStake(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Cancel the expenditure and reclaim the stake in one transactionCan only be called by expenditure owner while expenditure is in draft state

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.cancelAndReclaimStake(uint256,uint256,uint256)`

***

### cancelAndReclaimStakeWithProofs()

> **cancelAndReclaimStakeWithProofs**(`_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [cancelAndReclaimStake](StakedExpenditureClientV3.md#cancelandreclaimstake-18), but let colonyJS figure out the permission proofs for you.
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

> **deployed**(): `Promise`\<[`StakedExpenditureClientV3`](StakedExpenditureClientV3.md)\>

#### Returns

`Promise`\<[`StakedExpenditureClientV3`](StakedExpenditureClientV3.md)\>

#### Inherited from

`AugmentedStakedExpenditure.deployed`

***

### deprecate()

> **deprecate**(`_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

##### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.deprecate`

***

### deprecate(bool)()

> **deprecate(bool)**(`_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

##### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

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

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

##### \_user

`string`

Address of user trying to do meta transaction

##### \_payload

`BytesLike`

Function call to make via meta transaction

##### \_sigR

`BytesLike`

R part of the signature

##### \_sigS

`BytesLike`

S part of the signature

##### \_sigV

`BigNumberish`

V part of the signature

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.executeMetaTransaction`

***

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

> **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

##### \_user

`string`

Address of user trying to do meta transaction

##### \_payload

`BytesLike`

Function call to make via meta transaction

##### \_sigR

`BytesLike`

R part of the signature

##### \_sigS

`BytesLike`

S part of the signature

##### \_sigV

`BigNumberish`

V part of the signature

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

Called when upgrading the extension

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

Called when upgrading the extension

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

### getChainId()

> **getChainId**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.getChainId`

***

### getChainId()()

> **getChainId()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.getChainId()`

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

Get the stake for an expenditure

#### Parameters

##### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`StakeStructOutput`\>

#### Inherited from

`AugmentedStakedExpenditure.getStake`

***

### getStake(uint256)()

> **getStake(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`StakeStructOutput`\>

Get the stake for an expenditure

#### Parameters

##### \_expenditureId

`BigNumberish`

The id of the expenditure to get the stake for

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`StakeStructOutput`\>

#### Inherited from

`AugmentedStakedExpenditure.getStake(uint256)`

***

### getStakeFraction()

> **getStakeFraction**(`overrides`?): `Promise`\<`BigNumber`\>

Get the stake fraction

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

Get the stake fraction

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

Returns the identifier of the extension

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

Returns the identifier of the extension

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStakedExpenditure.identifier()`

***

### install()

> **install**(`_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

Configures the extension

#### Parameters

##### \_colony

`string`

The colony in which the extension holds permissions

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.install`

***

### install(address)()

> **install(address)**(`_colony`, `overrides`?): `Promise`\<`ContractTransaction`\>

Configures the extension

#### Parameters

##### \_colony

`string`

The colony in which the extension holds permissions

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

Make an expenditure by putting up a stake

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

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

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.makeExpenditureWithStake`

***

### makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])()

> **makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32\[\])**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Make an expenditure by putting up a stake

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the administration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

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

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.makeExpenditureWithStake(uint256,uint256,uint256,bytes,bytes,uint256,bytes32[])`

***

### makeExpenditureWithStakeWithProofs()

> **makeExpenditureWithStakeWithProofs**(`_domainId`, `_key`, `_value`, `_branchMask`, `_siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [makeExpenditureWithStake](StakedExpenditureClientV3.md#makeexpenditurewithstake-18), but let colonyJS figure out the permission proofs for you.
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

Reclaims the stake if the expenditure is finalized or cancelled

#### Parameters

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.reclaimStake`

***

### reclaimStake(uint256)()

> **reclaimStake(uint256)**(`_expenditureId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Reclaims the stake if the expenditure is finalized or cancelled

#### Parameters

##### \_expenditureId

`BigNumberish`

The id of the expenditure

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

Sets the stake fraction

#### Parameters

##### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.setStakeFraction`

***

### setStakeFraction(uint256)()

> **setStakeFraction(uint256)**(`_stakeFraction`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the stake fraction

#### Parameters

##### \_stakeFraction

`BigNumberish`

WAD-denominated fraction, used to determine stake as fraction of rep in domain

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.setStakeFraction(uint256)`

***

### uninstall()

> **uninstall**(`overrides`?): `Promise`\<`ContractTransaction`\>

Called when uninstalling the extension

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

Called when uninstalling the extension

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStakedExpenditure.uninstall()`

***

### verify()

> **verify**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_owner

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

> **verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_owner

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

Returns the version of the extension

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

Returns the version of the extension

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStakedExpenditure.version()`
