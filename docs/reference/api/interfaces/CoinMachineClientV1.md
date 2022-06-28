# Interface: CoinMachineClientV1

An instantiated [ethers](https://docs.ethers.io/v5/) contract for the [CoinMachine contract](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/extensions/CoinMachine.sol) in version 1, with certain augmentations added. Pay attention to the existence of `...WithProofs` or `...Checked` functions as these provide convenient helpers to figure out permission proofs and contract checks for you.

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
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNumAvailable` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensToSell` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_tokensToSell`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

### clientType

• **clientType**: [`CoinMachineClient`](../enums/ClientType.md#coinmachineclient)

### clientVersion

• **clientVersion**: ``1``

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
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNumAvailable` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokensToSell` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialise` | (`_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_tokensToSell`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
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
| `TokensBought` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
| `TokensBought(address,uint256,uint256)` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getNumAvailable` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getTokensToSell` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `initialise` | (`_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_tokensToSell`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

### interface

• **interface**: `CoinMachineInterface`

### off

• **off**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

### on

• **on**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

### once

• **once**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNumAvailable` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokensToSell` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_tokensToSell`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

### provider

• `Readonly` **provider**: `Provider`

### removeListener

• **removeListener**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

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

### ▸ **attach**(`addressOrName`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CoinMachineClientV1`](CoinMachineClientV1.md)

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

### ▸ **connect**(`signerOrProvider`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Provider` \| `Signer` |

#### Returns

[`CoinMachineClientV1`](CoinMachineClientV1.md)

### ▸ **deployed**(): `Promise`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

#### Returns

`Promise`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

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

### ▸ **getMaxPerPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the maximum number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getNumAvailable**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of remaining tokens for sale this period

#### Parameters

| Name | Type |
| :------ | :------ |
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

### ▸ **getTargetPerPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the target number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getTokensToSell**(`overrides?`): `Promise`<`BigNumber`\>

Get the total number of tokens remaining for sale

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

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

### ▸ **initialise**(`_purchaseToken`, `_periodLength`, `_windowSize`, `_targetPerPeriod`, `_maxPerPeriod`, `_tokensToSell`, `_startingPrice`, `overrides?`): `Promise`<`ContractTransaction`\>

Must be called before any sales can be made

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_purchaseToken` | `string` | The token to receive payments in. Use 0x0 for ether |
| `_periodLength` | `BigNumberish` | How long in seconds each period of the sale should last |
| `_windowSize` | `BigNumberish` | Characteristic number of periods that should be used for the moving average. In the long-term, 86% of the weighting will be in this window size. The higher the number, the slower the price will be to adjust |
| `_targetPerPeriod` | `BigNumberish` | The number of tokens to aim to sell per period |
| `_maxPerPeriod` | `BigNumberish` | The maximum number of tokens that can be sold per period |
| `_tokensToSell` | `BigNumberish` | - |
| `_startingPrice` | `BigNumberish` | The sale price to start at, expressed in units of _purchaseToken per token being sold, as a WAD |
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

### ▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`CoinMachineClientV1`](CoinMachineClientV1.md)

### ▸ **removeAllListeners**(`eventName?`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CoinMachineClientV1`](CoinMachineClientV1.md)

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
