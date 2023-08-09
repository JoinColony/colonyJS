# Class: PinataAdapter

A Colony SDK IPFS adapter for Pinata (https://pinata.cloud)

In order to use this, sign up for Pinata (if you haven't already) and generate a token. Then either supply this token when instantiating the class (example below) or provide it via the environment variable `COLONY_IPFS_PINATA_TOKEN` (when using NodeJS). Then provide an instance of this class to the [ColonyNetwork](ColonyNetwork.md) or [ColonyEventManager](ColonyEventManager.md) classes (depending on your needs).

:::danger Tokens are sensitive data
Do not check in your Pinata token into version control and **DO NOT EMBED IT INTO YOUR FRONTEND BUNDLE**.
:::

**`Example`**

```typescript
import { ColonyNetwork, PinataAdapter } from '@colony/sdk';
const pinataAdapter = new PinataAdapter('[YOUR_PINANTA_JWT_TOKEN]');
// Immediately executing async function
(async function() {
  const colonyNetwork = ColonyNetwork.init(signerOrProvider, { ipfsAdapter: pinataAdapter });
})();
```

## Implements

- [`IpfsAdapter`](../interfaces/IpfsAdapter.md)

## Constructors

### constructor

• **new PinataAdapter**(`pinataToken?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pinataToken?` | `string` |

## Properties

### name

• **name**: `string`

Name for the IpfsAdapter. All uppercase please

#### Implementation of

[IpfsAdapter](../interfaces/IpfsAdapter.md).[name](../interfaces/IpfsAdapter.md#name)

## Methods

### getIpfsUrl

▸ **getIpfsUrl**(`cid`): `string`

Should return the whole URL to an IPFS resource on the corresponding gateway (e.g. https://my-ipfs-gateway/ipfs/QmXxxxXXxxXxXxXxxxXXxxxXxXXx).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | `string` | An IPFS hash (CID) |

#### Returns

`string`

The URL to an ipfs resource

#### Implementation of

[IpfsAdapter](../interfaces/IpfsAdapter.md).[getIpfsUrl](../interfaces/IpfsAdapter.md#getipfsurl)

___

### uploadJson

▸ **uploadJson**(`jsonString`): `Promise`<`string`\>

Function to upload a JSON string to IPFS. Takes the string as an argument (use `JSON.stringify()` if needbe). Returns a promise that resolves to the IPFS hash (CID)

**`Remarks`**

This function should ideally **pin** your data on the relevant service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonString` | `string` | JSON string to upload (and pin) to IPFS |

#### Returns

`Promise`<`string`\>

Promise to IPFS hash (CID)

#### Implementation of

[IpfsAdapter](../interfaces/IpfsAdapter.md).[uploadJson](../interfaces/IpfsAdapter.md#uploadjson)
