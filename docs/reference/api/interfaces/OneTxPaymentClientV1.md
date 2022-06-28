# Interface: OneTxPaymentClientV1

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

### \_runningEvents

• **\_runningEvents**: `Object`

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

### address

• `Readonly` **address**: `string`

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

### clientType

• **clientType**: [`OneTxPaymentClient`](../enums/ClientType.md#onetxpaymentclient)

### clientVersion

• **clientVersion**: ``1``

### colonyClient

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

An instance of the corresponding ColonyClient

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

### estimateGas

• **estimateGas**: `OneTxPaymentEstimate`

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
| `OneTxPaymentMade` | (`agent?`: ``null``, `fundamentalId?`: ``null``, `nPayouts?`: ``null``) => `OneTxPaymentMadeEventFilter` |
| `OneTxPaymentMade(address,uint256,uint256)` | (`agent?`: ``null``, `fundamentalId?`: ``null``, `nPayouts?`: ``null``) => `OneTxPaymentMadeEventFilter` |

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

### interface

• **interface**: `OneTxPaymentInterface`

### off

• **off**: `OnEvent`<[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)\>

### on

• **on**: `OnEvent`<[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)\>

### once

• **once**: `OnEvent`<[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)\>

### oneTxPaymentEvents

• **oneTxPaymentEvents**: `OneTxPaymentEvents`

The oneTxPaymentEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makePayment` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `makePaymentFundedFromDomain` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_callerPermissionDomainId`: `BigNumberish`, `_callerChildSkillIndex`: `BigNumberish`, `_workers`: `string`[], `_tokens`: `string`[], `_amounts`: `BigNumberish`[], `_domainId`: `BigNumberish`, `_skillId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

### provider

• `Readonly` **provider**: `Provider`

### removeListener

• **removeListener**: `OnEvent`<[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)\>

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

### signer

• `Readonly` **signer**: `Signer`

## Methods

### ▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

### ▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

### ▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

### ▸ **attach**(`addressOrName`): [`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

### ▸ **authority**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **connect**(`signerOrProvider`): [`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

### ▸ **deployed**(): `Promise`<[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)\>

#### Returns

`Promise`<[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)\>

### ▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

### ▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

### ▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **getColony**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getDeprecated**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

### ▸ **identifier**(`overrides?`): `Promise`<`string`\>

Returns the identifier of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Configures the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `string` | The colony in which the extension holds permissions |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

### ▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

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

### ▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

### ▸ **makePayment**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

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

### ▸ **makePaymentFundedFromDomain**(`_permissionDomainId`, `_childSkillIndex`, `_callerPermissionDomainId`, `_callerChildSkillIndex`, `_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

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

### ▸ **makePaymentFundedFromDomainWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makePaymentFundedFromDomain](OneTxPaymentClientV1.md#makepaymentfundedfromdomain), but let colonyJS figure out the permission proofs for you.
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

### ▸ **makePaymentWithProofs**(`_workers`, `_tokens`, `_amounts`, `_domainId`, `_skillId`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [makePayment](OneTxPaymentClientV1.md#makepayment), but let colonyJS figure out the permission proofs for you.
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

### ▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

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

### ▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

### ▸ **removeAllListeners**(`eventName?`): [`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`OneTxPaymentClientV1`](OneTxPaymentClientV1.md)

### ▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

Returns the version of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>
