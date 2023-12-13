# Class: FundingQueueEvents\_\_factory

[factories](../modules/factories.md).FundingQueueEvents__factory

## Constructors

### constructor

• **new FundingQueueEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"id"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"newPrevId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"backing"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"prevBacking"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ProposalBacked"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"id"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ProposalCancelled"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"id"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ProposalCompleted"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"id"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"fromPot"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"toPot"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ProposalCreated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"id"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ProposalPinged"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"id"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ProposalStakeReclaimed"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"id"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"domainTotalRep"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ProposalStaked"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`FundingQueueEvents`](../interfaces/FundingQueueEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`FundingQueueEvents`](../interfaces/FundingQueueEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): `FundingQueueEventsInterface`

#### Returns

`FundingQueueEventsInterface`
