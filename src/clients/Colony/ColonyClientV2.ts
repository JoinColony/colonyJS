import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/2/IColonyFactory';

import { IColony } from '../../../lib/contracts/2/IColony';

import { addExtensions, ColonyExtensions } from './ColonyClientV1';

interface ExtendedIColony extends IColony, ColonyExtensions {}

const getColonyClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedIColony => {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedIColony;

  addExtensions(colonyClient);

  return colonyClient as ExtendedIColony;
};

export default getColonyClient;
