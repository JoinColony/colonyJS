# Class: ERC20TokenFactory

## Constructors

### new ERC20TokenFactory()

> **new ERC20TokenFactory**(): [`ERC20TokenFactory`](ERC20TokenFactory.md)

#### Returns

[`ERC20TokenFactory`](ERC20TokenFactory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"string"`; `name`: `"name_"`; `type`: `"string"`; \}, \{ `internalType`: `"string"`; `name`: `"symbol_"`; `type`: `"string"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Approval"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"from"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"to"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}\]; `name`: `"allowance"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"approve"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"balanceOf"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"decimals"`; `outputs`: readonly \[\{ `internalType`: `"uint8"`; `name`: `""`; `type`: `"uint8"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"name"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"symbol"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"totalSupply"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"to"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transfer"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"from"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"to"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transferFrom"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`ERC20Token`](../interfaces/ERC20Token.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`ERC20Token`](../interfaces/ERC20Token.md)

***

### createInterface()

> `static` **createInterface**(): `TokenERC20Interface`

#### Returns

`TokenERC20Interface`
