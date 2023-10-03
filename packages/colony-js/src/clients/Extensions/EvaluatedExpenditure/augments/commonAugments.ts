import { BigNumberish, BigNumber, ContractTransaction } from 'ethers';
import {
  type EvaluatedExpenditureVersion,
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';
import {
  type EvaluatedExpenditureEvents,
  EvaluatedExpenditureEvents__factory as EvaluatedExpenditureEventsFactory,
} from '@colony/events/types';

import { ClientType } from '../../../../constants.js';
import { AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import {
  IColonyV10,
  IColonyV11,
  IColonyV12,
  IColonyV13,
  IColonyV14,
} from '../../../Core/contracts.js';
import { AnyEvaluatedExpenditure } from '../contracts.js';

export type ValidColony =
  | IColonyV10
  | IColonyV11
  | IColonyV12
  | IColonyV13
  | IColonyV14;

export type AugmentedEstimate<
  T extends AnyEvaluatedExpenditure = AnyEvaluatedExpenditure,
> = T['estimateGas'] & {
  /**
   * Same as {@link setExpenditurePayoutModifiers}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _slots - Array of slots to set payout modifiers
   * @param _payoutModifiers - Values (between +/- WAD) to modify the payout & reputation bonus
   */
  setExpenditurePayoutModifiersWithProofs(
    _id: BigNumberish,
    _slots: BigNumberish[],
    _payoutModifiers: BigNumberish[],
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
};

export type AugmentedEvaluatedExpenditure<
  T extends AnyEvaluatedExpenditure = AnyEvaluatedExpenditure,
> = T & {
  clientType: ClientType.EvaluatedExpenditureClient;
  clientVersion: EvaluatedExpenditureVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony<ValidColony>;

  /**
   * The evaluatedExpenditureEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  evaluatedExpenditureEvents: EvaluatedExpenditureEvents;

  estimateGas: T['estimateGas'] & AugmentedEstimate;

  /**
   * Same as {@link setExpenditurePayoutModifiers}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _slots - Array of slots to set payout modifiers
   * @param _payoutModifiers - Values (between +/- WAD) to modify the payout & reputation bonus
   */
  setExpenditurePayoutModifiersWithProofs(
    _id: BigNumberish,
    _slots: BigNumberish[],
    _payoutModifiers: BigNumberish[],
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
};

async function setExpenditurePayoutModifiersWithProofs(
  this: AugmentedEvaluatedExpenditure,
  _id: BigNumberish,
  _slots: BigNumberish[],
  _payoutModifiers: BigNumberish[],
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.colonyClient.getExpenditure(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient.networkClient,
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  return this.setExpenditurePayoutModifiers(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slots,
    _payoutModifiers,
    overrides,
  );
}

async function estimateSetExpenditurePayoutModifiersWithProofs(
  this: AugmentedEvaluatedExpenditure,
  _id: BigNumberish,
  _slots: BigNumberish[],
  _payoutModifiers: BigNumberish[],
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.colonyClient.getExpenditure(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient.networkClient,
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );

  return this.estimateGas.setExpenditurePayoutModifiers(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slots,
    _payoutModifiers,
    overrides,
  );
}

export const addAugments = <T extends AugmentedEvaluatedExpenditure>(
  instance: T,
  colonyClient: AugmentedIColony<ValidColony>,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.EvaluatedExpenditureClient;
  instance.colonyClient = colonyClient;

  instance.evaluatedExpenditureEvents =
    EvaluatedExpenditureEventsFactory.connect(
      instance.address,
      instance.signer || instance.provider,
    );

  instance.setExpenditurePayoutModifiersWithProofs =
    setExpenditurePayoutModifiersWithProofs.bind(instance);
  instance.estimateGas.setExpenditurePayoutModifiersWithProofs =
    estimateSetExpenditurePayoutModifiersWithProofs.bind(instance);

  return instance;
  /* eslint-enable no-param-reassign */
};

export type UnkonwnEvaluatedExpenditureClient =
  AugmentedEvaluatedExpenditure<any>;
