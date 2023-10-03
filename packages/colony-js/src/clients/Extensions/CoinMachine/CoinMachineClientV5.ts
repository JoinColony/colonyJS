import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { CoinMachine } from '../../../contracts/CoinMachine/5/CoinMachine.js';

import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/5/factories/CoinMachine__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedCoinMachine,
} from './augments/commonAugments.js';

export interface CoinMachineClientV5 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 5;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV5 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV5;

  coinMachineClient.clientType = ClientType.CoinMachineClient;
  coinMachineClient.clientVersion = 5;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
