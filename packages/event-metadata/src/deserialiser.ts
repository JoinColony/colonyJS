import {
  AnnotationMetadata,
  ColonyMetadata,
  DomainMetadata,
  MiscMetadata,
  Metadata,
  MetadataType,
} from './types';
import { METADATA_VERSION } from './constants';
/*
 * Stringify functions:
 * Convert Metadata Object to String (to be stored in IPFS)
 */
// get Metadata for Colony type
export const getMetadataStringForColony = (
  metaDataArgs: ColonyMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Colony,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
};

// get Metadata for Domain type
export const getMetadataStringForDomain = (
  metaDataArgs: DomainMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Domain,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
};

// get Metadata for Annotation type
export const getMetadataStringForAnnotation = (
  metaDataArgs: AnnotationMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Annotation,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
};

// get Metadata for Misc type
export const getMetadataStringForMisc = (
  metaDataArgs: MiscMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Misc,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
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
// convenience func to set colonyAvatarImage to IPFS
export const setColonyAvatarImage = (colonyAvatarImage: string): string => {
  return JSON.stringify(
    getMetadataStringForMisc({
      name: 'colonyAvatarImage',
      content: colonyAvatarImage,
    }),
  );
};
