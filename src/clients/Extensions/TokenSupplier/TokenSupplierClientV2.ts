import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/2/factories/TokenSupplier__factory';
import { TokenSupplier } from '../../../contracts/TokenSupplier/2/TokenSupplier';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedTokenSupplier } from './augments/commonAugments';

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
