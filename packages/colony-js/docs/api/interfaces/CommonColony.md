# Interface: CommonColony

## Extends

- `BaseContract`

## Properties

### address

> **address**: `string`

#### Inherited from

`BaseContract.address`

***

### provider

> **provider**: `Provider`

#### Inherited from

`BaseContract.provider`

***

### signer?

> `optional` **signer**: `Signer`

#### Inherited from

`BaseContract.signer`

## Methods

### getDomain()

> **getDomain**(`id`): `Promise`\<`CommonDomain`\>

#### Parameters

##### id

`BigNumberish`

#### Returns

`Promise`\<`CommonDomain`\>

***

### getDomainCount()

> **getDomainCount**(): `Promise`\<`BigNumber`\>

#### Returns

`Promise`\<`BigNumber`\>

***

### getDomainFromFundingPot()?

> `optional` **getDomainFromFundingPot**(`fundingPotId`): `Promise`\<`BigNumber`\>

#### Parameters

##### fundingPotId

`BigNumberish`

#### Returns

`Promise`\<`BigNumber`\>

***

### getFundingPot()

> **getFundingPot**(`id`): `Promise`\<`CommonFundingPot`\>

#### Parameters

##### id

`BigNumberish`

#### Returns

`Promise`\<`CommonFundingPot`\>

***

### getPayment()

> **getPayment**(`id`): `Promise`\<`CommonPayment`\>

#### Parameters

##### id

`BigNumberish`

#### Returns

`Promise`\<`CommonPayment`\>

***

### getTask()

> **getTask**(`id`): `Promise`\<`CommonTask`\>

#### Parameters

##### id

`BigNumberish`

#### Returns

`Promise`\<`CommonTask`\>

***

### hasUserRole()

> **hasUserRole**(`user`, `domainId`, `role`): `Promise`\<`boolean`\>

#### Parameters

##### user

`string`

##### domainId

`BigNumberish`

##### role

`BigNumberish`

#### Returns

`Promise`\<`boolean`\>
