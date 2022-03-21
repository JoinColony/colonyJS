import { constants } from 'ethers';

import { ColonyVersion, getExtensionHash } from '../..';
import { assertExhaustiveSwitch } from '../../utils';
import { AugmentedIColony } from '../Core/augments/commonAugments';

import {
  getCoinMachineClient,
  coinMachineIncompatibilityMap,
  CoinMachineVersion,
  AnyCoinMachineClient,
} from './CoinMachine/exports';
import {
  getOneTxPaymentClient,
  oneTxPaymentIncompatibilityMap,
  AnyOneTxPaymentClient,
  OneTxPaymentVersion,
} from './OneTxPayment/exports';
import {
  getVotingReputationClient,
  votingReputationIncompatibilityMap,
  AnyVotingReputationClient,
  VotingReputationVersion,
} from './VotingReputation/exports';
import {
  getWhitelistClient,
  whitelistIncompatibilityMap,
  AnyWhitelistClient,
  WhitelistVersion,
} from './Whitelist/exports';
import getExtensionVersionClient from './ExtensionVersionClient';

const { AddressZero } = constants;

export * from './CoinMachine/exports';
export * from './OneTxPayment/exports';
export * from './VotingReputation/exports';
export * from './Whitelist/exports';

/// Extension contract names
export enum Extension {
  CoinMachine = 'CoinMachine',
  OneTxPayment = 'OneTxPayment',
  VotingReputation = 'VotingReputation',
  Whitelist = 'Whitelist',
}

export type ExtensionClient =
  | AnyCoinMachineClient
  | AnyOneTxPaymentClient
  | AnyVotingReputationClient
  | AnyWhitelistClient;

type ExtensionVersion =
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
      return !coinMachineIncompatibilityMap[
        extensionVersion as CoinMachineVersion
      ].includes(colonyVersion);
    }
    case Extension.OneTxPayment: {
      return !oneTxPaymentIncompatibilityMap[
        extensionVersion as OneTxPaymentVersion
      ].includes(colonyVersion);
    }
    case Extension.VotingReputation: {
      return !votingReputationIncompatibilityMap[
        extensionVersion as VotingReputationVersion
      ].includes(colonyVersion);
    }
    case Extension.Whitelist: {
      return !whitelistIncompatibilityMap[
        extensionVersion as WhitelistVersion
      ].includes(colonyVersion);
    }
    default:
      return assertExhaustiveSwitch(
        extension,
        'Could not find extension with name',
      );
  }
};

/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  extension: Extension.CoinMachine,
): Promise<AnyCoinMachineClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  extension: Extension.OneTxPayment,
): Promise<AnyOneTxPaymentClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  extension: Extension.VotingReputation,
): Promise<AnyVotingReputationClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  extension: Extension.Whitelist,
): Promise<AnyWhitelistClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  extension: Extension,
) {
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
