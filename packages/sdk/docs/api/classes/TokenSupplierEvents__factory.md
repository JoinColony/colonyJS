# Class: TokenSupplierEvents\_\_factory

## Constructors

### constructor

• **new TokenSupplierEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"tokenIssuanceRate"`` ; `type`: ``"uint256"``  }] ; `name`: ``"TokenIssuanceRateSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"tokenSupplyCeiling"`` ; `type`: ``"uint256"``  }] ; `name`: ``"TokenSupplyCeilingSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"numTokens"`` ; `type`: ``"uint256"``  }] ; `name`: ``"TokensIssued"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenSupplierEvents`](../interfaces/TokenSupplierEvents.TokenSupplierEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`TokenSupplierEvents`](../interfaces/TokenSupplierEvents.TokenSupplierEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`TokenSupplierEventsInterface`](../interfaces/TokenSupplierEvents.TokenSupplierEventsInterface.md)

#### Returns

[`TokenSupplierEventsInterface`](../interfaces/TokenSupplierEvents.TokenSupplierEventsInterface.md)
