import { JsonRpcProvider, Wallet } from 'ethers';

import {
  ColonyRole,
  ColonyNetwork,
  ColonyRpcEndpoint,
} from '../../src/index.js';

const provider = new JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

if (!process.env.PRIVATE_KEY) {
  throw new Error(
    `Please provide a valid private key as an environment variable: PRIVATE_KEY`,
  );
}

const signer = new Wallet(process.env.PRIVATE_KEY as string).connect(provider);

// Set the Administration and Funding permissions for the OneTxPayment extension of a Colony
const start = async () => {
  const colonyNetwork = new ColonyNetwork(signer);
  const colony = await colonyNetwork.getColony(
    '0xA6fD5655c1249f1349D0917E732813Ebd9439A54',
  );
  await colony
    .setRoles('0xA75b108808584A15ceEbF8f6CAc19EaD91cAbCd2', [
      ColonyRole.Administration,
      ColonyRole.Funding,
    ])
    .tx()
    .mined();
  const roles = await colony.getRoles(
    '0xA75b108808584A15ceEbF8f6CAc19EaD91cAbCd2',
  );
  console.info(
    'Roles',
    roles.map((role) => ColonyRole[role]),
  );
};

start();
