# Interface: CoinMachineClientV7

## Hierarchy

- `AugmentedCoinMachine`<`CoinMachine`\>

  ↳ **`CoinMachineClientV7`**

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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `buyTokens(uint256)` | (`_numTokens`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActivePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveSold()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentPrice()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEMAIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getEvolvePrice()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPurchase(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getPurchaseToken()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSellableTokens()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getToken()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenBalance()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLimit(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getWhitelist()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWindowSize()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setWhitelist(address)` | (`_whitelist`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updatePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedCoinMachine.callStatic

___

### clientType

• **clientType**: [`CoinMachineClient`](../enums/ClientType.md#coinmachineclient)

#### Inherited from

AugmentedCoinMachine.clientType

___

### clientVersion

• **clientVersion**: ``7``

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

• **colonyClient**: `AugmentedIColony`

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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `buyTokens(uint256)` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActivePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getActiveSold()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCurrentPrice()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEMAIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEvolvePrice()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMaxPurchase(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPeriodLength()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPurchaseToken()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSellableTokens()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTargetPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getToken()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getTokenBalance()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUserLimit(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWhitelist()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWindowSize()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `setWhitelist(address)` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `updatePeriod()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

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
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `PeriodUpdated` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => `PeriodUpdatedEventFilter` |
| `PeriodUpdated(uint256,uint256)` | (`activePeriod?`: ``null``, `currentPeriod?`: ``null``) => `PeriodUpdatedEventFilter` |
| `PriceEvolutionSet` | (`evolvePrice?`: ``null``) => `PriceEvolutionSetEventFilter` |
| `PriceEvolutionSet(bool)` | (`evolvePrice?`: ``null``) => `PriceEvolutionSetEventFilter` |
| `TokensBought` | (`buyer?`: ``null`` \| `string`, `token?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
| `TokensBought(address,address,uint256,uint256)` | (`buyer?`: ``null`` \| `string`, `token?`: ``null``, `numTokens?`: ``null``, `totalCost?`: ``null``) => `TokensBoughtEventFilter` |
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
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `buyTokens(uint256)` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_intake`: `BigNumber`  }\> |
| `getActiveIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_intake`: `BigNumber`  }\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getActivePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_period`: `BigNumber`  }\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_sold`: `BigNumber`  }\> |
| `getActiveSold()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_sold`: `BigNumber`  }\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_price`: `BigNumber`  }\> |
| `getCurrentPrice()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_price`: `BigNumber`  }\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_amount`: `BigNumber`  }\> |
| `getEMAIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_amount`: `BigNumber`  }\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_evolve`: `boolean`  }\> |
| `getEvolvePrice()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_evolve`: `boolean`  }\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_max`: `BigNumber`  }\> |
| `getMaxPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_max`: `BigNumber`  }\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_max`: `BigNumber`  }\> |
| `getMaxPurchase(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_max`: `BigNumber`  }\> |
| `getMetatransactionNonce` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_nonce`: `BigNumber`  }\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_length`: `BigNumber`  }\> |
| `getPeriodLength()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_length`: `BigNumber`  }\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_token`: `string`  }\> |
| `getPurchaseToken()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_token`: `string`  }\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_remaining`: `BigNumber`  }\> |
| `getSellableTokens()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_remaining`: `BigNumber`  }\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_target`: `BigNumber`  }\> |
| `getTargetPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_target`: `BigNumber`  }\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_token`: `string`  }\> |
| `getToken()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_token`: `string`  }\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_balance`: `BigNumber`  }\> |
| `getTokenBalance()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_balance`: `BigNumber`  }\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_max`: `BigNumber`  }\> |
| `getUserLimit(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_max`: `BigNumber`  }\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_whitelist`: `string`  }\> |
| `getWhitelist()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_whitelist`: `string`  }\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_size`: `BigNumber`  }\> |
| `getWindowSize()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_size`: `BigNumber`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setWhitelist(address)` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `updatePeriod()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

#### Inherited from

AugmentedCoinMachine.functions

___

### interface

• **interface**: `CoinMachineInterface`

#### Inherited from

AugmentedCoinMachine.interface

___

### off

• **off**: `OnEvent`<[`CoinMachineClientV7`](CoinMachineClientV7.md)\>

#### Inherited from

AugmentedCoinMachine.off

___

### on

• **on**: `OnEvent`<[`CoinMachineClientV7`](CoinMachineClientV7.md)\>

#### Inherited from

AugmentedCoinMachine.on

___

### once

• **once**: `OnEvent`<[`CoinMachineClientV7`](CoinMachineClientV7.md)\>

#### Inherited from

AugmentedCoinMachine.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `buyTokens` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `buyTokens(uint256)` | (`_numTokens`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getActiveIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActiveIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActivePeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActivePeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActiveSold` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getActiveSold()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentPrice` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCurrentPrice()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEMAIntake` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEMAIntake()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEvolvePrice` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEvolvePrice()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxPurchase` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMaxPurchase(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`_userAddress`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPeriodLength` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPeriodLength()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPurchaseToken` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPurchaseToken()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSellableTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSellableTokens()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTargetPerPeriod` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTargetPerPeriod()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getToken` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getToken()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenBalance` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getTokenBalance()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserLimit` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUserLimit(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWhitelist` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWhitelist()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWindowSize` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWindowSize()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialise` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)` | (`_token`: `string`, `_purchaseToken`: `string`, `_periodLength`: `BigNumberish`, `_windowSize`: `BigNumberish`, `_targetPerPeriod`: `BigNumberish`, `_maxPerPeriod`: `BigNumberish`, `_userLimitFraction`: `BigNumberish`, `_startingPrice`: `BigNumberish`, `_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setWhitelist` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setWhitelist(address)` | (`_whitelist`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePeriod` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `updatePeriod()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_owner`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedCoinMachine.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedCoinMachine.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`CoinMachineClientV7`](CoinMachineClientV7.md)\>

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

▸ **attach**(`addressOrName`): [`CoinMachineClientV7`](CoinMachineClientV7.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CoinMachineClientV7`](CoinMachineClientV7.md)

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

### authority()

▸ **authority()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.authority()

___

### buyTokens

▸ **buyTokens**(`_numTokens`, `overrides?`): `Promise`<`ContractTransaction`\>

Purchase tokens from Coin Machine.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_numTokens` | `BigNumberish` | The number of tokens to purchase |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.buyTokens

___

### buyTokens(uint256)

▸ **buyTokens(uint256)**(`_numTokens`, `overrides?`): `Promise`<`ContractTransaction`\>

Purchase tokens from Coin Machine.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_numTokens` | `BigNumberish` | The number of tokens to purchase |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.buyTokens(uint256)

___

### connect

▸ **connect**(`signerOrProvider`): [`CoinMachineClientV7`](CoinMachineClientV7.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CoinMachineClientV7`](CoinMachineClientV7.md)

#### Inherited from

AugmentedCoinMachine.connect

___

### deployed

▸ **deployed**(): `Promise`<[`CoinMachineClientV7`](CoinMachineClientV7.md)\>

#### Returns

`Promise`<[`CoinMachineClientV7`](CoinMachineClientV7.md)\>

#### Inherited from

AugmentedCoinMachine.deployed

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

AugmentedCoinMachine.deprecate

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

AugmentedCoinMachine.deprecate(bool)

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

AugmentedCoinMachine.emit

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

AugmentedCoinMachine.executeMetaTransaction

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

AugmentedCoinMachine.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

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
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.finishUpgrade

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

AugmentedCoinMachine.finishUpgrade()

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

### getActiveIntake()

▸ **getActiveIntake()**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of tokens received in the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getActiveIntake()

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

### getActivePeriod()

▸ **getActivePeriod()**(`overrides?`): `Promise`<`BigNumber`\>

Get the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getActivePeriod()

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

### getActiveSold()

▸ **getActiveSold()**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of tokens sold in the period that the price was last updated for or a purchase was made

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getActiveSold()

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

AugmentedCoinMachine.getCapabilityRoles(bytes4)

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

AugmentedCoinMachine.getChainId

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

AugmentedCoinMachine.getChainId()

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

### getColony()

▸ **getColony()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.getColony()

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

### getCurrentPrice()

▸ **getCurrentPrice()**(`overrides?`): `Promise`<`BigNumber`\>

Get the current price per token

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getCurrentPrice()

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

### getDeprecated()

▸ **getDeprecated()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedCoinMachine.getDeprecated()

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

### getEMAIntake()

▸ **getEMAIntake()**(`overrides?`): `Promise`<`BigNumber`\>

Get the EMA of the number of tokens received each period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getEMAIntake()

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

### getEvolvePrice()

▸ **getEvolvePrice()**(`overrides?`): `Promise`<`boolean`\>

Get the evolvePrice boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedCoinMachine.getEvolvePrice()

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

### getMaxPerPeriod()

▸ **getMaxPerPeriod()**(`overrides?`): `Promise`<`BigNumber`\>

Get the maximum number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getMaxPerPeriod()

___

### getMaxPurchase

▸ **getMaxPurchase**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in a period

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getMaxPurchase

___

### getMaxPurchase(address)

▸ **getMaxPurchase(address)**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in a period

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getMaxPurchase(address)

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`_userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next nonce for a meta-transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_userAddress` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getMetatransactionNonce

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`_userAddress`, `overrides?`): `Promise`<`BigNumber`\>

Gets the next nonce for a meta-transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_userAddress` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getMetatransactionNonce(address)

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

### getPeriodLength()

▸ **getPeriodLength()**(`overrides?`): `Promise`<`BigNumber`\>

Get the length of the sale period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getPeriodLength()

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

### getPurchaseToken()

▸ **getPurchaseToken()**(`overrides?`): `Promise`<`string`\>

Get the address of the token being used to make purchases

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.getPurchaseToken()

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

### getSellableTokens()

▸ **getSellableTokens()**(`overrides?`): `Promise`<`BigNumber`\>

Get the number of remaining tokens for sale this period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getSellableTokens()

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

### getTargetPerPeriod()

▸ **getTargetPerPeriod()**(`overrides?`): `Promise`<`BigNumber`\>

Get the target number of tokens to sell per period

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getTargetPerPeriod()

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

### getToken()

▸ **getToken()**(`overrides?`): `Promise`<`string`\>

Get the address of the token being sold

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.getToken()

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

### getTokenBalance()

▸ **getTokenBalance()**(`overrides?`): `Promise`<`BigNumber`\>

Get the remaining balance of tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getTokenBalance()

___

### getUserLimit

▸ **getUserLimit**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in total

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getUserLimit

___

### getUserLimit(address)

▸ **getUserLimit(address)**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

Get the maximum amount of tokens a user can purchase in total

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `string` | The user's address |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getUserLimit(address)

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

### getWhitelist()

▸ **getWhitelist()**(`overrides?`): `Promise`<`string`\>

Get the address of the whitelist (if exists)

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.getWhitelist()

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

### getWindowSize()

▸ **getWindowSize()**(`overrides?`): `Promise`<`BigNumber`\>

Get the size of the averaging window

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedCoinMachine.getWindowSize()

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

AugmentedCoinMachine.identifier()

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
| `_userLimitFraction` | `BigNumberish` | The fraction of the total sale that a single user can buy (in WAD) |
| `_startingPrice` | `BigNumberish` | The sale price to start at, expressed in units of _purchaseToken per token being sold, as a WAD |
| `_whitelist` | `string` | Optionally an address of a whitelist contract to use can be provided. Pass 0x0 if no whitelist being used |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.initialise

___

### initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)

▸ **initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)**(`_token`, `_purchaseToken`, `_periodLength`, `_windowSize`, `_targetPerPeriod`, `_maxPerPeriod`, `_userLimitFraction`, `_startingPrice`, `_whitelist`, `overrides?`): `Promise`<`ContractTransaction`\>

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
| `_userLimitFraction` | `BigNumberish` | The fraction of the total sale that a single user can buy (in WAD) |
| `_startingPrice` | `BigNumberish` | The sale price to start at, expressed in units of _purchaseToken per token being sold, as a WAD |
| `_whitelist` | `string` | Optionally an address of a whitelist contract to use can be provided. Pass 0x0 if no whitelist being used |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.initialise(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address)

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

AugmentedCoinMachine.install

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

AugmentedCoinMachine.install(address)

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

AugmentedCoinMachine.multicall

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

AugmentedCoinMachine.multicall(bytes[])

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

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedCoinMachine.owner()

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CoinMachineClientV7`](CoinMachineClientV7.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`CoinMachineClientV7`](CoinMachineClientV7.md)

#### Inherited from

AugmentedCoinMachine.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`CoinMachineClientV7`](CoinMachineClientV7.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CoinMachineClientV7`](CoinMachineClientV7.md)

#### Inherited from

AugmentedCoinMachine.removeAllListeners

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

AugmentedCoinMachine.setAuthority

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

AugmentedCoinMachine.setAuthority(address)

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

AugmentedCoinMachine.setOwner

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

AugmentedCoinMachine.setOwner(address)

___

### setWhitelist

▸ **setWhitelist**(`_whitelist`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the address for an (optional) whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_whitelist` | `string` | The address of the whitelist |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.setWhitelist

___

### setWhitelist(address)

▸ **setWhitelist(address)**(`_whitelist`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the address for an (optional) whitelist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_whitelist` | `string` | The address of the whitelist |
| `overrides?` | `Overrides` & { `from?`: `string`  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.setWhitelist(address)

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

AugmentedCoinMachine.uninstall

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

AugmentedCoinMachine.uninstall()

___

### updatePeriod

▸ **updatePeriod**(`overrides?`): `Promise`<`ContractTransaction`\>

Bring the token accounting current

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.updatePeriod

___

### updatePeriod()

▸ **updatePeriod()**(`overrides?`): `Promise`<`ContractTransaction`\>

Bring the token accounting current

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedCoinMachine.updatePeriod()

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

AugmentedCoinMachine.verify

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

AugmentedCoinMachine.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

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

AugmentedCoinMachine.version()
