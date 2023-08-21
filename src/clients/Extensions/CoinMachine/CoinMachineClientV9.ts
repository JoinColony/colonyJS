import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/9/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/9/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedCoinMachine } from './augments/commonAugments';

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

  coinMachineClient.clientVersion = 9;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
