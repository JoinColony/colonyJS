import { ClientType } from '../../constants';
import { CoinMachine__factory as CoinMachineFactory } from '../../contracts/6/factories/CoinMachine__factory';
import { CoinMachine } from '../../contracts/6/CoinMachine';
import { ExtendedIColony } from '../Colony/extensions/commonExtensions';

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
