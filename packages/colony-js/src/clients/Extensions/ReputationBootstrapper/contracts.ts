// Always add the next ReputationBootstrapper version here
import type { ReputationBootstrapper as ReputationBootstrapper1 } from '../../../contracts/ReputationBootstrapper/1/index.js';
import type { ReputationBootstrapper as ReputationBootstrapper2 } from '../../../contracts/ReputationBootstrapper/2/index.js';
import type { ReputationBootstrapper as ReputationBootstrapper3 } from '../../../contracts/ReputationBootstrapper/3/index.js';

// Always adjust to the latest factory
export { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/3/factories/ReputationBootstrapper__factory.js';

export type ReputationBootstrapperV1 = ReputationBootstrapper1;
export type ReputationBootstrapperV2 = ReputationBootstrapper2;
export type ReputationBootstrapperV3 = ReputationBootstrapper3;

export type AnyReputationBootstrapper =
  | ReputationBootstrapper1
  | ReputationBootstrapper2
  | ReputationBootstrapper3;
