import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/3/factories/Whitelist__factory';
import { Whitelist } from '../../../contracts/Whitelist/3/Whitelist';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments';

export interface WhitelistClientV3 extends AugmentedWhitelist<Whitelist> {
  clientVersion: 3;
}

export default function getWhitelistClient(
  colonyClient: AugmentedIColony,
  address: string,
): WhitelistClientV3 {
  const whitelistClient = WhitelistFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as WhitelistClientV3;

  whitelistClient.clientVersion = 3;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
