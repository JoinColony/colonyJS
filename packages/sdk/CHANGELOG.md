# @colony/sdk

## 2.0.0-next.3

### Patch Changes

- 8de9d9ca: Upgrade TypeDoc to v0.24.8 and adjust link syntax style
- 542ffad8: Adjust import/export statements to be compatible with ESM only within node.js
- Updated dependencies [8de9d9ca]
- Updated dependencies [542ffad8]
  - @colony/event-metadata@3.0.1-next.0
  - @colony/core@1.1.1-next.0
  - @colony/tokens@0.1.3-next.0

## 2.0.0-next.2

### Major Changes

- beb76081: Breaking: Change the transaction API to allow for just sending txns and not waiting for them to be mined

  This change adds the new Colony SDK transaction API. The following is now applicable for all transaction methods (motions and metatransactions included)

  ```ts
  // Send off the transaction and only wait for the transaction hash
  const [tx, mined] = await colony.oneTx.pay(/* args */).tx().send(); // you can call mined() later (will yield the same as the fn below)
  // Send off the transaction and wait for it to be mined. Gets receipt and event data
  const [eventData, receipt] = await colony.oneTx.pay(/* args */).tx().mined();
  // Same for metatransactions
  await colony.oneTx.pay(/* args */).metaTx().send();
  await colony.oneTx.pay(/* args */).metaTx().mined();
  await; // And motions
  await colony.oneTx.pay(/* args */).motion().send();
  await colony.oneTx.pay(/* args */).motion().mined();
  await; // And metatransaction motions
  await colony.oneTx.pay(/* args */).metaMotion().send();
  await colony.oneTx.pay(/* args */).metaMotion().mined();
  ```

  Furthermore one can now encode regular transactions and motions into raw strings:

  ```ts
  const encoded_str = await colony.oneTx.pay(/* args */).tx().encode();
  const encoded_motion_str = await colony.oneTx
    .pay(/* args */)
    .motion()
    .encode();
  ```

## 2.0.0-next.1

### Major Changes

- d703cc6b: All examples, docs and guides are now adjusted to the v2 API.
- - Adjusted docs, examples and guides to v2
  - Event sources for the `EventManger` can now be hot-plugged and are not hardcoded anymore.

## 2.0.0

### Patch Changes

- Updated dependencies
  - @colony/core@1.0.0
