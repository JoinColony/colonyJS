# Interface: ColonyTransaction\<C, E, R, MD\>

A standard transaction ("force" in dApp)

You can then `send` the transaction, wait for it to be `mined` or `encode` it.
See also https://docs.colony.io/colonysdk/guides/transactions for more information

## Example

```typescript
(async function() {
  // Just send off the transaction and get back the tx object
  // First tupel value is the ethers transaction, including the hash
  // Second tupel value is a function that does the same as `.mined()` below
  const [tx, mined] = await colony.claimFunds().tx().send();
  console.info(tx.hash); // Transaction hash
  const [eventData, receipt] = await mined();
  // Wait for tx to be mined, get back the eventData, receipt
  const [eventData, receipt] = await colony.claimFunds().tx().mined();
  // A transaction can also be output as a raw, encoded string for later use (e.g. using `sendRawTransaction`)
  const encoded = await colony.claimFunds().tx().encode();
  console.log(encoded); // 0x89224a1e000000000000000000000000bdc38a08548b47015f5fe853aa6614cfb2cbfcc0
})();
```

## Type Parameters

• **C** *extends* [`ContractTransaction`](ContractTransaction.md)

• **E** *extends* [`EventData`](EventData.md) \| [`MotionCreatedEventObject`](../namespaces/VotingReputationEvents/interfaces/MotionCreatedEventObject.md)

• **R** *extends* [`ContractReceipt`](ContractReceipt.md)

• **MD** *extends* [`MetadataType`](../enumerations/MetadataType.md)

## Methods

### encode()

> **encode**(): `Promise`\<`string`\>

Encode the transaction into a raw string

#### Returns

`Promise`\<`string`\>

A raw, encoded transaction string

***

### mined()

> **mined**(`overrides`?): `Promise`\<\[`E`, `R`\] \| \[`E`, `R`, () => `Promise`\<[`MetadataTypeMap`](MetadataTypeMap.md)\[`MD`\]\>\]\>

Wait until the tx is mined, returning the event data and the receipt

#### Parameters

##### overrides?

`TxOverrides`

#### Returns

`Promise`\<\[`E`, `R`\] \| \[`E`, `R`, () => `Promise`\<[`MetadataTypeMap`](MetadataTypeMap.md)\[`MD`\]\>\]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

***

### send()

> **send**(`overrides`?): `Promise`\<\[`C`, () => `Promise`\<\[`E`, `R`, () => `Promise`\<[`MetadataTypeMap`](MetadataTypeMap.md)\[`MD`\]\>\] \| \[`E`, `R`\]\>\]\>

Send off the tx, returning the transaction including its hash, not waiting for it to be mined

#### Parameters

##### overrides?

`TxOverrides`

#### Returns

`Promise`\<\[`C`, () => `Promise`\<\[`E`, `R`, () => `Promise`\<[`MetadataTypeMap`](MetadataTypeMap.md)\[`MD`\]\>\] \| \[`E`, `R`\]\>\]\>

A tupel of a contract transaction and a function to wait for the mined event data as well as the receipt
