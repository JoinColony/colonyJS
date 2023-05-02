import typia from 'typia';

import { DataTypeMap, Metadata, MetadataTypeMap } from './types';

import { MetadataType, METADATA_VERSION } from './constants';

export * from './constants';
export * from './types';

const createError = (errors: typia.IValidation.IError[]) => {
  const errorsAsText = errors.map(
    (error) =>
      `Error in ${error.path}. Seen: ${error.value}, expected: ${error.expected}`,
  );

  return `Validation error(s):\n${errorsAsText.join('\n')}`;
};

/**
 * Parses and validates event metadata
 *
 * This will check the validity of an event metadata object.
 * You can pass in an optional type if you know what to expect.
 * It will also do a data version check.
 *
 * If you don't know what the output will be you can use TypeScript's
 * Discriminated Unions to guard the correct types (see example).
 *
 * @example
 * ```typescript
 * import { parseEventMetadata, MetadataType } from '@colony/event-metadata';
 *
 * // Get `input` from IPFS or other sources.
 *
 * const result = parseEventMetadata(input);
 *
 * if (result.type === MetadataType.Domain) {
 *   // Type is DomainMetadata
 *   console.log(result.data.domainName);
 * }
 * ```
 *
 * @param input - JavaScript object (parsed, from IPFS)
 * @param type - Optional MetadataType to check against
 *
 * @returns The validated Metadata.
 */
export const parseEventMetadata = <
  T extends MetadataType = MetadataType.DEFAULT,
>(
  input: object,
  type?: T,
): MetadataTypeMap[T] => {
  const res = typia.validate<Metadata>(input);

  if (res.success) {
    // @TODO decide how to handle versions in the future
    if (res.data.version !== METADATA_VERSION) {
      throw new Error(`Invalid metadata version: ${res.data.version}`);
    }
    if (type && type !== res.data.name) {
      throw new Error(
        `Wrong Metadata type. Given ${type}, got ${res.data.name}`,
      );
    }
    if (res.data.name === MetadataType.Colony) {
      res.data.data = {
        ...res.data.data,
        colonyTokens: res.data.data.colonyTokens || [],
        verifiedAddresses: res.data.data.verifiedAddresses || [],
        colonySafes: res.data.data.colonySafes || [],
      };
    }
    return res.data as MetadataTypeMap[T];
  }

  const error = createError(res.errors);
  throw new Error(error);
};

/**
 * Get the version of a Metadata object
 *
 * Defaults to 1.
 *
 * @param input - JavaScript object (parsed, from IPFS)
 *
 * @returns The version number of the metadata
 */
export const getEventMetadataVersion = (input: object): number => {
  const parsed = parseEventMetadata(input);
  return parsed.version || 1;
};

/**
 * Create a valid Metadata object.
 *
 * Validates the input.
 *
 * @example
 * ```typescript
 * import { createMetadataFor, MetadataType } from '@colony/event-metadata';
 *
 * const result = createMetadataFor(MetadataType.Domain, {
 *   domainName: 'Cool team',
 * });
 *
 * console.log(result.version); // 2
 * console.log(result.name); // 'domain'
 * console.log(result.data.domainName); // 'Cool team'
 * ```
 *
 * @param type - The metadata type
 * @param data - The actual data for the generated metadata object
 *
 * @returns The version number of the metadata
 */
export const createMetadataFor = <T extends MetadataType>(
  type: T,
  data: DataTypeMap[T],
): MetadataTypeMap[T] => {
  const res = typia.validate<Metadata>({
    type,
    data,
    version: METADATA_VERSION,
  });

  if (!res.success) {
    const error = createError(res.errors);
    throw new Error(error);
  }
  return res.data as MetadataTypeMap[T];
};
