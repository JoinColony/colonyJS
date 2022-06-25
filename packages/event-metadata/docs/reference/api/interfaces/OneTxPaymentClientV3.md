[ColonyJS](../README.md) / OneTxPaymentClientV3

# Interface: OneTxPaymentClientV3

## Hierarchy

- `AugmentedOneTxPayment`<`OneTxPayment`\>

  ↳ **`OneTxPaymentClientV3`**

## Table of contents

### Properties

- [\_deployedPromise](OneTxPaymentClientV3.md#_deployedpromise)
- [\_runningEvents](OneTxPaymentClientV3.md#_runningevents)
- [\_wrappedEmits](OneTxPaymentClientV3.md#_wrappedemits)
- [address](OneTxPaymentClientV3.md#address)
- [callStatic](OneTxPaymentClientV3.md#callstatic)
- [clientType](OneTxPaymentClientV3.md#clienttype)
- [clientVersion](OneTxPaymentClientV3.md#clientversion)
- [colonyClient](OneTxPaymentClientV3.md#colonyclient)
- [deployTransaction](OneTxPaymentClientV3.md#deploytransaction)
- [estimateGas](OneTxPaymentClientV3.md#estimategas)
- [filters](OneTxPaymentClientV3.md#filters)
- [functions](OneTxPaymentClientV3.md#functions)
- [interface](OneTxPaymentClientV3.md#interface)
- [off](OneTxPaymentClientV3.md#off)
- [on](OneTxPaymentClientV3.md#on)
- [once](OneTxPaymentClientV3.md#once)
- [oneTxPaymentEvents](OneTxPaymentClientV3.md#onetxpaymentevents)
- [populateTransaction](OneTxPaymentClientV3.md#populatetransaction)
- [provider](OneTxPaymentClientV3.md#provider)
- [removeListener](OneTxPaymentClientV3.md#removelistener)
- [resolvedAddress](OneTxPaymentClientV3.md#resolvedaddress)
- [signer](OneTxPaymentClientV3.md#signer)

### Methods

- [\_checkRunningEvents](OneTxPaymentClientV3.md#_checkrunningevents)
- [\_deployed](OneTxPaymentClientV3.md#_deployed)
- [\_wrapEvent](OneTxPaymentClientV3.md#_wrapevent)
- [attach](OneTxPaymentClientV3.md#attach)
- [authority](OneTxPaymentClientV3.md#authority)
- [connect](OneTxPaymentClientV3.md#connect)
- [deployed](OneTxPaymentClientV3.md#deployed)
- [deprecate](OneTxPaymentClientV3.md#deprecate)
- [emit](OneTxPaymentClientV3.md#emit)
- [executeMetaTransaction](OneTxPaymentClientV3.md#executemetatransaction)
- [fallback](OneTxPaymentClientV3.md#fallback)
- [finishUpgrade](OneTxPaymentClientV3.md#finishupgrade)
- [getCapabilityRoles](OneTxPaymentClientV3.md#getcapabilityroles)
- [getChainId](OneTxPaymentClientV3.md#getchainid)
- [getColony](OneTxPaymentClientV3.md#getcolony)
- [getDeprecated](OneTxPaymentClientV3.md#getdeprecated)
- [getMetatransactionNonce](OneTxPaymentClientV3.md#getmetatransactionnonce)
- [identifier](OneTxPaymentClientV3.md#identifier)
- [install](OneTxPaymentClientV3.md#install)
- [listenerCount](OneTxPaymentClientV3.md#listenercount)
- [listeners](OneTxPaymentClientV3.md#listeners)
- [makePayment](OneTxPaymentClientV3.md#makepayment)
- [makePaymentFundedFromDomain](OneTxPaymentClientV3.md#makepaymentfundedfromdomain)
- [makePaymentFundedFromDomainWithProofs](OneTxPaymentClientV3.md#makepaymentfundedfromdomainwithproofs)
- [makePaymentWithProofs](OneTxPaymentClientV3.md#makepaymentwithproofs)
- [owner](OneTxPaymentClientV3.md#owner)
- [queryFilter](OneTxPaymentClientV3.md#queryfilter)
- [removeAllListeners](OneTxPaymentClientV3.md#removealllisteners)
- [setAuthority](OneTxPaymentClientV3.md#setauthority)
- [setOwner](OneTxPaymentClientV3.md#setowner)
- [uninstall](OneTxPaymentClientV3.md#uninstall)
- [verify](OneTxPaymentClientV3.md#verify)
- [version](OneTxPaymentClientV3.md#version)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedOneTxPayment.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedOneTxPayment.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedOneTxPayment.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedOneTxPayment.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedOneTxPayment.callStatic

___

### clientType

• **clientType**: [`OneTxPaymentClient`](../enums/ClientType.md#onetxpaymentclient)

#### Inherited from

AugmentedOneTxPayment.clientType

___

### clientVersion

• **clientVersion**: ``3``

#### Overrides

AugmentedOneTxPayment.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedOneTxPayment.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedOneTxPayment.deployTransaction

___

### estimateGas

• **estimateGas**: `OneTxPaymentEstimate`

#### Overrides

AugmentedOneTxPayment.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `OneTxPaymentMade` | (`agent?`: ``null``, `fundamentalId?`: ``null``, `nPayouts?`: ``null``) => `OneTxPaymentMadeEventFilter` |
| `OneTxPaymentMade(address,uint256,uint256)` | (`agent?`: ``null``, `fundamentalId?`: ``null``, `nPayouts?`: ``null``) => `OneTxPaymentMadeEventFilter` |

#### Inherited from

AugmentedOneTxPayment.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Inherited from

AugmentedOneTxPayment.functions

___

### interface

• **interface**: `OneTxPaymentInterface`

#### Inherited from

AugmentedOneTxPayment.interface

___

### off

• **off**: `OnEvent`<[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)\>

#### Inherited from

AugmentedOneTxPayment.off

___

### on

• **on**: `OnEvent`<[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)\>

#### Inherited from

AugmentedOneTxPayment.on

___

### once

• **once**: `OnEvent`<[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)\>

#### Inherited from

AugmentedOneTxPayment.once

___

### oneTxPaymentEvents

• **oneTxPaymentEvents**: `OneTxPaymentEvents`

The oneTxPaymentEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedOneTxPayment.oneTxPaymentEvents

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedOneTxPayment.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedOneTxPayment.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)\>

#### Inherited from

AugmentedOneTxPayment.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedOneTxPayment.signer

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

AugmentedOneTxPayment.\_checkRunningEvents

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

AugmentedOneTxPayment.\_deployed

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

AugmentedOneTxPayment.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Inherited from

AugmentedOneTxPayment.attach

___

### authority

▸ **authority**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.authority

___

### connect

▸ **connect**(`signerOrProvider`): [`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Inherited from

AugmentedOneTxPayment.connect

___

### deployed

▸ **deployed**(): `Promise`<[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)\>

#### Returns

`Promise`<[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)\>

#### Inherited from

AugmentedOneTxPayment.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.deprecate

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

AugmentedOneTxPayment.emit

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | Address of user trying to do meta transaction |
| `_payload` | `BytesLike` | Function call to make via meta transaction |
| `_sigR` | `BytesLike` | R part of the signature |
| `_sigS` | `BytesLike` | S part of the signature |
| `_sigV` | `BigNumberish` | V part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.executeMetaTransaction

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

AugmentedOneTxPayment.fallback

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.finishUpgrade

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

Return the permissions required for each function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_sig` | `BytesLike` | The function signature |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.getCapabilityRoles

___

### getChainId

▸ **getChainId**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedOneTxPayment.getChainId

___

### getColony

▸ **getColony**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.getColony

___

### getDeprecated

▸ **getDeprecated**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedOneTxPayment.getDeprecated

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedOneTxPayment.getMetatransactionNonce

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

Returns the identifier of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.identifier

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Configures the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `string` | The colony in which the extension holds permissions |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.install

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

AugmentedOneTxPayment.listenerCount

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

AugmentedOneTxPayment.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedOneTxPayment.listeners

___

### makePayment

▸ **makePayment**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Assumes that each entity holds administration and funding roles in the root domain
Completes a colony payment in a single transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which the _contract_ has permissions to add a payment and fund it |
| `_childSkillIndex` | `BigNumberish` | Index of the _permissionDomainId skill.children array to get |
| `_callerPermissionDomainId` | `BigNumberish` | The domainId in which the _caller_ has the administration permission (must have funding in root) |
| `_callerChildSkillIndex` | `BigNumberish` | Index of the _callerPermissionDomainId skill.children array to get |
| `_workers` | `string`[] | The addresses of the recipients of the payment |
| `_tokens` | `string`[] | Addresses of the tokens the payments are being made in. 0x00 for Ether. |
| `_amounts` | `BigNumberish`[] | amounts of the tokens being paid out |
| `_domainId` | `BigNumberish` | The domainId the payment should be coming from |
| `_skillId` | `BigNumberish` | The skillId that the payment should be marked with, possibly awarding reputation in this skill. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePayment

___

### makePaymentFundedFromDomain

▸ **makePaymentFundedFromDomain**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
Completes a colony payment in a single transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `BigNumberish` | The domainId in which the _contract_ has permissions to add a payment and fund it |
| `_childSkillIndex` | `BigNumberish` | Index of the _permissionDomainId skill.children array to get |
| `_callerPermissionDomainId` | `BigNumberish` | The domainId in which the _caller_ has permissions to add a payment and fund it |
| `_callerChildSkillIndex` | `BigNumberish` | Index of the _callerPermissionDomainId skill.children array to get |
| `_workers` | `string`[] | The addresses of the recipients of the payment |
| `_tokens` | `string`[] | The addresses of the token the payments are being made in. 0x00 for Ether. |
| `_amounts` | `BigNumberish`[] | The amounts of the tokens being paid out |
| `_domainId` | `BigNumberish` | The domainId the payment should be coming from |
| `_skillId` | `BigNumberish` | The skillId that the payment should be marked with, possibly awarding reputation in this skill. |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePaymentFundedFromDomain

___

### makePaymentFundedFromDomainWithProofs

▸ **makePaymentFundedFromDomainWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makePaymentFundedFromDomain](OneTxPaymentClientV3.md#makepaymentfundedfromdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_workers` | `string`[] | The addresses of the recipients of the payment |
| `_tokens` | `string`[] | The addresses of the token the payments are being made in. 0x00 for Ether. |
| `_amounts` | `BigNumberish`[] | The amounts of the tokens being paid out |
| `_domainId` | `BigNumberish` | The domainId the payment should be coming from |
| `_skillId` | `BigNumberish` | The skillId that the payment should be marked with, possibly awarding reputation in this skill. |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePaymentFundedFromDomainWithProofs

___

### makePaymentWithProofs

▸ **makePaymentWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makePayment](OneTxPaymentClientV3.md#makepayment), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_workers` | `string`[] | The addresses of the recipients of the payment |
| `_tokens` | `string`[] | Addresses of the tokens the payments are being made in. 0x00 for Ether. |
| `_amounts` | `BigNumberish`[] | amounts of the tokens being paid out |
| `_domainId` | `BigNumberish` | The domainId the payment should be coming from |
| `_skillId` | `BigNumberish` | The skillId that the payment should be marked with, possibly awarding reputation in this skill. |
| `overrides?` | `TxOverrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePaymentWithProofs

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.owner

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

AugmentedOneTxPayment.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Inherited from

AugmentedOneTxPayment.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`OneTxPaymentClientV3`](OneTxPaymentClientV3.md)

#### Inherited from

AugmentedOneTxPayment.removeAllListeners

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.setAuthority

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.setOwner

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.uninstall

___

### verify

▸ **verify**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `_nonce` | `BigNumberish` |
| `_chainId` | `BigNumberish` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedOneTxPayment.verify

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

Returns the version of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedOneTxPayment.version
