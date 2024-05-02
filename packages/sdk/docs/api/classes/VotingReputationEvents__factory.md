# Class: VotingReputationEvents\_\_factory

## Constructors

### constructor

• **new VotingReputationEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"creator"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"domainId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"MotionCreated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"escalator"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"domainId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"newDomainId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"MotionEscalated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"eventIndex"`` ; `type`: ``"uint256"``  }] ; `name`: ``"MotionEventSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"action"`` ; `type`: ``"bytes"``  }, { `indexed`: ``false`` ; `internalType`: ``"bool"`` ; `name`: ``"executed"`` ; `type`: ``"bool"``  }] ; `name`: ``"MotionFinalized"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"staker"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"vote"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"MotionRewardClaimed"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"staker"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"vote"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"MotionStaked"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"voter"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"vote"`` ; `type`: ``"uint256"``  }] ; `name`: ``"MotionVoteRevealed"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"motionId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"voter"`` ; `type`: ``"address"``  }] ; `name`: ``"MotionVoteSubmitted"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): `VotingReputationEvents`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

`VotingReputationEvents`

___

### createInterface

▸ `Static` **createInterface**(): `VotingReputationEventsInterface`

#### Returns

`VotingReputationEventsInterface`
