import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish, UnsignedTransaction } from 'ethers/utils';
import { MaxUint256 } from 'ethers/constants';

import { IColony as IColonyV7 } from '../../../contracts/IColony/7/IColony';
import { IColony as PreviousIColony } from '../../../contracts/IColony/6/IColony';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import {
  ExtendedIColony,
  getMoveFundsPermissionProofs,
} from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import { ColonyExtensionsV4 } from './extensionsV4';
import { ColonyExtensionsV5 } from './extensionsV5';
import {
  addExtensions as addExtensionsV6,
  ColonyExtensionsV6,
  ExtendedEstimateV6,
} from './extensionsV6';

type ValidColony = IColonyV7;

type PreviousVersionsExtensions = Omit<
  ExtendedIColony<ValidColony>,
  'moveFundsBetweenPotsWithProofs'
> &
  ColonyExtensionsV3<PreviousIColony> &
  ColonyExtensionsV4<PreviousIColony> &
  ColonyExtensionsV5<PreviousIColony> &
  ColonyExtensionsV6<PreviousIColony>;

/*
 * Estimates
 */
export interface ExtendedEstimateV7 extends ExtendedEstimateV6 {
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
export type ColonyExtensionsV7<T extends ValidColony> = {
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

  estimate: T['estimate'] & ExtendedEstimateV7;
} & PreviousVersionsExtensions;

/*
 * Extension Methods
 */
async function moveFundsBetweenPotsWithProofs(
  this: ExtendedIColony,
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
  this: ExtendedIColony,
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
export const addExtensions = (
  instance: PreviousVersionsExtensions,
  networkClient: ColonyNetworkClient,
): ColonyExtensionsV7<ValidColony> => {
  // Add all extensions from v6, because these are also still valid
  const extendedInstance = addExtensionsV6(
    instance,
    networkClient,
  ) as ColonyExtensionsV7<ValidColony>;
  /*
   * We basically disable the signature type of the initial (pre V7) method
   *
   * This is because we overload the method, but not in a way that TS likes, as we
   * add the overloaded argument in the middle, and not at the end.
   */
  (extendedInstance.moveFundsBetweenPotsWithProofs as unknown) =
    moveFundsBetweenPotsWithProofs.bind(extendedInstance);
  /*
   * We basically disable the signature type of the initial (pre V7) method
   *
   * This is because we overload the method, but not in a way that TS likes, as we
   * add the overloaded argument in the middle, and not at the end.
   */
  (extendedInstance.estimate.moveFundsBetweenPotsWithProofs as unknown) =
    estimateMoveFundsBetweenPotsWithProofs.bind(extendedInstance);
  return extendedInstance;
};
