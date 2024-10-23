import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { TokenSupplier } from '../../../contracts/TokenSupplier/8/TokenSupplier.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/8/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedTokenSupplier,
  type ValidColony,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV8
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 8;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): TokenSupplierClientV8 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV8;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 8;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
