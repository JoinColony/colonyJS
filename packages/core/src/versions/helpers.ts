import { Extension } from '../constants.js';
import { assertExhaustiveSwitch } from '../utils/index.js';
import { ColonyVersion, ExtensionVersion } from './index.js';
import {
  FundingQueueVersion,
  fundingQueueIncompatibilityMap,
} from './FundingQueue.js';
import {
  VotingReputationVersion,
  votingReputationIncompatibilityMap,
} from './VotingReputation.js';
import {
  OneTxPaymentVersion,
  oneTxPaymentIncompatibilityMap,
} from './OneTxPayment.js';
import {
  ReputationBootstrapperVersion,
  reputationBootstrapperIncompatibilityMap,
} from './ReputationBootstrapper.js';
import {
  StagedExpenditureVersion,
  stagedExpenditureIncompatibilityMap,
} from './StagedExpenditure.js';
import {
  StakedExpenditureVersion,
  stakedExpenditureIncompatibilityMap,
} from './StakedExpenditure.js';
import {
  StreamingPaymentsVersion,
  streamingPaymentsIncompatibilityMap,
} from './StreamingPayments.js';
import {
  TokenSupplierVersion,
  tokenSupplierIncompatibilityMap,
} from './TokenSupplier.js';

/**
 * Checks the compatibility of an extension version with a colony version it requests to be installed in
 * Returns `true` if an extension version is compatible with the given colony version
 *
 * @param extension - A valid `Extension` contract name
 * @param extensionVersion - The version of the extension to check against the colony
 * @param colonyVersion - The version of the colony to check for
 *
 * @returns indication whether extension in given version is compatible with colony at the given version
 */
export const isExtensionCompatible = (
  extension: Extension,
  extensionVersion: ExtensionVersion,
  colonyVersion: ColonyVersion,
) => {
  switch (extension) {
    case Extension.FundingQueue: {
      const map =
        fundingQueueIncompatibilityMap[extensionVersion as FundingQueueVersion];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.IVotingReputation: {
      const map =
        votingReputationIncompatibilityMap[
          extensionVersion as VotingReputationVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.OneTxPayment: {
      const map =
        oneTxPaymentIncompatibilityMap[extensionVersion as OneTxPaymentVersion];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.ReputationBootstrapper: {
      const map =
        reputationBootstrapperIncompatibilityMap[
          extensionVersion as ReputationBootstrapperVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.StagedExpenditure: {
      const map =
        stagedExpenditureIncompatibilityMap[
          extensionVersion as StagedExpenditureVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.StakedExpenditure: {
      const map =
        stakedExpenditureIncompatibilityMap[
          extensionVersion as StakedExpenditureVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.StreamingPayments: {
      const map =
        streamingPaymentsIncompatibilityMap[
          extensionVersion as StreamingPaymentsVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.TokenSupplier: {
      const map =
        tokenSupplierIncompatibilityMap[
          extensionVersion as TokenSupplierVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.VotingReputation: {
      const map =
        votingReputationIncompatibilityMap[
          extensionVersion as VotingReputationVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
    default:
      return assertExhaustiveSwitch(
        extension,
        'Could not find extension with name',
      );
  }
};
