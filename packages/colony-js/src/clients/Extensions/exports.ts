import { constants } from 'ethers';
import {
  type ExtensionVersion,
  type FundingQueueVersion,
  type MultisigPermissionsVersion,
  type OneTxPaymentVersion,
  type ReputationBootstrapperVersion,
  type StagedExpenditureVersion,
  type StakedExpenditureVersion,
  type StreamingPaymentsVersion,
  type TokenSupplierVersion,
  type VotingReputationVersion,
  Extension,
  getExtensionHash,
  isExtensionCompatible,
} from '@colony/core';
import { assertExhaustiveSwitch } from '@colony/core/utils';

import { type AugmentedIColony } from '../Core/augments/commonAugments.js';

import {
  getMultisigPermissionsClient,
  type AnyMultisigPermissionsClient,
} from './MultisigPermissions/exports.js';
import {
  getOneTxPaymentClient,
  type AnyOneTxPaymentClient,
} from './OneTxPayment/exports.js';
import {
  getReputationBootstrapperClient,
  type AnyReputationBootstrapperClient,
} from './ReputationBootstrapper/exports.js';
import {
  getVotingReputationClient,
  type AnyVotingReputationClient,
} from './VotingReputation/exports.js';
import {
  getStagedExpenditureClient,
  type AnyStagedExpenditureClient,
} from './StagedExpenditure/exports.js';
import {
  getStakedExpenditureClient,
  type AnyStakedExpenditureClient,
} from './StakedExpenditure/exports.js';
import {
  getStreamingPaymentsClient,
  type AnyStreamingPaymentsClient,
} from './StreamingPayments/exports.js';
import {
  getTokenSupplierClient,
  type AnyTokenSupplierClient,
} from './TokenSupplier/exports.js';

import getExtensionVersionClient from './ExtensionVersionClient.js';
import {
  type AnyFundingQueueClient,
  getFundingQueueClient,
} from './FundingQueue/exports.js';

const { AddressZero } = constants;

export * from './MultisigPermissions/exports.js';
export * from './OneTxPayment/exports.js';
export * from './StagedExpenditure/exports.js';
export * from './StakedExpenditure/exports.js';
export * from './StreamingPayments/exports.js';
export * from './TokenSupplier/exports.js';
export * from './VotingReputation/exports.js';

export type ExtensionClient =
  | AnyFundingQueueClient
  | AnyMultisigPermissionsClient
  | AnyOneTxPaymentClient
  | AnyReputationBootstrapperClient
  | AnyStagedExpenditureClient
  | AnyStakedExpenditureClient
  | AnyStreamingPaymentsClient
  | AnyTokenSupplierClient
  | AnyVotingReputationClient;

/** @internal */
export type GetExtensionClientReturns = {
  [Extension.FundingQueue]: AnyFundingQueueClient;
  [Extension.IVotingReputation]: AnyVotingReputationClient;
  [Extension.MultisigPermissions]: AnyMultisigPermissionsClient;
  [Extension.OneTxPayment]: AnyOneTxPaymentClient;
  [Extension.ReputationBootstrapper]: AnyReputationBootstrapperClient;
  [Extension.StagedExpenditure]: AnyStagedExpenditureClient;
  [Extension.StakedExpenditure]: AnyStakedExpenditureClient;
  [Extension.StreamingPayments]: AnyStreamingPaymentsClient;
  [Extension.TokenSupplier]: AnyTokenSupplierClient;
  [Extension.VotingReputation]: AnyVotingReputationClient;
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
    case Extension.FundingQueue: {
      return getFundingQueueClient(
        this,
        address,
        version as FundingQueueVersion,
      );
    }
    case Extension.MultisigPermissions: {
      return getMultisigPermissionsClient(
        this,
        address,
        version as MultisigPermissionsVersion,
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
    case Extension.ReputationBootstrapper: {
      return getReputationBootstrapperClient(
        this,
        address,
        version as ReputationBootstrapperVersion,
      );
    }
    case Extension.StagedExpenditure: {
      return getStagedExpenditureClient(
        this,
        address,
        version as StagedExpenditureVersion,
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
    default:
      return assertExhaustiveSwitch(
        extension,
        `Could not find extension with name ${extension}`,
      );
  }
}
