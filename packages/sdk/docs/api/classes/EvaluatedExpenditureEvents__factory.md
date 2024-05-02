# Class: EvaluatedExpenditureEvents\_\_factory

## Constructors

### constructor

• **new EvaluatedExpenditureEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`EvaluatedExpenditureEvents`](../interfaces/EvaluatedExpenditureEvents.EvaluatedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`EvaluatedExpenditureEvents`](../interfaces/EvaluatedExpenditureEvents.EvaluatedExpenditureEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`EvaluatedExpenditureEventsInterface`](../interfaces/EvaluatedExpenditureEvents.EvaluatedExpenditureEventsInterface.md)

#### Returns

[`EvaluatedExpenditureEventsInterface`](../interfaces/EvaluatedExpenditureEvents.EvaluatedExpenditureEventsInterface.md)
