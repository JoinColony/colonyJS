/**
 * Available metadata types
 *
 * DEFAULT is usually used to indicate a generic Metadata type
 */
export enum MetadataType {
  DEFAULT = 'default',
  Annotation = 'annotation',
  Colony = 'colony',
  Decision = 'decision',
  Domain = 'domain',
  Misc = 'misc',
}

/**
 * Current Colony Event Metadata version
 */
export const METADATA_VERSION = 2;

/**
 * The various team colors that the dApp supports
 */
export enum TeamColor {
  LightPink,
  Pink,
  Black,
  EmeraldGreen,
  Blue,
  Yellow,
  Red,
  Green,
  Periwinkle,
  Gold,
  Aqua,
  BlueGrey,
  Purple,
  Orange,
  Magenta,
  PurpleGrey,
}
