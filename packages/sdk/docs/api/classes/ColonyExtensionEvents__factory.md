# Class: ColonyExtensionEvents\_\_factory

## Constructors

### new ColonyExtensionEvents\_\_factory()

> **new ColonyExtensionEvents\_\_factory**(): [`ColonyExtensionEvents__factory`](ColonyExtensionEvents__factory.md)

#### Returns

[`ColonyExtensionEvents__factory`](ColonyExtensionEvents__factory.md)

## Properties

### abi

> `readonly` `static` **abi**: readonly \[\{ `anonymous`: `false`; `inputs`: readonly \[\]; `name`: `"ExtensionInitialised"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"authority"`; `type`: `"address"`; \}\]; `name`: `"LogSetAuthority"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"LogSetOwner"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"userAddress"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address payable"`; `name`: `"relayerAddress"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes"`; `name`: `"payload"`; `type`: `"bytes"`; \}\]; `name`: `"MetaTransactionExecuted"`; `type`: `"event"`; \}\]

## Methods

### connect()

> `static` **connect**(`address`, `signerOrProvider`): [`ColonyExtensionEvents`](../namespaces/ColonyExtensionEvents/interfaces/ColonyExtensionEvents.md)

#### Parameters

##### address

`string`

##### signerOrProvider

`Signer` | `Provider`

#### Returns

[`ColonyExtensionEvents`](../namespaces/ColonyExtensionEvents/interfaces/ColonyExtensionEvents.md)

***

### createInterface()

> `static` **createInterface**(): [`ColonyExtensionEventsInterface`](../namespaces/ColonyExtensionEvents/interfaces/ColonyExtensionEventsInterface.md)

#### Returns

[`ColonyExtensionEventsInterface`](../namespaces/ColonyExtensionEvents/interfaces/ColonyExtensionEventsInterface.md)
