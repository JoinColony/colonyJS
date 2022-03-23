import {
  BigNumber,
  BigNumberish,
  Overrides,
  ContractTransaction,
} from 'ethers';

import {
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
} from '../../../contracts/IColony/exports';
import { ColonyRole } from '../../../types';
import { AugmentedIColony, getPermissionProofs } from './commonAugments';

// Colonies that support this method
type ValidColony = IColonyV4 | IColonyV5 | IColonyV6 | IColonyV7;

export interface SetExpenditurePayoutModifierEstimateGas {
  setExpenditurePayoutModifierWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
  ): Promise<BigNumber>;
}

export type SetExpenditurePayoutModifierAugments<T extends ValidColony> = {
  setExpenditurePayoutModifierWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _payoutModifier: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & SetExpenditurePayoutModifierEstimateGas;
};

async function setExpenditurePayoutModifierWithProofs(
  this: AugmentedIColony<ValidColony> &
    SetExpenditurePayoutModifierAugments<ValidColony>,
  _id: BigNumberish,
  _slot: BigNumberish,
  _payoutModifier: BigNumberish,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
