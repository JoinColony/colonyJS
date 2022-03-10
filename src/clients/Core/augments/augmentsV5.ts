import {
  ContractTransaction,
  BigNumber,
  BigNumberish,
  BytesLike,
  Overrides,
} from 'ethers';

import { ROOT_DOMAIN_ID } from '../../../constants';
import { ColonyRole } from '../../../types';
import {
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
} from '../../../contracts/IColony/exports';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { AugmentedIColony, getPermissionProofs } from './commonAugments';
import { ColonyAugmentsV3 } from './augmentsV3';
import {
  addAugments as addAugmentsV4,
  ColonyAugmentsV4,
  AugmentedEstimateV4,
} from './augmentsV4';

type ValidColony = IColonyV5 | IColonyV6 | IColonyV7 | IColonyV8 | IColonyV9;

/*
 * Estimates
 */
export interface AugmentedEstimateV5 extends AugmentedEstimateV4 {
  emitDomainReputationPenaltyWithProofs(
    _domainId: BigNumberish,
    _user: string,
    _amount: BigNumberish,
  ): Promise<BigNumber>;
  setUserRolesWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _roles: BytesLike,
  ): Promise<BigNumber>;
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
  ): Promise<BigNumber>;
  editDomainWithProofs(
    _domainId: BigNumberish,
    _metadata: string,
  ): Promise<BigNumber>;
  setExpenditureStateWithProofs(
    _id: BigNumberish,
    _storageSlot: BigNumberish,
    _mask: boolean[],
    _keys: BytesLike[],
    _value: BytesLike,
  ): Promise<BigNumber>;
}

/*
 * Extension Methods
 */
export type ColonyAugmentsV5<T extends ValidColony> = {
  emitDomainReputationPenaltyWithProofs(
    _domainId: BigNumberish,
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  setUserRolesWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _roles: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  editDomainWithProofs(
    _domainId: BigNumberish,
    _metadata: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  setExpenditureStateWithProofs(
    _id: BigNumberish,
    _storageSlot: BigNumberish,
    _mask: boolean[],
    _keys: BytesLike[],
    _value: BytesLike,
    overrides?: Overrides,
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
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  _roles: BytesLike,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const isRootDomain = _domainId === ROOT_DOMAIN_ID.toString();
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    isRootDomain ? ColonyRole.Root : ColonyRole.Architecture,
  );
  return this.setUserRoles(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _roles,
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
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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

/*
 * Estimates
 */
async function estimateEmitDomainReputationPenaltyWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _user: string,
  _amount: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  );
}

async function estimateSetUserRolesWithProofs(
  this: AllAugments,
  _user: string,
  _domainId: BigNumberish,
  _roles: BytesLike,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  );
}

async function estimateTransferStakeWithProofs(
  this: AllAugments,
  _obligator: string,
  _user: string,
  _domainId: BigNumberish,
  _amount: BigNumberish,
  _recipient: string,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  );
}

async function estimateEditDomainWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _metadata: string,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.editDomain(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _metadata,
  );
}

async function estimateSetExpenditureStateWithProofs(
  this: AllAugments,
  _id: BigNumberish,
  _storageSlot: BigNumberish,
  _mask: boolean[],
  _keys: BytesLike[],
  _value: BytesLike,
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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

  return augmentedInstance;
};
