import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

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
  IColonyV10,
  IColonyV11,
  IColonyV12,
} from '../contracts';
import { AugmentedIColony } from './commonAugments';

// Colonies that support the early (not-overloaded) method
type ValidColonyA = IColonyV1 | IColonyV2 | IColonyV3 | IColonyV4;

// Colonies that support the later (overloaded) methods
type ValidColonyB =
  | IColonyV5
  | IColonyV6
  | IColonyV7
  | IColonyV8
  | IColonyV9
  | IColonyV10
  | IColonyV11
  | IColonyV12;

export interface AddDomainEstimateGasA {
  /**
   * @deprecated
   *
   * Same as [[addDomain]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _parentDomainId - Id of the domain under which the new one will be added
   */
  addDomainWithProofs(_parentDomainId: BigNumberish): Promise<BigNumber>;
}

export type AddDomainAugmentsA<T extends ValidColonyA> = {
  /**
   * @deprecated
   *
   * Same as [[addDomain]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _parentDomainId - Id of the domain under which the new one will be added
   */
  addDomainWithProofs(
    _parentDomainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AddDomainEstimateGasA;
};

async function addDomainWithProofsA(
  this: AugmentedIColony<ValidColonyA>,
  _parentDomainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this.addDomain(
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    overrides,
  );
}

async function estimateAddDomainWithProofsA(
  this: AugmentedIColony<ValidColonyA>,
  _parentDomainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.addDomain(
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    overrides,
  );
}

export const addAugmentsA = (
  contract: AugmentedIColony<ValidColonyA> & AddDomainAugmentsA<ValidColonyA>,
) => {
  /* eslint-disable no-param-reassign */
  contract.addDomainWithProofs = addDomainWithProofsA.bind(contract);
  contract.estimateGas.addDomainWithProofs =
    estimateAddDomainWithProofsA.bind(contract);
  /* eslint-enable no-param-reassign */
};

export interface AddDomainEstimateGasB {
  /**
   * Same as [[addDomain(uint256)]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _parentDomainId - Id of the domain under which the new one will be added
   */
  'addDomainWithProofs(uint256)'(
    _parentDomainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
  /**
   * Same as [[addDomain(uint256,string)]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _parentDomainId - Id of the domain under which the new one will be added
   * @param _metadata - Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.
   */
  'addDomainWithProofs(uint256,string)'(
    _parentDomainId: BigNumberish,
    _metadata: string,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type AddDomainAugmentsB<T extends ValidColonyB> = {
  /**
   * Same as [[addDomain(uint256,uint256,uint256)]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _parentDomainId - Id of the domain under which the new one will be added
   */
  'addDomainWithProofs(uint256)'(
    _parentDomainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Same as [[addDomain(uint256,uint256,uint256,string)]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _parentDomainId - Id of the domain under which the new one will be added
   * @param _metadata - Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.
   */
  'addDomainWithProofs(uint256,string)'(
    _parentDomainId: BigNumberish,
    _metadata: string,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & AddDomainEstimateGasB;
};

async function estimateAddDomainWithProofsB0(
  this: AugmentedIColony<ValidColonyB>,
  _parentDomainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas['addDomain(uint256,uint256,uint256)'](
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    overrides,
  );
}

async function estimateAddDomainWithProofsB1(
  this: AugmentedIColony<ValidColonyB>,
  _parentDomainId: BigNumberish,
  _metadata: string,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas['addDomain(uint256,uint256,uint256,string)'](
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    _metadata,
    overrides,
  );
}

async function addDomainWithProofsB0(
  this: AugmentedIColony<ValidColonyB>,
  _parentDomainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this['addDomain(uint256,uint256,uint256)'](
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    overrides,
  );
}

async function addDomainWithProofsB1(
  this: AugmentedIColony<ValidColonyB>,
  _parentDomainId: BigNumberish,
  _metadata: string,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this['addDomain(uint256,uint256,uint256,string)'](
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    _metadata,
    overrides,
  );
}

export const addAugmentsB = (
  contract: AugmentedIColony<ValidColonyB> & AddDomainAugmentsB<ValidColonyB>,
) => {
  /* eslint-disable no-param-reassign */
  contract['addDomainWithProofs(uint256)'] =
    addDomainWithProofsB0.bind(contract);
  contract.estimateGas['addDomainWithProofs(uint256)'] =
    estimateAddDomainWithProofsB0.bind(contract);
  contract['addDomainWithProofs(uint256,string)'] =
    addDomainWithProofsB1.bind(contract);
  contract.estimateGas['addDomainWithProofs(uint256,string)'] =
    estimateAddDomainWithProofsB1.bind(contract);
  /* eslint-enable no-param-reassign */
};
