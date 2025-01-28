# Class: ERC2612TokenFactory

## Constructors

### new ERC2612TokenFactory()

> **new ERC2612TokenFactory**(): [`ERC2612TokenFactory`](ERC2612TokenFactory.md)

#### Returns

[`ERC2612TokenFactory`](ERC2612TokenFactory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"string"`; `name`: `"name_"`; `type`: `"string"`; \}, \{ `internalType`: `"string"`; `name`: `"symbol_"`; `type`: `"string"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Approval"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"from"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"to"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}\]; `name`: `"allowance"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"approve"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"balanceOf"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"decimals"`; `outputs`: readonly \[\{ `internalType`: `"uint8"`; `name`: `""`; `type`: `"uint8"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"name"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"symbol"`; `outputs`: readonly \[\{ `internalType`: `"string"`; `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"totalSupply"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"to"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transfer"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"from"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"to"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transferFrom"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `""`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"value"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"deadline"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint8"`; `name`: `"v"`; `type`: `"uint8"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"r"`; `type`: `"bytes32"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"s"`; `type`: `"bytes32"`; \}\]; `name`: `"permit"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"DOMAIN_SEPARATOR"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `""`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"nonces"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`ERC2612Token`](../interfaces/ERC2612Token.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`ERC2612Token`](../interfaces/ERC2612Token.md)

***

### createInterface()

> `static` **createInterface**(): `TokenERC2612Interface`

#### Returns

`TokenERC2612Interface`
