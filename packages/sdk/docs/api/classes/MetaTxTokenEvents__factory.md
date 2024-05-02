# Class: MetaTxTokenEvents\_\_factory

## Constructors

### constructor

• **new MetaTxTokenEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Approval"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Burn"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Mint"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Transfer"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`MetaTxTokenEvents`](../interfaces/MetaTxTokenEvents.MetaTxTokenEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`MetaTxTokenEvents`](../interfaces/MetaTxTokenEvents.MetaTxTokenEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`MetaTxTokenEventsInterface`](../interfaces/MetaTxTokenEvents.MetaTxTokenEventsInterface.md)

#### Returns

[`MetaTxTokenEventsInterface`](../interfaces/MetaTxTokenEvents.MetaTxTokenEventsInterface.md)
