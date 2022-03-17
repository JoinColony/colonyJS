import { constants } from 'ethers';

import { getExtensionHash } from '../..';
import { assertExhaustiveSwitch } from '../../utils';
import { AugmentedIColony } from '../Core/augments/commonAugments';

import {
  getCoinMachineClient,
  CoinMachineVersion,
  AnyCoinMachineClient,
} from './CoinMachine/exports';
import {
  AnyOneTxPaymentClient,
  getOneTxPaymentClient,
  OneTxPaymentVersion,
} from './OneTxPayment/exports';
import {
  AnyVotingReputationClient,
  getVotingReputationClient,
  VotingReputationVersion,
} from './VotingReputation/exports';
import {
  AnyWhitelistClient,
  getWhitelistClient,
  WhitelistVersion,
} from './Whitelist/exports';
import getExtensionVersionClient from './ExtensionVersionClient';

const { AddressZero } = constants;

export * from './CoinMachine/exports';
export * from './OneTxPayment/exports';
export * from './VotingReputation/exports';
export * from './Whitelist/exports';

/// Extension contract names
export enum Extensions {
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

// TODO: check compatibility here and at the place where it's deployed
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  name: Extensions.CoinMachine,
): Promise<AnyCoinMachineClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  name: Extensions.OneTxPayment,
): Promise<AnyOneTxPaymentClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  name: Extensions.VotingReputation,
): Promise<AnyVotingReputationClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  name: Extensions.Whitelist,
): Promise<AnyWhitelistClient>;
/** @internal */
export async function getExtensionClient(
  this: AugmentedIColony,
  name: Extensions,
) {
  const address = await this.networkClient.getExtensionInstallation(
    getExtensionHash(name),
    this.address,
  );
  if (address === AddressZero) {
    throw new Error(`${name} extension is not installed for this Colony`);
  }
  const extensionVersionClient = getExtensionVersionClient(
    address,
    this.signer || this.provider,
  );
  const versionBN = await extensionVersionClient.version();
  switch (name) {
    case Extensions.CoinMachine: {
      const version = versionBN.toNumber() as CoinMachineVersion;
      return getCoinMachineClient(this, address, version);
    }
    case Extensions.OneTxPayment: {
      const version = versionBN.toNumber() as OneTxPaymentVersion;
      return getOneTxPaymentClient(this, address, version);
    }
    case Extensions.VotingReputation: {
      const version = versionBN.toNumber() as VotingReputationVersion;
      return getVotingReputationClient(this, address, version);
    }
    case Extensions.Whitelist: {
      const version = versionBN.toNumber() as WhitelistVersion;
      return getWhitelistClient(this, address, version);
    }
    default:
      return assertExhaustiveSwitch(name);
  }
}
