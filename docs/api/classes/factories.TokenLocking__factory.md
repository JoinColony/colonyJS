# Class: TokenLocking\_\_factory

[factories](../modules/factories.md).TokenLocking__factory

## Constructors

### constructor

• **new TokenLocking__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "colonyNetwork"; `type`: `string` = "address" }[] ; `name`: `string` = "ColonyNetworkSet"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_user"; `type`: `string` = "address" }[] ; `name`: `string` = "executeMetaTransaction"; `outputs`: { `internalType`: `string` = "bytes"; `name`: `string` = ""; `type`: `string` = "bytes" }[] ; `stateMutability`: `string` = "payable"; `type`: `string` = "function" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "\_token"; `type`: `string` = "address" }[] ; `name`: `string` = "getUserLock"; `outputs`: { `components`: { `internalType`: `string` = "uint256"; `name`: `string` = "lockCount"; `type`: `string` = "uint256" }[] ; `internalType`: `string` = "struct TokenLockingDataTypes.Lock"; `name`: `string` = "lock"; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenLocking`](../interfaces/TokenLocking.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Provider` \| `Signer` |

#### Returns

[`TokenLocking`](../interfaces/TokenLocking.md)

___

### createInterface

▸ `Static` **createInterface**(): `TokenLockingInterface`

#### Returns

`TokenLockingInterface`
