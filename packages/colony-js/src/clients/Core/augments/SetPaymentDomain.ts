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

import type { IColonyV3 } from '../contracts.js';
import type { UnknownIColonyClient } from './commonAugments.js';

// Colonies that support this method
type ValidColony = IColonyV3;

export interface SetPaymentDomainEstimateGas {
  /**
   * @deprecated
   *
   * Same as {@link setPaymentDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Id of the new domain to set
   * @param _id - Payment identifier
   */
  setPaymentDomainWithProofs(
    _id: BigNumberish,
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type SetPaymentDomainAugments<T extends ValidColony> = {
  /**
   * @deprecated
   *
   * Same as {@link setPaymentDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Id of the new domain to set
   * @param _id - Payment identifier
   */
  setPaymentDomainWithProofs(
    _id: BigNumberish,
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & SetPaymentDomainEstimateGas;
};

async function setPaymentDomainWithProofs(
  this: UnknownIColonyClient & SetPaymentDomainAugments<ValidColony>,
  _id: BigNumberish,
  _domainId: string,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.setPaymentDomain(
    permissionDomainId,
    childSkillIndex,
    _id,
    _domainId,
    overrides,
  );
}

async function estimateSetPaymentDomainWithProofs(
  this: UnknownIColonyClient & SetPaymentDomainAugments<ValidColony>,
  _id: BigNumberish,
  _domainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimateGas.setPaymentDomain(
    permissionDomainId,
    childSkillIndex,
    _id,
    _domainId,
    overrides,
  );
}
export const addAugments = (
  contract: UnknownIColonyClient & SetPaymentDomainAugments<ValidColony>,
) => {
  /* eslint-disable no-param-reassign */
  contract.setPaymentDomainWithProofs =
    setPaymentDomainWithProofs.bind(contract);
  contract.estimateGas.setPaymentDomainWithProofs =
    estimateSetPaymentDomainWithProofs.bind(contract);
  /* eslint-enable no-param-reassign */
};
