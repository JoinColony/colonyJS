import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/5/factories/Whitelist__factory';
import { Whitelist } from '../../../contracts/Whitelist/5/Whitelist';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments';

export interface WhitelistClientV5 extends AugmentedWhitelist<Whitelist> {
  clientVersion: 5;
}

export default function getWhitelistClient(
  colonyClient: AugmentedIColony,
  address: string,
): WhitelistClientV5 {
  const whitelistClient = WhitelistFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as WhitelistClientV5;

  whitelistClient.clientVersion = 5;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
