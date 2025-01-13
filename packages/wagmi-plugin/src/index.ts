import { createRequire } from 'node:module';
import { join as joinPath } from 'node:path';
import { readFile } from 'node:fs/promises';
import { fetch } from 'cross-fetch';
import { type Address } from 'abitype';
import { joinAbis, type MergeType } from '@colony/abis/utils';
import { nonNullable } from '@colony/core';

interface ContractConfig {
  name: string;
  path: string;
  address?: Address;
  merge?: MergeType;
}

interface ColonyConfig {
  baseUrl: string;
  contracts: ContractConfig[];
}

// Capitalize the first letter of a string
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const resolveAbiFile = async (path: string) => {
  const require = createRequire(import.meta.url);
  return require.resolve(path);
};

const colony = (config: ColonyConfig) => {
  const { baseUrl, contracts } = config;
  return {
    name: 'Colony',
    async contracts() {
      const promises = contracts.map(async ({ name, path, address, merge }) => {
        try {
          if (merge) {
            const typeSuffix = capitalize(merge);
            const eventsAbiFile = await resolveAbiFile(
              `@colony/abis/${merge}/${name}${typeSuffix}`,
            );
            const contents = await readFile(eventsAbiFile);
            const { abi: historicalAbi } = JSON.parse(contents.toString());
            const res = await fetch(joinPath(baseUrl, path));
            const { abi } = await res.json();
            // Join historical and current ABIs
            return {
              abi: joinAbis(historicalAbi, abi, merge),
              name: `${name}${typeSuffix}`,
            };
          }
          const res = await fetch(joinPath(baseUrl, path));
          const { abi } = await res.json();
          return { abi, address, name };
        } catch (e) {
          console.error(
            `Could not read contract file ${name}:`,
            (e as Error).message,
          );
          return undefined;
        }
      });
      const results = await Promise.all(promises);
      return results.filter(nonNullable);
    },
  };
};

export default colony;
