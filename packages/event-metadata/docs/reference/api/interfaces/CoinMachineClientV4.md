[ColonyJS](../README.md) / CoinMachineClientV4

# Interface: CoinMachineClientV4

## Hierarchy

- `AugmentedCoinMachine`<`CoinMachine`\>

  ↳ **`CoinMachineClientV4`**

## Table of contents

### Properties

- [\_deployedPromise](CoinMachineClientV4.md#_deployedpromise)
- [\_runningEvents](CoinMachineClientV4.md#_runningevents)
- [\_wrappedEmits](CoinMachineClientV4.md#_wrappedemits)
- [address](CoinMachineClientV4.md#address)
- [callStatic](CoinMachineClientV4.md#callstatic)
- [clientType](CoinMachineClientV4.md#clienttype)
- [clientVersion](CoinMachineClientV4.md#clientversion)
- [coinMachineEvents](CoinMachineClientV4.md#coinmachineevents)
- [colonyClient](CoinMachineClientV4.md#colonyclient)
- [deployTransaction](CoinMachineClientV4.md#deploytransaction)
- [estimateGas](CoinMachineClientV4.md#estimategas)
- [filters](CoinMachineClientV4.md#filters)
- [functions](CoinMachineClientV4.md#functions)
- [interface](CoinMachineClientV4.md#interface)
- [off](CoinMachineClientV4.md#off)
- [on](CoinMachineClientV4.md#on)
- [once](CoinMachineClientV4.md#once)
- [populateTransaction](CoinMachineClientV4.md#populatetransaction)
- [provider](CoinMachineClientV4.md#provider)
- [removeListener](CoinMachineClientV4.md#removelistener)
- [resolvedAddress](CoinMachineClientV4.md#resolvedaddress)
- [signer](CoinMachineClientV4.md#signer)

### Methods

- [\_checkRunningEvents](CoinMachineClientV4.md#_checkrunningevents)
- [\_deployed](CoinMachineClientV4.md#_deployed)
- [\_wrapEvent](CoinMachineClientV4.md#_wrapevent)
- [attach](CoinMachineClientV4.md#attach)
- [authority](CoinMachineClientV4.md#authority)
- [buyTokens](CoinMachineClientV4.md#buytokens)
- [connect](CoinMachineClientV4.md#connect)
- [deployed](CoinMachineClientV4.md#deployed)
- [deprecate](CoinMachineClientV4.md#deprecate)
- [emit](CoinMachineClientV4.md#emit)
- [fallback](CoinMachineClientV4.md#fallback)
- [finishUpgrade](CoinMachineClientV4.md#finishupgrade)
- [getActiveIntake](CoinMachineClientV4.md#getactiveintake)
- [getActivePeriod](CoinMachineClientV4.md#getactiveperiod)
- [getActiveSold](CoinMachineClientV4.md#getactivesold)
- [getCapabilityRoles](CoinMachineClientV4.md#getcapabilityroles)
- [getColony](CoinMachineClientV4.md#getcolony)
- [getCurrentPrice](CoinMachineClientV4.md#getcurrentprice)
- [getDeprecated](CoinMachineClientV4.md#getdeprecated)
- [getEMAIntake](CoinMachineClientV4.md#getemaintake)
- [getEvolvePrice](CoinMachineClientV4.md#getevolveprice)
- [getMaxPerPeriod](CoinMachineClientV4.md#getmaxperperiod)
- [getMaxPurchase](CoinMachineClientV4.md#getmaxpurchase)
- [getPeriodLength](CoinMachineClientV4.md#getperiodlength)
- [getPurchaseToken](CoinMachineClientV4.md#getpurchasetoken)
- [getSellableTokens](CoinMachineClientV4.md#getsellabletokens)
- [getTargetPerPeriod](CoinMachineClientV4.md#gettargetperperiod)
- [getToken](CoinMachineClientV4.md#gettoken)
- [getTokenBalance](CoinMachineClientV4.md#gettokenbalance)
- [getUserLimit](CoinMachineClientV4.md#getuserlimit)
- [getWhitelist](CoinMachineClientV4.md#getwhitelist)
- [getWindowSize](CoinMachineClientV4.md#getwindowsize)
- [identifier](CoinMachineClientV4.md#identifier)
- [initialise](CoinMachineClientV4.md#initialise)
- [install](CoinMachineClientV4.md#install)
- [listenerCount](CoinMachineClientV4.md#listenercount)
- [listeners](CoinMachineClientV4.md#listeners)
- [owner](CoinMachineClientV4.md#owner)
- [queryFilter](CoinMachineClientV4.md#queryfilter)
- [removeAllListeners](CoinMachineClientV4.md#removealllisteners)
- [setAuthority](CoinMachineClientV4.md#setauthority)
- [setOwner](CoinMachineClientV4.md#setowner)
- [setWhitelist](CoinMachineClientV4.md#setwhitelist)
- [uninstall](CoinMachineClientV4.md#uninstall)
- [updatePeriod](CoinMachineClientV4.md#updateperiod)
- [version](CoinMachineClientV4.md#version)

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

#### Inherited from

AugmentedCoinMachine.callStatic

___

### clientType

• **clientType**: [`CoinMachineClient`](../enums/ClientType.md#coinmachineclient)

#### Inherited from

AugmentedCoinMachine.clientType

___

### clientVersion

• **clientVersion**: ``4``

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
| `PriceEvolutionSet` | (`evolvePrice?`: ``null``) => `PriceEvolutionSetEventFilter` |
| `PriceEvolutionSet(bool)` | (`evolvePrice?`: ``null``) => `PriceEvolutionSetEventFilter` |
| `TokensBought` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
| `TokensBought(address,uint256,uint256)` | (`buyer?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
| `WhitelistSet` | (`whitelist?`: ``null``) => `WhitelistSetEventFilter` |
| `WhitelistSet(address)` | (`whitelist?`: ``null``) => `WhitelistSetEventFilter` |

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

#### Inherited from

AugmentedCoinMachine.functions

___

### interface

• **interface**: `CoinMachineInterface`

#### Inherited from

AugmentedCoinMachine.interface

___

### off

• **off**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

#### Inherited from

AugmentedCoinMachine.off

___

### on

• **on**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

#### Inherited from

AugmentedCoinMachine.on

___

### once

• **once**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

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

#### Inherited from

AugmentedCoinMachine.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedCoinMachine.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

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

▸ **attach**(`addressOrName`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CoinMachineClientV4`](CoinMachineClientV4.md)

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

▸ **connect**(`signerOrProvider`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Inherited from

AugmentedCoinMachine.connect

___

### deployed

▸ **deployed**(): `Promise`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

#### Returns

`Promise`<[`CoinMachineClientV4`](CoinMachineClientV4.md)\>

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

### getActiveIntake

▸ **getActiveIntake**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of tokens received in the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getActiveIntake

___

### getActivePeriod

▸ **getActivePeriod**(`overrides?`): `Promise`<`BigNumber`\>

Get the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getActivePeriod

___

### getActiveSold

▸ **getActiveSold**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of tokens sold in the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getActiveSold

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

AugmentedCoinMachine.getCapabilityRoles

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

### getEMAIntake

▸ **getEMAIntake**(`overrides?`): `Promise`<`BigNumber`\>

Get the EMA of the number of tokens received each period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getEMAIntake

___

### getEvolvePrice

▸ **getEvolvePrice**(`overrides?`): `Promise`<`boolean`\>

Get the evolvePrice boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedCoinMachine.getEvolvePrice

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

### getMaxPurchase

▸ **getMaxPurchase**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in a period

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getMaxPurchase

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

### getPurchaseToken

▸ **getPurchaseToken**(`overrides?`): `Promise`<`string`\>

Get the address of the token being used to make purchases

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.getPurchaseToken

___

### getSellableTokens

▸ **getSellableTokens**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of remaining tokens for sale this period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getSellableTokens

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

### getToken

▸ **getToken**(`overrides?`): `Promise`<`string`\>

Get the address of the token being sold

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.getToken

___

### getTokenBalance

▸ **getTokenBalance**(`overrides?`): `Promise`<`BigNumber`\>

Get the remaining balance of tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getTokenBalance

___

### getUserLimit

▸ **getUserLimit**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in total

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getUserLimit

___

### getWhitelist

▸ **getWhitelist**(`overrides?`): `Promise`<`string`\>

Get the address of the whitelist (if exists)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.getWhitelist

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

▸ **initialise**(`_token`, `_purchaseToken`, `_periodLength`, `_windowSize`, `_targetPerPeriod`, `_maxPerPeriod`, `_userLimitFraction`, `_startingPrice`, `_whitelist`, `overrides?`): `Promise`<`ContractTransaction`\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

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

#### Inherited from

AugmentedCoinMachine.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`CoinMachineClientV4`](CoinMachineClientV4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CoinMachineClientV4`](CoinMachineClientV4.md)

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

### setWhitelist

▸ **setWhitelist**(`_whitelist`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the address for an (optional) whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_whitelist` | `string` | The address of the whitelist |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.setWhitelist

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
