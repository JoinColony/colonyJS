# Class: StakedExpenditureEvents\_\_factory

## Constructors

### constructor

• **new StakedExpenditureEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"expenditureId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ExpenditureCancelled"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"creator"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"expenditureId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"stake"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ExpenditureMadeViaStake"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"stakeFraction"`` ; `type`: ``"uint256"``  }] ; `name`: ``"StakeFractionSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"expenditureId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"StakeReclaimed"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"expenditureId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ExpenditureCancelled"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"expenditureId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"bool"`` ; `name`: ``"punished"`` ; `type`: ``"bool"``  }] ; `name`: ``"ExpenditureStakerPunished"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"stakeFraction"`` ; `type`: ``"uint256"``  }] ; `name`: ``"StakeFractionSet"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`StakedExpenditureEvents`](../interfaces/StakedExpenditureEvents.StakedExpenditureEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`StakedExpenditureEvents`](../interfaces/StakedExpenditureEvents.StakedExpenditureEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`StakedExpenditureEventsInterface`](../interfaces/StakedExpenditureEvents.StakedExpenditureEventsInterface.md)

#### Returns

[`StakedExpenditureEventsInterface`](../interfaces/StakedExpenditureEvents.StakedExpenditureEventsInterface.md)
