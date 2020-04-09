import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish } from 'ethers/utils';

import { TransactionOverrides } from '../../../lib/contracts/3';
import { IColony } from '../../../lib/contracts/3/IColony';
import { ColonyRole } from '../../constants';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';
import {
  addExtensions as addCommonExtensions,
  getPermissionProofs,
  ColonyExtensions,
  ExtendedEstimate,
  CommonExtensionRequiredIColony,
  CommonExtensionRequiredTransactions,
} from './extensions';

export interface ExtendedEstimatesV3 extends ExtendedEstimate {
  setArbitrationRole(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
}

export interface ColonyExtensionsV3 extends ColonyExtensions {
  setArbitrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  estimateWithProofs: ExtendedEstimatesV3;
}

export type ExtensionRequiredTransactionsV3 =
  | CommonExtensionRequiredTransactions
  | 'setArbitrationRole';

export type ExtensionRequiredIColonyV3 = CommonExtensionRequiredIColony &
  Pick<IColony, 'setArbitrationRole'> & {
    estimate: Pick<IColony['estimate'], ExtensionRequiredTransactionsV3>;
  };

async function setArbitrationRoleWithProofs<
  T extends ExtensionRequiredIColonyV3
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  let proofs: [BigNumberish, BigNumberish];
  // This method has two potential permissions, so we try both of them
  try {
    proofs = await getPermissionProofs(
      this,
      _domainId,
      ColonyRole.ArchitectureSubdomain_DEPRECATED,
    );
  } catch (err) {
    proofs = await getPermissionProofs(this, _domainId, ColonyRole.Root);
  }
  const [permissionDomainId, childSkillIndex] = proofs;
  return this.setArbitrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
    overrides,
  );
}

async function estimateSetArbitrationRoleWithProofs<
  T extends ExtensionRequiredIColonyV3
>(
  this: T,
  _user: string,
  _domainId: BigNumberish,
  _setTo: boolean,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimate.setArbitrationRole(
    permissionDomainId,
    childSkillIndex,
    _user,
    _domainId,
    _setTo,
  );
}

export const addExtensions = <
  T extends ColonyExtensionsV3 & ExtensionRequiredIColonyV3
>(
  instance: T,
  networkClient: ExtendedIColonyNetwork,
): void => {
  addCommonExtensions(instance, networkClient);
  /* eslint-disable no-param-reassign, max-len */
  instance.setArbitrationRoleWithProofs = setArbitrationRoleWithProofs.bind(
    instance,
  );
  instance.estimateWithProofs.setArbitrationRole = estimateSetArbitrationRoleWithProofs.bind(
    instance,
  );
  /* eslint-enable no-param-reassign, max-len */
};
