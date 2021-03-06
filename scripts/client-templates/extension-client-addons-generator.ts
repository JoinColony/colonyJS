/* eslint-disable import/no-extraneous-dependencies, max-len */

import * as camelcase from 'camelcase';
import { execSync } from 'child_process';

import { name, version } from '../../package.json';
import { Extension } from '../../src/clients/Extensions/colonyContractExtensions';
import { getExtensionClientRelativePaths } from '../scriptUtils';

const getHeader = (
  extensionName: Extension,
  extensionVersion: number,
): string => {
  const currentNetworkTag = execSync('git describe --tags', {
    cwd: 'vendor/colonyNetwork',
  });
  return `/*
 * ${camelcase(extensionName, {
   pascalCase: true,
 })} Client Version ${extensionVersion} Addons autogenerated by
 * ${name} version ${version} from colonyNetwork tag '${String(
    currentNetworkTag,
  ).trim()}'
 *
 * Feel free to modify as needed!
 */`;
};

const getClientImports = (
  extensionName: Extension,
  extensionVersion: number,
): string => {
  const { commonExtensions } = getExtensionClientRelativePaths(
    extensionName,
    extensionVersion,
  );
  return `import { ExtendedIColony } from '${commonExtensions}';

import { ${camelcase(extensionName, {
    pascalCase: true,
  })}Client } from './${camelcase(extensionName, {
    pascalCase: true,
  })}Client';`;
};

const getClientContents = (extensionName: Extension): string => `/*
 * Extra client methods
 */
export const get${camelcase(extensionName, {
  pascalCase: true,
})}ClientAddons = (
  ${camelcase(extensionName)}Client: ${camelcase(extensionName, {
  pascalCase: true,
})}Client,
  colonyClient: ExtendedIColony,
): Record<string, any> => ({
  /*
   * Example withProofs method
   *
   * contractCallWithProofs: async (
   *  _domainId: BigNumberish,
   *  overrides?: TransactionOverrides,
   * ): Promise<ContractTransaction> => {
   *   const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
   *     colonyClient,
   *     _domainId,
   *     ${camelcase(extensionName)}Client.address,
   *   );
   *   return ${camelcase(
     extensionName,
   )}Client.contractCall(extensionPDID, extensionCSI, _domainId, overrides);
   * },
   */
});

/*
 * Extra client methods estimates
 *
 * These are needed! Don't skip them!
 */
export const get${camelcase(extensionName, {
  pascalCase: true,
})}ClientEstimateAddons = (
  ${camelcase(extensionName)}Client: ${camelcase(extensionName, {
  pascalCase: true,
})}Client,
  colonyClient: ExtendedIColony,
): Record<string, any> => ({
  /*
   * Example withProofs estimate method
   * (Mostly the same as the actual method, just that it calls the client
   * estimate contract call and doesn't pass in the transaction overrides)
   *
   * contractCallWithProofs: async (
   *  _domainId: BigNumberish,
   * ): Promise<ContractTransaction> => {
   *   const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
   *     colonyClient,
   *     _domainId,
   *     ${camelcase(extensionName)}Client.address,
   *   );
   *   return ${camelcase(
     extensionName,
   )}Client.estimate.contractCall(extensionPDID, extensionCSI, _domainId);
   * },
   */
});`;

const getTemplate = (
  extensionName: Extension,
  extensionVersion: number,
): string => {
  const header = getHeader(extensionName, extensionVersion);
  const imports = getClientImports(extensionName, extensionVersion);
  const content = getClientContents(extensionName);

  return `${header}

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */

${imports}

${content}

/* eslint-enable */
`;
};

export default getTemplate;

/* eslint-enable */
