# Class: TokenEvents\_\_factory

[factories](../modules/factories.md).TokenEvents__factory

## Constructors

### constructor

• **new TokenEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Mint"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Burn"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Approval"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Transfer"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenEvents`](../interfaces/TokenEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`TokenEvents`](../interfaces/TokenEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): `TokenEventsInterface`

#### Returns

`TokenEventsInterface`
