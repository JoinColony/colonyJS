import {
  ContractFactory,
  ContractTransaction,
  BytesLike,
  BigNumber,
  BigNumberish,
  Overrides,
  constants,
} from 'ethers';

import { ROOT_DOMAIN_ID } from '../../../constants';
import { abis } from '../../../exports';
import { AnyIColony, IColonyV4 } from '../../../contracts/IColony/exports';
import { fetchReputationOracleData } from '../../../utils';
import {
  ClientType,
  ColonyRole,
  FundingPotAssociatedType,
  ReputationMinerEndpoints,
} from '../../../types';
import { ColonyVersion } from '../../../versions';

import { IColony__factory as AwkwardRecoveryRoleEventIColony } from '../../../contracts/IColony/4/factories/IColony__factory';

import {
  ExtensionClient,
  Extensions,
  getExtensionClient,
} from '../../Extensions/exports';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { TokenClient } from '../../TokenClient';

const { MaxUint256 } = constants;

const { abi: tokenAuthorityAbi, bytecode: tokenAuthorityBytecode } =
  abis.TokenAuthority;

// This is exposed to type the awkward recovery event client which is basically
// just an IColonyV4
export type AwkwardRecoveryRoleEventClient = IColonyV4;

export type AugmentedEstimate<T extends AnyIColony = AnyIColony> =
  T['estimateGas'] & {
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
    addPaymentWithProofs(
      _recipient: string,
      _token: string,
      _amount: BigNumberish,
      _domainId: BigNumberish,
      _skillId: BigNumberish,
    ): Promise<BigNumber>;
    finalizePaymentWithProofs(
      _id: BigNumberish,
      overrides?: Overrides,
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
      _specificationHash: BytesLike,
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      _dueDate: BigNumberish,
    ): Promise<BigNumber>;
  };

export type AugmentedIColony<T extends AnyIColony = AnyIColony> = T & {
  clientType: ClientType.ColonyClient;
  clientVersion: ColonyVersion;
  networkClient: ColonyNetworkClient;
  tokenClient: TokenClient;

  awkwardRecoveryRoleEventClient: AwkwardRecoveryRoleEventClient;

  getExtensionClient(
    this: AugmentedIColony,
    extensionName: Extensions,
  ): Promise<ExtensionClient>;

  deployTokenAuthority(
    tokenAddress: string,
    allowedToTransfer: string[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  setArchitectureRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  setFundingRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  setAdministrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  addPaymentWithProofs(
    _recipient: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  finalizePaymentWithProofs(
    _id: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  setPaymentRecipientWithProofs(
    _id: BigNumberish,
    _recipient: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  setPaymentSkillWithProofs(
    _id: BigNumberish,
    _skillId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  setPaymentPayoutWithProofs(
    _id: BigNumberish,
    _token: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  makeTaskWithProofs(
    _specificationHash: BytesLike,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    _dueDate: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  estimateGas: AugmentedEstimate<T>;

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

// FIXME: maybe put this somewhere else
export const getPotDomain = async (
  contract: AugmentedIColony,
  potId: BigNumberish,
): Promise<BigNumberish> => {
  const { associatedType, associatedTypeId } = await contract.getFundingPot(
    potId,
  );
  // In case we add types to this later, we use the official colonyNetwork
  // function available in v5+
  if ('getDomainFromFundingPot' in contract) {
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

// FIXME: maybe put this somewhere else
export const getChildIndex = async (
  contract: AugmentedIColony,
  parentDomainId: BigNumberish,
  domainId: BigNumberish,
): Promise<BigNumber> => {
  if (BigNumber.from(parentDomainId).eq(BigNumber.from(domainId))) {
    return MaxUint256;
  }
  const { skillId: parentSkillId } = await contract.getDomain(parentDomainId);
  const { skillId } = await contract.getDomain(domainId);
  const { children } = await contract.networkClient.getSkill(parentSkillId);
  const idx = children.findIndex((childSkillId) => childSkillId.eq(skillId));
  if (idx < 0) {
    throw new Error(
      `Could not find ${domainId} as a child of ${parentDomainId}`,
    );
  }
  return BigNumber.from(idx);
};

// Call getPermissionProofs once for domainId and role
// Find domains for pots
// Find childSkillIndeces for from and to domain in domain we're acting in (domainId)

// FIXME: maybe put this somewhere else
export const getPermissionProofs = async (
  contract: AugmentedIColony,
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
    return [BigNumber.from(domainId), MaxUint256];
  }
  // @TODO once we allow nested domains on the network level, this needs to traverse down the skill/domain tree. Use binary search
  const foundDomainId = BigNumber.from(ROOT_DOMAIN_ID);
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

export const getExtensionPermissionProofs = async (
  colonyClient: AugmentedIColony,
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

async function setArchitectureRoleWithProofs(
  this: AugmentedIColony,
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

async function setFundingRoleWithProofs(
  this: AugmentedIColony,
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

async function setAdministrationRoleWithProofs(
  this: AugmentedIColony,
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

async function addPaymentWithProofs(
  this: AugmentedIColony,
  _recipient: string,
  _token: string,
  _amount: BigNumberish,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  overrides?: Overrides,
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
  this: AugmentedIColony,
  _id: BigNumberish,
  overrides?: Overrides,
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
  this: AugmentedIColony,
  _id: BigNumberish,
  _recipient: string,
  overrides?: Overrides,
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
  this: AugmentedIColony,
  _id: BigNumberish,
  _skillId: string,
  overrides?: Overrides,
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
  this: AugmentedIColony,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides?: Overrides,
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
  this: AugmentedIColony,
  _specificationHash: BytesLike,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  _dueDate: BigNumberish,
  overrides?: Overrides,
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

async function estimateSetArchitectureRoleWithProofs(
  this: AugmentedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.setArchitectureRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  );
}

async function estimateSetFundingRoleWithProofs(
  this: AugmentedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.setFundingRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  );
}

async function estimateSetAdministrationRoleWithProofs(
  this: AugmentedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.setAdministrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  );
}

async function estimateAddPaymentWithProofs(
  this: AugmentedIColony,
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
  return this.estimateGas.addPayment(
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
  this: AugmentedIColony,
  _id: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.finalizePayment(
    permissionDomainId,
    childSkillIndex,
    _id,
  );
}

async function estimateSetPaymentRecipientWithProofs(
  this: AugmentedIColony,
  _id: BigNumberish,
  _recipient: string,
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.setPaymentRecipient(
    permissionDomainId,
    childSkillIndex,
    _id,
    _recipient,
  );
}

async function estimateSetPaymentSkillWithProofs(
  this: AugmentedIColony,
  _id: BigNumberish,
  _skillId: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.setPaymentSkill(
    permissionDomainId,
    childSkillIndex,
    _id,
    _skillId,
  );
}

async function estimateSetPaymentPayoutWithProofs(
  this: AugmentedIColony,
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
  return this.estimateGas.setPaymentPayout(
    permissionDomainId,
    childSkillIndex,
    _id,
    _token,
    _amount,
  );
}

async function estimateMakeTaskWithProofs(
  this: AugmentedIColony,
  _specificationHash: BytesLike,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  _dueDate: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.makeTask(
    permissionDomainId,
    childSkillIndex,
    _specificationHash,
    _domainId,
    _skillId,
    _dueDate,
  );
}

async function getReputation(
  this: AugmentedIColony,
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
    reputationAmount: BigNumber.from(result.reputationAmount || 0),
  };
}

async function getReputationWithoutProofs(
  this: AugmentedIColony,
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
    reputationAmount: BigNumber.from(result.reputationAmount || 0),
  };
}

async function getReputationAcrossDomains(
  this: AugmentedIColony,
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
        ? BigNumber.from(reputationAmount)
        : undefined,
    };
  });
}

async function getMembersReputation(
  this: AugmentedIColony,
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
  this: AugmentedIColony,
  tokenAddress: string,
  allowedToTransfer: string[],
  overrides?: Overrides,
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
  this: AugmentedIColony,
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

export const addAugments = <T extends AugmentedIColony>(
  instance: T,
  networkClient: ColonyNetworkClient,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.ColonyClient;
  instance.networkClient = networkClient;

  instance.deployTokenAuthority = deployTokenAuthority.bind(instance);
  instance.getExtensionClient = getExtensionClient.bind(instance);

  instance.setArchitectureRoleWithProofs =
    setArchitectureRoleWithProofs.bind(instance);
  instance.setFundingRoleWithProofs = setFundingRoleWithProofs.bind(instance);
  instance.setAdministrationRoleWithProofs =
    setAdministrationRoleWithProofs.bind(instance);
  instance.addPaymentWithProofs = addPaymentWithProofs.bind(instance);
  instance.finalizePaymentWithProofs = finalizePaymentWithProofs.bind(instance);
  instance.setPaymentRecipientWithProofs =
    setPaymentRecipientWithProofs.bind(instance);
  instance.setPaymentSkillWithProofs = setPaymentSkillWithProofs.bind(instance);
  instance.setPaymentPayoutWithProofs =
    setPaymentPayoutWithProofs.bind(instance);
  instance.makeTaskWithProofs = makeTaskWithProofs.bind(instance);

  instance.estimateGas.deployTokenAuthority =
    estimateDeployTokenAuthority.bind(instance);

  instance.estimateGas.setArchitectureRoleWithProofs =
    estimateSetArchitectureRoleWithProofs.bind(instance);
  instance.estimateGas.setFundingRoleWithProofs =
    estimateSetFundingRoleWithProofs.bind(instance);
  instance.estimateGas.setAdministrationRoleWithProofs =
    estimateSetAdministrationRoleWithProofs.bind(instance);
  instance.estimateGas.addPaymentWithProofs =
    estimateAddPaymentWithProofs.bind(instance);
  instance.estimateGas.finalizePaymentWithProofs =
    estimateFinalizePaymentWithProofs.bind(instance);
  instance.estimateGas.setPaymentRecipientWithProofs =
    estimateSetPaymentRecipientWithProofs.bind(instance);
  instance.estimateGas.setPaymentSkillWithProofs =
    estimateSetPaymentSkillWithProofs.bind(instance);
  instance.estimateGas.setPaymentPayoutWithProofs =
    estimateSetPaymentPayoutWithProofs.bind(instance);
  instance.estimateGas.makeTaskWithProofs =
    estimateMakeTaskWithProofs.bind(instance);

  // This is awkward and just used to get the RecoveryRoleSet event which is missing (but emitted)
  // in other colonies. We can remove this once all of the active colonies are at version 4
  instance.awkwardRecoveryRoleEventClient =
    AwkwardRecoveryRoleEventIColony.connect(
      instance.address,
      instance.provider,
    );

  instance.getReputation = getReputation.bind(instance);
  instance.getReputationWithoutProofs =
    getReputationWithoutProofs.bind(instance);
  instance.getReputationAcrossDomains =
    getReputationAcrossDomains.bind(instance);
  instance.getMembersReputation = getMembersReputation.bind(instance);

  /* eslint-enable no-param-reassign */
  return instance;
};
