export enum MetadataType {
  Colony = 'colony',
  Domain = 'domain',
  Annotation = 'annotation',
  Misc = 'misc',
}

export interface ColonyMetadata {
  colonyName?: string;
  colonyDisplayName?: string;
  colonyAvatarHash?: string | null;
  colonyTokens?: Array<string>;
  verifiedAddresses?: Array<string>;
  isWhitelistActivated?: boolean;
}

export interface DomainMetadata {
  domainName?: string;
  domainColor?: number;
  domainPurpose?: string;
}

export interface AnnotationMetadata {
  annotationMsg: string;
}

export interface MiscMetadata {
  // @TODO - This is not metadata, but check if this should be included somewhere
  // this was created to handle colonyAvatarImage
  name: string;
  value: string;
}

export interface Metadata {
  version: number;
  name: MetadataType;
  data: ColonyMetadata | DomainMetadata | AnnotationMetadata | MiscMetadata;
}
