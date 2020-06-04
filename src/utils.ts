import { getAddress } from 'ethers/utils';

// @TODO ethers v5 has an isAddress function
export const isAddress = (address: string) => {
  try {
    getAddress(address);
  } catch {
    return false;
  }
  return true;
}
