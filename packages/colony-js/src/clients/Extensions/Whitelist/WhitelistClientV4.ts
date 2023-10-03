import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { Whitelist } from '../../../contracts/Whitelist/4/Whitelist.js';

import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/4/factories/Whitelist__factory.js';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments.js';
import { ClientType } from '../../../constants.js';

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

  whitelistClient.clientType = ClientType.WhitelistClient;
  whitelistClient.clientVersion = 4;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
