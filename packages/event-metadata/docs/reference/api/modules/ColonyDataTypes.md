[ColonyJS](../README.md) / ColonyDataTypes

# Namespace: ColonyDataTypes

## Table of contents

### Type aliases

- [DomainStruct](ColonyDataTypes.md#domainstruct)
- [DomainStructOutput](ColonyDataTypes.md#domainstructoutput)
- [ExpenditureSlotStruct](ColonyDataTypes.md#expenditureslotstruct)
- [ExpenditureSlotStructOutput](ColonyDataTypes.md#expenditureslotstructoutput)
- [ExpenditureStruct](ColonyDataTypes.md#expenditurestruct)
- [ExpenditureStructOutput](ColonyDataTypes.md#expenditurestructoutput)
- [PaymentStruct](ColonyDataTypes.md#paymentstruct)
- [PaymentStructOutput](ColonyDataTypes.md#paymentstructoutput)
- [RewardPayoutCycleStruct](ColonyDataTypes.md#rewardpayoutcyclestruct)
- [RewardPayoutCycleStructOutput](ColonyDataTypes.md#rewardpayoutcyclestructoutput)
- [RoleStruct](ColonyDataTypes.md#rolestruct)
- [RoleStructOutput](ColonyDataTypes.md#rolestructoutput)

## Type aliases

### DomainStruct

Ƭ **DomainStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fundingPotId` | `BigNumberish` |
| `skillId` | `BigNumberish` |

___

### DomainStructOutput

Ƭ **DomainStructOutput**: [`BigNumber`, `BigNumber`] & { `fundingPotId`: `BigNumber` ; `skillId`: `BigNumber`  }

___

### ExpenditureSlotStruct

Ƭ **ExpenditureSlotStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimDelay` | `BigNumberish` |
| `payoutModifier` | `BigNumberish` |
| `recipient` | `string` |
| `skills` | `BigNumberish`[] |

___

### ExpenditureSlotStructOutput

Ƭ **ExpenditureSlotStructOutput**: [`string`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `claimDelay`: `BigNumber` ; `payoutModifier`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }

___

### ExpenditureStruct

Ƭ **ExpenditureStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domainId` | `BigNumberish` |
| `finalizedTimestamp` | `BigNumberish` |
| `fundingPotId` | `BigNumberish` |
| `globalClaimDelay` | `BigNumberish` |
| `owner` | `string` |
| `status` | `BigNumberish` |

___

### ExpenditureStructOutput

Ƭ **ExpenditureStructOutput**: [`number`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `domainId`: `BigNumber` ; `finalizedTimestamp`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `globalClaimDelay`: `BigNumber` ; `owner`: `string` ; `status`: `number`  }

___

### PaymentStruct

Ƭ **PaymentStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domainId` | `BigNumberish` |
| `finalized` | `boolean` |
| `fundingPotId` | `BigNumberish` |
| `recipient` | `string` |
| `skills` | `BigNumberish`[] |

___

### PaymentStructOutput

Ƭ **PaymentStructOutput**: [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `domainId`: `BigNumber` ; `finalized`: `boolean` ; `fundingPotId`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }

___

### RewardPayoutCycleStruct

Ƭ **RewardPayoutCycleStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `BigNumberish` |
| `amountRemaining` | `BigNumberish` |
| `blockTimestamp` | `BigNumberish` |
| `colonyWideReputation` | `BigNumberish` |
| `finalized` | `boolean` |
| `reputationState` | `BytesLike` |
| `tokenAddress` | `string` |
| `totalTokens` | `BigNumberish` |

___

### RewardPayoutCycleStructOutput

Ƭ **RewardPayoutCycleStructOutput**: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `BigNumber`, `BigNumber`, `boolean`] & { `amount`: `BigNumber` ; `amountRemaining`: `BigNumber` ; `blockTimestamp`: `BigNumber` ; `colonyWideReputation`: `BigNumber` ; `finalized`: `boolean` ; `reputationState`: `string` ; `tokenAddress`: `string` ; `totalTokens`: `BigNumber`  }

___

### RoleStruct

Ƭ **RoleStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rateFail` | `boolean` |
| `rating` | `BigNumberish` |
| `user` | `string` |

___

### RoleStructOutput

Ƭ **RoleStructOutput**: [`string`, `boolean`, `number`] & { `rateFail`: `boolean` ; `rating`: `number` ; `user`: `string`  }
