import { ClientType } from '../constants';
import { VotingReputation__factory as VotingReputationFactory } from '../contracts/6/factories/VotingReputation__factory';
import { VotingReputation } from '../contracts/6/VotingReputation';
import { ExtendedIColony } from './Colony/extensions/commonExtensions';

export interface VotingReputationClient extends VotingReputation {
  clientType: ClientType.VotingReputationClient;
}

const getVotingReputationClient = (
  address: string,
  colonyClient: ExtendedIColony,
): VotingReputationClient => {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClient;

  votingReputationClient.clientType = ClientType.VotingReputationClient;

  return votingReputationClient;
};

export default getVotingReputationClient;
