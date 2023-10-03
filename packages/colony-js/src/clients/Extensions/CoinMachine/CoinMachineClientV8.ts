import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { CoinMachine } from '../../../contracts/CoinMachine/8/CoinMachine.js';

import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/8/factories/CoinMachine__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedCoinMachine,
} from './augments/commonAugments.js';

export interface CoinMachineClientV8 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 8;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV8 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV8;

  coinMachineClient.clientType = ClientType.CoinMachineClient;
  coinMachineClient.clientVersion = 8;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
