import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { TokenSupplier } from '../../../contracts/TokenSupplier/6/TokenSupplier.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/6/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedTokenSupplier,
  type ValidColony,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV6
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 6;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): TokenSupplierClientV6 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV6;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 6;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
