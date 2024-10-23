import { type MetadataType, type TeamColor } from './constants.js';

interface BaseMetadata {
  name: MetadataType;
  version: number;
}

export interface SafeInfo {
  chainId: string;
  contractAddress: string;
  moduleContractAddress: string;
  safeName: string;
}

export interface ColonyData {
  colonyName: string;
  colonyDisplayName?: string;
  colonyAvatarHash?: string;
  colonyTokens?: Array<string>;
  verifiedAddresses?: Array<string>;
  isWhitelistActivated?: boolean;
  colonySafes?: Array<SafeInfo>;
}

export interface ColonyMetadata extends BaseMetadata {
  name: MetadataType.Colony;
  data: ColonyData;
}

export interface DomainData {
  domainName?: string;
  domainColor?: TeamColor;
  domainPurpose?: string;
}

export interface DomainMetadata extends BaseMetadata {
  name: MetadataType.Domain;
  data: DomainData;
}

export interface AnnotationData {
  annotationMsg: string;
}

export interface AnnotationMetadata extends BaseMetadata {
  name: MetadataType.Annotation;
  data: AnnotationData;
}

export interface DecisionData {
  title: string;
  description?: string;
  motionDomainId: number;
}

export interface DecisionMetadata extends BaseMetadata {
  name: MetadataType.Decision;
  data: DecisionData;
}

export interface MiscData {
  name: string;
  value: string;
}

export interface MiscMetadata extends BaseMetadata {
  name: MetadataType.Misc;
  data: MiscData;
}

export type Data =
  | AnnotationData
  | ColonyData
  | DecisionData
  | DomainData
  | MiscData;

export type Metadata =
  | AnnotationMetadata
  | ColonyMetadata
  | DecisionMetadata
  | DomainMetadata
  | MiscMetadata;

export interface MetadataTypeMap {
  [MetadataType.DEFAULT]: Metadata;
  [MetadataType.Annotation]: AnnotationMetadata;
  [MetadataType.Colony]: ColonyMetadata;
  [MetadataType.Decision]: DecisionMetadata;
  [MetadataType.Domain]: DomainMetadata;
  [MetadataType.Misc]: MiscMetadata;
}

export interface DataTypeMap {
  [MetadataType.DEFAULT]: never;
  [MetadataType.Annotation]: AnnotationData;
  [MetadataType.Colony]: ColonyData;
  [MetadataType.Decision]: DecisionData;
  [MetadataType.Domain]: DomainData;
  [MetadataType.Misc]: MiscData;
}
