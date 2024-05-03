# Interface: OneTxPaymentClientV7

## Hierarchy

- `AugmentedOneTxPayment`<`OneTxPayment`\>

  ↳ **`OneTxPaymentClientV7`**

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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedOneTxPayment.callStatic

___

### clientType

• **clientType**: [`OneTxPaymentClient`](../enums/ClientType.md#onetxpaymentclient)

#### Inherited from

AugmentedOneTxPayment.clientType

___

### clientVersion

• **clientVersion**: ``7``

#### Overrides

AugmentedOneTxPayment.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`

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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_roles`: `string`  }\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_roles`: `string`  }\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

#### Inherited from

AugmentedOneTxPayment.functions

___

### interface

• **interface**: `OneTxPaymentInterface`

#### Inherited from

AugmentedOneTxPayment.interface

___

### off

• **off**: `OnEvent`<[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)\>

#### Inherited from

AugmentedOneTxPayment.off

___

### on

• **on**: `OnEvent`<[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)\>

#### Inherited from

AugmentedOneTxPayment.on

___

### once

• **once**: `OnEvent`<[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)\>

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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedOneTxPayment.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedOneTxPayment.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)\>

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

▸ **attach**(`addressOrName`): [`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

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

### authority()

▸ **authority()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.authority()

___

### connect

▸ **connect**(`signerOrProvider`): [`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

#### Inherited from

AugmentedOneTxPayment.connect

___

### deployed

▸ **deployed**(): `Promise`<[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)\>

#### Returns

`Promise`<[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)\>

#### Inherited from

AugmentedOneTxPayment.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.deprecate

___

### deprecate(bool)

▸ **deprecate(bool)**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.deprecate(bool)

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

AugmentedOneTxPayment.emit

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.executeMetaTransaction

___

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

▸ **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.finishUpgrade

___

### finishUpgrade()

▸ **finishUpgrade()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.finishUpgrade()

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.getCapabilityRoles

___

### getCapabilityRoles(bytes4)

▸ **getCapabilityRoles(bytes4)**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.getCapabilityRoles(bytes4)

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

### getColony()

▸ **getColony()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.getColony()

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

### getDeprecated()

▸ **getDeprecated()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedOneTxPayment.getDeprecated()

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

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAddress` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedOneTxPayment.getMetatransactionNonce(address)

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.identifier

___

### identifier()

▸ **identifier()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.identifier()

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.install

___

### install(address)

▸ **install(address)**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.install(address)

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
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_callerPermissionDomainId` | `BigNumberish` |
| `_callerChildSkillIndex` | `BigNumberish` |
| `_workers` | `string`[] |
| `_tokens` | `string`[] |
| `_amounts` | `BigNumberish`[] |
| `_domainId` | `BigNumberish` |
| `_skillId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePayment

___

### makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)

▸ **makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_callerPermissionDomainId` | `BigNumberish` |
| `_callerChildSkillIndex` | `BigNumberish` |
| `_workers` | `string`[] |
| `_tokens` | `string`[] |
| `_amounts` | `BigNumberish`[] |
| `_domainId` | `BigNumberish` |
| `_skillId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)

___

### makePaymentFundedFromDomain

▸ **makePaymentFundedFromDomain**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_callerPermissionDomainId` | `BigNumberish` |
| `_callerChildSkillIndex` | `BigNumberish` |
| `_workers` | `string`[] |
| `_tokens` | `string`[] |
| `_amounts` | `BigNumberish`[] |
| `_domainId` | `BigNumberish` |
| `_skillId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePaymentFundedFromDomain

___

### makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)

▸ **makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_callerPermissionDomainId` | `BigNumberish` |
| `_callerChildSkillIndex` | `BigNumberish` |
| `_workers` | `string`[] |
| `_tokens` | `string`[] |
| `_amounts` | `BigNumberish`[] |
| `_domainId` | `BigNumberish` |
| `_skillId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)

___

### makePaymentFundedFromDomainWithProofs

▸ **makePaymentFundedFromDomainWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makePaymentFundedFromDomain](OneTxPaymentClientV7.md#makepaymentfundedfromdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_workers` | `string`[] | The addresses of the recipients of the payment |
| `_tokens` | `string`[] | The addresses of the token the payments are being made in. 0x00 for Ether. |
| `_amounts` | `BigNumberish`[] | The amounts of the tokens being paid out |
| `_domainId` | `BigNumberish` | The domainId the payment should be coming from |
| `_skillId` | `BigNumberish` | The skillId that the payment should be marked with, possibly awarding reputation in this skill. |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePaymentFundedFromDomainWithProofs

___

### makePaymentWithProofs

▸ **makePaymentWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makePayment](OneTxPaymentClientV7.md#makepayment), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_workers` | `string`[] | The addresses of the recipients of the payment |
| `_tokens` | `string`[] | Addresses of the tokens the payments are being made in. 0x00 for Ether. |
| `_amounts` | `BigNumberish`[] | amounts of the tokens being paid out |
| `_domainId` | `BigNumberish` | The domainId the payment should be coming from |
| `_skillId` | `BigNumberish` | The skillId that the payment should be marked with, possibly awarding reputation in this skill. |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.makePaymentWithProofs

___

### multicall

▸ **multicall**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.multicall

___

### multicall(bytes[])

▸ **multicall(bytes[])**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.multicall(bytes[])

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

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedOneTxPayment.owner()

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

#### Inherited from

AugmentedOneTxPayment.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`OneTxPaymentClientV7`](OneTxPaymentClientV7.md)

#### Inherited from

AugmentedOneTxPayment.removeAllListeners

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.setAuthority

___

### setAuthority(address)

▸ **setAuthority(address)**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.setAuthority(address)

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.setOwner

___

### setOwner(address)

▸ **setOwner(address)**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.setOwner(address)

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.uninstall

___

### uninstall()

▸ **uninstall()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedOneTxPayment.uninstall()

___

### verify

▸ **verify**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
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

### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

▸ **verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
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

AugmentedOneTxPayment.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedOneTxPayment.version

___

### version()

▸ **version()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedOneTxPayment.version()
