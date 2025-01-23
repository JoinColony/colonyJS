[**API**](../README.md)

***

# Class: StreamingPaymentsEvents\_\_factory

## Constructors

### new StreamingPaymentsEvents\_\_factory()

> **new StreamingPaymentsEvents\_\_factory**(): [`StreamingPaymentsEvents__factory`](StreamingPaymentsEvents__factory.md)

#### Returns

[`StreamingPaymentsEvents__factory`](StreamingPaymentsEvents__factory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\]; `name`: `"ExtensionInitialised"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"authority"`; `type`: `"address"`; \}\]; `name`: `"LogSetAuthority"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"LogSetOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address payable"`; `name`: `"relayerAddress"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"functionSignature"`; `type`: `"bytes"`; \}\]; `name`: `"MetaTransactionExecuted"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"PaymentTokenUpdated"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"StreamingPaymentClaimed"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}\]; `name`: `"StreamingPaymentCreated"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}\]; `name`: `"ClaimWaived"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"endTime"`; `type`: `"uint256"`; \}\]; `name`: `"EndTimeSet"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"PaymentTokenUpdated"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"startTime"`; `type`: `"uint256"`; \}\]; `name`: `"StartTimeSet"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"agent"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"uint256"`; `name`: `"streamingPaymentId"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"interval"`; `type`: `"uint256"`; \}\]; `name`: `"PaymentTokenUpdated"`; `type`: `"event"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`StreamingPaymentsEvents`](../namespaces/StreamingPaymentsEvents/interfaces/StreamingPaymentsEvents.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`StreamingPaymentsEvents`](../namespaces/StreamingPaymentsEvents/interfaces/StreamingPaymentsEvents.md)

***

### createInterface()

> `static` **createInterface**(): [`StreamingPaymentsEventsInterface`](../namespaces/StreamingPaymentsEvents/interfaces/StreamingPaymentsEventsInterface.md)

#### Returns

[`StreamingPaymentsEventsInterface`](../namespaces/StreamingPaymentsEvents/interfaces/StreamingPaymentsEventsInterface.md)
