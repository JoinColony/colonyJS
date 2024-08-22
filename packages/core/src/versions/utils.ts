import { Extension } from '../constants.js';
import { assertExhaustiveSwitch } from '../utils/index.js';
import {
  fundingQueueIncompatibilityMap,
  FundingQueueVersion,
} from './FundingQueue.js';
import { ExtensionVersion } from './index.js';
import {
  oneTxPaymentIncompatibilityMap,
  OneTxPaymentVersion,
} from './OneTxPayment.js';
import {
  reputationBootstrapperIncompatibilityMap,
  ReputationBootstrapperVersion,
} from './ReputationBootstrapper.js';
import {
  stagedExpenditureIncompatibilityMap,
  StagedExpenditureVersion,
} from './StagedExpenditure.js';
import {
  stakedExpenditureIncompatibilityMap,
  StakedExpenditureVersion,
} from './StakedExpenditure.js';
import {
  streamingPaymentsIncompatibilityMap,
  StreamingPaymentsVersion,
} from './StreamingPayments.js';
import {
  tokenSupplierIncompatibilityMap,
  TokenSupplierVersion,
} from './TokenSupplier.js';
import {
  votingReputationIncompatibilityMap,
  VotingReputationVersion,
} from './VotingReputation.js';

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export const createContractVersionArray = <T extends number>(last: T) => {
  return Array.from(Array(last - 1)).map(
    (i) => (i + 1) as Range<1, typeof last>,
  );
};

export const getExtensionIncompatibilityMap = (
  extension: Extension,
  extensionVersion: ExtensionVersion,
) => {
  switch (extension) {
    case Extension.FundingQueue: {
      return fundingQueueIncompatibilityMap[
        extensionVersion as FundingQueueVersion
      ];
    }
    case Extension.IVotingReputation: {
      return votingReputationIncompatibilityMap[
        extensionVersion as VotingReputationVersion
      ];
    }
    case Extension.OneTxPayment: {
      return oneTxPaymentIncompatibilityMap[
        extensionVersion as OneTxPaymentVersion
      ];
    }
    case Extension.ReputationBootstrapper: {
      return reputationBootstrapperIncompatibilityMap[
        extensionVersion as ReputationBootstrapperVersion
      ];
    }
    case Extension.StagedExpenditure: {
      return stagedExpenditureIncompatibilityMap[
        extensionVersion as StagedExpenditureVersion
      ];
    }
    case Extension.StakedExpenditure: {
      return stakedExpenditureIncompatibilityMap[
        extensionVersion as StakedExpenditureVersion
      ];
    }
    case Extension.StreamingPayments: {
      return streamingPaymentsIncompatibilityMap[
        extensionVersion as StreamingPaymentsVersion
      ];
    }
    case Extension.TokenSupplier: {
      return tokenSupplierIncompatibilityMap[
        extensionVersion as TokenSupplierVersion
      ];
    }
    case Extension.VotingReputation: {
      return votingReputationIncompatibilityMap[
        extensionVersion as VotingReputationVersion
      ];
    }
    default:
      return assertExhaustiveSwitch(
        extension,
        'Could not find extension with name',
      );
  }
};
