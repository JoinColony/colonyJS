import { Contract, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import { IColonyFactory as IColonyFactoryV3 } from '../../contracts/3/IColonyFactory';
import { IColonyFactory as IColonyFactoryV4 } from '../../contracts/4/IColonyFactory';
import { IColony__factory as IColonyFactoryV5 } from '../../contracts/5/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV6 } from '../../contracts/colony/6/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV7 } from '../../contracts/colony/7/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV8 } from '../../contracts/colony/8/factories/IColony__factory';
import { IColony__factory as IColonyFactoryV9 } from '../../contracts/colony/9/factories/IColony__factory';
import { IColony } from '../../contracts/colony/9/IColony';
import { IColony as IColonyV6 } from '../../contracts/colony/6/IColony';
import { IColony as IColonyV7 } from '../../contracts/colony/7/IColony';
import { IColony as PreviousIColony } from '../../contracts/colony/8/IColony';
import { ColonyNetworkClient } from '../ColonyNetworkClient';
import { ExtendedIColony } from './extensions/commonExtensions';
import { ColonyExtensionsV3 } from './extensions/extensionsV3';
import { ColonyExtensionsV4 } from './extensions/extensionsV4';
import { ColonyExtensionsV5 } from './extensions/extensionsV5';
import { ColonyExtensionsV6 } from './extensions/extensionsV6';
import { ColonyExtensionsV7 } from './extensions/extensionsV7';
import { ColonyExtensionsV8 } from './extensions/extensionsV8';
import {
  addExtensions,
  ColonyExtensionsV9,
  ExtendedEstimateV9,
} from './extensions/extensionsV9';
import { addEncodeInterfaces } from './interfaces/encodeInterfacesV9';
import { getAllAbiEvents, getAbiFunctions } from '../../utils';
import { ColonyVersion } from '../../versions';

type ColonyExtensions = Omit<
  ExtendedIColony<IColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyExtensionsV3<IColonyV6> &
  ColonyExtensionsV4<IColonyV6> &
  ColonyExtensionsV5<IColonyV6> &
  ColonyExtensionsV6<IColonyV6> &
  ColonyExtensionsV7<IColonyV7> &
  ColonyExtensionsV8<PreviousIColony> &
  ColonyExtensionsV9<IColony>;

export type ColonyClientV9 = ColonyExtensions & {
  clientVersion: ColonyVersion.FuchsiaLightweightSpaceship;
  estimate: ExtendedIColony<IColony>['estimate'] & ExtendedEstimateV9;
};

export default function getColonyClient(
  this: ColonyNetworkClient,
  address: string,
  signerOrProvider: Signer | Provider,
): ColonyClientV9 {
  const abiFunctions = getAbiFunctions(
    IColonyFactoryV9,
    address,
    signerOrProvider,
  );
  /*
   * Get all events, including the ones from v3, as well as the current ones
   */
  const abiEvents = getAllAbiEvents(
    [
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
  const colonyClientV9 = (new Contract(
    address,
    [...abiFunctions, ...abiEvents],
    signerOrProvider,
  ) as unknown) as ColonyClientV9;

  colonyClientV9.clientVersion = ColonyVersion.FuchsiaLightweightSpaceship;
  addExtensions(colonyClientV9, this);

  /*
   * @NOTE We need to reassign the whole instance since we can't just modify
   * the passed in client (like `addExtensions` does).
   *
   * This is because we're adding to both `interfaces` and `functions` props
   * of the class, and those are set by default as non-writtable
   * (and non-cofigurable)
   *
   * Because of that, we clone instance of the client, which, after we change it,
   * needs to be re-assigned in order to reflect the new changes.
   */
  return (addEncodeInterfaces(colonyClientV9) as unknown) as ColonyClientV9;
}
