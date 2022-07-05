# Interface: ColonyMultiFilter

[events](../modules/events.md).ColonyMultiFilter

ColonyFilter with support for multi-events
For the multi-event compatible filters the following assumptions prevail:
- `address` is a mandatory field
- The list of filter topics is always OR'd, never AND'd.
- `fromBlock` and `toBlock` are not available

## Properties

### address

• **address**: `string`

### colonyTopics

• **colonyTopics**: `ColonyTopic`[]
