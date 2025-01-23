[**API**](../README.md)

***

# Function: parseLogs()

> **parseLogs**(`logs`, `iface`): `LogDescription`[]

Try to parse an array of logs with a given interface

Will filter out logs that can't be parsed with the given interface

## Parameters

### logs

`Log`[]

Array of log entries (usually from a [ContractReceipt](../interfaces/ContractReceipt.md))

### iface

`Interface`

Ethers compatible contract interface

## Returns

`LogDescription`[]

A list of parsed log entries (events)
