import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/5/factories/TokenSupplier__factory';
import { TokenSupplier } from '../../../contracts/TokenSupplier/5/TokenSupplier';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedTokenSupplier } from './augments/commonAugments';

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
