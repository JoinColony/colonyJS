import { getExtensionHash } from '@colony/core';

import { Colony, OneTxPayment, VotingReputation } from '../src/ColonyNetwork';
import {
  ColonyRole,
  Extension,
  w,
  isExtensionCompatible,
  ExtensionVersions,
} from '../src';

// Helper to set up the OneTxPayment extension. This is usually already done for Colonies deployed with the Dapp.
export const setupOneTxPaymentExtension = async (colony: Colony) => {
  const colonyContract = colony.getInternalColonyContract();

  if (!colony.ext.oneTx) {
    // Install the OneTxPaymentExtension for the Colony
    if (
      !isExtensionCompatible(
        Extension.OneTxPayment,
        ExtensionVersions[Extension.OneTxPayment],
        colony.version,
      )
    ) {
      throw new Error(
        `OneTxPayment extension of version ${
          ExtensionVersions[Extension.OneTxPayment]
        } is not compatible with the installed Colony version ${
          colony.version
        }`,
      );
    }
    const installTx = await colonyContract.installExtension(
      getExtensionHash(Extension.OneTxPayment),
      ExtensionVersions[Extension.OneTxPayment],
    );
    await installTx.wait();

    // Refresh Colony extension installations
    await colony.updateExtensions();

    if (!colony.ext.oneTx) {
      throw new Error('OneTxPayment extension could not be installed');
    }

    const oneTx = colony.ext.oneTx as OneTxPayment;

    // Give OneTxPayment extension the necessary roles
    await colony
      .setRoles(oneTx.address, [ColonyRole.Administration, ColonyRole.Funding])
      .tx();
  }
};

export const setupVotingReputationExtension = async (colony: Colony) => {
  const colonyContract = colony.getInternalColonyContract();

  if (!colony.ext.motions) {
    // Install the VotingReputation for the Colony
    if (
      !isExtensionCompatible(
        Extension.VotingReputation,
        ExtensionVersions[Extension.VotingReputation],
        colony.version,
      )
    ) {
      throw new Error(
        `VotingReputation extension of version ${
          ExtensionVersions[Extension.VotingReputation]
        } is not compatible with the installed Colony version ${
          colony.version
        }`,
      );
    }
    const installTx = await colonyContract.installExtension(
      getExtensionHash(Extension.VotingReputation),
      ExtensionVersions[Extension.VotingReputation],
    );
    await installTx.wait();

    // Refresh Colony extension installations
    await colony.updateExtensions();

    if (!colony.ext.motions) {
      throw new Error('OneTxPayment extension could not be installed');
    }

    const motions = colony.ext.motions as VotingReputation;

    // Set the required roles for the extension
    // Note: none of the roles here are really _required_. For Motions only the permissions that are needed for functionality that requires it and you want to support with Motions
    await colony
      .setRoles(motions.address, [
        ColonyRole.Recovery,
        ColonyRole.Root,
        ColonyRole.Arbitration,
        ColonyRole.Architecture,
        ColonyRole.Funding,
        ColonyRole.Administration,
      ])
      .tx();

    // For an explanation of all the parameters see here https://colony.gitbook.io/colony-network/interfaces/votingreputation#initialise-uint256-_totalstakefraction-uint256-_voterrewardfraction-uint256-_userminstakefraction-ui and here https://colony.gitbook.io/colony/extensions/governance/parameters
    const initTx = await motions
      .getInternalVotingReputationContract()
      .initialise(
        w`0.01`,
        w`0.2`,
        w`0.01`,
        w`0.7`,
        6 * 60,
        6 * 60,
        6 * 60,
        6 * 60,
      );

    await initTx.wait();
  }
};
