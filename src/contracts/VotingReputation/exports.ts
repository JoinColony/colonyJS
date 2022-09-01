// Always add the next VotingReputation version here
import type { VotingReputation as VotingReputation1 } from './1';
import type { VotingReputation as VotingReputation2 } from './2';
import type { VotingReputation as VotingReputation3 } from './3';
import type { VotingReputation as VotingReputation4 } from './4';

// Always adjust to the latest factory
import { VotingReputation } from './4/VotingReputation';

export { VotingReputation__factory as VotingReputationFactory } from './4/factories/VotingReputation__factory';

export type VotingReputationV1 = VotingReputation1;
export type VotingReputationV2 = VotingReputation2;
export type VotingReputationV3 = VotingReputation3;
export type VotingReputationV4 = VotingReputation4;

export type AnyVotingReputation =
  | VotingReputation1
  | VotingReputation2
  | VotingReputation3
  | VotingReputation4;

// Also export useful types
export type Motion = VotingReputation.MotionStructOutput;
