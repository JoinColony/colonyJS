import { Interface } from 'ethers/utils';
import { IColony as IColonyV10 } from '../../../contracts/colony/10/IColony';
import { IColony as IColonyV11 } from '../../../contracts/colony/11/IColony';
import {
  Interfaces as InterfacesV10,
  addEncodeInterfaces as addEncodeInterfacesV10,
} from './encodeInterfacesV10';

type PreviousVersionsInterfaces = InterfacesV10;
type ValidColony = IColonyV11;

export type Interfaces = {} & PreviousVersionsInterfaces;

export interface ColonyWithInterfacesV11 extends ValidColony {
  interface: Interface & {
    events: IColonyV11['interface']['events'];
    functions: IColonyV11['interface']['functions'] & Interfaces;
  };
}

/*
 * Bindings
 */
export const addEncodeInterfaces = (
  colonyClient: ValidColony,
): ColonyWithInterfacesV11 => {
  const {
    interface: { functions: v10functions },
  } = addEncodeInterfacesV10(colonyClient as IColonyV10);

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
    ...v10functions,
  };

  return colonyClient as ColonyWithInterfacesV11;
};
