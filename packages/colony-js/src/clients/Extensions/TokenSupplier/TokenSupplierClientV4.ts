import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/4/factories/TokenSupplier__factory';
import { TokenSupplier } from '../../../contracts/TokenSupplier/4/TokenSupplier';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedTokenSupplier } from './augments/commonAugments';

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

  tokenSupplierClient.clientVersion = 4;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
