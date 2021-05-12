/*
 * CoinMachine Client Version 2 autogenerated by
 * @colony/colony-js version 4.0.0-beta.1 from colonyNetwork tag 'lwss-18-g840e378c'
 *
 * Feel free to modify as needed!
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ClientType } from '../../../../constants';
import { CoinMachine__factory as CoinMachineFactory } from '../../../../contracts/extensions/coinMachine/2/factories/CoinMachine__factory';
import { CoinMachine } from '../../../../contracts/extensions/coinMachine/2/CoinMachine';
import { ExtendedIColony } from '../../../../clients/Colony/extensions/commonExtensions';

import {
  getCoinMachineClientAddons,
  getCoinMachineClientEstimateAddons,
} from './CoinMachineClientAddons';

type CoinMachineEstimate = CoinMachine['estimate'];
interface CoinMachineEstimateWithAddons extends CoinMachineEstimate {
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

export interface CoinMachineClient extends CoinMachine {
  clientType: ClientType.CoinMachineClient;
  estimate: CoinMachineEstimateWithAddons;
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
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

  const addons = getCoinMachineClientAddons(coinMachineClient, colonyClient);
  const addonsEstimate = getCoinMachineClientEstimateAddons(
    coinMachineClient,
    colonyClient,
  );

  Object.keys(addons).map((addonName) => {
    coinMachineClient[addonName] = addons[addonName];
    return null;
  });

  Object.keys(addonsEstimate).map((addonName) => {
    coinMachineClient.estimate[addonName] = addonsEstimate[addonName];
    return null;
  });

  return coinMachineClient;
};

export default getCoinMachineClient;

/* eslint-enable */