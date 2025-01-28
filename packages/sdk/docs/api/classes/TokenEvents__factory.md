# Class: TokenEvents\_\_factory

## Constructors

### new TokenEvents\_\_factory()

> **new TokenEvents\_\_factory**(): [`TokenEvents__factory`](TokenEvents__factory.md)

#### Returns

[`TokenEvents__factory`](TokenEvents__factory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"guy"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Mint"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"guy"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Burn"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"authority"`; `type`: `"address"`; \}\]; `name`: `"LogSetAuthority"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"LogSetOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"src"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"guy"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Approval"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"src"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"dst"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"wad"`; `type`: `"uint256"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`TokenEvents`](../namespaces/TokenEvents/interfaces/TokenEvents.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`TokenEvents`](../namespaces/TokenEvents/interfaces/TokenEvents.md)

***

### createInterface()

> `static` **createInterface**(): [`TokenEventsInterface`](../namespaces/TokenEvents/interfaces/TokenEventsInterface.md)

#### Returns

[`TokenEventsInterface`](../namespaces/TokenEvents/interfaces/TokenEventsInterface.md)
