import { Extension } from '../constants.js';
import { COLONY_VERSIONS } from './IColony.js';
import { ColonyVersion, ExtensionVersion } from './index.js';
import { getExtensionIncompatibilityMap } from './utils.js';

/**
 * Checks the compatibility of an extension version with a colony version it requests to be installed in
 * Returns `true` if an extension version is compatible with the given colony version
 *
 * @param extension - A valid `Extension` contract name
 * @param extensionVersion - The version of the extension to check against the colony
 * @param colonyVersion - The version of the colony to check for
 *
 * @returns indication whether extension in given version is compatible with colony at the given version
 */
export const isExtensionCompatible = (
  extension: Extension,
  extensionVersion: ExtensionVersion,
  colonyVersion: ColonyVersion,
): boolean => {
  const map = getExtensionIncompatibilityMap(extension, extensionVersion);

  return !!map && !map.includes(colonyVersion);
};

/**
 * Calculates and returns the lowest compatible colony version for a given version of an extension
 *
 * @param extension - A valid `Extension` contract name
 * @param extensionVersion - The version of the extension to check
 *
 * @returns the lowest compatible colony version for a given version of an extension
 */
export const getExtensionLowestCompatibleColonyVersion = (
  extension: Extension,
  extensionVersion: ExtensionVersion,
): ColonyVersion => {
  const map = getExtensionIncompatibilityMap(extension, extensionVersion);

  if (!map) {
    throw new Error(
      `Could not find incompatibility map for extension "${extension}" with version: ${extensionVersion}`,
    );
  }

  const colonyVersion = COLONY_VERSIONS.find(
    (v) => v === map[map.length - 1] + 1,
  );

  if (colonyVersion === undefined || null) {
    throw new Error(
      `No compatible colony version found for extension "${extension}" with version: ${extensionVersion}`,
    );
  }

  return colonyVersion;
};
