[ColonyJS](../README.md) / CoinMachineClientV1

# Interface: CoinMachineClientV1

An instantiated [ethers](https://docs.ethers.io/v5/) contract for the [CoinMachine contract](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/extensions/CoinMachine.sol) in version 1, with certain augmentations added. Pay attention to the existence of `...WithProofs` or `...Checked` functions as these provide convenient helpers to figure out permission proofs and contract checks for you.

## Hierarchy

- `AugmentedCoinMachine`<`CoinMachine`\>

  ↳ **`CoinMachineClientV1`**

## Table of contents

### Properties

- [\_deployedPromise](CoinMachineClientV1.md#_deployedpromise)
- [\_runningEvents](CoinMachineClientV1.md#_runningevents)
- [\_wrappedEmits](CoinMachineClientV1.md#_wrappedemits)
- [address](CoinMachineClientV1.md#address)
- [callStatic](CoinMachineClientV1.md#callstatic)
- [clientType](CoinMachineClientV1.md#clienttype)
- [clientVersion](CoinMachineClientV1.md#clientversion)
- [coinMachineEvents](CoinMachineClientV1.md#coinmachineevents)
- [colonyClient](CoinMachineClientV1.md#colonyclient)
- [deployTransaction](CoinMachineClientV1.md#deploytransaction)
- [estimateGas](CoinMachineClientV1.md#estimategas)
- [filters](CoinMachineClientV1.md#filters)
- [functions](CoinMachineClientV1.md#functions)
- [interface](CoinMachineClientV1.md#interface)
- [off](CoinMachineClientV1.md#off)
- [on](CoinMachineClientV1.md#on)
- [once](CoinMachineClientV1.md#once)
- [populateTransaction](CoinMachineClientV1.md#populatetransaction)
- [provider](CoinMachineClientV1.md#provider)
- [removeListener](CoinMachineClientV1.md#removelistener)
- [resolvedAddress](CoinMachineClientV1.md#resolvedaddress)
- [signer](CoinMachineClientV1.md#signer)

### Methods

- [\_checkRunningEvents](CoinMachineClientV1.md#_checkrunningevents)
- [\_deployed](CoinMachineClientV1.md#_deployed)
- [\_wrapEvent](CoinMachineClientV1.md#_wrapevent)
- [attach](CoinMachineClientV1.md#attach)
- [authority](CoinMachineClientV1.md#authority)
- [buyTokens](CoinMachineClientV1.md#buytokens)
- [connect](CoinMachineClientV1.md#connect)
- [deployed](CoinMachineClientV1.md#deployed)
- [deprecate](CoinMachineClientV1.md#deprecate)
- [emit](CoinMachineClientV1.md#emit)
- [fallback](CoinMachineClientV1.md#fallback)
- [finishUpgrade](CoinMachineClientV1.md#finishupgrade)
- [getColony](CoinMachineClientV1.md#getcolony)
- [getCurrentPrice](CoinMachineClientV1.md#getcurrentprice)
- [getDeprecated](CoinMachineClientV1.md#getdeprecated)
- [getMaxPerPeriod](CoinMachineClientV1.md#getmaxperperiod)
- [getNumAvailable](CoinMachineClientV1.md#getnumavailable)
- [getPeriodLength](CoinMachineClientV1.md#getperiodlength)
- [getTargetPerPeriod](CoinMachineClientV1.md#gettargetperperiod)
- [getTokensToSell](CoinMachineClientV1.md#gettokenstosell)
- [getWindowSize](CoinMachineClientV1.md#getwindowsize)
- [identifier](CoinMachineClientV1.md#identifier)
- [initialise](CoinMachineClientV1.md#initialise)
- [install](CoinMachineClientV1.md#install)
- [listenerCount](CoinMachineClientV1.md#listenercount)
- [listeners](CoinMachineClientV1.md#listeners)
- [owner](CoinMachineClientV1.md#owner)
- [queryFilter](CoinMachineClientV1.md#queryfilter)
- [removeAllListeners](CoinMachineClientV1.md#removealllisteners)
- [setAuthority](CoinMachineClientV1.md#setauthority)
- [setOwner](CoinMachineClientV1.md#setowner)
- [uninstall](CoinMachineClientV1.md#uninstall)
- [updatePeriod](CoinMachineClientV1.md#updateperiod)
- [version](CoinMachineClientV1.md#version)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedCoinMachine.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedCoinMachine.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedCoinMachine.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedCoinMachine.address

___

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

#### Inherited from

AugmentedCoinMachine.callStatic

___

### clientType

• **clientType**: [`CoinMachineClient`](../enums/ClientType.md#coinmachineclient)

#### Inherited from

AugmentedCoinMachine.clientType

___

### clientVersion

• **clientVersion**: ``1``

#### Overrides

AugmentedCoinMachine.clientVersion

___

### coinMachineEvents

• **coinMachineEvents**: `CoinMachineEvents`

The coinMachineEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedCoinMachine.coinMachineEvents

___

### colonyClient

• **colonyClient**: `AugmentedIColony`<`AnyIColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedCoinMachine.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedCoinMachine.deployTransaction

___

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

#### Inherited from

AugmentedCoinMachine.estimateGas

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
| `PeriodUpdated` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => `PeriodUpdatedEventFilter` |
| `PeriodUpdated(uint256,uint256)` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => `PeriodUpdatedEventFilter` |
| `TokensBought` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
| `TokensBought(address,uint256,uint256)` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |

#### Inherited from

AugmentedCoinMachine.filters

___

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

#### Inherited from

AugmentedCoinMachine.functions

___

### interface

• **interface**: `CoinMachineInterface`

#### Inherited from

AugmentedCoinMachine.interface

___

### off

• **off**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

#### Inherited from

AugmentedCoinMachine.off

___

### on

• **on**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

#### Inherited from

AugmentedCoinMachine.on

___

### once

• **once**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

#### Inherited from

AugmentedCoinMachine.once

___

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

#### Inherited from

AugmentedCoinMachine.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedCoinMachine.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

#### Inherited from

AugmentedCoinMachine.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedCoinMachine.signer

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

AugmentedCoinMachine.\_checkRunningEvents

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

AugmentedCoinMachine.\_deployed

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

AugmentedCoinMachine.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Inherited from

AugmentedCoinMachine.attach

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

AugmentedCoinMachine.authority

___

### buyTokens

▸ **buyTokens**(`_numTokens`, `overrides?`): `Promise`<`ContractTransaction`\>

Purchase tokens from Coin Machine.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_numTokens` | `BigNumberish` | The number of tokens to purchase |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.buyTokens

___

### connect

▸ **connect**(`signerOrProvider`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Inherited from

AugmentedCoinMachine.connect

___

### deployed

▸ **deployed**(): `Promise`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

#### Returns

`Promise`<[`CoinMachineClientV1`](CoinMachineClientV1.md)\>

#### Inherited from

AugmentedCoinMachine.deployed

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

AugmentedCoinMachine.deprecate

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

AugmentedCoinMachine.emit

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

AugmentedCoinMachine.fallback

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

AugmentedCoinMachine.finishUpgrade

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

AugmentedCoinMachine.getColony

___

### getCurrentPrice

▸ **getCurrentPrice**(`overrides?`): `Promise`<`BigNumber`\>

Get the current price per token

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getCurrentPrice

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

AugmentedCoinMachine.getDeprecated

___

### getMaxPerPeriod

▸ **getMaxPerPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the maximum number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getMaxPerPeriod

___

### getNumAvailable

▸ **getNumAvailable**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of remaining tokens for sale this period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getNumAvailable

___

### getPeriodLength

▸ **getPeriodLength**(`overrides?`): `Promise`<`BigNumber`\>

Get the length of the sale period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getPeriodLength

___

### getTargetPerPeriod

▸ **getTargetPerPeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the target number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getTargetPerPeriod

___

### getTokensToSell

▸ **getTokensToSell**(`overrides?`): `Promise`<`BigNumber`\>

Get the total number of tokens remaining for sale

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getTokensToSell

___

### getWindowSize

▸ **getWindowSize**(`overrides?`): `Promise`<`BigNumber`\>

Get the size of the averaging window

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getWindowSize

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

AugmentedCoinMachine.identifier

___

### initialise

▸ **initialise**(`_purchaseToken`, `_periodLength`, `_windowSize`, `_targetPerPeriod`, `_maxPerPeriod`, `_tokensToSell`, `_startingPrice`, `overrides?`): `Promise`<`ContractTransaction`\>

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

#### Inherited from

AugmentedCoinMachine.initialise

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

AugmentedCoinMachine.install

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

AugmentedCoinMachine.listenerCount

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

AugmentedCoinMachine.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedCoinMachine.listeners

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

AugmentedCoinMachine.owner

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

AugmentedCoinMachine.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

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

#### Inherited from

AugmentedCoinMachine.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CoinMachineClientV1`](CoinMachineClientV1.md)

#### Inherited from

AugmentedCoinMachine.removeAllListeners

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

AugmentedCoinMachine.setAuthority

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

AugmentedCoinMachine.setOwner

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

AugmentedCoinMachine.uninstall

___

### updatePeriod

▸ **updatePeriod**(`overrides?`): `Promise`<`ContractTransaction`\>

Bring the token accounting current

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.updatePeriod

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

AugmentedCoinMachine.version
