import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  Overrides,
} from 'ethers';

import {
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
} from '../../../exports';
import { ColonyRole } from '../../../types';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { getPermissionProofs, AugmentedIColony } from './commonAugments';
import {
  addAugments as addAugmentsV3,
  ColonyAugmentsV3,
  AugmentedEstimateV3,
} from './augmentsV3';

type ValidColony =
  | IColonyV4
  | IColonyV5
  | IColonyV6
  | IColonyV7
  | IColonyV8
  | IColonyV9;

export interface AugmentedEstimateV4 extends AugmentedEstimateV3 {
  makeExpenditureWithProofs(_domainId: BigNumberish): Promise<BigNumber>;
  transferExpenditureViaArbitrationWithProofs(
    _id: BigNumberish,
    _newOwner: string,
  ): Promise<BigNumber>;
}

export type ColonyAugmentsV4<T extends ValidColony> = {
  hasInheritedUserRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _role: BigNumberish,
  ): Promise<boolean>;
  makeExpenditureWithProofs(
    _domainId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  transferExpenditureViaArbitrationWithProofs(
    _id: BigNumberish,
    _newOwner: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AugmentedEstimateV4;
};

type AugmentedColony = AugmentedIColony<ValidColony> &
  ColonyAugmentsV4<ValidColony>;

async function hasInheritedUserRoleWithProofs(
  this: AugmentedColony,
  _user: string,
  _domainId: BigNumberish,
  _role: ColonyRole,
): Promise<boolean> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  );
}

async function makeExpenditureWithProofs(
  this: AugmentedColony,
  _domainId: BigNumberish,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  this: AugmentedColony,
  _id: BigNumberish,
  _newOwner: string,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  this: AugmentedColony,
  _domainId: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.makeExpenditure(
    permissionDomainId,
    childSkillIndex,
    _domainId,
  );
}

async function estimateTransferExpenditureViaArbitrationWithProofs(
  this: AugmentedColony,
  _newOwner: string,
  _id: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas.transferExpenditureViaArbitration(
    permissionDomainId,
    childSkillIndex,
    _id,
    _newOwner,
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
