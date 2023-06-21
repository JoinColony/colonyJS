import { ContractTransaction, BigNumber, BigNumberish } from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

import { ColonyNetworkClient } from '../../ColonyNetworkClient.js';
import { IColonyV10, IColonyV11, IColonyV12 } from '../contracts.js';
import { AugmentedIColony } from './commonAugments.js';
import { ColonyAugmentsV3 } from './augmentsV3.js';
import { ColonyAugmentsV4 } from './augmentsV4.js';
import { ColonyAugmentsV5 } from './augmentsV5.js';
import {
  addAugments as addAugmentsV6,
  ColonyAugmentsV6,
  AugmentedEstimateV6,
} from './augmentsV6.js';

type ValidColony = IColonyV10 | IColonyV11 | IColonyV12;

/*
 * Estimates
 */
export interface AugmentedEstimateV7 extends AugmentedEstimateV6 {
  /**
   * Same as the permissioned overload of {@link "setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)"}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Id of the expenditure
   * @param _slot - Number of the slot
   * @param _token - Address of the token, `0x0` value indicates Ether
   * @param _amount - Payout amount
   */
  setExpenditurePayoutWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _token: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

/*
 * Extension Methods
 */
export type ColonyAugmentsV7<T extends ValidColony> = {
  /**
   * Same as the permissioned overload of {@link "setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)"}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id - Id of the expenditure
   * @param _slot - Number of the slot
   * @param _token - Address of the token, `0x0` value indicates Ether
   * @param _amount - Payout amount
   */
  setExpenditurePayoutWithProofs(
    _id: BigNumberish,
    _slot: BigNumberish,
    _token: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  estimateGas: T['estimateGas'] & AugmentedEstimateV7;
};

type AllAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV7<ValidColony>;

/*
 * Extension Methods
 */

async function setExpenditurePayoutWithProofs(
  this: AllAugments,
  _id: BigNumberish,
  _slot: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getExpenditure(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this[
    'setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)'
  ](
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _token,
    _amount,
    overrides,
  );
}

/*
 * Estimates
 */
async function estimateSetExpenditurePayoutWithProofs(
  this: AllAugments,
  _id: BigNumberish,
  _slot: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getExpenditure(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Arbitration,
  );
  return this.estimateGas[
    'setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)'
  ](
    permissionDomainId,
    childSkillIndex,
    _id,
    _slot,
    _token,
    _amount,
    overrides,
  );
}

/*
 * Bindings
 */
export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyAugmentsV7<ValidColony> => {
  // Add all augments from v5, because these are also still valid
  const augmentedInstance = addAugmentsV6(
    instance,
    networkClient,
  ) as AugmentedIColony<ValidColony> &
    ColonyAugmentsV3<ValidColony> &
    ColonyAugmentsV4<ValidColony> &
    ColonyAugmentsV5<ValidColony> &
    ColonyAugmentsV6<ValidColony> &
    ColonyAugmentsV7<ValidColony>;

  augmentedInstance.setExpenditurePayoutWithProofs =
    setExpenditurePayoutWithProofs.bind(augmentedInstance);

  augmentedInstance.estimateGas.setExpenditurePayoutWithProofs =
    estimateSetExpenditurePayoutWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
