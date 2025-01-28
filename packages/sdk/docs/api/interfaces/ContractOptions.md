# Interface: ContractOptions

Additional options for instatiating Contracts within the Colony Network

## Properties

### customNetworkAddress?

> `optional` **customNetworkAddress**: `string`

A custom address for ColonyNetwork's EtherRouter contract. Useful only in manual deployments

***

### ipfsAdapter?

> `optional` **ipfsAdapter**: [`IpfsAdapter`](IpfsAdapter.md)

Provide a custom [IpfsAdapter](IpfsAdapter.md)

***

### metaTxBroadcasterEndpoint?

> `optional` **metaTxBroadcasterEndpoint**: `string`

Provide a custom metatransaction broadcaster endpoint

***

### network?

> `optional` **network**: [`Network`](../enumerations/Network.md)

The Network to connect to. See [Network](../enumerations/Network.md) for supported networks

***

### reputationOracleEndpoint?

> `optional` **reputationOracleEndpoint**: `string`

A custom endpoiunt for ColonyNetwork's Reputation Oracle. Useful only in manual deployments
