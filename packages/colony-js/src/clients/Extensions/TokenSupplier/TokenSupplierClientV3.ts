import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { TokenSupplier } from '../../../contracts/TokenSupplier/3/TokenSupplier.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/3/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedTokenSupplier,
  type ValidColony,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV3
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 3;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): TokenSupplierClientV3 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV3;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 3;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
