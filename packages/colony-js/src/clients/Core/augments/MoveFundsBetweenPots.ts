import {
  type BigNumber,
  type BigNumberish,
  type ContractTransaction,
} from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  Id,
  getChildIndex,
  getPermissionProofs,
  getPotDomain,
} from '@colony/core';

import {
  type IColonyV6,
  type IColonyV13,
  type IColonyV14,
  type IColonyV15,
  type IColonyV16,
  type IColonyV17,
} from '../contracts.js';
import {
  type AugmentedIColony,
  type UnknownIColonyClient,
} from './commonAugments.js';

// Colonies that support the earlier (not-overloaded) method
type ValidColonyA = IColonyV6;

// Colonies that support the later (overloaded) methods
type ValidColonyB =
  | IColonyV13
  | IColonyV14
  | IColonyV15
  | IColonyV16
  | IColonyV17;

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
      contract.networkClient,
      contract,
      fromDomainId,
      ColonyRole.Funding,
      walletAddress,
    );
  // @TODO: once getPermissionProofs is more expensive we can just check the domain here
  // with userHasRole and then immediately get the permission proofs
  const [toPermissionDomainId, toChildSkillIndex] = await getPermissionProofs(
    contract.networkClient,
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
      Id.RootDomain,
      ColonyRole.Funding,
    );
    // @TODO: In the future we have to not only check the ROOT domain but traverse the tree
    // (binary search) to find a common parent domain with funding permission
    // ALTHOUGH there might not be a colony version that supports the old
    // moveFundsBetweenPots function AND nested domains
    if (hasFundingInRoot) {
      const rootFromChildSkillIndex = await getChildIndex(
        contract.networkClient,
        contract,
        Id.RootDomain,
        fromDomainId,
      );
      const rootToChildSkillIndex = await getChildIndex(
        contract.networkClient,
        contract,
        Id.RootDomain,
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
  /**
   * @deprecated
   *
   * Same as {@link moveFundsBetweenPots}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _fromPot - Funding pot id providing the funds
   * @param _toPot - Funding pot id receiving the funds
   * @param _amount - Amount of funds
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  moveFundsBetweenPotsWithProofs(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type MoveFundsBetweenPotsAugmentsA<T extends ValidColonyA> = {
  /**
   * @deprecated
   *
   * Same as {@link moveFundsBetweenPots}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _fromPot - Funding pot id providing the funds
   * @param _toPot - Funding pot id receiving the funds
   * @param _amount - Amount of funds
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  moveFundsBetweenPotsWithProofs(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & MoveFundsBetweenPotsEstimateGasA;
};

async function moveFundsBetweenPotsWithProofsA(
  this: UnknownIColonyClient & MoveFundsBetweenPotsAugmentsA<ValidColonyA>,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides: TxOverrides = {},
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
  this: UnknownIColonyClient & MoveFundsBetweenPotsAugmentsA<ValidColonyA>,
  _fromPot: BigNumberish,
  _toPot: BigNumberish,
  _amount: BigNumberish,
  _token: string,
  overrides: TxOverrides = {},
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
  contract: UnknownIColonyClient & MoveFundsBetweenPotsAugmentsA<ValidColonyA>,
) => {
  /* eslint-disable no-param-reassign */
  contract.moveFundsBetweenPotsWithProofs =
    moveFundsBetweenPotsWithProofsA.bind(contract);
  contract.estimateGas.moveFundsBetweenPotsWithProofs =
    estimateMoveFundsBetweenPotsWithProofsA.bind(contract);
  /* eslint-enable no-param-reassign */
};
export interface MoveFundsBetweenPotsEstimateGasB {
  /**
   * Same as {@link "moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - The domain where I am taking this action, pointed to by _permissionDomainId and _childSkillIndex
   * @param _fromPot - Funding pot id providing the funds
   * @param _toPot - Funding pot id receiving the funds
   * @param _amount - Amount of funds
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)'(
    _domainId: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * @deprecated
   *
   * Same as {@link "moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)"}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _fromPot - Funding pot id providing the funds
   * @param _toPot - Funding pot id receiving the funds
   * @param _amount - Amount of funds
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)'(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type MoveFundsBetweenPotsAugmentsB<T extends ValidColonyB> = {
  /**
   * Same as {@link "moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - The domain where I am taking this action, pointed to by _permissionDomainId and _childSkillIndex
   * @param _fromPot - Funding pot id providing the funds
   * @param _toPot - Funding pot id receiving the funds
   * @param _amount - Amount of funds
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)'(
    _domainId: BigNumberish,
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * @deprecated
   *
   * Same as {@link "moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)"}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _fromPot - Funding pot id providing the funds
   * @param _toPot - Funding pot id receiving the funds
   * @param _amount - Amount of funds
   * @param _token - Address of the token, `0x0` value indicates Ether
   */
  'moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)'(
    _fromPot: BigNumberish,
    _toPot: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    overrides?: TxOverrides,
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
  overrides: TxOverrides = {},
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
  overrides: TxOverrides = {},
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
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Funding,
  );

  const fromDomainId = await getPotDomain(this, _fromPot);
  const toDomainId = await getPotDomain(this, _toPot);

  const fromChildSkillIndex = await getChildIndex(
    this.networkClient,
    this,
    _domainId,
    fromDomainId,
  );
  const toChildSkillIndex = await getChildIndex(
    this.networkClient,
    this,
    _domainId,
    toDomainId,
  );

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
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Funding,
  );

  const fromDomainId = await getPotDomain(this, _fromPot);
  const toDomainId = await getPotDomain(this, _toPot);

  const fromChildSkillIndex = await getChildIndex(
    this.networkClient,
    this,
    _domainId,
    fromDomainId,
  );
  const toChildSkillIndex = await getChildIndex(
    this.networkClient,
    this,
    _domainId,
    toDomainId,
  );

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
