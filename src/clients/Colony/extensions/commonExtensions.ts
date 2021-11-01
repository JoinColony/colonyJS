import { ContractFactory, ContractTransaction } from 'ethers';
import { Arrayish, BigNumber, BigNumberish, bigNumberify } from 'ethers/utils';
import { MaxUint256, AddressZero } from 'ethers/constants';

import { fetchReputationOracleData } from '../../../utils';
import {
  ClientType,
  ColonyRole,
  FundingPotAssociatedType,
  ROOT_DOMAIN_ID,
} from '../../../constants';
import { ColonyVersion } from '../../../versions';
import { ReputationMinerEndpoints } from '../../../types';

import { IColony as IColonyV1 } from '../../../contracts/1/IColony';
import { IColony as IColonyV2 } from '../../../contracts/2/IColony';
import { IColony as IColonyV3 } from '../../../contracts/3/IColony';
import { IColony as IColonyV4 } from '../../../contracts/4/IColony';
import { IColony as IColonyV5 } from '../../../contracts/5/IColony';
import { IColony as IColonyV6 } from '../../../contracts/colony/6/IColony';
import { IColony as IColonyV7 } from '../../../contracts/colony/7/IColony';
import { IColony as IColonyV8 } from '../../../contracts/colony/8/IColony';
import { IColony as IColonyV9 } from '../../../contracts/colony/9/IColony';
import { TransactionOverrides } from '../../../contracts/6';
import { IColonyFactory } from '../../../contracts/4/IColonyFactory';

import {
  ExtensionClient,
  Extension,
} from '../../Extensions/colonyContractExtensions';
import getExtensionVersionClient from '../../Extensions/ExtensionVersionClient';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { TokenClient } from '../../TokenClient';

import {
  abi as tokenAuthorityAbi,
  bytecode as tokenAuthorityBytecode,
} from '../../../contracts/deploy/TokenAuthority.json';
import { getExtensionHash } from '../../../helpers';

type AnyIColony =
  | IColonyV1
  | IColonyV2
  | IColonyV3
  | IColonyV4
  | IColonyV5
  | IColonyV6
  | IColonyV7
  | IColonyV8
  | IColonyV9;

// This is exposed to type the awkward recovery event client which is basically
// just an IColonyV4
export type AwkwardRecoveryRoleEventClient = IColonyV4;

export type ExtendedEstimate<
  T extends AnyIColony = AnyIColony
> = T['estimate'] & {
  deployTokenAuthority(
    tokenAddress: string,
    allowedToTransfer: string[],
  ): Promise<BigNumber>;

  setArchitectureRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
  setFundingRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
  setAdministrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
  addDomainWithProofs(_parentDomainId: BigNumberish): Promise<BigNumber>;
  addPaymentWithProofs(
    _recipient: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
  finalizePaymentWithProofs(
    _id: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<BigNumber>;
  setPaymentRecipientWithProofs(
    _id: BigNumberish,
    _recipient: string,
  ): Promise<BigNumber>;
  setPaymentSkillWithProofs(
    _id: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
  setPaymentPayoutWithProofs(
    _id: BigNumberish,
    _token: BigNumberish,
    _amount: BigNumberish,
  ): Promise<BigNumber>;
  makeTaskWithProofs(
    _specificationHash: Arrayish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    _dueDate: BigNumberish,
  ): Promise<BigNumber>;
  moveFundsBetweenPotsWithProofs(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
  ): Promise<BigNumber>;
};

export type ExtendedIColony<T extends AnyIColony = AnyIColony> = T & {
  clientType: ClientType.ColonyClient;
  clientVersion: ColonyVersion;
  networkClient: ColonyNetworkClient;
  tokenClient: TokenClient;

  awkwardRecoveryRoleEventClient: AwkwardRecoveryRoleEventClient;

  getExtensionClient(
    this: ExtendedIColony,
    extensionName: Extension,
  ): Promise<ExtensionClient>;

  deployTokenAuthority(
    tokenAddress: string,
    allowedToTransfer: string[],
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;

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
  estimate: ExtendedEstimate<T>;

  getReputation(
    skillId: BigNumberish,
    address: string,
    customRootHash?: string,
  ): Promise<{
    key: string;
    value: string;
    branchMask: string;
    siblings: string[];
    reputationAmount: BigNumber;
  }>;

  getReputationWithoutProofs(
    skillId: BigNumberish,
    address: string,
    customRootHash?: string,
  ): Promise<{
    key: string;
    value: string;
    reputationAmount: BigNumber;
  }>;

  getReputationAcrossDomains(
    address: string,
    customRootHash?: string,
  ): Promise<
    {
      domainId: number;
      skillId: number;
      reputationAmount?: BigNumberish;
    }[]
  >;

  getMembersReputation(skillId: BigNumberish): Promise<{ addresses: string[] }>;
};

export const getPotDomain = async (
  contract: ExtendedIColony,
  potId: BigNumberish,
): Promise<BigNumberish> => {
  const { associatedType, associatedTypeId } = await contract.getFundingPot(
    potId,
  );
  // In case we add types to this later, we use the official colonyNetwork
  // function available in v5+
  if (contract.clientVersion === ColonyVersion.LightweightSpaceship) {
    return contract.getDomainFromFundingPot(potId);
  }
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
  contract: ExtendedIColony,
  parentDomainId: BigNumberish,
  domainId: BigNumberish,
): Promise<BigNumber> => {
  if (bigNumberify(parentDomainId).eq(bigNumberify(domainId))) {
    return MaxUint256;
  }
  const { skillId: parentSkillId } = await contract.getDomain(parentDomainId);
  const { skillId } = await contract.getDomain(domainId);
  const { children } = await contract.networkClient.getSkill(parentSkillId);
  const idx = children.findIndex((childSkillId) => childSkillId.eq(skillId));
  return bigNumberify(idx);
};

export const getPermissionProofs = async (
  contract: ExtendedIColony,
  domainId: BigNumberish,
  role: ColonyRole,
  customAddress?: string,
  /* [permissionDomainId, childSkillIndex] */
): Promise<[BigNumber, BigNumber]> => {
  const walletAddress = customAddress || (await contract.signer.getAddress());
  const hasPermissionInDomain = await contract.hasUserRole(
    walletAddress,
    domainId,
    role,
  );
  if (hasPermissionInDomain) {
    return [bigNumberify(domainId), MaxUint256];
  }
  // @TODO once we allow nested domains on the network level, this needs to traverse down the skill/domain tree. Use binary search
  const foundDomainId = bigNumberify(ROOT_DOMAIN_ID);
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
  if (idx.lt(0)) {
    throw new Error(
      `User does not have the permission ${role} in any parent domain`,
    );
  }
  return [foundDomainId, idx];
};

export const getMoveFundsPermissionProofs = async (
  contract: ExtendedIColony,
  fromtPotId: BigNumberish,
  toPotId: BigNumberish,
  customAddress?: string,
  /* [fromPermissionDomainId, fromChildSkillIndex, toChildSkillIndex] */
): Promise<[BigNumber, BigNumber, BigNumber]> => {
  const walletAddress = customAddress || (await contract.signer.getAddress());
  const fromDomainId = await getPotDomain(contract, fromtPotId);
  const toDomainId = await getPotDomain(contract, toPotId);
  const [
    fromPermissionDomainId,
    fromChildSkillIndex,
  ] = await getPermissionProofs(
    contract,
    fromDomainId,
    ColonyRole.Funding,
    walletAddress,
  );
  // @TODO: once getPermissionProofs is more expensive we can just check the domain here
  // with userHasRole and then immediately get the permission proofs
  const [toPermissionDomainId, toChildSkillIndex] = await getPermissionProofs(
    contract,
    toDomainId,
    ColonyRole.Funding,
    walletAddress,
  );
  // Here's a weird case. We have found permissions for these domains but they don't share
  // a parent domain with that permission. We can still find a common parent domain that
  // has the funding permission
  if (!fromPermissionDomainId.eq(toPermissionDomainId)) {
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
      if (rootFromChildSkillIndex.lt(0) || rootToChildSkillIndex.lt(0)) {
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

export const getExtensionPermissionProofs = async (
  colonyClient: ExtendedIColony,
  domainId: BigNumberish,
  address?: string,
): Promise<[BigNumberish, BigNumberish]> => {
  const [fundingPDID, fundingCSI] = await getPermissionProofs(
    colonyClient,
    domainId,
    ColonyRole.Funding,
    address,
  );
  const [adminPDID, adminCSI] = await getPermissionProofs(
    colonyClient,
    domainId,
    ColonyRole.Administration,
    address,
  );

  if (!fundingPDID.eq(adminPDID) || !fundingCSI.eq(adminCSI)) {
    // @TODO: this can surely be improved
    throw new Error(
      `${
        address || 'User'
      } has to have the funding and administration role in the same domain`,
    );
  }

  return [adminPDID, adminCSI];
};

async function getExtensionClient(
  this: ExtendedIColony,
  extensionName: Extension,
): Promise<ExtensionClient> {
  const extensionAddress = await this.networkClient.getExtensionInstallation(
    getExtensionHash(extensionName),
    this.address,
  );
  if (extensionAddress === AddressZero) {
    throw new Error(
      `${extensionName} extension is not installed for this colony`,
    );
  }
  const extensionVersionClient = getExtensionVersionClient(
    extensionAddress,
    this.signer || this.provider,
  );
  const versionBN = await extensionVersionClient.version();
  const version = versionBN.toNumber() as ColonyVersion;
  const {
    default: getVersionedExtensionClient,
    // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires, max-len
  } = require(`../../Extensions/${extensionName}/${version}/${extensionName}Client`);
  return getVersionedExtensionClient(extensionAddress, this);
}

export const getRoleSettingProofs = async (
  colonyClient: ExtendedIColony,
  _user: string,
  _domainId: BigNumberish,
): Promise<[BigNumberish, BigNumberish]> => {
  let proofs: [BigNumberish, BigNumberish];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      colonyClient,
      _domainId,
      ColonyRole.Architecture,
    );
  } catch (err) {
    proofs = await getPermissionProofs(
      colonyClient,
      _domainId,
      ColonyRole.Root,
    );
  }
  return proofs;
};

async function setArchitectureRoleWithProofs(
  this: ExtendedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getRoleSettingProofs(
    this,
    _user,
    _domainId,
  );
  return this.setArchitectureRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function setFundingRoleWithProofs(
  this: ExtendedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getRoleSettingProofs(
    this,
    _user,
    _domainId,
  );
  return this.setFundingRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function setAdministrationRoleWithProofs(
  this: ExtendedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getRoleSettingProofs(
    this,
    _user,
    _domainId,
  );
  return this.setAdministrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function addDomainWithProofs(
  this: ExtendedIColony,
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

async function addPaymentWithProofs(
  this: ExtendedIColony,
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

async function finalizePaymentWithProofs(
  this: ExtendedIColony,
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

async function setPaymentRecipientWithProofs(
  this: ExtendedIColony,
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

async function setPaymentSkillWithProofs(
  this: ExtendedIColony,
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

async function setPaymentPayoutWithProofs(
  this: ExtendedIColony,
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

async function makeTaskWithProofs(
  this: ExtendedIColony,
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

async function moveFundsBetweenPotsWithProofs(
  this: ExtendedIColony,
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

  return this[
    `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)`
  ](
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

async function estimateSetArchitectureRoleWithProofs(
  this: ExtendedIColony,
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

async function estimateSetFundingRoleWithProofs(
  this: ExtendedIColony,
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

async function estimateSetAdministrationRoleWithProofs(
  this: ExtendedIColony,
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

async function estimateAddDomainWithProofs(
  this: ExtendedIColony,
  _parentDomainId: BigNumberish,
): Promise<BigNumber> {
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

async function estimateAddPaymentWithProofs(
  this: ExtendedIColony,
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

async function estimateFinalizePaymentWithProofs(
  this: ExtendedIColony,
  _id: BigNumberish,
): Promise<BigNumber> {
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

async function estimateSetPaymentRecipientWithProofs(
  this: ExtendedIColony,
  _id: BigNumberish,
  _recipient: string,
): Promise<BigNumber> {
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

async function estimateSetPaymentSkillWithProofs(
  this: ExtendedIColony,
  _id: BigNumberish,
  _skillId: BigNumberish,
): Promise<BigNumber> {
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

async function estimateSetPaymentPayoutWithProofs(
  this: ExtendedIColony,
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

async function estimateMakeTaskWithProofs(
  this: ExtendedIColony,
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

async function estimateMoveFundsBetweenPotsWithProofs(
  this: ExtendedIColony,
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

  return (this as IColonyV5).estimate[
    `moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)`
  ](
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
  );
}

async function getReputation(
  this: ExtendedIColony,
  skillId: BigNumberish,
  address: string,
  customRootHash?: string,
): Promise<{
  key: string;
  value: string;
  branchMask: string;
  siblings: string[];
  reputationAmount: BigNumber;
}> {
  const result = await fetchReputationOracleData(
    ReputationMinerEndpoints.UserReputationInSingleDomainWithProofs,
    this.networkClient,
    this.address,
    address,
    skillId,
    customRootHash,
  );

  return {
    ...result,
    reputationAmount: bigNumberify(result.reputationAmount || 0),
  };
}

async function getReputationWithoutProofs(
  this: ExtendedIColony,
  skillId: BigNumberish,
  address: string,
  customRootHash?: string,
): Promise<{
  key: string;
  value: string;
  reputationAmount: BigNumber;
}> {
  const result = await fetchReputationOracleData(
    ReputationMinerEndpoints.UserReputationInSingleDomainWithoutProofs,
    this.networkClient,
    this.address,
    address,
    skillId,
    customRootHash,
  );
  return {
    ...result,
    reputationAmount: bigNumberify(result.reputationAmount || 0),
  };
}

async function getReputationAcrossDomains(
  this: ExtendedIColony,
  address: string,
  customRootHash?: string,
): Promise<
  {
    domainId: number;
    skillId: number;
    reputationAmount?: BigNumberish;
  }[]
> {
  const result = await fetchReputationOracleData(
    ReputationMinerEndpoints.UserReputationInAllDomains,
    this.networkClient,
    this.address,
    address,
    undefined,
    customRootHash,
  );

  const domainCount = await this.getDomainCount();
  const allColonyDomains =
    (await Promise.all(
      Array.from(new Array(domainCount.toNumber())).map(async (_, index) => {
        const domainId = index + 1;
        const domain = await this.getDomain(domainId);
        return {
          domainId,
          skillId: domain.skillId.toNumber(),
        };
      }),
    )) || [];

  return allColonyDomains.map((domain) => {
    let reputationAmount;
    const skillAssignedToDomain = (result?.reputations || []).find(
      ({ skill_id: skillId }) => skillId === domain.skillId,
    );
    if (skillAssignedToDomain) {
      reputationAmount = skillAssignedToDomain?.reputationAmount;
    }
    return {
      ...domain,
      reputationAmount: reputationAmount
        ? bigNumberify(reputationAmount)
        : undefined,
    };
  });
}

async function getMembersReputation(
  this: ExtendedIColony,
  skillId: BigNumberish,
): Promise<{ addresses: string[] }> {
  return fetchReputationOracleData(
    ReputationMinerEndpoints.UsersWithReputationInColony,
    this.networkClient,
    this.address,
    undefined,
    skillId,
    undefined,
  );
}

async function deployTokenAuthority(
  this: ExtendedIColony,
  tokenAddress: string,
  allowedToTransfer: string[],
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const tokenAuthorityFactory = new ContractFactory(
    tokenAuthorityAbi,
    tokenAuthorityBytecode,
    this.signer,
  );
  const tokenAuthorityContract = await tokenAuthorityFactory.deploy(
    tokenAddress,
    this.address,
    allowedToTransfer,
    overrides,
  );
  await tokenAuthorityContract.deployed();
  return tokenAuthorityContract.deployTransaction;
}

async function estimateDeployTokenAuthority(
  this: ExtendedIColony,
  tokenAddress: string,
  allowedToTransfer: string[],
): Promise<BigNumber> {
  const tokenAuthorityFactory = new ContractFactory(
    tokenAuthorityAbi,
    tokenAuthorityBytecode,
  );
  const deployTx = tokenAuthorityFactory.getDeployTransaction(
    tokenAddress,
    this.address,
    allowedToTransfer,
  );
  return this.provider.estimateGas(deployTx);
}

export const addExtensions = <T extends ExtendedIColony>(
  instance: T,
  networkClient: ColonyNetworkClient,
): T => {
  /* eslint-disable no-param-reassign, max-len */
  instance.clientType = ClientType.ColonyClient;
  instance.networkClient = networkClient;

  instance.deployTokenAuthority = deployTokenAuthority.bind(instance);
  instance.getExtensionClient = getExtensionClient.bind(instance);

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

  instance.estimate.deployTokenAuthority = estimateDeployTokenAuthority.bind(
    instance,
  );

  instance.estimate.setArchitectureRoleWithProofs = estimateSetArchitectureRoleWithProofs.bind(
    instance,
  );
  instance.estimate.setFundingRoleWithProofs = estimateSetFundingRoleWithProofs.bind(
    instance,
  );
  instance.estimate.setAdministrationRoleWithProofs = estimateSetAdministrationRoleWithProofs.bind(
    instance,
  );
  instance.estimate.addDomainWithProofs = estimateAddDomainWithProofs.bind(
    instance,
  );
  instance.estimate.addPaymentWithProofs = estimateAddPaymentWithProofs.bind(
    instance,
  );
  instance.estimate.finalizePaymentWithProofs = estimateFinalizePaymentWithProofs.bind(
    instance,
  );
  instance.estimate.setPaymentRecipientWithProofs = estimateSetPaymentRecipientWithProofs.bind(
    instance,
  );
  instance.estimate.setPaymentSkillWithProofs = estimateSetPaymentSkillWithProofs.bind(
    instance,
  );
  instance.estimate.setPaymentPayoutWithProofs = estimateSetPaymentPayoutWithProofs.bind(
    instance,
  );
  instance.estimate.makeTaskWithProofs = estimateMakeTaskWithProofs.bind(
    instance,
  );
  instance.estimate.moveFundsBetweenPotsWithProofs = estimateMoveFundsBetweenPotsWithProofs.bind(
    instance,
  );

  // This is awkward and just used to get the RecoveryRoleSet event which is missing (but emitted)
  // in other colonies. We can remove this once all of the active colonies are at version 4
  instance.awkwardRecoveryRoleEventClient = IColonyFactory.connect(
    instance.address,
    instance.provider,
  );

  instance.getReputation = getReputation.bind(instance);
  instance.getReputationWithoutProofs = getReputationWithoutProofs.bind(
    instance,
  );
  instance.getReputationAcrossDomains = getReputationAcrossDomains.bind(
    instance,
  );
  instance.getMembersReputation = getMembersReputation.bind(instance);

  /* eslint-enable no-param-reassign, max-len */
  return instance;
};
