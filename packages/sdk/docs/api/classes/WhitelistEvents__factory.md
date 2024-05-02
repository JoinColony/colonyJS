# Class: WhitelistEvents\_\_factory

## Constructors

### constructor

• **new WhitelistEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"_user"`` ; `type`: ``"address"``  }] ; `name`: ``"AgreementSigned"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"_user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bool"`` ; `name`: ``"_status"`` ; `type`: ``"bool"``  }] ; `name`: ``"UserApproved"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`WhitelistEvents`](../interfaces/WhitelistEvents.WhitelistEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`WhitelistEvents`](../interfaces/WhitelistEvents.WhitelistEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`WhitelistEventsInterface`](../interfaces/WhitelistEvents.WhitelistEventsInterface.md)

#### Returns

[`WhitelistEventsInterface`](../interfaces/WhitelistEvents.WhitelistEventsInterface.md)
