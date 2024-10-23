import {
  type ContractTransaction,
  type BigNumber,
  type BigNumberish,
} from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

import { type ColonyNetworkClient } from '../../ColonyNetworkClient.js';
import {
  type IColonyV12,
  type IColonyV13,
  type IColonyV14,
  type IColonyV15,
  type IColonyV16,
} from '../contracts.js';
import { type AugmentedIColony } from './commonAugments.js';
import {
  addAugments as addAugmentsV3,
  type ColonyAugmentsV3,
  type AugmentedEstimateV3,
} from './augmentsV3.js';

type ValidColony =
  | IColonyV12
  | IColonyV13
  | IColonyV14
  | IColonyV15
  | IColonyV16;

export interface AugmentedEstimateV4 extends AugmentedEstimateV3 {
  /**
   * Same as {@link makeExpenditure}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - The domain where the expenditure belongs
   */
  makeExpenditureWithProofs(
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * @deprecated
   *
   * Same as {@link transferExpenditureViaArbitration}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _newOwner - New owner of expenditure
   */
  transferExpenditureViaArbitrationWithProofs(
    _id: BigNumberish,
    _newOwner: string,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type ColonyAugmentsV4<T extends ValidColony> = {
  /**
   * Same as {@link hasInheritedUserRole}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which the caller has the role
   * @param _role - The role we want to check for
   * @param _user - The user whose role we want to check
   */
  hasInheritedUserRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _role: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<boolean>;
  /**
   * Same as {@link makeExpenditure}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - The domain where the expenditure belongs
   */
  makeExpenditureWithProofs(
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * @deprecated
   *
   * Same as {@link transferExpenditureViaArbitration}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _newOwner - New owner of expenditure
   */
  transferExpenditureViaArbitrationWithProofs(
    _id: BigNumberish,
    _newOwner: string,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AugmentedEstimateV4;
};

type AllAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV4<ValidColony>;

async function hasInheritedUserRoleWithProofs(
  this: AllAugments,
  _user: string,
  _domainId: BigNumberish,
  _role: ColonyRole,
  overrides: TxOverrides = {},
): Promise<boolean> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    _role,
    _user,
  );
  return this.hasInheritedUserRole(
    _user,
    permissionDomainId,
    _role,
    childSkillIndex,
    _domainId,
    overrides,
  );
}

async function makeExpenditureWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.makeExpenditure(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    overrides,
  );
}

async function transferExpenditureViaArbitrationWithProofs(
  this: AllAugments,
  _id: BigNumberish,
  _newOwner: string,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.transferExpenditureViaArbitration(
    permissionDomainId,
    childSkillIndex,
    _id,
    _newOwner,
    overrides,
  );
}

async function estimateMakeExpenditureWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.makeExpenditure(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    overrides,
  );
}

async function estimateTransferExpenditureViaArbitrationWithProofs(
  this: AllAugments,
  _newOwner: string,
  _id: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas.transferExpenditureViaArbitration(
    permissionDomainId,
    childSkillIndex,
    _id,
    _newOwner,
    overrides,
  );
}

export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): AugmentedIColony<ValidColony> &
  ColonyAugmentsV3<ValidColony> &
  ColonyAugmentsV4<ValidColony> => {
  // Add all extensions from v3, because these are also still valid
  const augmentedInstance = addAugmentsV3(
    instance,
    networkClient,
  ) as AugmentedIColony<ValidColony> &
    ColonyAugmentsV3<ValidColony> &
    ColonyAugmentsV4<ValidColony>;

  augmentedInstance.hasInheritedUserRoleWithProofs =
    hasInheritedUserRoleWithProofs.bind(augmentedInstance);
  augmentedInstance.makeExpenditureWithProofs =
    makeExpenditureWithProofs.bind(augmentedInstance);
  augmentedInstance.transferExpenditureViaArbitrationWithProofs =
    transferExpenditureViaArbitrationWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.makeExpenditureWithProofs =
    estimateMakeExpenditureWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.transferExpenditureViaArbitrationWithProofs =
    estimateTransferExpenditureViaArbitrationWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
