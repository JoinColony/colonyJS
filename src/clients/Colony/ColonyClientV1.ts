import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import {
  IColonyFactory,
  ExtendedIColony,
} from '../../../lib/contracts/1/IColonyFactory';

const getColonyClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedIColony => {
  const colonyClient = IColonyFactory.connect(address, signerOrProvider);

  colonyClient.addDomainWithProofs('foo');

  return colonyClient;
};

export default getColonyClient;
