import type { Log, Provider } from '@ethersproject/abstract-provider';
import type { Interface } from '@ethersproject/abi';

import { BigNumber, BigNumberish, constants, utils } from 'ethers';

import {
  ColonyRole,
  Extension,
  FundingPotAssociatedType,
  Id,
} from '../constants';
import { CommonColony, CommonNetwork } from './types';
import { nonNullable } from '../utils';
import { ContractVersion } from '../versions';
import { SignerOrProvider } from '../types';
import { Versioned__factory as VersionedFactory } from '../contracts';

const { keccak256, toUtf8Bytes } = utils;
const { MaxUint256 } = constants;

/**
 * Check if two addresses are equal
 *
 * Addresses can be displayed using a checksum format which contains uppercase and lowercase characters.
 * This function can compare addresses in either format
 *
 * @param a - Left hand side address
 * @param b - Right hand side address
 *
 * @returns Whether a and b are the same address
 */
export const addressesAreEqual = (a: string, b: string) =>
  a.toLowerCase() === b.toLowerCase();

/**
 * Convert any number to ETH (remove 18 zeros)
 *
 * @example
 * ```typescript
 * import { toEth } from '@colony/sdk';
 *
 * const oneEther = BigNumber.from("1000000000000000000");
 * console.log(toEth(oneEther)); // 1.0
 * ```
 */
export const toEth = (num: BigNumberish) => utils.formatEther(num);

/**
 * Convert any number to wei (add 18 zeros)
 *
 * @example
 * ```typescript
 * import { toWei } from '@colony/sdk';
 *
 * const oneEther = '1.0';
 * console.log(toWei(oneEther)); // { BigNumber: "1000000000000000000" }
 * ```
 */
export const toWei = (num: string) => utils.parseEther(num);

/**
 * Short-hand method to convert a number to wei using JS tagged template strings
 *
 * See also here: http://tc39wiki.calculist.org/es6/template-strings/
 *
 * @remarks
 * This is only useful in contexts where the number is hard-coded (e.g. examples)
 *
 * @example
 * ```typescript
 * import { w } from '@colony/sdk';
 *
 * console.log(w`1.0`); // { BigNumber: "1000000000000000000" }
 * ```
 */
export const w = (str: TemplateStringsArray) => toWei(str[0]);

/**
 * Converts Colony Roles to hex. Result is a binary number where the bits are one and the place of the role index. Then converted to hexadecimal, then padded with zeros to a lenghtof 64
 *
 * @example
 * ```typescript
 * // Binary representation: 0b000101010
 * const roles = colonyRoles2Hex([ColonyRole.Root, ColonyRole.Architecture, ColonyRole.Funding]); // '0x000000000000000000000000000000000000000000000000000000000000002a'
 * ```
 *
 * @param roles - An array of Colony roles
 *
 * @returns A hexadecimal string
 */
export const colonyRoles2Hex = (roles: ColonyRole[]): string => {
  const hexRoles = roles
    // eslint-disable-next-line no-bitwise
    .reduce((binRoles, roleNum) => binRoles | (1 << roleNum), 0)
    .toString(16);
  return utils.hexZeroPad(`0x${hexRoles}`, 32);
};

/**
 * Converts a role hex string (typically returned by a Colony contract) to Colony Roles.
 *
 * @example
 * ```typescript
 * // Binary representation: 0b000101010
 * const roles = hex2ColonyRoles('0x2a'); // [1, 3, 5]
 * ```
 *
 * @param hexStr - A (probably padded) hexadecimal string
 *
 * @returns An array of Colony roles
 */
export const hex2ColonyRoles = (hexStr: string): ColonyRole[] => {
  const rolesNum = BigNumber.from(hexStr);
  return [...Array(ColonyRole.LAST_ROLE).keys()]
    .map((i) => {
      if (rolesNum.shr(i).mask(1).eq(1)) {
        return i as ColonyRole;
      }
      return null;
    })
    .filter(nonNullable);
};

/**
 * Get the child index for a domain inside its corresponding skills parent children array
 *
 * E.g. (the values *will* differ for you!):
 * domainId = 1
 * corresponding skillId = 2
 * parent of skillId 2:
 * ```
 * {
 *  // ...
 *  children: [2]
 * }
 * ```
 * childSkillIndex would be 0 in this case (0-position in children array)
 *
 * @param network - A ColonyNetwork contract
 * @param colony - A Colony contract
 * @param parentDomainId - id of parent domain
 * @param domainId - id of the domain
 *
 * @returns Index in the `children` array (see above)
 */
export const getChildIndex = async (
  network: CommonNetwork,
  colony: CommonColony,
  parentDomainId: BigNumberish,
  domainId: BigNumberish,
): Promise<BigNumber> => {
  if (BigNumber.from(parentDomainId).eq(BigNumber.from(domainId))) {
    return MaxUint256;
  }
  const { skillId: parentSkillId } = await colony.getDomain(parentDomainId);
  const { skillId } = await colony.getDomain(domainId);
  const { children } = await network.getSkill(parentSkillId);
  const idx = children.findIndex((childSkillId) => childSkillId.eq(skillId));
  if (idx < 0) {
    throw new Error(
      `Could not find ${domainId} as a child of ${parentDomainId}`,
    );
  }
  return BigNumber.from(idx);
};

/**
 * Hashes to identify the colony extension contracts
 *
 * @param extension - A valid Extension name
 *
 * @returns A hash to identify the extension on the contracts
 */
export const getExtensionHash = (extension: Extension): string =>
  keccak256(toUtf8Bytes(extension));

/**
 * Get the associated domain for a pot id
 *
 * @remarks pots can be associated with different types, like domains, payments or tasks
 * See [[`FundingPotAssociatedType`]] for details
 *
 * @param client - Any Colony contract
 * @param potId - The funding pot id
 *
 * @returns The associated domainId
 */
export const getPotDomain = async (
  colony: CommonColony,
  potId: BigNumberish,
): Promise<BigNumberish> => {
  const { associatedType, associatedTypeId } = await colony.getFundingPot(
    potId,
  );
  // In case we add types to this later, we use the official colonyNetwork
  // function available in v5+
  if (colony.getDomainFromFundingPot) {
    return colony.getDomainFromFundingPot(potId);
  }
  switch (associatedType as FundingPotAssociatedType) {
    case FundingPotAssociatedType.Unassigned: {
      // This is probably the reward pot
      return Id.RootDomain;
    }
    case FundingPotAssociatedType.Domain: {
      return associatedTypeId;
    }
    case FundingPotAssociatedType.Payment: {
      const { domainId } = await colony.getPayment(associatedTypeId);
      return domainId;
    }
    case FundingPotAssociatedType.Task: {
      const { domainId } = await colony.getTask(associatedTypeId);
      return domainId;
    }
    default: {
      throw new Error(`No valid domain found for pot ${potId}`);
    }
  }
};

/**
 * Get the JavaScript timestamp for a block
 *
 * @param provider - ethers compatible Provider
 * @param blockHash - Hash of block to get time for
 *
 * @returns block timestamp in ms
 */
export const getBlockTime = async (
  blockHash: string,
  provider: Provider,
): Promise<number> => {
  const { timestamp } = await provider.getBlock(blockHash);
  // timestamp is seconds, Date wants ms
  return timestamp * 1000;
};

/**
 * Get the deployed contract's version
 *
 * Only works with compatible contracts, i.e. Colony contracts or their extensions.
 *
 * @param address - Address of the deployed contract
 * @param signerOrProvider - ethers compatible Signer or Provider
 *
 * @returns The version number of the contract
 */
export const getContractVersion = async (
  address: string,
  signerOrProvider: SignerOrProvider,
) => {
  const versionedContract = VersionedFactory.connect(address, signerOrProvider);
  const version = await versionedContract.version();
  return version.toNumber() as ContractVersion;
};

/**
 * Try to parse an array of logs with a given interface
 *
 * Will filter out logs that can't be parsed with the given interface
 *
 * @param logs - Array of log entries (usually from a {@link ContractReceipt})
 * @param iface - Ethers compatible contract interface
 *
 * @returns A list of parsed log entries (events)
 */
export const parseLogs = (logs: Log[], iface: Interface) => {
  return logs
    .map((log) => {
      try {
        return iface.parseLog(log);
      } catch (e) {
        return null;
      }
    })
    .filter(nonNullable);
};
