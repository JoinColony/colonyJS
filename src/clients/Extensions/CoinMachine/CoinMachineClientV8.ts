import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/8/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/8/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedCoinMachine } from './augments/commonAugments';

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

  coinMachineClient.clientVersion = 8;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
