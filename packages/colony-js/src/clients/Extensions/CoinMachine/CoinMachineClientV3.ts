import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/3/factories/CoinMachine__factory.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  UnkonwnCoinMachineClient,
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

  coinMachineClient.clientVersion = 3;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
