---
"@colony/sdk": major
---

Breaking: Change the transaction API to allow for just sending txns and not waiting for them to be mined

This change adds the new Colony SDK transaction API. The following is now applicable for all transaction methods (motions and metatransactions included)

```ts
// Send off the transaction and only wait for the transaction hash
const [ tx, mined ] = await colony.oneTx.pay(/* args */).tx().send() // you can call mined() later (will yield the same as the fn below)
// Send off the transaction and wait for it to be mined. Gets receipt and event data
const [eventData, receipt] = await colony.oneTx.pay(/* args */).tx().mined()
// Same for metatransactions
await colony.oneTx.pay(/* args */).metaTx().send()
await colony.oneTx.pay(/* args */).metaTx().mined()
await // And motions
await colony.oneTx.pay(/* args */).motion().send()
await colony.oneTx.pay(/* args */).motion().mined()
await // And metatransaction motions
await colony.oneTx.pay(/* args */).metaMotion().send()
await colony.oneTx.pay(/* args */).metaMotion().mined()
```

Furthermore one can now encode regular transactions and motions into raw strings:

```ts
const encoded_str = await colony.oneTx.pay(/* args */).tx().encode()
const encoded_motion_str = await colony.oneTx.pay(/* args */).motion().encode()
```
