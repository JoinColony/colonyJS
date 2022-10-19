import { Interface } from 'ethers/utils';
import { IColony as IColonyV9 } from '../../../contracts/colony/9/IColony';
import { IColony as IColonyV10 } from '../../../contracts/colony/10/IColony';
import {
  Interfaces as InterfacesV9,
  addEncodeInterfaces as addEncodeInterfacesV9,
} from './encodeInterfacesV9';

type PreviousVersionsInterfaces = InterfacesV9;
type ValidColony = IColonyV10;

export type Interfaces = {} & PreviousVersionsInterfaces;

export interface ColonyWithInterfacesV10 extends ValidColony {
  interface: Interface & {
    events: IColonyV10['interface']['events'];
    functions: IColonyV10['interface']['functions'] & Interfaces;
  };
}

/*
 * Bindings
 */
export const addEncodeInterfaces = (
  colonyClient: ValidColony,
): ColonyWithInterfacesV10 => {
  const {
    interface: { functions: v9functions },
  } = addEncodeInterfacesV9(colonyClient as IColonyV9);

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
    ...v9functions,
  };

  return colonyClient as ColonyWithInterfacesV10;
};
