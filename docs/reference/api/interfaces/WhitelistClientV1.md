# Interface: WhitelistClientV1

## Hierarchy

- `AugmentedWhitelst`<`Whitelist`\>

  ↳ **`WhitelistClientV1`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedWhitelst.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedWhitelst.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedWhitelst.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedWhitelst.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedWhitelst.callStatic

___

### clientType

• **clientType**: [`WhitelistClient`](../enums/ClientType.md#whitelistclient)

#### Inherited from

AugmentedWhitelst.clientType

___

### clientVersion

• **clientVersion**: ``1``

#### Overrides

AugmentedWhitelst.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedWhitelst.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedWhitelst.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedWhitelst.estimateGas

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
| `UserApproved` | (`_user?`: ``null`` \| `string`, `_status?`: ``null``) => `UserApprovedEventFilter` |
| `UserApproved(address,bool)` | (`_user?`: ``null`` \| `string`, `_status?`: ``null``) => `UserApprovedEventFilter` |

#### Inherited from

AugmentedWhitelst.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Inherited from

AugmentedWhitelst.functions

___

### interface

• **interface**: `WhitelistInterface`

#### Inherited from

AugmentedWhitelst.interface

___

### off

• **off**: `OnEvent`<[`WhitelistClientV1`](WhitelistClientV1.md)\>

#### Inherited from

AugmentedWhitelst.off

___

### on

• **on**: `OnEvent`<[`WhitelistClientV1`](WhitelistClientV1.md)\>

#### Inherited from

AugmentedWhitelst.on

___

### once

• **once**: `OnEvent`<[`WhitelistClientV1`](WhitelistClientV1.md)\>

#### Inherited from

AugmentedWhitelst.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveUsers` | (`_users`: `string`[], `_status`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getAgreementHash` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproval` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSignature` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUseApprovals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_useApprovals`: `boolean`, `_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isApproved` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `signAgreement` | (`_agreementHash`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedWhitelst.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedWhitelst.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`WhitelistClientV1`](WhitelistClientV1.md)\>

#### Inherited from

AugmentedWhitelst.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedWhitelst.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedWhitelst.signer

___

### whitelistEvents

• **whitelistEvents**: `WhitelistEvents`

The whitelistEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedWhitelst.whitelistEvents

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

AugmentedWhitelst.\_checkRunningEvents

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

AugmentedWhitelst.\_deployed

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

AugmentedWhitelst.\_wrapEvent

___

### approveUsers

▸ **approveUsers**(`_users`, `_status`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets user statuses in the whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_users` | `string`[] | An array of user addresses |
| `_status` | `boolean` | The whitelist status to set |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelst.approveUsers

___

### attach

▸ **attach**(`addressOrName`): [`WhitelistClientV1`](WhitelistClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`WhitelistClientV1`](WhitelistClientV1.md)

#### Inherited from

AugmentedWhitelst.attach

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

AugmentedWhitelst.authority

___

### connect

▸ **connect**(`signerOrProvider`): [`WhitelistClientV1`](WhitelistClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`WhitelistClientV1`](WhitelistClientV1.md)

#### Inherited from

AugmentedWhitelst.connect

___

### deployed

▸ **deployed**(): `Promise`<[`WhitelistClientV1`](WhitelistClientV1.md)\>

#### Returns

`Promise`<[`WhitelistClientV1`](WhitelistClientV1.md)\>

#### Inherited from

AugmentedWhitelst.deployed

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

AugmentedWhitelst.deprecate

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

AugmentedWhitelst.emit

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

AugmentedWhitelst.fallback

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

AugmentedWhitelst.finishUpgrade

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

AugmentedWhitelst.getAgreementHash

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

AugmentedWhitelst.getApproval

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

AugmentedWhitelst.getCapabilityRoles

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

AugmentedWhitelst.getColony

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

AugmentedWhitelst.getDeprecated

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

AugmentedWhitelst.getSignature

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

AugmentedWhitelst.getUseApprovals

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

AugmentedWhitelst.identifier

___

### initialise

▸ **initialise**(`_useApprovals`, `_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

Initialise the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_useApprovals` | `boolean` | Whether or not to require administrative approval |
| `_agreementHash` | `string` | An agreement hash (such as an IPFS URI) |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelst.initialise

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

AugmentedWhitelst.install

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

AugmentedWhitelst.isApproved

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

AugmentedWhitelst.listenerCount

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

AugmentedWhitelst.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedWhitelst.listeners

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

AugmentedWhitelst.owner

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

AugmentedWhitelst.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`WhitelistClientV1`](WhitelistClientV1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`WhitelistClientV1`](WhitelistClientV1.md)

#### Inherited from

AugmentedWhitelst.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`WhitelistClientV1`](WhitelistClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`WhitelistClientV1`](WhitelistClientV1.md)

#### Inherited from

AugmentedWhitelst.removeAllListeners

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

AugmentedWhitelst.setAuthority

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

AugmentedWhitelst.setOwner

___

### signAgreement

▸ **signAgreement**(`_agreementHash`, `overrides?`): `Promise`<`ContractTransaction`\>

The user's signature on the agreement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_agreementHash` | `string` | The agreement hash being signed |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedWhitelst.signAgreement

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

AugmentedWhitelst.uninstall

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

AugmentedWhitelst.version
