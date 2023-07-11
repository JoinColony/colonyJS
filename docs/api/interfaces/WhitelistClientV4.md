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
| `approveUsers` | (`_users`: `PromiseOrValue`<`string`\>[], `_status`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSignature` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_useApprovals`: `PromiseOrValue`<`boolean`\>, `_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isApproved` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `signAgreement` | (`_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

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

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

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
| `approveUsers` | (`_users`: `PromiseOrValue`<`string`\>[], `_status`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSignature` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialise` | (`_useApprovals`: `PromiseOrValue`<`boolean`\>, `_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isApproved` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `signAgreement` | (`_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedWhitelist.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AgreementSigned` | (`_user?`: ``null`` \| `PromiseOrValue`<`string`\>) => `AgreementSignedEventFilter` |
| `AgreementSigned(address)` | (`_user?`: ``null`` \| `PromiseOrValue`<`string`\>) => `AgreementSignedEventFilter` |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `UserApproved` | (`_user?`: ``null`` \| `PromiseOrValue`<`string`\>, `_status?`: ``null``) => `UserApprovedEventFilter` |
| `UserApproved(address,bool)` | (`_user?`: ``null`` \| `PromiseOrValue`<`string`\>, `_status?`: ``null``) => `UserApprovedEventFilter` |

#### Inherited from

AugmentedWhitelist.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `PromiseOrValue`<`string`\>[], `_status`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_hash`: `string`  }\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getSignature` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_status`: `boolean`  }\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_useApprovals`: `boolean`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `initialise` | (`_useApprovals`: `PromiseOrValue`<`boolean`\>, `_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isApproved` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_approved`: `boolean`  }\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `signAgreement` | (`_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

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
| `approveUsers` | (`_users`: `PromiseOrValue`<`string`\>[], `_status`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproval` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`userAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSignature` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_useApprovals`: `PromiseOrValue`<`boolean`\>, `_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isApproved` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `signAgreement` | (`_agreementHash`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

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
| `_users` | `PromiseOrValue`<`string`\>[] | An array of user addresses |
| `_status` | `PromiseOrValue`<`boolean`\> | The whitelist status to set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.approveUsers

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

### connect

▸ **connect**(`signerOrProvider`): [`WhitelistClientV4`](WhitelistClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

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
| `_deprecated` | `PromiseOrValue`<`boolean`\> | Indicates whether the extension should be deprecated or undeprecated |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.deprecate

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

AugmentedWhitelist.emit

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | Address of user trying to do meta transaction |
| `_payload` | `PromiseOrValue`<`BytesLike`\> | Function call to make via meta transaction |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> | R part of the signature |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> | S part of the signature |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> | V part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.executeMetaTransaction

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
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.finishUpgrade

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

### getApproval

▸ **getApproval**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's approval status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getApproval

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedWhitelist.getCapabilityRoles

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

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next nonce for a meta-transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAddress` | `PromiseOrValue`<`string`\> | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedWhitelist.getMetatransactionNonce

___

### getSignature

▸ **getSignature**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's signature status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.getSignature

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

### initialise

▸ **initialise**(`_useApprovals`, `_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

Initialise the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_useApprovals` | `PromiseOrValue`<`boolean`\> | Whether or not to require administrative approval |
| `_agreementHash` | `PromiseOrValue`<`string`\> | An agreement hash (such as an IPFS URI) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.initialise

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Configures the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `PromiseOrValue`<`string`\> | The colony in which the extension holds permissions |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.install

___

### isApproved

▸ **isApproved**(`_user`, `overrides?`): `Promise`<`boolean`\>

Get the user's overall whitelist status

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | The address of the user |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.isApproved

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
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

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
| `data` | `PromiseOrValue`<`BytesLike`\>[] |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.multicall

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

AugmentedWhitelist.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`WhitelistClientV4`](WhitelistClientV4.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

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
| `authority_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.setAuthority

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.setOwner

___

### signAgreement

▸ **signAgreement**(`_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

The user's signature on the agreement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_agreementHash` | `PromiseOrValue`<`string`\> | The agreement hash being signed |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.signAgreement

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelist.uninstall

___

### verify

▸ **verify**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> |
| `_nonce` | `PromiseOrValue`<`BigNumberish`\> |
| `_chainId` | `PromiseOrValue`<`BigNumberish`\> |
| `_payload` | `PromiseOrValue`<`BytesLike`\> |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedWhitelist.verify

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
