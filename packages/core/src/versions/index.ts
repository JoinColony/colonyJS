import { Extension } from '../constants';
import { COIN_MACHINE_VERSION_LATEST, CoinMachineVersion } from './CoinMachine';
import {
  EVALUATED_EXPENDITURE_VERSION_LATEST,
  EvaluatedExpenditureVersion,
} from './EvaluatedExpenditure';
import {
  FUNDING_QUEUE_VERSION_LATEST,
  FundingQueueVersion,
} from './FundingQueue';
import {
  ONE_TX_PAYMENT_VERSION_LATEST,
  OneTxPaymentVersion,
} from './OneTxPayment';
import {
  REPUTATION_BOOTSTRAPPER_VERSION_LATEST,
  ReputationBootstrapperVersion,
} from './ReputationBootstrapper';
import {
  STAKED_EXPENDITURE_VERSION_LATEST,
  StakedExpenditureVersion,
} from './StakedExpenditure';
import {
  STREAMING_PAYMENTS_VERSION_LATEST,
  StreamingPaymentsVersion,
} from './StreamingPayments';
import {
  TOKEN_SUPPLIER_VERSION_LATEST,
  TokenSupplierVersion,
} from './TokenSupplier';
import {
  VOTING_REPUTATION_VERSION_LATEST,
  VotingReputationVersion,
} from './VotingReputation';
import { WHITELIST_VERSION_LATEST, WhitelistVersion } from './Whitelist';

export { isExtensionCompatible } from './helpers';

/** Colony Network contract release tags */
export const RELEASES = [
  'glider-rc.1',
  'glider',
  'auburn-glider',
  'burgundy-glider',
  'lwss',
  'clwss',
  'dlwss',
  'elwss',
  'elwss2',
  'elwss3',
  'flwss',
  'flwss2',
  'flwss3',
  'glwss',
  'glwss2',
  'glwss3',
];

/** Latest release tag */
export const LATEST_TAG = RELEASES[RELEASES.length - 1];

/** Map versioned contracts to network release tags */
export const RELEASE_MAP = {
  IColony: {
    'glider-rc.1': 1,
    glider: 2,
    'auburn-glider': 3,
    'burgundy-glider': 4,
    lwss: 5,
    clwss: 6,
    dlwss: 7,
    elwss3: 8,
    flwss: 9,
    glwss: 10,
    glwss2: 11,
    glwss3: 12,
  },
  CoinMachine: {
    clwss: 1,
    dlwss: 2,
    elwss2: 3,
    elwss3: 4,
    flwss: 5,
    glwss: 6,
    glwss2: 7,
  },
  EvaluatedExpenditure: {
    elwss: 1,
    flwss: 2,
    glwss2: 3,
  },
  FundingQueue: {
    lwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
  },
  IVotingReputation: {
    flwss3: 6,
    glwss: 7,
    glwss2: 8,
  },
  OneTxPayment: {
    clwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
  },
  ReputationBootstrapper: {
    glwss2: 1,
  },
  StakedExpenditure: {
    glwss: 1,
    glwss2: 2,
  },
  StreamingPayments: {
    glwss: 1,
    glwss2: 2,
  },
  TokenSupplier: {
    lwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
  },
  // VotingReputation got replaced by IVotingReputation, so this does not need to be updated
  VotingReputation: {
    clwss: 1,
    dlwss: 2,
    elwss: 3,
    flwss: 4,
    flwss2: 5,
  },
  Whitelist: {
    elwss: 1,
    flwss: 2,
    glwss2: 3,
  },
};

// FIXME: docs
export const ExtensionVersions = {
  [Extension.CoinMachine]: COIN_MACHINE_VERSION_LATEST,
  [Extension.EvaluatedExpenditure]: EVALUATED_EXPENDITURE_VERSION_LATEST,
  [Extension.FundingQueue]: FUNDING_QUEUE_VERSION_LATEST,
  [Extension.IVotingReputation]: VOTING_REPUTATION_VERSION_LATEST,
  [Extension.OneTxPayment]: ONE_TX_PAYMENT_VERSION_LATEST,
  [Extension.ReputationBootstrapper]: REPUTATION_BOOTSTRAPPER_VERSION_LATEST,
  [Extension.StakedExpenditure]: STAKED_EXPENDITURE_VERSION_LATEST,
  [Extension.StreamingPayments]: STREAMING_PAYMENTS_VERSION_LATEST,
  [Extension.TokenSupplier]: TOKEN_SUPPLIER_VERSION_LATEST,
  [Extension.VotingReputation]: VOTING_REPUTATION_VERSION_LATEST,
  [Extension.Whitelist]: WHITELIST_VERSION_LATEST,
};

// FIXME: docs
export type ExtensionVersion =
  | CoinMachineVersion
  | EvaluatedExpenditureVersion
  | FundingQueueVersion
  | OneTxPaymentVersion
  | ReputationBootstrapperVersion
  | StakedExpenditureVersion
  | StreamingPaymentsVersion
  | TokenSupplierVersion
  | VotingReputationVersion
  | WhitelistVersion;

// FIXME: docs
export { CoinMachineVersion } from './CoinMachine';
export { FundingQueueVersion } from './FundingQueue';
export { ColonyVersion } from './IColony';
export { OneTxPaymentVersion } from './OneTxPayment';
export { StakedExpenditureVersion } from './StakedExpenditure';
export { StreamingPaymentsVersion } from './StreamingPayments';
export { TokenSupplierVersion } from './TokenSupplier';
export { VotingReputationVersion } from './VotingReputation';
export { WhitelistVersion } from './Whitelist';
