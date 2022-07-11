/* eslint-disable @typescript-eslint/no-explicit-any */

import { BigNumberish, Arrayish, bigNumberify } from 'ethers/utils';
import { MaxUint256 } from 'ethers/constants';

import {
  ExtendedIColony,
  getPermissionProofs,
  getChildIndex,
} from '../../../Colony/extensions/commonExtensions';
import { ColonyRole } from '../../../../constants';

import { VotingReputationClient } from './VotingReputationClient';

/*
 * Extra client encode interfaces
 */
export const getOneTxPaymentClientEncodeInterfaces = (
  votingReputationClient: VotingReputationClient,
  colonyClient: ExtendedIColony,
): Record<string, (params: any) => Promise<string>> => ({
  createDomainMotionWithProofs: async ([
    _domainId,
    _action,
    _key,
    _value,
    _branchMask,
    _siblings,
  ]: [
    BigNumberish, // Domain in which the voting will take place in
    Arrayish,
    Arrayish,
    Arrayish,
    BigNumberish,
    Arrayish[],
  ]): Promise<string> => {
    let childSkillIdex = MaxUint256;
    const votingDomain = bigNumberify(_domainId);
    const decodedDomain = bigNumberify(`0x${_action.toString().slice(10, 74)}`); // Domain in which we have permissions
    if (!decodedDomain.eq(votingDomain)) {
      const domainSkillIdIndex = await getChildIndex(
        colonyClient,
        decodedDomain,
        votingDomain,
      );
      if (!domainSkillIdIndex.eq(bigNumberify(-1))) {
        childSkillIdex = bigNumberify(domainSkillIdIndex);
      } else {
        throw new Error('Child skill index could not be found');
      }
    }
    return votingReputationClient.interface.functions.createDomainMotion.encode(
      [
        votingDomain,
        childSkillIdex,
        _action,
        _key,
        _value,
        _branchMask,
        _siblings,
      ],
    );
  },
  stakeMotionWithProofs: async ([
    _motionId,
    _vote,
    _amount,
    _key,
    _value,
    _branchMask,
    _siblings,
  ]: [
    BigNumberish,
    BigNumberish,
    BigNumberish,
    Arrayish,
    Arrayish,
    BigNumberish,
    Arrayish[],
  ]): Promise<string> => {
    const { domainId } = await votingReputationClient.getMotion(_motionId);
    const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
      colonyClient,
      domainId,
      ColonyRole.Arbitration,
      votingReputationClient.address,
    );
    return votingReputationClient.interface.functions.stakeMotion.encode([
      _motionId,
      permissionDomainId,
      childSkillIndex,
      _vote,
      _amount,
      _key,
      _value,
      _branchMask,
      _siblings,
    ]);
  },
  escalateMotionWithProofs: async ([
    _motionId,
    _newDomainId,
    _key,
    _value,
    _branchMask,
    _siblings,
  ]: [
    BigNumberish,
    BigNumberish, // parent, or ancestor, domain id
    Arrayish,
    Arrayish,
    BigNumberish,
    Arrayish[],
  ]): Promise<string> => {
    const { domainId } = await votingReputationClient.getMotion(_motionId);
    const motionDomainChildSkillIdIndex = await getChildIndex(
      colonyClient,
      bigNumberify(_newDomainId),
      domainId,
    );
    if (motionDomainChildSkillIdIndex.toNumber() === -1) {
      throw new Error('Child skill index could not be found');
    }
    return votingReputationClient.interface.functions.escalateMotion.encode([
      _motionId,
      _newDomainId,
      motionDomainChildSkillIdIndex,
      _key,
      _value,
      _branchMask,
      _siblings,
    ]);
  },
  claimRewardWithProofs: async ([_motionId, _staker, _vote]: [
    BigNumberish,
    string,
    BigNumberish,
  ]): Promise<string> => {
    const { domainId } = await votingReputationClient.getMotion(_motionId);
    const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
      colonyClient,
      domainId,
      ColonyRole.Arbitration,
      votingReputationClient.address,
    );
    return votingReputationClient.interface.functions.claimReward.encode([
      _motionId,
      permissionDomainId,
      childSkillIndex,
      _staker,
      _vote,
    ]);
  },
});

/* eslint-enable */
