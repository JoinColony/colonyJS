import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';

import {
  IColonyV1,
  IColonyV2,
  IColonyV3,
} from '../../../contracts/IColony/exports';
import { ColonyRole, TxOverrides } from '../../../types';
import { AugmentedIColony, getPermissionProofs } from './commonAugments';

// Colonies that support this method
type ValidColony = IColonyV1 | IColonyV2 | IColonyV3;

export interface SetPaymentDomainEstimateGas {
  setPaymentDomainWithProofs(
    _id: BigNumberish,
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

export type SetPaymentDomainAugments<T extends ValidColony> = {
  setPaymentDomainWithProofs(
    _id: BigNumberish,
    _domainId: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
  estimateGas: T['estimateGas'] & SetPaymentDomainEstimateGas;
};

async function setPaymentDomainWithProofs(
  this: AugmentedIColony<ValidColony> & SetPaymentDomainAugments<ValidColony>,
  _id: BigNumberish,
  _domainId: string,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  this: AugmentedIColony<ValidColony> & SetPaymentDomainAugments<ValidColony>,
  _id: BigNumberish,
  _domainId: BigNumberish,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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
  contract: AugmentedIColony<ValidColony> &
    SetPaymentDomainAugments<ValidColony>,
) => {
  /* eslint-disable no-param-reassign */
  contract.setPaymentDomainWithProofs =
    setPaymentDomainWithProofs.bind(contract);
  contract.estimateGas.setPaymentDomainWithProofs =
    estimateSetPaymentDomainWithProofs.bind(contract);
  /* eslint-enable no-param-reassign */
};
