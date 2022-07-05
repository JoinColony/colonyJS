# modules

[ColonyJS](./) / Exports

## ColonyJS

### Table of contents

#### Namespaces

* [ColonyDataTypes](modules/ColonyDataTypes.md)
* [Tokens](modules/Tokens.md)

#### Enumerations

* [ClientType](enums/ClientType.md)
* [ColonyNetworkAddress](enums/ColonyNetworkAddress.md)
* [ColonyRole](enums/ColonyRole.md)
* [Core](enums/Core.md)
* [Extension](enums/Extension.md)
* [FundingPotAssociatedType](enums/FundingPotAssociatedType.md)
* [Id](enums/Id.md)
* [MotionState](enums/MotionState.md)
* [Network](enums/Network.md)
* [ReputationMinerEndpoints](enums/ReputationMinerEndpoints.md)
* [ReputationOracleEndpoint](enums/ReputationOracleEndpoint.md)
* [TokenClientType](enums/TokenClientType.md)

#### Interfaces

* [CoinMachineClientV1](interfaces/CoinMachineClientV1.md)
* [CoinMachineClientV2](interfaces/CoinMachineClientV2.md)
* [CoinMachineClientV3](interfaces/CoinMachineClientV3.md)
* [CoinMachineClientV4](interfaces/CoinMachineClientV4.md)
* [CoinMachineClientV5](interfaces/CoinMachineClientV5.md)
* [ColonyClientV1](interfaces/ColonyClientV1.md)
* [ColonyClientV2](interfaces/ColonyClientV2.md)
* [ColonyClientV3](interfaces/ColonyClientV3.md)
* [ColonyClientV4](interfaces/ColonyClientV4.md)
* [ColonyClientV5](interfaces/ColonyClientV5.md)
* [ColonyClientV6](interfaces/ColonyClientV6.md)
* [ColonyClientV7](interfaces/ColonyClientV7.md)
* [ColonyClientV8](interfaces/ColonyClientV8.md)
* [ColonyClientV9](interfaces/ColonyClientV9.md)
* [ColonyNetworkClient](interfaces/ColonyNetworkClient.md)
* [ColonyTokenClient](interfaces/ColonyTokenClient.md)
* [DaiTokenClient](interfaces/DaiTokenClient.md)
* [Erc20TokenClient](interfaces/Erc20TokenClient.md)
* [NetworkClientOptions](interfaces/NetworkClientOptions.md)
* [OneTxPaymentClientV1](interfaces/OneTxPaymentClientV1.md)
* [OneTxPaymentClientV2](interfaces/OneTxPaymentClientV2.md)
* [OneTxPaymentClientV3](interfaces/OneTxPaymentClientV3.md)
* [TokenLockingClient](interfaces/TokenLockingClient.md)
* [VotingReputationClientV1](interfaces/VotingReputationClientV1.md)
* [VotingReputationClientV2](interfaces/VotingReputationClientV2.md)
* [VotingReputationClientV3](interfaces/VotingReputationClientV3.md)
* [VotingReputationClientV4](interfaces/VotingReputationClientV4.md)
* [WhitelistClientV1](interfaces/WhitelistClientV1.md)
* [WhitelistClientV2](interfaces/WhitelistClientV2.md)

#### Type aliases

* [AnyCoinMachineClient](modules.md#anycoinmachineclient)
* [AnyColonyClient](modules.md#anycolonyclient)
* [AnyOneTxPaymentClient](modules.md#anyonetxpaymentclient)
* [AnyVotingReputationClient](modules.md#anyvotingreputationclient)
* [AnyWhitelistClient](modules.md#anywhitelistclient)
* [ColonyRoles](modules.md#colonyroles)
* [ContractClient](modules.md#contractclient)
* [DomainRoles](modules.md#domainroles)
* [EventsClient](modules.md#eventsclient)
* [ExtensionClient](modules.md#extensionclient)
* [SignerOrProvider](modules.md#signerorprovider)
* [TokenClient](modules.md#tokenclient)
* [UserRoles](modules.md#userroles)

#### Variables

* [COLONY\_VERSION\_LATEST](modules.md#colony\_version\_latest)
* [ExtensionVersions](modules.md#extensionversions)

#### Functions

* [formatColonyRoles](modules.md#formatcolonyroles)
* [getBlockTime](modules.md#getblocktime)
* [getChildIndex](modules.md#getchildindex)
* [getColonyNetworkClient](modules.md#getcolonynetworkclient)
* [getColonyRoles](modules.md#getcolonyroles)
* [getEvents](modules.md#getevents)
* [getExtensionHash](modules.md#getextensionhash)
* [getExtensionPermissionProofs](modules.md#getextensionpermissionproofs)
* [getHistoricColonyRoles](modules.md#gethistoriccolonyroles)
* [getLogs](modules.md#getlogs)
* [getMultipleEvents](modules.md#getmultipleevents)
* [getPermissionProofs](modules.md#getpermissionproofs)
* [getPotDomain](modules.md#getpotdomain)
* [isExtensionCompatible](modules.md#isextensioncompatible)

### Type aliases

#### AnyCoinMachineClient

Ƭ **AnyCoinMachineClient**: [`CoinMachineClientV1`](interfaces/CoinMachineClientV1.md) | [`CoinMachineClientV2`](interfaces/CoinMachineClientV2.md) | [`CoinMachineClientV3`](interfaces/CoinMachineClientV3.md) | [`CoinMachineClientV4`](interfaces/CoinMachineClientV4.md) | [`CoinMachineClientV5`](interfaces/CoinMachineClientV5.md)

***

#### AnyColonyClient

Ƭ **AnyColonyClient**: [`ColonyClientV1`](interfaces/ColonyClientV1.md) | [`ColonyClientV2`](interfaces/ColonyClientV2.md) | [`ColonyClientV3`](interfaces/ColonyClientV3.md) | [`ColonyClientV4`](interfaces/ColonyClientV4.md) | [`ColonyClientV5`](interfaces/ColonyClientV5.md) | [`ColonyClientV6`](interfaces/ColonyClientV6.md) | [`ColonyClientV7`](interfaces/ColonyClientV7.md) | [`ColonyClientV8`](interfaces/ColonyClientV8.md) | [`ColonyClientV9`](interfaces/ColonyClientV9.md)

***

#### AnyOneTxPaymentClient

Ƭ **AnyOneTxPaymentClient**: [`OneTxPaymentClientV1`](interfaces/OneTxPaymentClientV1.md) | [`OneTxPaymentClientV2`](interfaces/OneTxPaymentClientV2.md) | [`OneTxPaymentClientV3`](interfaces/OneTxPaymentClientV3.md)

***

#### AnyVotingReputationClient

Ƭ **AnyVotingReputationClient**: [`VotingReputationClientV1`](interfaces/VotingReputationClientV1.md) | [`VotingReputationClientV2`](interfaces/VotingReputationClientV2.md) | [`VotingReputationClientV3`](interfaces/VotingReputationClientV3.md) | [`VotingReputationClientV4`](interfaces/VotingReputationClientV4.md)

***

#### AnyWhitelistClient

Ƭ **AnyWhitelistClient**: [`WhitelistClientV1`](interfaces/WhitelistClientV1.md) | [`WhitelistClientV2`](interfaces/WhitelistClientV2.md)

***

#### ColonyRoles

Ƭ **ColonyRoles**: [`UserRoles`](modules.md#userroles)\[]

All users that have roles in a colony

***

#### ContractClient

Ƭ **ContractClient**: [`AnyColonyClient`](modules.md#anycolonyclient) | [`ColonyNetworkClient`](interfaces/ColonyNetworkClient.md) | [`EventsClient`](modules.md#eventsclient) | [`ExtensionClient`](modules.md#extensionclient) | [`TokenClient`](modules.md#tokenclient) | [`TokenLockingClient`](interfaces/TokenLockingClient.md)

***

#### DomainRoles

Ƭ **DomainRoles**: `Object`

All roles a user has in `domainId`

**Type declaration**

| Name       | Type                                   |
| ---------- | -------------------------------------- |
| `domainId` | `number`                               |
| `roles`    | [`ColonyRole`](enums/ColonyRole.md)\[] |

***

#### EventsClient

Ƭ **EventsClient**: `CoinMachineEvents` | `IColonyEvents` | `OneTxPaymentEvents` | `VotingReputationEvents` | `WhitelistEvents`

***

#### ExtensionClient

Ƭ **ExtensionClient**: [`AnyCoinMachineClient`](modules.md#anycoinmachineclient) | [`AnyOneTxPaymentClient`](modules.md#anyonetxpaymentclient) | [`AnyVotingReputationClient`](modules.md#anyvotingreputationclient) | [`AnyWhitelistClient`](modules.md#anywhitelistclient)

***

#### SignerOrProvider

Ƭ **SignerOrProvider**: `Signer` | `Provider`

***

#### TokenClient

Ƭ **TokenClient**: [`ColonyTokenClient`](interfaces/ColonyTokenClient.md) | [`Erc20TokenClient`](interfaces/Erc20TokenClient.md) | [`DaiTokenClient`](interfaces/DaiTokenClient.md)

***

#### UserRoles

Ƭ **UserRoles**: `Object`

All domains the user with `address` has roles in

**Type declaration**

| Name      | Type                                       |
| --------- | ------------------------------------------ |
| `address` | `string`                                   |
| `domains` | [`DomainRoles`](modules.md#domainroles)\[] |

### Variables

#### COLONY\_VERSION\_LATEST

• **COLONY\_VERSION\_LATEST**: `number`

***

#### ExtensionVersions

• **ExtensionVersions**: `Object`

**Type declaration**

| Name               | Type     |
| ------------------ | -------- |
| `CoinMachine`      | `number` |
| `OneTxPayment`     | `number` |
| `VotingReputation` | `number` |
| `Whitelist`        | `number` |

### Functions

#### formatColonyRoles

▸ `Const` **formatColonyRoles**(`roleSetEvents`, `recoveryRoleSetEvents`): `Promise`<[`ColonyRoles`](modules.md#colonyroles)>

**Parameters**

| Name                    | Type                |
| ----------------------- | ------------------- |
| `roleSetEvents`         | `LogDescription`\[] |
| `recoveryRoleSetEvents` | `LogDescription`\[] |

**Returns**

`Promise`<[`ColonyRoles`](modules.md#colonyroles)>

***

#### getBlockTime

▸ `Const` **getBlockTime**(`provider`, `blockHash`): `Promise`<`number`>

Get the JavaScript timestamp for a block

**Parameters**

| Name        | Type       | Description                   |
| ----------- | ---------- | ----------------------------- |
| `provider`  | `Provider` | ethers compatible Provider    |
| `blockHash` | `string`   | Hash of block to get time for |

**Returns**

`Promise`<`number`>

block timestamp in ms

***

#### getChildIndex

▸ `Const` **getChildIndex**(`client`, `parentDomainId`, `domainId`): `Promise`<`BigNumber`>

Get the child index for a domain inside its corresponding skills parent children array

E.g. (the values _will_ differ for you!): domainId = 1 corresponding skillId = 2 parent of skillId 2:

```
{
 // ...
 children: [2]
}
```

childSkillIndex would be 0 in this case (0-position in children array)

**Parameters**

| Name             | Type                                            | Description         |
| ---------------- | ----------------------------------------------- | ------------------- |
| `client`         | [`AnyColonyClient`](modules.md#anycolonyclient) | Any ColonyClient    |
| `parentDomainId` | `BigNumberish`                                  | id of parent domain |
| `domainId`       | `BigNumberish`                                  | id of the domain    |

**Returns**

`Promise`<`BigNumber`>

Index in the `children` array (see above)

***

#### getColonyNetworkClient

▸ `Const` **getColonyNetworkClient**(`network`, `signerOrProvider`, `options?`): [`ColonyNetworkClient`](interfaces/ColonyNetworkClient.md)

The main entry point for accessing the deployed colonyNetwork contracts

Specify a network and an ethers compatible singer or provider to get back an initialized and extended (ethers) contract client for the colonyNetwork. From here you can access different colonies, extensions, ENS and other features of Colony.

Example

```ts
import { getColonyNetworkClient, Network } = from '@colony/colony-js';
import { providers } from 'ethers';

// For local connections (run an Ethereum node on port 8545);
const provider = new providers.JsonRpcProvider();

// Just for reading data - to sign transactions we need to pass in a signer.
const networkClient = await getColonyNetworkClient(Network.Xdai, provider);
```

**Parameters**

| Name               | Type                                                         | Description                                                                                         |
| ------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `network`          | [`Network`](enums/Network.md)                                | One of the available options. See [Network](enums/Network.md).                                      |
| `signerOrProvider` | [`SignerOrProvider`](modules.md#signerorprovider)            | An [ethers](https://github.com/ethers-io/ethers.js/) compatible signer or provider instance         |
| `options?`         | [`NetworkClientOptions`](interfaces/NetworkClientOptions.md) | Here you can supply options for accessing certain contracts (mostly used in local/dev environments) |

**Returns**

[`ColonyNetworkClient`](interfaces/ColonyNetworkClient.md)

***

#### getColonyRoles

▸ `Const` **getColonyRoles**(`client`, `options?`): `Promise`<[`ColonyRoles`](modules.md#colonyroles)>

Get an array of all roles in the colony

**Parameters**

| Name       | Type                                            | Description      |
| ---------- | ----------------------------------------------- | ---------------- |
| `client`   | [`AnyColonyClient`](modules.md#anycolonyclient) | Any ColonyClient |
| `options?` | `LogOptions`                                    | -                |

**Returns**

`Promise`<[`ColonyRoles`](modules.md#colonyroles)>

Array of user roles in a colony (see above) fetching it's own network events

***

#### getEvents

▸ `Const` **getEvents**(`client`, `filter`, `options?`): `Promise`<`LogDescription`\[]>

Get parsed event data from filter

Example:

```typescript
// Gets the logs for the `ColonyFundsClaimed` event (not filtered)
const filter = colonyClient.filters.ColonyFundsClaimed(null, null, null);
const events = await getEvents(colonyClient, filter);
```

**Parameters**

| Name       | Type                                          | Description                             |
| ---------- | --------------------------------------------- | --------------------------------------- |
| `client`   | [`ContractClient`](modules.md#contractclient) | Any of the intantiated contract clients |
| `filter`   | `Filter`                                      | ethers compatible Filter object         |
| `options?` | `LogOptions`                                  | Configuration options to filter logs    |

**Returns**

`Promise`<`LogDescription`\[]>

Parsed ethers LogDescription array (events)

***

#### getExtensionHash

▸ `Const` **getExtensionHash**(`extensionName`): `string`

Hashes to identify the colony extension contracts

**Parameters**

| Name            | Type     |
| --------------- | -------- |
| `extensionName` | `string` |

**Returns**

`string`

***

#### getExtensionPermissionProofs

▸ `Const` **getExtensionPermissionProofs**(`colonyClient`, `domainId`, `address?`): `Promise`<\[`BigNumberish`, `BigNumberish`]>

Wrapper around `getPermissionProofs` to check two types of permissions: Funding and Administration To be used for checking an extension's permission in said colony

**Parameters**

| Name           | Type                             | Description                          |
| -------------- | -------------------------------- | ------------------------------------ |
| `colonyClient` | `AugmentedIColony`<`AnyIColony`> | Any ColonyClient                     |
| `domainId`     | `BigNumberish`                   | Domain id the method needs to act in |
| `address?`     | `string`                         | Address of the extension             |

**Returns**

`Promise`<\[`BigNumberish`, `BigNumberish`]>

Tuple of `[permissionDomainId, childSkillIndex]`

***

#### getHistoricColonyRoles

▸ `Const` **getHistoricColonyRoles**(`client`, `fromBlock?`, `toBlock?`): `Promise`<[`ColonyRoles`](modules.md#colonyroles)>

**Parameters**

| Name         | Type                                            |
| ------------ | ----------------------------------------------- |
| `client`     | [`AnyColonyClient`](modules.md#anycolonyclient) |
| `fromBlock?` | `number`                                        |
| `toBlock?`   | `number`                                        |

**Returns**

`Promise`<[`ColonyRoles`](modules.md#colonyroles)>

***

#### getLogs

▸ `Const` **getLogs**(`client`, `filter`, `options?`): `Promise`<`Log`\[]>

Get raw (unparsed logs) from filter

Example:

```typescript
// Gets the logs for the `ColonyFundsClaimed` event (not filtered)
const filter = colonyClient.filters.ColonyFundsClaimed(null, null, null);
const logs = await getLogs(colonyClient, filter);
```

**Parameters**

| Name      | Type                                          | Description                             |
| --------- | --------------------------------------------- | --------------------------------------- |
| `client`  | [`ContractClient`](modules.md#contractclient) | Any of the intantiated contract clients |
| `filter`  | `Filter`                                      | ethers compatible Filter object         |
| `options` | `LogOptions`                                  | Configuration options to filter logs    |

**Returns**

`Promise`<`Log`\[]>

ethers Log array

***

#### getMultipleEvents

▸ `Const` **getMultipleEvents**(`client`, `filters`, `options?`): `Promise`<`LogDescription`\[]>

Get multiple events from multiple filters

**`remarks`** only works when all events are emitted by the same contract!

**Parameters**

| Name       | Type                                          | Description                             |
| ---------- | --------------------------------------------- | --------------------------------------- |
| `client`   | [`ContractClient`](modules.md#contractclient) | Any of the intantiated contract clients |
| `filters`  | `EventFilter`\[]                              | -                                       |
| `options?` | `LogOptions`                                  | Configuration options to filter logs    |

**Returns**

`Promise`<`LogDescription`\[]>

Parsed ethers LogDescription array (events)

***

#### getPermissionProofs

▸ `Const` **getPermissionProofs**(`client`, `domainId`, `role`, `customAddress?`): `Promise`<\[`BigNumber`, `BigNumber`]>

Get the permission proofs for a user address and a certain role

Certain methods on Colony contracts require so called "permission proofs". These are made up by the `permissionDomainId` and the `childSkillIndex`. We shall attempt an explanation here.

Domains within a colony can be nested and all the permissions in a parent domain apply for all child domains. Yet at the time of calling a domain-permissioned method the contracts are unaware of the parent domain a certain user has the required permission in. So when we these methods are called we have to supply them the id of the parent domain the user has the permission in (it could also be the very same domain id they want to act in!). Furthermore for the contracts the unidirectional chain downwards we have to supply the method wuth the index of the domains associated skill in its parents children array (`childSkillIndex`, see \[\[`getChildIndex`]]). The contracts are then able to verify the permissions (the role) claimed by the caller.

tl;dr:

* `permissionDomainId`: id of the parent domain of the required domain the user has the required permission in
* `childSkillIndex`: the child index for a domain inside its corresponding skills parent children array

**Parameters**

| Name             | Type                                            | Description                                                                          |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| `client`         | [`AnyColonyClient`](modules.md#anycolonyclient) | Any ColonyClient                                                                     |
| `domainId`       | `BigNumberish`                                  | Domain id the method needs to act in                                                 |
| `role`           | [`ColonyRole`](enums/ColonyRole.md)             | Permissioning role that the methods needs to function                                |
| `customAddress?` | `string`                                        | A custom address to get the permission proofs for (defaults to the signer's address) |

**Returns**

`Promise`<\[`BigNumber`, `BigNumber`]>

Tuple of `[permissionDomainId, childSkillIndex]`

***

#### getPotDomain

▸ `Const` **getPotDomain**(`client`, `potId`): `Promise`<`BigNumberish`>

Get the associated domain for a pot id

**`remarks`** pots can be associated with different types, like domains, payments or tasks See \[\[`FundingPotAssociatedType`]] for details

**Parameters**

| Name     | Type                                            | Description        |
| -------- | ----------------------------------------------- | ------------------ |
| `client` | [`AnyColonyClient`](modules.md#anycolonyclient) | Any ColonyClient   |
| `potId`  | `BigNumberish`                                  | The funding pot id |

**Returns**

`Promise`<`BigNumberish`>

The associated domainId

***

#### isExtensionCompatible

▸ `Const` **isExtensionCompatible**(`extension`, `extensionVersion`, `colonyVersion`): `boolean`

Checks the compatibility of an extension version with a colony version it requests to be installed in Returns `true` if an extension version is compatible with the given colony version

**Parameters**

| Name               | Type                                                        | Description                                              |
| ------------------ | ----------------------------------------------------------- | -------------------------------------------------------- |
| `extension`        | [`Extension`](enums/Extension.md)                           | A valid `Extension` contract name                        |
| `extensionVersion` | `ExtensionVersion`                                          | The version of the extension to check against the colony |
| `colonyVersion`    | `1` \| `6` \| `2` \| `4` \| `3` \| `5` \| `7` \| `8` \| `9` | The version of the colony to check for                   |

**Returns**

`boolean`

indication whether extension in given version is compatible with colony at the given version
