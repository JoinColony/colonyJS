# Class: TokenSupplierEvents\_\_factory

## Constructors

### new TokenSupplierEvents\_\_factory()

> **new TokenSupplierEvents\_\_factory**(): [`TokenSupplierEvents__factory`](TokenSupplierEvents__factory.md)

#### Returns

[`TokenSupplierEvents__factory`](TokenSupplierEvents__factory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\]; `name`: `"ExtensionInitialised"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"authority"`; `type`: `"address"`; \}\]; `name`: `"LogSetAuthority"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"LogSetOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"tokenIssuanceRate"`; `type`: `"uint256"`; \}\]; `name`: `"TokenIssuanceRateSet"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"tokenSupplyCeiling"`; `type`: `"uint256"`; \}\]; `name`: `"TokenSupplyCeilingSet"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"numTokens"`; `type`: `"uint256"`; \}\]; `name`: `"TokensIssued"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address payable"`; `name`: `"relayerAddress"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"functionSignature"`; `type`: `"bytes"`; \}\]; `name`: `"MetaTransactionExecuted"`; `type`: `"event"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`TokenSupplierEvents`](../namespaces/TokenSupplierEvents/interfaces/TokenSupplierEvents.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`TokenSupplierEvents`](../namespaces/TokenSupplierEvents/interfaces/TokenSupplierEvents.md)

***

### createInterface()

> `static` **createInterface**(): [`TokenSupplierEventsInterface`](../namespaces/TokenSupplierEvents/interfaces/TokenSupplierEventsInterface.md)

#### Returns

[`TokenSupplierEventsInterface`](../namespaces/TokenSupplierEvents/interfaces/TokenSupplierEventsInterface.md)
