import { ContractTransaction } from 'ethers';
import { BigNumber, BigNumberish } from 'ethers/utils';

import { TransactionOverrides } from '../../../contracts/3';
import { ColonyRole } from '../../../constants';
import { IColony as IColonyV5 } from '../../../contracts/5/IColony';
import { CoinMachineClient } from '../../CoinMachineClient';
import { ColonyNetworkClient } from '../../ColonyNetworkClient';
import { ExtendedIColony, getPermissionProofs } from './commonExtensions';
import { ColonyExtensionsV3 } from './extensionsV3';
import {
  addExtensions as addExtensionsV4,
  ColonyExtensionsV4,
  ExtendedEstimateV4,
} from './extensionsV4';

type ValidColony = IColonyV5;

export interface ExtendedEstimateV5 extends ExtendedEstimateV4 {
  emitDomainReputationPenaltyWithProofs(
    _domainId: BigNumberish,
    _user: string,
    _amount: BigNumberish,
  ): Promise<BigNumber>;
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
  ): Promise<BigNumber>;
}

export type ColonyExtensionsV5<T extends ValidColony> = {
  coinMachineClient?: CoinMachineClient;
  emitDomainReputationPenaltyWithProofs(
    _domainId: BigNumberish,
    _user: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  transferStakeWithProofs(
    _obligator: string,
    _user: string,
    _domainId: BigNumberish,
    _amount: BigNumberish,
    _recipient: string,
  ): Promise<ContractTransaction>;

  estimate: T['estimate'] & ExtendedEstimateV5;
};

async function emitDomainReputationPenaltyWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV5<ValidColony>,
  _domainId: BigNumberish,
  _user: string,
  _amount: BigNumberish,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.emitDomainReputationPenalty(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _user,
    _amount,
    overrides,
  );
}

async function transferStakeWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV5<ValidColony>,
  _obligator: string,
  _user: string,
  _domainId: BigNumberish,
  _amount: BigNumberish,
  _recipient: string,
  overrides?: TransactionOverrides,
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.transferStake(
    permissionDomainId,
    childSkillIndex,
    _obligator,
    _user,
    _domainId,
    _amount,
    _recipient,
    overrides,
  );
}

async function estimateEmitDomainReputationPenaltyWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV5<ValidColony>,
  _domainId: BigNumberish,
  _user: string,
  _amount: BigNumberish,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.estimate.emitDomainReputationPenalty(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _user,
    _amount,
  );
}

async function estimateTransferStakeWithProofs(
  this: ExtendedIColony<ValidColony> & ColonyExtensionsV5<ValidColony>,
  _obligator: string,
  _user: string,
  _domainId: BigNumberish,
  _amount: BigNumberish,
  _recipient: string,
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this,
    _domainId,
    ColonyRole.Arbitration,
  );
  return this.estimate.transferStake(
    permissionDomainId,
    childSkillIndex,
    _obligator,
    _user,
    _domainId,
    _amount,
    _recipient,
  );
}

export const addExtensions = (
  instance: ExtendedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ExtendedIColony<ValidColony> &
  ColonyExtensionsV3<ValidColony> &
  ColonyExtensionsV4<ValidColony> &
  ColonyExtensionsV5<ValidColony> => {
  // Add all extensions from v4, because these are also still valid
  const extendedInstance = addExtensionsV4(
    instance,
    networkClient,
  ) as ExtendedIColony<ValidColony> &
    ColonyExtensionsV3<ValidColony> &
    ColonyExtensionsV4<ValidColony> &
    ColonyExtensionsV5<ValidColony>;

  /* eslint-disable no-param-reassign, max-len */
  extendedInstance.coinMachineClient = undefined;

  extendedInstance.emitDomainReputationPenaltyWithProofs = emitDomainReputationPenaltyWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.transferStakeWithProofs = transferStakeWithProofs.bind(
    extendedInstance,
  );

  extendedInstance.estimate.emitDomainReputationPenaltyWithProofs = estimateEmitDomainReputationPenaltyWithProofs.bind(
    extendedInstance,
  );
  extendedInstance.estimate.transferStakeWithProofs = estimateTransferStakeWithProofs.bind(
    extendedInstance,
  );
  /* eslint-enable no-param-reassign, max-len */

  return extendedInstance;
};
