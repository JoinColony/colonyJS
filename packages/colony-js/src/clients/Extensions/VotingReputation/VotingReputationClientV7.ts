import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/7/factories/IVotingReputation__factory.js';
import { ClientType } from '../../../constants.js';
import { type UnknownVotingReputationClient } from './augments/commonAugments.js';
import { addAugments } from './augments/augmentsV3.js';
import { addAugments as addCreateDomainMotionAugments } from './augments/CreateDomainMotion.js';

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnknownVotingReputationClient;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 7;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}
