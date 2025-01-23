[**API**](../README.md)

***

# Class: CloudflareReadonlyAdapter

CloudflareReadonlyAdapter

A Colony SDK IPFS adapter for Cloudflare IPFS (https://developers.cloudflare.com/web3/ipfs-gateway/). It only supports reading IPFS data from the Cloudflare gateway (not uploading or pinning files).

This is the default IpfsAdapter used in Colony SDK. So in order to use this, you don't have to do anything.

## Implements

- [`IpfsAdapter`](../interfaces/IpfsAdapter.md)

## Constructors

### new CloudflareReadonlyAdapter()

> **new CloudflareReadonlyAdapter**(): [`CloudflareReadonlyAdapter`](CloudflareReadonlyAdapter.md)

#### Returns

[`CloudflareReadonlyAdapter`](CloudflareReadonlyAdapter.md)

## Properties

### name

> **name**: `string`

Name for the IpfsAdapter. All uppercase please

#### Implementation of

[`IpfsAdapter`](../interfaces/IpfsAdapter.md).[`name`](../interfaces/IpfsAdapter.md#name)

## Methods

### getIpfsUrl()

> **getIpfsUrl**(`cid`): `string`

Should return the whole URL to an IPFS resource on the corresponding gateway (e.g. https://my-ipfs-gateway/ipfs/QmXxxxXXxxXxXxXxxxXXxxxXxXXx).

#### Parameters

##### cid

`string`

An IPFS hash (CID)

#### Returns

`string`

The URL to an ipfs resource

#### Implementation of

[`IpfsAdapter`](../interfaces/IpfsAdapter.md).[`getIpfsUrl`](../interfaces/IpfsAdapter.md#getipfsurl)

***

### uploadJson()

> **uploadJson**(): `Promise`\<`string`\>

Function to upload a JSON string to IPFS. Takes the string as an argument (use `JSON.stringify()` if needbe). Returns a promise that resolves to the IPFS hash (CID)

#### Returns

`Promise`\<`string`\>

Promise to IPFS hash (CID)

#### Remarks

This function should ideally **pin** your data on the relevant service.

#### Implementation of

[`IpfsAdapter`](../interfaces/IpfsAdapter.md).[`uploadJson`](../interfaces/IpfsAdapter.md#uploadjson)
