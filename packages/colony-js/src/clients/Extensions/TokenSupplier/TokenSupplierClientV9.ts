import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { TokenSupplier } from '../../../contracts/TokenSupplier/9/TokenSupplier.js';

import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/9/factories/TokenSupplier__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedTokenSupplier,
  type ValidColony,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV9
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 9;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): TokenSupplierClientV9 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV9;

  tokenSupplierClient.clientType = ClientType.TokenSupplierClient;
  tokenSupplierClient.clientVersion = 9;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
