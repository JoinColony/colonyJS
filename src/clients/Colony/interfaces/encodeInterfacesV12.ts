import { Interface } from 'ethers/utils';
import { IColony as IColonyV10 } from '../../../contracts/colony/10/IColony';
import { IColony as IColonyV11 } from '../../../contracts/colony/11/IColony';
import { IColony as IColonyV12 } from '../../../contracts/colony/12/IColony';
import { addEncodeInterfaces as addEncodeInterfacesV10 } from './encodeInterfacesV10';
import {
  Interfaces as InterfacesV11,
  addEncodeInterfaces as addEncodeInterfacesV11,
} from './encodeInterfacesV11';

type PreviousVersionsInterfaces = InterfacesV11;
type ValidColony = IColonyV12;

export type Interfaces = {} & PreviousVersionsInterfaces;

export interface ColonyWithInterfacesV12 extends ValidColony {
  interface: Interface & {
    events: IColonyV12['interface']['events'];
    functions: IColonyV12['interface']['functions'] & Interfaces;
  };
}

/*
 * Bindings
 */
export const addEncodeInterfaces = (
  colonyClient: ValidColony,
): ColonyWithInterfacesV12 => {
  const {
    interface: { functions: v10functions },
  } = addEncodeInterfacesV10(colonyClient as IColonyV10);
  const {
    interface: { functions: v11functions },
  } = addEncodeInterfacesV11(colonyClient as IColonyV11);

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
    ...v11functions,
    ...v10functions,
  };

  return colonyClient as ColonyWithInterfacesV12;
};
