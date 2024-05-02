# Class: ColonyTxCreator<C, M, E, MD\>

An umbrella API for all kinds of transactions within colonies

The `ColonyTxCreator` allows for a simple API to cover all the different cases of transactions within a colony. Once a `ColonyTxCreator` is created using a method on the base contracts (e.g. [Colony](Colony.md) or extensions like [VotingReputation](VotingReputation.md)) there are four options available:

## Create a standard transaction ("force" in dApp)

- [tx](TxCreator.md#tx): force a Colony transaction, knowing you have the permissions to do so
- [metaTx](MetaTxCreator.md#metatx): same as `tx()`, but send as a gasless metatransaction

## Create a motion to trigger an action once it passes

- [motion](ColonyTxCreator.md#motion): create a motion (needs the motion's domain as a parameter)
- [metaMotion](ColonyTxCreator.md#metamotion): same as `motion()`, but sends a gasless metatransaction

Learn more about these functions in their individual documentation

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md) |
| `M` | extends keyof `C`[``"functions"``] |
| `E` | extends [`EventData`](../interfaces/EventData.md) |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Hierarchy

- [`MetaTxCreator`](MetaTxCreator.md)<`C`, `M`, `E`, `MD`\>

  ↳ **`ColonyTxCreator`**

## Constructors

### constructor

• **new ColonyTxCreator**<`C`, `M`, `E`, `MD`\>(`config`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`MetaTxBaseContract`](../interfaces/MetaTxBaseContract.md) |
| `M` | extends `string` \| `number` \| `symbol` |
| `E` | extends [`EventData`](../interfaces/EventData.md) |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `MetaMotionsConfig`<`C`, `M`, `E`, `MD`\> |

#### Overrides

[MetaTxCreator](MetaTxCreator.md).[constructor](MetaTxCreator.md#constructor)

## Methods

### metaMotion

▸ **metaMotion**(`motionDomain?`): [`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)<[`TransactionResponse`](../interfaces/TransactionResponse.md), [`MotionCreatedEventObject`](../interfaces/VotingReputationEvents.MotionCreatedEventObject.md), [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

Creates a motion for an action, using a gasless transaction

You can specify a team (domain) this motion should be created in. It will be created in the Root team by default.

After creation, you can then `send` the transaction or wait for it to be `mined`.
See also [tx](TxCreator.md#tx) and https://docs.colony.io/colonysdk/guides/transactions for more information

**`Remarks`**

This will only work if the [VotingReputation](VotingReputation.md) extension is installed for the Colony that's being acted on

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `motionDomain` | `BigNumberish` | `Id.RootDomain` |

#### Returns

[`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)<[`TransactionResponse`](../interfaces/TransactionResponse.md), [`MotionCreatedEventObject`](../interfaces/VotingReputationEvents.MotionCreatedEventObject.md), [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

A motion transaction that can be `send` or `mined` or `encode`d.

___

### metaTx

▸ **metaTx**(): [`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)<[`TransactionResponse`](../interfaces/TransactionResponse.md), `E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

Create a gasless MetaTransaction ("force" in dApp)

After creation, you can then `send` the transaction or wait for it to be `mined`.
See also [tx](TxCreator.md#tx) and https://docs.colony.io/colonysdk/guides/transactions for more information

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

[`ColonyMetaTransaction`](../interfaces/ColonyMetaTransaction.md)<[`TransactionResponse`](../interfaces/TransactionResponse.md), `E`, [`ParsedLogTransactionReceipt`](../interfaces/ParsedLogTransactionReceipt.md), `MD`\>

A transaction that can be `send` or `mined`.

#### Inherited from

[MetaTxCreator](MetaTxCreator.md).[metaTx](MetaTxCreator.md#metatx)

___

### motion

▸ **motion**(`motionDomain?`): [`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), [`MotionCreatedEventObject`](../interfaces/VotingReputationEvents.MotionCreatedEventObject.md), [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

Creates a motion for an action

You can specify a team (domain) this motion should be created in. It will be created in the Root team by default.

After creation, you can then `send` the transaction or wait for it to be `mined`.
See also [ColonyTransaction](../interfaces/ColonyTransaction.md) and https://docs.colony.io/colonysdk/guides/transactions for more information

**`Remarks`**

This will only work if the [VotingReputation](VotingReputation.md) extension is installed for the Colony that's being acted on

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `motionDomain` | `BigNumberish` | `Id.RootDomain` |

#### Returns

[`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), [`MotionCreatedEventObject`](../interfaces/VotingReputationEvents.MotionCreatedEventObject.md), [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

A motion transaction that can be `send` or `mined` or `encode`d.

___

### tx

▸ **tx**(): [`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

Create a standard transaction ("force" in dApp)

See also [ColonyTransaction](../interfaces/ColonyTransaction.md) or https://docs.colony.io/colonysdk/guides/transactions for more information

**`Remarks`**

The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony [here](/develop/dev-learning/permissions).

#### Returns

[`ColonyTransaction`](../interfaces/ColonyTransaction.md)<[`ContractTransaction`](../interfaces/ContractTransaction.md), `E`, [`ContractReceipt`](../interfaces/ContractReceipt.md), `MD`\>

A transaction that can be `send`, `mined` or `encode`d.

#### Inherited from

[MetaTxCreator](MetaTxCreator.md).[tx](MetaTxCreator.md#tx)
