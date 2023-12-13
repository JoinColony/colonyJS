# Class: TokenLockingEvents\_\_factory

[factories](../modules/factories.md).TokenLockingEvents__factory

## Constructors

### constructor

• **new TokenLockingEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `name`: ``"colonyNetwork"`` ; `type`: ``"address"``  }] ; `name`: ``"ColonyNetworkSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"lockCount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"TokenLocked"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"lockId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenUnlocked"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `name`: ``"timestamp"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenDeposited"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenWithdrawn"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `name`: ``"miner"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"beneficiary"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"tokensLost"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ReputationMinerPenalised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"lockedBy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"lockCount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"TokenLocked"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenClaimed"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenDeposited"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"recipient"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenTransferred"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"by"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"from"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"to"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"StakeTransferred"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"approvedBy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenApproved"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"obligatedBy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenDeobligated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"obligatedBy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"UserTokenObligated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenLockingEvents`](../interfaces/TokenLockingEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`TokenLockingEvents`](../interfaces/TokenLockingEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`TokenLockingEventsInterface`](../interfaces/TokenLockingEventsInterface.md)

#### Returns

[`TokenLockingEventsInterface`](../interfaces/TokenLockingEventsInterface.md)
