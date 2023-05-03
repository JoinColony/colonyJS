# Colony Event Metadata Parser

## Metadata format versions

ColonyDapp should support legacy Metadata formats.
Therefore, when parsing (in ColonyDapp) it is necessary to check the Metadata format version and support V1 & later versions.
```ts
const metadataVersion = getEventMetadataVersion(ipfsMetadataObject);
if (metadataVersion === 1) {
/*
* original metadata format
*/
...
}
else {
/*
* new metadata format
*/
....
}
```

## Parsing

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

## Creating metadata objects

```ts
import { createMetadataFor, MetadataType } from '@colony/event-metadata';

const colonyMetadata = createMetadataFor(MetadataType.Colony, { colonyName: 'Foo' });
console.log(colonyMetadata.version); // 2
console.log(colonyMetadata.name); // 'colony'
console.log(colonyMetadata.data); // { colonyName: 'Foo' }
```

## License
GPL-3.0
