import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/1/factories/Whitelist__factory';
import { Whitelist } from '../../../contracts/Whitelist/1/Whitelist';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedWhitelst } from './augments/commonAugments';

export interface WhitelistClient extends AugmentedWhitelst<Whitelist> {
  clientVersion: 1;
}

export default function getWhitelistClient(
  colonyClient: AugmentedIColony,
  address: string,
): WhitelistClient {
  const whitelistClient = WhitelistFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as WhitelistClient;

  whitelistClient.clientVersion = 1;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}
