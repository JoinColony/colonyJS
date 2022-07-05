# Namespace: ColonyDataTypes

## Type Aliases

### DomainStruct

Ƭ **DomainStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fundingPotId` | `BigNumberish` |
| `skillId` | `BigNumberish` |

### DomainStructOutput

Ƭ **DomainStructOutput**: [`BigNumber`, `BigNumber`] & { `fundingPotId`: `BigNumber` ; `skillId`: `BigNumber`  }

### ExpenditureSlotStruct

Ƭ **ExpenditureSlotStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimDelay` | `BigNumberish` |
| `payoutModifier` | `BigNumberish` |
| `recipient` | `string` |
| `skills` | `BigNumberish`[] |

### ExpenditureSlotStructOutput

Ƭ **ExpenditureSlotStructOutput**: [`string`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `claimDelay`: `BigNumber` ; `payoutModifier`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }

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

### ExpenditureStructOutput

Ƭ **ExpenditureStructOutput**: [`number`, `string`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `domainId`: `BigNumber` ; `finalizedTimestamp`: `BigNumber` ; `fundingPotId`: `BigNumber` ; `globalClaimDelay`: `BigNumber` ; `owner`: `string` ; `status`: `number`  }

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

### PaymentStructOutput

Ƭ **PaymentStructOutput**: [`string`, `boolean`, `BigNumber`, `BigNumber`, `BigNumber`[]] & { `domainId`: `BigNumber` ; `finalized`: `boolean` ; `fundingPotId`: `BigNumber` ; `recipient`: `string` ; `skills`: `BigNumber`[]  }

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

### RewardPayoutCycleStructOutput

Ƭ **RewardPayoutCycleStructOutput**: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `string`, `BigNumber`, `BigNumber`, `boolean`] & { `amount`: `BigNumber` ; `amountRemaining`: `BigNumber` ; `blockTimestamp`: `BigNumber` ; `colonyWideReputation`: `BigNumber` ; `finalized`: `boolean` ; `reputationState`: `string` ; `tokenAddress`: `string` ; `totalTokens`: `BigNumber`  }

### RoleStruct

Ƭ **RoleStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rateFail` | `boolean` |
| `rating` | `BigNumberish` |
| `user` | `string` |

### RoleStructOutput

Ƭ **RoleStructOutput**: [`string`, `boolean`, `number`] & { `rateFail`: `boolean` ; `rating`: `number` ; `user`: `string`  }
