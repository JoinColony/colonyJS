🎫 Colony event contract bindings

[![Discord](https://img.shields.io/discord/562263648173555742)](https://discord.gg/feVZWwysqM)

# `@colony/events`

This package contains pre-compiled Colony event contract bindings. These bindings contain types and ABIs for all events for all contracts across all versions in the Colony Network. You could use them in conjunction with the [EventManager from Colony SDK](https://docs.colony.io/colonysdk/api/classes/ColonyEventManager):

```ts
import { providers } from 'ethers';
import { IColonyEvents__factory as ColonyEventsFactory } from '@colony/events';

import {
  type ColonyEvent,
  ColonyEventManager,
  ColonyRpcEndpoint,
  MetadataType,
} from '@colony/sdk';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

const manager = new ColonyEventManager(provider);
const colonyEventSource = manager.createEventSource(ColonyEventsFactory);

// Filter all events that signal the creation of a new team within a Colony
const domainEvents = manager.createFilter(
    colonyEventSource,
    'DomainAdded(address,uint256)',
    colonyAddress,
);

manager.provider.on('block', async (no) => {
    const events = await manager.getMultiEvents(domainEvents);
    if (events.length) {
        console.log(events);
    }
});
```

## Building

To build this package, run `pnpm run build` in this directory. See the general [development instructions](../../README.md#Developing) for more information.

## Contributing

All contributions are welcome. Please read the [Contributing Guidelines](../../CONTRIBUTING.md) and review our [Code of Conduct](../../CODE_OF_CONDUCT.md) before submitting a PR.

## License

GPL-3.0
