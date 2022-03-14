import {
  BigNumber,
  BigNumberish,
  Overrides,
  ContractTransaction,
} from 'ethers';

import { ROOT_DOMAIN_ID } from '../../../constants';
import {
  IColonyV1,
  IColonyV2,
  IColonyV3,
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
} from '../../../exports';
import { ColonyRole } from '../../../types';
import {
  AugmentedIColony,
  getChildIndex,
  getPermissionProofs,
  getPotDomain,
} from './commonAugments';

// Colonies that support the earlier (not-overloaded) method
type ValidColonyA =
  | IColonyV1
  | IColonyV2
  | IColonyV3
  | IColonyV4
  | IColonyV5
  | IColonyV6;

// Colonies that support the later (overloaded) methods
type ValidColonyB = IColonyV7 | IColonyV8 | IColonyV9;

const getMoveFundsPermissionProofsA = async (
  contract: AugmentedIColony,
  fromtPotId: BigNumberish,
  toPotId: BigNumberish,
  customAddress?: string,
  /* [fromPermissionDomainId, fromChildSkillIndex, toChildSkillIndex] */
): Promise<[BigNumber, BigNumber, BigNumber]> => {
  const walletAddress = customAddress || (await contract.signer.getAddress());
  const fromDomainId = await getPotDomain(contract, fromtPotId);
  const toDomainId = await getPotDomain(contract, toPotId);
  const [fromPermissionDomainId, fromChildSkillIndex] =
    await getPermissionProofs(
      contract,
      fromDomainId,
      ColonyRole.Funding,
      walletAddress,
    );
  // @TODO: once getPermissionProofs is more expensive we can just check the domain here
  // with userHasRole and then immediately get the permission proofs
  const [toPermissionDomainId, toChildSkillIndex] = await getPermissionProofs(
    contract,
    toDomainId,
    ColonyRole.Funding,
    walletAddress,
  );
  // Here's a weird case. We have found permissions for these domains but they don't share
  // a parent domain with that permission. We can still find a common parent domain that
  // has the funding permission
  if (!fromPermissionDomainId.eq(toPermissionDomainId)) {
    const hasFundingInRoot = await contract.hasUserRole(
      walletAddress,
      ROOT_DOMAIN_ID,
      ColonyRole.Funding,
    );
    // @TODO: In the future we have to not only check the ROOT domain but traverse the tree
    // (binary search) to find a common parent domain with funding permission
    // ALTHOUGH there might not be a colony version that supports the old
    // moveFundsBetweenPots function AND nested domains
    if (hasFundingInRoot) {
      const rootFromChildSkillIndex = await getChildIndex(
        contract,
        ROOT_DOMAIN_ID,
        fromDomainId,
      );
      const rootToChildSkillIndex = await getChildIndex(
        contract,
        ROOT_DOMAIN_ID,
        toDomainId,
      );
      // This shouldn't really happen as we have already checked whether the user has funding
      if (rootFromChildSkillIndex.lt(0) || rootToChildSkillIndex.lt(0)) {
        throw new Error(
          `User does not have the funding permission in any parent domain`,
        );
      }
      return [
        fromPermissionDomainId,
        rootFromChildSkillIndex,
        rootToChildSkillIndex,
      ];
    }
    throw new Error(
      // eslint-disable-next-line max-len
      'User has to have the funding role in a domain that both associated pots a children of',
    );
  }

  return [fromPermissionDomainId, fromChildSkillIndex, toChildSkillIndex];
};

export interface MoveFundsBetweenPotsEstimateGasA {
  moveFundsBetweenPotsWithProofs(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides,
  ): Promise<BigNumber>;
}

export type MoveFundsBetweenPotsAugmentsA<T extends ValidColonyA> = {
  moveFundsBetweenPotsWithProofs(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & MoveFundsBetweenPotsEstimateGasA;
};

async function moveFundsBetweenPotsWithProofsA(
  this: AugmentedIColony<ValidColonyA> &
    MoveFundsBetweenPotsAugmentsA<ValidColonyA>,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, fromChildSkillIndex, toChildSkillIndex] =
    await getMoveFundsPermissionProofsA(this, _fromPot, _toPot);

  return this.moveFundsBetweenPots(
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
    overrides,
  );
}

async function estimateMoveFundsBetweenPotsWithProofsA(
  this: AugmentedIColony<ValidColonyA> &
    MoveFundsBetweenPotsAugmentsA<ValidColonyA>,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: Overrides,
): Promise<BigNumber> {
  const [permissionDomainId, fromChildSkillIndex, toChildSkillIndex] =
    await getMoveFundsPermissionProofsA(this, _fromPot, _toPot);

  return this.estimateGas.moveFundsBetweenPots(
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
    overrides,
  );
}

export const addAugmentsA = (
  contract: AugmentedIColony<ValidColonyA> &
    MoveFundsBetweenPotsAugmentsA<ValidColonyA>,
) => {
  /* eslint-disable no-param-reassign */
  contract.moveFundsBetweenPotsWithProofs =
    moveFundsBetweenPotsWithProofsA.bind(contract);
  contract.estimateGas.moveFundsBetweenPotsWithProofs =
    estimateMoveFundsBetweenPotsWithProofsA.bind(contract);
  /* eslint-enable no-param-reassign */
};

export interface MoveFundsBetweenPotsEstimateGasB {
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)'(
    _domainId: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides,
  ): Promise<BigNumber>;
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)'(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides,
  ): Promise<BigNumber>;
}

export type MoveFundsBetweenPotsAugmentsB<T extends ValidColonyB> = {
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)'(
    _domainId: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)'(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & MoveFundsBetweenPotsEstimateGasB;
};

// eslint-disable-next-line camelcase
async function moveFundsBetweenPotsWithProofsB__DEPRECATED(
  this: AugmentedIColony<ValidColonyB> &
    MoveFundsBetweenPotsAugmentsB<ValidColonyB>,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, fromChildSkillIndex, toChildSkillIndex] =
    await getMoveFundsPermissionProofsA(this, _fromPot, _toPot);

  return this[
    // eslint-disable-next-line max-len
    'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)'
  ](
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
    overrides,
  );
}

// eslint-disable-next-line camelcase
async function estimateMoveFundsBetweenPotsWithProofsB__DEPRECATED(
  this: AugmentedIColony<ValidColonyB> &
    MoveFundsBetweenPotsAugmentsB<ValidColonyB>,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: Overrides,
): Promise<BigNumber> {
  const [permissionDomainId, fromChildSkillIndex, toChildSkillIndex] =
    await getMoveFundsPermissionProofsA(this, _fromPot, _toPot);

  return this.estimateGas[
    // eslint-disable-next-line max-len
    'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)'
  ](
    permissionDomainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
    overrides,
  );
}

async function moveFundsBetweenPotsWithProofsB(
  this: AugmentedIColony<ValidColonyB> &
    MoveFundsBetweenPotsAugmentsB<ValidColonyB>,
  _domainId: BigNumberish,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Funding,
  );

  const fromDomainId = await getPotDomain(this, _fromPot);
  const toDomainId = await getPotDomain(this, _toPot);

  const fromChildSkillIndex = await getChildIndex(
    this,
    _domainId,
    fromDomainId,
  );
  const toChildSkillIndex = await getChildIndex(this, _domainId, toDomainId);

  return this[
    // eslint-disable-next-line max-len
    'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)'
  ](
    permissionDomainId,
    childSkillIndex,
    _domainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
    overrides,
  );
}

async function estimateMoveFundsBetweenPotsWithProofsB(
  this: AugmentedIColony<ValidColonyB> &
    MoveFundsBetweenPotsAugmentsB<ValidColonyB>,
  _domainId: BigNumberish,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides?: Overrides,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Funding,
  );

  const fromDomainId = await getPotDomain(this, _fromPot);
  const toDomainId = await getPotDomain(this, _toPot);

  const fromChildSkillIndex = await getChildIndex(
    this,
    _domainId,
    fromDomainId,
  );
  const toChildSkillIndex = await getChildIndex(this, _domainId, toDomainId);

  return this.estimateGas[
    // eslint-disable-next-line max-len
    'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)'
  ](
    permissionDomainId,
    childSkillIndex,
    _domainId,
    fromChildSkillIndex,
    toChildSkillIndex,
    _fromPot,
    _toPot,
    _amount,
    _token,
    overrides,
  );
}

export const addAugmentsB = (
  contract: AugmentedIColony<ValidColonyB> &
    MoveFundsBetweenPotsAugmentsB<ValidColonyB>,
) => {
  /* eslint-disable no-param-reassign */
  // The first overload is deprecated and just the same as the old method
  contract[
    'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)'
    // eslint-disable-next-line camelcase
  ] = moveFundsBetweenPotsWithProofsB__DEPRECATED.bind(contract);
  contract.estimateGas[
    'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)'
    // eslint-disable-next-line camelcase
  ] = estimateMoveFundsBetweenPotsWithProofsB__DEPRECATED.bind(contract);
  contract[
    'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)'
  ] = moveFundsBetweenPotsWithProofsB.bind(contract);
  contract.estimateGas[
    'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)'
  ] = estimateMoveFundsBetweenPotsWithProofsB.bind(contract);
  /* eslint-enable no-param-reassign */
};
