import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { CoinMachine } from '../../../contracts/CoinMachine/6/CoinMachine.js';

import { ClientType } from '../../../constants.js';
import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/6/factories/CoinMachine__factory.js';
import {
  addAugments,
  AugmentedCoinMachine,
} from './augments/commonAugments.js';

export interface CoinMachineClientV6 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 6;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV6 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV6;

  coinMachineClient.clientType = ClientType.CoinMachineClient;
  coinMachineClient.clientVersion = 6;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
