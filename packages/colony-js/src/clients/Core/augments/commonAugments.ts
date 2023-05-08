import {
  ContractTransaction,
  BytesLike,
  BigNumber,
  BigNumberish,
} from 'ethers';
import {
  type IColonyEvents,
  IColonyEvents__factory as IColonyEventsFactory,
} from '@colony/events';
import { TokenClient } from '@colony/tokens';

import {
  type ColonyVersion,
  type TxOverrides,
  ColonyRole,
  Extension,
  getPermissionProofs,
  ReputationClient,
} from '@colony/core';
import { ClientType } from '../../../constants';
import {
  getExtensionClient,
  GetExtensionClientReturns,
} from '../../Extensions/exports';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { AnyIColony } from '../contracts';

export type AugmentedEstimate<T extends AnyIColony = AnyIColony> =
  T['estimateGas'] & {
    setArchitectureRoleWithProofs(
      _user: string,
      _domainId: BigNumberish,
      _setTo: boolean,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[setFundingRole]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _domainId - Domain in which we are giving user the role
     * @param _setTo - The state of the role permission (true assign the permission, false revokes it)
     * @param _user - User we want to give an funding role to
     */
    setFundingRoleWithProofs(
      _user: string,
      _domainId: BigNumberish,
      _setTo: boolean,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[setAdministrationRole]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _domainId - Domain in which we are giving user the role
     * @param _setTo - The state of the role permission (true assign the permission, false revokes it)
     * @param _user - User we want to give an admin role to
     */
    setAdministrationRoleWithProofs(
      _user: string,
      _domainId: BigNumberish,
      _setTo: boolean,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[addPayment]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _amount - Payout amount
     * @param _domainId - The domain where the payment belongs
     * @param _recipient - Address of the payment recipient
     * @param _skillId - The skill associated with the payment
     * @param _token - Address of the token, `0x0` value indicates Ether
     */
    addPaymentWithProofs(
      _recipient: string,
      _token: string,
      _amount: BigNumberish,
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[finalizePayment]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _id - Payment identifier
     */
    finalizePaymentWithProofs(
      _id: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[setPaymentRecipient]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _id - Payment identifier
     * @param _recipient - Address of the payment recipient
     */
    setPaymentRecipientWithProofs(
      _id: BigNumberish,
      _recipient: string,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[setPaymentSkill]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _id - Payment identifier
     * @param _skillId - Id of the new skill to set
     */
    setPaymentSkillWithProofs(
      _id: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[setPaymentPayout]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _amount - Payout amount
     * @param _id - Payment identifier
     * @param _token - Address of the token, `0x0` value indicates Ether
     */
    setPaymentPayoutWithProofs(
      _id: BigNumberish,
      _token: BigNumberish,
      _amount: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
    /**
     * Same as [[makeTask]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _domainId - The domain where the task belongs
     * @param _dueDate - The due date of the task, can set to `0` for no-op
     * @param _skillId - The skill associated with the task, can set to `0` for no-op
     * @param _specificationHash - Database identifier where the task specification is stored
     */
    makeTaskWithProofs(
      _specificationHash: BytesLike,
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      _dueDate: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
  };

export type AugmentedIColony<T extends AnyIColony = AnyIColony> = T & {
  clientType: ClientType.ColonyClient;
  /** The version of the Colony the client is attached to */
  clientVersion: ColonyVersion;
  /** An instance of the ColonyNetworkClient */
  networkClient: ColonyNetworkClient;
  /** A helper client to retrieve reputation */
  reputationClient: ReputationClient;
  /** An instance of the TokenClient for the Colony's native token */
  tokenClient: TokenClient;

  /**
   * The colonyEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  colonyEvents: IColonyEvents;

  /**
   * Get an instance of an extension client associated with this Colony.
   * @param extension - An [[Extension]]
   * @returns An instance of an intialized extension client for the desired extension
   */
  getExtensionClient<E extends Extension>(
    extension: E,
  ): Promise<GetExtensionClientReturns[E]>;

  /**
   * Same as [[setArchitectureRole]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which we are giving user the role
   * @param _setTo - The state of the role permission (true assign the permission, false revokes it)
   * @param _user - User we want to give an architecture role to
   */
  setArchitectureRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[setFundingRole]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which we are giving user the role
   * @param _setTo - The state of the role permission (true assign the permission, false revokes it)
   * @param _user - User we want to give an funding role to
   */
  setFundingRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[setAdministrationRole]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which we are giving user the role
   * @param _setTo - The state of the role permission (true assign the permission, false revokes it)
   * @param _user - User we want to give an admin role to
   */
  setAdministrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[addPayment]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - Payout amount
   * @param _domainId - The domain where the payment belongs
   * @param _recipient - Address of the payment recipient
   * @param _skillId - The skill associated with the payment
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  addPaymentWithProofs(
    _recipient: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[finalizePayment]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Payment identifier
   */
  finalizePaymentWithProofs(
    _id: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[setPaymentRecipient]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Payment identifier
   * @param _recipient - Address of the payment recipient
   */
  setPaymentRecipientWithProofs(
    _id: BigNumberish,
    _recipient: string,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[setPaymentSkill]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Payment identifier
   * @param _skillId - Id of the new skill to set
   */
  setPaymentSkillWithProofs(
    _id: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[setPaymentPayout]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - Payout amount
   * @param _id - Payment identifier
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  setPaymentPayoutWithProofs(
    _id: BigNumberish,
    _token: BigNumberish,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[makeTask]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - The domain where the task belongs
   * @param _dueDate - The due date of the task, can set to `0` for no-op
   * @param _skillId - The skill associated with the task, can set to `0` for no-op
   * @param _specificationHash - Database identifier where the task specification is stored
   */
  makeTaskWithProofs(
    _specificationHash: BytesLike,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    _dueDate: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  estimateGas: AugmentedEstimate<T>;

  /**
   * Get the reputation for an address and a certain skill.
   * If you need the skillId for a certain domain you can use the [[getDomain]] function.
   * @remarks
   * This function also retrieves the proofs (`branchMask`, `siblings`) that are needed to verify the reputation on chain.
   * If you don't need to do that (e.g. in order to proof the reputation when calling a contract method), you should probably just use
   * the [[getReputationWithoutProofs]] method as it requires fewer computations
   * @param skillId - The skill id to get the addresses reputation in
   * @param address - Wallet address to retrieve the reputation of
   * @param customRootHash - The `customRootHash` can be set to retrieve the reputation at a certain block time in the past
   * @returns The reputation amount as well as the two proofs that are needed to verify the reputation on chain
   */
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
  /**
   * Get the reputation for an address and a certain skill.
   * If you need the skillId for a certain domain you can use the [[getDomain]] function.
   * @param skillId - The skill id to get the addresses reputation in
   * @param address - Wallet address to retrieve the reputation of
   * @param customRootHash - The `customRootHash` can be set to retrieve the reputation at a certain block time in the past
   * @returns The reputation amount
   */
  getReputationWithoutProofs(
    skillId: BigNumberish,
    address: string,
    customRootHash?: string,
  ): Promise<{
    key: string;
    value: string;
    reputationAmount: BigNumber;
  }>;
  /**
   * Get the reputation for an address across all domains in a Colony.
   * @param address - Wallet address to retrieve the reputation of
   * @param customRootHash - The `customRootHash` can be set to retrieve the reputation at a certain block time in the past
   * @returns The reputation amount
   */
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
  /**
   * Get all addresses that have reputation for a given skill.
   * If you need the skillId for a certain domain you can use the [[getDomain]] function.
   * @param skillId - The skill id to get the reputation in
   * @returns All addresses that have a non-zero reputation for the given skill
   */
  getMembersReputation(skillId: BigNumberish): Promise<{ addresses: string[] }>;
};

async function setArchitectureRoleWithProofs(
  this: AugmentedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish, string];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.Architecture,
    );
  } catch (err) {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.Root,
    );
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish, string];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.Architecture,
    );
  } catch (err) {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.Root,
    );
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish, string];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.Architecture,
    );
  } catch (err) {
    proofs = await getPermissionProofs(
      this.networkClient,
      this,
      _domainId,
      ColonyRole.Root,
    );
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
    this.networkClient,
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
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
    overrides,
  );
}

async function estimateSetAdministrationRoleWithProofs(
  this: AugmentedIColony,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
    overrides,
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
    this.networkClient,
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
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.finalizePayment(
    permissionDomainId,
    childSkillIndex,
    _id,
    overrides,
  );
}

async function estimateSetPaymentRecipientWithProofs(
  this: AugmentedIColony,
  _id: BigNumberish,
  _recipient: string,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.setPaymentRecipient(
    permissionDomainId,
    childSkillIndex,
    _id,
    _recipient,
    overrides,
  );
}

async function estimateSetPaymentSkillWithProofs(
  this: AugmentedIColony,
  _id: BigNumberish,
  _skillId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.setPaymentSkill(
    permissionDomainId,
    childSkillIndex,
    _id,
    _skillId,
    overrides,
  );
}

async function estimateSetPaymentPayoutWithProofs(
  this: AugmentedIColony,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
    overrides,
  );
}

async function estimateMakeTaskWithProofs(
  this: AugmentedIColony,
  _specificationHash: BytesLike,
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  _dueDate: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
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
    overrides,
  );
}

export const addAugments = <T extends AugmentedIColony>(
  instance: T,
  networkClient: ColonyNetworkClient,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.ColonyClient;
  instance.networkClient = networkClient;

  instance.getExtensionClient = getExtensionClient.bind(instance);

  instance.reputationClient = new ReputationClient(
    instance.networkClient,
    instance,
    { customEndpointUrl: instance.networkClient.reputationOracleEndpoint },
  );

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

  instance.colonyEvents = IColonyEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  instance.getReputation =
    instance.reputationClient.getReputationWithProofs.bind(
      instance.reputationClient,
    );
  instance.getReputationWithoutProofs =
    instance.reputationClient.getReputation.bind(instance.reputationClient);
  instance.getReputationAcrossDomains =
    instance.reputationClient.getReputationAcrossDomains.bind(
      instance.reputationClient,
    );
  instance.getMembersReputation =
    instance.reputationClient.getMembersReputation.bind(
      instance.reputationClient,
    );

  /* eslint-enable no-param-reassign */
  return instance;
};
