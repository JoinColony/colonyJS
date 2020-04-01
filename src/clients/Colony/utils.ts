import { Contract } from 'ethers';
import { BigNumberish } from 'ethers/utils';

// Extend an interface just like Object.assign()
export type AssignInterface<P, C> = C & Omit<P, keyof C>;

export const getDomainProofs = <C extends Contract>(
  contract: C,
  domainId: BigNumberish,
): [number, number] => {
  // @TODO Do domain proof magic here
  console.info(contract, domainId);
  return [1, 1];
};
