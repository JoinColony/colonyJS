import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish } from 'ethers/utils';

import { TransactionOverrides } from '../../../contracts/3';
import { IColony as IColonyV4 } from '../../../contracts/4/IColony';
import { IColony as IColonyV5 } from '../../../contracts/5/IColony';
import { ColonyRole } from '../../../constants';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { getPermissionProofs, ExtendedIColony } from './commonExtensions';
import {
  addExtensions as addExtensionsV3,
  ColonyExtensionsV3,
  ExtendedEstimateV3,
} from './extensionsV3';

type ValidColony = IColonyV4 | IColonyV5;

export interface ExtendedEstimateV4 extends ExtendedEstimateV3 {
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

export type ColonyExtensionsV4<T extends ValidColony> = {
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
  estimate: T['estimate'] & ExtendedEstimateV4;
};

async function hasInheritedUserRoleWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV3<ValidColony>,
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
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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

async function setExpenditureClaimDelayWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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

async function setExpenditurePayoutModifierWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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

async function transferExpenditureViaArbitrationWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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

async function estimateMakeExpenditureWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV4<ValidColony>,
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

export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<ValidColony> &
  ColonyExtensionsV4<ValidColony> => {
  // Add all extensions from v3, because these are also still valid
  const extendedInstance = addExtensionsV3(
    instance,
    networkClient,
  ) as ExtendedIColony<ValidColony> &
    ColonyExtensionsV3<ValidColony> &
    ColonyExtensionsV4<ValidColony>;
  /* eslint-disable no-param-reassign, max-len */
  extendedInstance.hasInheritedUserRoleWithProofs = hasInheritedUserRoleWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.makeExpenditureWithProofs = makeExpenditureWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.setExpenditureClaimDelayWithProofs = setExpenditureClaimDelayWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.setExpenditurePayoutModifierWithProofs = setExpenditurePayoutModifierWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.transferExpenditureViaArbitrationWithProofs = transferExpenditureViaArbitrationWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.estimate.makeExpenditureWithProofs = estimateMakeExpenditureWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.estimate.setExpenditureClaimDelayWithProofs = estimateSetExpenditureClaimDelayWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.estimate.setExpenditurePayoutModifierWithProofs = estimateSetExpenditurePayoutModifierWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.estimate.transferExpenditureViaArbitrationWithProofs = estimateTransferExpenditureViaArbitrationWithProofs.bind(
    extendedInstance,
  );
  /* eslint-enable no-param-reassign, max-len */
  return extendedInstance;
};
