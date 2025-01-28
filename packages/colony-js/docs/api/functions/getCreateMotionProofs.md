# Function: getCreateMotionProofs()

> **getCreateMotionProofs**(`network`, `colony`, `reputation`, `votingReputation`, `domainId`, `altTarget`, `action`): `Promise`\<\{ `actionCid`: `BigNumber`; `branchMask`: `string`; `key`: `string`; `siblings`: `string`[]; `value`: `string`; \}\>

Gets the necessary proofs for motion creation

This gets the reputation and domain proofs for motion creation

## Parameters

### network

`CommonNetwork`

### colony

[`CommonColony`](../interfaces/CommonColony.md)

### reputation

[`ReputationClient`](../classes/ReputationClient.md)

### votingReputation

`BaseContract`

### domainId

`BigNumberish`

Domain id the motion will be created in

### altTarget

`string`

Target address for the motion (0x0 if Colony contract)

### action

`BytesLike`

The encoded action the motion will execute when finalized

## Returns

`Promise`\<\{ `actionCid`: `BigNumber`; `branchMask`: `string`; `key`: `string`; `siblings`: `string`[]; `value`: `string`; \}\>

The necessary reputation and domain proofs to create a motion
