import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/4/factories/Whitelist__factory.js';
import { Whitelist } from '../../../contracts/Whitelist/4/Whitelist.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments.js';

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
