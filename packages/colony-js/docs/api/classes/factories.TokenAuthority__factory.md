# Class: TokenAuthority\_\_factory

[factories](../modules/factories.md).TokenAuthority__factory

## Hierarchy

- `ContractFactory`

  ↳ **`TokenAuthority__factory`**

## Constructors

### constructor

• **new TokenAuthority__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `TokenAuthorityConstructorParams` |

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

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"_token"`` ; `type`: ``"address"``  }, { `internalType`: ``"address"`` ; `name`: ``"_colony"`` ; `type`: ``"address"``  }, { `internalType`: ``"address[]"`` ; `name`: ``"allowedToTransfer"`` ; `type`: ``"address[]"``  }] ; `stateMutability`: ``"nonpayable"`` ; `type`: ``"constructor"``  }, { `inputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``"src"`` ; `type`: ``"address"``  }, { `internalType`: ``"address"`` ; `name`: ``"dst"`` ; `type`: ``"address"``  }, { `internalType`: ``"bytes4"`` ; `name`: ``"sig"`` ; `type`: ``"bytes4"``  }] ; `name`: ``"canCall"`` ; `outputs`: readonly [{ `internalType`: ``"bool"`` ; `name`: ``""`` ; `type`: ``"bool"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }, { `inputs`: readonly [] ; `name`: ``"token"`` ; `outputs`: readonly [{ `internalType`: ``"address"`` ; `name`: ``""`` ; `type`: ``"address"``  }] ; `stateMutability`: ``"view"`` ; `type`: ``"function"``  }]

___

### bytecode

▪ `Static` `Readonly` **bytecode**: ``"0x60a060405234801561000f575f80fd5b5060405161054638038061054683398101604081905261002e9161023f565b6001600160a01b0383811660805282165f9081526020818152604080832063a9059cbb60e01b84529091528082208054600160ff19918216811790925563140e25ad60e31b845282842080548216831790556340c10f1960e01b845291832080549092161790557fa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b907f23b872dd7302113369cda2901243429419bec145408fa8b352b3dd92b66c680b907fa0712d680358d64f694230b7cc0b277c73686bdf768385d55cd7c547d0ffd30e907f40c10f19c047ae7dfa66d6312b683d2ea3dfbcb4159e96b967c5f4b0a86f2842905b85518110156102035760015f8088848151811061013d5761013d610321565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020015f205f876001600160e01b0319166001600160e01b03191681526020019081526020015f205f6101000a81548160ff02191690831515021790555060015f808884815181106101b3576101b3610321565b6020908102919091018101516001600160a01b031682528181019290925260409081015f9081206001600160e01b0319891682529092529020805460ff191691151591909117905560010161011e565b5050505050505050610335565b80516001600160a01b0381168114610226575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f805f60608486031215610251575f80fd5b61025a84610210565b92506020610269818601610210565b60408601519093506001600160401b0380821115610285575f80fd5b818701915087601f830112610298575f80fd5b8151818111156102aa576102aa61022b565b8060051b604051601f19603f830116810181811085821117156102cf576102cf61022b565b60405291825284820192508381018501918a8311156102ec575f80fd5b938501935b828510156103115761030285610210565b845293850193928501926102f1565b8096505050505050509250925092565b634e487b7160e01b5f52603260045260245ffd5b6080516101f46103525f395f81816065015260de01526101f45ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c8063b700961314610038578063fc0c546a14610060575b5f80fd5b61004b61004636600461016e565b61009f565b60405190151581526020015b60405180910390f35b6100877f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610057565b5f6001600160e01b03198216630852cd8d60e31b14806100cf57506001600160e01b03198216632770a7eb60e21b145b156100dc5750600161014c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b03161461011c57505f61014c565b506001600160a01b0383165f908152602081815260408083206001600160e01b03198516845290915290205460ff165b9392505050565b80356001600160a01b0381168114610169575f80fd5b919050565b5f805f60608486031215610180575f80fd5b61018984610153565b925061019760208501610153565b915060408401356001600160e01b0319811681146101b3575f80fd5b80915050925092509256fea2646970667358221220f82f6b7574b17f83b7dc40dc47b46bbe00257a57673ffe2ceaaa42e0837c083b64736f6c63430008190033"``

## Methods

### attach

▸ **attach**(`address`): [`TokenAuthority`](../interfaces/TokenAuthority.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`TokenAuthority`](../interfaces/TokenAuthority.md)

#### Overrides

ContractFactory.attach

___

### connect

▸ **connect**(`signer`): [`TokenAuthority__factory`](factories.TokenAuthority__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`TokenAuthority__factory`](factories.TokenAuthority__factory.md)

#### Overrides

ContractFactory.connect

___

### deploy

▸ **deploy**(`_token`, `_colony`, `allowedToTransfer`, `overrides?`): `Promise`<[`TokenAuthority`](../interfaces/TokenAuthority.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_colony` | `string` |
| `allowedToTransfer` | `string`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<[`TokenAuthority`](../interfaces/TokenAuthority.md)\>

#### Overrides

ContractFactory.deploy

___

### getDeployTransaction

▸ **getDeployTransaction**(`_token`, `_colony`, `allowedToTransfer`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_colony` | `string` |
| `allowedToTransfer` | `string`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`TokenAuthority`](../interfaces/TokenAuthority.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`TokenAuthority`](../interfaces/TokenAuthority.md)

___

### createInterface

▸ `Static` **createInterface**(): `TokenAuthorityInterface`

#### Returns

`TokenAuthorityInterface`

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
