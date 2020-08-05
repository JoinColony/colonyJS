import { BigNumber, BigNumberish } from 'ethers/utils';
import { ContractTransaction } from 'ethers';

import { TransactionOverrides } from '../../../contracts/1';
import { IColony as IColonyV1 } from '../../../contracts/1/IColony';
import { IColony as IColonyV2 } from '../../../contracts/2/IColony';
import { IColony as IColonyV3 } from '../../../contracts/3/IColony';
import { ColonyRole } from '../../../constants';
import { ExtendedIColony, getPermissionProofs } from './commonExtensions';

// Colonies that support this method
type ValidColony = IColonyV1 | IColonyV2 | IColonyV3;

export interface SetPaymentDomainEstimate {
  setPaymentDomainWithProofs(
    _id: BigNumberish,
    _domainId: BigNumberish,
  ): Promise<BigNumber>;
}

export type SetPaymentDomainExtensions<T extends ValidColony> = {
  setPaymentDomainWithProofs(
    _id: BigNumberish,
    _domainId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  estimate: T['estimate'] & SetPaymentDomainEstimate;
};

export async function setPaymentDomainWithProofs(
  this: ExtendedIColony<ValidColony> & SetPaymentDomainExtensions<ValidColony>,
  _id: BigNumberish,
  _domainId: string,
  overrides?: TransactionOverrides,
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

export async function estimateSetPaymentDomainWithProofs(
  this: ExtendedIColony<ValidColony> & SetPaymentDomainExtensions<ValidColony>,
  _id: BigNumberish,
  _domainId: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getPayment(_id);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    domainId,
    ColonyRole.Administration,
  );
  return this.estimate.setPaymentDomain(
    permissionDomainId,
    childSkillIndex,
    _id,
    _domainId,
  );
}
