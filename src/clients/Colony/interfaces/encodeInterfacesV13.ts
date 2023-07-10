import { Interface } from 'ethers/utils';
import { IColony as IColonyV10 } from '../../../contracts/colony/10/IColony';
import { IColony as IColonyV11 } from '../../../contracts/colony/11/IColony';
import { IColony as IColonyV12 } from '../../../contracts/colony/12/IColony';
import { IColony as IColonyV13 } from '../../../contracts/colony/13/IColony';
import { addEncodeInterfaces as addEncodeInterfacesV10 } from './encodeInterfacesV10';
import { addEncodeInterfaces as addEncodeInterfacesV11 } from './encodeInterfacesV11';
import {
  Interfaces as InterfacesV12,
  addEncodeInterfaces as addEncodeInterfacesV12,
} from './encodeInterfacesV12';

type PreviousVersionsInterfaces = InterfacesV12;
type ValidColony = IColonyV13;

export type Interfaces = {} & PreviousVersionsInterfaces;

export interface ColonyWithInterfacesV13 extends ValidColony {
  interface: Interface & {
    events: IColonyV13['interface']['events'];
    functions: IColonyV13['interface']['functions'] & Interfaces;
  };
}

/*
 * Bindings
 */
export const addEncodeInterfaces = (
  colonyClient: ValidColony,
): ColonyWithInterfacesV13 => {
  const {
    interface: { functions: v10functions },
  } = addEncodeInterfacesV10(colonyClient as IColonyV10);
  const {
    interface: { functions: v11functions },
  } = addEncodeInterfacesV11(colonyClient as IColonyV11);
  const {
    interface: { functions: v12functions },
  } = addEncodeInterfacesV12(colonyClient as IColonyV12);

  /*
   * We're overwriting the original object in an effort to reduce
   * nesting
   *
   * Note: that this does not work the same for v9, but will function
   * this way going onward from version 10
   */
  // eslint-disable-next-line no-param-reassign
  colonyClient.interface.functions = {
    ...colonyClient.interface.functions,
    ...v12functions,
    ...v11functions,
    ...v10functions,
  };

  return colonyClient as ColonyWithInterfacesV13;
};
