import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/4/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/4/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedCoinMachine } from './augments/commonAugments';

export interface CoinMachineClientV4 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 4;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV4 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV4;

  coinMachineClient.clientVersion = 4;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
