# Class: CoinMachineEvents\_\_factory

## Constructors

### constructor

• **new CoinMachineEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"activePeriod"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"currentPeriod"`` ; `type`: ``"uint256"``  }] ; `name`: ``"PeriodUpdated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"buyer"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"numTokens"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"totalCost"`` ; `type`: ``"uint256"``  }] ; `name`: ``"TokensBought"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"bool"`` ; `name`: ``"evolvePrice"`` ; `type`: ``"bool"``  }] ; `name`: ``"PriceEvolutionSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"whitelist"`` ; `type`: ``"address"``  }] ; `name`: ``"WhitelistSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"buyer"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"numTokens"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"totalCost"`` ; `type`: ``"uint256"``  }] ; `name`: ``"TokensBought"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`CoinMachineEvents`](../interfaces/CoinMachineEvents.CoinMachineEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`CoinMachineEvents`](../interfaces/CoinMachineEvents.CoinMachineEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`CoinMachineEventsInterface`](../interfaces/CoinMachineEvents.CoinMachineEventsInterface.md)

#### Returns

[`CoinMachineEventsInterface`](../interfaces/CoinMachineEvents.CoinMachineEventsInterface.md)
