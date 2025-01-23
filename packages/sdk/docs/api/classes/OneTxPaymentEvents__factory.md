[**API**](../README.md)

***

# Class: OneTxPaymentEvents\_\_factory

## Constructors

### new OneTxPaymentEvents\_\_factory()

> **new OneTxPaymentEvents\_\_factory**(): [`OneTxPaymentEvents__factory`](OneTxPaymentEvents__factory.md)

#### Returns

[`OneTxPaymentEvents__factory`](OneTxPaymentEvents__factory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\]; `name`: `"ExtensionInitialised"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"authority"`; `type`: `"address"`; \}\]; `name`: `"LogSetAuthority"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"LogSetOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"fundamentalId"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"nPayouts"`; `type`: `"uint256"`; \}\]; `name`: `"OneTxPaymentMade"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address payable"`; `name`: `"relayerAddress"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"functionSignature"`; `type`: `"bytes"`; \}\]; `name`: `"MetaTransactionExecuted"`; `type`: `"event"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`OneTxPaymentEvents`](../namespaces/OneTxPaymentEvents/interfaces/OneTxPaymentEvents.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`OneTxPaymentEvents`](../namespaces/OneTxPaymentEvents/interfaces/OneTxPaymentEvents.md)

***

### createInterface()

> `static` **createInterface**(): [`OneTxPaymentEventsInterface`](../namespaces/OneTxPaymentEvents/interfaces/OneTxPaymentEventsInterface.md)

#### Returns

[`OneTxPaymentEventsInterface`](../namespaces/OneTxPaymentEvents/interfaces/OneTxPaymentEventsInterface.md)
