[**API**](../README.md)

***

# Class: WhitelistEvents\_\_factory

## Constructors

### new WhitelistEvents\_\_factory()

> **new WhitelistEvents\_\_factory**(): [`WhitelistEvents__factory`](WhitelistEvents__factory.md)

#### Returns

[`WhitelistEvents__factory`](WhitelistEvents__factory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"_user"`; `type`: `"address"`; \}\]; `name`: `"AgreementSigned"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\]; `name`: `"ExtensionInitialised"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"authority"`; `type`: `"address"`; \}\]; `name`: `"LogSetAuthority"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"LogSetOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"_user"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bool"`; `name`: `"_status"`; `type`: `"bool"`; \}\]; `name`: `"UserApproved"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address payable"`; `name`: `"relayerAddress"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"functionSignature"`; `type`: `"bytes"`; \}\]; `name`: `"MetaTransactionExecuted"`; `type`: `"event"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`WhitelistEvents`](../namespaces/WhitelistEvents/interfaces/WhitelistEvents.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`WhitelistEvents`](../namespaces/WhitelistEvents/interfaces/WhitelistEvents.md)

***

### createInterface()

> `static` **createInterface**(): [`WhitelistEventsInterface`](../namespaces/WhitelistEvents/interfaces/WhitelistEventsInterface.md)

#### Returns

[`WhitelistEventsInterface`](../namespaces/WhitelistEvents/interfaces/WhitelistEventsInterface.md)
