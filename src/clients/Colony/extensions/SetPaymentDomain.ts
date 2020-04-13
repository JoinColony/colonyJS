import { BigNumber, BigNumberish } from 'ethers/utils';
import { ContractTransaction } from 'ethers';

import { TransactionOverrides } from '../../../../lib/contracts/1';
import { IColony } from '../../../../lib/contracts/1/IColony';
import { ColonyRole } from '../../../constants';
import { ExtendableIColony, getPermissionProofs } from './commonExtensions';

type ExtensionRequiredTransactions = 'setPaymentDomain';

export interface SetPaymentDomainEstimate {
  setPaymentDomain(
    _id: BigNumberish,
    _domainId: BigNumberish,
  ): Promise<BigNumber>;
}

export interface SetPaymentDomainExtensions {
  setPaymentDomainWithProofs(
    _id: BigNumberish,
    _domainId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
}

export type SetPaymentDomainRequiredIColony = ExtendableIColony &
  Pick<IColony, ExtensionRequiredTransactions> & {
    estimate: Pick<IColony['estimate'], ExtensionRequiredTransactions>;
  };

export async function setPaymentDomainWithProofs<
  T extends SetPaymentDomainRequiredIColony
>(
  this: T,
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

export async function estimateSetPaymentDomainWithProofs<
  T extends SetPaymentDomainRequiredIColony
>(this: T, _id: BigNumberish, _domainId: BigNumberish): Promise<BigNumber> {
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
