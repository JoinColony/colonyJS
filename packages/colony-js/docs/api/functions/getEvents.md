# Function: getEvents()

> **getEvents**(`client`, `filter`, `options`?): `Promise`\<`LogDescription`[]\>

Get parsed event data from filter

Example:
```typescript
// Gets the logs for the `ColonyFundsClaimed` event (not filtered)
const filter = colonyClient.filters.ColonyFundsClaimed(null, null, null);
const events = await getEvents(colonyClient, filter);
```

## Parameters

### client

[`ContractClient`](../type-aliases/ContractClient.md)

Any of the intantiated contract clients

### filter

`Filter`

ethers compatible Filter object

### options?

`LogOptions`

Configuration options to filter logs

## Returns

`Promise`\<`LogDescription`[]\>

Parsed ethers LogDescription array (events)
