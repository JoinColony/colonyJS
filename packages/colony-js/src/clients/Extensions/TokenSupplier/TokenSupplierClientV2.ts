import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/2/factories/TokenSupplier__factory.js';
import { TokenSupplier } from '../../../contracts/TokenSupplier/2/TokenSupplier.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
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

  tokenSupplierClient.clientVersion = 2;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
