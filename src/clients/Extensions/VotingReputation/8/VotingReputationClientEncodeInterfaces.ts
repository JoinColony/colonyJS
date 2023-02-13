/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

import { ExtendedIColony } from '../../../Colony/extensions/commonExtensions';

import { VotingReputationClient } from './VotingReputationClient';

/*
 * Extra client encode interfaces
 */
export const getVotingReputationClientEncodeInterfaces = (
  votingReputationClient: VotingReputationClient,
  colonyClient: ExtendedIColony,
): Record<string, (params: any) => Promise<string>> => ({});

/* eslint-enable */
