import { ClientType } from '../../../types';
import { Whitelist__factory as WhitelistFactory } from '../../../contracts/Whitelist/1/factories/Whitelist__factory';
import { Whitelist } from '../../../contracts/Whitelist/1/Whitelist';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

export interface WhitelistClient extends Whitelist {
  clientType: ClientType.WhitelistClient;
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

  whitelistClient.clientType = ClientType.WhitelistClient;
  whitelistClient.clientVersion = 1;

  return whitelistClient;
}
