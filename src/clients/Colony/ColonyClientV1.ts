import { Signer, ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish } from 'ethers/utils';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/1/IColonyFactory';
import { IColony } from '../../../lib/contracts/1/IColony';
import { TransactionOverrides } from '../../../lib/contracts/1';
import { ColonyRole } from '../../constants';

type ExtensionRequiredMethods = 'hasUserRole';
type ExtensionRequiredTransactions = 'addDomain';

interface ExtendedEstimates {
  addDomain(_parentDomainId: BigNumberish): Promise<BigNumber>;
}

export interface ColonyExtensions {
  addDomainWithProofs(
    _parentDomainId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  estimateWithProofs: ExtendedEstimates;
}

type ExtensionRequiredIColony = Pick<IColony, ExtensionRequiredMethods> &
  Pick<IColony, ExtensionRequiredTransactions> & {
    estimate: Pick<IColony['estimate'], ExtensionRequiredTransactions>;
  };

const getPermissionProofs = (
  contract: ExtensionRequiredIColony,
  domainId: BigNumberish,
  permission: ColonyRole,
): [number, number] => {
  // @TODO implement me
  // ALSO
  // (basically, if permissionDomaindID === childDomainId, set childSkillIndex to UINT256_MAX)
  // contract.hasUserRole();
  console.info(domainId, permission);
  return [1, 1];
};

function addDomainWithProofs<T extends ExtensionRequiredIColony>(
  this: T,
  _parentDomainId: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = getPermissionProofs(
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

function estimateAddDomainWithProofs<T extends ExtensionRequiredIColony>(
  this: T,
  _parentDomainId: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = getPermissionProofs(
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
): void => {
  /* eslint-disable no-param-reassign */
  instance.addDomainWithProofs = addDomainWithProofs.bind(instance);
  instance.estimateWithProofs = {
    addDomain: estimateAddDomainWithProofs,
  };
  /* eslint-enable no-param-reassign */
};

interface ExtendedIColony extends IColony, ColonyExtensions {}

const getColonyClient = (
  address: string,
  signerOrProvider: Signer | Provider,
): ExtendedIColony => {
  const colonyClient = IColonyFactory.connect(
    address,
    signerOrProvider,
  ) as ExtendedIColony;

  addExtensions(colonyClient);

  return colonyClient as ExtendedIColony;
};

export default getColonyClient;
