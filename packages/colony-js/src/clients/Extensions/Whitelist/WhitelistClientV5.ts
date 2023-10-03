import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { Whitelist } from '../../../contracts/Whitelist/5/Whitelist.js';

import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/5/factories/Whitelist__factory.js';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments.js';
import { ClientType } from '../../../constants.js';

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

  whitelistClient.clientType = ClientType.WhitelistClient;
  whitelistClient.clientVersion = 5;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
