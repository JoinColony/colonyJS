import type { Provider } from '@ethersproject/abstract-provider';

import { type BigNumber, type BigNumberish, type Signer } from 'ethers';

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

// We are using the smallest possible types here to avoid conflicts with extended/modified types
interface BaseContract {
  address: string;
  provider: Provider;
  signer?: Signer;
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
