import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/3/factories/TokenSupplier__factory';
import { TokenSupplier } from '../../../contracts/TokenSupplier/3/TokenSupplier';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedTokenSupplier } from './augments/commonAugments';

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
