import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish, UnsignedTransaction } from 'ethers/utils';

import { IColony as IColonyV3 } from '../../../contracts/IColony/3/IColony';
import { IColony as IColonyV4 } from '../../../contracts/IColony/4/IColony';
import { IColony as IColonyV5 } from '../../../contracts/IColony/5/IColony';
import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { ColonyRole } from '../../../constants';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import {
  addAugments as addCommonAugments,
  AugmentedIColony,
  getPermissionProofs,
} from './commonAugments';

type ValidColony = IColonyV3 | IColonyV4 | IColonyV5 | IColonyV6;

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
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  estimate: T['estimate'] & AugmentedEstimateV3;
};

async function setArbitrationRoleWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV3<ValidColony>,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: UnsignedTransaction,
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
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV3<ValidColony>,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimate.setArbitrationRole(
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
  augmentedInstance.estimate.setArbitrationRoleWithProofs =
    estimateSetArbitrationRoleWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
