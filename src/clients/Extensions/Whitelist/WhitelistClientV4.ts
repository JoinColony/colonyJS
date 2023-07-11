import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/4/factories/Whitelist__factory';
import { Whitelist } from '../../../contracts/Whitelist/4/Whitelist';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments';

export interface WhitelistClientV4 extends AugmentedWhitelist<Whitelist> {
  clientVersion: 4;
}

export default function getWhitelistClient(
  colonyClient: AugmentedIColony,
  address: string,
): WhitelistClientV4 {
  const whitelistClient = WhitelistFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as WhitelistClientV4;

  whitelistClient.clientVersion = 4;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
