# Interface: WhitelistClientV4

## Hierarchy

- `AugmentedWhitelist`<`Whitelist`\>

  ↳ **`WhitelistClientV4`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedWhitelist.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedWhitelist.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedWhitelist.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedWhitelist.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `approveUsers(address[],bool)` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getAgreementHash()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getApproval(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getSignature(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getUseApprovals()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialise(bool,string)` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isApproved(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `signAgreement(string)` | (`_agreementHash`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedWhitelist.callStatic

___

### clientType

• **clientType**: [`WhitelistClient`](../enums/ClientType.md#whitelistclient)

#### Inherited from

AugmentedWhitelist.clientType

___

### clientVersion

• **clientVersion**: ``4``

#### Overrides

AugmentedWhitelist.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedWhitelist.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedWhitelist.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `approveUsers(address[],bool)` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAgreementHash()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproval(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSignature(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUseApprovals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `initialise(bool,string)` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isApproved(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `signAgreement(string)` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedWhitelist.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AgreementSigned` | (`_user?`: ``null`` \| `string`) => `AgreementSignedEventFilter` |
| `AgreementSigned(address)` | (`_user?`: ``null`` \| `string`) => `AgreementSignedEventFilter` |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `UserApproved` | (`_user?`: ``null`` \| `string`, `_status?`: ``null``) => `UserApprovedEventFilter` |
| `UserApproved(address,bool)` | (`_user?`: ``null`` \| `string`, `_status?`: ``null``) => `UserApprovedEventFilter` |

#### Inherited from

AugmentedWhitelist.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `approveUsers(address[],bool)` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_hash`: `string`  }\> |
| `getAgreementHash()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_hash`: `string`  }\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getApproval(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getSignature(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_useApprovals`: `boolean`  }\> |
| `getUseApprovals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_useApprovals`: `boolean`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialise(bool,string)` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_approved`: `boolean`  }\> |
| `isApproved(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_approved`: `boolean`  }\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `signAgreement(string)` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

#### Inherited from

AugmentedWhitelist.functions

___

### interface

• **interface**: `WhitelistInterface`

#### Inherited from

AugmentedWhitelist.interface

___

### off

• **off**: `OnEvent`<[`WhitelistClientV4`](WhitelistClientV4.md)\>

#### Inherited from

AugmentedWhitelist.off

___

### on

• **on**: `OnEvent`<[`WhitelistClientV4`](WhitelistClientV4.md)\>

#### Inherited from

AugmentedWhitelist.on

___

### once

• **once**: `OnEvent`<[`WhitelistClientV4`](WhitelistClientV4.md)\>

#### Inherited from

AugmentedWhitelist.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `approveUsers(address[],bool)` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAgreementHash()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproval(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSignature(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUseApprovals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialise(bool,string)` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApproved(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `signAgreement(string)` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedWhitelist.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedWhitelist.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`WhitelistClientV4`](WhitelistClientV4.md)\>

#### Inherited from

AugmentedWhitelist.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedWhitelist.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedWhitelist.signer

___

### whitelistEvents

• **whitelistEvents**: `WhitelistEvents`

The whitelistEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedWhitelist.whitelistEvents

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

AugmentedWhitelist.\_checkRunningEvents

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

AugmentedWhitelist.\_deployed

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

AugmentedWhitelist.\_wrapEvent

___

### approveUsers

▸ **approveUsers**(`_users`, `_status`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets user statuses in the whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_users` | `string`[] | An array of user addresses |
| `_status` | `boolean` | The whitelist status to set |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.approveUsers

___

### approveUsers(address[],bool)

▸ **approveUsers(address[],bool)**(`_users`, `_status`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets user statuses in the whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_users` | `string`[] | An array of user addresses |
| `_status` | `boolean` | The whitelist status to set |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.approveUsers(address[],bool)

___

### attach

▸ **attach**(`addressOrName`): [`WhitelistClientV4`](WhitelistClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`WhitelistClientV4`](WhitelistClientV4.md)

#### Inherited from

AugmentedWhitelist.attach

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

AugmentedWhitelist.authority

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

AugmentedWhitelist.authority()

___

### connect

▸ **connect**(`signerOrProvider`): [`WhitelistClientV4`](WhitelistClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`WhitelistClientV4`](WhitelistClientV4.md)

#### Inherited from

AugmentedWhitelist.connect

___

### deployed

▸ **deployed**(): `Promise`<[`WhitelistClientV4`](WhitelistClientV4.md)\>

#### Returns

`Promise`<[`WhitelistClientV4`](WhitelistClientV4.md)\>

#### Inherited from

AugmentedWhitelist.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_deprecated` | `boolean` | Indicates whether the extension should be deprecated or undeprecated |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.deprecate

___

### deprecate(bool)

▸ **deprecate(bool)**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_deprecated` | `boolean` | Indicates whether the extension should be deprecated or undeprecated |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.deprecate(bool)

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

AugmentedWhitelist.emit

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
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.executeMetaTransaction

___

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

▸ **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | Address of user trying to do meta transaction |
| `_payload` | `BytesLike` | Function call to make via meta transaction |
| `_sigR` | `BytesLike` | R part of the signature |
| `_sigS` | `BytesLike` | S part of the signature |
| `_sigV` | `BigNumberish` | V part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

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

AugmentedWhitelist.fallback

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.finishUpgrade

___

### finishUpgrade()

▸ **finishUpgrade()**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.finishUpgrade()

___

### getAgreementHash

▸ **getAgreementHash**(`overrides?`): `Promise`<`string`\>

Get the agreementHash

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedWhitelist.getAgreementHash

___

### getAgreementHash()

▸ **getAgreementHash()**(`overrides?`): `Promise`<`string`\>

Get the agreementHash

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedWhitelist.getAgreementHash()

___

### getApproval

▸ **getApproval**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's approval status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getApproval

___

### getApproval(address)

▸ **getApproval(address)**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's approval status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getApproval(address)

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

AugmentedWhitelist.getCapabilityRoles

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

AugmentedWhitelist.getCapabilityRoles(bytes4)

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

AugmentedWhitelist.getChainId

___

### getChainId()

▸ **getChainId()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedWhitelist.getChainId()

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

AugmentedWhitelist.getColony

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

AugmentedWhitelist.getColony()

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

AugmentedWhitelist.getDeprecated

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

AugmentedWhitelist.getDeprecated()

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next nonce for a meta-transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedWhitelist.getMetatransactionNonce

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next nonce for a meta-transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedWhitelist.getMetatransactionNonce(address)

___

### getSignature

▸ **getSignature**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's signature status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getSignature

___

### getSignature(address)

▸ **getSignature(address)**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's signature status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getSignature(address)

___

### getUseApprovals

▸ **getUseApprovals**(`overrides?`): `Promise`<`boolean`\>

Get the useApprovals boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getUseApprovals

___

### getUseApprovals()

▸ **getUseApprovals()**(`overrides?`): `Promise`<`boolean`\>

Get the useApprovals boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getUseApprovals()

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

AugmentedWhitelist.identifier

___

### identifier()

▸ **identifier()**(`overrides?`): `Promise`<`string`\>

Returns the identifier of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedWhitelist.identifier()

___

### initialise

▸ **initialise**(`_useApprovals`, `_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

Initialise the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_useApprovals` | `boolean` | Whether or not to require administrative approval |
| `_agreementHash` | `string` | An agreement hash (such as an IPFS URI) |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.initialise

___

### initialise(bool,string)

▸ **initialise(bool,string)**(`_useApprovals`, `_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

Initialise the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_useApprovals` | `boolean` | Whether or not to require administrative approval |
| `_agreementHash` | `string` | An agreement hash (such as an IPFS URI) |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.initialise(bool,string)

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Configures the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `string` | The colony in which the extension holds permissions |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.install

___

### install(address)

▸ **install(address)**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Configures the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `string` | The colony in which the extension holds permissions |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.install(address)

___

### isApproved

▸ **isApproved**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's overall whitelist status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.isApproved

___

### isApproved(address)

▸ **isApproved(address)**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's overall whitelist status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.isApproved(address)

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

AugmentedWhitelist.listenerCount

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

AugmentedWhitelist.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedWhitelist.listeners

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

AugmentedWhitelist.multicall

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

AugmentedWhitelist.multicall(bytes[])

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

AugmentedWhitelist.owner

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

AugmentedWhitelist.owner()

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

AugmentedWhitelist.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`WhitelistClientV4`](WhitelistClientV4.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`WhitelistClientV4`](WhitelistClientV4.md)

#### Inherited from

AugmentedWhitelist.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`WhitelistClientV4`](WhitelistClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`WhitelistClientV4`](WhitelistClientV4.md)

#### Inherited from

AugmentedWhitelist.removeAllListeners

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

AugmentedWhitelist.setAuthority

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

AugmentedWhitelist.setAuthority(address)

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

AugmentedWhitelist.setOwner

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

AugmentedWhitelist.setOwner(address)

___

### signAgreement

▸ **signAgreement**(`_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

The user's signature on the agreement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_agreementHash` | `string` | The agreement hash being signed |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.signAgreement

___

### signAgreement(string)

▸ **signAgreement(string)**(`_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

The user's signature on the agreement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_agreementHash` | `string` | The agreement hash being signed |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.signAgreement(string)

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.uninstall

___

### uninstall()

▸ **uninstall()**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.uninstall()

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

AugmentedWhitelist.verify

___

### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

▸ **verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

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

AugmentedWhitelist.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

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

AugmentedWhitelist.version

___

### version()

▸ **version()**(`overrides?`): `Promise`<`BigNumber`\>

Returns the version of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedWhitelist.version()
