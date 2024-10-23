import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/5/factories/VotingReputation__factory.js';
import { ClientType } from '../../../constants.js';
import { type UnkonwnVotingReputationClient } from './augments/commonAugments.js';
import { addAugments } from './augments/augmentsV2.js';
import { addAugments as addCreateDomainMotionAugments } from './augments/CreateDomainMotion.js';

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnkonwnVotingReputationClient;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 5;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}
