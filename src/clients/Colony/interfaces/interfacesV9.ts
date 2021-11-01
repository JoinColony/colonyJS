import { BigNumberish, Interface } from 'ethers/utils';

import { IColony as IColonyV5 } from '../../../contracts/5/IColony';
import { IColony as IColonyV9 } from '../../../contracts/colony/9/IColony';
import {
  ExtendedIColony,
  getMethodSetArchitectureRoleProofs,
} from '../extensions/commonExtensions';
import {
  getMethodDomainProofs,
  ColonyExtensionsV5,
} from '../extensions/extensionsV5';
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
  addDomainWithProofs: {
    encode: ([_parentDomainId, _metadata]: [BigNumberish, string]) => Promise<
      string
    >;
  };
  editDomainWithProofs: {
    encode: ([_domainId, _metadata]: [BigNumberish, string]) => Promise<string>;
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
  ] = await getMethodSetArchitectureRoleProofs(
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
async function addDomainWithProofs(
  this: ValidColony,
  [_parentDomainId, _metadata]: [BigNumberish, string],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getMethodDomainProofs(
    (this as unknown) as ColonyExtensionsV5<IColonyV5>,
    _parentDomainId,
  );
  /*
   * Otherwise, because of the positioning of `overrides`, it might get confused
   * with it
   */
  if (typeof _metadata === 'string') {
    /*
     * @NOTE We're calling the method names directly by their string signature,
     * so we need to disable TS as it doesn't know about them
     */
    // @ts-ignore
    return this.interface.functions[
      'addDomain(uint256,uint256,uint256,string)'
    ].encode([permissionDomainId, childSkillIndex, _parentDomainId, _metadata]);
  }
  /*
   * Since we're not calling the overloaded version, which has the metadata string,
   * the `_metadata` argument now stands place for the `overrides` and contains
   * it's values
   */
  /*
   * @NOTE We're calling the method names directly by their string signature,
   * so we need to disable TS as it doesn't know about them
   */
  // @ts-ignore
  return this.interface.functions['addDomain(uint256,uint256,uint256)'].encode([
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
  ]);
}

async function editDomainWithProofs(
  this: ValidColony,
  [_domainId, _metadata]: [BigNumberish, string],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getMethodDomainProofs(
    (this as unknown) as ColonyExtensionsV5<IColonyV5>,
    _domainId,
  );
  return this.interface.functions.editDomain.encode([
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _metadata,
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
    encode: setArchitectureRoleWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.addDomainWithProofs = {
    encode: addDomainWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.editDomainWithProofs = {
    encode: editDomainWithProofs.bind(colonyClient),
  };
  return updateColonyClient as ColonyWithInterfacesV9;
};
