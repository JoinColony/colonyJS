import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';

import {
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
} from '../../../contracts/IColony/exports';
import { ColonyRole, TxOverrides } from '../../../types';
import { AugmentedIColony, getPermissionProofs } from './commonAugments';

// Colonies that support this method
type ValidColony = IColonyV4 | IColonyV5 | IColonyV6 | IColonyV7;

export interface SetExpenditureClaimDelayEstimateGas {
  /**
   * @deprecated
   *
   * Same as [[setExpenditureClaimDelay]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _claimDelay Time (in seconds) to delay claiming payout after finalization
   * @param _id Expenditure identifier
   * @param _slot Number of the slot
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
   * Same as [[setExpenditureClaimDelay]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _claimDelay Time (in seconds) to delay claiming payout after finalization
   * @param _id Expenditure identifier
   * @param _slot Number of the slot
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
  this: AugmentedIColony<ValidColony> &
    SetExpenditureClaimDelayAugments<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _claimDelay: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  this: AugmentedIColony<ValidColony> &
    SetExpenditureClaimDelayAugments<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _claimDelay: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  contract: AugmentedIColony<ValidColony> &
    SetExpenditureClaimDelayAugments<ValidColony>,
) => {
  /* eslint-disable no-param-reassign */
  contract.setExpenditureClaimDelayWithProofs =
    setExpenditureClaimDelayWithProofs.bind(contract);
  contract.estimateGas.setExpenditureClaimDelayWithProofs =
    estimateSetExpenditureClaimDelayWithProofs.bind(contract);
  /* eslint-enable no-param-reassign */
};
