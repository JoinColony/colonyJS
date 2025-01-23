[**API**](../README.md)

***

# Function: getContractVersion()

> **getContractVersion**(`address`, `signerOrProvider`): `Promise`\<[`ContractVersion`](../type-aliases/ContractVersion.md)\>

Get the deployed contract's version

Only works with compatible contracts, i.e. Colony contracts or their extensions.

## Parameters

### address

`string`

Address of the deployed contract

### signerOrProvider

[`SignerOrProvider`](../type-aliases/SignerOrProvider.md)

ethers compatible Signer or Provider

## Returns

`Promise`\<[`ContractVersion`](../type-aliases/ContractVersion.md)\>

The version number of the contract
