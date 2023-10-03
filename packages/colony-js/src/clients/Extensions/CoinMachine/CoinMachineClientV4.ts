import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/4/factories/CoinMachine__factory.js';
import { ClientType } from '../../../constants.js';
import {
  type UnkonwnCoinMachineClient,
  addAugments,
} from './augments/commonAugments.js';

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnkonwnCoinMachineClient;

  coinMachineClient.clientType = ClientType.CoinMachineClient;
  coinMachineClient.clientVersion = 4;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
