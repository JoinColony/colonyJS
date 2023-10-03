import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { Whitelist } from '../../../contracts/Whitelist/1/Whitelist.js';

import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/1/factories/Whitelist__factory.js';
import { ClientType } from '../../../constants.js';
import { addAugments, AugmentedWhitelist } from './augments/commonAugments.js';

export interface WhitelistClientV1 extends AugmentedWhitelist<Whitelist> {
  clientVersion: 1;
}

export default function getWhitelistClient(
  colonyClient: AugmentedIColony,
  address: string,
): WhitelistClientV1 {
  const whitelistClient = WhitelistFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as WhitelistClientV1;

  whitelistClient.clientType = ClientType.WhitelistClient;
  whitelistClient.clientVersion = 1;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
