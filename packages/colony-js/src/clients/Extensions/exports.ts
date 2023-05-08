import { constants } from 'ethers';
import {
  type ExtensionVersion,
  type CoinMachineVersion,
  type EvaluatedExpenditureVersion,
  type FundingQueueVersion,
  type OneTxPaymentVersion,
  type ReputationBootstrapperVersion,
  type StakedExpenditureVersion,
  type StreamingPaymentsVersion,
  type TokenSupplierVersion,
  type VotingReputationVersion,
  type WhitelistVersion,
  Extension,
  getExtensionHash,
  isExtensionCompatible,
} from '@colony/core';
import { assertExhaustiveSwitch } from '@colony/core/utils';

import { AugmentedIColony } from '../Core/augments/commonAugments';

import {
  getCoinMachineClient,
  AnyCoinMachineClient,
} from './CoinMachine/exports';
import {
  getOneTxPaymentClient,
  AnyOneTxPaymentClient,
} from './OneTxPayment/exports';
import {
  getReputationBootstrapperClient,
  AnyReputationBootstrapperClient,
} from './ReputationBootstrapper/exports';
import {
  getVotingReputationClient,
  AnyVotingReputationClient,
} from './VotingReputation/exports';
import { getWhitelistClient, AnyWhitelistClient } from './Whitelist/exports';
import {
  getEvaluatedExpenditureClient,
  AnyEvaluatedExpenditureClient,
} from './EvaluatedExpenditure/exports';
import {
  getStakedExpenditureClient,
  AnyStakedExpenditureClient,
} from './StakedExpenditure/exports';
import {
  getStreamingPaymentsClient,
  AnyStreamingPaymentsClient,
} from './StreamingPayments/exports';
import {
  getTokenSupplierClient,
  AnyTokenSupplierClient,
} from './TokenSupplier/exports';

import getExtensionVersionClient from './ExtensionVersionClient';
import {
  AnyFundingQueueClient,
  getFundingQueueClient,
} from './FundingQueue/exports';

const { AddressZero } = constants;

export * from './CoinMachine/exports';
export * from './EvaluatedExpenditure/exports';
export * from './OneTxPayment/exports';
export * from './StakedExpenditure/exports';
export * from './StreamingPayments/exports';
export * from './TokenSupplier/exports';
export * from './VotingReputation/exports';
export * from './Whitelist/exports';

export type ExtensionClient =
  | AnyCoinMachineClient
  | AnyEvaluatedExpenditureClient
  | AnyFundingQueueClient
  | AnyOneTxPaymentClient
  | AnyReputationBootstrapperClient
  | AnyStakedExpenditureClient
  | AnyStreamingPaymentsClient
  | AnyTokenSupplierClient
  | AnyVotingReputationClient
  | AnyWhitelistClient;

/** @internal */
export type GetExtensionClientReturns = {
  [Extension.CoinMachine]: AnyCoinMachineClient;
  [Extension.EvaluatedExpenditure]: AnyEvaluatedExpenditureClient;
  [Extension.FundingQueue]: AnyFundingQueueClient;
  [Extension.IVotingReputation]: AnyVotingReputationClient;
  [Extension.OneTxPayment]: AnyOneTxPaymentClient;
  [Extension.ReputationBootstrapper]: AnyReputationBootstrapperClient;
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
    case Extension.FundingQueue: {
      return getFundingQueueClient(
        this,
        address,
        version as FundingQueueVersion,
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
