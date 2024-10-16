import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/3/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type UnknownTokenSupplierClient,
  type ValidColony,
} from './augments/commonAugments.js';

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
) {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnknownTokenSupplierClient;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 3;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
