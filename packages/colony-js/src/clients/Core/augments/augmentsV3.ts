import { ContractTransaction, BigNumber, BigNumberish } from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

import { ColonyNetworkClient } from '../../ColonyNetworkClient.js';
import {
  IColonyV12,
  IColonyV13,
  IColonyV14,
  IColonyV15,
  IColonyV16,
} from '../contracts.js';
import {
  addAugments as addCommonAugments,
  AugmentedIColony,
} from './commonAugments.js';

type ValidColony =
  | IColonyV12
  | IColonyV13
  | IColonyV14
  | IColonyV15
  | IColonyV16;

export interface AugmentedEstimateV3 {
  /**
   * Same as {@link setArbitrationRole}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which we are giving user the role
   * @param _setTo - The state of the role permission (true assign the permission, false revokes it)
   * @param _user - User we want to give an arbitration role to
   */
  setArbitrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type ColonyAugmentsV3<T extends ValidColony> = {
  /**
   * Same as {@link setArbitrationRole}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which we are giving user the role
   * @param _setTo - The state of the role permission (true assign the permission, false revokes it)
   * @param _user - User we want to give an arbitration role to
   */
  setArbitrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AugmentedEstimateV3;
};

type FullAugmentedIColony = AugmentedIColony<ValidColony> &
  ColonyAugmentsV3<ValidColony>;

async function setArbitrationRoleWithProofs(
  this: FullAugmentedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish, string];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.ArchitectureSubdomain,
    );
  } catch (err) {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.Root,
    );
  }
  const [permissionDomainId, childSkillIndex] = proofs;
  return this.setArbitrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function estimateSetArbitrationRoleWithProofs(
  this: FullAugmentedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.setArbitrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): FullAugmentedIColony => {
  const augmentedInstance = addCommonAugments(
    instance,
    networkClient,
  ) as AugmentedIColony<ValidColony> & ColonyAugmentsV3<ValidColony>;

  augmentedInstance.setArbitrationRoleWithProofs =
    setArbitrationRoleWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.setArbitrationRoleWithProofs =
    estimateSetArbitrationRoleWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
