import { Signer } from 'ethers';
import { getAddress, EventFragment } from 'ethers/utils';
import { Provider } from 'ethers/providers';

import { IColony__factory as IColonyFactory } from '../src/contracts/colony/9/factories/IColony__factory';
import { ColonyVersion } from './versions';

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

export const getExtensionCompatibilityMap = (
  incompatibilityMap: Record<string, number[]>,
  colonyVersions: typeof ColonyVersion,
): Record<number, number[]> => {
  const compatibilityMap: Record<number, number[]> = {};
  const allColonyVersions = Object.keys(colonyVersions)
    .map((version) => parseInt(version, 10))
    .filter((version) => !!version);
  const extensionVersions = Object.keys(incompatibilityMap);
  extensionVersions.map((version) => {
    const currentCompatibleVersions = allColonyVersions.filter(
      (colonyVersion) => !incompatibilityMap[version].includes(colonyVersion),
    );
    compatibilityMap[parseInt(version, 10)] = currentCompatibleVersions;
    return null;
  });
  return compatibilityMap;
};
