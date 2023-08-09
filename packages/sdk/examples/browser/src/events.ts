import { providers, utils } from 'ethers';
import { IColonyEvents__factory as ColonyEventsFactory } from '@colony/events/types';

import {
  ColonyEventManager,
  ColonyRpcEndpoint,
  MetadataType,
} from '../../../src/index.js';
import type { ColonyEvent } from '../../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);
const { isAddress } = utils;

// This event listener will only list for the `DomainAdded` event in the Colony of the user's choice. Run this and then create a Team in that Colony, to see it being picked up here
const setupEventListener = (
  colonyAddress: string,
  callback: (events: ColonyEvent<MetadataType>[]) => void,
) => {
  const manager = new ColonyEventManager(provider);
  const colonyEventSource = manager.createEventSource(ColonyEventsFactory);

  const domainEvents = manager.createMultiFilter(
    colonyEventSource,
    ['DomainAdded(address,uint256)', 'DomainMetadata(address,uint256,string)'],
    colonyAddress,
  );

  let i = 0;

  manager.provider.on('block', async (no) => {
    i += 1;
    // Only get events every 5 blocks to debounce this a little bit
    if (i === 4) {
      const events = await manager.getMultiEvents(domainEvents, {
        fromBlock: no - i,
        toBlock: no,
      });
      if (events.length) callback(events);
      i = 0;
    }
  });
};

// Just some basic setup to display the UI
const addressInput: HTMLInputElement | null =
  document.querySelector('#address');
const button = document.querySelector('#button');
const errElm: HTMLParagraphElement | null = document.querySelector('#error');
const resultElm: HTMLParagraphElement | null =
  document.querySelector('#result');

if (!addressInput || !button || !errElm || !resultElm) {
  throw new Error('Could not find all required HTML elements');
}

const panik = (err: string) => {
  errElm.innerText = err;
};
const kalm = () => {
  errElm.innerText = '';
};
const speak = (msg: string) => {
  resultElm.innerText = msg;
};

button.addEventListener('click', async () => {
  kalm();
  const colonyAddress = addressInput.value;
  if (!isAddress(colonyAddress)) {
    return panik('This is not a valid address');
  }
  addressInput.value = '';
  setupEventListener(colonyAddress, (events) => {
    speak(
      `A domain with id ${events[0].data.domainId} was created on Colony ${events[0].address}.`,
    );
    events.forEach(async (event) => {
      if (event.getMetadata) {
        const metadata = await event.getMetadata();
        if (metadata.name === MetadataType.Domain) {
          const { domainName, domainColor, domainPurpose } = metadata.data;
          speak(
            `A domain with id ${event.data.domainId} was created on Colony ${event.address}. It's name is ${domainName}, it's color ${domainColor} and was created for the following purpose: ${domainPurpose}`,
          );
        }
      }
    });
  });
  speak(`Set up event listener for Colony ${colonyAddress}`);
  return null;
});
