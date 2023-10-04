# Class: Token\_\_factory

[factories](../modules/factories.md).Token__factory

## Constructors

### constructor

• **new Token__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"string"`` ; `name`: ``"_name"`` ; `type`: ``"string"``  }, { `internalType`: ``"string"`` ; `name`: ``"_symbol"`` ; `type`: ``"string"``  }, { `internalType`: ``"uint8"`` ; `name`: ``"_decimals"`` ; `type`: ``"uint8"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"constructor"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Approval"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Burn"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Mint"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Transfer"`` ; `type`: ``"event"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }] ; `name`: ``"allowance"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``""`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"approve"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"authority"`` ; `outputs`: readonly [{ `internalType`: ``"contract DSAuthority"`` ; `name`: ``""`` ; `type`: ``"address"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }] ; `name`: ``"balanceOf"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``""`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"decimals"`` ; `outputs`: readonly [{ `internalType`: ``"uint8"`` ; `name`: ``""`` ; `type`: ``"uint8"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"locked"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"name"`` ; `outputs`: readonly [{ `internalType`: ``"string"`` ; `name`: ``""`` ; `type`: ``"string"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"owner"`` ; `outputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``""`` ; `type`: ``"address"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"contract DSAuthority"`` ; `name`: ``"authority_"`` ; `type`: ``"address"``  }] ; `name`: ``"setAuthority"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"owner_"`` ; `type`: ``"address"``  }] ; `name`: ``"setOwner"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"symbol"`` ; `outputs`: readonly [{ `internalType`: ``"string"`` ; `name`: ``""`` ; `type`: ``"string"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"totalSupply"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``""`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"transfer"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"transferFrom"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"mint"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"mint"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"burn"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"burn"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"unlock"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Token`](../interfaces/Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Token`](../interfaces/Token.md)

___

### createInterface

▸ `Static` **createInterface**(): `TokenInterface`

#### Returns

`TokenInterface`
