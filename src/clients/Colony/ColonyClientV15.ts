import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory as IColonyFactoryV3 } from '../../contracts/3/IColonyFactory';
import { IColonyFactory as IColonyFactoryV4 } from '../../contracts/4/IColonyFactory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/colony/6/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV7 } from '../../contracts/colony/7/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV8 } from '../../contracts/colony/8/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV9 } from '../../contracts/colony/9/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV10 } from '../../contracts/colony/10/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV11 } from '../../contracts/colony/11/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV12 } from '../../contracts/colony/12/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV13 } from '../../contracts/colony/13/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV14 } from '../../contracts/colony/14/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV15 } from '../../contracts/colony/15/factories/IColony__factory';

import { IColony as IColonyV6 } from '../../contracts/colony/6/IColony';
import { IColony as IColonyV7 } from '../../contracts/colony/7/IColony';
import { IColony as IColonyV8 } from '../../contracts/colony/8/IColony';
import { IColony as IColonyV9 } from '../../contracts/colony/9/IColony';
import { IColony as IColonyV10 } from '../../contracts/colony/10/IColony';
import { IColony as IColonyV11 } from '../../contracts/colony/11/IColony';
import { IColony as IColonyV12 } from '../../contracts/colony/12/IColony';
import { IColony as IColonyV13 } from '../../contracts/colony/13/IColony';
import { IColony as PreviousIColony } from '../../contracts/colony/14/IColony';
import { IColony } from '../../contracts/colony/15/IColony';

import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import { ColonyExtensionsV4 } from './extensions/extensionsV4';
import { ColonyExtensionsV5 } from './extensions/extensionsV5';
import { ColonyExtensionsV6 } from './extensions/extensionsV6';
import { ColonyExtensionsV7 } from './extensions/extensionsV7';
import { ColonyExtensionsV8 } from './extensions/extensionsV8';
import { ColonyExtensionsV9 } from './extensions/extensionsV9';
import { ColonyExtensionsV10 } from './extensions/extensionsV10';
import { ColonyExtensionsV11 } from './extensions/extensionsV11';
import { ColonyExtensionsV12 } from './extensions/extensionsV12';
import { ColonyExtensionsV13 } from './extensions/extensionsV13';
import { ColonyExtensionsV14 } from './extensions/extensionsV14';

import {
  addExtensions,
  ColonyExtensionsV15,
  ExtendedEstimateV15,
} from './extensions/extensionsV15';

import { addEncodeInterfaces } from './interfaces/encodeInterfacesV15';

import { getAllAbiEvents, getAbiFunctions } from '../../utils';
import { ColonyVersion } from '../../versions';

type ColonyExtensions = Omit<
  ExtendedIColony<any>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyExtensionsV3<IColonyV6> &
  ColonyExtensionsV4<IColonyV6> &
  ColonyExtensionsV5<IColonyV6> &
  ColonyExtensionsV6<IColonyV6> &
  ColonyExtensionsV7<IColonyV7> &
  ColonyExtensionsV8<IColonyV8> &
  ColonyExtensionsV9<IColonyV9> &
  ColonyExtensionsV10<IColonyV10> &
  ColonyExtensionsV11<IColonyV11> &
  ColonyExtensionsV12<IColonyV12> &
  ColonyExtensionsV13<IColonyV13> &
  ColonyExtensionsV14<PreviousIColony> &
  ColonyExtensionsV15<IColony>;

export type ColonyClientV15 = ColonyExtensions & {
  clientVersion: ColonyVersion.GreenLightweightSpaceshipThree;
  estimate: ExtendedIColony<any>['estimate'] & ExtendedEstimateV15;
};

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV15 {
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV15,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [
      IColonyFactoryV15,
      IColonyFactoryV14,
      IColonyFactoryV13,
      IColonyFactoryV12,
      IColonyFactoryV11,
      IColonyFactoryV10,
      IColonyFactoryV9,
      IColonyFactoryV8,
      IColonyFactoryV7,
      IColonyFactoryV6,
      IColonyFactoryV5,
      IColonyFactoryV4,
      IColonyFactoryV3,
    ],
    address,
    signerOrProvider,
  );

  /*
   * For this to work we have to create our own instance of the contract, so
   * that we can pass in the merged abi events
   */
  const customEthersContractInstace = (new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown) as ColonyClientV15;

  /*
   * We need to clone the Ethers intance otherwise props, which we may
   * want appent or overwrite, won't work since Ethers marks their props
   * as read-only and non-configurable by default
   *
   * @TODO All of this should be extracted as an util to remove code repetition
   * when creating new Colony version clients
   */
  const colonyClientV15 = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    ...customEthersContractInstace,
    interface: {
      ...customEthersContractInstace.interface,
      /*
       * Manually assign non-enumerable props
       */
      parseLog: customEthersContractInstace.interface.parseLog,
      parseTransaction: customEthersContractInstace.interface.parseTransaction,
    },
  } as ColonyClientV15;
  colonyClientV15.clientVersion = ColonyVersion.IndigoMediumweightSpaceship;

  addExtensions(colonyClientV15, this);
  addEncodeInterfaces(colonyClientV15);

  return colonyClientV15;
}
