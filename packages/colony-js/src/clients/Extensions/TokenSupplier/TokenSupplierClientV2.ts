import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { TokenSupplier } from '../../../contracts/TokenSupplier/2/TokenSupplier.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/2/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedTokenSupplier,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV2
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 2;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony,
  address: string,
): TokenSupplierClientV2 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV2;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 2;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
