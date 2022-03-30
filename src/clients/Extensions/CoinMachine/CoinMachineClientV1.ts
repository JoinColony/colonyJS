import { ClientType } from '../../../types';
import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/1/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/1/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

export interface CoinMachineClient extends CoinMachine {
  clientType: ClientType.CoinMachineClient;
  clientVersion: 1;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClient {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClient;

  coinMachineClient.clientType = ClientType.CoinMachineClient;
  coinMachineClient.clientVersion = 1;
  coinMachineClient.colonyClient = colonyClient;

  return coinMachineClient;
}
