import { ClientType } from '../constants';
import { CoinMachineFactory } from '../contracts/5/CoinMachineFactory';
import { CoinMachine } from '../contracts/5/CoinMachine';
import { ExtendedIColony } from './Colony/extensions/commonExtensions';

export interface CoinMachineClient extends CoinMachine {
  clientType: ClientType.CoinMachineClient;
}

const getCoinMachineClient = (
  address: string,
  colonyClient: ExtendedIColony,
): CoinMachineClient => {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClient;

  coinMachineClient.clientType = ClientType.CoinMachineClient;

  return coinMachineClient;
};

export default getCoinMachineClient;
