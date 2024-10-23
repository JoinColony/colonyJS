import { providers, Wallet } from 'ethers';
import 'cross-fetch/dist/node-polyfill.js';

import {
  ColonyRole,
  ColonyNetwork,
  ColonyRpcEndpoint,
} from '../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

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
    '0x9fBa8C85A1C7EEd48785A760E9399FcB6Fa5b04A',
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
