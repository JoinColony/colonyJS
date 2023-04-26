import { Extension } from '../constants';
import { assertExhaustiveSwitch } from '../utils';
import { ColonyVersion, ExtensionVersion } from '.';
import {
  coinMachineIncompatibilityMap,
  CoinMachineVersion,
} from './CoinMachine';
import {
  EvaluatedExpenditureVersion,
  evaluatedExpenditureIncompatibilityMap,
} from './EvaluatedExpenditure';
import {
  FundingQueueVersion,
  fundingQueueIncompatibilityMap,
} from './FundingQueue';
import {
  VotingReputationVersion,
  votingReputationIncompatibilityMap,
} from './VotingReputation';
import {
  OneTxPaymentVersion,
  oneTxPaymentIncompatibilityMap,
} from './OneTxPayment';
import {
  ReputationBootstrapperVersion,
  reputationBootstrapperIncompatibilityMap,
} from './ReputationBootstrapper';
import {
  StakedExpenditureVersion,
  stakedExpenditureIncompatibilityMap,
} from './StakedExpenditure';
import {
  StreamingPaymentsVersion,
  streamingPaymentsIncompatibilityMap,
} from './StreamingPayments';
import {
  TokenSupplierVersion,
  tokenSupplierIncompatibilityMap,
} from './TokenSupplier';
import { WhitelistVersion, whitelistIncompatibilityMap } from './Whitelist';

/**
 * Checks the compatibility of an extension version with a colony version it requests to be installed in
 * Returns `true` if an extension version is compatible with the given colony version
 *
 * @param extension A valid `Extension` contract name
 * @param extensionVersion The version of the extension to check against the colony
 * @param colonyVersion The version of the colony to check for
 *
 * @returns indication whether extension in given version is compatible with colony at the given version
 */
export const isExtensionCompatible = (
  extension: Extension,
  extensionVersion: ExtensionVersion,
  colonyVersion: ColonyVersion,
) => {
  switch (extension) {
    case Extension.CoinMachine: {
      const map =
        coinMachineIncompatibilityMap[extensionVersion as CoinMachineVersion];
      return !!map && !map.includes(colonyVersion);
    }
    case Extension.EvaluatedExpenditure: {
      const map =
        evaluatedExpenditureIncompatibilityMap[
          extensionVersion as EvaluatedExpenditureVersion
        ];
      return !!map && !map.includes(colonyVersion);
    }
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
    case Extension.Whitelist: {
      const map =
        whitelistIncompatibilityMap[extensionVersion as WhitelistVersion];
      return !!map && !map.includes(colonyVersion);
    }
    default:
      return assertExhaustiveSwitch(
        extension,
        'Could not find extension with name',
      );
  }
};
