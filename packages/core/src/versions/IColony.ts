import { createContractVersionArray } from './utils.js';

// This is the latest IColony version + 1. It's for generating types and compatibility maps
const COLONY_VERSION_NEXT = 16;

/** @internal */
export const COLONY_VERSIONS = createContractVersionArray(COLONY_VERSION_NEXT);

export type ColonyVersion = (typeof COLONY_VERSIONS)[number];

/** @internal */
export const COLONY_VERSION_LATEST = (COLONY_VERSION_NEXT - 1) as ColonyVersion;
