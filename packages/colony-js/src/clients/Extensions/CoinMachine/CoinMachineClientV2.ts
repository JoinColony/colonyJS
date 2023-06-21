import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/2/factories/CoinMachine__factory.js';
import { CoinMachine } from '../../../contracts/CoinMachine/2/CoinMachine.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  AugmentedCoinMachine,
} from './augments/commonAugments.js';

export interface CoinMachineClientV2 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 2;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV2 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV2;

  coinMachineClient.clientVersion = 2;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
