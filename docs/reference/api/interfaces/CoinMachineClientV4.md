# Interface: CoinMachineClientV4

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
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

### clientType

• **clientType**: [`CoinMachineClient`](../enums/ClientType.md#coinmachineclient)

### clientVersion

• **clientVersion**: ``4``

### coinMachineEvents

• **coinMachineEvents**: `CoinMachineEvents`

The coinMachineEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

### colonyClient

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

An instance of the corresponding ColonyClient

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

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
| `PeriodUpdated` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => `PeriodUpdatedEventFilter` |
| `PeriodUpdated(uint256,uint256)` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => `PeriodUpdatedEventFilter` |
| `PriceEvolutionSet` | (`evolvePrice?`: ``null``) => `PriceEvolutionSetEventFilter` |
| `PriceEvolutionSet(bool)` | (`evolvePrice?`: ``null``) => `PriceEvolutionSetEventFilter` |
| `TokensBought` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
| `TokensBought(address,uint256,uint256)` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
| `WhitelistSet` | (`whitelist?`: ``null``) => `WhitelistSetEventFilter` |
| `WhitelistSet(address)` | (`whitelist?`: ``null``) => `WhitelistSetEventFilter` |

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

### interface

• **interface**: `CoinMachineInterface`

### off

• **off**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

### on

• **on**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

### once

• **once**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

### provider

• `Readonly` **provider**: `Provider`

### removeListener

• **removeListener**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

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

### ▸ **attach**(`addressOrName`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CoinMachineClientV4`](CoinMachineClientV4.md)

### ▸ **authority**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **buyTokens**(`_numTokens`, `overrides?`): `Promise`<`ContractTransaction`\>

Purchase tokens from Coin Machine.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_numTokens` | `BigNumberish` | The number of tokens to purchase |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

### ▸ **connect**(`signerOrProvider`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`CoinMachineClientV4`](CoinMachineClientV4.md)

### ▸ **deployed**(): `Promise`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

#### Returns

`Promise`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

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

### ▸ **getActiveIntake**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of tokens received in the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getActivePeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getActiveSold**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of tokens sold in the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getColony**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getCurrentPrice**(`overrides?`): `Promise`<`BigNumber`\>

Get the current price per token

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getDeprecated**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

### ▸ **getEMAIntake**(`overrides?`): `Promise`<`BigNumber`\>

Get the EMA of the number of tokens received each period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getEvolvePrice**(`overrides?`): `Promise`<`boolean`\>

Get the evolvePrice boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

### ▸ **getMaxPerPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the maximum number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getMaxPurchase**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in a period

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getPeriodLength**(`overrides?`): `Promise`<`BigNumber`\>

Get the length of the sale period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getPurchaseToken**(`overrides?`): `Promise`<`string`\>

Get the address of the token being used to make purchases

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getSellableTokens**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of remaining tokens for sale this period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getTargetPerPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the target number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getToken**(`overrides?`): `Promise`<`string`\>

Get the address of the token being sold

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getTokenBalance**(`overrides?`): `Promise`<`BigNumber`\>

Get the remaining balance of tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getUserLimit**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in total

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getWhitelist**(`overrides?`): `Promise`<`string`\>

Get the address of the whitelist (if exists)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **getWindowSize**(`overrides?`): `Promise`<`BigNumber`\>

Get the size of the averaging window

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **identifier**(`overrides?`): `Promise`<`string`\>

Returns the identifier of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

### ▸ **initialise**(`_token`, `_purchaseToken`, `_periodLength`, `_windowSize`, `_targetPerPeriod`, `_maxPerPeriod`, `_userLimitFraction`, `_startingPrice`, `_whitelist`, `overrides?`): `Promise`<`ContractTransaction`\>

Must be called before any sales can be made

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_token` | `string` | The token we are selling. Cannot be ether |
| `_purchaseToken` | `string` | The token to receive payments in. Use 0x0 for ether |
| `_periodLength` | `BigNumberish` | How long in seconds each period of the sale should last |
| `_windowSize` | `BigNumberish` | Characteristic number of periods that should be used for the moving average. In the long-term, 86% of the weighting will be in this window size. The higher the number, the slower the price will be to adjust |
| `_targetPerPeriod` | `BigNumberish` | The number of tokens to aim to sell per period |
| `_maxPerPeriod` | `BigNumberish` | The maximum number of tokens that can be sold per period |
| `_userLimitFraction` | `BigNumberish` | - |
| `_startingPrice` | `BigNumberish` | The sale price to start at, expressed in units of _purchaseToken per token being sold, as a WAD |
| `_whitelist` | `string` | Optionally an address of a whitelist contract to use can be provided. Pass 0x0 if no whitelist being used |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

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

### ▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`CoinMachineClientV4`](CoinMachineClientV4.md)

### ▸ **removeAllListeners**(`eventName?`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CoinMachineClientV4`](CoinMachineClientV4.md)

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

### ▸ **setWhitelist**(`_whitelist`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the address for an (optional) whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_whitelist` | `string` | The address of the whitelist |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

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

### ▸ **updatePeriod**(`overrides?`): `Promise`<`ContractTransaction`\>

Bring the token accounting current

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
