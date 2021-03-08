import { Signer } from 'ethers';
import { getAddress, EventFragment } from 'ethers/utils';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactory } from '../src/contracts/6/factories/IColony__factory';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isEqual = require('lodash.isequal');

// @TODO ethers v5 has an isAddress function
export const isAddress = (address: string) => {
  try {
    getAddress(address);
  } catch {
    return false;
  }
  return true;
};

export const getAbiEvents = (
  factory: IColonyFactory,
  address: string,
  signerOrProvider: Signer | Provider,
): EventFragment[] => {
  const {
    interface: { abi },
    // @ts-ignore
  } = factory.connect(address, signerOrProvider);
  return abi.filter(({ type }: EventFragment) => type === 'event');
};

export const getAbiFunctions = (
  factory: IColonyFactory,
  address: string,
  signerOrProvider: Signer | Provider,
): EventFragment[] => {
  const {
    interface: { abi },
    // @ts-ignore
  } = factory.connect(address, signerOrProvider);
  return abi.filter(({ type }: EventFragment) => type !== 'event');
};

export const getUniqueAbiEvents = (
  baseEventsAbi: EventFragment[],
  eventsAbi: EventFragment[],
): EventFragment[] =>
  eventsAbi.filter(
    (event) => !baseEventsAbi.find((baseEvent) => isEqual(baseEvent, event)),
  );

export const getAllAbiEvents = (
  factories: IColonyFactory[],
  address: string,
  signerOrProvider: Signer | Provider,
): EventFragment[] => {
  let abiEvents: EventFragment[] = [];
  factories.map((factory) => {
    const currentFactoryAbiEvents = getAbiEvents(
      factory,
      address,
      signerOrProvider,
    );
    const currentUniqueAbiEvents = getUniqueAbiEvents(
      abiEvents,
      currentFactoryAbiEvents,
    );
    abiEvents = [...abiEvents, ...currentUniqueAbiEvents];
    return null;
  });
  return abiEvents;
};
