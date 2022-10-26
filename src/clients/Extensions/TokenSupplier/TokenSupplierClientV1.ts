import { TokenSupplier__factory as TokenSupplierFactory } from '../../../contracts/TokenSupplier/1/factories/TokenSupplier__factory';
import { TokenSupplier } from '../../../contracts/TokenSupplier/1/TokenSupplier';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedTokenSupplier } from './augments/commonAugments';

export interface TokenSupplierClientV1
  extends AugmentedTokenSupplier<TokenSupplier> {
  clientVersion: 1;
}

export default function getTokenSupplierClient(
  colonyClient: AugmentedIColony,
  address: string,
): TokenSupplierClientV1 {
  const tokenSupplierClient = TokenSupplierFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as TokenSupplierClientV1;

  tokenSupplierClient.clientVersion = 1;
  addAugments(tokenSupplierClient, colonyClient);

  return tokenSupplierClient;
}
