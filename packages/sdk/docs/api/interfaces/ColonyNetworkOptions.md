# Interface: ColonyNetworkOptions

Additional options for the [ColonyNetwork](../classes/ColonyNetwork.md)

## Properties

### customNetworkAddress

• `Optional` **customNetworkAddress**: `string`

A custom address for ColonyNetwork's EtherRouter contract. Useful only in manual deployments

___

### graphOptions

• `Optional` **graphOptions**: `SubgraphClientOptions`

Provide custom GraphQL client options

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

• `Optional` **network**: `Network`

The Network to connect to. See Network for supported networks

___

### reputationOracleEndpoint

• `Optional` **reputationOracleEndpoint**: `string`

A custom endpoiunt for ColonyNetwork's Reputation Oracle. Useful only in manual deployments
