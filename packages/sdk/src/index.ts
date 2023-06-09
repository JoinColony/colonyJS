export type { ContractReceipt, ContractTransaction } from 'ethers';
// This is a type and only used for TypeScript compilation
// eslint-disable-next-line import/no-extraneous-dependencies
export type { TransactionResponse } from '@ethersproject/abstract-provider';

export {
  AnnotationData,
  ColonyData,
  DecisionData,
  DomainData,
  MetadataType,
  TeamColor,
} from '@colony/event-metadata';

export {
  ColonyRole,
  ColonyRpcEndpoint,
  Extension,
  ExtensionVersions,
  Id,
  MotionState,
  Network,
  Tokens,
  addressesAreEqual,
  isExtensionCompatible,
  parseLogs,
  toEth,
  toWei,
  w,
} from '@colony/core';

export {
  ERC20 as ERC20Interface,
  ERC2612 as ERC2612Interface,
  ERC721 as ERC721Interface,
} from '@colony/tokens';

export * from './ColonyNetwork';
export * from './TxCreator';
export * from './events';
export * from './ipfs';

export type {
  Ethers6Filter,
  Ethers6FilterByBlockHash,
  ParsedLogTransactionReceipt,
} from './types';
