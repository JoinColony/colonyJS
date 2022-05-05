import { Colony } from '../src/ColonyNetwork';
import { ColonyRole, Extension, Id } from '../src/constants';

// Helper to set up the OneTxPayment extension. This is usually already done for Colonies deployed with the Dapp.
export const setupOneTxPaymentExtension = async (colony: Colony) => {
  // eslint-disable-next-line no-underscore-dangle
  const colonyClient = colony._getColonyClient();
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
