# Interface: StagedExpenditureClientV1

## Extends

- `AugmentedStagedExpenditure`\<`StagedExpenditure`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedStagedExpenditure._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedStagedExpenditure._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedStagedExpenditure._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedStagedExpenditure.address`

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

#### releaseStagedPayment()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### releaseStagedPayment(uint256,uint256,uint256,uint256,address\[\])()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### releaseStagedPaymentViaArbitration()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address\[\])()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

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

#### setExpenditureStaged()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

##### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setExpenditureStaged(uint256,bool)()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

##### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

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

`AugmentedStagedExpenditure.callStatic`

***

### clientType

> **clientType**: [`StagedExpenditureClient`](../enumerations/ClientType.md#stagedexpenditureclient)

#### Inherited from

`AugmentedStagedExpenditure.clientType`

***

### clientVersion

> **clientVersion**: `1`

#### Overrides

`AugmentedStagedExpenditure.clientVersion`

***

### colonyClient

> **colonyClient**: `AugmentedIColony`\<`ValidColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

`AugmentedStagedExpenditure.colonyClient`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedStagedExpenditure.deployTransaction`

***

### estimateGas

> **estimateGas**: `object` & \{ authority(overrides?: CallOverrides \| undefined): Promise\<BigNumber\>; "authority()"(overrides?: CallOverrides \| undefined): Promise\<...\>; ... 39 more ...; "releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address\[\])"(\_permissionDomainId: BigNumberish, \_childSkillIndex: BigNumberis...

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

##### releaseStagedPayment()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### releaseStagedPayment(uint256,uint256,uint256,uint256,address\[\])()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### releaseStagedPaymentViaArbitration()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address\[\])()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

###### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

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

##### setExpenditureStaged()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

###### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setExpenditureStaged(uint256,bool)()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

###### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

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

`AugmentedStagedExpenditure.estimateGas`

***

### filters

> **filters**: `object`

#### Annotation()

##### Parameters

###### agent?

`null` | `string`

###### txHash?

`null` | `BytesLike`

###### metadata?

`null`

##### Returns

`AnnotationEventFilter`

#### Annotation(address,bytes32,string)()

##### Parameters

###### agent?

`null` | `string`

###### txHash?

`null` | `BytesLike`

###### metadata?

`null`

##### Returns

`AnnotationEventFilter`

#### ArbitraryReputationUpdate()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### skillId?

`null`

###### amount?

`null`

##### Returns

`ArbitraryReputationUpdateEventFilter`

#### ArbitraryReputationUpdate(address,address,uint256,int256)()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### skillId?

`null`

###### amount?

`null`

##### Returns

`ArbitraryReputationUpdateEventFilter`

#### ArbitraryTransaction()

##### Parameters

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

`ArbitraryTransactionEventFilter`

#### ArbitraryTransaction(address,bytes,bool)()

##### Parameters

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

`ArbitraryTransactionEventFilter`

#### ColonyBootstrapped()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

`ColonyBootstrappedEventFilter`

#### ColonyBootstrapped(address,address\[\],int256\[\])()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

`ColonyBootstrappedEventFilter`

#### ColonyFundsClaimed()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### fee?

`null`

###### payoutRemainder?

`null`

##### Returns

`ColonyFundsClaimedEventFilter`

#### ColonyFundsClaimed(address,address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### fee?

`null`

###### payoutRemainder?

`null`

##### Returns

`ColonyFundsClaimedEventFilter`

#### ColonyFundsMovedBetweenFundingPots()

##### Parameters

###### agent?

`null`

###### fromPot?

`null` | `BigNumberish`

###### toPot?

`null` | `BigNumberish`

###### amount?

`null`

###### token?

`null`

##### Returns

`ColonyFundsMovedBetweenFundingPotsEventFilter`

#### ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)()

##### Parameters

###### agent?

`null`

###### fromPot?

`null` | `BigNumberish`

###### toPot?

`null` | `BigNumberish`

###### amount?

`null`

###### token?

`null`

##### Returns

`ColonyFundsMovedBetweenFundingPotsEventFilter`

#### ColonyInitialised()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

`ColonyInitialisedEventFilter`

#### ColonyInitialised(address,address,address)()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

`ColonyInitialisedEventFilter`

#### ColonyMetadata()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataEventFilter`

#### ColonyMetadata(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataEventFilter`

#### ColonyMetadataDelta()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataDeltaEventFilter`

#### ColonyMetadataDelta(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataDeltaEventFilter`

#### ColonyRewardInverseSet()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

`ColonyRewardInverseSetEventFilter`

#### ColonyRewardInverseSet(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

`ColonyRewardInverseSetEventFilter`

#### ColonyRoleSet()

##### Parameters

###### agent?

`null`

###### user?

`null` | `string`

###### domainId?

`null` | `BigNumberish`

###### role?

`null` | `BigNumberish`

###### setTo?

`null`

##### Returns

`ColonyRoleSetEventFilter`

#### ColonyRoleSet(address,address,uint256,uint8,bool)()

##### Parameters

###### agent?

`null`

###### user?

`null` | `string`

###### domainId?

`null` | `BigNumberish`

###### role?

`null` | `BigNumberish`

###### setTo?

`null`

##### Returns

`ColonyRoleSetEventFilter`

#### ColonyUpgraded()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

`ColonyUpgradedEventFilter`

#### ColonyUpgraded(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

`ColonyUpgradedEventFilter`

#### DomainAdded()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

`DomainAddedEventFilter`

#### DomainAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

`DomainAddedEventFilter`

#### DomainDeprecated()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

`DomainDeprecatedEventFilter`

#### DomainDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

`DomainDeprecatedEventFilter`

#### DomainMetadata()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`DomainMetadataEventFilter`

#### DomainMetadata(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`DomainMetadataEventFilter`

#### ExpenditureAdded()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureAddedEventFilter`

#### ExpenditureAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureAddedEventFilter`

#### ExpenditureCancelled()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureCancelled(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureClaimDelaySet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### claimDelay?

`null`

##### Returns

`ExpenditureClaimDelaySetEventFilter`

#### ExpenditureClaimDelaySet(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### claimDelay?

`null`

##### Returns

`ExpenditureClaimDelaySetEventFilter`

#### ExpenditureFinalized()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureFinalizedEventFilter`

#### ExpenditureFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureFinalizedEventFilter`

#### ExpenditureGlobalClaimDelaySet()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

`ExpenditureGlobalClaimDelaySetEventFilter`

#### ExpenditureGlobalClaimDelaySet(address,uint256)()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

`ExpenditureGlobalClaimDelaySetEventFilter`

#### ExpenditureLocked()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureLockedEventFilter`

#### ExpenditureLocked(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureLockedEventFilter`

#### ExpenditureMadeStaged()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### staged?

`null`

##### Returns

`ExpenditureMadeStagedEventFilter`

#### ExpenditureMadeStaged(uint256,bool)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### staged?

`null`

##### Returns

`ExpenditureMadeStagedEventFilter`

#### ExpenditureMetadataSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`ExpenditureMetadataSetEventFilter`

#### ExpenditureMetadataSet(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`ExpenditureMetadataSetEventFilter`

#### ExpenditurePayoutModifierSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### payoutModifier?

`null`

##### Returns

`ExpenditurePayoutModifierSetEventFilter`

#### ExpenditurePayoutModifierSet(address,uint256,uint256,int256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### payoutModifier?

`null`

##### Returns

`ExpenditurePayoutModifierSetEventFilter`

#### ExpenditurePayoutSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### token?

`null` | `string`

###### amount?

`null`

##### Returns

`ExpenditurePayoutSetEventFilter`

#### ExpenditurePayoutSet(address,uint256,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### token?

`null` | `string`

###### amount?

`null`

##### Returns

`ExpenditurePayoutSetEventFilter`

#### ExpenditureRecipientSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### recipient?

`null` | `string`

##### Returns

`ExpenditureRecipientSetEventFilter`

#### ExpenditureRecipientSet(address,uint256,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### recipient?

`null` | `string`

##### Returns

`ExpenditureRecipientSetEventFilter`

#### ExpenditureSkillSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`ExpenditureSkillSetEventFilter`

#### ExpenditureSkillSet(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`ExpenditureSkillSetEventFilter`

#### ExpenditureStateChanged()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### storageSlot?

`null` | `BigNumberish`

###### mask?

`null`

###### keys?

`null`

###### value?

`null`

##### Returns

`ExpenditureStateChangedEventFilter`

#### ExpenditureStateChanged(address,uint256,uint256,bool\[\],bytes32\[\],bytes32)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### storageSlot?

`null` | `BigNumberish`

###### mask?

`null`

###### keys?

`null`

###### value?

`null`

##### Returns

`ExpenditureStateChangedEventFilter`

#### ExpenditureTransferred()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

`ExpenditureTransferredEventFilter`

#### ExpenditureTransferred(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

`ExpenditureTransferredEventFilter`

#### ExtensionInitialised()

##### Returns

`ExtensionInitialisedEventFilter`

#### ExtensionInitialised()()

##### Returns

`ExtensionInitialisedEventFilter`

#### FundingPotAdded()

##### Parameters

###### fundingPotId?

`null`

##### Returns

`FundingPotAddedEventFilter`

#### FundingPotAdded(uint256)()

##### Parameters

###### fundingPotId?

`null`

##### Returns

`FundingPotAddedEventFilter`

#### LocalSkillAdded()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

`LocalSkillAddedEventFilter`

#### LocalSkillAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

`LocalSkillAddedEventFilter`

#### LocalSkillDeprecated()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

`LocalSkillDeprecatedEventFilter`

#### LocalSkillDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

`LocalSkillDeprecatedEventFilter`

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

#### PaymentAdded()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

`PaymentAddedEventFilter`

#### PaymentAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

`PaymentAddedEventFilter`

#### PaymentFinalized()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

`PaymentFinalizedEventFilter`

#### PaymentFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

`PaymentFinalizedEventFilter`

#### PaymentPayoutSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PaymentPayoutSetEventFilter`

#### PaymentPayoutSet(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PaymentPayoutSetEventFilter`

#### PaymentRecipientSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

`PaymentRecipientSetEventFilter`

#### PaymentRecipientSet(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

`PaymentRecipientSetEventFilter`

#### PaymentSkillSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

`PaymentSkillSetEventFilter`

#### PaymentSkillSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

`PaymentSkillSetEventFilter`

#### PayoutClaimed(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### fundingPotId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PayoutClaimed_address_uint256_address_uint256_EventFilter`

#### PayoutClaimed(address,uint256,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### id?

`null`

###### slot?

`null`

###### token?

`null`

###### tokenPayout?

`null`

##### Returns

`PayoutClaimed_address_uint256_uint256_address_uint256_EventFilter`

#### RewardPayoutClaimed()

##### Parameters

###### rewardPayoutId?

`null`

###### user?

`null`

###### fee?

`null`

###### rewardRemainder?

`null`

##### Returns

`RewardPayoutClaimedEventFilter`

#### RewardPayoutClaimed(uint256,address,uint256,uint256)()

##### Parameters

###### rewardPayoutId?

`null`

###### user?

`null`

###### fee?

`null`

###### rewardRemainder?

`null`

##### Returns

`RewardPayoutClaimedEventFilter`

#### RewardPayoutCycleEnded()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleEndedEventFilter`

#### RewardPayoutCycleEnded(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleEndedEventFilter`

#### RewardPayoutCycleStarted()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleStartedEventFilter`

#### RewardPayoutCycleStarted(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleStartedEventFilter`

#### StagedPaymentReleased()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null`

##### Returns

`StagedPaymentReleasedEventFilter`

#### StagedPaymentReleased(uint256,uint256)()

##### Parameters

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null`

##### Returns

`StagedPaymentReleasedEventFilter`

#### TaskAdded()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

`TaskAddedEventFilter`

#### TaskAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

`TaskAddedEventFilter`

#### TaskBriefSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

`TaskBriefSetEventFilter`

#### TaskBriefSet(uint256,bytes32)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

`TaskBriefSetEventFilter`

#### TaskCanceled()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCanceledEventFilter`

#### TaskCanceled(uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCanceledEventFilter`

#### TaskChangedViaSignatures()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

`TaskChangedViaSignaturesEventFilter`

#### TaskChangedViaSignatures(address\[\])()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

`TaskChangedViaSignaturesEventFilter`

#### TaskCompleted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCompletedEventFilter`

#### TaskCompleted(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCompletedEventFilter`

#### TaskDeliverableSubmitted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

`TaskDeliverableSubmittedEventFilter`

#### TaskDeliverableSubmitted(address,uint256,bytes32)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

`TaskDeliverableSubmittedEventFilter`

#### TaskDueDateSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

`TaskDueDateSetEventFilter`

#### TaskDueDateSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

`TaskDueDateSetEventFilter`

#### TaskFinalized()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskFinalizedEventFilter`

#### TaskFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskFinalizedEventFilter`

#### TaskPayoutSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TaskPayoutSetEventFilter`

#### TaskPayoutSet(uint256,uint8,address,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TaskPayoutSetEventFilter`

#### TaskRoleUserSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

`TaskRoleUserSetEventFilter`

#### TaskRoleUserSet(uint256,uint8,address)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

`TaskRoleUserSetEventFilter`

#### TaskSkillSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`TaskSkillSetEventFilter`

#### TaskSkillSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`TaskSkillSetEventFilter`

#### TaskWorkRatingRevealed()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### rating?

`null`

##### Returns

`TaskWorkRatingRevealedEventFilter`

#### TaskWorkRatingRevealed(address,uint256,uint8,uint8)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### rating?

`null`

##### Returns

`TaskWorkRatingRevealedEventFilter`

#### TokensBurned()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TokensBurnedEventFilter`

#### TokensBurned(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TokensBurnedEventFilter`

#### TokensMinted()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

`TokensMintedEventFilter`

#### TokensMinted(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

`TokensMintedEventFilter`

#### TokenUnlocked()

##### Parameters

###### agent?

`null`

##### Returns

`TokenUnlockedEventFilter`

#### TokenUnlocked(address)()

##### Parameters

###### agent?

`null`

##### Returns

`TokenUnlockedEventFilter`

#### Inherited from

`AugmentedStagedExpenditure.filters`

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

#### releaseStagedPayment()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### releaseStagedPayment(uint256,uint256,uint256,uint256,address\[\])()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### releaseStagedPaymentViaArbitration()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address\[\])()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

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

#### setExpenditureStaged()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

##### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setExpenditureStaged(uint256,bool)()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

##### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

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

`AugmentedStagedExpenditure.functions`

***

### interface

> **interface**: `StagedExpenditureInterface`

#### Inherited from

`AugmentedStagedExpenditure.interface`

***

### off

> **off**: `OnEvent`\<[`StagedExpenditureClientV1`](StagedExpenditureClientV1.md)\>

#### Inherited from

`AugmentedStagedExpenditure.off`

***

### on

> **on**: `OnEvent`\<[`StagedExpenditureClientV1`](StagedExpenditureClientV1.md)\>

#### Inherited from

`AugmentedStagedExpenditure.on`

***

### once

> **once**: `OnEvent`\<[`StagedExpenditureClientV1`](StagedExpenditureClientV1.md)\>

#### Inherited from

`AugmentedStagedExpenditure.once`

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

#### releaseStagedPayment()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### releaseStagedPayment(uint256,uint256,uint256,uint256,address\[\])()

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### releaseStagedPaymentViaArbitration()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address\[\])()

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

###### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

###### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

###### \_expenditureId

`BigNumberish`

The id of the expenditure

###### \_slot

`BigNumberish`

The slot being released

###### \_tokens

`string`[]

An array of payment tokens associated with the slot

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

#### setExpenditureStaged()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

##### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setExpenditureStaged(uint256,bool)()

Only owner can call this function, must be in draft state
Mark an expenditure as staged

##### Parameters

###### \_expenditureId

`BigNumberish`

Which expenditure we are changing

###### \_staged

`boolean`

Indcating whether the expenditure is staged or not

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

`AugmentedStagedExpenditure.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedStagedExpenditure.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`StagedExpenditureClientV1`](StagedExpenditureClientV1.md)\>

#### Inherited from

`AugmentedStagedExpenditure.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedStagedExpenditure.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedStagedExpenditure.signer`

***

### stagedExpenditureEvents

> **stagedExpenditureEvents**: `StagedExpenditureEvents`

The stagedExpenditureEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedStagedExpenditure.stagedExpenditureEvents`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedStagedExpenditure._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedStagedExpenditure._deployed`

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

`AugmentedStagedExpenditure._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedStagedExpenditure.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStagedExpenditure.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStagedExpenditure.authority()`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedStagedExpenditure.connect`

***

### deployed()

> **deployed**(): `Promise`\<[`StagedExpenditureClientV1`](StagedExpenditureClientV1.md)\>

#### Returns

`Promise`\<[`StagedExpenditureClientV1`](StagedExpenditureClientV1.md)\>

#### Inherited from

`AugmentedStagedExpenditure.deployed`

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

`AugmentedStagedExpenditure.deprecate`

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

`AugmentedStagedExpenditure.deprecate(bool)`

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

`AugmentedStagedExpenditure.emit`

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

`AugmentedStagedExpenditure.executeMetaTransaction`

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

`AugmentedStagedExpenditure.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedStagedExpenditure.fallback`

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

`AugmentedStagedExpenditure.finishUpgrade`

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

`AugmentedStagedExpenditure.finishUpgrade()`

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

`AugmentedStagedExpenditure.getCapabilityRoles`

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

`AugmentedStagedExpenditure.getCapabilityRoles(bytes4)`

***

### getChainId()

> **getChainId**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStagedExpenditure.getChainId`

***

### getChainId()()

> **getChainId()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStagedExpenditure.getChainId()`

***

### getColony()

> **getColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStagedExpenditure.getColony`

***

### getColony()()

> **getColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStagedExpenditure.getColony()`

***

### getDeprecated()

> **getDeprecated**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedStagedExpenditure.getDeprecated`

***

### getDeprecated()()

> **getDeprecated()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedStagedExpenditure.getDeprecated()`

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

`AugmentedStagedExpenditure.getMetatransactionNonce`

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

`AugmentedStagedExpenditure.getMetatransactionNonce(address)`

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

`AugmentedStagedExpenditure.identifier`

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

`AugmentedStagedExpenditure.identifier()`

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

`AugmentedStagedExpenditure.install`

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

`AugmentedStagedExpenditure.install(address)`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedStagedExpenditure.listenerCount`

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

`AugmentedStagedExpenditure.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedStagedExpenditure.listeners`

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

`AugmentedStagedExpenditure.multicall`

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

`AugmentedStagedExpenditure.multicall(bytes[])`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStagedExpenditure.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStagedExpenditure.owner()`

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

`AugmentedStagedExpenditure.queryFilter`

***

### releaseStagedPayment()

> **releaseStagedPayment**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `_slot`, `_tokens`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### \_slot

`BigNumberish`

The slot being released

##### \_tokens

`string`[]

An array of payment tokens associated with the slot

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStagedExpenditure.releaseStagedPayment`

***

### releaseStagedPayment(uint256,uint256,uint256,uint256,address\[\])()

> **releaseStagedPayment(uint256,uint256,uint256,uint256,address\[\])**(`_permissionDomainId`, `_childSkillIndex`, `_expenditureId`, `_slot`, `_tokens`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only owner can call this function, must be in finalized state
Release a staged payment slot and claim tokens

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### \_slot

`BigNumberish`

The slot being released

##### \_tokens

`string`[]

An array of payment tokens associated with the slot

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStagedExpenditure.releaseStagedPayment(uint256,uint256,uint256,uint256,address[])`

***

### releaseStagedPaymentViaArbitration()

> **releaseStagedPaymentViaArbitration**(`_permissionDomainId`, `_childSkillIndex`, `_extensionPermissionDomainId`, `_extensionChildSkillIndex`, `_expenditureId`, `_slot`, `_tokens`, `overrides`?): `Promise`\<`ContractTransaction`\>

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

##### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### \_slot

`BigNumberish`

The slot being released

##### \_tokens

`string`[]

An array of payment tokens associated with the slot

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStagedExpenditure.releaseStagedPaymentViaArbitration`

***

### releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address\[\])()

> **releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address\[\])**(`_permissionDomainId`, `_childSkillIndex`, `_extensionPermissionDomainId`, `_extensionChildSkillIndex`, `_expenditureId`, `_slot`, `_tokens`, `overrides`?): `Promise`\<`ContractTransaction`\>

Anyone with arbitration permission can call this, must be in finalized state
Release a staged payment slot and claim tokens

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the caller has the arbitration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

##### \_extensionPermissionDomainId

`BigNumberish`

The domainId in which the extension has the arbitration permission

##### \_extensionChildSkillIndex

`BigNumberish`

The index that the `_expenditureId` is relative to `_permissionDomainId`,

##### \_expenditureId

`BigNumberish`

The id of the expenditure

##### \_slot

`BigNumberish`

The slot being released

##### \_tokens

`string`[]

An array of payment tokens associated with the slot

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStagedExpenditure.releaseStagedPaymentViaArbitration(uint256,uint256,uint256,uint256,uint256,uint256,address[])`

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

`AugmentedStagedExpenditure.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedStagedExpenditure.removeAllListeners`

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

`AugmentedStagedExpenditure.setAuthority`

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

`AugmentedStagedExpenditure.setAuthority(address)`

***

### setExpenditureStaged()

> **setExpenditureStaged**(`_expenditureId`, `_staged`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only owner can call this function, must be in draft state
Mark an expenditure as staged

#### Parameters

##### \_expenditureId

`BigNumberish`

Which expenditure we are changing

##### \_staged

`boolean`

Indcating whether the expenditure is staged or not

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStagedExpenditure.setExpenditureStaged`

***

### setExpenditureStaged(uint256,bool)()

> **setExpenditureStaged(uint256,bool)**(`_expenditureId`, `_staged`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only owner can call this function, must be in draft state
Mark an expenditure as staged

#### Parameters

##### \_expenditureId

`BigNumberish`

Which expenditure we are changing

##### \_staged

`boolean`

Indcating whether the expenditure is staged or not

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStagedExpenditure.setExpenditureStaged(uint256,bool)`

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

`AugmentedStagedExpenditure.setOwner`

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

`AugmentedStagedExpenditure.setOwner(address)`

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

`AugmentedStagedExpenditure.uninstall`

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

`AugmentedStagedExpenditure.uninstall()`

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

`AugmentedStagedExpenditure.verify`

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

`AugmentedStagedExpenditure.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`

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

`AugmentedStagedExpenditure.version`

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

`AugmentedStagedExpenditure.version()`
