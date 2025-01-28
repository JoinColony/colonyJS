# Interface: StreamingPaymentsClientV6

## Extends

- `AugmentedStreamingPayments`\<`StreamingPayments`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedStreamingPayments._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedStreamingPayments._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedStreamingPayments._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedStreamingPayments.address`

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

#### cancel()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancel(uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndWaive()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancelAndWaive(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claim()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### claim(uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### create()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

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

#### getAmountClaimableLifetime()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getAmountClaimableLifetime(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getAmountEntitledFromStart()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getAmountEntitledFromStart(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

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

#### getNumStreamingPayments()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getNumStreamingPayments()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getNUnresolvedStreamingPayments()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getNUnresolvedStreamingPayments()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getStreamingPayment()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`StreamingPaymentStructOutput`\>

#### getStreamingPayment(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`StreamingPaymentStructOutput`\>

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

#### setEndTime()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setEndTime(uint256,uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

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

#### setStartTime()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setStartTime(uint256,uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setTokenAmount()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

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

`AugmentedStreamingPayments.callStatic`

***

### clientType

> **clientType**: [`StreamingPaymentsClient`](../enumerations/ClientType.md#streamingpaymentsclient)

#### Inherited from

`AugmentedStreamingPayments.clientType`

***

### clientVersion

> **clientVersion**: `6`

#### Overrides

`AugmentedStreamingPayments.clientVersion`

***

### colonyClient

> **colonyClient**: `AugmentedIColony`\<`ValidColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

`AugmentedStreamingPayments.colonyClient`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedStreamingPayments.deployTransaction`

***

### estimateGas

> **estimateGas**: `object` & \{ authority(overrides?: CallOverrides \| undefined): Promise\<BigNumber\>; "authority()"(overrides?: CallOverrides \| undefined): Promise\<...\>; ... 55 more ...; "version()"(overrides?: CallOverrides \| undefined): Promise\<...\>; \} & AugmentedEstimate\<...\>

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

##### cancel()

###### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancel(uint256,uint256,uint256)()

###### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndWaive()

###### Parameters

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancelAndWaive(uint256)()

###### Parameters

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### claim()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### claim(uint256,uint256,uint256,uint256,uint256)()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### create()

###### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)()

###### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

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

##### getAmountClaimableLifetime()

###### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getAmountClaimableLifetime(uint256)()

###### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getAmountEntitledFromStart()

###### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getAmountEntitledFromStart(uint256)()

###### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

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

##### getNumStreamingPayments()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getNumStreamingPayments()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getNUnresolvedStreamingPayments()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getNUnresolvedStreamingPayments()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStreamingPayment()

###### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getStreamingPayment(uint256)()

###### Parameters

###### \_id

`BigNumberish`

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

##### setEndTime()

###### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setEndTime(uint256,uint256,uint256,uint256)()

###### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

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

##### setStartTime()

###### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setStartTime(uint256,uint256,uint256,uint256)()

###### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setTokenAmount()

###### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

###### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

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

`AugmentedStreamingPayments.estimateGas`

***

### filters

> **filters**: `object`

#### ClaimWaived()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

##### Returns

`ClaimWaivedEventFilter`

#### ClaimWaived(address,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

##### Returns

`ClaimWaivedEventFilter`

#### EndTimeSet()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### endTime?

`null`

##### Returns

`EndTimeSetEventFilter`

#### EndTimeSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### endTime?

`null`

##### Returns

`EndTimeSetEventFilter`

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

#### PaymentTokenUpdated()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### amount?

`null`

###### interval?

`null`

##### Returns

`PaymentTokenUpdatedEventFilter`

#### PaymentTokenUpdated(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### amount?

`null`

###### interval?

`null`

##### Returns

`PaymentTokenUpdatedEventFilter`

#### StartTimeSet()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### startTime?

`null`

##### Returns

`StartTimeSetEventFilter`

#### StartTimeSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### startTime?

`null`

##### Returns

`StartTimeSetEventFilter`

#### StreamingPaymentClaimed()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`StreamingPaymentClaimedEventFilter`

#### StreamingPaymentClaimed(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`StreamingPaymentClaimedEventFilter`

#### StreamingPaymentCreated()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null`

##### Returns

`StreamingPaymentCreatedEventFilter`

#### StreamingPaymentCreated(address,uint256)()

##### Parameters

###### agent?

`null`

###### streamingPaymentId?

`null`

##### Returns

`StreamingPaymentCreatedEventFilter`

#### Inherited from

`AugmentedStreamingPayments.filters`

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

#### cancel()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancel(uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndWaive()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancelAndWaive(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claim()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### claim(uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### create()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

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

#### getAmountClaimableLifetime()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getAmountClaimableLifetime(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getAmountEntitledFromStart()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getAmountEntitledFromStart(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

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

#### getNumStreamingPayments()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getNumStreamingPayments()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getNUnresolvedStreamingPayments()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getNUnresolvedStreamingPayments()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getStreamingPayment()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`StreamingPaymentStructOutput`\] & `object`\>

#### getStreamingPayment(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`StreamingPaymentStructOutput`\] & `object`\>

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

#### setEndTime()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setEndTime(uint256,uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

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

#### setStartTime()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setStartTime(uint256,uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setTokenAmount()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

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

`AugmentedStreamingPayments.functions`

***

### interface

> **interface**: `StreamingPaymentsInterface`

#### Inherited from

`AugmentedStreamingPayments.interface`

***

### off

> **off**: `OnEvent`\<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

`AugmentedStreamingPayments.off`

***

### on

> **on**: `OnEvent`\<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

`AugmentedStreamingPayments.on`

***

### once

> **once**: `OnEvent`\<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

`AugmentedStreamingPayments.once`

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

#### cancel()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancel(uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndWaive()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancelAndWaive(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claim()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### claim(uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### create()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_domainId

`BigNumberish`

###### \_startTime

`BigNumberish`

###### \_endTime

`BigNumberish`

###### \_interval

`BigNumberish`

###### \_recipient

`string`

###### \_token

`string`

###### \_amount

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

#### getAmountClaimableLifetime()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getAmountClaimableLifetime(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getAmountEntitledFromStart()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getAmountEntitledFromStart(uint256)()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

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

#### getNumStreamingPayments()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getNumStreamingPayments()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getNUnresolvedStreamingPayments()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getNUnresolvedStreamingPayments()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStreamingPayment()

##### Parameters

###### \_id

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getStreamingPayment(uint256)()

##### Parameters

###### \_id

`BigNumberish`

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

#### setEndTime()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setEndTime(uint256,uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_endTime

`BigNumberish`

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

#### setStartTime()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setStartTime(uint256,uint256,uint256,uint256)()

##### Parameters

###### \_adminPermissionDomainId

`BigNumberish`

###### \_adminChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_startTime

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setTokenAmount()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

##### Parameters

###### \_fundingPermissionDomainId

`BigNumberish`

###### \_fundingChildSkillIndex

`BigNumberish`

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_fromChildSkillIndex

`BigNumberish`

###### \_toChildSkillIndex

`BigNumberish`

###### \_id

`BigNumberish`

###### \_amount

`BigNumberish`

###### \_interval

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

`AugmentedStreamingPayments.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedStreamingPayments.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

`AugmentedStreamingPayments.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedStreamingPayments.signer`

***

### streamingPaymentsEvents

> **streamingPaymentsEvents**: `StreamingPaymentsEvents`

The streamingPaymentsEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedStreamingPayments.streamingPaymentsEvents`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedStreamingPayments._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedStreamingPayments._deployed`

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

`AugmentedStreamingPayments._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedStreamingPayments.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.authority()`

***

### cancel()

> **cancel**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.cancel`

***

### cancel(uint256,uint256,uint256)()

> **cancel(uint256,uint256,uint256)**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.cancel(uint256,uint256,uint256)`

***

### cancelAndWaive()

> **cancelAndWaive**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.cancelAndWaive`

***

### cancelAndWaive(uint256)()

> **cancelAndWaive(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.cancelAndWaive(uint256)`

***

### cancelWithProofs()

> **cancelWithProofs**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [cancel](StreamingPaymentsClientV6.md#cancel-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

The id of the streaming payment

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.cancelWithProofs`

***

### claim()

> **claim**(`_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_fromChildSkillIndex

`BigNumberish`

##### \_toChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.claim`

***

### claim(uint256,uint256,uint256,uint256,uint256)()

> **claim(uint256,uint256,uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_fromChildSkillIndex

`BigNumberish`

##### \_toChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.claim(uint256,uint256,uint256,uint256,uint256)`

***

### claimWithProofs()

> **claimWithProofs**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [claim](StreamingPaymentsClientV6.md#claim-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

The id of the streaming payment

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.claimWithProofs`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedStreamingPayments.connect`

***

### create()

> **create**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_adminPermissionDomainId`, `_adminChildSkillIndex`, `_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_fundingPermissionDomainId

`BigNumberish`

##### \_fundingChildSkillIndex

`BigNumberish`

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_startTime

`BigNumberish`

##### \_endTime

`BigNumberish`

##### \_interval

`BigNumberish`

##### \_recipient

`string`

##### \_token

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.create`

***

### create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)()

> **create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_adminPermissionDomainId`, `_adminChildSkillIndex`, `_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_fundingPermissionDomainId

`BigNumberish`

##### \_fundingChildSkillIndex

`BigNumberish`

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_domainId

`BigNumberish`

##### \_startTime

`BigNumberish`

##### \_endTime

`BigNumberish`

##### \_interval

`BigNumberish`

##### \_recipient

`string`

##### \_token

`string`

##### \_amount

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)`

***

### createWithProofs()

> **createWithProofs**(`_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [create](StreamingPaymentsClientV6.md#create-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain out of which the streaming payment will be paid

##### \_startTime

`BigNumberish`

The time at which the payment begins paying out

##### \_endTime

`BigNumberish`

The time at which the payment ends paying out

##### \_interval

`BigNumberish`

The period of time over which _amounts are paid out

##### \_recipient

`string`

The recipient of the streaming payment

##### \_token

`string`

##### \_amount

`BigNumberish`

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.createWithProofs`

***

### deployed()

> **deployed**(): `Promise`\<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Returns

`Promise`\<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

`AugmentedStreamingPayments.deployed`

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

`AugmentedStreamingPayments.deprecate`

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

`AugmentedStreamingPayments.deprecate(bool)`

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

`AugmentedStreamingPayments.emit`

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

`AugmentedStreamingPayments.executeMetaTransaction`

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

`AugmentedStreamingPayments.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedStreamingPayments.fallback`

***

### finishUpgrade()

> **finishUpgrade**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.finishUpgrade`

***

### finishUpgrade()()

> **finishUpgrade()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.finishUpgrade()`

***

### getAmountClaimableLifetime()

> **getAmountClaimableLifetime**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getAmountClaimableLifetime`

***

### getAmountClaimableLifetime(uint256)()

> **getAmountClaimableLifetime(uint256)**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getAmountClaimableLifetime(uint256)`

***

### getAmountEntitledFromStart()

> **getAmountEntitledFromStart**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getAmountEntitledFromStart`

***

### getAmountEntitledFromStart(uint256)()

> **getAmountEntitledFromStart(uint256)**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getAmountEntitledFromStart(uint256)`

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

`AugmentedStreamingPayments.getCapabilityRoles`

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

`AugmentedStreamingPayments.getCapabilityRoles(bytes4)`

***

### getColony()

> **getColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.getColony`

***

### getColony()()

> **getColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.getColony()`

***

### getDeprecated()

> **getDeprecated**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedStreamingPayments.getDeprecated`

***

### getDeprecated()()

> **getDeprecated()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedStreamingPayments.getDeprecated()`

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

`AugmentedStreamingPayments.getMetatransactionNonce`

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

`AugmentedStreamingPayments.getMetatransactionNonce(address)`

***

### getNumStreamingPayments()

> **getNumStreamingPayments**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getNumStreamingPayments`

***

### getNumStreamingPayments()()

> **getNumStreamingPayments()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getNumStreamingPayments()`

***

### getNUnresolvedStreamingPayments()

> **getNUnresolvedStreamingPayments**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getNUnresolvedStreamingPayments`

***

### getNUnresolvedStreamingPayments()()

> **getNUnresolvedStreamingPayments()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.getNUnresolvedStreamingPayments()`

***

### getStreamingPayment()

> **getStreamingPayment**(`_id`, `overrides`?): `Promise`\<`StreamingPaymentStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`StreamingPaymentStructOutput`\>

#### Inherited from

`AugmentedStreamingPayments.getStreamingPayment`

***

### getStreamingPayment(uint256)()

> **getStreamingPayment(uint256)**(`_id`, `overrides`?): `Promise`\<`StreamingPaymentStructOutput`\>

#### Parameters

##### \_id

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`StreamingPaymentStructOutput`\>

#### Inherited from

`AugmentedStreamingPayments.getStreamingPayment(uint256)`

***

### identifier()

> **identifier**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.identifier`

***

### identifier()()

> **identifier()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.identifier()`

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

`AugmentedStreamingPayments.install`

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

`AugmentedStreamingPayments.install(address)`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedStreamingPayments.listenerCount`

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

`AugmentedStreamingPayments.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedStreamingPayments.listeners`

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

`AugmentedStreamingPayments.multicall`

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

`AugmentedStreamingPayments.multicall(bytes[])`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedStreamingPayments.owner()`

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

`AugmentedStreamingPayments.queryFilter`

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

`AugmentedStreamingPayments.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedStreamingPayments.removeAllListeners`

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

`AugmentedStreamingPayments.setAuthority`

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

`AugmentedStreamingPayments.setAuthority(address)`

***

### setEndTime()

> **setEndTime**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_endTime`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_endTime

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setEndTime`

***

### setEndTime(uint256,uint256,uint256,uint256)()

> **setEndTime(uint256,uint256,uint256,uint256)**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_endTime`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_endTime

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setEndTime(uint256,uint256,uint256,uint256)`

***

### setEndTimeWithProofs()

> **setEndTimeWithProofs**(`_id`, `_endTime`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setEndTime](StreamingPaymentsClientV6.md#setendtime-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

The id of the streaming payment

##### \_endTime

`BigNumberish`

The new endTime to set

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setEndTimeWithProofs`

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

`AugmentedStreamingPayments.setOwner`

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

`AugmentedStreamingPayments.setOwner(address)`

***

### setStartTime()

> **setStartTime**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_startTime`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_startTime

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setStartTime`

***

### setStartTime(uint256,uint256,uint256,uint256)()

> **setStartTime(uint256,uint256,uint256,uint256)**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_startTime`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_adminPermissionDomainId

`BigNumberish`

##### \_adminChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_startTime

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setStartTime(uint256,uint256,uint256,uint256)`

***

### setStartTimeWithProofs()

> **setStartTimeWithProofs**(`_id`, `_startTime`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setStartTime](StreamingPaymentsClientV6.md#setstarttime-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

The id of the streaming payment

##### \_startTime

`BigNumberish`

The new startTime to set

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setStartTimeWithProofs`

***

### setTokenAmount()

> **setTokenAmount**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `_amount`, `_interval`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_fundingPermissionDomainId

`BigNumberish`

##### \_fundingChildSkillIndex

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_fromChildSkillIndex

`BigNumberish`

##### \_toChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_interval

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setTokenAmount`

***

### setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)()

> **setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `_amount`, `_interval`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_fundingPermissionDomainId

`BigNumberish`

##### \_fundingChildSkillIndex

`BigNumberish`

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_fromChildSkillIndex

`BigNumberish`

##### \_toChildSkillIndex

`BigNumberish`

##### \_id

`BigNumberish`

##### \_amount

`BigNumberish`

##### \_interval

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)`

***

### setTokenAmountWithProofs()

> **setTokenAmountWithProofs**(`_id`, `_amount`, `_interval`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setTokenAmount](StreamingPaymentsClientV6.md#settokenamount-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

The id of the streaming payment

##### \_amount

`BigNumberish`

The new amount to pay out

##### \_interval

`BigNumberish`

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.setTokenAmountWithProofs`

***

### uninstall()

> **uninstall**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.uninstall`

***

### uninstall()()

> **uninstall()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedStreamingPayments.uninstall()`

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

`AugmentedStreamingPayments.verify`

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

`AugmentedStreamingPayments.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`

***

### version()

> **version**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.version`

***

### version()()

> **version()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedStreamingPayments.version()`
