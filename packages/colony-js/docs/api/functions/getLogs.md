[**API**](../README.md)

***

# Function: getLogs()

> **getLogs**(`client`, `filter`, `options`): `Promise`\<`Log`[]\>

Get raw (unparsed logs) from filter

Example:
```typescript
// Gets the logs for the `ColonyFundsClaimed` event (not filtered)
const filter = colonyClient.filters.ColonyFundsClaimed(null, null, null);
const logs = await getLogs(colonyClient, filter);
```

## Parameters

### client

[`ContractClient`](../type-aliases/ContractClient.md)

Any of the intantiated contract clients

### filter

`Filter`

ethers compatible Filter object

### options

`LogOptions` = `...`

Configuration options to filter logs

## Returns

`Promise`\<`Log`[]\>

ethers Log array
