# Class: ColonyNetwork

## Constructors

### new ColonyNetwork()

> **new ColonyNetwork**(`signerOrProvider`, `options`?): [`ColonyNetwork`](ColonyNetwork.md)

Creates a new instance of the ColonyNetwork

This is your main entry point to talk to the Colony Network Smart Contracts.
From here you should be able to instantiate all the required instances for Colonies and their extensions.

#### Parameters

##### signerOrProvider

[`SignerOrProvider`](../type-aliases/SignerOrProvider.md)

An _ethers_ compatible Signer or Provider instance

##### options?

[`ContractOptions`](../interfaces/ContractOptions.md)

Optional custom ColonyNetworkOptions

#### Returns

[`ColonyNetwork`](ColonyNetwork.md)

A ColonyNetwork abstraction instance

#### Example

```typescript
import { providers } from 'ethers';
import { ColonyNetwork, ColonyRpcEndpoint, Tokens } from '@colony/sdk';

// Connect directly to the deployed Colony Network on Arbitrum One
const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);
const colonyNetwork = new ColonyNetwork(provider);
// Now you could call functions on the colonyNetwork, like `colonyNetwork.getMetaColony()`
```

## Methods

### createColony()

#### Call Signature

> **createColony**(`token`, `label`, `metadata`): [`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"createColonyForFrontend"`, \{ `agent`: `string`; `colonyAddress`: `string`; `colonyId`: `BigNumber`; `metadata`: `string`; `token`: `string`; `tokenAddress`: `string`; `tokenAuthorityAddress`: `string`; \}, [`Colony`](../enumerations/MetadataType.md#colony)\>

Create a new colony with metadata

Creates a new colony with IPFS metadata. To edit metadata at a later point you can call the [Colony.edit](Colony.md#edit) method.

##### Parameters

###### token

Create a new ERC20-compatible token by passing in its name and symbol or use an existing token by passing in its contract address

`string` | [`TokenData`](../interfaces/TokenData.md)

###### label

`string`

The Colony's label. This is going to be part of the URL to look up the Colony within the dApp

###### metadata

The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If [ColonyData](../interfaces/ColonyData.md) is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [IpfsAdapter](../interfaces/IpfsAdapter.md) that can upload and pin to IPFS (like the [PinataAdapter](PinataAdapter.md)). See its documentation for more information.

`string` | [`ColonyData`](../interfaces/ColonyData.md)

##### Returns

[`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"createColonyForFrontend"`, \{ `agent`: `string`; `colonyAddress`: `string`; `colonyId`: `BigNumber`; `metadata`: `string`; `token`: `string`; `tokenAddress`: `string`; `tokenAuthorityAddress`: `string`; \}, [`Colony`](../enumerations/MetadataType.md#colony)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `colonyId` | BigNumber | Auto-incremented integer id of the colony |
| `colonyAddress` | string | Address of the newly deployed colony contract |
| `tokenAddress` | string | Address of the token that is used as the colony's native token |
| `tokenAuthorityAddress` | string | Address of the token authority (the token's permission manager) contract |
| `token` | string | Alias of `token`
| `metadata` | string | IPFS CID of metadata attached to this transaction |

#### Metadata

(can be obtained by calling and awaiting the `getMetadata` function)

| Property | Type | Description |
| :------ | :------ | :------ |
| `colonyDisplayName` | string | The name that should be displayed for the colony |
| `colonyAvatarHash` | string | An IPFS hash for a Colony logo (make it 200x200px) |
| `colonyTokens` | string[] | A list of additional tokens that should be in the colony's "address book" |

##### Remarks

There is more to creating a fully functional colony that can be used within the dapp than just calling this function.
See the [Colony Creation Guide](../../guides/colony-creation.md).

##### Example

```typescript
import { Tokens } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Create a colony with some metadata details attached
  // (forced transaction example)
  // (also notice that this requires an upload-capable IPFS adapter)
  await colonyNetwork.createColony(
    // Create a new token ('COOL') for this Colony
    { name: 'Cool token', symbol: 'COOL' },
    'coolony',
    {
      colonyDisplayName: 'Cool Colony',
      // IPFS hash to an image file
      colonyAvatarHash: 'QmS26o1Cmsrx7iw1SSFGEcy22TVDq6VmEZ4XNjpWFyaKUe',
      // List of token addresses that the Colony should be initialized with (can be changed later) - excluding ETH and the native token from above
      colonyTokens: [Tokens.ArbitrumOne.CLNY],
    }).tx().mined();
})();
```

#### Call Signature

> **createColony**(`token`, `label`): [`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"createColonyForFrontend"`, \{ `colonyAddress`: `string`; `colonyId`: `BigNumber`; `metadata`: `undefined`; `token`: `string`; `tokenAddress`: `string`; `tokenAuthorityAddress`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Create a new Colony without metadata

Creates a new Colony without IPFS metadata. To add metadata at a later point you can call the [Colony.edit](Colony.md#edit) method.

##### Parameters

###### token

Create a new ERC20-compatible token by passing in its name and symbol or use an existing token by passing in its contract address

`string` | [`TokenData`](../interfaces/TokenData.md)

###### label

`string`

The Colony's label. This is going to be part of the URL to look up the Colony within the dApp

##### Returns

[`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"createColonyForFrontend"`, \{ `colonyAddress`: `string`; `colonyId`: `BigNumber`; `metadata`: `undefined`; `token`: `string`; `tokenAddress`: `string`; `tokenAuthorityAddress`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `colonyId` | BigNumber | Auto-incremented integer id of the colony |
| `colonyAddress` | string | Address of the newly deployed colony contract |
| `tokenAddress` | string | Address of the token that is used as the colony's native token |
| `tokenAuthorityAddress` | string | Address of the token authority (the token's permission manager) contract |
| `token` | string | Alias of `token`

##### Remarks

There is more to creating a fully functional colony that can be used within the dapp than just calling this function.
See the [Colony Creation Guide](../../guides/colony-creation.md).

##### Example

```typescript
// Immediately executing async function
(async function() {
  // Create a colony
  // (forced transaction example)
  await colonyNetwork
    // Use USDC on Arbitrum One as the native token
    .createColony('0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', 'coolony')
    .tx().mined();
})();
```

***

### deployToken()

> **deployToken**(`name`, `symbol`, `decimals`): [`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"deployTokenViaNetwork"`, \{ `tokenAddress`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Deploy a "special" Colony ERC20 token

If there is not token yet that should be used with the Colony, this is the canonical way to create one.

This is a supercharged ERC20 token contract, that not only has a permissioned `mint` function (that can be used from the colony) but also supports Metatransactions. In order to fully use its permissioned system with a Colony, some extra steps have to be taken. See the [Colony Creation Guide](../../guides/colony-creation.md).

#### Parameters

##### name

`string`

##### symbol

`string`

##### decimals

`number` = `18`

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"deployTokenViaNetwork"`, \{ `tokenAddress`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Remarks

The token deployed with this function is locked by default. Call `unlockToken()` on the Colony at a later point to unlock it.

***

### getColony()

> **getColony**(`address`): `Promise`\<[`Colony`](Colony.md)\>

Get a new instance of a Colony

Use this function to instantiate a new `Colony` by providing the Colony's address

#### Parameters

##### address

`string`

The Colony's address

#### Returns

`Promise`\<[`Colony`](Colony.md)\>

A Colony abstaction instance

#### Remarks

Colony contracts are versioned. If the deployed Colony version does not match the supported version an error will be thrown

***

### getColonyAddress()

> **getColonyAddress**(`label`): `Promise`\<`null` \| `string`\>

Get the colony's addess by the ENS label

Returns the colony's address that belongs to the given ENS label
Will return `null` if the given label was not assigned to a colony.

#### Parameters

##### label

`string`

#### Returns

`Promise`\<`null` \| `string`\>

The colony's address

***

### getColonyLabel()

> **getColonyLabel**(`address`): `Promise`\<`null` \| `string`\>

Get the colony's ENS label

Returns the colony's ENS label, just like it's shown in the browsers address bar after `/colony/`, when using the dApp.
Will return `null` if the colony does not exist or if no label was assigned yet

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`null` \| `string`\>

The colony's ENS label

***

### getMetaColony()

> **getMetaColony**(): `Promise`\<[`Colony`](Colony.md)\>

Get a new instance of the MetaColony

Use this function to instantiate a new `Colony` for the deployed MetaColony

#### Returns

`Promise`\<[`Colony`](Colony.md)\>

A Colony abstaction instance of the MetaColony

***

### getTokenLocking()

> **getTokenLocking**(): `Promise`\<[`TokenLocking`](TokenLocking.md)\>

Fetches the TokenLocking client abstraction

#### Returns

`Promise`\<[`TokenLocking`](TokenLocking.md)\>

A [TokenLocking](TokenLocking.md) contract client

***

### getUserAddress()

> **getUserAddress**(`username`): `Promise`\<`null` \| `string`\>

Get the user's addess by the username

Returns the user's address that belongs to the given username. Username has to be provided without any suffix, just like it's shown in the dapp.
Will return `null` if the given username was not registered.

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`null` \| `string`\>

The user's address

***

### getUsername()

> **getUsername**(`address`): `Promise`\<`null` \| `string`\>

Get a user's username

Returns the user's username (the ENS label, just like it's shown in the dapp, without any suffixes)
Will return `null` if the user does not exist or if no label was assigned yet

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`null` \| `string`\>

The user's username

***

### registerUsername()

> **registerUsername**(`username`): [`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"registerUserLabel"`, \{ `label`: `string`; `user`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Register a Colony-internal ENS username

Registers a username for the signing address. An address can only register one username. Usernames are globally unique. This method will check whether the username was registered before.

#### Parameters

##### username

`string`

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)\<`IColonyNetwork`, `"registerUserLabel"`, \{ `label`: `string`; `user`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator
