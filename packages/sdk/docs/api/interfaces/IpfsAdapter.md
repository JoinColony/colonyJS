# Interface: IpfsAdapter

## Implemented by

- [`CloudflareReadonlyAdapter`](../classes/CloudflareReadonlyAdapter.md)
- [`PinataAdapter`](../classes/PinataAdapter.md)

## Properties

### name

• **name**: `string`

Name for the IpfsAdapter. All uppercase please

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
