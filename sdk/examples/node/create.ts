import { providers, Wallet } from 'ethers';

import { ColonyNetwork, ColonyRole, Id, SupportedExtension } from '../../src';

const provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc2/');

// Deploy a Colony with everything that's needed
const start = async () => {
  const signer = new Wallet(process.env.PRIVATE_KEY as string).connect(
    provider,
  );
  const colonyNetwork = new ColonyNetwork(signer);
  // Create token to be used with Colony
  const [{ tokenAddress }] = await colonyNetwork
    .deployToken('Test token', 'TOT')
    .force();
  console.info('Token address', tokenAddress);
  if (!tokenAddress) {
    return;
  }
  // Create actual colony (deploys Colony contract)
  const [{ colonyAddress }] = await colonyNetwork
    .createColony(tokenAddress, 'createcolonytest3')
    .force();
  if (!colonyAddress) {
    return;
  }
  console.info('Colony address', colonyAddress);
  // Instantiate colony and token
  let colony = await colonyNetwork.getColony(colonyAddress);
  const token = await colony.getToken();
  // Deploy TokanAuthority
  const [{ tokenAuthorityAddress }] = await token
    .deployAuthority([colonyAddress])
    .force();
  if (!tokenAuthorityAddress) {
    return;
  }
  console.info('Token authority address', tokenAuthorityAddress);
  // Set the token's authority to the freshly deployed one
  await token.setAuthority(tokenAuthorityAddress).force();
  // Install OneTxPayment extension
  const [{ extensionId, version }] = await colony
    .installExtension(SupportedExtension.oneTx)
    .force();
  if (!extensionId || !version) {
    return;
  }
  console.info('ExtensionId', extensionId);
  console.info('Extension version', version);
  // Intantiate Colony again to update the extensions
  colony = await colonyNetwork.getColony(colonyAddress);
  if (!colony.ext.oneTx) {
    console.error('Could not instantiate OneTx extension within Colony');
    return;
  }
  // Give Administration role to OneTxPayment extension
  const [{ user, setTo, role }] = await colony
    .setAdministrationRole(colony.ext.oneTx.address, Id.RootDomain, true)
    .force();
  if (!role) {
    return;
  }
  console.info(user, setTo, ColonyRole[role]);
  // Give Funding role to OneTxPayment extension
  const [{ user: fundingUser, setTo: fundingSetTo, role: fundingRole }] =
    await colony
      .setFundingRole(colony.ext.oneTx.address, Id.RootDomain, true)
      .force();
  if (!fundingRole) {
    return;
  }
  console.info(fundingUser, fundingSetTo, ColonyRole[fundingRole]);
};

start();
