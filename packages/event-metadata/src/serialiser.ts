import {
  AnnotationMetadata,
  ColonyMetadata,
  DomainMetadata,
  MiscMetadata,
  Metadata,
  MetadataType,
} from './types';
import { METADATA_VERSION } from './constants';

import { log } from './debug';

/*
 * Internal
 */
// String from IPFS to Metadata Object
const parseEventMetadata = (res: string): Metadata | undefined => {
  try {
    const { version, name, data } = JSON.parse(res);
    // @TODO decide how to handle versions in the future
    if (version !== METADATA_VERSION) {
      log.verbose('Invalid metadata version');
      return undefined;
    }

    switch (name) {
      case MetadataType.Colony:
        return {
          version,
          name,
          data: {
            ...data,
            colonyTokens: data.colonyTokens ? data.colonyTokens : [],
            verifiedAddresses: data.verifiedAddresses
              ? data.verifiedAddresses
              : [],
          },
        };
      case MetadataType.Domain:
        return {
          version,
          name,
          data: {
            ...data,
            domainTokens: data.domainTokens ? data.domainTokens : [],
          },
        };
      case MetadataType.Annotation:
      case MetadataType.Misc:
        return {
          version,
          name,
          data: {
            ...data,
          },
        };
      default:
        log.verbose('Invalid metadata type');
    }
  } catch (e) {
    log.verbose('Invalid metadata: Problem parsing metadata: ', e);
  }
  // @TODO handle invalid metadata - not expecting to get this far
  return undefined;
};

/*
 * Parsing functions:
 * Convert String from IPFS to Metadata Object
 */

// get colony data from ipfs data
export const getColonyMetadataFromResponse = (
  res: string,
): ColonyMetadata | undefined => {
  return parseEventMetadata(res)?.data as ColonyMetadata;
};

// get domain data from ipfs data
export const getDomainMetadataFromResponse = (
  res: string,
): DomainMetadata | undefined => {
  return parseEventMetadata(res)?.data as DomainMetadata;
};

// get annotation message from ipfs data
export const getAnnotationMsgFromResponse = (
  res: string,
): string | undefined => {
  const metadata = parseEventMetadata(res)?.data as AnnotationMetadata;
  return metadata.annotationMsg;
};

export const getMiscContentFor = (
  name: string,
  metaData: MiscMetadata,
): string | undefined => {
  return name === metaData?.name ? metaData.content : undefined;
};

/*
 * Helper functions:
 */
// convenience func to get colonyAvatarImage from IPFS
export const getColonyAvatarImage = (res: string): string | undefined => {
  return getMiscContentFor(
    'colonyAvatarImage',
    parseEventMetadata(res) as MiscMetadata,
  );
};

export function getEventMetadataVersion(response: string): number {
  const res = JSON.parse(response);
  return (res?.version as number) || 1;
}
