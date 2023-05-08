📆 Parse and serialize Colony event metadata

[![Discord](https://img.shields.io/discord/562263648173555742)](https://discord.gg/feVZWwysqM)

# `@colony/event-metadata`

This library parses and serializes data that is usually stored as metadata for blockchain events (usually on IPFS).

## Usage

### Metadata format versions

ColonyDapp should support legacy Metadata formats.
Therefore, when parsing (in ColonyDapp) it is necessary to check the Metadata format version and support V1 & later versions.

```ts
const metadataVersion = getEventMetadataVersion(ipfsMetadataObject);
if (metadataVersion === 1) {
    // original metadata format
} else {
    // new metadata format
}
```

### Parsing

If type of Metadata object is unknown (e.g. in event logs)

```ts
import { parseEventMetadata, MetadataType } from '@colony/event-metadata';

const anyMetadataObject = parseEventMetadata(metadataObj);

if (anyMetadataObject.name === MetadataType.Colony) {
    console.log(anyMetadataObject.data.colonyName); // 'Foo'
}
```

 If the type is known we can provide it and it will be validated against it:

```ts
import { parseEventMetadata, MetadataType } from '@colony/event-metadata';

const domainMetadata = parseEventMetadata(metadataObj, MetadataType.Domain);
console.log(domainMetadata.data.domainColor); // 2
```

### Creating metadata objects

```ts
import { createMetadataFor, MetadataType } from '@colony/event-metadata';

const colonyMetadata = createMetadataFor(MetadataType.Colony, { colonyName: 'Foo' });
console.log(colonyMetadata.version); // 2
console.log(colonyMetadata.name); // 'colony'
console.log(colonyMetadata.data); // { colonyName: 'Foo' }
```

## Building

To build this package, run `pnpm run build` in this directory. See the general [development instructions](../../README.md#Developing) for more information.

## Contributing

All contributions are welcome. Please read the [Contributing Guidelines](../../CONTRIBUTING.md) and review our [Code of Conduct](../../CODE_OF_CONDUCT.md) before submitting a PR.

## License

GPL-3.0
