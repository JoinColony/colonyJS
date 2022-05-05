import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/2/factories/Whitelist__factory';
import { Whitelist } from '../../../contracts/Whitelist/2/Whitelist';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedWhitelst } from './augments/commonAugments';

export interface WhitelistClientV2 extends AugmentedWhitelst<Whitelist> {
  clientVersion: 2;
}

export default function getWhitelistClient(
  colonyClient: AugmentedIColony,
  address: string,
): WhitelistClientV2 {
  const whitelistClient = WhitelistFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as WhitelistClientV2;

  whitelistClient.clientVersion = 2;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
