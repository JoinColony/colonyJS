// These extensions are built on top of the first version of IColony and can
// potentially applied to all IColony versions that implement a minmial
// interface as lined out by ExtensionRequiredMethods and
// ExtensionRequiredTransactions

import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish } from 'ethers/utils';
import { MaxUint256 } from 'ethers/constants';

import { IColony } from '../../../lib/contracts/1/IColony';
import { TransactionOverrides } from '../../../lib/contracts/1';
import { ColonyRole, ROOT_DOMAIN_ID } from '../../constants';
import { ExtendedIColonyNetwork } from '../ColonyNetworkClient';

type ExtensionRequiredMethods = 'getDomain' | 'hasUserRole';
type ExtensionRequiredTransactions = 'addDomain';

interface ExtendedEstimates {
  addDomain(_parentDomainId: BigNumberish): Promise<BigNumber>;
}

export interface ColonyExtensions {
  networkClient: ExtendedIColonyNetwork;
  addDomainWithProofs(
    _parentDomainId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  estimateWithProofs: ExtendedEstimates;
}

type ExtensionRequiredIColony = Pick<ColonyExtensions, 'networkClient'> &
  Pick<IColony, 'signer'> &
  Pick<IColony, ExtensionRequiredMethods> &
  Pick<IColony, ExtensionRequiredTransactions> & {
    estimate: Pick<IColony['estimate'], ExtensionRequiredTransactions>;
  };

export const getPermissionProofs = async (
  contract: ExtensionRequiredIColony,
  domainId: BigNumberish,
  role: ColonyRole,
  /* [permissionDomainId, childSkillIndex] */
): Promise<[BigNumberish, BigNumberish]> => {
  const walletAddress = await contract.signer.getAddress();
  const hasPermissionInDomain = await contract.hasUserRole(
    walletAddress,
    domainId,
    role,
  );
  if (hasPermissionInDomain) {
    return [domainId, MaxUint256];
  }
  // @TODO once we allow nested domains on the network level, this needs to traverse down the skill/domain tree. Use binary search
  const foundDomainId = ROOT_DOMAIN_ID;
  const hasPermissionInAParentDomain = await contract.hasUserRole(
    walletAddress,
    foundDomainId,
    role,
  );
  if (!hasPermissionInAParentDomain) {
    throw new Error(
      `User does not have the permission ${role} in any parent domain`,
    );
  }
  const { skillId: parentSkillId } = await contract.getDomain(foundDomainId);
  const { skillId } = await contract.getDomain(domainId);
  const { children } = await contract.networkClient.getSkill(parentSkillId);
  const idx = children.findIndex(childSkillId => childSkillId.eq(skillId));
  if (idx < 0) {
    throw new Error(
      `User does not have the permission ${role} in any parent domain`,
    );
  }
  return [foundDomainId, idx];
};

async function addDomainWithProofs<T extends ExtensionRequiredIColony>(
  this: T,
  _parentDomainId: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
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

async function estimateAddDomainWithProofs<T extends ExtensionRequiredIColony>(
  this: T,
  _parentDomainId: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _parentDomainId,
    ColonyRole.Architecture,
  );
  return this.estimate.addDomain(
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
  );
}

export const addExtensions = <
  T extends ColonyExtensions & ExtensionRequiredIColony
>(
  instance: T,
  networkClient: ExtendedIColonyNetwork,
): void => {
  /* eslint-disable no-param-reassign */
  instance.networkClient = networkClient;
  instance.addDomainWithProofs = addDomainWithProofs.bind(instance);
  instance.estimateWithProofs = {
    addDomain: estimateAddDomainWithProofs,
  };
  /* eslint-enable no-param-reassign */
};
