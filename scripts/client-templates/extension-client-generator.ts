/* eslint-disable import/no-extraneous-dependencies */

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
 })} Client Version ${extensionVersion} autogenerated by
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
  const {
    constants,
    contracts,
    commonExtensions,
    factories,
  } = getExtensionClientRelativePaths(extensionName, extensionVersion);
  return `import { ClientType } from '${constants}';
import { ${camelcase(extensionName, {
    pascalCase: true,
  })}__factory as ${camelcase(extensionName, {
    pascalCase: true,
  })}Factory } from '${factories}';
import { ${camelcase(extensionName, {
    pascalCase: true,
  })} } from '${contracts}';
import { ExtendedIColony } from '${commonExtensions}';

import {
  get${camelcase(extensionName, { pascalCase: true })}ClientAddons,
  get${camelcase(extensionName, { pascalCase: true })}ClientEstimateAddons,
} from './${camelcase(extensionName, { pascalCase: true })}ClientAddons';`;
};

const getClientContents = (
  extensionName: Extension,
): string => `type ${camelcase(extensionName, {
  pascalCase: true,
})}Estimate = ${camelcase(extensionName, { pascalCase: true })}['estimate'];
interface ${camelcase(extensionName, {
  pascalCase: true,
})}EstimateWithAddons extends ${camelcase(extensionName, {
  pascalCase: true,
})}Estimate {
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

export interface ${camelcase(extensionName, {
  pascalCase: true,
})}Client extends ${camelcase(extensionName, { pascalCase: true })} {
  clientType: ClientType.${camelcase(extensionName, {
    pascalCase: true,
  })}Client;
  estimate: ${camelcase(extensionName, { pascalCase: true })}EstimateWithAddons;
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

const get${camelcase(extensionName, { pascalCase: true })}Client = (
  address: string,
  colonyClient: ExtendedIColony,
): ${camelcase(extensionName, { pascalCase: true })}Client => {
  const ${camelcase(extensionName)}Client = ${camelcase(extensionName, {
  pascalCase: true,
})}Factory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ${camelcase(extensionName, { pascalCase: true })}Client;
  ${camelcase(extensionName)}Client.clientType = ClientType.${camelcase(
  extensionName,
  {
    pascalCase: true,
  },
)}Client;

  const addons = get${camelcase(extensionName, {
    pascalCase: true,
  })}ClientAddons(${camelcase(extensionName)}Client, colonyClient);
  const addonsEstimate = get${camelcase(extensionName, {
    pascalCase: true,
  })}ClientEstimateAddons(
    ${camelcase(extensionName)}Client,
    colonyClient,
  );

  Object.keys(addons).map((addonName) => {
    ${camelcase(extensionName)}Client[addonName] = addons[addonName];
    return null;
  });

  Object.keys(addonsEstimate).map((addonName) => {
    ${camelcase(
      extensionName,
    )}Client.estimate[addonName] = addonsEstimate[addonName];
    return null;
  });

  return ${camelcase(extensionName)}Client;
};

export default get${camelcase(extensionName, { pascalCase: true })}Client;`;

const getTemplate = (
  extensionName: Extension,
  extensionVersion: number,
): string => {
  const header = getHeader(extensionName, extensionVersion);
  const imports = getClientImports(extensionName, extensionVersion);
  const content = getClientContents(extensionName);

  return `${header}

/* eslint-disable @typescript-eslint/no-explicit-any */

${imports}

${content}

/* eslint-enable */
`;
};

export default getTemplate;

/* eslint-enable */
