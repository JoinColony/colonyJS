import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/7/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/7/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedCoinMachine } from './augments/commonAugments';

export interface CoinMachineClientV7 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 7;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV7 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV7;

  coinMachineClient.clientVersion = 7;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
