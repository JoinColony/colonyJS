import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { IVotingReputation } from '../../../contracts/IVotingReputation/6/IVotingReputation.js';

import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/6/factories/IVotingReputation__factory.js';
import { ClientType } from '../../../constants.js';
import {
  AugmentedEstimate,
  AugmentedVotingReputation,
} from './augments/commonAugments.js';
import {
  addAugments,
  AugmentedEstimateV2,
  AugmentsV2,
} from './augments/augmentsV2.js';
import {
  addAugments as addCreateDomainMotionAugments,
  CreateDomainMotionAugments,
  CreateDomainMotionEstimateGas,
} from './augments/CreateDomainMotion.js';

interface VotingReputationEstimate
  extends AugmentedEstimate<IVotingReputation>,
    AugmentedEstimateV2,
    CreateDomainMotionEstimateGas {}

export interface VotingReputationClientV6
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation>,
    CreateDomainMotionAugments<IVotingReputation> {
  clientVersion: 6;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV6 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV6;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 6;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}
