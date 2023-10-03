import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { TokenSupplier } from '../../../contracts/TokenSupplier/4/TokenSupplier.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/4/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedTokenSupplier,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV4
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 4;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony,
  address: string,
): TokenSupplierClientV4 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV4;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 4;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
