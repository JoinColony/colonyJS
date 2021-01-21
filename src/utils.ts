import { Signer } from 'ethers';
import { getAddress, EventFragment } from 'ethers/utils';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../src/contracts/5/IColonyFactory';

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
