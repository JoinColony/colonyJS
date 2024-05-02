# Class: OneTxPaymentEvents\_\_factory

## Constructors

### constructor

• **new OneTxPaymentEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"fundamentalId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"nPayouts"`` ; `type`: ``"uint256"``  }] ; `name`: ``"OneTxPaymentMade"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`OneTxPaymentEvents`](../interfaces/OneTxPaymentEvents.OneTxPaymentEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`OneTxPaymentEvents`](../interfaces/OneTxPaymentEvents.OneTxPaymentEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`OneTxPaymentEventsInterface`](../interfaces/OneTxPaymentEvents.OneTxPaymentEventsInterface.md)

#### Returns

[`OneTxPaymentEventsInterface`](../interfaces/OneTxPaymentEvents.OneTxPaymentEventsInterface.md)
