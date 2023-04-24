import {
  BigNumberish,
  BigNumber,
  ContractTransaction,
  BytesLike,
} from 'ethers';
import {
  StakedExpenditureEvents,
  StakedExpenditureEvents__factory as StakedExpenditureEventsFactory,
} from '@colony/events';

import { ClientType, ColonyRole } from '../../../../constants';
import { TxOverrides } from '../../../../types';
import {
  AugmentedIColony,
  getPermissionProofs,
} from '../../../Core/augments/commonAugments';
import {
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
  IColonyV10,
} from '../../../Core/contracts';
import { StakedExpenditureVersion } from '../exports';
import { AnyStakedExpenditure } from '../contracts';

export type ValidColony =
  | IColonyV4
  | IColonyV5
  | IColonyV6
  | IColonyV7
  | IColonyV8
  | IColonyV9
  | IColonyV10;

export type AugmentedEstimate<
  T extends AnyStakedExpenditure = AnyStakedExpenditure,
> = T['estimateGas'] & {
  /**
   * Same as [[makeExpenditureWithStake]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId The domain where the expenditure belongs
   * @param _key A reputation hash tree key, of the total reputation in _domainId
   * @param _value Reputation value indicating the total reputation in _domainId
   * @param _branchMask The branchmask of the proof
   * @param _siblings The siblings of the proof
   */
  makeExpenditureWithStakeWithProofs(
    _domainId: BigNumberish,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[cancelAndReclaimStake]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _expenditureId The id of the expenditure
   */
  cancelAndReclaimStakeWithProofs(
    _expenditureId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[cancelAndPunish]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _expenditureId The id of the expenditure
   * @param _punish Whether the staker should be punished by losing an amount of reputation equal to the stake
   */
  cancelAndPunishWithProofs(
    _expenditureId: BigNumberish,
    _punish: boolean,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
};

export type AugmentedStakedExpenditure<
  T extends AnyStakedExpenditure = AnyStakedExpenditure,
> = T & {
  clientType: ClientType.StakedExpenditureClient;
  clientVersion: StakedExpenditureVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony<ValidColony>;

  /**
   * The stakedExpenditureEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  stakedExpenditureEvents: StakedExpenditureEvents;

  estimateGas: T['estimateGas'] & AugmentedEstimate;

  /**
   * Same as [[makeExpenditureWithStake]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId The domain where the expenditure belongs
   * @param _key A reputation hash tree key, of the total reputation in _domainId
   * @param _value Reputation value indicating the total reputation in _domainId
   * @param _branchMask The branchmask of the proof
   * @param _siblings The siblings of the proof
   */
  makeExpenditureWithStakeWithProofs(
    _domainId: BigNumberish,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[cancelAndReclaimStake]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _expenditureId The id of the expenditure
   */
  cancelAndReclaimStakeWithProofs(
    _expenditureId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[cancelAndPunish]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _expenditureId The id of the expenditure
   * @param _punish Whether the staker should be punished by losing an amount of reputation equal to the stake
   */
  cancelAndPunishWithProofs(
    _expenditureId: BigNumberish,
    _punish: boolean,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
};

async function makeExpenditureWithStakeWithProofs(
  this: AugmentedStakedExpenditure,
  _domainId: BigNumberish,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    _domainId,
    ColonyRole.Administration,
    this.address,
  );

  return this.makeExpenditureWithStake(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _key,
    _value,
    _branchMask,
    _siblings,
    overrides,
  );
}

async function estimateSetExpenditurePayoutModifiersWithProofs(
  this: AugmentedStakedExpenditure,
  _domainId: BigNumberish,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    _domainId,
    ColonyRole.Administration,
    this.address,
  );

  return this.estimateGas.makeExpenditureWithStake(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _key,
    _value,
    _branchMask,
    _siblings,
    overrides,
  );
}

async function cancelAndReclaimStakeWithProofs(
  this: AugmentedStakedExpenditure,
  _expenditureId: BigNumberish,
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.colonyClient.getExpenditure(_expenditureId);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  return this.cancelAndReclaimStake(
    permissionDomainId,
    childSkillIndex,
    _expenditureId,
    overrides,
  );
}

async function estimateCancelAndReclaimStakeWithProofs(
  this: AugmentedStakedExpenditure,
  _expenditureId: BigNumberish,
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.colonyClient.getExpenditure(_expenditureId);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  return this.estimateGas.cancelAndReclaimStake(
    permissionDomainId,
    childSkillIndex,
    _expenditureId,
    overrides,
  );
}

async function cancelAndPunishWithProofs(
  this: AugmentedStakedExpenditure,
  _expenditureId: BigNumberish,
  _punish: boolean,
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.colonyClient.getExpenditure(_expenditureId);

  const [extPermissionDomainId, extChildSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  const [callerPermissionDomainId, callerChildSkillIndex] =
    await getPermissionProofs(
      this.colonyClient,
      domainId,
      ColonyRole.Arbitration,
    );

  return this.cancelAndPunish(
    extPermissionDomainId,
    extChildSkillIndex,
    callerPermissionDomainId,
    callerChildSkillIndex,
    _expenditureId,
    _punish,
    overrides,
  );
}

async function estimateCancelAndPunishWithProofs(
  this: AugmentedStakedExpenditure,
  _expenditureId: BigNumberish,
  _punish: boolean,
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.colonyClient.getExpenditure(_expenditureId);

  const [extPermissionDomainId, extChildSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  const [callerPermissionDomainId, callerChildSkillIndex] =
    await getPermissionProofs(
      this.colonyClient,
      domainId,
      ColonyRole.Arbitration,
    );

  return this.estimateGas.cancelAndPunish(
    extPermissionDomainId,
    extChildSkillIndex,
    callerPermissionDomainId,
    callerChildSkillIndex,
    _expenditureId,
    _punish,
    overrides,
  );
}

export const addAugments = <T extends AugmentedStakedExpenditure>(
  instance: T,
  colonyClient: AugmentedIColony<ValidColony>,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.StakedExpenditureClient;
  instance.colonyClient = colonyClient;

  instance.stakedExpenditureEvents = StakedExpenditureEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  instance.makeExpenditureWithStakeWithProofs =
    makeExpenditureWithStakeWithProofs.bind(instance);
  instance.estimateGas.makeExpenditureWithStakeWithProofs =
    estimateSetExpenditurePayoutModifiersWithProofs.bind(instance);
  instance.cancelAndReclaimStakeWithProofs =
    cancelAndReclaimStakeWithProofs.bind(instance);
  instance.estimateGas.cancelAndReclaimStakeWithProofs =
    estimateCancelAndReclaimStakeWithProofs.bind(instance);
  instance.cancelAndPunishWithProofs = cancelAndPunishWithProofs.bind(instance);
  instance.estimateGas.cancelAndPunishWithProofs =
    estimateCancelAndPunishWithProofs.bind(instance);

  return instance;
  /* eslint-enable no-param-reassign */
};
