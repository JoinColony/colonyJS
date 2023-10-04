# Class: ColonyTokenFactory

## Hierarchy

- `ContractFactory`

  ↳ **`ColonyTokenFactory`**

## Constructors

### constructor

• **new ColonyTokenFactory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `MetaTxTokenConstructorParams` |

#### Overrides

ContractFactory.constructor

## Properties

### bytecode

• `Readonly` **bytecode**: `string`

#### Inherited from

ContractFactory.bytecode

___

### interface

• `Readonly` **interface**: `Interface`

#### Inherited from

ContractFactory.interface

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

ContractFactory.signer

___

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"string"`` ; `name`: ``"_name"`` ; `type`: ``"string"``  }, { `internalType`: ``"string"`` ; `name`: ``"_symbol"`` ; `type`: ``"string"``  }, { `internalType`: ``"uint8"`` ; `name`: ``"_decimals"`` ; `type`: ``"uint8"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"constructor"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Approval"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Burn"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"authority"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetAuthority"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }] ; `name`: ``"LogSetOwner"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``false`` ; `internalType`: ``"address"`` ; `name`: ``"user"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"address payable"`` ; `name`: ``"relayerAddress"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"bytes"`` ; `name`: ``"functionSignature"`` ; `type`: ``"bytes"``  }] ; `name`: ``"MetaTransactionExecuted"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Mint"`` ; `type`: ``"event"``  }, { `anonymous`: ``false`` ; `inputs`: readonly [{ `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `indexed`: ``true`` ; `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `indexed`: ``false`` ; `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"Transfer"`` ; `type`: ``"event"``  }, { `inputs`: readonly [] ; `name`: ``"DOMAIN_SEPARATOR"`` ; `outputs`: readonly [{ `internalType`: ``"bytes32"`` ; `name`: ``""`` ; `type`: ``"bytes32"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"PERMIT_TYPEHASH"`` ; `outputs`: readonly [{ `internalType`: ``"bytes32"`` ; `name`: ``""`` ; `type`: ``"bytes32"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }] ; `name`: ``"allowance"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``""`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"approve"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"authority"`` ; `outputs`: readonly [{ `internalType`: ``"contract DSAuthority"`` ; `name`: ``""`` ; `type`: ``"address"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }] ; `name`: ``"balanceOf"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``""`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"decimals"`` ; `outputs`: readonly [{ `internalType`: ``"uint8"`` ; `name`: ``""`` ; `type`: ``"uint8"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"_user"`` ; `type`: ``"address"``  }, { `internalType`: ``"bytes"`` ; `name`: ``"_payload"`` ; `type`: ``"bytes"``  }, { `internalType`: ``"bytes32"`` ; `name`: ``"_sigR"`` ; `type`: ``"bytes32"``  }, { `internalType`: ``"bytes32"`` ; `name`: ``"_sigS"`` ; `type`: ``"bytes32"``  }, { `internalType`: ``"uint8"`` ; `name`: ``"_sigV"`` ; `type`: ``"uint8"``  }] ; `name`: ``"executeMetaTransaction"`` ; `outputs`: readonly [{ `internalType`: ``"bytes"`` ; `name`: ``""`` ; `type`: ``"bytes"``  }] ; `stateMutability`: ``"payable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"getChainId"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``""`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"locked"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"name"`` ; `outputs`: readonly [{ `internalType`: ``"string"`` ; `name`: ``""`` ; `type`: ``"string"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"owner"`` ; `outputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``""`` ; `type`: ``"address"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"contract DSAuthority"`` ; `name`: ``"authority_"`` ; `type`: ``"address"``  }] ; `name`: ``"setAuthority"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"owner_"`` ; `type`: ``"address"``  }] ; `name`: ``"setOwner"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"symbol"`` ; `outputs`: readonly [{ `internalType`: ``"string"`` ; `name`: ``""`` ; `type`: ``"string"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"totalSupply"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``""`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"transfer"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"_owner"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"_nonce"`` ; `type`: ``"uint256"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"_chainId"`` ; `type`: ``"uint256"``  }, { `internalType`: ``"bytes"`` ; `name`: ``"_payload"`` ; `type`: ``"bytes"``  }, { `internalType`: ``"bytes32"`` ; `name`: ``"_sigR"`` ; `type`: ``"bytes32"``  }, { `internalType`: ``"bytes32"`` ; `name`: ``"_sigS"`` ; `type`: ``"bytes32"``  }, { `internalType`: ``"uint8"`` ; `name`: ``"_sigV"`` ; `type`: ``"uint8"``  }] ; `name`: ``"verify"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"_user"`` ; `type`: ``"address"``  }] ; `name`: ``"getMetatransactionNonce"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``"nonce"`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"_user"`` ; `type`: ``"address"``  }] ; `name`: ``"nonces"`` ; `outputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``"nonce"`` ; `type`: ``"uint256"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"transferFrom"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"mint"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"mint"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"burn"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"guy"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"wad"`` ; `type`: ``"uint256"``  }] ; `name`: ``"burn"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"unlock"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"owner"`` ; `type`: ``"address"``  }, { `internalType`: ``"address"`` ; `name`: ``"spender"`` ; `type`: ``"address"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"value"`` ; `type`: ``"uint256"``  }, { `internalType`: ``"uint256"`` ; `name`: ``"deadline"`` ; `type`: ``"uint256"``  }, { `internalType`: ``"uint8"`` ; `name`: ``"v"`` ; `type`: ``"uint8"``  }, { `internalType`: ``"bytes32"`` ; `name`: ``"r"`` ; `type`: ``"bytes32"``  }, { `internalType`: ``"bytes32"`` ; `name`: ``"s"`` ; `type`: ``"bytes32"``  }] ; `name`: ``"permit"`` ; `outputs`: readonly [] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"function"``  }]

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x60c06040523480156200001157600080fd5b50604051620020c5380380620020c5833981016040819052620000349162000328565b60008060018162000044620001bd565b6001600160a01b031681526020810191909152604001600090812091909155556200006e620001bd565b600480546001600160a01b0319166001600160a01b039290921691909117905562000098620001bd565b6001600160a01b03167fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9460405160405180910390a26006620000db84826200043c565b506005620000ea83826200043c565b5060ff81166080526007805460ff1916600117905560405146907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90620001349060069062000508565b60408051918290038220828201825260018352603160f81b6020938401528151928301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060820152608081018290523060a082015260c00160408051601f19818403018152919052805160209091012060a052506200058692505050565b6000363330148015620001d1575060348110155b156200025c57600080368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e881146200024b5733935050505090565b5001516001600160a01b0316919050565b3391505090565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200028b57600080fd5b81516001600160401b0380821115620002a857620002a862000263565b604051601f8301601f19908116603f01168101908282118183101715620002d357620002d362000263565b81604052838152602092508683858801011115620002f057600080fd5b600091505b83821015620003145785820183015181830184015290820190620002f5565b600093810190920192909252949350505050565b6000806000606084860312156200033e57600080fd5b83516001600160401b03808211156200035657600080fd5b620003648783880162000279565b945060208601519150808211156200037b57600080fd5b506200038a8682870162000279565b925050604084015160ff81168114620003a257600080fd5b809150509250925092565b600181811c90821680620003c257607f821691505b602082108103620003e357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200043757600081815260208120601f850160051c81016020861015620004125750805b601f850160051c820191505b8181101562000433578281556001016200041e565b5050505b505050565b81516001600160401b0381111562000458576200045862000263565b6200047081620004698454620003ad565b84620003e9565b602080601f831160018114620004a857600084156200048f5750858301515b600019600386901b1c1916600185901b17855562000433565b600085815260208120601f198616915b82811015620004d957888601518255948401946001909101908401620004b8565b5085821015620004f85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200051881620003ad565b6001828116801562000533576001811462000549576200057a565b60ff19841687528215158302870194506200057a565b8760005260208060002060005b85811015620005715781548a82015290840190820162000556565b50505082870194505b50929695505050505050565b60805160a051611b12620005b36000396000818161030f0152610fb7015260006102b60152611b126000f3fe60806040526004361061019c5760003560e01c806370a08231116100ec578063a69df4b51161008a578063bf7e214f11610064578063bf7e214f146104df578063cf309012146104ff578063d505accf14610519578063dd62ed3e1461053957600080fd5b8063a69df4b5146104aa578063a9059cbb146104bf578063b3eac1d8146103e757600080fd5b80638da5cb5b116100c65780638da5cb5b1461041d57806395d89b41146104555780639dc29fac1461046a578063a0712d681461048a57600080fd5b806370a08231146103915780637a9e5e4b146103c75780637ecebe00146103e757600080fd5b806330adf81f116101595780633644e515116101335780633644e515146102fd57806340c10f191461033157806342966c68146103515780636281133d1461037157600080fd5b806330adf81f14610270578063313ce567146102a45780633408e470146102ea57600080fd5b806306fdde03146101a1578063095ea7b3146101cc5780630c53c51c146101fc57806313af40351461020f57806318160ddd1461023157806323b872dd14610250575b600080fd5b3480156101ad57600080fd5b506101b661057f565b6040516101c391906115e0565b60405180910390f35b3480156101d857600080fd5b506101ec6101e7366004611608565b61060d565b60405190151581526020016101c3565b6101b661020a3660046116ed565b6106a0565b34801561021b57600080fd5b5061022f61022a366004611761565b610889565b005b34801561023d57600080fd5b506000545b6040519081526020016101c3565b34801561025c57600080fd5b506101ec61026b36600461177e565b61090c565b34801561027c57600080fd5b506102427f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b3480156102b057600080fd5b506102d87f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016101c3565b3480156102f657600080fd5b5046610242565b34801561030957600080fd5b506102427f000000000000000000000000000000000000000000000000000000000000000081565b34801561033d57600080fd5b5061022f61034c366004611608565b610980565b34801561035d57600080fd5b5061022f61036c3660046117bf565b610a6f565b34801561037d57600080fd5b506101ec61038c3660046117d8565b610a83565b34801561039d57600080fd5b506102426103ac366004611761565b6001600160a01b031660009081526001602052604090205490565b3480156103d357600080fd5b5061022f6103e2366004611761565b610bd7565b3480156103f357600080fd5b50610242610402366004611761565b6001600160a01b031660009081526008602052604090205490565b34801561042957600080fd5b5060045461043d906001600160a01b031681565b6040516001600160a01b0390911681526020016101c3565b34801561046157600080fd5b506101b6610c48565b34801561047657600080fd5b5061022f610485366004611608565b610c55565b34801561049657600080fd5b5061022f6104a53660046117bf565b610e4c565b3480156104b657600080fd5b5061022f610e84565b3480156104cb57600080fd5b506101ec6104da366004611608565b610eb7565b3480156104eb57600080fd5b5060035461043d906001600160a01b031681565b34801561050b57600080fd5b506007546101ec9060ff1681565b34801561052557600080fd5b5061022f61053436600461185f565b610ed2565b34801561054557600080fd5b506102426105543660046118cd565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6006805461058c90611906565b80601f01602080910402602001604051908101604052809291908181526020018280546105b890611906565b80156106055780601f106105da57610100808354040283529160200191610605565b820191906000526020600020905b8154815290600101906020018083116105e857829003601f168201915b505050505081565b6000816002600061061c6111c1565b6001600160a01b03908116825260208083019390935260409182016000908120918816808252919093529120919091556106546111c1565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161068e91815260200190565b60405180910390a35060015b92915050565b60606106cf866106c5886001600160a01b031660009081526008602052604090205490565b4688888888610a83565b6107325760405162461bcd60e51b815260206004820152602960248201527f6d6574617472616e73616374696f6e2d7369676e65722d7369676e617475726560448201526805adad2e6dac2e8c6d60bb1b60648201526084015b60405180910390fd5b61073b86611264565b600080306001600160a01b0316877f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e88a60405160200161077d93929190611940565b60408051601f198184030181529082905261079791611979565b6000604051808303816000865af19150503d80600081146107d4576040519150601f19603f3d011682016040523d82523d6000602084013e6107d9565b606091505b50915091508161083c5760405162461bcd60e51b815260206004820152602860248201527f636f6c6f6e792d6d65746174782d66756e6374696f6e2d63616c6c2d756e737560448201526718d8d95cdcd99d5b60c21b6064820152608401610729565b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b886108666111c1565b8960405161087693929190611995565b60405180910390a1979650505050505050565b6108a66108946111c1565b6000356001600160e01b031916611290565b6108c25760405162461bcd60e51b8152600401610729906119ca565b600480546001600160a01b0319166001600160a01b0383169081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b60075460009060ff161561096d576109256108946111c1565b61096d5760405162461bcd60e51b815260206004820152601960248201527818dbdb1bdb9e4b5d1bdad95b8b5d5b985d5d1a1bdc9a5cd959603a1b6044820152606401610729565b61097884848461136b565b949350505050565b61098b6108946111c1565b6109a75760405162461bcd60e51b8152600401610729906119ca565b6001600160a01b038216600090815260016020526040812080548392906109cf908490611a0e565b92505081905550806000808282546109e79190611a0e565b90915550506040518181526001600160a01b038316907f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d41213968859060200160405180910390a26040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b610a80610a7a6111c1565b82610c55565b50565b600080610b0088308989604051602001610aa09493929190611a21565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b6040805160008082526020820180845284905260ff87169282019290925260608101889052608081018790529192509060019060a0016020604051602081039080840390855afa158015610b58573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610bbb5760405162461bcd60e51b815260206004820152601f60248201527f636f6c6f6e792d6d65746174782d696e76616c69642d7369676e6174757265006044820152606401610729565b6001600160a01b038a8116911614915050979650505050505050565b610be26108946111c1565b610bfe5760405162461bcd60e51b8152600401610729906119ca565b600380546001600160a01b0319166001600160a01b0383169081179091556040517f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada490600090a250565b6005805461058c90611906565b610c5d6111c1565b6001600160a01b0316826001600160a01b031614610d5d576001600160a01b03821660009081526002602052604081208291610c976111c1565b6001600160a01b03166001600160a01b03168152602001908152602001600020541015610d065760405162461bcd60e51b815260206004820152601e60248201527f64732d746f6b656e2d696e73756666696369656e742d617070726f76616c00006044820152606401610729565b6001600160a01b03821660009081526002602052604081208291610d286111c1565b6001600160a01b03166001600160a01b031681526020019081526020016000206000828254610d579190611a67565b90915550505b6001600160a01b038216600090815260016020526040902054811115610dc55760405162461bcd60e51b815260206004820152601d60248201527f64732d746f6b656e2d696e73756666696369656e742d62616c616e63650000006044820152606401610729565b6001600160a01b03821660009081526001602052604081208054839290610ded908490611a67565b9250508190555080600080828254610e059190611a67565b90915550506040518181526001600160a01b038316907fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca59060200160405180910390a25050565b610e576108946111c1565b610e735760405162461bcd60e51b8152600401610729906119ca565b610a80610e7e6111c1565b82610980565b610e8f6108946111c1565b610eab5760405162461bcd60e51b8152600401610729906119ca565b6007805460ff19169055565b6000610ecb610ec46111c1565b848461090c565b9392505050565b60075460ff1615610f3057610ee86108946111c1565b610f305760405162461bcd60e51b815260206004820152601960248201527818dbdb1bdb9e4b5d1bdad95b8b5d5b985d5d1a1bdc9a5cd959603a1b6044820152606401610729565b42841015610f805760405162461bcd60e51b815260206004820152601d60248201527f636f6c6f6e792d746f6b656e2d657870697265642d646561646c696e650000006044820152606401610729565b6040805180820182526002815261190160f01b6020808301919091526001600160a01b038a166000908152600890915291822080547f0000000000000000000000000000000000000000000000000000000000000000917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918c918c918c918861100983611a7a565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e0016040516020818303038152906040528051906020012060405160200161106d93929190611a93565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156110d8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061110e5750886001600160a01b0316816001600160a01b0316145b61115a5760405162461bcd60e51b815260206004820152601e60248201527f636f6c6f6e792d746f6b656e2d696e76616c69642d7369676e617475726500006044820152606401610729565b6001600160a01b038981166000818152600260209081526040808320948d16808452948252918290208b905590518a81527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050505050505050565b60003633301480156111d4575060348110155b1561125d57600080368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e8811461124c5733935050505090565b5001516001600160a01b0316919050565b3391505090565b6001600160a01b038116600090815260086020526040812080549161128883611a7a565b919050555050565b6000306001600160a01b038416036112aa5750600161069a565b6004546001600160a01b03908116908416036112c85750600161069a565b6003546001600160a01b03166112e05750600061069a565b60035460405163b700961360e01b81526001600160a01b0385811660048301523060248301526001600160e01b0319851660448301529091169063b700961390606401602060405180830381865afa158015611340573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113649190611aba565b905061069a565b60006113756111c1565b6001600160a01b0316846001600160a01b031614611475576001600160a01b038416600090815260026020526040812083916113af6111c1565b6001600160a01b03166001600160a01b0316815260200190815260200160002054101561141e5760405162461bcd60e51b815260206004820152601e60248201527f64732d746f6b656e2d696e73756666696369656e742d617070726f76616c00006044820152606401610729565b6001600160a01b038416600090815260026020526040812083916114406111c1565b6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461146f9190611a67565b90915550505b6001600160a01b0384166000908152600160205260409020548211156114dd5760405162461bcd60e51b815260206004820152601d60248201527f64732d746f6b656e2d696e73756666696369656e742d62616c616e63650000006044820152606401610729565b6001600160a01b03841660009081526001602052604081208054849290611505908490611a67565b90915550506001600160a01b03831660009081526001602052604081208054849290611532908490611a0e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161157e91815260200190565b60405180910390a35060019392505050565b60005b838110156115ab578181015183820152602001611593565b50506000910152565b600081518084526115cc816020860160208601611590565b601f01601f19169290920160200192915050565b602081526000610ecb60208301846115b4565b6001600160a01b0381168114610a8057600080fd5b6000806040838503121561161b57600080fd5b8235611626816115f3565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261165b57600080fd5b813567ffffffffffffffff8082111561167657611676611634565b604051601f8301601f19908116603f0116810190828211818310171561169e5761169e611634565b816040528381528660208588010111156116b757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff811681146116e857600080fd5b919050565b600080600080600060a0868803121561170557600080fd5b8535611710816115f3565b9450602086013567ffffffffffffffff81111561172c57600080fd5b6117388882890161164a565b9450506040860135925060608601359150611755608087016116d7565b90509295509295909350565b60006020828403121561177357600080fd5b8135610ecb816115f3565b60008060006060848603121561179357600080fd5b833561179e816115f3565b925060208401356117ae816115f3565b929592945050506040919091013590565b6000602082840312156117d157600080fd5b5035919050565b600080600080600080600060e0888a0312156117f357600080fd5b87356117fe816115f3565b96506020880135955060408801359450606088013567ffffffffffffffff81111561182857600080fd5b6118348a828b0161164a565b9450506080880135925060a0880135915061185160c089016116d7565b905092959891949750929550565b600080600080600080600060e0888a03121561187a57600080fd5b8735611885816115f3565b96506020880135611895816115f3565b955060408801359450606088013593506118b1608089016116d7565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156118e057600080fd5b82356118eb816115f3565b915060208301356118fb816115f3565b809150509250929050565b600181811c9082168061191a57607f821691505b60208210810361193a57634e487b7160e01b600052602260045260246000fd5b50919050565b60008451611952818460208901611590565b919091019283525060601b6bffffffffffffffffffffffff19166020820152603401919050565b6000825161198b818460208701611590565b9190910192915050565b6001600160a01b038481168252831660208201526060604082018190526000906119c1908301846115b4565b95945050505050565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069a5761069a6119f8565b8481526bffffffffffffffffffffffff198460601b16602082015282603482015260008251611a57816054850160208701611590565b9190910160540195945050505050565b8181038181111561069a5761069a6119f8565b600060018201611a8c57611a8c6119f8565b5060010190565b60008451611aa5818460208901611590565b91909101928352506020820152604001919050565b600060208284031215611acc57600080fd5b81518015158114610ecb57600080fdfea2646970667358221220844c4a6375ddfad14707f84c0aee087fcafdf263c9a1e528dd14eb089ac56de364736f6c63430008140033"``

## Methods

### attach

▸ **attach**(`address`): [`ColonyToken`](../interfaces/ColonyToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ColonyToken`](../interfaces/ColonyToken.md)

#### Overrides

ContractFactory.attach

___

### connect

▸ **connect**(`signer`): [`ColonyTokenFactory`](ColonyTokenFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ColonyTokenFactory`](ColonyTokenFactory.md)

#### Overrides

ContractFactory.connect

___

### deploy

▸ **deploy**(`_name`, `_symbol`, `_decimals`, `overrides?`): `Promise`<[`ColonyToken`](../interfaces/ColonyToken.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_name` | `string` |
| `_symbol` | `string` |
| `_decimals` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<[`ColonyToken`](../interfaces/ColonyToken.md)\>

#### Overrides

ContractFactory.deploy

___

### getDeployTransaction

▸ **getDeployTransaction**(`_name`, `_symbol`, `_decimals`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_name` | `string` |
| `_symbol` | `string` |
| `_decimals` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ColonyToken`](../interfaces/ColonyToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ColonyToken`](../interfaces/ColonyToken.md)

___

### createInterface

▸ `Static` **createInterface**(): `MetaTxTokenInterface`

#### Returns

`MetaTxTokenInterface`

___

### fromSolidity

▸ `Static` **fromSolidity**(`compilerOutput`, `signer?`): `ContractFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compilerOutput` | `any` |
| `signer?` | `Signer` |

#### Returns

`ContractFactory`

#### Inherited from

ContractFactory.fromSolidity

___

### getContract

▸ `Static` **getContract**(`address`, `contractInterface`, `signer?`): `Contract`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `contractInterface` | `ContractInterface` |
| `signer?` | `Signer` |

#### Returns

`Contract`

#### Inherited from

ContractFactory.getContract

___

### getContractAddress

▸ `Static` **getContractAddress**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.from` | `string` |
| `tx.nonce` | `number` \| `BytesLike` \| `BigNumber` |

#### Returns

`string`

#### Inherited from

ContractFactory.getContractAddress

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

ContractFactory.getInterface