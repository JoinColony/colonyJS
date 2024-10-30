# Interface: ContractOptions

Additional options for instatiating Contracts within the Colony Network

## Properties

### customNetworkAddress

• `Optional` **customNetworkAddress**: `string`

A custom address for ColonyNetwork's EtherRouter contract. Useful only in manual deployments

___

### ipfsAdapter

• `Optional` **ipfsAdapter**: [`IpfsAdapter`](IpfsAdapter.md)

Provide a custom [IpfsAdapter](IpfsAdapter.md)

___

### metaTxBroadcasterEndpoint

• `Optional` **metaTxBroadcasterEndpoint**: `string`

Provide a custom metatransaction broadcaster endpoint

___

### network

• `Optional` **network**: [`Network`](../enums/Network.md)

The Network to connect to. See [Network](../enums/Network.md) for supported networks

___

### reputationOracleEndpoint

• `Optional` **reputationOracleEndpoint**: `string`

A custom endpoiunt for ColonyNetwork's Reputation Oracle. Useful only in manual deployments
