/*
 * - Get clients and versions
 * - Check if they exist
 * - Generate client for version
 */
import { resolve as resolvePath } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

import { Extensions } from '../src/clients/Extensions/colonyContractExtensions';
import {
  CurrentCoinMachineVersion,
  CurrentOneTxPaymentVersion,
  CurrentVotingReputationVersion,
  CurrentWhitelistVersion,
} from '../src/versions';
import getClientTemplate from './client-templates/extension-client-generator';
import getClientAddonTemplate from './client-templates/extension-client-addons-generator';

const extensionContracts = [
  Extensions.OneTxPayment,
  Extensions.CoinMachine,
  Extensions.VotingReputation,
  Extensions.Whitelist,
];

const currentExtensionsVersions = {
  [Extensions.OneTxPayment]: CurrentOneTxPaymentVersion,
  [Extensions.CoinMachine]: CurrentCoinMachineVersion,
  [Extensions.VotingReputation]: CurrentVotingReputationVersion,
  [Extensions.Whitelist]: CurrentWhitelistVersion,
};

const getExtensionVersionedPath = (
  extensionName: Extensions,
  extensionVersion: number,
): string =>
  resolvePath(
    __dirname,
    '../src/clients/Extensions',
    extensionName,
    String(extensionVersion),
  );

const checkClientVersionExistance = (
  extensionName: Extensions,
  extensionVersion: number,
): boolean => {
  const extensionPath = getExtensionVersionedPath(
    extensionName,
    extensionVersion,
  );
  return existsSync(`${extensionPath}/${extensionName}Client.ts`);
};

const generateExtensionClient = async (
  extensionName: Extensions,
  extensionVersion: number,
): Promise<void> => {
  const extensionPath = getExtensionVersionedPath(
    extensionName,
    extensionVersion,
  );
  const client = getClientTemplate(extensionName, extensionVersion);
  const addons = getClientAddonTemplate(extensionName, extensionVersion);

  mkdirSync(extensionPath, { recursive: true });

  writeFileSync(`${extensionPath}/${extensionName}Client.ts`, client, {
    encoding: 'utf8',
  });
  writeFileSync(`${extensionPath}/${extensionName}ClientAddons.ts`, addons, {
    encoding: 'utf8',
  });
};

const orchestrateBuild = async (): Promise<void> => {
  await Promise.all(
    extensionContracts.map(async (extensionContract) => {
      const extensionVersion = currentExtensionsVersions[extensionContract];
      const clientExists = checkClientVersionExistance(
        extensionContract,
        extensionVersion,
      );

      if (!clientExists) {
        await generateExtensionClient(extensionContract, extensionVersion);
      }
    }),
  );
};

orchestrateBuild();
