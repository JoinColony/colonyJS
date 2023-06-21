import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  BytesLike,
} from 'ethers';
import {
  type ExtensionVersion,
  type TxOverrides,
  ColonyRole,
  Extension,
  ExtensionVersions,
  Id,
  colonyRoles2Hex,
  getExtensionHash,
  getPermissionProofs,
  isExtensionCompatible,
} from '@colony/core';

import { ColonyNetworkClient } from '../../ColonyNetworkClient.js';
import {
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
  IColonyV10,
  IColonyV11,
  IColonyV12,
} from '../contracts.js';
import { AugmentedIColony } from './commonAugments.js';
import { ColonyAugmentsV3 } from './augmentsV3.js';
import {
  addAugments as addAugmentsV4,
  ColonyAugmentsV4,
  AugmentedEstimateV4,
} from './augmentsV4.js';

type ValidColony =
  | IColonyV5
  | IColonyV6
  | IColonyV7
  | IColonyV8
  | IColonyV9
  | IColonyV10
  | IColonyV11
  | IColonyV12;

/*
 * Estimates
 */
export interface AugmentedEstimateV5 extends AugmentedEstimateV4 {
  /**
   * Same as {@link emitDomainReputationPenalty}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - The (negative) amount of reputation to lose
   * @param _domainId - The domain where the user will lose reputation
   * @param _user - The user who will lose reputation
   */
  emitDomainReputationPenaltyWithProofs(
    _domainId: BigNumberish,
    _user: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * Same as {@link setUserRoles}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which we are giving user the role
   * @param roles - {@link ColonyRole} array. Also takes a byte array representing the desired role setting (1 for on, 0 for off)
   * @param _user - User we want to give a role to
   */
  setUserRolesWithProofs(
    _user: string,
    _domainId: BigNumberish,
    roles: ColonyRole[] | BytesLike,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * Same as {@link transferStake}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - Amount of internal token we are transferring.
   * @param _domainId - Domain in which we are transferring the tokens.
   * @param _obligator - Address of the account who set the obligation.
   * @param _recipient - Recipient of the transferred tokens.
   * @param _user - Address of the account we are transferring.
   */
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * Same as {@link editDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Id of the domain being edited
   * @param _metadata - Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.
   */
  editDomainWithProofs(
    _domainId: BigNumberish,
    _metadata: string,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * Same as {@link editDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _keys - Array of additional keys (for mappings & arrays)
   * @param _mask - Array of booleans indicated whether a key is a mapping (F) or an array index (T).
   * @param _storageSlot - Number of the top-level storage slot (25, 26, or 27)
   * @param _value - Value to set at location
   */
  setExpenditureStateWithProofs(
    _id: BigNumberish,
    _storageSlot: BigNumberish,
    _mask: boolean[],
    _keys: BytesLike[],
    _value: BytesLike,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * Similar to {@link installExtension}, but first check whether the desired extension can be installed in this Colony
   * Always prefer this method, except when you have good reason not to.
   * @param extension - A {@link Extension} name
   * @param version - The desired version number of the extension you wish to install
   */
  installExtensionChecked(
    extension: Extension,
    version?: number,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * Similar to {@link upgradeExtension}, but first check whether the desired extension can be upgraded to the desired version in this Colony
   * Always prefer this method, except when you have good reason not to.
   * @param extension - A {@link Extension} name
   * @param newVersion - The desired version number of the extension you wish to upgrade
   */
  upgradeExtensionChecked(
    extension: Extension,
    newVersion?: number,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

/*
 * Extension Methods
 */
export type ColonyAugmentsV5<T extends ValidColony> = {
  /**
   * Same as {@link emitDomainReputationPenalty}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - The (negative) amount of reputation to lose
   * @param _domainId - The domain where the user will lose reputation
   * @param _user - The user who will lose reputation
   */
  emitDomainReputationPenaltyWithProofs(
    _domainId: BigNumberish,
    _user: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as {@link setUserRoles}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Domain in which we are giving user the role
   * @param _roles - Byte array representing the desired role setting (1 for on, 0 for off)
   * @param _user - User we want to give a role to
   */
  setUserRolesWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _roles: BytesLike,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as {@link transferStake}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _amount - Amount of internal token we are transferring.
   * @param _domainId - Domain in which we are transferring the tokens.
   * @param _obligator - Address of the account who set the obligation.
   * @param _recipient - Recipient of the transferred tokens.
   * @param _user - Address of the account we are transferring.
   */
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as {@link editDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Id of the domain being edited
   * @param _metadata - Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.
   */
  editDomainWithProofs(
    _domainId: BigNumberish,
    _metadata: string,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as {@link editDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _keys - Array of additional keys (for mappings & arrays)
   * @param _mask - Array of booleans indicated whether a key is a mapping (F) or an array index (T).
   * @param _storageSlot - Number of the top-level storage slot (25, 26, or 27)
   * @param _value - Value to set at location
   */
  setExpenditureStateWithProofs(
    _id: BigNumberish,
    _storageSlot: BigNumberish,
    _mask: boolean[],
    _keys: BytesLike[],
    _value: BytesLike,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Similar to {@link installExtension}, but first check whether the desired extension can be installed in this Colony
   * Always prefer this method, except when you have good reason not to.
   * @param extension - A {@link Extension} name
   * @param version - The desired version number of the extension you wish to install
   */
  installExtensionChecked(
    extension: Extension,
    version?: number,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Similar to {@link upgradeExtension}, but first check whether the desired extension can be upgraded to the desired version in this Colony
   * Always prefer this method, except when you have good reason not to.
   * @param extension - A {@link Extension} name
   * @param newVersion - The desired version number of the extension you wish to upgrade
   */
  upgradeExtensionChecked(
    extension: Extension,
    newVersion?: number,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  estimateGas: T['estimateGas'] & AugmentedEstimateV5;
};

type AllAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV5<ValidColony>;

/*
 * Extension Methods
 */

async function emitDomainReputationPenaltyWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _user: string,
  _amount: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.emitDomainReputationPenalty(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _user,
    _amount,
    overrides,
  );
}

async function setUserRolesWithProofs(
  this: AllAugments,
  _user: string,
  _domainId: BigNumberish,
  roles: BytesLike | ColonyRole[],
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const isRootDomain = _domainId === Id.RootDomain.toString();
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    isRootDomain ? ColonyRole.Root : ColonyRole.Architecture,
  );
  const byteRoles: BytesLike = Array.isArray(roles)
    ? colonyRoles2Hex(roles)
    : roles;
  return this.setUserRoles(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    byteRoles,
    overrides,
  );
}

async function transferStakeWithProofs(
  this: AllAugments,
  _obligator: string,
  _user: string,
  _domainId: BigNumberish,
  _amount: BigNumberish,
  _recipient: string,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.transferStake(
    permissionDomainId,
    childSkillIndex,
    _obligator,
    _user,
    _domainId,
    _amount,
    _recipient,
    overrides,
  );
}

async function editDomainWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _metadata: string,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.editDomain(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _metadata,
    overrides,
  );
}

async function setExpenditureStateWithProofs(
  this: AllAugments,
  _id: BigNumberish,
  _storageSlot: BigNumberish,
  _mask: boolean[],
  _keys: BytesLike[],
  _value: BytesLike,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.setExpenditureState(
    permissionDomainId,
    childSkillIndex,
    _id,
    _storageSlot,
    _mask,
    _keys,
    _value,
    overrides,
  );
}

async function installExtensionChecked(
  this: AllAugments,
  extension: Extension,
  version?: number,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const extensionVersion = version || ExtensionVersions[extension];
  if (
    !isExtensionCompatible(
      extension,
      extensionVersion as ExtensionVersion,
      this.clientVersion,
    )
  ) {
    throw new Error(
      `${extension} extension with version ${extensionVersion} is not compatible with the current Colony version ${this.clientVersion}`,
    );
  }
  return this.installExtension(
    getExtensionHash(extension),
    BigNumber.from(extensionVersion),
    overrides,
  );
}

async function upgradeExtensionChecked(
  this: AllAugments,
  extension: Extension,
  newVersion?: number,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const extensionVersion = newVersion || ExtensionVersions[extension];
  if (
    !isExtensionCompatible(
      extension,
      extensionVersion as ExtensionVersion,
      this.clientVersion,
    )
  ) {
    throw new Error(
      `${extension} extension with version ${extensionVersion} is not compatible with the current Colony version ${this.clientVersion}`,
    );
  }
  return this.upgradeExtension(
    getExtensionHash(extension),
    BigNumber.from(extensionVersion),
    overrides,
  );
}

/*
 * Estimates
 */
async function estimateEmitDomainReputationPenaltyWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _user: string,
  _amount: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas.emitDomainReputationPenalty(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _user,
    _amount,
    overrides,
  );
}

async function estimateSetUserRolesWithProofs(
  this: AllAugments,
  _user: string,
  _domainId: BigNumberish,
  _roles: BytesLike,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.setUserRoles(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _roles,
    overrides,
  );
}

async function estimateTransferStakeWithProofs(
  this: AllAugments,
  _obligator: string,
  _user: string,
  _domainId: BigNumberish,
  _amount: BigNumberish,
  _recipient: string,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas.transferStake(
    permissionDomainId,
    childSkillIndex,
    _obligator,
    _user,
    _domainId,
    _amount,
    _recipient,
    overrides,
  );
}

async function estimateEditDomainWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _metadata: string,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.editDomain(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _metadata,
    overrides,
  );
}

async function estimateSetExpenditureStateWithProofs(
  this: AllAugments,
  _id: BigNumberish,
  _storageSlot: BigNumberish,
  _mask: boolean[],
  _keys: BytesLike[],
  _value: BytesLike,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas.setExpenditureState(
    permissionDomainId,
    childSkillIndex,
    _id,
    _storageSlot,
    _mask,
    _keys,
    _value,
    overrides,
  );
}

async function estimateInstallExtensionChecked(
  this: AllAugments,
  extension: Extension,
  version?: number,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const extensionVersion = version || ExtensionVersions[extension];
  if (
    !isExtensionCompatible(
      extension,
      extensionVersion as ExtensionVersion,
      this.clientVersion,
    )
  ) {
    throw new Error(
      `${extension} extension with version ${extensionVersion} is not compatible with the current Colony version ${this.clientVersion}`,
    );
  }
  return this.estimateGas.installExtension(
    getExtensionHash(extension),
    BigNumber.from(extensionVersion),
    overrides,
  );
}

async function estimateUpgradeExtensionChecked(
  this: AllAugments,
  extension: Extension,
  newVersion?: number,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const extensionVersion = newVersion || ExtensionVersions[extension];
  if (
    !isExtensionCompatible(
      extension,
      extensionVersion as ExtensionVersion,
      this.clientVersion,
    )
  ) {
    throw new Error(
      `${extension} extension with version ${extensionVersion} is not compatible with the current Colony version ${this.clientVersion}`,
    );
  }
  return this.estimateGas.upgradeExtension(
    getExtensionHash(extension),
    BigNumber.from(extensionVersion),
    overrides,
  );
}

/*
 * Bindings
 */
export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyAugmentsV5<ValidColony> => {
  // Add all augments from v4, because these are also still valid
  const augmentedInstance = addAugmentsV4(
    instance,
    networkClient,
  ) as AugmentedIColony<ValidColony> &
    ColonyAugmentsV3<ValidColony> &
    ColonyAugmentsV4<ValidColony> &
    ColonyAugmentsV5<ValidColony>;

  augmentedInstance.emitDomainReputationPenaltyWithProofs =
    emitDomainReputationPenaltyWithProofs.bind(augmentedInstance);
  augmentedInstance.setUserRolesWithProofs =
    setUserRolesWithProofs.bind(augmentedInstance);
  augmentedInstance.transferStakeWithProofs =
    transferStakeWithProofs.bind(augmentedInstance);
  augmentedInstance.editDomainWithProofs =
    editDomainWithProofs.bind(augmentedInstance);
  augmentedInstance.setExpenditureStateWithProofs =
    setExpenditureStateWithProofs.bind(augmentedInstance);
  augmentedInstance.installExtensionChecked =
    installExtensionChecked.bind(augmentedInstance);
  augmentedInstance.upgradeExtensionChecked =
    upgradeExtensionChecked.bind(augmentedInstance);

  augmentedInstance.estimateGas.emitDomainReputationPenaltyWithProofs =
    estimateEmitDomainReputationPenaltyWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.setUserRolesWithProofs =
    estimateSetUserRolesWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.transferStakeWithProofs =
    estimateTransferStakeWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.editDomainWithProofs =
    estimateEditDomainWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.setExpenditureStateWithProofs =
    estimateSetExpenditureStateWithProofs.bind(augmentedInstance);
  augmentedInstance.estimateGas.installExtensionChecked =
    estimateInstallExtensionChecked.bind(augmentedInstance);
  augmentedInstance.estimateGas.upgradeExtensionChecked =
    estimateUpgradeExtensionChecked.bind(augmentedInstance);

  return augmentedInstance;
};
