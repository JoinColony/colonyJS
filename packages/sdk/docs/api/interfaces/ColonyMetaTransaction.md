# Interface: ColonyMetaTransaction<C, E, R, MD\>

A standard gasless MetaTransaction ("force" in dApp)

You can then `send` the transaction, wait for it to be `mined` or `encode` it.
See also https://docs.colony.io/colonysdk/guides/transactions for more information

**`Example`**

```typescript
(async function() {
  // Just send off the transaction and get back the tx object
  // First tupel value is the ethers transaction, including the hash
  // Second tupel value is a function that does the same as `.mined()` below
  const [tx, mined] = await colony.claimFunds().metaTx().send();
  console.info(tx.hash); // Transaction hash
  const [eventData, receipt] = await mined();
  // Wait for tx to be mined, get back the eventData, receipt
  const [eventData, receipt] = await colony.claimFunds().metaTx().mined();
})();
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`TransactionResponse`](TransactionResponse.md) |
| `E` | extends [`EventData`](EventData.md) \| `MotionCreatedEventObject` |
| `R` | extends [`ParsedLogTransactionReceipt`](ParsedLogTransactionReceipt.md) |
| `MD` | extends [`MetadataType`](../enums/MetadataType.md) |

## Methods

### mined

▸ **mined**(): `Promise`<[`E`, `R`] \| [`E`, `R`, () => `Promise`<[`MetadataTypeMap`](MetadataTypeMap.md)[`MD`]\>]\>

Wait until the tx is mined, returning the event data and the receipt

#### Returns

`Promise`<[`E`, `R`] \| [`E`, `R`, () => `Promise`<[`MetadataTypeMap`](MetadataTypeMap.md)[`MD`]\>]\>

A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)

___

### send

▸ **send**(): `Promise`<[`C`, () => `Promise`<[`E`, `R`, () => `Promise`<[`MetadataTypeMap`](MetadataTypeMap.md)[`MD`]\>] \| [`E`, `R`]\>]\>

Send off the tx, returning the transaction including its hash, not waiting for it to be mined

#### Returns

`Promise`<[`C`, () => `Promise`<[`E`, `R`, () => `Promise`<[`MetadataTypeMap`](MetadataTypeMap.md)[`MD`]\>] \| [`E`, `R`]\>]\>

A tupel of a contract transaction and a function to wait for the mined event data as well as the receipt
