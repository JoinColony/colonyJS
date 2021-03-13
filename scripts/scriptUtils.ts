import { relative as relativePath, resolve as resolvePath } from 'path';
import * as camelcase from 'camelcase';
import { Extension } from '../src/clients/Extensions/colonyContractExtensions';

const extensionsBasePath = resolvePath(__dirname, '../src/clients/Extensions');

interface RelativePaths {
  base: string;
  constants: string;
  commonExtensions: string;
  contracts: string;
  factories: string;
}

export const getExtensionClientRelativePaths = (
  extensionName: Extension,
  extensionVersion: number,
): RelativePaths => {
  return {
    base: extensionsBasePath,
    constants: relativePath(extensionsBasePath, 'src/constants'),
    commonExtensions: relativePath(
      extensionsBasePath,
      'src/clients/Colony/extensions/commonExtensions',
    ),
    contracts: relativePath(
      extensionsBasePath,
      `src/contracts/extensions/${camelcase(
        extensionName,
      )}/${extensionVersion}/${camelcase(extensionName, { pascalCase: true })}`,
    ),
    factories: relativePath(
      extensionsBasePath,
      `src/contracts/extensions/${camelcase(
        extensionName,
      )}/${extensionVersion}/factories/${extensionName}__factory`,
    ),
  };
};
