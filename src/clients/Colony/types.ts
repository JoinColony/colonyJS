import { BigNumber } from 'ethers/utils';

export interface ReputationOracleResponse {
  branchMask: string;
  siblings: string[];
  key: string;
  value: string;
  reputationAmount: BigNumber;
}
