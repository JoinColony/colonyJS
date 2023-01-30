# Class: TokenSAI\_\_factory

[factories](../modules/factories.md).[fixed](../modules/factories.fixed.md).TokenSAI__factory

## Constructors

### constructor

• **new TokenSAI__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `undefined` = false; `constant`: `boolean` = false; `inputs`: { `name`: `string` = "\_spender"; `type`: `string` = "address" }[] ; `name`: `string` = "approve"; `outputs`: { `name`: `string` = ""; `type`: `string` = "bool" }[] ; `payable`: `boolean` = false; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" } \| { `anonymous`: `undefined` = false; `constant`: `undefined` = true; `inputs`: `undefined` ; `name`: `undefined` = "allowance"; `outputs`: `undefined` ; `payable`: `boolean` = true; `stateMutability`: `string` = "payable"; `type`: `string` = "fallback" } \| { `anonymous`: `boolean` = false; `constant`: `undefined` = true; `inputs`: { `indexed`: `boolean` = true; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` ; `payable`: `undefined` = false; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" })[] = `_abi`

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenSAI`](../interfaces/fixed.TokenSAI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Provider` \| `Signer` |

#### Returns

[`TokenSAI`](../interfaces/fixed.TokenSAI.md)

___

### createInterface

▸ `Static` **createInterface**(): `TokenSAIInterface`

#### Returns

`TokenSAIInterface`
