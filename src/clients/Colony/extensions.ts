// These extensions are built on top of the first version of IColony and can
// potentially applied to all IColony versions that implement a minmial
// interface as lined out by ExtensionRequiredMethods and
// ExtensionRequiredTransactions

import { ContractTransaction } from 'ethers';
import { Arrayish, BigNumber, BigNumberish } from 'ethers/utils';
import { MaxUint256 } from 'ethers/constants';

// We're using v1 here as a base, but in fact in could be any interface that satisfies the requirements
// (structural typing)
import { IColony } from '../../../lib/contracts/1/IColony';
import { TransactionOverrides } from '../../../lib/contracts/1';
import {
  ColonyRole,
  FundingPotAssociatedType,
  ROOT_DOMAIN_ID,
} from '../../constants';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';

export type CommonExtensionRequiredMethods =
  | 'getDomain'
  | 'getFundingPot'
  | 'getTask'
  | 'getPayment'
  | 'hasUserRole';

export type CommonExtensionRequiredTransactions =
  | 'setArchitectureRole'
  | 'setFundingRole'
  | 'setAdministrationRole'
  | 'addDomain'
  | 'addPayment'
  | 'finalizePayment'
  | 'setPaymentRecipient'
  | 'setPaymentSkill'
  | 'setPaymentPayout'
  | 'makeTask'
  | 'moveFundsBetweenPots';

export interface ExtendedEstimate {
  setArchitectureRole(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
  setFundingRole(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
  setAdministrationRole(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
  addDomain(_parentDomainId: BigNumberish): Promise<BigNumber>;
  addPayment(
    _recipient: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
  finalizePayment(
    _id: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<BigNumber>;
  setPaymentRecipient(
    _id: BigNumberish,
    _recipient: string,
  ): Promise<BigNumber>;
  setPaymentSkill(
    _id: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
  setPaymentPayout(
    _id: BigNumberish,
    _token: BigNumberish,
    _amount: BigNumberish,
  ): Promise<BigNumber>;
  makeTask(
    _specificationHash: Arrayish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    _dueDate: BigNumberish,
  ): Promise<BigNumber>;
  moveFundsBetweenPots(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
  ): Promise<BigNumber>;
}

export interface ColonyExtensions {
  networkClient: ExtendedIColonyNetwork;
  setArchitectureRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  setFundingRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  setAdministrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  addDomainWithProofs(
    _parentDomainId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  addPaymentWithProofs(
    _recipient: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  finalizePaymentWithProofs(
    _id: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  setPaymentRecipientWithProofs(
    _id: BigNumberish,
    _recipient: string,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  setPaymentSkillWithProofs(
    _id: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  setPaymentPayoutWithProofs(
    _id: BigNumberish,
    _token: BigNumberish,
    _amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  makeTaskWithProofs(
    _specificationHash: Arrayish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    _dueDate: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  moveFundsBetweenPotsWithProofs(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  estimateWithProofs: ExtendedEstimate;
}

// For all of our permission proof extensions, we need at least this interface
export type ExtendableIColony = Pick<ColonyExtensions, 'networkClient'> &
  Pick<IColony, 'signer'> &
  Pick<IColony, CommonExtensionRequiredMethods>;

export type CommonExtensionRequiredIColony = ExtendableIColony &
  Pick<IColony, CommonExtensionRequiredTransactions> & {
    estimate: Pick<IColony['estimate'], CommonExtensionRequiredTransactions>;
  };

export const getPotDomain = async (
  contract: ExtendableIColony,
  potId: BigNumberish,
): Promise<BigNumberish> => {
  const { associatedType, associatedTypeId } = await contract.getFundingPot(
    potId,
  );
  switch (associatedType) {
    case FundingPotAssociatedType.Unassigned: {
      // This is probably the reward pot
      return ROOT_DOMAIN_ID;
    }
    case FundingPotAssociatedType.Domain: {
      return associatedTypeId;
    }
    case FundingPotAssociatedType.Payment: {
      const { domainId } = await contract.getPayment(associatedTypeId);
      return domainId;
    }
    case FundingPotAssociatedType.Task: {
      const { domainId } = await contract.getTask(associatedTypeId);
      return domainId;
    }
    default: {
      throw new Error(`No valid domain found for pot ${potId}`);
    }
  }
};

export const getChildIndex = async (
  contract: ExtendableIColony,
  parentDomainId: BigNumberish,
  domainId: BigNumberish,
): Promise<number> => {
  const { skillId: parentSkillId } = await contract.getDomain(parentDomainId);
  const { skillId } = await contract.getDomain(domainId);
  const { children } = await contract.networkClient.getSkill(parentSkillId);
  return children.findIndex(childSkillId => childSkillId.eq(skillId));
};

export const getPermissionProofs = async (
  contract: ExtendableIColony,
  domainId: BigNumberish,
  role: ColonyRole,
  /* [permissionDomainId, childSkillIndex] */
): Promise<[BigNumberish, BigNumberish]> => {
  const walletAddress = await contract.signer.getAddress();
  const hasPermissionInDomain = await contract.hasUserRole(
    walletAddress,
    domainId,
    role,
  );
  if (hasPermissionInDomain) {
    return [domainId, MaxUint256];
  }
  // @TODO once we allow nested domains on the network level, this needs to traverse down the skill/domain tree. Use binary search
  const foundDomainId = ROOT_DOMAIN_ID;
  const hasPermissionInAParentDomain = await contract.hasUserRole(
    walletAddress,
    foundDomainId,
    role,
  );
  if (!hasPermissionInAParentDomain) {
    throw new Error(
      `User does not have the permission ${role} in any parent domain`,
    );
  }
  const idx = await getChildIndex(contract, foundDomainId, domainId);
  if (idx < 0) {
    throw new Error(
      `User does not have the permission ${role} in any parent domain`,
    );
  }
  return [foundDomainId, idx];
};

const getMoveFundsPermissionProofs = async (
  contract: CommonExtensionRequiredIColony,
  fromtPotId: BigNumberish,
  toPotId: BigNumberish,
): Promise<[BigNumberish, BigNumberish, BigNumberish]> => {
  const fromDomainId = await getPotDomain(contract, fromtPotId);
  const toDomainId = await getPotDomain(contract, toPotId);
  const [
    fromPermissionDomainId,
    fromChildSkillIndex,
  ] = await getPermissionProofs(contract, fromDomainId, ColonyRole.Funding);
  // @TODO: once getPermissionProofs is more expensive we can just check the domain here
  // with userHasRole and then immediately get the permission proofs
  const [toPermissionDomainId, toChildSkillIndex] = await getPermissionProofs(
    contract,
    toDomainId,
    ColonyRole.Funding,
  );
  // Here's a weird case. We have found permissions for these domains but they don't share
  // a parent domain with that permission. We can still find a common parent domain that
  // has the funding permission
  if (fromPermissionDomainId !== toPermissionDomainId) {
    const walletAddress = await contract.signer.getAddress();
    const hasFundingInRoot = await contract.hasUserRole(
      walletAddress,
      ROOT_DOMAIN_ID,
      ColonyRole.Funding,
    );
    // @TODO: In the future we have to not only check the ROOT domain but traverse the tree
    // (binary search) to find a common parent domain with funding permission
    if (hasFundingInRoot) {
      const rootFromChildSkillIndex = await getChildIndex(
        contract,
        ROOT_DOMAIN_ID,
        fromDomainId,
      );
      const rootToChildSkillIndex = await getChildIndex(
        contract,
        ROOT_DOMAIN_ID,
        toDomainId,
      );
      // This shouldn't really happen as we have already checked whether the user has funding
      if (rootFromChildSkillIndex < 0 || rootToChildSkillIndex < 0) {
        throw new Error(
          `User does not have the funding permission in any parent domain`,
        );
      }
      return [
        fromPermissionDomainId,
        rootFromChildSkillIndex,
        rootToChildSkillIndex,
      ];
    }
    throw new Error(
      // eslint-disable-next-line max-len
      'User has to have the funding role in a domain that both associated pots a children of',
    );
  }

  return [fromPermissionDomainId, fromChildSkillIndex, toChildSkillIndex];
};

async function setArchitectureRoleWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this,
      _domainId,
      ColonyRole.Architecture,
    );
  } catch (err) {
    proofs = await getPermissionProofs(this, _domainId, ColonyRole.Root);
  }
  const [permissionDomainId, childSkillIndex] = proofs;
  return this.setArchitectureRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function setFundingRoleWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this,
      _domainId,
      ColonyRole.Architecture,
    );
  } catch (err) {
    proofs = await getPermissionProofs(this, _domainId, ColonyRole.Root);
  }
  const [permissionDomainId, childSkillIndex] = proofs;
  return this.setFundingRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function setAdministrationRoleWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this,
      _domainId,
      ColonyRole.Architecture,
    );
  } catch (err) {
    proofs = await getPermissionProofs(this, _domainId, ColonyRole.Root);
  }
  const [permissionDomainId, childSkillIndex] = proofs;
  return this.setAdministrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function addDomainWithProofs<T extends CommonExtensionRequiredIColony>(
  this: T,
  _parentDomainId: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this.addDomain(
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    overrides,
  );
}

async function addPaymentWithProofs<T extends CommonExtensionRequiredIColony>(
  this: T,
  _recipient: string,
  _token: string,
  _amount: BigNumberish,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.addPayment(
    permissionDomainId,
    childSkillIndex,
    _recipient,
    _token,
    _amount,
    _domainId,
    _skillId,
    overrides,
  );
}

async function finalizePaymentWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _id: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.finalizePayment(
    permissionDomainId,
    childSkillIndex,
    _id,
    overrides,
  );
}

async function setPaymentRecipientWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _id: BigNumberish,
  _recipient: string,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.setPaymentRecipient(
    permissionDomainId,
    childSkillIndex,
    _id,
    _recipient,
    overrides,
  );
}

async function setPaymentSkillWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _id: BigNumberish,
  _skillId: string,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.setPaymentSkill(
    permissionDomainId,
    childSkillIndex,
    _id,
    _skillId,
    overrides,
  );
}

async function setPaymentPayoutWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.setPaymentPayout(
    permissionDomainId,
    childSkillIndex,
    _id,
    _token,
    _amount,
    overrides,
  );
}

async function makeTaskWithProofs<T extends CommonExtensionRequiredIColony>(
  this: T,
  _specificationHash: Arrayish,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  _dueDate: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.makeTask(
    permissionDomainId,
    childSkillIndex,
    _specificationHash,
    _domainId,
    _skillId,
    _dueDate,
    overrides,
  );
}

async function moveFundsBetweenPotsWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
  ] = await getMoveFundsPermissionProofs(this, _fromPot, _toPot);

  return this.moveFundsBetweenPots(
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
    overrides,
  );
}

async function estimateSetArchitectureRoleWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimate.setArchitectureRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  );
}

async function estimateSetFundingRoleWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimate.setFundingRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  );
}

async function estimateSetAdministrationRoleWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimate.setAdministrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  );
}

async function estimateAddDomainWithProofs<
  T extends CommonExtensionRequiredIColony
>(this: T, _parentDomainId: BigNumberish): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this.estimate.addDomain(
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
  );
}

async function estimateAddPaymentWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _recipient: string,
  _token: string,
  _amount: BigNumberish,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.estimate.addPayment(
    permissionDomainId,
    childSkillIndex,
    _recipient,
    _token,
    _amount,
    _domainId,
    _skillId,
  );
}

async function estimateFinalizePaymentWithProofs<
  T extends CommonExtensionRequiredIColony
>(this: T, _id: BigNumberish): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimate.finalizePayment(
    permissionDomainId,
    childSkillIndex,
    _id,
  );
}

async function estimateSetPaymentRecipientWithProofs<
  T extends CommonExtensionRequiredIColony
>(this: T, _id: BigNumberish, _recipient: string): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimate.setPaymentRecipient(
    permissionDomainId,
    childSkillIndex,
    _id,
    _recipient,
  );
}

async function estimateSetPaymentSkillWithProofs<
  T extends CommonExtensionRequiredIColony
>(this: T, _id: BigNumberish, _skillId: BigNumberish): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimate.setPaymentSkill(
    permissionDomainId,
    childSkillIndex,
    _id,
    _skillId,
  );
}

async function estimateSetPaymentPayoutWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimate.setPaymentPayout(
    permissionDomainId,
    childSkillIndex,
    _id,
    _token,
    _amount,
  );
}

async function estimateMakeTaskWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _specificationHash: Arrayish,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  _dueDate: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.estimate.makeTask(
    permissionDomainId,
    childSkillIndex,
    _specificationHash,
    _domainId,
    _skillId,
    _dueDate,
  );
}

async function estimateMoveFundsBetweenPotsWithProofs<
  T extends CommonExtensionRequiredIColony
>(
  this: T,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
): Promise<BigNumber> {
  const [
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
  ] = await getMoveFundsPermissionProofs(this, _fromPot, _toPot);

  return this.estimate.moveFundsBetweenPots(
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
  );
}

export const addExtensions = <
  T extends ColonyExtensions & CommonExtensionRequiredIColony
>(
  instance: T,
  networkClient: ExtendedIColonyNetwork,
): void => {
  /* eslint-disable no-param-reassign, max-len */
  instance.networkClient = networkClient;
  instance.setArchitectureRoleWithProofs = setArchitectureRoleWithProofs.bind(
    instance,
  );
  instance.setFundingRoleWithProofs = setFundingRoleWithProofs.bind(instance);
  instance.setAdministrationRoleWithProofs = setAdministrationRoleWithProofs.bind(
    instance,
  );
  instance.addDomainWithProofs = addDomainWithProofs.bind(instance);
  instance.addPaymentWithProofs = addPaymentWithProofs.bind(instance);
  instance.finalizePaymentWithProofs = finalizePaymentWithProofs.bind(instance);
  instance.setPaymentRecipientWithProofs = setPaymentRecipientWithProofs.bind(
    instance,
  );
  instance.setPaymentSkillWithProofs = setPaymentSkillWithProofs.bind(instance);
  instance.setPaymentPayoutWithProofs = setPaymentPayoutWithProofs.bind(
    instance,
  );
  instance.makeTaskWithProofs = makeTaskWithProofs.bind(instance);
  instance.moveFundsBetweenPotsWithProofs = moveFundsBetweenPotsWithProofs.bind(
    instance,
  );

  instance.estimateWithProofs = {
    setArchitectureRole: estimateSetArchitectureRoleWithProofs.bind(instance),
    setFundingRole: estimateSetFundingRoleWithProofs.bind(instance),
    setAdministrationRole: estimateSetAdministrationRoleWithProofs.bind(
      instance,
    ),
    addDomain: estimateAddDomainWithProofs.bind(instance),
    addPayment: estimateAddPaymentWithProofs.bind(instance),
    finalizePayment: estimateFinalizePaymentWithProofs.bind(instance),
    setPaymentRecipient: estimateSetPaymentRecipientWithProofs.bind(instance),
    setPaymentSkill: estimateSetPaymentSkillWithProofs.bind(instance),
    setPaymentPayout: estimateSetPaymentPayoutWithProofs.bind(instance),
    makeTask: estimateMakeTaskWithProofs.bind(instance),
    moveFundsBetweenPots: estimateMoveFundsBetweenPotsWithProofs.bind(instance),
  };
  /* eslint-enable no-param-reassign, max-len */
};
