[Colony SDK 🚀](../README.md) / [Modules](../modules.md) / [ColonyNetwork](../modules/ColonyNetwork.md) / Colony

# Class: Colony

[ColonyNetwork](../modules/ColonyNetwork.md).Colony

## Table of contents

### Constructors

- [constructor](ColonyNetwork.Colony.md#constructor)

### Properties

- [SupportedVersion](ColonyNetwork.Colony.md#supportedversion)

### Methods

- [createTeam](ColonyNetwork.Colony.md#createteam)
- [getBalance](ColonyNetwork.Colony.md#getbalance)

## Constructors

### constructor

• **new Colony**(`colonyClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colonyClient` | `ColonyClientV8` |

## Properties

### SupportedVersion

▪ `Static` **SupportedVersion**: ``8``

## Methods

### createTeam

▸ **createTeam**(): `Promise`<(`ContractReceipt` \| { `agent?`: `string` ; `domainId?`: `BigNumber` ; `fundingPotId?`: `BigNumber`  })[]\>

#### Returns

`Promise`<(`ContractReceipt` \| { `agent?`: `string` ; `domainId?`: `BigNumber` ; `fundingPotId?`: `BigNumber`  })[]\>

___

### getBalance

▸ **getBalance**(`tokenAddress?`, `teamId?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress?` | `string` |
| `teamId?` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>
