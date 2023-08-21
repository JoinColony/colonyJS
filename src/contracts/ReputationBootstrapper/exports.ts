// Always add the next ReputationBootstrapper version here
import type { ReputationBootstrapper as ReputationBootstrapper1 } from './1';
import type { ReputationBootstrapper as ReputationBootstrapper2 } from './2';
import type { ReputationBootstrapper as ReputationBootstrapper3 } from './3';

// Always adjust to the latest factory
export { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from './3/factories/ReputationBootstrapper__factory';

export type ReputationBootstrapperV1 = ReputationBootstrapper1;
export type ReputationBootstrapperV2 = ReputationBootstrapper2;
export type ReputationBootstrapperV3 = ReputationBootstrapper3;

export type AnyReputationBootstrapper =
  | ReputationBootstrapper1
  | ReputationBootstrapper2
  | ReputationBootstrapper3;
