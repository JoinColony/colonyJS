# Function: getMultipleEvents()

> **getMultipleEvents**(`client`, `filters`, `options`?): `Promise`\<`LogDescription`[]\>

Get multiple events from multiple filters

## Parameters

### client

[`ContractClient`](../type-aliases/ContractClient.md)

Any of the intantiated contract clients

### filters

`EventFilter`[]

Array of ethers compatible Filter objects

### options?

`LogOptions`

Configuration options to filter logs

## Returns

`Promise`\<`LogDescription`[]\>

Parsed ethers LogDescription array (events)

## Remarks

only works when all events are emitted by the same contract!
