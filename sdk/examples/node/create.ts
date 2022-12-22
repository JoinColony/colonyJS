import { providers, Wallet } from 'ethers';

import {
  ColonyNetwork,
  ColonyRole,
  ColonyRpcEndpoint,
  ColonyToken,
  SupportedExtension,
} from '../../src';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

// Deploy a Colony with everything that's needed
const start = async () => {
  const signer = new Wallet(process.env.PRIVATE_KEY as string).connect(
    provider,
  );
  const colonyNetwork = await ColonyNetwork.init(signer);
  // Create token to be used with Colony
  const [{ tokenAddress }] = await colonyNetwork
    .deployToken('Test token', 'TOT')
    .tx();
  console.info('Token address', tokenAddress);
  if (!tokenAddress) {
    return;
  }
  // Create actual colony (deploys Colony contract)
  const [{ colonyAddress }] = await colonyNetwork
    .createColony(tokenAddress, 'createcolonytest3')
    .tx();
  if (!colonyAddress) {
    return;
  }
  console.info('Colony address', colonyAddress);
  // Instantiate colony and token
  const colony = await colonyNetwork.getColony(colonyAddress);
  // Deploy TokenAuthority
  const [{ tokenAuthorityAddress }] = await colony.deployTokenAuthority().tx();
  if (!tokenAuthorityAddress) {
    return;
  }
  console.info('Token authority address', tokenAuthorityAddress);
  // Set the token's authority to the freshly deployed one
  if (colony.token instanceof ColonyToken) {
    await colony.token.setAuthority(tokenAuthorityAddress).tx();
    await colony.token.setOwner(colony.address).tx();
  }
  // Install OneTxPayment extension
  const [{ extensionId, version }] = await colony
    .installExtension(SupportedExtension.oneTx)
    .tx();
  if (!extensionId || !version) {
    return;
  }
  console.info('ExtensionId', extensionId);
  console.info('Extension version', version);
  // Intantiate Colony again to update the extensions
  await colony.updateExtensions();
  if (!colony.ext.oneTx) {
    console.error('Could not instantiate OneTx extension within Colony');
    return;
  }
  // Give Administration and Funding roles to OneTxPayment extension
  const [{ user, setTo, role }] = await colony
    .setRoles(colony.ext.oneTx.address, [
      ColonyRole.Administration,
      ColonyRole.Funding,
    ])
    .tx();
  if (!role) {
    return;
  }
  console.info(user, setTo, ColonyRole[role]);
};

start();
