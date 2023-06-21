import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/7/factories/IVotingReputation__factory.js';
import { IVotingReputation } from '../../../contracts/IVotingReputation/7/IVotingReputation.js';
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
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

interface VotingReputationEstimate
  extends AugmentedEstimate<IVotingReputation>,
    AugmentedEstimateV2,
    CreateDomainMotionEstimateGas {}

export interface VotingReputationClientV7
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation>,
    CreateDomainMotionAugments<IVotingReputation> {
  clientVersion: 7;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV7 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV7;

  votingReputationClient.clientVersion = 7;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}
