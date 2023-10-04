# Interface: Erc2612TokenClient

## Hierarchy

- [`ERC2612Token`](ERC2612Token.md)

  ↳ **`Erc2612TokenClient`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[_deployedPromise](ERC2612Token.md#_deployedpromise)

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[_runningEvents](ERC2612Token.md#_runningevents)

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[_wrappedEmits](ERC2612Token.md#_wrappedemits)

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[address](ERC2612Token.md#address)

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces(address)` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transfer(address,uint256)` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[callStatic](ERC2612Token.md#callstatic)

___

### clientType

• **clientType**: [`TokenClient`](../enums/ClientTypeTokens.md#tokenclient)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[deployTransaction](ERC2612Token.md#deploytransaction)

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `nonces(address)` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transfer(address,uint256)` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |
| `transferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`BigNumber`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[estimateGas](ERC2612Token.md#estimategas)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[filters](ERC2612Token.md#filters)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `nonces(address)` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transfer(address,uint256)` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[functions](ERC2612Token.md#functions)

___

### interface

• **interface**: `TokenERC2612Interface`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[interface](ERC2612Token.md#interface)

___

### off

• **off**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[off](ERC2612Token.md#off)

___

### on

• **on**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[on](ERC2612Token.md#on)

___

### once

• **once**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[once](ERC2612Token.md#once)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DOMAIN_SEPARATOR` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `DOMAIN_SEPARATOR()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `allowance(address,address)` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `approve(address,uint256)` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf(address)` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `nonces(address)` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `permit` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `permit(address,address,uint256,uint256,uint8,bytes32,bytes32)` | (`owner`: `string`, `spender`: `string`, `value`: `BigNumberish`, `deadline`: `BigNumberish`, `v`: `BigNumberish`, `r`: `BytesLike`, `s`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transfer(address,uint256)` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

[ERC2612Token](ERC2612Token.md).[populateTransaction](ERC2612Token.md#populatetransaction)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[provider](ERC2612Token.md#provider)

___

### removeListener

• **removeListener**: `OnEvent`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[removeListener](ERC2612Token.md#removelistener)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[resolvedAddress](ERC2612Token.md#resolvedaddress)

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[signer](ERC2612Token.md#signer)

___

### tokenClientType

• **tokenClientType**: [`Erc2612`](../enums/TokenClientType.md#erc2612)

## Methods

### DOMAIN\_SEPARATOR

▸ **DOMAIN_SEPARATOR**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[DOMAIN_SEPARATOR](ERC2612Token.md#domain_separator)

___

### DOMAIN\_SEPARATOR()

▸ **DOMAIN_SEPARATOR()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[DOMAIN_SEPARATOR()](ERC2612Token.md#domain_separator())

___

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

[ERC2612Token](ERC2612Token.md).[_checkRunningEvents](ERC2612Token.md#_checkrunningevents)

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

[ERC2612Token](ERC2612Token.md).[_deployed](ERC2612Token.md#_deployed)

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

[ERC2612Token](ERC2612Token.md).[_wrapEvent](ERC2612Token.md#_wrapevent)

___

### allowance

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[allowance](ERC2612Token.md#allowance)

___

### allowance(address,address)

▸ **allowance(address,address)**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[allowance(address,address)](ERC2612Token.md#allowance(address,address))

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[approve](ERC2612Token.md#approve)

___

### approve(address,uint256)

▸ **approve(address,uint256)**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[approve(address,uint256)](ERC2612Token.md#approve(address,uint256))

___

### attach

▸ **attach**(`addressOrName`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[attach](ERC2612Token.md#attach)

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[balanceOf](ERC2612Token.md#balanceof)

___

### balanceOf(address)

▸ **balanceOf(address)**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[balanceOf(address)](ERC2612Token.md#balanceof(address))

___

### connect

▸ **connect**(`signerOrProvider`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[connect](ERC2612Token.md#connect)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[decimals](ERC2612Token.md#decimals)

___

### decimals()

▸ **decimals()**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[decimals()](ERC2612Token.md#decimals())

___

### deployed

▸ **deployed**(): `Promise`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Returns

`Promise`<[`Erc2612TokenClient`](Erc2612TokenClient.md)\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[deployed](ERC2612Token.md#deployed)

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

[ERC2612Token](ERC2612Token.md).[emit](ERC2612Token.md#emit)

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

[ERC2612Token](ERC2612Token.md).[fallback](ERC2612Token.md#fallback)

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

[ERC2612Token](ERC2612Token.md).[listenerCount](ERC2612Token.md#listenercount)

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

[ERC2612Token](ERC2612Token.md).[listeners](ERC2612Token.md#listeners)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

[ERC2612Token](ERC2612Token.md).[listeners](ERC2612Token.md#listeners)

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[name](ERC2612Token.md#name)

___

### name()

▸ **name()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[name()](ERC2612Token.md#name())

___

### nonces

▸ **nonces**(`owner`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[nonces](ERC2612Token.md#nonces)

___

### nonces(address)

▸ **nonces(address)**(`owner`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[nonces(address)](ERC2612Token.md#nonces(address))

___

### permit

▸ **permit**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `BigNumberish` |
| `deadline` | `BigNumberish` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[permit](ERC2612Token.md#permit)

___

### permit(address,address,uint256,uint256,uint8,bytes32,bytes32)

▸ **permit(address,address,uint256,uint256,uint8,bytes32,bytes32)**(`owner`, `spender`, `value`, `deadline`, `v`, `r`, `s`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `BigNumberish` |
| `deadline` | `BigNumberish` |
| `v` | `BigNumberish` |
| `r` | `BytesLike` |
| `s` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[permit(address,address,uint256,uint256,uint8,bytes32,bytes32)](ERC2612Token.md#permit(address,address,uint256,uint256,uint8,bytes32,bytes32))

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

[ERC2612Token](ERC2612Token.md).[queryFilter](ERC2612Token.md#queryfilter)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[removeAllListeners](ERC2612Token.md#removealllisteners)

▸ **removeAllListeners**(`eventName?`): [`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Erc2612TokenClient`](Erc2612TokenClient.md)

#### Inherited from

[ERC2612Token](ERC2612Token.md).[removeAllListeners](ERC2612Token.md#removealllisteners)

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[symbol](ERC2612Token.md#symbol)

___

### symbol()

▸ **symbol()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[symbol()](ERC2612Token.md#symbol())

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[totalSupply](ERC2612Token.md#totalsupply)

___

### totalSupply()

▸ **totalSupply()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[totalSupply()](ERC2612Token.md#totalsupply())

___

### transfer

▸ **transfer**(`to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[transfer](ERC2612Token.md#transfer)

___

### transfer(address,uint256)

▸ **transfer(address,uint256)**(`to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[transfer(address,uint256)](ERC2612Token.md#transfer(address,uint256))

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[transferFrom](ERC2612Token.md#transferfrom)

___

### transferFrom(address,address,uint256)

▸ **transferFrom(address,address,uint256)**(`from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

[ERC2612Token](ERC2612Token.md).[transferFrom(address,address,uint256)](ERC2612Token.md#transferfrom(address,address,uint256))
