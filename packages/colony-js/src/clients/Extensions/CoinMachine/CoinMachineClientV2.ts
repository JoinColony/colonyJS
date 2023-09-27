import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/2/factories/CoinMachine__factory.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import {
  addAugments,
  UnkonwnCoinMachineClient,
} from './augments/commonAugments.js';

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnkonwnCoinMachineClient;

  coinMachineClient.clientVersion = 2;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
