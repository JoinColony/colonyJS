import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish, UnsignedTransaction } from 'ethers/utils';
import { MaxUint256 } from 'ethers/constants';

import { IColony as IColonyV7 } from '../../../contracts/IColony/7/IColony';
import { IColony as PreviousIColony } from '../../../contracts/IColony/6/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import {
  AugmentedIColony,
  getMoveFundsPermissionProofs,
} from './commonAugments';
import { ColonyAugmentsV3 } from './augmentsV3';
import { ColonyAugmentsV4 } from './augmentsV4';
import { ColonyAugmentsV5 } from './augmentsV5';
import {
  addExtensions as addAugmentsV6,
  ColonyAugmentsV6,
  AugmentedEstimateV6,
} from './augmentsV6';

type ValidColony = IColonyV7;

type PreviousVersionsAugments = Omit<
  AugmentedIColony<ValidColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyAugmentsV3<PreviousIColony> &
  ColonyAugmentsV4<PreviousIColony> &
  ColonyAugmentsV5<PreviousIColony> &
  ColonyAugmentsV6<PreviousIColony>;

/*
 * Estimates
 */
export interface AugmentedEstimateV7 extends AugmentedEstimateV6 {
  moveFundsBetweenPotsWithProofs(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _domainId: BigNumberish,
    _fromChildSkillIndex: BigNumberish,
    _toChildSkillIndex: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
  ): Promise<BigNumber>;
  // eslint-disable-next-line max-len
  'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)'(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _domainId: BigNumberish,
    _fromChildSkillIndex: BigNumberish,
    _toChildSkillIndex: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
  ): Promise<BigNumber>;
  // eslint-disable-next-line max-len
  'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)'(
    _permissionDomainId: BigNumberish,
    _fromChildSkillIndex: BigNumberish,
    _toChildSkillIndex: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
  ): Promise<BigNumber>;
}

/*
 * Extension Methods
 */
export type ColonyAugmentsV7<T extends ValidColony> = {
  moveFundsBetweenPotsWithProofs(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _domainId: BigNumberish,
    _fromChildSkillIndex: BigNumberish,
    _toChildSkillIndex: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  // eslint-disable-next-line max-len
  'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)'(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _domainId: BigNumberish,
    _fromChildSkillIndex: BigNumberish,
    _toChildSkillIndex: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;
  // eslint-disable-next-line max-len
  'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)'(
    _permissionDomainId: BigNumberish,
    _fromChildSkillIndex: BigNumberish,
    _toChildSkillIndex: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: UnsignedTransaction,
  ): Promise<ContractTransaction>;

  estimate: T['estimate'] & AugmentedEstimateV7;
} & PreviousVersionsAugments;

/*
 * Extension Methods
 */
async function moveFundsBetweenPotsWithProofs(
  this: AugmentedIColony,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: UnsignedTransaction,
): Promise<ContractTransaction> {
  const [permissionDomainId, fromChildSkillIndex, toChildSkillIndex] =
    await getMoveFundsPermissionProofs(this, _fromPot, _toPot);

  return this.moveFundsBetweenPots(
    permissionDomainId,
    MaxUint256,
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot as string,
    _amount,
    _token,
    overrides,
  );
}

/*
 * Estimates
 */
async function estimateMoveFundsBetweenPotsWithProofs(
  this: AugmentedIColony,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
): Promise<BigNumber> {
  const [permissionDomainId, fromChildSkillIndex, toChildSkillIndex] =
    await getMoveFundsPermissionProofs(this, _fromPot, _toPot);

  return (this as IColonyV7).estimate.moveFundsBetweenPots(
    permissionDomainId,
    MaxUint256,
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot as string,
    _amount,
    _token,
  );
}

/*
 * Bindings
 */
export const addAugments = (
  instance: PreviousVersionsAugments,
  networkClient: ColonyNetworkClient,
): ColonyAugmentsV7<ValidColony> => {
  // Add all extensions from v6, because these are also still valid
  const augmentedInstance = addAugmentsV6(
    instance,
    networkClient,
  ) as ColonyAugmentsV7<ValidColony>;
  /*
   * We basically disable the signature type of the initial (pre V7) method
   *
   * This is because we overload the method, but not in a way that TS likes, as we
   * add the overloaded argument in the middle, and not at the end.
   */
  (augmentedInstance.moveFundsBetweenPotsWithProofs as unknown) =
    moveFundsBetweenPotsWithProofs.bind(augmentedInstance);
  /*
   * We basically disable the signature type of the initial (pre V7) method
   *
   * This is because we overload the method, but not in a way that TS likes, as we
   * add the overloaded argument in the middle, and not at the end.
   */
  (augmentedInstance.estimate.moveFundsBetweenPotsWithProofs as unknown) =
    estimateMoveFundsBetweenPotsWithProofs.bind(augmentedInstance);
  return augmentedInstance;
};
