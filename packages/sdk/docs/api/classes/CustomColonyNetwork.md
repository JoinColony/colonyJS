# Class: CustomColonyNetwork

## Constructors

### constructor

• **new CustomColonyNetwork**(`signerOrProvider`, `abi`, `options?`)

Creates a new custom instance of the custom ColonyNetwork

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signerOrProvider` | [`SignerOrProvider`](../README.md#signerorprovider) | An _ethers_ compatible Signer or Provider instance |
| `abi` | `ContractInterface` | JSON ABI of the custom ColonyNetwork contract |
| `options?` | [`ColonyNetworkOptions`](../interfaces/ColonyNetworkOptions.md) | Optional custom [ColonyNetworkOptions](../interfaces/ColonyNetworkOptions.md) |

## Properties

### ipfs

• **ipfs**: [`IpfsMetadata`](IpfsMetadata.md)

The IPFS adapter for Metadata. Defaults to a read-only adapter

___

### network

• **network**: [`Network`](../enums/Network.md)

The network the client is connected to. Defaults to Gnosis chain

___

### signerOrProvider

• **signerOrProvider**: [`SignerOrProvider`](../README.md#signerorprovider)

An ethers.js [Signer](https://docs.ethers.org/v5/api/signer/#Signer) or [Provider](https://docs.ethers.org/v5/api/providers/).

E.g. a [Wallet](https://docs.ethers.org/v5/api/signer/#Wallet) or a [Web3Provider](https://docs.ethers.org/v5/api/providers/other/#Web3Provider) (MetaMask)

## Methods

### getInternalNetworkContract

▸ **getInternalNetworkContract**(): `IColonyNetwork`

#### Returns

`IColonyNetwork`

___

### getSigner

▸ **getSigner**(): `Signer`

#### Returns

`Signer`
