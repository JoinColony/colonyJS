import * as yup from 'yup';
import { metadataSchema } from './metadataValidation';
import {
  AnnotationMetadata,
  ColonyMetadata,
  DomainMetadata,
  MiscMetadata,
  Metadata,
  MetadataType,
  DecisionMetadata,
} from './types';

import { METADATA_VERSION } from './constants';

/*
 * Internal
 */
// String from IPFS to Metadata Object
const parseEventMetadata = (res: string): Metadata => {
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
  } catch (validationError: unknown) {
    const err = validationError as Error;
    throw new Error(
      `Metadata validation schema error: ${err.message} - Input: ${res}`,
    );
  }

  if (!validatedRes) {
    throw new Error('Could not get Metadata');
  }

  // @TODO decide how to handle versions in the future
  if (validatedRes.version !== METADATA_VERSION) {
    throw new Error(`Invalid metadata version: ${validatedRes.version}`);
  }

  switch (validatedRes.name) {
    case MetadataType.Colony: {
      const colonyData = validatedRes.data as ColonyMetadata;
      return {
        version: validatedRes.version,
        name: validatedRes.name,
        data: {
          ...validatedRes.data,
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
        version: validatedRes.version,
        name: validatedRes.name,
        data: {
          ...validatedRes.data,
        },
      };
    default:
      throw new Error(`Invalid metadata type: ${validatedRes.name}`);
  }
};

/*
 * Parsing functions:
 * Convert String from IPFS to Metadata Object
 */

// get colony data from ipfs data
export const getColonyMetadataFromResponse = (res: string): ColonyMetadata => {
  return parseEventMetadata(res)?.data as ColonyMetadata;
};

// get domain data from ipfs data
export const getDomainMetadataFromResponse = (res: string): DomainMetadata => {
  return parseEventMetadata(res)?.data as DomainMetadata;
};

// get misc data from ipfs data
export const getMiscDataFromResponse = (res: string): MiscMetadata => {
  return parseEventMetadata(res)?.data as MiscMetadata;
};

// get annotation message from ipfs data
export const getAnnotationMsgFromResponse = (res: string): string => {
  const metadata = parseEventMetadata(res)?.data as AnnotationMetadata;
  return metadata.annotationMsg;
};

// get decision details from ipfs data
export const getDecisionDetailsFromResponse = (
  res: string,
): DecisionMetadata => {
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
  return name === metaData.name ? metaData.value : undefined;
};

// extract value for 'name' DIRECTLY from repsonse string
// no need to deal with MiscMetadata Object
export const getNameValueFromMisc = (
  name: string,
  response: string,
): string | undefined => {
  return getMiscValueFor(
    name,
    parseEventMetadata(response).data as MiscMetadata,
  );
};

export const getColonyAvatarImage = (res: string): string | undefined => {
  return getMiscValueFor(
    'colonyAvatarImage',
    parseEventMetadata(res).data as MiscMetadata,
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
  return (JSON.parse(ipfsResponse).version as number) || 1;
};
