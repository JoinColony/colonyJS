import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/2/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/2/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedCoinMachine } from './augments/commonAugments';

export interface CoinMachineClient extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 2;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClient {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClient;

  coinMachineClient.clientVersion = 2;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
