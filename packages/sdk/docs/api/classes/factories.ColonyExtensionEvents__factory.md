# Class: ColonyExtensionEvents\_\_factory

[factories](../modules/factories.md).ColonyExtensionEvents__factory

## Constructors

### constructor

• **new ColonyExtensionEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ColonyExtensionEvents`](../interfaces/ColonyExtensionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ColonyExtensionEvents`](../interfaces/ColonyExtensionEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): `ColonyExtensionEventsInterface`

#### Returns

`ColonyExtensionEventsInterface`
