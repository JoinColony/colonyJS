import type { BigNumberish } from 'ethers';

import type { BaseContract } from '../types.js';

export interface CommonDomain {
  skillId: bigint;
  fundingPotId: bigint;
}

export interface CommonSkill {
  children: bigint[];
}

export interface CommonFundingPot {
  associatedType: bigint;
  associatedTypeId: bigint;
}

export interface CommonPayment {
  domainId: bigint;
}

export interface CommonTask {
  domainId: bigint;
}

export interface CommonNetwork extends BaseContract {
  getChildSkillId(
    skillId: BigNumberish,
    childSkillIndex: BigNumberish,
  ): Promise<bigint>;
  getReputationRootHash(): Promise<string>;
  getSkill(id: BigNumberish): Promise<CommonSkill>;
}

export interface CommonColony extends BaseContract {
  getDomain(id: BigNumberish): Promise<CommonDomain>;
  getDomainCount(): Promise<bigint>;
  getDomainFromFundingPot?(fundingPotId: BigNumberish): Promise<bigint>;
  getFundingPot(id: BigNumberish): Promise<CommonFundingPot>;
  getPayment(id: BigNumberish): Promise<CommonPayment>;
  getTask(id: BigNumberish): Promise<CommonTask>;
  hasUserRole(
    user: string,
    domainId: BigNumberish,
    role: BigNumberish,
  ): Promise<boolean>;
}

export type CommonVotingReputation = BaseContract;
