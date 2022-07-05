# Interface: ColonyEvent

[events](../modules/events.md).ColonyEvent

An Event that came from a contract within the Colony Network

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

### data

• **data**: `Result`

### eventName

• **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

### eventSource

• **eventSource**: keyof [`EventSources`](events.EventSources.md)

The Colony contract the event originated from

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

### getMetadata

• `Optional` **getMetadata**: () => `Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

#### Type declaration

▸ (): `Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

##### Returns

`Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

### toBlock

• `Optional` **toBlock**: `BlockTag`

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

### transactionHash

• **transactionHash**: `string`
