import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish } from 'ethers/utils';

import { TransactionOverrides } from '../../../contracts/3';
import { IColony as IColonyV3 } from '../../../contracts/3/IColony';
import { IColony as IColonyV4 } from '../../../contracts/4/IColony';
import { ColonyRole } from '../../../constants';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import {
  addExtensions as addCommonExtensions,
  ExtendedIColony,
  getPermissionProofs,
} from './commonExtensions';

type ValidColony = IColonyV3 | IColonyV4;

export interface ExtendedEstimateV3 {
  setArbitrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
  ): Promise<BigNumber>;
}

export type ColonyExtensionsV3<T extends ValidColony> = {
  setArbitrationRoleWithProofs(
    _user: string,
    _domainId: BigNumberish,
    _setTo: boolean,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  estimate: T['estimate'] & ExtendedEstimateV3;
};

async function setArbitrationRoleWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV3<ValidColony>,
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

async function estimateSetArbitrationRoleWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV3<ValidColony>,
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

export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ExtendedIColony<ValidColony> & ColonyExtensionsV3<ValidColony> => {
  const extendedInstance = addCommonExtensions(
    instance,
    networkClient,
  ) as ExtendedIColony<ValidColony> & ColonyExtensionsV3<ValidColony>;
  /* eslint-disable no-param-reassign, max-len */
  extendedInstance.setArbitrationRoleWithProofs = setArbitrationRoleWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.estimate.setArbitrationRoleWithProofs = estimateSetArbitrationRoleWithProofs.bind(
    extendedInstance,
  );
  /* eslint-enable no-param-reassign, max-len */
  return extendedInstance;
};
