import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/3/factories/TokenSupplier__factory.js';
import { TokenSupplier } from '../../../contracts/TokenSupplier/3/TokenSupplier.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedTokenSupplier,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV3
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 3;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony,
  address: string,
): TokenSupplierClientV3 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV3;

  tokenSupplierClient.clientVersion = 3;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
