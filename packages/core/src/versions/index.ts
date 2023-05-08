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

/**
 * Latest versions of all extension contracts
 */
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

/**
 * All possible extension versions
 */
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

/**
 * All possible Colony versions
 */
export { ColonyVersion } from './IColony';
/**
 * All possible CoinMachine versions
 */
export { CoinMachineVersion } from './CoinMachine';
/**
 * All possible EvaluagtedExpenditure versions
 */
export { EvaluatedExpenditureVersion } from './EvaluatedExpenditure';
/**
 * All possible FundingQueue versions
 */
export { FundingQueueVersion } from './FundingQueue';
/**
 * All possible OneTxPayment versions
 */
export { OneTxPaymentVersion } from './OneTxPayment';
/**
 * All possible ReputationBootstrapper versions
 */
export { ReputationBootstrapperVersion } from './ReputationBootstrapper';
/**
 * All possible StakedExpenditure versions
 */
export { StakedExpenditureVersion } from './StakedExpenditure';
/**
 * All possible StreamingPayments versions
 */
export { StreamingPaymentsVersion } from './StreamingPayments';
/**
 * All possible TokenSupplier versions
 */
export { TokenSupplierVersion } from './TokenSupplier';
/**
 * All possible VotingReputation versions
 */
export { VotingReputationVersion } from './VotingReputation';
/**
 * All possible Whitelist versions
 */
export { WhitelistVersion } from './Whitelist';
