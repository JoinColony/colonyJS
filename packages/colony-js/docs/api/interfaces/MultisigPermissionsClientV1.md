[**API**](../README.md)

***

# Interface: MultisigPermissionsClientV1

## Extends

- `AugmentedMultisigPermissions`\<`MultisigPermissions`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedMultisigPermissions._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedMultisigPermissions._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedMultisigPermissions._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedMultisigPermissions.address`

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

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### cancel(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### changeVote()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### changeVote(uint256,uint256,uint256,uint8)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createMotion()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### createMotion(uint256,uint256,address\[\],bytes\[\])()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

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

#### execute()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### execute(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

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

#### executeWithoutFailure()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### executeWithoutFailure(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### getDomainSkillRoleCounts()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getDomainSkillRoleCounts(uint256,uint8)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getDomainSkillThreshold()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getDomainSkillThreshold(uint256)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getGlobalThreshold()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getGlobalThreshold()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

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

#### getMotion()

##### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MotionStructOutput`\>

#### getMotion(uint256)()

##### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`MotionStructOutput`\>

#### getMotionCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionRoleVoteCount()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionRoleVoteCount(uint256,uint8,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionVoteThreshold()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMotionVoteThreshold(uint256,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getSingleActionSummary()

##### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### getSingleActionSummary(address,address,bytes,address)()

##### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### getUserRoles()

##### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getUserRoles(address,uint256)()

##### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getUserVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

#### getUserVote(uint256,address,uint8,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`boolean`\>

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

#### setDomainSkillThreshold()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setDomainSkillThreshold(uint256,uint256)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setGlobalThreshold()

##### Parameters

###### \_globalThreshold

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setGlobalThreshold(uint256)()

##### Parameters

###### \_globalThreshold

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

#### setUserRoles()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setUserRoles(uint256,uint256,address,uint256,bytes32)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

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

`AugmentedMultisigPermissions.callStatic`

***

### clientType

> **clientType**: [`MultisigPermissionsClient`](../enumerations/ClientType.md#multisigpermissionsclient)

#### Inherited from

`AugmentedMultisigPermissions.clientType`

***

### clientVersion

> **clientVersion**: `1`

#### Overrides

`AugmentedMultisigPermissions.clientVersion`

***

### colonyClient

> **colonyClient**: `AugmentedIColony`\<`ValidColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

`AugmentedMultisigPermissions.colonyClient`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedMultisigPermissions.deployTransaction`

***

### estimateGas

> **estimateGas**: `object` & \{ `authority`: `Promise`\<`BigNumber`\>; `authority()`: `Promise`\<`BigNumber`\>; `cancel`: `Promise`\<`BigNumber`\>; `cancel(uint256)`: `Promise`\<`BigNumber`\>; `changeVote`: `Promise`\<`BigNumber`\>; `changeVote(uint256,uint256,uint256,uint8)`: `Promise`\<`BigNumber`\>; `createMotion`: `Promise`\<`BigNumber`\>; `createMotion(uint256,uint256,address[],bytes[])`: `Promise`\<`BigNumber`\>; `deprecate`: `Promise`\<`BigNumber`\>; `deprecate(bool)`: `Promise`\<`BigNumber`\>; `execute`: `Promise`\<`BigNumber`\>; `execute(uint256)`: `Promise`\<`BigNumber`\>; `executeMetaTransaction`: `Promise`\<`BigNumber`\>; `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`: `Promise`\<`BigNumber`\>; `executeWithoutFailure`: `Promise`\<`BigNumber`\>; `executeWithoutFailure(uint256)`: `Promise`\<`BigNumber`\>; `finishUpgrade`: `Promise`\<`BigNumber`\>; `finishUpgrade()`: `Promise`\<`BigNumber`\>; `getCapabilityRoles`: `Promise`\<`BigNumber`\>; `getCapabilityRoles(bytes4)`: `Promise`\<`BigNumber`\>; `getColony`: `Promise`\<`BigNumber`\>; `getColony()`: `Promise`\<`BigNumber`\>; `getDeprecated`: `Promise`\<`BigNumber`\>; `getDeprecated()`: `Promise`\<`BigNumber`\>; `getDomainSkillRoleCounts`: `Promise`\<`BigNumber`\>; `getDomainSkillRoleCounts(uint256,uint8)`: `Promise`\<`BigNumber`\>; `getDomainSkillThreshold`: `Promise`\<`BigNumber`\>; `getDomainSkillThreshold(uint256)`: `Promise`\<`BigNumber`\>; `getGlobalThreshold`: `Promise`\<`BigNumber`\>; `getGlobalThreshold()`: `Promise`\<`BigNumber`\>; `getMetatransactionNonce`: `Promise`\<`BigNumber`\>; `getMetatransactionNonce(address)`: `Promise`\<`BigNumber`\>; `getMotion`: `Promise`\<`BigNumber`\>; `getMotion(uint256)`: `Promise`\<`BigNumber`\>; `getMotionCount`: `Promise`\<`BigNumber`\>; `getMotionCount()`: `Promise`\<`BigNumber`\>; `getMotionRoleVoteCount`: `Promise`\<`BigNumber`\>; `getMotionRoleVoteCount(uint256,uint8,uint8)`: `Promise`\<`BigNumber`\>; `getMotionVoteThreshold`: `Promise`\<`BigNumber`\>; `getMotionVoteThreshold(uint256,uint8)`: `Promise`\<`BigNumber`\>; `getSingleActionSummary`: `Promise`\<`BigNumber`\>; `getSingleActionSummary(address,address,bytes,address)`: `Promise`\<`BigNumber`\>; `getUserRoles`: `Promise`\<`BigNumber`\>; `getUserRoles(address,uint256)`: `Promise`\<`BigNumber`\>; `getUserVote`: `Promise`\<`BigNumber`\>; `getUserVote(uint256,address,uint8,uint8)`: `Promise`\<`BigNumber`\>; `identifier`: `Promise`\<`BigNumber`\>; `identifier()`: `Promise`\<`BigNumber`\>; `install`: `Promise`\<`BigNumber`\>; `install(address)`: `Promise`\<`BigNumber`\>; `multicall`: `Promise`\<`BigNumber`\>; `multicall(bytes[])`: `Promise`\<`BigNumber`\>; `owner`: `Promise`\<`BigNumber`\>; `owner()`: `Promise`\<`BigNumber`\>; `setAuthority`: `Promise`\<`BigNumber`\>; `setAuthority(address)`: `Promise`\<`BigNumber`\>; `setDomainSkillThreshold`: `Promise`\<`BigNumber`\>; `setDomainSkillThreshold(uint256,uint256)`: `Promise`\<`BigNumber`\>; `setGlobalThreshold`: `Promise`\<`BigNumber`\>; `setGlobalThreshold(uint256)`: `Promise`\<`BigNumber`\>; `setOwner`: `Promise`\<`BigNumber`\>; `setOwner(address)`: `Promise`\<`BigNumber`\>; `setUserRoles`: `Promise`\<`BigNumber`\>; `setUserRoles(uint256,uint256,address,uint256,bytes32)`: `Promise`\<`BigNumber`\>; `uninstall`: `Promise`\<`BigNumber`\>; `uninstall()`: `Promise`\<`BigNumber`\>; `verify`: `Promise`\<`BigNumber`\>; `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`: `Promise`\<`BigNumber`\>; `version`: `Promise`\<`BigNumber`\>; `version()`: `Promise`\<`BigNumber`\>; \} \| `object` & `object`

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

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### cancel(uint256)()

###### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### changeVote()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### changeVote(uint256,uint256,uint256,uint8)()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### createMotion()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### createMotion(uint256,uint256,address\[\],bytes\[\])()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

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

##### execute()

###### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### execute(uint256)()

###### Parameters

###### \_motionId

`BigNumberish`

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

##### executeWithoutFailure()

###### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### executeWithoutFailure(uint256)()

###### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

##### getDomainSkillRoleCounts()

###### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getDomainSkillRoleCounts(uint256,uint8)()

###### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getDomainSkillThreshold()

###### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getDomainSkillThreshold(uint256)()

###### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getGlobalThreshold()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getGlobalThreshold()()

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

##### getMotion()

###### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMotion(uint256)()

###### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMotionCount()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMotionCount()()

###### Parameters

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMotionRoleVoteCount()

###### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMotionRoleVoteCount(uint256,uint8,uint8)()

###### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMotionVoteThreshold()

###### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getMotionVoteThreshold(uint256,uint8)()

###### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getSingleActionSummary()

###### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getSingleActionSummary(address,address,bytes,address)()

###### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getUserRoles()

###### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getUserRoles(address,uint256)()

###### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getUserVote()

###### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

###### Returns

`Promise`\<`BigNumber`\>

##### getUserVote(uint256,address,uint8,uint8)()

###### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

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

##### setDomainSkillThreshold()

###### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setDomainSkillThreshold(uint256,uint256)()

###### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setGlobalThreshold()

###### Parameters

###### \_globalThreshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setGlobalThreshold(uint256)()

###### Parameters

###### \_globalThreshold

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

##### setUserRoles()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

###### overrides?

`Overrides` & `object`

###### Returns

`Promise`\<`BigNumber`\>

##### setUserRoles(uint256,uint256,address,uint256,bytes32)()

###### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

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

`AugmentedMultisigPermissions.estimateGas`

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

#### ApprovalChanged()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

###### role?

`null`

###### approval?

`null`

##### Returns

`ApprovalChangedEventFilter`

#### ApprovalChanged(address,uint256,uint8,bool)()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

###### role?

`null`

###### approval?

`null`

##### Returns

`ApprovalChangedEventFilter`

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

#### DomainSkillThresholdSet()

##### Parameters

###### domainSkillId?

`null`

###### threshold?

`null`

##### Returns

`DomainSkillThresholdSetEventFilter`

#### DomainSkillThresholdSet(uint256,uint256)()

##### Parameters

###### domainSkillId?

`null`

###### threshold?

`null`

##### Returns

`DomainSkillThresholdSetEventFilter`

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

#### GlobalThresholdSet()

##### Parameters

###### globalThreshold?

`null`

##### Returns

`GlobalThresholdSetEventFilter`

#### GlobalThresholdSet(uint256)()

##### Parameters

###### globalThreshold?

`null`

##### Returns

`GlobalThresholdSetEventFilter`

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

#### MotionCancelled()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

##### Returns

`MotionCancelledEventFilter`

#### MotionCancelled(address,uint256)()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

##### Returns

`MotionCancelledEventFilter`

#### MotionCreated()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

##### Returns

`MotionCreatedEventFilter`

#### MotionCreated(address,uint256)()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

##### Returns

`MotionCreatedEventFilter`

#### MotionExecuted()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

###### success?

`null`

##### Returns

`MotionExecutedEventFilter`

#### MotionExecuted(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

###### success?

`null`

##### Returns

`MotionExecutedEventFilter`

#### MultisigRoleSet()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### domainId?

`null`

###### roleId?

`null`

###### setTo?

`null`

##### Returns

`MultisigRoleSetEventFilter`

#### MultisigRoleSet(address,address,uint256,uint256,bool)()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### domainId?

`null`

###### roleId?

`null`

###### setTo?

`null`

##### Returns

`MultisigRoleSetEventFilter`

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

#### RejectionChanged()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

###### role?

`null`

###### approval?

`null`

##### Returns

`RejectionChangedEventFilter`

#### RejectionChanged(address,uint256,uint8,bool)()

##### Parameters

###### agent?

`null`

###### motionId?

`null`

###### role?

`null`

###### approval?

`null`

##### Returns

`RejectionChangedEventFilter`

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

`AugmentedMultisigPermissions.filters`

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

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### cancel(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### changeVote()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### changeVote(uint256,uint256,uint256,uint8)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMotion()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### createMotion(uint256,uint256,address\[\],bytes\[\])()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

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

#### execute()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### execute(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

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

#### executeWithoutFailure()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### executeWithoutFailure(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

#### getDomainSkillRoleCounts()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getDomainSkillRoleCounts(uint256,uint8)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getDomainSkillThreshold()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getDomainSkillThreshold(uint256)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getGlobalThreshold()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getGlobalThreshold()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

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

#### getMotion()

##### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MotionStructOutput`\]\>

#### getMotion(uint256)()

##### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`MotionStructOutput`\]\>

#### getMotionCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getMotionCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getMotionRoleVoteCount()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getMotionRoleVoteCount(uint256,uint8,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getMotionVoteThreshold()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getMotionVoteThreshold(uint256,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\]\>

#### getSingleActionSummary()

##### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`ActionSummaryStructOutput`\]\>

#### getSingleActionSummary(address,address,bytes,address)()

##### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`ActionSummaryStructOutput`\]\>

#### getUserRoles()

##### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getUserRoles(address,uint256)()

##### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\]\>

#### getUserVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

#### getUserVote(uint256,address,uint8,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`boolean`\]\>

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

#### setDomainSkillThreshold()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setDomainSkillThreshold(uint256,uint256)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setGlobalThreshold()

##### Parameters

###### \_globalThreshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setGlobalThreshold(uint256)()

##### Parameters

###### \_globalThreshold

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

#### setUserRoles()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setUserRoles(uint256,uint256,address,uint256,bytes32)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

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

`AugmentedMultisigPermissions.functions`

***

### interface

> **interface**: `MultisigPermissionsInterface`

#### Inherited from

`AugmentedMultisigPermissions.interface`

***

### multisigPermissionsEvents

> **multisigPermissionsEvents**: `MultisigPermissionsEvents`

The multisigPermissionsEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedMultisigPermissions.multisigPermissionsEvents`

***

### off

> **off**: `OnEvent`\<[`MultisigPermissionsClientV1`](MultisigPermissionsClientV1.md)\>

#### Inherited from

`AugmentedMultisigPermissions.off`

***

### on

> **on**: `OnEvent`\<[`MultisigPermissionsClientV1`](MultisigPermissionsClientV1.md)\>

#### Inherited from

`AugmentedMultisigPermissions.on`

***

### once

> **once**: `OnEvent`\<[`MultisigPermissionsClientV1`](MultisigPermissionsClientV1.md)\>

#### Inherited from

`AugmentedMultisigPermissions.once`

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

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### cancel(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### changeVote()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### changeVote(uint256,uint256,uint256,uint8)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_motionId

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMotion()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### createMotion(uint256,uint256,address\[\],bytes\[\])()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_targets

`string`[]

###### \_data

`BytesLike`[]

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

#### execute()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### execute(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

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

#### executeWithoutFailure()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### executeWithoutFailure(uint256)()

##### Parameters

###### \_motionId

`BigNumberish`

###### overrides?

`Overrides` & `object`

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

#### getDomainSkillRoleCounts()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getDomainSkillRoleCounts(uint256,uint8)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getDomainSkillThreshold()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getDomainSkillThreshold(uint256)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getGlobalThreshold()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getGlobalThreshold()()

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

#### getMotion()

##### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotion(uint256)()

##### Parameters

###### motionId

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionCount()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionCount()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionRoleVoteCount()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionRoleVoteCount(uint256,uint8,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionVoteThreshold()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMotionVoteThreshold(uint256,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_role

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSingleActionSummary()

##### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getSingleActionSummary(address,address,bytes,address)()

##### Parameters

###### colonyNetworkAddress

`string`

###### colonyAddress

`string`

###### \_action

`BytesLike`

###### \_altTarget

`string`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserRoles()

##### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserRoles(address,uint256)()

##### Parameters

###### who

`string`

###### where

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserVote()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

`BigNumberish`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getUserVote(uint256,address,uint8,uint8)()

##### Parameters

###### \_motionId

`BigNumberish`

###### \_user

`string`

###### \_role

`BigNumberish`

###### \_vote

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

#### setDomainSkillThreshold()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setDomainSkillThreshold(uint256,uint256)()

##### Parameters

###### \_domainSkillId

`BigNumberish`

###### \_threshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setGlobalThreshold()

##### Parameters

###### \_globalThreshold

`BigNumberish`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setGlobalThreshold(uint256)()

##### Parameters

###### \_globalThreshold

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

#### setUserRoles()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setUserRoles(uint256,uint256,address,uint256,bytes32)()

##### Parameters

###### \_permissionDomainId

`BigNumberish`

###### \_childSkillIndex

`BigNumberish`

###### \_user

`string`

###### \_domainId

`BigNumberish`

###### \_roles

`BytesLike`

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

`AugmentedMultisigPermissions.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedMultisigPermissions.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`MultisigPermissionsClientV1`](MultisigPermissionsClientV1.md)\>

#### Inherited from

`AugmentedMultisigPermissions.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedMultisigPermissions.signer`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedMultisigPermissions._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedMultisigPermissions._deployed`

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

`AugmentedMultisigPermissions._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedMultisigPermissions.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.authority()`

***

### cancel()

> **cancel**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.cancel`

***

### cancel(uint256)()

> **cancel(uint256)**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.cancel(uint256)`

***

### changeVote()

> **changeVote**(`_permissionDomainId`, `_childSkillIndex`, `_motionId`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_motionId

`BigNumberish`

##### \_vote

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.changeVote`

***

### changeVote(uint256,uint256,uint256,uint8)()

> **changeVote(uint256,uint256,uint256,uint8)**(`_permissionDomainId`, `_childSkillIndex`, `_motionId`, `_vote`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_motionId

`BigNumberish`

##### \_vote

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.changeVote(uint256,uint256,uint256,uint8)`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedMultisigPermissions.connect`

***

### createMotion()

> **createMotion**(`_permissionDomainId`, `_childSkillIndex`, `_targets`, `_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_targets

`string`[]

##### \_data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.createMotion`

***

### createMotion(uint256,uint256,address\[\],bytes\[\])()

> **createMotion(uint256,uint256,address\[\],bytes\[\])**(`_permissionDomainId`, `_childSkillIndex`, `_targets`, `_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_targets

`string`[]

##### \_data

`BytesLike`[]

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.createMotion(uint256,uint256,address[],bytes[])`

***

### deployed()

> **deployed**(): `Promise`\<[`MultisigPermissionsClientV1`](MultisigPermissionsClientV1.md)\>

#### Returns

`Promise`\<[`MultisigPermissionsClientV1`](MultisigPermissionsClientV1.md)\>

#### Inherited from

`AugmentedMultisigPermissions.deployed`

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

`AugmentedMultisigPermissions.deprecate`

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

`AugmentedMultisigPermissions.deprecate(bool)`

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

`AugmentedMultisigPermissions.emit`

***

### execute()

> **execute**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.execute`

***

### execute(uint256)()

> **execute(uint256)**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.execute(uint256)`

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

`AugmentedMultisigPermissions.executeMetaTransaction`

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

`AugmentedMultisigPermissions.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### executeWithoutFailure()

> **executeWithoutFailure**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.executeWithoutFailure`

***

### executeWithoutFailure(uint256)()

> **executeWithoutFailure(uint256)**(`_motionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.executeWithoutFailure(uint256)`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedMultisigPermissions.fallback`

***

### finishUpgrade()

> **finishUpgrade**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.finishUpgrade`

***

### finishUpgrade()()

> **finishUpgrade()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.finishUpgrade()`

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

`AugmentedMultisigPermissions.getCapabilityRoles`

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

`AugmentedMultisigPermissions.getCapabilityRoles(bytes4)`

***

### getColony()

> **getColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.getColony`

***

### getColony()()

> **getColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.getColony()`

***

### getDeprecated()

> **getDeprecated**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedMultisigPermissions.getDeprecated`

***

### getDeprecated()()

> **getDeprecated()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedMultisigPermissions.getDeprecated()`

***

### getDomainSkillRoleCounts()

> **getDomainSkillRoleCounts**(`_domainSkillId`, `_role`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_domainSkillId

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getDomainSkillRoleCounts`

***

### getDomainSkillRoleCounts(uint256,uint8)()

> **getDomainSkillRoleCounts(uint256,uint8)**(`_domainSkillId`, `_role`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_domainSkillId

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getDomainSkillRoleCounts(uint256,uint8)`

***

### getDomainSkillThreshold()

> **getDomainSkillThreshold**(`_domainSkillId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_domainSkillId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getDomainSkillThreshold`

***

### getDomainSkillThreshold(uint256)()

> **getDomainSkillThreshold(uint256)**(`_domainSkillId`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_domainSkillId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getDomainSkillThreshold(uint256)`

***

### getGlobalThreshold()

> **getGlobalThreshold**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getGlobalThreshold`

***

### getGlobalThreshold()()

> **getGlobalThreshold()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getGlobalThreshold()`

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

`AugmentedMultisigPermissions.getMetatransactionNonce`

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

`AugmentedMultisigPermissions.getMetatransactionNonce(address)`

***

### getMotion()

> **getMotion**(`motionId`, `overrides`?): `Promise`\<`MotionStructOutput`\>

#### Parameters

##### motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MotionStructOutput`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotion`

***

### getMotion(uint256)()

> **getMotion(uint256)**(`motionId`, `overrides`?): `Promise`\<`MotionStructOutput`\>

#### Parameters

##### motionId

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`MotionStructOutput`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotion(uint256)`

***

### getMotionCount()

> **getMotionCount**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotionCount`

***

### getMotionCount()()

> **getMotionCount()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotionCount()`

***

### getMotionRoleVoteCount()

> **getMotionRoleVoteCount**(`_motionId`, `_role`, `_vote`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_role

`BigNumberish`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotionRoleVoteCount`

***

### getMotionRoleVoteCount(uint256,uint8,uint8)()

> **getMotionRoleVoteCount(uint256,uint8,uint8)**(`_motionId`, `_role`, `_vote`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_role

`BigNumberish`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotionRoleVoteCount(uint256,uint8,uint8)`

***

### getMotionVoteThreshold()

> **getMotionVoteThreshold**(`_motionId`, `_role`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotionVoteThreshold`

***

### getMotionVoteThreshold(uint256,uint8)()

> **getMotionVoteThreshold(uint256,uint8)**(`_motionId`, `_role`, `overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_role

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.getMotionVoteThreshold(uint256,uint8)`

***

### getSingleActionSummary()

> **getSingleActionSummary**(`colonyNetworkAddress`, `colonyAddress`, `_action`, `_altTarget`, `overrides`?): `Promise`\<`ActionSummaryStructOutput`\>

#### Parameters

##### colonyNetworkAddress

`string`

##### colonyAddress

`string`

##### \_action

`BytesLike`

##### \_altTarget

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### Inherited from

`AugmentedMultisigPermissions.getSingleActionSummary`

***

### getSingleActionSummary(address,address,bytes,address)()

> **getSingleActionSummary(address,address,bytes,address)**(`colonyNetworkAddress`, `colonyAddress`, `_action`, `_altTarget`, `overrides`?): `Promise`\<`ActionSummaryStructOutput`\>

#### Parameters

##### colonyNetworkAddress

`string`

##### colonyAddress

`string`

##### \_action

`BytesLike`

##### \_altTarget

`string`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ActionSummaryStructOutput`\>

#### Inherited from

`AugmentedMultisigPermissions.getSingleActionSummary(address,address,bytes,address)`

***

### getUserRoles()

> **getUserRoles**(`who`, `where`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### who

`string`

##### where

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.getUserRoles`

***

### getUserRoles(address,uint256)()

> **getUserRoles(address,uint256)**(`who`, `where`, `overrides`?): `Promise`\<`string`\>

#### Parameters

##### who

`string`

##### where

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.getUserRoles(address,uint256)`

***

### getUserVote()

> **getUserVote**(`_motionId`, `_user`, `_role`, `_vote`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_user

`string`

##### \_role

`BigNumberish`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedMultisigPermissions.getUserVote`

***

### getUserVote(uint256,address,uint8,uint8)()

> **getUserVote(uint256,address,uint8,uint8)**(`_motionId`, `_user`, `_role`, `_vote`, `overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### \_motionId

`BigNumberish`

##### \_user

`string`

##### \_role

`BigNumberish`

##### \_vote

`BigNumberish`

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedMultisigPermissions.getUserVote(uint256,address,uint8,uint8)`

***

### identifier()

> **identifier**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.identifier`

***

### identifier()()

> **identifier()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.identifier()`

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

`AugmentedMultisigPermissions.install`

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

`AugmentedMultisigPermissions.install(address)`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedMultisigPermissions.listenerCount`

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

`AugmentedMultisigPermissions.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedMultisigPermissions.listeners`

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

`AugmentedMultisigPermissions.multicall`

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

`AugmentedMultisigPermissions.multicall(bytes[])`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedMultisigPermissions.owner()`

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

`AugmentedMultisigPermissions.queryFilter`

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

`AugmentedMultisigPermissions.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedMultisigPermissions.removeAllListeners`

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

`AugmentedMultisigPermissions.setAuthority`

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

`AugmentedMultisigPermissions.setAuthority(address)`

***

### setDomainSkillThreshold()

> **setDomainSkillThreshold**(`_domainSkillId`, `_threshold`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_domainSkillId

`BigNumberish`

##### \_threshold

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.setDomainSkillThreshold`

***

### setDomainSkillThreshold(uint256,uint256)()

> **setDomainSkillThreshold(uint256,uint256)**(`_domainSkillId`, `_threshold`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_domainSkillId

`BigNumberish`

##### \_threshold

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.setDomainSkillThreshold(uint256,uint256)`

***

### setGlobalThreshold()

> **setGlobalThreshold**(`_globalThreshold`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_globalThreshold

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.setGlobalThreshold`

***

### setGlobalThreshold(uint256)()

> **setGlobalThreshold(uint256)**(`_globalThreshold`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_globalThreshold

`BigNumberish`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.setGlobalThreshold(uint256)`

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

`AugmentedMultisigPermissions.setOwner`

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

`AugmentedMultisigPermissions.setOwner(address)`

***

### setUserRoles()

> **setUserRoles**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_roles

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.setUserRoles`

***

### setUserRoles(uint256,uint256,address,uint256,bytes32)()

> **setUserRoles(uint256,uint256,address,uint256,bytes32)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

##### \_childSkillIndex

`BigNumberish`

##### \_user

`string`

##### \_domainId

`BigNumberish`

##### \_roles

`BytesLike`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.setUserRoles(uint256,uint256,address,uint256,bytes32)`

***

### uninstall()

> **uninstall**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.uninstall`

***

### uninstall()()

> **uninstall()**(`overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedMultisigPermissions.uninstall()`

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

`AugmentedMultisigPermissions.verify`

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

`AugmentedMultisigPermissions.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`

***

### version()

> **version**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.version`

***

### version()()

> **version()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedMultisigPermissions.version()`
