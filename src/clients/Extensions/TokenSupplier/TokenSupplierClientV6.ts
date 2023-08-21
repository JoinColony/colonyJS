import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/6/factories/TokenSupplier__factory';
import { TokenSupplier } from '../../../contracts/TokenSupplier/6/TokenSupplier';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedTokenSupplier } from './augments/commonAugments';

export interface TokenSupplierClientV6
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 6;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony,
  address: string,
): TokenSupplierClientV6 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV6;

  tokenSupplierClient.clientVersion = 6;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
