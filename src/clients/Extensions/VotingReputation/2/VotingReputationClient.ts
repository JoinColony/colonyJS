/*
 * VotingReputation Client Version 2 autogenerated by
 * @colony/colony-js version 4.0.0-beta.1 from colonyNetwork tag 'lwss-18-g840e378c'
 *
 * Feel free to modify as needed!
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ClientType } from '../../../../constants';
import { VotingReputation__factory as VotingReputationFactory } from '../../../../contracts/extensions/votingReputation/2/factories/VotingReputation__factory';
import { VotingReputation } from '../../../../contracts/extensions/votingReputation/2/VotingReputation';
import { ExtendedIColony } from '../../../../clients/Colony/extensions/commonExtensions';

import * as currentVersion from './VotingReputationClientAddons';
import * as version1 from '../1/VotingReputationClientAddons';

type VotingReputationEstimate = VotingReputation['estimate'];
interface VotingReputationEstimateWithAddons extends VotingReputationEstimate {
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

export interface VotingReputationClient extends VotingReputation {
  clientType: ClientType.VotingReputationClient;
  estimate: VotingReputationEstimateWithAddons;
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
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

  const addons = {
    ...currentVersion.getVotingReputationClientAddons(
      votingReputationClient,
      colonyClient,
    ),
    ...version1.getVotingReputationClientAddons(
      votingReputationClient,
      colonyClient,
    ),
  };
  const addonsEstimate = {
    ...currentVersion.getVotingReputationClientEstimateAddons(
      votingReputationClient,
      colonyClient,
    ),
    ...version1.getVotingReputationClientEstimateAddons(
      votingReputationClient,
      colonyClient,
    ),
  };

  Object.keys(addons).map((addonName) => {
    votingReputationClient[addonName] = addons[addonName];
    return null;
  });

  Object.keys(addonsEstimate).map((addonName) => {
    votingReputationClient.estimate[addonName] = addonsEstimate[addonName];
    return null;
  });

  return votingReputationClient;
};

export default getVotingReputationClient;

/* eslint-enable */
