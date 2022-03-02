import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  Overrides,
} from 'ethers';

import {
  IColonyV3,
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
} from '../../../exports';
import { ColonyRole } from '../../../types';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import {
  addAugments as addCommonAugments,
  AugmentedIColony,
  getPermissionProofs,
} from './commonAugments';

type ValidColony =
  | IColonyV3
  | IColonyV4
  | IColonyV5
  | IColonyV6
  | IColonyV7
  | IColonyV8
  | IColonyV9;

export interface AugmentedEstimateV3 {
  setArbitrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
}

export type ColonyAugmentsV3<T extends ValidColony> = {
  setArbitrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AugmentedEstimateV3;
};

type AugmentedColony = AugmentedIColony<ValidColony> &
  ColonyAugmentsV3<ValidColony>;

async function setArbitrationRoleWithProofs(
  this: AugmentedColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this,
      _domainId,
      ColonyRole.ArchitectureSubdomain_DEPRECATED,
    );
  } catch (err) {
    proofs = await getPermissionProofs(this, _domainId, ColonyRole.Root);
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
  this: AugmentedColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  );
}

export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): AugmentedIColony<ValidColony> & ColonyAugmentsV3<ValidColony> => {
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
