import { Extension, VotingReputationClientV4 } from '@colony/colony-js';
import { SupportedColonyClient } from './Colony';
import { MotionCreator } from './MotionCreator';

export type SupportedVotingReputationClient = VotingReputationClientV4;
export const SUPPORTED_VOTING_REPUTATION_VERSION = 4;

export const getVotingReputationClient = async (
  colonyClient: SupportedColonyClient,
) => {
  const votingReputationClient = await colonyClient.getExtensionClient(
    Extension.VotingReputation,
  );

  if (
    votingReputationClient.clientVersion !== SUPPORTED_VOTING_REPUTATION_VERSION
  ) {
    throw new Error(
      `The installed version ${votingReputationClient.clientVersion} of the VotingReputation extension is not supported. Please upgrade the extension in your Colony`,
    );
  }

  return votingReputationClient;
};

export class VotingReputation {
  create: MotionCreator;

  constructor(
    colonyClient: SupportedColonyClient,
    votingReputationClient: SupportedVotingReputationClient,
  ) {
    this.create = new MotionCreator(colonyClient, votingReputationClient);
  }
}
