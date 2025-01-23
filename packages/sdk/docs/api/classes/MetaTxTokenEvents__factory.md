[**API**](../README.md)

***

# Class: MetaTxTokenEvents\_\_factory

## Constructors

### new MetaTxTokenEvents\_\_factory()

> **new MetaTxTokenEvents\_\_factory**(): [`MetaTxTokenEvents__factory`](MetaTxTokenEvents__factory.md)

#### Returns

[`MetaTxTokenEvents__factory`](MetaTxTokenEvents__factory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"src"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"guy"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Approval"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"guy"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Burn"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"authority"`; `type`: `"address"`; \}\]; `name`: `"LogSetAuthority"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"LogSetOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address payable"`; `name`: `"relayerAddress"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"functionSignature"`; `type`: `"bytes"`; \}\]; `name`: `"MetaTransactionExecuted"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"guy"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Mint"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"src"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"dst"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`MetaTxTokenEvents`](../namespaces/MetaTxTokenEvents/interfaces/MetaTxTokenEvents.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`MetaTxTokenEvents`](../namespaces/MetaTxTokenEvents/interfaces/MetaTxTokenEvents.md)

***

### createInterface()

> `static` **createInterface**(): [`MetaTxTokenEventsInterface`](../namespaces/MetaTxTokenEvents/interfaces/MetaTxTokenEventsInterface.md)

#### Returns

[`MetaTxTokenEventsInterface`](../namespaces/MetaTxTokenEvents/interfaces/MetaTxTokenEventsInterface.md)
