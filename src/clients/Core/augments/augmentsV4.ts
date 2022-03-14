import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish, UnsignedTransaction } from 'ethers/utils';

import { IColony as IColonyV4 } from '../../../contracts/IColony/4/IColony';
import { IColony as IColonyV5 } from '../../../contracts/IColony/5/IColony';
import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { ColonyRole } from '../../../constants';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { getPermissionProofs, AugmentedIColony } from './commonAugments';
import {
  addAugments as addAugmentsV3,
  ColonyAugmentsV3,
  AugmentedEstimateV3,
} from './augmentsV3';

type ValidColony = IColonyV4 | IColonyV5 | IColonyV6;

export interface AugmentedEstimateV4 extends AugmentedEstimateV3 {
  makeExpenditureWithProofs(_domainId: BigNumberish): Promise<BigNumber>;
  setExpenditureClaimDelayWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _claimDelay: BigNumberish,
  ): Promise<BigNumber>;
  setExpenditurePayoutModifierWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
  ): Promise<BigNumber>;
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
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  setExpenditureClaimDelayWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _claimDelay: BigNumberish,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  setExpenditurePayoutModifierWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  transferExpenditureViaArbitrationWithProofs(
    _id: BigNumberish,
    _newOwner: string,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  estimate: T['estimate'] & AugmentedEstimateV4;
};

async function hasInheritedUserRoleWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV3<ValidColony>,
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
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _domainId: BigNumberish,
  overrides?: UnsignedTransaction,
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

async function setExpenditureClaimDelayWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _claimDelay: BigNumberish,
  overrides?: UnsignedTransaction,
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.setExpenditureClaimDelay(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _claimDelay,
    overrides,
  );
}

async function setExpenditurePayoutModifierWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _payoutModifier: BigNumberish,
  overrides?: UnsignedTransaction,
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.setExpenditurePayoutModifier(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _payoutModifier,
    overrides,
  );
}

async function transferExpenditureViaArbitrationWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _id: BigNumberish,
  _newOwner: string,
  overrides?: UnsignedTransaction,
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
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _domainId: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.estimate.makeExpenditure(
    permissionDomainId,
    childSkillIndex,
    _domainId,
  );
}

async function estimateSetExpenditureClaimDelayWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _claimDelay: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimate.setExpenditureClaimDelay(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _claimDelay,
  );
}

async function estimateSetExpenditurePayoutModifierWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _payoutModifier: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimate.setExpenditurePayoutModifier(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _payoutModifier,
  );
}

async function estimateTransferExpenditureViaArbitrationWithProofs(
  this: AugmentedIColony<ValidColony> & ColonyAugmentsV4<ValidColony>,
  _newOwner: string,
  _id: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimate.transferExpenditureViaArbitration(
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
  augmentedInstance.setExpenditureClaimDelayWithProofs =
    setExpenditureClaimDelayWithProofs.bind(augmentedInstance);
  augmentedInstance.setExpenditurePayoutModifierWithProofs =
    setExpenditurePayoutModifierWithProofs.bind(augmentedInstance);
  augmentedInstance.transferExpenditureViaArbitrationWithProofs =
    transferExpenditureViaArbitrationWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.makeExpenditureWithProofs =
    estimateMakeExpenditureWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.setExpenditureClaimDelayWithProofs =
    estimateSetExpenditureClaimDelayWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.setExpenditurePayoutModifierWithProofs =
    estimateSetExpenditurePayoutModifierWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.transferExpenditureViaArbitrationWithProofs =
    estimateTransferExpenditureViaArbitrationWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
