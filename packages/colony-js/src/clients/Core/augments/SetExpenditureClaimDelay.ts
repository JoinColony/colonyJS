import {
  type BigNumber,
  type BigNumberish,
  type ContractTransaction,
} from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

import type { IColonyV7 } from '../contracts.js';
import type { UnknownIColonyClient } from './commonAugments.js';

// Colonies that support this method
type ValidColony = IColonyV7;

export interface SetExpenditureClaimDelayEstimateGas {
  /**
   * @deprecated
   *
   * Same as {@link setExpenditureClaimDelay}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _claimDelay - Time (in seconds) to delay claiming payout after finalization
   * @param _id - Expenditure identifier
   * @param _slot - Number of the slot
   */
  setExpenditureClaimDelayWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _claimDelay: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type SetExpenditureClaimDelayAugments<T extends ValidColony> = {
  /**
   * @deprecated
   *
   * Same as {@link setExpenditureClaimDelay}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _claimDelay - Time (in seconds) to delay claiming payout after finalization
   * @param _id - Expenditure identifier
   * @param _slot - Number of the slot
   */
  setExpenditureClaimDelayWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _claimDelay: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & SetExpenditureClaimDelayEstimateGas;
};

async function setExpenditureClaimDelayWithProofs(
  this: UnknownIColonyClient & SetExpenditureClaimDelayAugments<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _claimDelay: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.setExpenditureClaimDelay(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _claimDelay,
    overrides,
  );
}

async function estimateSetExpenditureClaimDelayWithProofs(
  this: UnknownIColonyClient & SetExpenditureClaimDelayAugments<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _claimDelay: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas.setExpenditureClaimDelay(
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _claimDelay,
    overrides,
  );
}

export const addAugments = (
  contract: UnknownIColonyClient &
    SetExpenditureClaimDelayAugments<ValidColony>,
) => {
  /* eslint-disable no-param-reassign */
  contract.setExpenditureClaimDelayWithProofs =
    setExpenditureClaimDelayWithProofs.bind(contract);
  contract.estimateGas.setExpenditureClaimDelayWithProofs =
    estimateSetExpenditureClaimDelayWithProofs.bind(contract);
  /* eslint-enable no-param-reassign */
};
