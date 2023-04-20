import {
  BigNumber,
  BigNumberish,
  BytesLike,
  ContractTransaction,
  constants,
} from 'ethers';

import { TxOverrides } from '../../../../types';
import { parsePermissionedAction } from '../../../../utils';
import { getChildIndex } from '../../../Core/augments/commonAugments';
import {
  VotingReputationV1,
  VotingReputationV2,
  VotingReputationV3,
  VotingReputationV4,
  VotingReputationV5,
  VotingReputationV6,
  VotingReputationV7,
} from '../contracts';
import { AugmentedVotingReputation } from './commonAugments';

// VotingReputation versions that support this method
type ValidVotingReputation =
  | VotingReputationV1
  | VotingReputationV2
  | VotingReputationV3
  | VotingReputationV4
  | VotingReputationV5
  | VotingReputationV6
  | VotingReputationV7;

const { MaxUint256 } = constants;

export interface CreateDomainMotionEstimateGas {
  /**
   * @deprecated
   *
   * Same as [[createDomainMotion]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _action A bytes array encoding a function call
   * @param _domainId The domain where we vote on the motion
   */
  createDomainMotionWithProofs(
    _domainId: BigNumberish,
    _action: BytesLike,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type CreateDomainMotionAugments<T extends ValidVotingReputation> = {
  /**
   * @deprecated
   *
   * Same as [[createDomainMotion]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _action A bytes array encoding a function call
   * @param _domainId The domain where we vote on the motion
   */
  createDomainMotionWithProofs(
    _domainId: BigNumberish,
    _action: BytesLike,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  estimateGas: T['estimateGas'] & CreateDomainMotionEstimateGas;
};

async function createDomainMotionWithProofs(
  this: AugmentedVotingReputation<ValidVotingReputation> &
    CreateDomainMotionAugments<ValidVotingReputation>,
  _domainId: BigNumberish, // Domain in which the voting will take place in
  _action: BytesLike,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  let childSkillIdex = MaxUint256;
  const { permissionDomainId } = parsePermissionedAction(_action);
  // Domain in which we have permissions
  if (!permissionDomainId.eq(_domainId)) {
    const domainSkillIdIndex = await getChildIndex(
      this.colonyClient,
      permissionDomainId,
      _domainId,
    );
    if (!domainSkillIdIndex.eq(BigNumber.from(-1))) {
      childSkillIdex = BigNumber.from(domainSkillIdIndex);
    } else {
      throw new Error('Child skill index could not be found');
    }
  }

  const { skillId } = await this.colonyClient.getDomain(permissionDomainId);
  const walletAddress = await this.signer.getAddress();
  const { key, value, branchMask, siblings } =
    await this.colonyClient.getReputation(skillId, walletAddress);

  return this.createDomainMotion(
    _domainId,
    childSkillIdex,
    _action,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

async function estimateCreateDomainMotionWithProofs(
  this: AugmentedVotingReputation<ValidVotingReputation> &
    CreateDomainMotionAugments<ValidVotingReputation>,
  _domainId: BigNumberish, // Domain in which the voting will take place in
  _action: BytesLike,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  let childSkillIdex = MaxUint256;
  const { permissionDomainId } = parsePermissionedAction(_action);
  if (!permissionDomainId.eq(_domainId)) {
    const domainSkillIdIndex = await getChildIndex(
      this.colonyClient,
      permissionDomainId,
      _domainId,
    );
    if (!domainSkillIdIndex.eq(BigNumber.from(-1))) {
      childSkillIdex = BigNumber.from(domainSkillIdIndex);
    } else {
      throw new Error('Child skill index could not be found');
    }
  }

  const { skillId } = await this.colonyClient.getDomain(permissionDomainId);
  const walletAddress = await this.signer.getAddress();
  const { key, value, branchMask, siblings } =
    await this.colonyClient.getReputation(skillId, walletAddress);

  return this.estimateGas.createDomainMotion(
    _domainId,
    childSkillIdex,
    _action,
    key,
    value,
    branchMask,
    siblings,
    overrides,
  );
}

export const addAugments = (
  contract: AugmentedVotingReputation<ValidVotingReputation> &
    CreateDomainMotionAugments<ValidVotingReputation>,
) => {
  /* eslint-disable no-param-reassign */
  contract.createDomainMotionWithProofs =
    createDomainMotionWithProofs.bind(contract);
  contract.estimateGas.createDomainMotionWithProofs =
    estimateCreateDomainMotionWithProofs.bind(contract);
  /* eslint-enable no-param-reassign */
};
