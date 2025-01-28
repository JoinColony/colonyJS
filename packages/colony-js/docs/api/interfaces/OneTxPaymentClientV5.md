# Interface: OneTxPaymentClientV5

## Extends

- `AugmentedOneTxPayment`\<`OneTxPayment`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedOneTxPayment._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedOneTxPayment._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedOneTxPayment._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedOneTxPayment.address`

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

Return the permissions required for each function

##### Parameters

###### \_sig

`BytesLike`

The function signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`string`\>

#### getCapabilityRoles(bytes4)()

Return the permissions required for each function

##### Parameters

###### \_sig

`BytesLike`

The function signature

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

Gets the next nonce for a meta-transaction

##### Parameters

###### userAddress

`string`

The user's address

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getMetatransactionNonce(address)()

Gets the next nonce for a meta-transaction

##### Parameters

###### userAddress

`string`

The user's address

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

#### makePayment()

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### makePayment(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### makePaymentFundedFromDomain()

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

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

`AugmentedOneTxPayment.callStatic`

***

### clientType

> **clientType**: [`OneTxPaymentClient`](../enumerations/ClientType.md#onetxpaymentclient)

#### Inherited from

`AugmentedOneTxPayment.clientType`

***

### clientVersion

> **clientVersion**: `5`

#### Overrides

`AugmentedOneTxPayment.clientVersion`

***

### colonyClient

> **colonyClient**: `AugmentedIColony`

An instance of the corresponding ColonyClient

#### Inherited from

`AugmentedOneTxPayment.colonyClient`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedOneTxPayment.deployTransaction`

***

### estimateGas

> **estimateGas**: `OneTxPaymentEstimate`

#### Overrides

`AugmentedOneTxPayment.estimateGas`

***

### filters

> **filters**: `object`

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

#### OneTxPaymentMade()

##### Parameters

###### agent?

`null`

###### fundamentalId?

`null`

###### nPayouts?

`null`

##### Returns

`OneTxPaymentMadeEventFilter`

#### OneTxPaymentMade(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### fundamentalId?

`null`

###### nPayouts?

`null`

##### Returns

`OneTxPaymentMadeEventFilter`

#### Inherited from

`AugmentedOneTxPayment.filters`

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

Return the permissions required for each function

##### Parameters

###### \_sig

`BytesLike`

The function signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

#### getCapabilityRoles(bytes4)()

Return the permissions required for each function

##### Parameters

###### \_sig

`BytesLike`

The function signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`string`\] & `object`\>

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

Gets the next nonce for a meta-transaction

##### Parameters

###### userAddress

`string`

The user's address

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getMetatransactionNonce(address)()

Gets the next nonce for a meta-transaction

##### Parameters

###### userAddress

`string`

The user's address

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

#### makePayment()

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### makePayment(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### makePaymentFundedFromDomain()

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

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

`AugmentedOneTxPayment.functions`

***

### interface

> **interface**: `OneTxPaymentInterface`

#### Inherited from

`AugmentedOneTxPayment.interface`

***

### off

> **off**: `OnEvent`\<[`OneTxPaymentClientV5`](OneTxPaymentClientV5.md)\>

#### Inherited from

`AugmentedOneTxPayment.off`

***

### on

> **on**: `OnEvent`\<[`OneTxPaymentClientV5`](OneTxPaymentClientV5.md)\>

#### Inherited from

`AugmentedOneTxPayment.on`

***

### once

> **once**: `OnEvent`\<[`OneTxPaymentClientV5`](OneTxPaymentClientV5.md)\>

#### Inherited from

`AugmentedOneTxPayment.once`

***

### oneTxPaymentEvents

> **oneTxPaymentEvents**: `OneTxPaymentEvents`

The oneTxPaymentEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedOneTxPayment.oneTxPaymentEvents`

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

Return the permissions required for each function

##### Parameters

###### \_sig

`BytesLike`

The function signature

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getCapabilityRoles(bytes4)()

Return the permissions required for each function

##### Parameters

###### \_sig

`BytesLike`

The function signature

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

Gets the next nonce for a meta-transaction

##### Parameters

###### userAddress

`string`

The user's address

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getMetatransactionNonce(address)()

Gets the next nonce for a meta-transaction

##### Parameters

###### userAddress

`string`

The user's address

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

#### makePayment()

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### makePayment(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### makePaymentFundedFromDomain()

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

##### Parameters

###### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

###### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

###### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

###### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

###### \_workers

`string`[]

The addresses of the recipients of the payment

###### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

###### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

###### \_domainId

`BigNumberish`

The domainId the payment should be coming from

###### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

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

`AugmentedOneTxPayment.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedOneTxPayment.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`OneTxPaymentClientV5`](OneTxPaymentClientV5.md)\>

#### Inherited from

`AugmentedOneTxPayment.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedOneTxPayment.signer`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedOneTxPayment._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedOneTxPayment._deployed`

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

`AugmentedOneTxPayment._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedOneTxPayment.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.authority()`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedOneTxPayment.connect`

***

### deployed()

> **deployed**(): `Promise`\<[`OneTxPaymentClientV5`](OneTxPaymentClientV5.md)\>

#### Returns

`Promise`\<[`OneTxPaymentClientV5`](OneTxPaymentClientV5.md)\>

#### Inherited from

`AugmentedOneTxPayment.deployed`

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

`AugmentedOneTxPayment.deprecate`

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

`AugmentedOneTxPayment.deprecate(bool)`

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

`AugmentedOneTxPayment.emit`

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

`AugmentedOneTxPayment.executeMetaTransaction`

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

`AugmentedOneTxPayment.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedOneTxPayment.fallback`

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

`AugmentedOneTxPayment.finishUpgrade`

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

`AugmentedOneTxPayment.finishUpgrade()`

***

### getCapabilityRoles()

> **getCapabilityRoles**(`_sig`, `overrides`?): `Promise`\<`string`\>

Return the permissions required for each function

#### Parameters

##### \_sig

`BytesLike`

The function signature

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.getCapabilityRoles`

***

### getCapabilityRoles(bytes4)()

> **getCapabilityRoles(bytes4)**(`_sig`, `overrides`?): `Promise`\<`string`\>

Return the permissions required for each function

#### Parameters

##### \_sig

`BytesLike`

The function signature

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.getCapabilityRoles(bytes4)`

***

### getChainId()

> **getChainId**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedOneTxPayment.getChainId`

***

### getChainId()()

> **getChainId()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedOneTxPayment.getChainId()`

***

### getColony()

> **getColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.getColony`

***

### getColony()()

> **getColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.getColony()`

***

### getDeprecated()

> **getDeprecated**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedOneTxPayment.getDeprecated`

***

### getDeprecated()()

> **getDeprecated()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedOneTxPayment.getDeprecated()`

***

### getMetatransactionNonce()

> **getMetatransactionNonce**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

Gets the next nonce for a meta-transaction

#### Parameters

##### userAddress

`string`

The user's address

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedOneTxPayment.getMetatransactionNonce`

***

### getMetatransactionNonce(address)()

> **getMetatransactionNonce(address)**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

Gets the next nonce for a meta-transaction

#### Parameters

##### userAddress

`string`

The user's address

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedOneTxPayment.getMetatransactionNonce(address)`

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

`AugmentedOneTxPayment.identifier`

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

`AugmentedOneTxPayment.identifier()`

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

`AugmentedOneTxPayment.install`

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

`AugmentedOneTxPayment.install(address)`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedOneTxPayment.listenerCount`

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

`AugmentedOneTxPayment.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedOneTxPayment.listeners`

***

### makePayment()

> **makePayment**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

##### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

##### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

##### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

##### \_workers

`string`[]

The addresses of the recipients of the payment

##### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

##### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

##### \_domainId

`BigNumberish`

The domainId the payment should be coming from

##### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedOneTxPayment.makePayment`

***

### makePayment(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

> **makePayment(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

##### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

##### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has the administration permission (must have funding in root)

##### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

##### \_workers

`string`[]

The addresses of the recipients of the payment

##### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

##### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

##### \_domainId

`BigNumberish`

The domainId the payment should be coming from

##### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedOneTxPayment.makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)`

***

### makePaymentFundedFromDomain()

> **makePaymentFundedFromDomain**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

##### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

##### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

##### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

##### \_workers

`string`[]

The addresses of the recipients of the payment

##### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

##### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

##### \_domainId

`BigNumberish`

The domainId the payment should be coming from

##### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedOneTxPayment.makePaymentFundedFromDomain`

***

### makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)()

> **makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address\[\],address\[\],uint256\[\],uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which the _contract_ has permissions to add a payment and fund it

##### \_childSkillIndex

`BigNumberish`

Index of the _permissionDomainId skill.children array to get

##### \_callerPermissionDomainId

`BigNumberish`

The domainId in which the _caller_ has permissions to add a payment and fund it

##### \_callerChildSkillIndex

`BigNumberish`

Index of the _callerPermissionDomainId skill.children array to get

##### \_workers

`string`[]

The addresses of the recipients of the payment

##### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

##### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

##### \_domainId

`BigNumberish`

The domainId the payment should be coming from

##### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedOneTxPayment.makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)`

***

### makePaymentFundedFromDomainWithProofs()

> **makePaymentFundedFromDomainWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [makePaymentFundedFromDomain](OneTxPaymentClientV5.md#makepaymentfundedfromdomain-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_workers

`string`[]

The addresses of the recipients of the payment

##### \_tokens

`string`[]

The addresses of the token the payments are being made in. 0x00 for Ether.

##### \_amounts

`BigNumberish`[]

The amounts of the tokens being paid out

##### \_domainId

`BigNumberish`

The domainId the payment should be coming from

##### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedOneTxPayment.makePaymentFundedFromDomainWithProofs`

***

### makePaymentWithProofs()

> **makePaymentWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [makePayment](OneTxPaymentClientV5.md#makepayment-18), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_workers

`string`[]

The addresses of the recipients of the payment

##### \_tokens

`string`[]

Addresses of the tokens the payments are being made in. 0x00 for Ether.

##### \_amounts

`BigNumberish`[]

amounts of the tokens being paid out

##### \_domainId

`BigNumberish`

The domainId the payment should be coming from

##### \_skillId

`BigNumberish`

The skillId that the payment should be marked with, possibly awarding reputation in this skill.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedOneTxPayment.makePaymentWithProofs`

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

`AugmentedOneTxPayment.multicall`

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

`AugmentedOneTxPayment.multicall(bytes[])`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedOneTxPayment.owner()`

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

`AugmentedOneTxPayment.queryFilter`

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

`AugmentedOneTxPayment.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedOneTxPayment.removeAllListeners`

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

`AugmentedOneTxPayment.setAuthority`

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

`AugmentedOneTxPayment.setAuthority(address)`

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

`AugmentedOneTxPayment.setOwner`

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

`AugmentedOneTxPayment.setOwner(address)`

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

`AugmentedOneTxPayment.uninstall`

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

`AugmentedOneTxPayment.uninstall()`

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

`AugmentedOneTxPayment.verify`

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

`AugmentedOneTxPayment.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`

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

`AugmentedOneTxPayment.version`

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

`AugmentedOneTxPayment.version()`
