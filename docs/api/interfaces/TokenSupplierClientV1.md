# Interface: TokenSupplierClientV1

## Hierarchy

- `AugmentedTokenSupplier`<`TokenSupplier`\>

  ↳ **`TokenSupplierClientV1`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedTokenSupplier.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedTokenSupplier.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedTokenSupplier.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedTokenSupplier.address

___

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
| `getLastPinged` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLastRateUpdate` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenIssuanceRate` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenSupplyCeiling` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_tokenSupplyCeiling`: `BigNumberish`, `_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `issueTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenIssuanceRate` | (`_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenSupplyCeiling` | (`_tokenSupplyCeiling`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedTokenSupplier.callStatic

___

### clientType

• **clientType**: [`TokenSupplierClient`](../enums/ClientType.md#tokensupplierclient)

#### Inherited from

AugmentedTokenSupplier.clientType

___

### clientVersion

• **clientVersion**: ``1``

#### Overrides

AugmentedTokenSupplier.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedTokenSupplier.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedTokenSupplier.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLastPinged` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLastRateUpdate` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenIssuanceRate` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenSupplyCeiling` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialise` | (`_tokenSupplyCeiling`: `BigNumberish`, `_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `issueTokens` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setTokenIssuanceRate` | (`_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setTokenSupplyCeiling` | (`_tokenSupplyCeiling`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedTokenSupplier.estimateGas

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
| `TokenIssuanceRateSet` | (`tokenIssuanceRate?`: ``null``) => `TokenIssuanceRateSetEventFilter` |
| `TokenIssuanceRateSet(uint256)` | (`tokenIssuanceRate?`: ``null``) => `TokenIssuanceRateSetEventFilter` |
| `TokenSupplyCeilingSet` | (`tokenSupplyCeiling?`: ``null``) => `TokenSupplyCeilingSetEventFilter` |
| `TokenSupplyCeilingSet(uint256)` | (`tokenSupplyCeiling?`: ``null``) => `TokenSupplyCeilingSetEventFilter` |
| `TokensIssued` | (`numTokens?`: ``null``) => `TokensIssuedEventFilter` |
| `TokensIssued(uint256)` | (`numTokens?`: ``null``) => `TokensIssuedEventFilter` |

#### Inherited from

AugmentedTokenSupplier.filters

___

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
| `getLastPinged` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getLastRateUpdate` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTokenIssuanceRate` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTokenSupplyCeiling` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialise` | (`_tokenSupplyCeiling`: `BigNumberish`, `_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `issueTokens` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTokenIssuanceRate` | (`_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTokenSupplyCeiling` | (`_tokenSupplyCeiling`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Inherited from

AugmentedTokenSupplier.functions

___

### interface

• **interface**: `TokenSupplierInterface`

#### Inherited from

AugmentedTokenSupplier.interface

___

### off

• **off**: `OnEvent`<[`TokenSupplierClientV1`](TokenSupplierClientV1.md)\>

#### Inherited from

AugmentedTokenSupplier.off

___

### on

• **on**: `OnEvent`<[`TokenSupplierClientV1`](TokenSupplierClientV1.md)\>

#### Inherited from

AugmentedTokenSupplier.on

___

### once

• **once**: `OnEvent`<[`TokenSupplierClientV1`](TokenSupplierClientV1.md)\>

#### Inherited from

AugmentedTokenSupplier.once

___

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
| `getLastPinged` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLastRateUpdate` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenIssuanceRate` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenSupplyCeiling` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_tokenSupplyCeiling`: `BigNumberish`, `_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `issueTokens` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenIssuanceRate` | (`_tokenIssuanceRate`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenSupplyCeiling` | (`_tokenSupplyCeiling`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedTokenSupplier.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedTokenSupplier.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`TokenSupplierClientV1`](TokenSupplierClientV1.md)\>

#### Inherited from

AugmentedTokenSupplier.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedTokenSupplier.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedTokenSupplier.signer

___

### tokenSupplierEvents

• **tokenSupplierEvents**: `TokenSupplierEvents`

The tokenSupplierEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedTokenSupplier.tokenSupplierEvents

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

AugmentedTokenSupplier.\_checkRunningEvents

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

AugmentedTokenSupplier.\_deployed

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

AugmentedTokenSupplier.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Inherited from

AugmentedTokenSupplier.attach

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

AugmentedTokenSupplier.authority

___

### connect

▸ **connect**(`signerOrProvider`): [`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Inherited from

AugmentedTokenSupplier.connect

___

### deployed

▸ **deployed**(): `Promise`<[`TokenSupplierClientV1`](TokenSupplierClientV1.md)\>

#### Returns

`Promise`<[`TokenSupplierClientV1`](TokenSupplierClientV1.md)\>

#### Inherited from

AugmentedTokenSupplier.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension (currently a no-op)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedTokenSupplier.deprecate

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

AugmentedTokenSupplier.emit

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

AugmentedTokenSupplier.fallback

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension (currently a no-op)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedTokenSupplier.finishUpgrade

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

AugmentedTokenSupplier.getColony

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

AugmentedTokenSupplier.getDeprecated

___

### getLastPinged

▸ **getLastPinged**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedTokenSupplier.getLastPinged

___

### getLastRateUpdate

▸ **getLastRateUpdate**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedTokenSupplier.getLastRateUpdate

___

### getTokenIssuanceRate

▸ **getTokenIssuanceRate**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedTokenSupplier.getTokenIssuanceRate

___

### getTokenSupplyCeiling

▸ **getTokenSupplyCeiling**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedTokenSupplier.getTokenSupplyCeiling

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

AugmentedTokenSupplier.identifier

___

### initialise

▸ **initialise**(`_tokenSupplyCeiling`, `_tokenIssuanceRate`, `overrides?`): `Promise`<`ContractTransaction`\>

Initialise the extension, must be called before any tokens can be issued

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenSupplyCeiling` | `BigNumberish` | Total amount of tokens to issue |
| `_tokenIssuanceRate` | `BigNumberish` | Number of tokens to issue per day |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedTokenSupplier.initialise

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

AugmentedTokenSupplier.install

___

### issueTokens

▸ **issueTokens**(`overrides?`): `Promise`<`ContractTransaction`\>

Issue the appropriate amount of tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedTokenSupplier.issueTokens

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

AugmentedTokenSupplier.listenerCount

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

AugmentedTokenSupplier.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedTokenSupplier.listeners

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

AugmentedTokenSupplier.owner

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

AugmentedTokenSupplier.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Inherited from

AugmentedTokenSupplier.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`TokenSupplierClientV1`](TokenSupplierClientV1.md)

#### Inherited from

AugmentedTokenSupplier.removeAllListeners

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

AugmentedTokenSupplier.setAuthority

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

AugmentedTokenSupplier.setOwner

___

### setTokenIssuanceRate

▸ **setTokenIssuanceRate**(`_tokenIssuanceRate`, `overrides?`): `Promise`<`ContractTransaction`\>

Update the tokenIssuanceRate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenIssuanceRate` | `BigNumberish` | Number of tokens to issue per day |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedTokenSupplier.setTokenIssuanceRate

___

### setTokenSupplyCeiling

▸ **setTokenSupplyCeiling**(`_tokenSupplyCeiling`, `overrides?`): `Promise`<`ContractTransaction`\>

Update the tokenSupplyCeiling, cannot set below current tokenSupply

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_tokenSupplyCeiling` | `BigNumberish` | Total amount of tokens to issue |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedTokenSupplier.setTokenSupplyCeiling

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

AugmentedTokenSupplier.uninstall

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

AugmentedTokenSupplier.version
