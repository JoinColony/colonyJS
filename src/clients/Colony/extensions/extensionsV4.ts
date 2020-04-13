import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish } from 'ethers/utils';

import { TransactionOverrides } from '../../../../lib/contracts/4';
import { IColony } from '../../../../lib/contracts/4/IColony';
import { ColonyRole } from '../../../constants';
import { ExtendedIColonyNetwork } from '../../ColonyNetworkClient';
import { getPermissionProofs } from './commonExtensions';
import {
  addExtensions as addExtensionsV3,
  ColonyExtensionsV3,
  ExtendedEstimateV3,
  ExtensionRequiredTransactionsV3,
  ExtensionRequiredIColonyV3,
} from './extensionsV3';

export interface ExtendedEstimatesV4 extends ExtendedEstimateV3 {
  makeExpenditure(_domainId: BigNumberish): Promise<BigNumber>;
  setExpenditureClaimDelay(
    _id: BigNumberish,
    _slot: BigNumberish,
    _claimDelay: BigNumberish,
  ): Promise<BigNumber>;
  setExpenditurePayoutModifier(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
  ): Promise<BigNumber>;
  transferExpenditureViaArbitration(
    _id: BigNumberish,
    _newOwner: string,
  ): Promise<BigNumber>;
}

export interface ColonyExtensionsV4 extends ColonyExtensionsV3 {
  hasInheritedUserRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _role: BigNumberish,
  ): Promise<boolean>;
  makeExpenditureWithProofs(
    _domainId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  setExpenditureClaimDelayWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _claimDelay: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  setExpenditurePayoutModifierWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  transferExpenditureViaArbitrationWithProofs(
    _id: BigNumberish,
    _newOwner: string,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  estimateWithProofs: ExtendedEstimatesV4;
}

export type ExtensionRequiredTransactionsV4 =
  | ExtensionRequiredTransactionsV3
  | 'makeExpenditure'
  | 'setExpenditureClaimDelay'
  | 'setExpenditurePayoutModifier'
  | 'transferExpenditureViaArbitration';

export type ExtensionRequiredIColonyV4 = ExtensionRequiredIColonyV3 &
  Pick<
    IColony,
    'getExpenditure' | 'hasInheritedUserRole' | ExtensionRequiredTransactionsV4
  > & {
    estimate: Pick<IColony['estimate'], ExtensionRequiredTransactionsV4>;
  };

async function hasInheritedUserRoleWithProofs<
  T extends ExtensionRequiredIColonyV4
>(
  this: T,
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

async function makeExpenditureWithProofs<T extends ExtensionRequiredIColonyV4>(
  this: T,
  _domainId: BigNumberish,
  overrides?: TransactionOverrides,
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

async function setExpenditureClaimDelayWithProofs<
  T extends ExtensionRequiredIColonyV4
>(
  this: T,
  _id: BigNumberish,
  _slot: BigNumberish,
  _claimDelay: BigNumberish,
  overrides?: TransactionOverrides,
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

async function setExpenditurePayoutModifierWithProofs<
  T extends ExtensionRequiredIColonyV4
>(
  this: T,
  _id: BigNumberish,
  _slot: BigNumberish,
  _payoutModifier: BigNumberish,
  overrides?: TransactionOverrides,
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

async function transferExpenditureViaArbitrationWithProofs<
  T extends ExtensionRequiredIColonyV4
>(
  this: T,
  _id: BigNumberish,
  _newOwner: string,
  overrides?: TransactionOverrides,
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

async function estimateMakeExpenditureWithProofs<
  T extends ExtensionRequiredIColonyV4
>(this: T, _domainId: BigNumberish): Promise<BigNumber> {
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

async function estimateSetExpenditureClaimDelayWithProofs<
  T extends ExtensionRequiredIColonyV4
>(
  this: T,
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

async function estimateSetExpenditurePayoutModifierWithProofs<
  T extends ExtensionRequiredIColonyV4
>(
  this: T,
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

async function estimateTransferExpenditureViaArbitrationWithProofs<
  T extends ExtensionRequiredIColonyV4
>(this: T, _newOwner: string, _id: BigNumberish): Promise<BigNumber> {
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

export const addExtensions = <
  T extends ColonyExtensionsV4 & ExtensionRequiredIColonyV4
>(
  instance: T,
  networkClient: ExtendedIColonyNetwork,
): void => {
  // Add all extensions from v3, because these are also still valid
  addExtensionsV3(instance, networkClient);
  /* eslint-disable no-param-reassign, max-len */
  instance.hasInheritedUserRoleWithProofs = hasInheritedUserRoleWithProofs.bind(
    instance,
  );
  instance.makeExpenditureWithProofs = makeExpenditureWithProofs.bind(instance);
  instance.setExpenditureClaimDelayWithProofs = setExpenditureClaimDelayWithProofs.bind(
    instance,
  );
  instance.setExpenditurePayoutModifierWithProofs = setExpenditurePayoutModifierWithProofs.bind(
    instance,
  );
  instance.transferExpenditureViaArbitrationWithProofs = transferExpenditureViaArbitrationWithProofs.bind(
    instance,
  );
  instance.estimateWithProofs.makeExpenditure = estimateMakeExpenditureWithProofs.bind(
    instance,
  );
  instance.estimateWithProofs.setExpenditureClaimDelay = estimateSetExpenditureClaimDelayWithProofs.bind(
    instance,
  );
  instance.estimateWithProofs.setExpenditurePayoutModifier = estimateSetExpenditurePayoutModifierWithProofs.bind(
    instance,
  );
  instance.estimateWithProofs.transferExpenditureViaArbitration = estimateTransferExpenditureViaArbitrationWithProofs.bind(
    instance,
  );
  /* eslint-enable no-param-reassign, max-len */
};
