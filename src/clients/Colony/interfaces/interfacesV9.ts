import { BigNumberish, Interface } from 'ethers/utils';

import { IColony as IColonyV9 } from '../../../contracts/colony/9/IColony';
import {
  ExtendedIColony,
  getMethodsetArchitectureRoleProofs,
} from '../extensions/commonExtensions';

/*
 * This is the first version we have interfaces for, so "previous" ones are
 * nonexistent
 */
type PreviousVersionsInterfaces = {};
type ValidColony = IColonyV9;

/*
 * Types
 */
export type Interfaces = {
  setArchitectureRoleWithProofs: {
    encode: ([_user, _domainId, _setTo]: [
      string,
      BigNumberish,
      boolean,
    ]) => Promise<string>;
  };
} & PreviousVersionsInterfaces;

export interface ColonyWithInterfacesV9 extends ValidColony {
  interface: Interface & {
    events: IColonyV9['interface']['events'];
    functions: IColonyV9['interface']['functions'] & Interfaces;
  };
}

/*
 * Interface Methods
 */
async function setArchitectureRoleWithProofs(
  this: ValidColony,
  [_user, _domainId, _setTo]: [string, BigNumberish, boolean],
): Promise<string> {
  const [
    permissionDomainId,
    childSkillIndex,
  ] = await getMethodsetArchitectureRoleProofs(
    this as ExtendedIColony<ValidColony>,
    _user,
    _domainId,
  );
  return this.interface.functions.setArchitectureRole.encode([
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  ]);
}

/*
 * Bindings
 */
export const addInterfaces = (
  colonyClient: ValidColony,
): ColonyWithInterfacesV9 => {
  const updateColonyClient = Object.assign(
    Object.create(Object.getPrototypeOf(colonyClient)),
    colonyClient,
  );
  /*
   * @TODO It would be nice if we could put in the type to generate a whole
   * `FunctionDescription` type for our custom method encode
   *
   * But that would require us to parse types, which is not the most pleasant
   * or quick thing to implement
   */
  updateColonyClient.interface.functions.setArchitectureRoleWithProofs = {
    encode: setArchitectureRoleWithProofs,
  };
  return updateColonyClient as ColonyWithInterfacesV9;
};
