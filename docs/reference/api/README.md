# colonyJS

## Namespaces

- [ColonyDataTypes](modules/ColonyDataTypes.md)
- [Tokens](modules/Tokens.md)

## Enumerations

- [ClientType](enums/ClientType.md)
- [ColonyNetworkAddress](enums/ColonyNetworkAddress.md)
- [ColonyRole](enums/ColonyRole.md)
- [Core](enums/Core.md)
- [Extension](enums/Extension.md)
- [FundingPotAssociatedType](enums/FundingPotAssociatedType.md)
- [Id](enums/Id.md)
- [MotionState](enums/MotionState.md)
- [Network](enums/Network.md)
- [ReputationMinerEndpoints](enums/ReputationMinerEndpoints.md)
- [ReputationOracleEndpoint](enums/ReputationOracleEndpoint.md)
- [TokenClientType](enums/TokenClientType.md)

## Interfaces

- [CoinMachineClientV1](interfaces/CoinMachineClientV1.md)
- [CoinMachineClientV2](interfaces/CoinMachineClientV2.md)
- [CoinMachineClientV3](interfaces/CoinMachineClientV3.md)
- [CoinMachineClientV4](interfaces/CoinMachineClientV4.md)
- [CoinMachineClientV5](interfaces/CoinMachineClientV5.md)
- [ColonyClientV1](interfaces/ColonyClientV1.md)
- [ColonyClientV2](interfaces/ColonyClientV2.md)
- [ColonyClientV3](interfaces/ColonyClientV3.md)
- [ColonyClientV4](interfaces/ColonyClientV4.md)
- [ColonyClientV5](interfaces/ColonyClientV5.md)
- [ColonyClientV6](interfaces/ColonyClientV6.md)
- [ColonyClientV7](interfaces/ColonyClientV7.md)
- [ColonyClientV8](interfaces/ColonyClientV8.md)
- [ColonyClientV9](interfaces/ColonyClientV9.md)
- [ColonyNetworkClient](interfaces/ColonyNetworkClient.md)
- [ColonyTokenClient](interfaces/ColonyTokenClient.md)
- [DaiTokenClient](interfaces/DaiTokenClient.md)
- [Erc20TokenClient](interfaces/Erc20TokenClient.md)
- [NetworkClientOptions](interfaces/NetworkClientOptions.md)
- [OneTxPaymentClientV1](interfaces/OneTxPaymentClientV1.md)
- [OneTxPaymentClientV2](interfaces/OneTxPaymentClientV2.md)
- [OneTxPaymentClientV3](interfaces/OneTxPaymentClientV3.md)
- [TokenLockingClient](interfaces/TokenLockingClient.md)
- [VotingReputationClientV1](interfaces/VotingReputationClientV1.md)
- [VotingReputationClientV2](interfaces/VotingReputationClientV2.md)
- [VotingReputationClientV3](interfaces/VotingReputationClientV3.md)
- [VotingReputationClientV4](interfaces/VotingReputationClientV4.md)
- [WhitelistClientV1](interfaces/WhitelistClientV1.md)
- [WhitelistClientV2](interfaces/WhitelistClientV2.md)

## Type Aliases

### AnyCoinMachineClient

Ƭ **AnyCoinMachineClient**: [`CoinMachineClientV1`](interfaces/CoinMachineClientV1.md) \| [`CoinMachineClientV2`](interfaces/CoinMachineClientV2.md) \| [`CoinMachineClientV3`](interfaces/CoinMachineClientV3.md) \| [`CoinMachineClientV4`](interfaces/CoinMachineClientV4.md) \| [`CoinMachineClientV5`](interfaces/CoinMachineClientV5.md)

### AnyColonyClient

Ƭ **AnyColonyClient**: [`ColonyClientV1`](interfaces/ColonyClientV1.md) \| [`ColonyClientV2`](interfaces/ColonyClientV2.md) \| [`ColonyClientV3`](interfaces/ColonyClientV3.md) \| [`ColonyClientV4`](interfaces/ColonyClientV4.md) \| [`ColonyClientV5`](interfaces/ColonyClientV5.md) \| [`ColonyClientV6`](interfaces/ColonyClientV6.md) \| [`ColonyClientV7`](interfaces/ColonyClientV7.md) \| [`ColonyClientV8`](interfaces/ColonyClientV8.md) \| [`ColonyClientV9`](interfaces/ColonyClientV9.md)

### AnyOneTxPaymentClient

Ƭ **AnyOneTxPaymentClient**: [`OneTxPaymentClientV1`](interfaces/OneTxPaymentClientV1.md) \| [`OneTxPaymentClientV2`](interfaces/OneTxPaymentClientV2.md) \| [`OneTxPaymentClientV3`](interfaces/OneTxPaymentClientV3.md)

### AnyVotingReputationClient

Ƭ **AnyVotingReputationClient**: [`VotingReputationClientV1`](interfaces/VotingReputationClientV1.md) \| [`VotingReputationClientV2`](interfaces/VotingReputationClientV2.md) \| [`VotingReputationClientV3`](interfaces/VotingReputationClientV3.md) \| [`VotingReputationClientV4`](interfaces/VotingReputationClientV4.md)

### AnyWhitelistClient

Ƭ **AnyWhitelistClient**: [`WhitelistClientV1`](interfaces/WhitelistClientV1.md) \| [`WhitelistClientV2`](interfaces/WhitelistClientV2.md)

### ColonyRoles

Ƭ **ColonyRoles**: [`UserRoles`](README.md#userroles)[]

All users that have roles in a colony

### ContractClient

Ƭ **ContractClient**: [`AnyColonyClient`](README.md#anycolonyclient) \| [`ColonyNetworkClient`](interfaces/ColonyNetworkClient.md) \| [`EventsClient`](README.md#eventsclient) \| [`ExtensionClient`](README.md#extensionclient) \| [`TokenClient`](README.md#tokenclient) \| [`TokenLockingClient`](interfaces/TokenLockingClient.md)

### DomainRoles

Ƭ **DomainRoles**: `Object`

All roles a user has in `domainId`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domainId` | `number` |
| `roles` | [`ColonyRole`](enums/ColonyRole.md)[] |

### EventsClient

Ƭ **EventsClient**: `CoinMachineEvents` \| `IColonyEvents` \| `OneTxPaymentEvents` \| `VotingReputationEvents` \| `WhitelistEvents`

### ExtensionClient

Ƭ **ExtensionClient**: [`AnyCoinMachineClient`](README.md#anycoinmachineclient) \| [`AnyOneTxPaymentClient`](README.md#anyonetxpaymentclient) \| [`AnyVotingReputationClient`](README.md#anyvotingreputationclient) \| [`AnyWhitelistClient`](README.md#anywhitelistclient)

### SignerOrProvider

Ƭ **SignerOrProvider**: `Signer` \| `Provider`

### TokenClient

Ƭ **TokenClient**: [`ColonyTokenClient`](interfaces/ColonyTokenClient.md) \| [`Erc20TokenClient`](interfaces/Erc20TokenClient.md) \| [`DaiTokenClient`](interfaces/DaiTokenClient.md)

### UserRoles

Ƭ **UserRoles**: `Object`

All domains the user with `address` has roles in

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `domains` | [`DomainRoles`](README.md#domainroles)[] |

## Variables

### COLONY\_VERSION\_LATEST

• `Const` **COLONY\_VERSION\_LATEST**: `number`

### ExtensionVersions

• `Const` **ExtensionVersions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CoinMachine` | `number` |
| `OneTxPayment` | `number` |
| `VotingReputation` | `number` |
| `Whitelist` | `number` |

## Functions

### ▸ **formatColonyRoles**(`roleSetEvents`, `recoveryRoleSetEvents`): `Promise`<[`ColonyRoles`](README.md#colonyroles)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `roleSetEvents` | `LogDescription`[] |
| `recoveryRoleSetEvents` | `LogDescription`[] |

#### Returns

`Promise`<[`ColonyRoles`](README.md#colonyroles)\>

### ▸ **getBlockTime**(`provider`, `blockHash`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `blockHash` | `string` |

#### Returns

`Promise`<`number`\>

### ▸ **getChildIndex**(`client`, `parentDomainId`, `domainId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`AnyColonyClient`](README.md#anycolonyclient) |
| `parentDomainId` | `BigNumberish` |
| `domainId` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

### ▸ **getCoinMachineClient**(`colonyClient`, `address`, `version`): [`AnyCoinMachineClient`](README.md#anycoinmachineclient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyClient` | `AugmentedIColony`<`AnyIColony`\> |
| `address` | `string` |
| `version` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |

#### Returns

[`AnyCoinMachineClient`](README.md#anycoinmachineclient)

### ▸ **getColonyNetworkClient**(`network`, `signerOrProvider`, `options?`): [`ColonyNetworkClient`](interfaces/ColonyNetworkClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](enums/Network.md) |
| `signerOrProvider` | [`SignerOrProvider`](README.md#signerorprovider) |
| `options?` | [`NetworkClientOptions`](interfaces/NetworkClientOptions.md) |

#### Returns

[`ColonyNetworkClient`](interfaces/ColonyNetworkClient.md)

### ▸ **getColonyRoles**(`client`, `options?`): `Promise`<[`ColonyRoles`](README.md#colonyroles)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`AnyColonyClient`](README.md#anycolonyclient) |
| `options?` | `LogOptions` |

#### Returns

`Promise`<[`ColonyRoles`](README.md#colonyroles)\>

### ▸ **getEvents**(`client`, `filter`, `options?`): `Promise`<`LogDescription`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ContractClient`](README.md#contractclient) |
| `filter` | `Filter` |
| `options?` | `LogOptions` |

#### Returns

`Promise`<`LogDescription`[]\>

### ▸ **getExtensionHash**(`extensionName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | `string` |

#### Returns

`string`

### ▸ **getExtensionPermissionProofs**(`colonyClient`, `domainId`, `address?`): `Promise`<[`BigNumberish`, `BigNumberish`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyClient` | `AugmentedIColony`<`AnyIColony`\> |
| `domainId` | `BigNumberish` |
| `address?` | `string` |

#### Returns

`Promise`<[`BigNumberish`, `BigNumberish`]\>

### ▸ **getHistoricColonyRoles**(`client`, `fromBlock?`, `toBlock?`): `Promise`<[`ColonyRoles`](README.md#colonyroles)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`AnyColonyClient`](README.md#anycolonyclient) |
| `fromBlock?` | `number` |
| `toBlock?` | `number` |

#### Returns

`Promise`<[`ColonyRoles`](README.md#colonyroles)\>

### ▸ **getLogs**(`client`, `filter`, `options?`): `Promise`<`Log`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ContractClient`](README.md#contractclient) |
| `filter` | `Filter` |
| `options` | `LogOptions` |

#### Returns

`Promise`<`Log`[]\>

### ▸ **getMultipleEvents**(`client`, `filters`, `options?`): `Promise`<`LogDescription`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ContractClient`](README.md#contractclient) |
| `filters` | `EventFilter`[] |
| `options?` | `LogOptions` |

#### Returns

`Promise`<`LogDescription`[]\>

### ▸ **getOneTxPaymentClient**(`colonyClient`, `address`, `version`): [`AnyOneTxPaymentClient`](README.md#anyonetxpaymentclient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyClient` | `AugmentedIColony`<`AnyIColony`\> |
| `address` | `string` |
| `version` | ``2`` \| ``1`` \| ``3`` |

#### Returns

[`AnyOneTxPaymentClient`](README.md#anyonetxpaymentclient)

### ▸ **getPermissionProofs**(`client`, `domainId`, `role`, `customAddress?`): `Promise`<[`BigNumber`, `BigNumber`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`AnyColonyClient`](README.md#anycolonyclient) |
| `domainId` | `BigNumberish` |
| `role` | [`ColonyRole`](enums/ColonyRole.md) |
| `customAddress?` | `string` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`]\>

### ▸ **getPotDomain**(`client`, `potId`): `Promise`<`BigNumberish`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`AnyColonyClient`](README.md#anycolonyclient) |
| `potId` | `BigNumberish` |

#### Returns

`Promise`<`BigNumberish`\>

### ▸ **getUtilsClient**(`address`, `signerOrProvider`): `UtilsClient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | [`SignerOrProvider`](README.md#signerorprovider) |

#### Returns

`UtilsClient`

### ▸ **getWhitelistClient**(`colonyClient`, `address`, `version`): [`AnyWhitelistClient`](README.md#anywhitelistclient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyClient` | `AugmentedIColony`<`AnyIColony`\> |
| `address` | `string` |
| `version` | ``2`` \| ``1`` |

#### Returns

[`AnyWhitelistClient`](README.md#anywhitelistclient)

### ▸ **isExtensionCompatible**(`extension`, `extensionVersion`, `colonyVersion`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension` | [`Extension`](enums/Extension.md) |
| `extensionVersion` | `ExtensionVersion` |
| `colonyVersion` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` |

#### Returns

`boolean`
