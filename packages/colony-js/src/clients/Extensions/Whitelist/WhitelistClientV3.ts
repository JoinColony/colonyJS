import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { Whitelist } from '../../../contracts/Whitelist/3/Whitelist.js';

import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/3/factories/Whitelist__factory.js';
import { ClientType } from '../../../constants.js';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments.js';

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

  whitelistClient.clientType = ClientType.WhitelistClient;
  whitelistClient.clientVersion = 3;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
