import * as yup from 'yup';
import { metadataSchema } from './metaDataValidation';
import {
  AnnotationMetadata,
  ColonyMetadata,
  DomainMetadata,
  MiscMetadata,
  Metadata,
  MetadataType,
  DecisionMetadata,
} from './types';
import { log } from './debug';

import { METADATA_VERSION } from './constants';

/*
 * Internal
 */
// String from IPFS to Metadata Object
const parseEventMetadata = (res: string): Metadata | undefined => {
  let validatedRes: yup.Shape<
    object | undefined,
    {
      version: number;
      name: MetadataType;
      data: object;
    }
  >;

  try {
    validatedRes = metadataSchema.validateSync(res, {
      stripUnknown: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (validationError: any) {
    log.verbose('Metadata validation schema error:', validationError.message);
    log.verbose('Error:', validationError);
    log.verbose('Res: ', res);
    return undefined;
  }

  // @TODO decide how to handle versions in the future
  if (validatedRes?.version !== METADATA_VERSION) {
    log.verbose('Invalid metadata version: ', validatedRes?.version);
    return undefined;
  }

  switch (validatedRes?.name) {
    case MetadataType.Colony: {
      const colonyData = validatedRes?.data as ColonyMetadata;
      return {
        version: validatedRes?.version,
        name: validatedRes?.name,
        data: {
          ...validatedRes?.data,
          colonyTokens: colonyData.colonyTokens ? colonyData.colonyTokens : [],
          verifiedAddresses: colonyData.verifiedAddresses
            ? colonyData.verifiedAddresses
            : [],
          colonySafes: colonyData.colonySafes ? colonyData.colonySafes : [],
        },
      };
    }
    case MetadataType.Domain:
    case MetadataType.Annotation:
    case MetadataType.Decision:
    case MetadataType.Misc:
      return {
        version: validatedRes?.version,
        name: validatedRes?.name,
        data: {
          ...validatedRes?.data,
        },
      };
    default:
      log.verbose('Invalid metadata type');
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

// get misc data from ipfs data
export const getMiscDataFromResponse = (
  res: string,
): MiscMetadata | undefined => {
  return parseEventMetadata(res)?.data as MiscMetadata;
};

// get annotation message from ipfs data
export const getAnnotationMsgFromResponse = (
  res: string,
): string | undefined => {
  const metadata = parseEventMetadata(res)?.data as AnnotationMetadata;
  return metadata.annotationMsg;
};

// get decision details from ipfs data
export const getDecisionDetailsFromResponse = (
  res: string,
): DecisionMetadata | undefined => {
  return parseEventMetadata(res)?.data as DecisionMetadata;
};

/*
 * Helper functions:
 */
// extract value for 'name' from a MiscMetadata Object
export const getMiscValueFor = (
  name: string,
  metaData: MiscMetadata,
): string | undefined => {
  return name === metaData?.name ? metaData.value : undefined;
};

// extract value for 'name' DIRECTLY from repsonse string
// no need to deal with MiscMetadata Object
export const getNameValueFromMisc = (
  name: string,
  response: string,
): string | undefined => {
  return getMiscValueFor(
    name,
    parseEventMetadata(response)?.data as MiscMetadata,
  );
};

export const getColonyAvatarImage = (res: string): string | undefined => {
  return getMiscValueFor(
    'colonyAvatarImage',
    parseEventMetadata(res)?.data as MiscMetadata,
  );
};

// @NOTE this rountine is protected with an Error if undefined
// or falsy is passed in. Call this func in a try/catch block.
export const getEventMetadataVersion = (
  ipfsResponse: string,
): number | never => {
  if (typeof ipfsResponse === 'undefined' || !ipfsResponse) {
    throw Error(`Cannot obtain metadata version from: ${ipfsResponse}`);
  }
  return (JSON.parse(ipfsResponse)?.version as number) || 1;
};
