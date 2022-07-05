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
import getExtensionVersionClient from './ExtensionVersionClient';

const { AddressZero } = constants;

export * from './CoinMachine/exports';
export * from './OneTxPayment/exports';
export * from './VotingReputation/exports';
export * from './Whitelist/exports';

/** Extension contract names */
export enum Extension {
  CoinMachine = 'CoinMachine',
  OneTxPayment = 'OneTxPayment',
  VotingReputation = 'VotingReputation',
  Whitelist = 'Whitelist',
}

export const ExtensionVersions = {
  [Extension.CoinMachine]: COIN_MACHINE_VERSION_LATEST,
  [Extension.OneTxPayment]: ONE_TX_PAYMENT_VERSION_LATEST,
  [Extension.VotingReputation]: VOTING_REPUTATION_VERSION_LATEST,
  [Extension.Whitelist]: WHITELIST_VERSION_LATEST,
};

export type ExtensionClient =
  | AnyCoinMachineClient
  | AnyOneTxPaymentClient
  | AnyVotingReputationClient
  | AnyWhitelistClient;

/** @internal */
export type ExtensionVersion =
  | CoinMachineVersion
  | OneTxPaymentVersion
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
    case Extension.OneTxPayment: {
      const map =
        oneTxPaymentIncompatibilityMap[extensionVersion as OneTxPaymentVersion];
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
  [Extension.OneTxPayment]: AnyOneTxPaymentClient;
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
  switch (extension) {
    case Extension.CoinMachine: {
      const version = versionBN.toNumber() as CoinMachineVersion;
      return getCoinMachineClient(this, address, version);
    }
    case Extension.OneTxPayment: {
      const version = versionBN.toNumber() as OneTxPaymentVersion;
      return getOneTxPaymentClient(this, address, version);
    }
    case Extension.VotingReputation: {
      const version = versionBN.toNumber() as VotingReputationVersion;
      return getVotingReputationClient(this, address, version);
    }
    case Extension.Whitelist: {
      const version = versionBN.toNumber() as WhitelistVersion;
      return getWhitelistClient(this, address, version);
    }
    default:
      return assertExhaustiveSwitch(
        extension,
        'Could not find extension with name',
      );
  }
}
