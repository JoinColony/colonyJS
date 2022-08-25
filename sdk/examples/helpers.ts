import { Colony } from '../src/ColonyNetwork';
import { ColonyRole, Extension, Id } from '../src/constants';
import { w } from '../src';

// Helper to set up the OneTxPayment extension. This is usually already done for Colonies deployed with the Dapp.
export const setupOneTxPaymentExtension = async (colony: Colony) => {
  const colonyClient = colony.getInternalColonyClient();
  let oneTxExtension;

  try {
    oneTxExtension = await colonyClient.getExtensionClient(
      Extension.OneTxPayment,
    );
  } catch (e) {
    // Install the OneTxPaymentExtension for the Colony
    const installTx = await colonyClient.installExtensionChecked(
      Extension.OneTxPayment,
    );
    await installTx.wait();
    // Get the address of the deployed extension
    oneTxExtension = await colonyClient.getExtensionClient(
      Extension.OneTxPayment,
    );
    // Set the required roles for the extension
    const rolesTx = await colonyClient.setUserRolesWithProofs(
      oneTxExtension.address,
      Id.RootDomain,
      [ColonyRole.Administration, ColonyRole.Funding],
    );
    await rolesTx.wait();
  }
};

export const setupVotingReputationExtension = async (colony: Colony) => {
  const colonyClient = colony.getInternalColonyClient();

  let votingReputationExtension;

  try {
    votingReputationExtension = await colonyClient.getExtensionClient(
      Extension.VotingReputation,
    );
  } catch (e) {
    console.error(e);
    // Install the OneTxPaymentExtension for the Colony
    const installTx = await colonyClient.installExtensionChecked(
      Extension.VotingReputation,
    );
    await installTx.wait();
    // Get the address of the deployed extension
    votingReputationExtension = await colonyClient.getExtensionClient(
      Extension.VotingReputation,
    );
    // Set the required roles for the extension
    // Note: none of the roles here are really _required_. For Motions only the permissions that are needed for functionality that requires it and you want to support with Motions
    const rolesTx = await colonyClient.setUserRolesWithProofs(
      votingReputationExtension.address,
      Id.RootDomain,
      [
        ColonyRole.Recovery,
        ColonyRole.Root,
        ColonyRole.Arbitration,
        ColonyRole.Architecture,
        ColonyRole.Funding,
        ColonyRole.Administration,
      ],
    );
    await rolesTx.wait();

    // For an explanation of all the parameters see here https://colony.gitbook.io/colony-network/interfaces/votingreputation#initialise-uint256-_totalstakefraction-uint256-_voterrewardfraction-uint256-_userminstakefraction-ui and here https://colony.gitbook.io/colony/extensions/governance/parameters
    const initTx = await votingReputationExtension.initialise(
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
