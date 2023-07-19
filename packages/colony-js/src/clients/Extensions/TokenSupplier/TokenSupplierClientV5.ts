import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/5/factories/TokenSupplier__factory.js';
import { TokenSupplier } from '../../../contracts/TokenSupplier/5/TokenSupplier.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedTokenSupplier,
} from './augments/commonAugments.js';

export interface TokenSupplierClientV5
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 5;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony,
  address: string,
): TokenSupplierClientV5 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV5;

  tokenSupplierClient.clientVersion = 5;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
