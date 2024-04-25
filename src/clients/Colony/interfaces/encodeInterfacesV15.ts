import { Interface } from 'ethers/utils';
import { IColony as IColonyV10 } from '../../../contracts/colony/10/IColony';
import { IColony as IColonyV11 } from '../../../contracts/colony/11/IColony';
import { IColony as IColonyV12 } from '../../../contracts/colony/12/IColony';
import { IColony as IColonyV13 } from '../../../contracts/colony/13/IColony';
import { IColony as IColonyV14 } from '../../../contracts/colony/14/IColony';
import { IColony as IColonyV15 } from '../../../contracts/colony/15/IColony';
import { addEncodeInterfaces as addEncodeInterfacesV10 } from './encodeInterfacesV10';
import { addEncodeInterfaces as addEncodeInterfacesV11 } from './encodeInterfacesV11';
import { addEncodeInterfaces as addEncodeInterfacesV12 } from './encodeInterfacesV12';
import { addEncodeInterfaces as addEncodeInterfacesV13 } from './encodeInterfacesV13';
import {
  Interfaces as InterfacesV14,
  addEncodeInterfaces as addEncodeInterfacesV14,
} from './encodeInterfacesV14';

type PreviousVersionsInterfaces = InterfacesV14;
type ValidColony = IColonyV15;

export type Interfaces = {} & PreviousVersionsInterfaces;

// @ts-ignore
export interface ColonyWithInterfacesV15 extends ValidColony {
  interface: Interface & {
    events: IColonyV14['interface']['events'];
    functions: IColonyV14['interface']['functions'] & Interfaces;
  };
}

/*
 * Bindings
 */
export const addEncodeInterfaces = (
  colonyClient: ValidColony,
): ColonyWithInterfacesV15 => {
  const {
    interface: { functions: v10functions },
  } = addEncodeInterfacesV10((colonyClient as unknown) as IColonyV10);
  const {
    interface: { functions: v11functions },
  } = addEncodeInterfacesV11((colonyClient as unknown) as IColonyV11);
  const {
    interface: { functions: v12functions },
  } = addEncodeInterfacesV12((colonyClient as unknown) as IColonyV12);
  const {
    interface: { functions: v13functions },
  } = addEncodeInterfacesV13((colonyClient as unknown) as IColonyV13);
  const {
    interface: { functions: v14functions },
  } = addEncodeInterfacesV14(colonyClient as IColonyV14);

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
    ...v14functions,
    ...v13functions,
    ...v12functions,
    ...v11functions,
    ...v10functions,
  };

  // @ts-ignore
  return colonyClient as ColonyWithInterfacesV15;
};
