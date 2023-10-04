import { providers, Wallet } from 'ethers';
import 'cross-fetch/dist/node-polyfill.js';

import {
  ColonyNetwork,
  ColonyRole,
  ColonyRpcEndpoint,
  ColonyToken,
  SupportedExtension,
} from '../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

if (!process.env.PRIVATE_KEY) {
  throw new Error(
    `Please provide a valid private key as an environment variable: PRIVATE_KEY`,
  );
}

// Deploy a Colony with everything that's needed
const start = async () => {
  const signer = new Wallet(process.env.PRIVATE_KEY as string).connect(
    provider,
  );
  const colonyNetwork = new ColonyNetwork(signer);

  // ** 1st transaction **

  // This command deploys a Colony and creates a Token and a TokenAuthority contact
  // The TokenAuthority can be seen as a "permission-manager" for the token
  const [{ colonyAddress, tokenAddress, tokenAuthorityAddress }] =
    await colonyNetwork
      .createColony(
        // Define the token that will be deployed alongside the Colony (ERC20)
        { name: 'Test token', symbol: 'TOT' },
        // Make this name unique. The name below is likely to be taken already
        'createcolonytest6',
      )
      .tx()
      .mined();

  if (!colonyAddress || !tokenAddress || !tokenAuthorityAddress) {
    return;
  }

  console.info('Token address', tokenAddress);
  console.info('Colony address', colonyAddress);
  console.info('Token authority address', tokenAuthorityAddress);

  // Instantiate colony
  const colony = await colonyNetwork.getColony(colonyAddress);

  // ** 2nd and 3rd transaction **

  // Set the token's authority to the freshly deployed one
  if (colony.token instanceof ColonyToken) {
    // TODO: MetaTxToken might support multicall in the future
    await colony.token.setAuthority(tokenAuthorityAddress).tx().mined();
    await colony.token.setOwner(colony.address).tx().mined();
  }

  // ** 4th transaction **

  // Install OneTxPayment extension
  const [{ extensionId, version }] = await colony
    .installExtension(SupportedExtension.oneTx)
    .tx()
    .mined();
  if (!extensionId || !version) {
    return;
  }
  console.info('ExtensionId', extensionId);
  console.info('Extension version', version);

  // Update colony to see the newly installed extension
  await colony.updateExtensions();
  if (!colony.ext.oneTx) {
    console.error('Could not instantiate OneTx extension within Colony');
    return;
  }

  // ** 5th transaction **

  // Give Administration and Funding roles to OneTxPayment extension
  await colony
    .setRoles(colony.ext.oneTx.address, [
      ColonyRole.Administration,
      ColonyRole.Funding,
    ])
    .tx()
    .mined();

  console.info('Done :)');
};

start();
