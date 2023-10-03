import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { CoinMachine } from '../../../contracts/CoinMachine/9/CoinMachine.js';

import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/9/factories/CoinMachine__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedCoinMachine,
} from './augments/commonAugments.js';

export interface CoinMachineClientV9 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 9;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV9 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV9;

  coinMachineClient.clientType = ClientType.CoinMachineClient;
  coinMachineClient.clientVersion = 9;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
