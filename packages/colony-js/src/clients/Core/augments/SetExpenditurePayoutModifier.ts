import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

import { IColonyV4, IColonyV5, IColonyV6, IColonyV7 } from '../contracts';
import { AugmentedIColony } from './commonAugments';

// Colonies that support this method
type ValidColony = IColonyV4 | IColonyV5 | IColonyV6 | IColonyV7;

export interface SetExpenditurePayoutModifierEstimateGas {
  /**
   * @deprecated
   *
   * Same as [[setExpenditurePayoutModifier]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _payoutModifier - Modifier to their payout (between -1 and 1, denominated in WADs, 0 means no modification)
   * @param _slot - Number of the slot
   */
  setExpenditurePayoutModifierWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type SetExpenditurePayoutModifierAugments<T extends ValidColony> = {
  /**
   * @deprecated
   *
   * Same as [[setExpenditurePayoutModifier]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Expenditure identifier
   * @param _payoutModifier - Modifier to their payout (between -1 and 1, denominated in WADs, 0 means no modification)
   * @param _slot - Number of the slot
   */
  setExpenditurePayoutModifierWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & SetExpenditurePayoutModifierEstimateGas;
};

async function setExpenditurePayoutModifierWithProofs(
  this: AugmentedIColony<ValidColony> &
    SetExpenditurePayoutModifierAugments<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _payoutModifier: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.setExpenditurePayoutModifier(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _payoutModifier,
    overrides,
  );
}

async function estimateSetExpenditurePayoutModifierWithProofs(
  this: AugmentedIColony<ValidColony> &
    SetExpenditurePayoutModifierAugments<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _payoutModifier: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas.setExpenditurePayoutModifier(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _payoutModifier,
    overrides,
  );
}

export const addAugments = (
  contract: AugmentedIColony<ValidColony> &
    SetExpenditurePayoutModifierAugments<ValidColony>,
) => {
  /* eslint-disable no-param-reassign */
  contract.setExpenditurePayoutModifierWithProofs =
    setExpenditurePayoutModifierWithProofs.bind(contract);
  contract.estimateGas.setExpenditurePayoutModifierWithProofs =
    estimateSetExpenditurePayoutModifierWithProofs.bind(contract);
  /* eslint-enable no-param-reassign */
};
