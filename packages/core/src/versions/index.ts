import { Extension } from '../constants.js';
import { type ColonyVersion } from './IColony.js';
import {
  FUNDING_QUEUE_VERSION_LATEST,
  type FundingQueueVersion,
} from './FundingQueue.js';
import {
  MULTISIG_PERMISSIONS_VERSION_LATEST,
  type MultisigPermissionsVersion,
} from './MultisigPermissions.js';
import {
  ONE_TX_PAYMENT_VERSION_LATEST,
  type OneTxPaymentVersion,
} from './OneTxPayment.js';
import {
  REPUTATION_BOOTSTRAPPER_VERSION_LATEST,
  type ReputationBootstrapperVersion,
} from './ReputationBootstrapper.js';
import {
  STAKED_EXPENDITURE_VERSION_LATEST,
  type StakedExpenditureVersion,
} from './StakedExpenditure.js';
import {
  STAGED_EXPENDITURE_VERSION_LATEST,
  type StagedExpenditureVersion,
} from './StagedExpenditure.js';
import {
  STREAMING_PAYMENTS_VERSION_LATEST,
  type StreamingPaymentsVersion,
} from './StreamingPayments.js';
import {
  TOKEN_SUPPLIER_VERSION_LATEST,
  type TokenSupplierVersion,
} from './TokenSupplier.js';
import {
  VOTING_REPUTATION_VERSION_LATEST,
  type VotingReputationVersion,
} from './VotingReputation.js';

export * from './helpers.js';

/**
 * Latest versions of all extension contracts
 */
export const ExtensionVersions = {
  [Extension.FundingQueue]: FUNDING_QUEUE_VERSION_LATEST,
  [Extension.IVotingReputation]: VOTING_REPUTATION_VERSION_LATEST,
  [Extension.MultisigPermissions]: MULTISIG_PERMISSIONS_VERSION_LATEST,
  [Extension.OneTxPayment]: ONE_TX_PAYMENT_VERSION_LATEST,
  [Extension.ReputationBootstrapper]: REPUTATION_BOOTSTRAPPER_VERSION_LATEST,
  [Extension.StagedExpenditure]: STAGED_EXPENDITURE_VERSION_LATEST,
  [Extension.StakedExpenditure]: STAKED_EXPENDITURE_VERSION_LATEST,
  [Extension.StreamingPayments]: STREAMING_PAYMENTS_VERSION_LATEST,
  [Extension.TokenSupplier]: TOKEN_SUPPLIER_VERSION_LATEST,
  [Extension.VotingReputation]: VOTING_REPUTATION_VERSION_LATEST,
};

/**
 * All possible extension versions
 */
export type ExtensionVersion =
  | FundingQueueVersion
  | MultisigPermissionsVersion
  | OneTxPaymentVersion
  | ReputationBootstrapperVersion
  | StagedExpenditureVersion
  | StakedExpenditureVersion
  | StreamingPaymentsVersion
  | TokenSupplierVersion
  | VotingReputationVersion;

/**
 * All possible contract versions
 */
export type ContractVersion = ExtensionVersion | ColonyVersion;

/**
 * All possible Colony versions
 */
export type { ColonyVersion } from './IColony.js';
/**
 * All possible FundingQueue versions
 */
export type { FundingQueueVersion } from './FundingQueue.js';
/**
 * All possible MultisigPermissions versions
 */
export type { MultisigPermissionsVersion } from './MultisigPermissions.js';
/**
 * All possible OneTxPayment versions
 */
export type { OneTxPaymentVersion } from './OneTxPayment.js';
/**
 * All possible ReputationBootstrapper versions
 */
export type { ReputationBootstrapperVersion } from './ReputationBootstrapper.js';
/**
 * All possible StagedExpenditure versions
 */
export type { StagedExpenditureVersion } from './StagedExpenditure.js';
/**
 * All possible StakedExpenditure versions
 */
export type { StakedExpenditureVersion } from './StakedExpenditure.js';
/**
 * All possible StreamingPayments versions
 */
export type { StreamingPaymentsVersion } from './StreamingPayments.js';
/**
 * All possible TokenSupplier versions
 */
export type { TokenSupplierVersion } from './TokenSupplier.js';
/**
 * All possible VotingReputation versions
 */
export type { VotingReputationVersion } from './VotingReputation.js';
