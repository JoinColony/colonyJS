import { COLONY_VERSIONS } from './IColony.js';
import { ColonyVersion, ExtensionVersion } from './index.js';
import { assertExhaustiveSwitch } from '../utils/index.js';
import {
  fundingQueueIncompatibilityMap,
  FundingQueueVersion,
} from './FundingQueue.js';
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
import { Extension } from '../constants.js';

const getExtensionIncompatibilityMap = (
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
): boolean => {
  const map = getExtensionIncompatibilityMap(extension, extensionVersion);

  return !!map && !map.includes(colonyVersion);
};

/**
 * Calculates and returns the lowest compatible colony version for a given version of an extension
 *
 * @param extension - A valid `Extension` contract name
 * @param extensionVersion - The version of the extension to check
 *
 * @returns the lowest compatible colony version for a given version of an extension
 */
export const getExtensionLowestCompatibleColonyVersion = (
  extension: Extension,
  extensionVersion: ExtensionVersion,
): ColonyVersion => {
  const map = getExtensionIncompatibilityMap(extension, extensionVersion);

  if (!map) {
    throw new Error(
      `Could not find incompatibility map for extension "${extension}" with version: ${extensionVersion}`,
    );
  }

  const colonyVersion = COLONY_VERSIONS.find(
    (v) => v === map[map.length - 1] + 1,
  );

  if (colonyVersion === undefined || null) {
    throw new Error(
      `No compatible colony version found for extension "${extension}" with version: ${extensionVersion}`,
    );
  }

  return colonyVersion;
};
