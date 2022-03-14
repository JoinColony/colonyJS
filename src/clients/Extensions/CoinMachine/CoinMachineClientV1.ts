import { ClientType } from '../../../types';
import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/1/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/1/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

export interface CoinMachineClient extends CoinMachine {
  clientType: ClientType.CoinMachineClient;
  clientVersion: 1;
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

  return coinMachineClient;
}
