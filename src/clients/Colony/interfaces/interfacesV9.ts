import { Arrayish, BigNumberish, Interface } from 'ethers/utils';

import { ColonyRole, ROOT_DOMAIN_ID } from '../../../constants';
import { IColony as IColonyV5 } from '../../../contracts/5/IColony';
import { IColony as IColonyV9 } from '../../../contracts/colony/9/IColony';
import {
  ExtendedIColony,
  getRoleSettingProofs,
  getPermissionProofs,
  getMoveFundsPermissionProofs,
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
 *
 * @NOTE This are arranged in the order they appear in the clients historically
 */
export type Interfaces = {
  setArchitectureRoleWithProofs: {
    encode: ([_user, _domainId, _setTo]: [
      string,
      BigNumberish,
      boolean,
    ]) => Promise<string>;
  };
  setFundingRoleWithProofs: {
    encode: ([_user, _domainId, _setTo]: [
      string,
      BigNumberish,
      boolean,
    ]) => Promise<string>;
  };
  setAdministrationRoleWithProofs: {
    encode: ([_user, _domainId, _setTo]: [
      string,
      BigNumberish,
      boolean,
    ]) => Promise<string>;
  };
  addPaymentWithProofs: {
    encode: ([_recipient, _token, _amount, _domainId, _skillId]: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
    ]) => Promise<string>;
  };
  finalizePaymentWithProofs: {
    encode: ([_id]: [BigNumberish]) => Promise<string>;
  };
  setPaymentRecipientWithProofs: {
    encode: ([_id, _recipient]: [BigNumberish, string]) => Promise<string>;
  };
  setPaymentSkillWithProofs: {
    encode: ([_id, _skillId]: [BigNumberish, BigNumberish]) => Promise<string>;
  };
  setPaymentPayoutWithProofs: {
    encode: ([_id, _token, _amount]: [
      BigNumberish,
      string,
      BigNumberish,
    ]) => Promise<string>;
  };
  makeTaskWithProofs: {
    encode: ([_specificationHash, _domainId, _skillId, _dueDate]: [
      Arrayish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
    ]) => Promise<string>;
  };
  moveFundsBetweenPotsWithProofs: {
    encode: ([_fromPot, _toPot, _amount, _token]: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
    ]) => Promise<string>;
  };
  setArbitrationRoleWithProofs: {
    encode: ([_user, _domainId, _setTo]: [
      string,
      BigNumberish,
      boolean,
    ]) => Promise<string>;
  };
  makeExpenditureWithProofs: {
    encode: ([_domainId]: [BigNumberish]) => Promise<string>;
  };
  /*
   * @TODO Find out what's going on with this one, as apparently, the method
   * call requires proofs, while the encode signature does not
   */
  // setExpenditureClaimDelayWithProofs: {
  //   encode: ([_id, _slot, _claimDelay]: [
  //     BigNumberish,
  //     BigNumberish,
  //     BigNumberish,
  //   ]) => Promise<string>;
  // };
  transferExpenditureViaArbitrationWithProofs: {
    encode: ([_id, _newOwner]: [BigNumberish, string]) => Promise<string>;
  };
  emitDomainReputationPenaltyWithProofs: {
    encode: ([_domainId, _user, _amount]: [
      BigNumberish,
      string,
      BigNumberish,
    ]) => Promise<string>;
  };
  setUserRolesWithProofs: {
    encode: ([_user, _domainId, _roles]: [
      string,
      BigNumberish,
      Arrayish,
    ]) => Promise<string>;
  };
  transferStakeWithProofs: {
    encode: ([_obligator, _user, _domainId, _amount, _recipient]: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
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
  setExpenditureStateWithProofs: {
    encode: ([_id, _storageSlot, _mask, _keys, _value]: [
      BigNumberish,
      BigNumberish,
      boolean[],
      Arrayish[],
      Arrayish,
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
  const [permissionDomainId, childSkillIndex] = await getRoleSettingProofs(
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
async function setFundingRoleWithProofs(
  this: ValidColony,
  [_user, _domainId, _setTo]: [string, BigNumberish, boolean],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getRoleSettingProofs(
    this as ExtendedIColony<ValidColony>,
    _user,
    _domainId,
  );
  return this.interface.functions.setFundingRole.encode([
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  ]);
}
async function setAdministrationRoleWithProofs(
  this: ValidColony,
  [_user, _domainId, _setTo]: [string, BigNumberish, boolean],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getRoleSettingProofs(
    this as ExtendedIColony<ValidColony>,
    _user,
    _domainId,
  );
  return this.interface.functions.setAdministrationRole.encode([
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  ]);
}
async function addPaymentWithProofs(
  this: ValidColony,
  [_recipient, _token, _amount, _domainId, _skillId]: [
    string,
    string,
    BigNumberish,
    BigNumberish,
    BigNumberish,
  ],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    _domainId,
    ColonyRole.Administration,
  );
  return this.interface.functions.addPayment.encode([
    permissionDomainId,
    childSkillIndex,
    _recipient,
    _token,
    _amount,
    _domainId,
    _skillId,
  ]);
}
async function finalizePaymentWithProofs(
  this: ValidColony,
  [_id]: [BigNumberish],
): Promise<string> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    domainId,
    ColonyRole.Administration,
  );
  return this.interface.functions.finalizePayment.encode([
    permissionDomainId,
    childSkillIndex,
    _id,
  ]);
}
async function setPaymentRecipientWithProofs(
  this: ValidColony,
  [_id, _recipient]: [BigNumberish, string],
): Promise<string> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    domainId,
    ColonyRole.Administration,
  );
  return this.interface.functions.setPaymentRecipient.encode([
    permissionDomainId,
    childSkillIndex,
    _id,
    _recipient,
  ]);
}
async function setPaymentSkillWithProofs(
  this: ValidColony,
  [_id, _skillId]: [BigNumberish, BigNumberish],
): Promise<string> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    domainId,
    ColonyRole.Administration,
  );
  return this.interface.functions.setPaymentSkill.encode([
    permissionDomainId,
    childSkillIndex,
    _id,
    _skillId,
  ]);
}
async function setPaymentPayoutWithProofs(
  this: ValidColony,
  [_id, _token, _amount]: [BigNumberish, string, BigNumberish],
): Promise<string> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    domainId,
    ColonyRole.Administration,
  );
  return this.interface.functions.setPaymentPayout.encode([
    permissionDomainId,
    childSkillIndex,
    _id,
    _token,
    _amount,
  ]);
}
async function makeTaskWithProofs(
  this: ValidColony,
  [_specificationHash, _domainId, _skillId, _dueDate]: [
    Arrayish,
    BigNumberish,
    BigNumberish,
    BigNumberish,
  ],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    _domainId,
    ColonyRole.Administration,
  );
  return this.interface.functions.makeTask.encode([
    permissionDomainId,
    childSkillIndex,
    _specificationHash,
    _domainId,
    _skillId,
    _dueDate,
  ]);
}
async function moveFundsBetweenPotsWithProofs(
  this: ValidColony,
  [_fromPot, _toPot, _amount, _token]: [
    BigNumberish,
    BigNumberish,
    BigNumberish,
    string,
  ],
): Promise<string> {
  const [
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
  ] = await getMoveFundsPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    _fromPot,
    _toPot,
  );
  /*
   * @NOTE We're calling the method names directly by their string signature,
   * so we need to disable TS as it doesn't know about them
   */
  // @ts-ignore
  return this.interface.functions[
    `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)`
  ].encode([
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
  ]);
}
async function setArbitrationRoleWithProofs(
  this: ValidColony,
  [_user, _domainId, _setTo]: [string, BigNumberish, boolean],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getRoleSettingProofs(
    this as ExtendedIColony<ValidColony>,
    _user,
    _domainId,
    ColonyRole.ArchitectureSubdomain_DEPRECATED,
  );
  return this.interface.functions.setArbitrationRole.encode([
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  ]);
}
async function makeExpenditureWithProofs(
  this: ValidColony,
  [_domainId]: [BigNumberish],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    _domainId,
    ColonyRole.Administration,
  );
  return this.interface.functions.makeExpenditure.encode([
    permissionDomainId,
    childSkillIndex,
    _domainId,
  ]);
}
/*
 * @TODO Find out what's going on with this one, as apparently, the method
 * call requires proofs, while the encode signature does not
 */
// async function setExpenditureClaimDelayWithProofs(
//   this: ValidColony,
//   [_id, _slot, _claimDelay]: [BigNumberish, BigNumberish, BigNumberish],
// ): Promise<string> {
//   const { domainId } = await this.getExpenditure(_id);
//   const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
//     this as ExtendedIColony<ValidColony>,
//     domainId,
//     ColonyRole.Arbitration,
//   );
//   return this.interface.functions.setExpenditureClaimDelay.encode([
//     permissionDomainId,
//     childSkillIndex,
//     _id,
//     _slot,
//     _claimDelay,
//   ]);
// }
async function transferExpenditureViaArbitrationWithProofs(
  this: ValidColony,
  [_id, _newOwner]: [BigNumberish, string],
): Promise<string> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.interface.functions.transferExpenditureViaArbitration.encode([
    permissionDomainId,
    childSkillIndex,
    _id,
    _newOwner,
  ]);
}
async function emitDomainReputationPenaltyWithProofs(
  this: ValidColony,
  [_domainId, _user, _amount]: [BigNumberish, string, BigNumberish],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.interface.functions.emitDomainReputationPenalty.encode([
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _user,
    _amount,
  ]);
}
async function setUserRolesWithProofs(
  this: ValidColony,
  [_user, _domainId, _roles]: [string, BigNumberish, Arrayish],
): Promise<string> {
  const isRootDomain = _domainId === ROOT_DOMAIN_ID.toString();
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    _domainId,
    isRootDomain ? ColonyRole.Root : ColonyRole.Architecture,
  );
  return this.interface.functions.setUserRoles.encode([
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _roles,
  ]);
}
async function transferStakeWithProofs(
  this: ValidColony,
  [_obligator, _user, _domainId, _amount, _recipient]: [
    string,
    string,
    BigNumberish,
    BigNumberish,
    string,
  ],
): Promise<string> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.interface.functions.transferStake.encode([
    permissionDomainId,
    childSkillIndex,
    _obligator,
    _user,
    _domainId,
    _amount,
    _recipient,
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
async function setExpenditureStateWithProofs(
  this: ValidColony,
  [_id, _storageSlot, _mask, _keys, _value]: [
    BigNumberish,
    BigNumberish,
    boolean[],
    Arrayish[],
    Arrayish,
  ],
): Promise<string> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this as ExtendedIColony<ValidColony>,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.interface.functions.setExpenditureState.encode([
    permissionDomainId,
    childSkillIndex,
    _id,
    _storageSlot,
    _mask,
    _keys,
    _value,
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
  updateColonyClient.interface.functions.setFundingRoleWithProofs = {
    encode: setFundingRoleWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.setAdministrationRoleWithProofs = {
    encode: setAdministrationRoleWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.addPaymentWithProofs = {
    encode: addPaymentWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.finalizePaymentWithProofs = {
    encode: finalizePaymentWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.setPaymentRecipientWithProofs = {
    encode: setPaymentRecipientWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.setPaymentSkillWithProofs = {
    encode: setPaymentSkillWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.setPaymentPayoutWithProofs = {
    encode: setPaymentPayoutWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.makeTaskWithProofs = {
    encode: makeTaskWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.moveFundsBetweenPotsWithProofs = {
    encode: moveFundsBetweenPotsWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.setArbitrationRoleWithProofs = {
    encode: setArbitrationRoleWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.makeExpenditureWithProofs = {
    encode: makeExpenditureWithProofs.bind(colonyClient),
  };
  // eslint-disable-next-line max-len
  updateColonyClient.interface.functions.transferExpenditureViaArbitrationWithProofs = {
    encode: transferExpenditureViaArbitrationWithProofs.bind(colonyClient),
  };
  // eslint-disable-next-line max-len
  updateColonyClient.interface.functions.emitDomainReputationPenaltyWithProofs = {
    encode: emitDomainReputationPenaltyWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.setUserRolesWithProofs = {
    encode: setUserRolesWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.transferStakeWithProofs = {
    encode: transferStakeWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.addDomainWithProofs = {
    encode: addDomainWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.editDomainWithProofs = {
    encode: editDomainWithProofs.bind(colonyClient),
  };
  updateColonyClient.interface.functions.setExpenditureStateWithProofs = {
    encode: setExpenditureStateWithProofs.bind(colonyClient),
  };
  return updateColonyClient as ColonyWithInterfacesV9;
};
