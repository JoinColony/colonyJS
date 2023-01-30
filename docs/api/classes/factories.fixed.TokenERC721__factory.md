# Class: TokenERC721\_\_factory

[factories](../modules/factories.md).[fixed](../modules/factories.fixed.md).TokenERC721__factory

## Constructors

### constructor

• **new TokenERC721__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "string"; `name`: `string` = "name\_"; `type`: `string` = "string" }[] ; `name`: `undefined` = "allowance"; `outputs`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenERC721`](../interfaces/fixed.TokenERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Provider` \| `Signer` |

#### Returns

[`TokenERC721`](../interfaces/fixed.TokenERC721.md)

___

### createInterface

▸ `Static` **createInterface**(): `TokenERC721Interface`

#### Returns

`TokenERC721Interface`
