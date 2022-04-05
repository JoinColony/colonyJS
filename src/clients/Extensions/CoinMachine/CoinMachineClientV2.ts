import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/2/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/2/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedCoinMachine } from './augments/commonAugments';

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
