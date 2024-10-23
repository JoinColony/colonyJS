import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/2/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  type UnkonwnTokenSupplierClient,
  addAugments,
} from './augments/commonAugments.js';

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnkonwnTokenSupplierClient;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 2;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
