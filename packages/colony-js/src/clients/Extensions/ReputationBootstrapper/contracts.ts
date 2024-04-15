// Always add the next ReputationBootstrapper version here
import type { ReputationBootstrapper as ReputationBootstrapper1 } from '../../../contracts/ReputationBootstrapper/1/index.js';
import type { ReputationBootstrapper as ReputationBootstrapper2 } from '../../../contracts/ReputationBootstrapper/2/index.js';
import type { ReputationBootstrapper as ReputationBootstrapper3 } from '../../../contracts/ReputationBootstrapper/3/index.js';
import type { ReputationBootstrapper as ReputationBootstrapper4 } from '../../../contracts/ReputationBootstrapper/4/index.js';
import type { ReputationBootstrapper as ReputationBootstrapper5 } from '../../../contracts/ReputationBootstrapper/5/index.js';

// Always adjust to the latest factory
export { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/5/factories/ReputationBootstrapper__factory.js';

export type ReputationBootstrapperV1 = ReputationBootstrapper1;
export type ReputationBootstrapperV2 = ReputationBootstrapper2;
export type ReputationBootstrapperV3 = ReputationBootstrapper3;
export type ReputationBootstrapperV4 = ReputationBootstrapper4;
export type ReputationBootstrapperV5 = ReputationBootstrapper5;

export type AnyReputationBootstrapper =
  | ReputationBootstrapper1
  | ReputationBootstrapper2
  | ReputationBootstrapper3
  | ReputationBootstrapper4
  | ReputationBootstrapper5;
