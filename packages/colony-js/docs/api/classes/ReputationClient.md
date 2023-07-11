# Class: ReputationClient

## Constructors

### constructor

• **new ReputationClient**(`network`, `colony`, `config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `CommonNetwork` |
| `colony` | `CommonColony` |
| `config?` | `ReputationClientOptions` |

## Methods

### getMembersReputation

▸ **getMembersReputation**(`skillId`, `customRootHash?`): `Promise`<`MembersReputationResponse`\>

Get a list of all users who have reputation in a team

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | Skill (for corresponding domain) to check reputation in |
| `customRootHash?` | `string` | Optionally define a root hash in the reputation tree (historic point in time) |

#### Returns

`Promise`<`MembersReputationResponse`\>

Reputation data

___

### getReputation

▸ **getReputation**(`skillId`, `address`, `customRootHash?`): `Promise`<{ `key`: `string` ; `reputationAmount`: `BigNumber` ; `value`: `string`  }\>

Get reputation with no proofs

Simply fetches the reputation for a user and a certain skillId.
Get the skillId for a domain first to check reputation in a domain.

**`Example`**

```typescript
const reputation = new ReputationClient(networkContract, colonyContract);
// Immediately executing async function
(async function() {
  // Use Id.RootDomain as domainId for Colony-wide reputation
  const { skillId } = await colonyContract.getDomain(domainId);
  const { reputationAmount } = reputation.getReputation(skillId, walletAddress);
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | Skill (for corresponding domain) to check reputation in |
| `address` | `string` | User address to check reputation for |
| `customRootHash?` | `string` | Optionally define a root hash in the reputation tree (historic point in time) |

#### Returns

`Promise`<{ `key`: `string` ; `reputationAmount`: `BigNumber` ; `value`: `string`  }\>

Reputation data

___

### getReputationAcrossDomains

▸ **getReputationAcrossDomains**(`address`, `customRootHash?`): `Promise`<{ `domainId`: `number` ; `reputationAmount`: `undefined` \| `BigNumber` ; `skillId`: `number`  }[]\>

Get reputation for an address across all Colony domains

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | User address to check reputation for |
| `customRootHash?` | `string` | Optionally define a root hash in the reputation tree (historic point in time) |

#### Returns

`Promise`<{ `domainId`: `number` ; `reputationAmount`: `undefined` \| `BigNumber` ; `skillId`: `number`  }[]\>

Reputation data

___

### getReputationFraction

▸ **getReputationFraction**(`skillId`, `address`, `customRootHash?`, `decimalPoints?`): `Promise`<`number`\>

Get the reputation fraction for a user address within a team in the Colony

1.000 = user has 100% of the reputation
0.050 = user has 5% of the reputation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | Skill (for corresponding domain) to check reputation in |
| `address` | `string` | - |
| `customRootHash?` | `string` | Optionally define a root hash in the reputation tree (historic point in time) |
| `decimalPoints?` | `number` | - |

#### Returns

`Promise`<`number`\>

Fraction of reputation a user has in a team

___

### getReputationWithProofs

▸ **getReputationWithProofs**(`skillId`, `address`, `customRootHash?`): `Promise`<{ `branchMask`: `string` ; `key`: `string` ; `reputationAmount`: `BigNumber` ; `siblings`: `string`[] ; `value`: `string`  }\>

Get reputation with proofs (e.g. to check against on-chain data)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | Skill (for corresponding domain) to check reputation in |
| `address` | `string` | User address to check reputation for |
| `customRootHash?` | `string` | Optionally define a root hash in the reputation tree (historic point in time) |

#### Returns

`Promise`<{ `branchMask`: `string` ; `key`: `string` ; `reputationAmount`: `BigNumber` ; `siblings`: `string`[] ; `value`: `string`  }\>

Reputation data

___

### getTotalReputation

▸ **getTotalReputation**(`skillId`, `customRootHash?`): `Promise`<{ `key`: `string` ; `reputationAmount`: `BigNumber` ; `value`: `string`  }\>

Get the total amount of reputation points that currently are in a team

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skillId` | `BigNumberish` | Skill (for corresponding domain) to check reputation in |
| `customRootHash?` | `string` | Optionally define a root hash in the reputation tree (historic point in time) |

#### Returns

`Promise`<{ `key`: `string` ; `reputationAmount`: `BigNumber` ; `value`: `string`  }\>

Reputation data

___

### fetchReputation

▸ `Static` **fetchReputation**<`T`\>(`url`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`T`\>
