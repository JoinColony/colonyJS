# Interface: CommonColony

## Hierarchy

- `BaseContract`

  ↳ **`CommonColony`**

## Properties

### address

• **address**: `string`

#### Inherited from

BaseContract.address

___

### provider

• **provider**: `Provider`

#### Inherited from

BaseContract.provider

___

### signer

• `Optional` **signer**: `Signer`

#### Inherited from

BaseContract.signer

## Methods

### getDomain

▸ **getDomain**(`id`): `Promise`<`CommonDomain`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `BigNumberish` |

#### Returns

`Promise`<`CommonDomain`\>

___

### getDomainCount

▸ **getDomainCount**(): `Promise`<`BigNumber`\>

#### Returns

`Promise`<`BigNumber`\>

___

### getDomainFromFundingPot

▸ `Optional` **getDomainFromFundingPot**(`fundingPotId`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fundingPotId` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

___

### getFundingPot

▸ **getFundingPot**(`id`): `Promise`<`CommonFundingPot`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `BigNumberish` |

#### Returns

`Promise`<`CommonFundingPot`\>

___

### getPayment

▸ **getPayment**(`id`): `Promise`<`CommonPayment`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `BigNumberish` |

#### Returns

`Promise`<`CommonPayment`\>

___

### getTask

▸ **getTask**(`id`): `Promise`<`CommonTask`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `BigNumberish` |

#### Returns

`Promise`<`CommonTask`\>

___

### hasUserRole

▸ **hasUserRole**(`user`, `domainId`, `role`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `domainId` | `BigNumberish` |
| `role` | `BigNumberish` |

#### Returns

`Promise`<`boolean`\>
