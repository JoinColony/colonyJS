[**API**](../README.md)

***

# Interface: TokenSupplierClientV4

## Extends

- `AugmentedTokenSupplier`\<`TokenSupplier`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedTokenSupplier._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedTokenSupplier._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedTokenSupplier._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedTokenSupplier.address`

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

Called when upgrading the extension (currently a no-op)

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### finishUpgrade()()

Called when upgrading the extension (currently a no-op)

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

#### getLastPinged()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getLastPinged()()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getLastRateUpdate()

Get the time of the last change in issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getLastRateUpdate()()

Get the time of the last change in issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

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

#### getTokenIssuanceRate()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTokenIssuanceRate()()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTokenSupplyCeiling()

Get the token supply ceiling

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTokenSupplyCeiling()()

Get the token supply ceiling

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

#### initialise()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### initialise(uint256,uint256)()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

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

#### issueTokens()

Issue the appropriate amount of tokens

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### issueTokens()()

Issue the appropriate amount of tokens

##### Parameters

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

#### setTokenIssuanceRate()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setTokenIssuanceRate(uint256)()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setTokenSupplyCeiling()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`void`\>

#### setTokenSupplyCeiling(uint256)()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

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

`AugmentedTokenSupplier.callStatic`

***

### clientType

> **clientType**: [`TokenSupplierClient`](../enumerations/ClientType.md#tokensupplierclient)

#### Inherited from

`AugmentedTokenSupplier.clientType`

***

### clientVersion

> **clientVersion**: `4`

#### Overrides

`AugmentedTokenSupplier.clientVersion`

***

### colonyClient

> **colonyClient**: `AugmentedIColony`

An instance of the corresponding ColonyClient

#### Inherited from

`AugmentedTokenSupplier.colonyClient`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedTokenSupplier.deployTransaction`

***

### estimateGas

> **estimateGas**: `object`

#### authority()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### authority()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### deprecate()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### deprecate(bool)()

Called when deprecating (or undeprecating) the extension

##### Parameters

###### \_deprecated

`boolean`

Indicates whether the extension should be deprecated or undeprecated

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

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

`Promise`\<`BigNumber`\>

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

`Promise`\<`BigNumber`\>

#### finishUpgrade()

Called when upgrading the extension (currently a no-op)

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### finishUpgrade()()

Called when upgrading the extension (currently a no-op)

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### getCapabilityRoles()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getCapabilityRoles(bytes4)()

##### Parameters

###### \_sig

`BytesLike`

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

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

`Promise`\<`BigNumber`\>

#### getColony()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getDeprecated()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getDeprecated()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getLastPinged()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getLastPinged()()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getLastRateUpdate()

Get the time of the last change in issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getLastRateUpdate()()

Get the time of the last change in issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

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

#### getTokenIssuanceRate()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTokenIssuanceRate()()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTokenSupplyCeiling()

Get the token supply ceiling

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### getTokenSupplyCeiling()()

Get the token supply ceiling

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

`Promise`\<`BigNumber`\>

#### identifier()()

Returns the identifier of the extension

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### initialise()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### initialise(uint256,uint256)()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### install()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### install(address)()

Configures the extension

##### Parameters

###### \_colony

`string`

The colony in which the extension holds permissions

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### issueTokens()

Issue the appropriate amount of tokens

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### issueTokens()()

Issue the appropriate amount of tokens

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### multicall()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### multicall(bytes\[\])()

##### Parameters

###### data

`BytesLike`[]

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### owner()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### owner()()

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`BigNumber`\>

#### setAuthority()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setAuthority(address)()

##### Parameters

###### authority\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setOwner()

##### Parameters

###### owner\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setOwner(address)()

##### Parameters

###### owner\_

`string`

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setTokenIssuanceRate()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setTokenIssuanceRate(uint256)()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setTokenSupplyCeiling()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### setTokenSupplyCeiling(uint256)()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### uninstall()

Called when uninstalling the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

#### uninstall()()

Called when uninstalling the extension

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`BigNumber`\>

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

`Promise`\<`BigNumber`\>

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

`Promise`\<`BigNumber`\>

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

`AugmentedTokenSupplier.estimateGas`

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

#### TokenIssuanceRateSet()

##### Parameters

###### tokenIssuanceRate?

`null`

##### Returns

`TokenIssuanceRateSetEventFilter`

#### TokenIssuanceRateSet(uint256)()

##### Parameters

###### tokenIssuanceRate?

`null`

##### Returns

`TokenIssuanceRateSetEventFilter`

#### TokensIssued()

##### Parameters

###### numTokens?

`null`

##### Returns

`TokensIssuedEventFilter`

#### TokensIssued(uint256)()

##### Parameters

###### numTokens?

`null`

##### Returns

`TokensIssuedEventFilter`

#### TokenSupplyCeilingSet()

##### Parameters

###### tokenSupplyCeiling?

`null`

##### Returns

`TokenSupplyCeilingSetEventFilter`

#### TokenSupplyCeilingSet(uint256)()

##### Parameters

###### tokenSupplyCeiling?

`null`

##### Returns

`TokenSupplyCeilingSetEventFilter`

#### Inherited from

`AugmentedTokenSupplier.filters`

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

Called when upgrading the extension (currently a no-op)

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### finishUpgrade()()

Called when upgrading the extension (currently a no-op)

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

#### getLastPinged()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getLastPinged()()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getLastRateUpdate()

Get the time of the last change in issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getLastRateUpdate()()

Get the time of the last change in issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

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

#### getTokenIssuanceRate()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTokenIssuanceRate()()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTokenSupplyCeiling()

Get the token supply ceiling

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<\[`BigNumber`\] & `object`\>

#### getTokenSupplyCeiling()()

Get the token supply ceiling

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

#### initialise()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### initialise(uint256,uint256)()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

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

#### issueTokens()

Issue the appropriate amount of tokens

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### issueTokens()()

Issue the appropriate amount of tokens

##### Parameters

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

#### setTokenIssuanceRate()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setTokenIssuanceRate(uint256)()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setTokenSupplyCeiling()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`ContractTransaction`\>

#### setTokenSupplyCeiling(uint256)()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

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

`AugmentedTokenSupplier.functions`

***

### interface

> **interface**: `TokenSupplierInterface`

#### Inherited from

`AugmentedTokenSupplier.interface`

***

### off

> **off**: `OnEvent`\<[`TokenSupplierClientV4`](TokenSupplierClientV4.md)\>

#### Inherited from

`AugmentedTokenSupplier.off`

***

### on

> **on**: `OnEvent`\<[`TokenSupplierClientV4`](TokenSupplierClientV4.md)\>

#### Inherited from

`AugmentedTokenSupplier.on`

***

### once

> **once**: `OnEvent`\<[`TokenSupplierClientV4`](TokenSupplierClientV4.md)\>

#### Inherited from

`AugmentedTokenSupplier.once`

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

Called when upgrading the extension (currently a no-op)

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### finishUpgrade()()

Called when upgrading the extension (currently a no-op)

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

#### getLastPinged()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getLastPinged()()

Get the time of the last token minting event

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getLastRateUpdate()

Get the time of the last change in issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getLastRateUpdate()()

Get the time of the last change in issuance rate

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

#### getTokenIssuanceRate()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTokenIssuanceRate()()

Get the token issuance rate

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTokenSupplyCeiling()

Get the token supply ceiling

##### Parameters

###### overrides?

`CallOverrides`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### getTokenSupplyCeiling()()

Get the token supply ceiling

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

#### initialise()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### initialise(uint256,uint256)()

Initialise the extension, must be called before any tokens can be issued

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

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

#### issueTokens()

Issue the appropriate amount of tokens

##### Parameters

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### issueTokens()()

Issue the appropriate amount of tokens

##### Parameters

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

#### setTokenIssuanceRate()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setTokenIssuanceRate(uint256)()

Update the tokenIssuanceRate

##### Parameters

###### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setTokenSupplyCeiling()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

###### overrides?

`Overrides` & `object`

##### Returns

`Promise`\<`PopulatedTransaction`\>

#### setTokenSupplyCeiling(uint256)()

Update the tokenSupplyCeiling, cannot set below current tokenSupply

##### Parameters

###### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

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

`AugmentedTokenSupplier.populateTransaction`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedTokenSupplier.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`TokenSupplierClientV4`](TokenSupplierClientV4.md)\>

#### Inherited from

`AugmentedTokenSupplier.removeListener`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedTokenSupplier.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedTokenSupplier.signer`

***

### tokenSupplierEvents

> **tokenSupplierEvents**: `TokenSupplierEvents`

The tokenSupplierEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedTokenSupplier.tokenSupplierEvents`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedTokenSupplier._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedTokenSupplier._deployed`

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

`AugmentedTokenSupplier._wrapEvent`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedTokenSupplier.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedTokenSupplier.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedTokenSupplier.authority()`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedTokenSupplier.connect`

***

### deployed()

> **deployed**(): `Promise`\<[`TokenSupplierClientV4`](TokenSupplierClientV4.md)\>

#### Returns

`Promise`\<[`TokenSupplierClientV4`](TokenSupplierClientV4.md)\>

#### Inherited from

`AugmentedTokenSupplier.deployed`

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

`AugmentedTokenSupplier.deprecate`

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

`AugmentedTokenSupplier.deprecate(bool)`

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

`AugmentedTokenSupplier.emit`

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

`AugmentedTokenSupplier.executeMetaTransaction`

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

`AugmentedTokenSupplier.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedTokenSupplier.fallback`

***

### finishUpgrade()

> **finishUpgrade**(`overrides`?): `Promise`\<`ContractTransaction`\>

Called when upgrading the extension (currently a no-op)

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.finishUpgrade`

***

### finishUpgrade()()

> **finishUpgrade()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Called when upgrading the extension (currently a no-op)

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.finishUpgrade()`

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

`AugmentedTokenSupplier.getCapabilityRoles`

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

`AugmentedTokenSupplier.getCapabilityRoles(bytes4)`

***

### getChainId()

> **getChainId**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getChainId`

***

### getChainId()()

> **getChainId()**(`overrides`?): `Promise`\<`BigNumber`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getChainId()`

***

### getColony()

> **getColony**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedTokenSupplier.getColony`

***

### getColony()()

> **getColony()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedTokenSupplier.getColony()`

***

### getDeprecated()

> **getDeprecated**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedTokenSupplier.getDeprecated`

***

### getDeprecated()()

> **getDeprecated()**(`overrides`?): `Promise`\<`boolean`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedTokenSupplier.getDeprecated()`

***

### getLastPinged()

> **getLastPinged**(`overrides`?): `Promise`\<`BigNumber`\>

Get the time of the last token minting event

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getLastPinged`

***

### getLastPinged()()

> **getLastPinged()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the time of the last token minting event

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getLastPinged()`

***

### getLastRateUpdate()

> **getLastRateUpdate**(`overrides`?): `Promise`\<`BigNumber`\>

Get the time of the last change in issuance rate

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getLastRateUpdate`

***

### getLastRateUpdate()()

> **getLastRateUpdate()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the time of the last change in issuance rate

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getLastRateUpdate()`

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

`AugmentedTokenSupplier.getMetatransactionNonce`

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

`AugmentedTokenSupplier.getMetatransactionNonce(address)`

***

### getTokenIssuanceRate()

> **getTokenIssuanceRate**(`overrides`?): `Promise`\<`BigNumber`\>

Get the token issuance rate

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getTokenIssuanceRate`

***

### getTokenIssuanceRate()()

> **getTokenIssuanceRate()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the token issuance rate

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getTokenIssuanceRate()`

***

### getTokenSupplyCeiling()

> **getTokenSupplyCeiling**(`overrides`?): `Promise`\<`BigNumber`\>

Get the token supply ceiling

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getTokenSupplyCeiling`

***

### getTokenSupplyCeiling()()

> **getTokenSupplyCeiling()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the token supply ceiling

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedTokenSupplier.getTokenSupplyCeiling()`

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

`AugmentedTokenSupplier.identifier`

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

`AugmentedTokenSupplier.identifier()`

***

### initialise()

> **initialise**(`_tokenSupplyCeiling`, `_tokenIssuanceRate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Initialise the extension, must be called before any tokens can be issued

#### Parameters

##### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

##### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.initialise`

***

### initialise(uint256,uint256)()

> **initialise(uint256,uint256)**(`_tokenSupplyCeiling`, `_tokenIssuanceRate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Initialise the extension, must be called before any tokens can be issued

#### Parameters

##### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

##### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.initialise(uint256,uint256)`

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

`AugmentedTokenSupplier.install`

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

`AugmentedTokenSupplier.install(address)`

***

### issueTokens()

> **issueTokens**(`overrides`?): `Promise`\<`ContractTransaction`\>

Issue the appropriate amount of tokens

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.issueTokens`

***

### issueTokens()()

> **issueTokens()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Issue the appropriate amount of tokens

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.issueTokens()`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedTokenSupplier.listenerCount`

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

`AugmentedTokenSupplier.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedTokenSupplier.listeners`

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

`AugmentedTokenSupplier.multicall`

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

`AugmentedTokenSupplier.multicall(bytes[])`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedTokenSupplier.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedTokenSupplier.owner()`

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

`AugmentedTokenSupplier.queryFilter`

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

`AugmentedTokenSupplier.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedTokenSupplier.removeAllListeners`

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

`AugmentedTokenSupplier.setAuthority`

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

`AugmentedTokenSupplier.setAuthority(address)`

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

`AugmentedTokenSupplier.setOwner`

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

`AugmentedTokenSupplier.setOwner(address)`

***

### setTokenIssuanceRate()

> **setTokenIssuanceRate**(`_tokenIssuanceRate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the tokenIssuanceRate

#### Parameters

##### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.setTokenIssuanceRate`

***

### setTokenIssuanceRate(uint256)()

> **setTokenIssuanceRate(uint256)**(`_tokenIssuanceRate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the tokenIssuanceRate

#### Parameters

##### \_tokenIssuanceRate

`BigNumberish`

Number of tokens to issue per day

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.setTokenIssuanceRate(uint256)`

***

### setTokenSupplyCeiling()

> **setTokenSupplyCeiling**(`_tokenSupplyCeiling`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the tokenSupplyCeiling, cannot set below current tokenSupply

#### Parameters

##### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.setTokenSupplyCeiling`

***

### setTokenSupplyCeiling(uint256)()

> **setTokenSupplyCeiling(uint256)**(`_tokenSupplyCeiling`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the tokenSupplyCeiling, cannot set below current tokenSupply

#### Parameters

##### \_tokenSupplyCeiling

`BigNumberish`

Total amount of tokens to issue

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedTokenSupplier.setTokenSupplyCeiling(uint256)`

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

`AugmentedTokenSupplier.uninstall`

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

`AugmentedTokenSupplier.uninstall()`

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

`AugmentedTokenSupplier.verify`

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

`AugmentedTokenSupplier.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)`

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

`AugmentedTokenSupplier.version`

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

`AugmentedTokenSupplier.version()`
