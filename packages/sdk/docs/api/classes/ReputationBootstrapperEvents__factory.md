# Class: ReputationBootstrapperEvents\_\_factory

## Constructors

### constructor

• **new ReputationBootstrapperEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"recipient"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"reputationAmount"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"bool"`` ; `name`: ``"paid"`` ; `type`: ``"bool"``  }] ; `name`: ``"GrantClaimed"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"bool"`` ; `name`: ``"paid"`` ; `type`: ``"bool"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes32"`` ; `name`: ``"hashedSecret"`` ; `type`: ``"bytes32"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"reputationAmount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"GrantSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ReputationBootstrapperEvents`](../interfaces/ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ReputationBootstrapperEvents`](../interfaces/ReputationBootstrapperEvents.ReputationBootstrapperEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`ReputationBootstrapperEventsInterface`](../interfaces/ReputationBootstrapperEvents.ReputationBootstrapperEventsInterface.md)

#### Returns

[`ReputationBootstrapperEventsInterface`](../interfaces/ReputationBootstrapperEvents.ReputationBootstrapperEventsInterface.md)
