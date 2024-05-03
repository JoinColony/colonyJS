# Class: StreamingPaymentsEvents\_\_factory

## Constructors

### constructor

• **new StreamingPaymentsEvents__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` ; `inputs`: readonly [] ; `name`: ``"ExtensionInitialised"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"streamingPaymentId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"PaymentTokenUpdated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"streamingPaymentId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"token"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"StreamingPaymentClaimed"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"streamingPaymentId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"StreamingPaymentCreated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"streamingPaymentId"`` ; `type`: ``"uint256"``  }] ; `name`: ``"ClaimWaived"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"streamingPaymentId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"endTime"`` ; `type`: ``"uint256"``  }] ; `name`: ``"EndTimeSet"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"streamingPaymentId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"amount"`` ; `type`: ``"uint256"``  }] ; `name`: ``"PaymentTokenUpdated"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"agent"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"uint256"`` ; `name`: ``"streamingPaymentId"`` ; `type`: ``"uint256"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"startTime"`` ; `type`: ``"uint256"``  }] ; `name`: ``"StartTimeSet"`` ; `type`: ``"event"``  }]

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`StreamingPaymentsEvents`](../interfaces/StreamingPaymentsEvents.StreamingPaymentsEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`StreamingPaymentsEvents`](../interfaces/StreamingPaymentsEvents.StreamingPaymentsEvents.md)

___

### createInterface

▸ `Static` **createInterface**(): [`StreamingPaymentsEventsInterface`](../interfaces/StreamingPaymentsEvents.StreamingPaymentsEventsInterface.md)

#### Returns

[`StreamingPaymentsEventsInterface`](../interfaces/StreamingPaymentsEvents.StreamingPaymentsEventsInterface.md)
