import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/2/factories/Whitelist__factory.js';
import { Whitelist } from '../../../contracts/Whitelist/2/Whitelist.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments.js';

export interface WhitelistClientV2 extends AugmentedWhitelist<Whitelist> {
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
