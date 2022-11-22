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
| `options?` | `ColonyNetworkOptions` | Optional custom ColonyNetworkOptions |

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

## Methods

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
