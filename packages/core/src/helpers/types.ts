import { BigNumber, BigNumberish, BaseContract } from 'ethers';

export interface CommonDomain {
  skillId: BigNumber;
  fundingPotId: BigNumber;
}

export interface CommonSkill {
  children: BigNumber[];
}

export interface CommonFundingPot {
  associatedType: number;
  associatedTypeId: BigNumber;
}

export interface CommonPayment {
  domainId: BigNumber;
}

export interface CommonTask {
  domainId: BigNumber;
}

export interface CommonNetwork extends BaseContract {
  getChildSkillId(
    skillId: BigNumberish,
    childSkillIndex: BigNumberish,
  ): Promise<BigNumber>;
  getReputationRootHash(): Promise<string>;
  getSkill(id: BigNumberish): Promise<CommonSkill>;
}

export interface CommonColony extends BaseContract {
  getDomain(id: BigNumberish): Promise<CommonDomain>;
  getDomainCount(): Promise<BigNumber>;
  getDomainFromFundingPot?(fundingPotId: BigNumberish): Promise<BigNumber>;
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
