import { ContractTransaction, BigNumber, BigNumberish } from 'ethers';

import {
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
} from '../../../contracts/IColony/exports';
import { ColonyRole, TxOverrides } from '../../../types';
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
  makeExpenditureWithProofs(
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  transferExpenditureViaArbitrationWithProofs(
    _id: BigNumberish,
    _newOwner: string,
    overrides: TxOverrides,
  ): Promise<BigNumber>;
}

export type ColonyAugmentsV4<T extends ValidColony> = {
  hasInheritedUserRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _role: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<boolean>;
  makeExpenditureWithProofs(
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
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
