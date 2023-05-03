---
description: A guide on how to handle IPFS metadata in Colony. We explore how to use a different IPFS adapter to let Colony SDK do the heavy lifting.

sidebar_position: 2
---

# Metadata within Colony

Storing data on chain is expensive. Metadata is stored on IPFS and our solution to enrich on-chain data with additional information and only used in very few methods around Colony. We also provide ways to automatically create and store metadata for your transaction.

Metadata is stored on IPFS and needs to be formatted in a certain way. There are multiple ways of handling metadata:

## Manual creation of the data as JSON object

To create the metadata objects manually you can use the `@colony/colony-event-metadata-parser`, package which can de(serialize) the data for you in the required format. Read more about it [here](https://github.com/JoinColony/ColonyJS/packages/event-data). Once you have the stringified data, you'd upload it to IPFS using your preferred upload and pinning method.

## Let Colony SDK take care of it

For this an upload/pin compatible [`IpfsAdapter`](../api/interfaces/IpfsAdapter.md) has to be used (like the [`PinataIpfsAdapter`](../api/classes/PinataAdapter.md)). With that you can provide the metadata as a JavaScript object to the relevant method and Colony SDK will take care of proper serialization and pinning/uploading it to IPFS.

