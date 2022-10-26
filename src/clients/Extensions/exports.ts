import { constants } from 'ethers';

import { assertExhaustiveSwitch } from '../../utils';
import { getExtensionHash } from '../../helpers';
import { AugmentedIColony } from '../Core/augments/commonAugments';
import { ColonyVersion } from '../Core/exports';

import {
  getCoinMachineClient,
  coinMachineIncompatibilityMap,
  CoinMachineVersion,
  AnyCoinMachineClient,
  COIN_MACHINE_VERSION_LATEST,
} from './CoinMachine/exports';
import {
  getOneTxPaymentClient,
  oneTxPaymentIncompatibilityMap,
  AnyOneTxPaymentClient,
  OneTxPaymentVersion,
  ONE_TX_PAYMENT_VERSION_LATEST,
} from './OneTxPayment/exports';
import {
  getVotingReputationClient,
  votingReputationIncompatibilityMap,
  AnyVotingReputationClient,
  VotingReputationVersion,
  VOTING_REPUTATION_VERSION_LATEST,
} from './VotingReputation/exports';
import {
  getWhitelistClient,
  whitelistIncompatibilityMap,
  AnyWhitelistClient,
  WhitelistVersion,
  WHITELIST_VERSION_LATEST,
} from './Whitelist/exports';
import {
  getEvaluatedExpenditureClient,
  evaluatedExpenditureIncompatibilityMap,
  AnyEvaluatedExpenditureClient,
  EvaluatedExpenditureVersion,
  EVALUATED_EXPENDITURE_VERSION_LATEST,
} from './EvaluatedExpenditure/exports';
import {
  getStakedExpenditureClient,
  stakedExpenditureIncompatibilityMap,
  AnyStakedExpenditureClient,
  StakedExpenditureVersion,
  STAKED_EXPENDITURE_VERSION_LATEST,
} from './StakedExpenditure/exports';
import {
  getStreamingPaymentsClient,
  streamingPaymentsIncompatibilityMap,
  AnyStreamingPaymentsClient,
  StreamingPaymentsVersion,
  STREAMING_PAYMENTS_VERSION_LATEST,
} from './StreamingPayments/exports';
import {
  getTokenSupplierClient,
  tokenSupplierIncompatibilityMap,
  AnyTokenSupplierClient,
  TokenSupplierVersion,
  TOKEN_SUPPLIER_VERSION_LATEST,
} from './TokenSupplier/exports';

import getExtensionVersionClient from './ExtensionVersionClient';

const { AddressZero } = constants;

export * from './CoinMachine/exports';
export * from './EvaluatedExpenditure/exports';
export * from './OneTxPayment/exports';
export * from './StakedExpenditure/exports';
export * from './StreamingPayments/exports';
export * from './TokenSupplier/exports';
export * from './VotingReputation/exports';
export * from './Whitelist/exports';

/** Extension contract names */
export enum Extension {
  CoinMachine = 'CoinMachine',
  EvaluatedExpenditure = 'EvaluatedExpenditure',
  // The VotingReputation contract was refactored in flwss3 to also be an interface (akin to IColony)
  IVotingReputation = 'IVotingReputation',
  OneTxPayment = 'OneTxPayment',
  StakedExpenditure = 'StakedExpenditure',
  StreamingPayments = 'StreamingPayments',
  TokenSupplier = 'TokenSupplier',
  VotingReputation = 'VotingReputation',
  Whitelist = 'Whitelist',
}

export const ExtensionVersions = {
  [Extension.CoinMachine]: COIN_MACHINE_VERSION_LATEST,
  [Extension.EvaluatedExpenditure]: EVALUATED_EXPENDITURE_VERSION_LATEST,
  [Extension.IVotingReputation]: VOTING_REPUTATION_VERSION_LATEST,
  [Extension.OneTxPayment]: ONE_TX_PAYMENT_VERSION_LATEST,
  [Extension.StakedExpenditure]: STAKED_EXPENDITURE_VERSION_LATEST,
  [Extension.StreamingPayments]: STREAMING_PAYMENTS_VERSION_LATEST,
  [Extension.TokenSupplier]: TOKEN_SUPPLIER_VERSION_LATEST,
  [Extension.VotingReputation]: VOTING_REPUTATION_VERSION_LATEST,
  [Extension.Whitelist]: WHITELIST_VERSION_LATEST,
};

export type ExtensionClient =
  | AnyCoinMachineClient
  | AnyEvaluatedExpenditureClient
  | AnyOneTxPaymentClient
  | AnyStakedExpenditureClient
  | AnyStreamingPaymentsClient
  | AnyTokenSupplierClient
  | AnyVotingReputationClient
  | AnyWhitelistClient;

/** @internal */
export type ExtensionVersion =
  | CoinMachineVersion
  | EvaluatedExpenditureVersion
  | OneTxPaymentVersion
  | StakedExpenditureVersion
  | StreamingPaymentsVersion
  | TokenSupplierVersion
  | VotingReputationVersion
  | WhitelistVersion;

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
          extensionVersion as StreamingPaymentsVersion
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

/** @internal */
export type GetExtensionClientReturns = {
  [Extension.CoinMachine]: AnyCoinMachineClient;
  [Extension.EvaluatedExpenditure]: AnyEvaluatedExpenditureClient;
  [Extension.IVotingReputation]: AnyVotingReputationClient;
  [Extension.OneTxPayment]: AnyOneTxPaymentClient;
  [Extension.StakedExpenditure]: AnyStakedExpenditureClient;
  [Extension.StreamingPayments]: AnyStreamingPaymentsClient;
  [Extension.TokenSupplier]: AnyTokenSupplierClient;
  [Extension.VotingReputation]: AnyVotingReputationClient;
  [Extension.Whitelist]: AnyWhitelistClient;
};

// NOTE: TypeScript has a problem with narrowing down this distinction.
// See this SO anwer: https://stackoverflow.com/a/60469213/1525722
// WARN: So make sure you'll get the return type right in your switch arms!
/** @internal */
export async function getExtensionClient<T extends Extension>(
  extension: T,
): Promise<GetExtensionClientReturns[T]>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  extension: Extension,
): Promise<GetExtensionClientReturns[Extension]> {
  const address = await this.networkClient.getExtensionInstallation(
    getExtensionHash(extension),
    this.address,
  );
  if (address === AddressZero) {
    throw new Error(`${extension} extension is not installed for this Colony`);
  }
  const extensionVersionClient = getExtensionVersionClient(
    address,
    this.signer || this.provider,
  );
  const versionBN = await extensionVersionClient.version();
  const version = versionBN.toNumber();

  if (
    !isExtensionCompatible(
      extension,
      version as ExtensionVersion,
      this.clientVersion,
    )
  ) {
    throw new Error(
      `Extension ${extension} in version ${version} is not compatible with Colony version ${this.clientVersion}`,
    );
  }

  switch (extension) {
    case Extension.CoinMachine: {
      return getCoinMachineClient(this, address, version as CoinMachineVersion);
    }
    case Extension.EvaluatedExpenditure: {
      return getEvaluatedExpenditureClient(
        this,
        address,
        version as EvaluatedExpenditureVersion,
      );
    }
    case Extension.IVotingReputation: {
      return getVotingReputationClient(
        this,
        address,
        version as VotingReputationVersion,
      );
    }
    case Extension.OneTxPayment: {
      return getOneTxPaymentClient(
        this,
        address,
        version as OneTxPaymentVersion,
      );
    }
    case Extension.StakedExpenditure: {
      return getStakedExpenditureClient(
        this,
        address,
        version as StakedExpenditureVersion,
      );
    }
    case Extension.StreamingPayments: {
      return getStreamingPaymentsClient(
        this,
        address,
        version as StreamingPaymentsVersion,
      );
    }
    case Extension.TokenSupplier: {
      return getTokenSupplierClient(
        this,
        address,
        version as TokenSupplierVersion,
      );
    }
    case Extension.VotingReputation: {
      return getVotingReputationClient(
        this,
        address,
        version as VotingReputationVersion,
      );
    }
    case Extension.Whitelist: {
      return getWhitelistClient(this, address, version as WhitelistVersion);
    }
    default:
      return assertExhaustiveSwitch(
        extension,
        'Could not find extension with name',
      );
  }
}
