import { ContractTransaction } from 'ethers';
import {
  BigNumber,
  BigNumberish,
  Arrayish,
  UnsignedTransaction,
} from 'ethers/utils';

import { ColonyRole, ROOT_DOMAIN_ID } from '../../../constants';
import { IColony as IColonyV5 } from '../../../contracts/IColony/5/IColony';
import { IColony as IColonyV6 } from '../../../contracts/IColony/6/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { AugmentedIColony, getPermissionProofs } from './commonAugments';
import { ColonyAugmentsV3 } from './augmentsV3';
import {
  addAugments as addAugmentsV4,
  ColonyAugmentsV4,
  AugmentedEstimateV4,
} from './augmentsV4';

type ValidColony = IColonyV5 | IColonyV6;

type PreviousVersionsAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV3<ValidColony> &
  ColonyAugmentsV4<ValidColony>;

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
    _roles: Arrayish,
  ): Promise<BigNumber>;
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
  ): Promise<BigNumber>;
  /*
   * We overwrite the `addDomainWithProofs` interface in order to provide
   * function overloads for the V5 contract
   */
  addDomainWithProofs(
    _parentDomainId: BigNumberish,
    _metadata: string,
  ): Promise<BigNumber>;
  /*
   * Need to manually add the overloaded estimate signatures since TS doesn't
   * pick them up from the auto-generated contract definitions file
   */
  'addDomain(uint256,uint256,uint256)'(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _parentDomainId: BigNumberish,
  ): Promise<BigNumber>;
  'addDomain(uint256,uint256,uint256,string)'(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _parentDomainId: BigNumberish,
    _metadata: string,
  ): Promise<BigNumber>;
  editDomainWithProofs(
    _domainId: BigNumberish,
    _metadata: string,
  ): Promise<BigNumber>;
  setExpenditureStateWithProofs(
    _id: BigNumberish,
    _storageSlot: BigNumberish,
    _mask: boolean[],
    _keys: Arrayish[],
    _value: Arrayish,
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
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  setUserRolesWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _roles: Arrayish,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  /*
   * We overwrite the `addDomainWithProofs` interface in order to provide
   * function overloads for the V5 contract
   */
  addDomainWithProofs(
    _parentDomainId: BigNumberish,
    _metadata: string,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  editDomainWithProofs(
    _domainId: BigNumberish,
    _metadata: string,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  setExpenditureStateWithProofs(
    _id: BigNumberish,
    _storageSlot: BigNumberish,
    _mask: boolean[],
    _keys: Arrayish[],
    _value: Arrayish,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;

  estimate: T['estimate'] & AugmentedEstimateV5;
} & PreviousVersionsAugments;

/*
 * Extension Methods
 */

async function emitDomainReputationPenaltyWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
  _domainId: BigNumberish,
  _user: string,
  _amount: BigNumberish,
  overrides?: UnsignedTransaction,
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
  this: ColonyAugmentsV5<ValidColony>,
  _user: string,
  _domainId: BigNumberish,
  _roles: Arrayish,
  overrides?: UnsignedTransaction,
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
  this: ColonyAugmentsV5<ValidColony>,
  _obligator: string,
  _user: string,
  _domainId: BigNumberish,
  _amount: BigNumberish,
  _recipient: string,
  overrides?: UnsignedTransaction,
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

async function addDomainWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
  _parentDomainId: BigNumberish,
  _metadata: string,
  overrides?: UnsignedTransaction,
): Promise<ContractTransaction> {
  let overrideOverload = overrides;
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  /*
   * Otherwise, because of the positioning of `overrides`, it might get confused
   * with it
   */
  if (typeof _metadata === 'string') {
    return this['addDomain(uint256,uint256,uint256,string)'](
      permissionDomainId,
      childSkillIndex,
      _parentDomainId,
      _metadata,
      overrideOverload,
    );
  }
  /*
   * Since we're not calling the overloaded version, which has the metadata string,
   * the `_metadata` argument now stands place for the `overrides` and contains
   * it's values
   */
  overrideOverload = _metadata;
  return this['addDomain(uint256,uint256,uint256)'](
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    overrideOverload,
  );
}

async function editDomainWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
  _domainId: BigNumberish,
  _metadata: string,
  overrides?: UnsignedTransaction,
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
  this: ColonyAugmentsV5<ValidColony>,
  _id: BigNumberish,
  _storageSlot: BigNumberish,
  _mask: boolean[],
  _keys: Arrayish[],
  _value: Arrayish,
  overrides?: UnsignedTransaction,
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
  this: ColonyAugmentsV5<ValidColony>,
  _domainId: BigNumberish,
  _user: string,
  _amount: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.estimate.emitDomainReputationPenalty(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _user,
    _amount,
  );
}

async function estimateSetUserRolesWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
  _user: string,
  _domainId: BigNumberish,
  _roles: Arrayish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimate.setUserRoles(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _roles,
  );
}

async function estimateTransferStakeWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
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
  return this.estimate.transferStake(
    permissionDomainId,
    childSkillIndex,
    _obligator,
    _user,
    _domainId,
    _amount,
    _recipient,
  );
}

async function estimateAddDomainWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
  _parentDomainId: BigNumberish,
  _metadata: string,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  if (_metadata) {
    return this.estimate['addDomain(uint256,uint256,uint256,string)'](
      permissionDomainId,
      childSkillIndex,
      _parentDomainId,
      _metadata,
    );
  }
  return this.estimate['addDomain(uint256,uint256,uint256)'](
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
  );
}

async function estimateEditDomainWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
  _domainId: BigNumberish,
  _metadata: string,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimate.editDomain(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _metadata,
  );
}

async function estimateSetExpenditureStateWithProofs(
  this: ColonyAugmentsV5<ValidColony>,
  _id: BigNumberish,
  _storageSlot: BigNumberish,
  _mask: boolean[],
  _keys: Arrayish[],
  _value: Arrayish,
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimate.setExpenditureState(
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
  ) as ColonyAugmentsV5<ValidColony>;

  augmentedInstance.emitDomainReputationPenaltyWithProofs =
    emitDomainReputationPenaltyWithProofs.bind(augmentedInstance);
  augmentedInstance.setUserRolesWithProofs =
    setUserRolesWithProofs.bind(augmentedInstance);
  augmentedInstance.transferStakeWithProofs =
    transferStakeWithProofs.bind(augmentedInstance);
  /*
   * We basically disable the signature type of the initial (pre V3) method
   *
   * This is because we overload the method, but not in a way that TS likes, as we
   * add the overloaded argument in the middle, and not at the end.
   */
  (augmentedInstance.addDomainWithProofs as unknown) =
    addDomainWithProofs.bind(augmentedInstance);
  augmentedInstance.editDomainWithProofs =
    editDomainWithProofs.bind(augmentedInstance);
  augmentedInstance.setExpenditureStateWithProofs =
    setExpenditureStateWithProofs.bind(augmentedInstance);

  augmentedInstance.estimate.emitDomainReputationPenaltyWithProofs =
    estimateEmitDomainReputationPenaltyWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.setUserRolesWithProofs =
    estimateSetUserRolesWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.transferStakeWithProofs =
    estimateTransferStakeWithProofs.bind(augmentedInstance);
  /*
   * We basically disable the signature type of the initial (pre V3) method
   *
   * This is because we overload the method, but not in a way that TS likes, as we
   * add the overloaded argument in the middle, and not at the end.
   */
  (augmentedInstance.estimate.addDomainWithProofs as unknown) =
    estimateAddDomainWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.editDomainWithProofs =
    estimateEditDomainWithProofs.bind(augmentedInstance);
  augmentedInstance.estimate.setExpenditureStateWithProofs =
    estimateSetExpenditureStateWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
