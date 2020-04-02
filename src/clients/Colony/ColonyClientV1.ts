import { Signer, ContractTransaction } from 'ethers';
import { BigNumberish } from 'ethers/utils';
import { Provider } from 'ethers/providers';

import { IColonyFactory } from '../../../lib/contracts/1/IColonyFactory';
import { IColony } from '../../../lib/contracts/1/IColony';
import { TransactionOverrides } from '../../../lib/contracts/1';

type ExtensionRequiredMethods = 'hasUserRole';
type ExtensionRequiredTransactions = 'addDomain';

interface ExtendedEstimates {
  addDomain(): string;
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
  permission: string,
): [number, number] => {
  // @TODO implement me
  // ALSO
  // (basically, if permissionDomaindID === childDomainId, set childSkillIndex to UINT256_MAX)
  // contract.hasUserRole();
  console.info(domainId, permission);
  return [1, 1];
};

// const withProofsFactory = (methodName: ExtensionRequiredTransactions) => {
//   return function<T extends ExtensionRequiredIColony>(
//     this: T,
//     ...args: any[]
//   ) {
//     const [permissionDomainId, childSkillIndex] = getPermissionProofs(
//       this,
//       _parentDomainId,
//       // @TODO replace with correct role
//       'ADMIN',
//     );
//   };
// };

function addDomainWithProofs<T extends ExtensionRequiredIColony>(
  this: T,
  _parentDomainId: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = getPermissionProofs(
    this,
    _parentDomainId,
    // @TODO replace with correct role
    'ADMIN',
  );
  return this.addDomain(
    permissionDomainId,
    childSkillIndex,
    _parentDomainId,
    overrides,
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
    addDomain: (): string => 'x',
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
