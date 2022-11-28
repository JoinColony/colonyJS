# Class: ColonyNetwork

## Constructors

### constructor

• **new ColonyNetwork**(`signerOrProvider`, `options?`)

Creates a new instance to connect to the ColonyNetwork

This is your main entry point to talk to the Colony Network Smart Contracts.
From here you should be able to instantiate all the required instances for Colonies and their extensions.

**`Example`**

```typescript
import { providers } from 'ethers';
import { ColonyNetwork, Tokens } from '@colony/sdk';

// Connect directly to the deployed Colony Network on Gnosis Chain
const provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc2/');
const colonyNetwork = new ColonyNetwork(provider);
// Now you could call functions on the colonyNetwork, like `colonyNetwork.getMetaColony()`
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signerOrProvider` | `SignerOrProvider` | An _ethers_ compatible Signer or Provider instance |
| `options?` | [`ColonyNetworkOptions`](../interfaces/ColonyNetworkOptions.md) | Optional custom [ColonyNetworkOptions](../interfaces/ColonyNetworkOptions.md) |

## Properties

### config

• **config**: `ColonyNetworkConfig`

___

### ipfs

• **ipfs**: `IpfsMetadata`

___

### network

• **network**: [`Network`](../enums/Network.md)

___

### networkClient

• **networkClient**: `ColonyNetworkClient`

___

### signerOrProvider

• **signerOrProvider**: `SignerOrProvider`

## Methods

### createColony

▸ **createColony**(`tokenAddress`, `colonyLabel`): `Promise`<[`TxCreator`](TxCreator.md)<`ColonyNetworkClient`, ``"createColony(address,uint256,string)"``, { `colonyAddress?`: `string` ; `colonyId?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |
| `colonyLabel` | `string` |

#### Returns

`Promise`<[`TxCreator`](TxCreator.md)<`ColonyNetworkClient`, ``"createColony(address,uint256,string)"``, { `colonyAddress?`: `string` ; `colonyId?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>\>

___

### createColonyWithMetadata

▸ **createColonyWithMetadata**(`tokenAddress`, `colonyLabel`, `metadata`): `Promise`<[`TxCreator`](TxCreator.md)<`ColonyNetworkClient`, ``"createColony(address,uint256,string,string)"``, { `colonyAddress?`: `string` ; `colonyId?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |
| `colonyLabel` | `string` |
| `metadata` | `string` \| `ColonyMetadata` |

#### Returns

`Promise`<[`TxCreator`](TxCreator.md)<`ColonyNetworkClient`, ``"createColony(address,uint256,string,string)"``, { `colonyAddress?`: `string` ; `colonyId?`: `BigNumber` ; `token?`: `string`  }, [`MetadataType`](../enums/MetadataType.md)\>\>

___

### deployToken

▸ **deployToken**(`name`, `symbol`, `decimals?`): `Promise`<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `symbol` | `string` | `undefined` |
| `decimals` | `number` | `18` |

#### Returns

`Promise`<`string`\>

___

### getColony

▸ **getColony**(`address`): `Promise`<[`Colony`](Colony.md)\>

Get a new instance of a Colony

Use this function to instantiate a new `Colony` by providing the Colony's address

**`Remarks`**

Colony contracts are versioned. If the deployed Colony version does not match the supported version an error will be thrown

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The Colony's address |

#### Returns

`Promise`<[`Colony`](Colony.md)\>

A Colony abstaction instance

___

### getMetaColony

▸ **getMetaColony**(): `Promise`<[`Colony`](Colony.md)\>

Get a new instance of the MetaColony

Use this function to instantiate a new `Colony` for the deployed MetaColony

#### Returns

`Promise`<[`Colony`](Colony.md)\>

A Colony abstaction instance of the MetaColony
