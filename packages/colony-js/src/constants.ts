/**
 * The type for a specific contract-client (extended ethers `Contract`).
 * This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)
 *
 * @remarks
 * Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to
 */
export enum ClientType {
  ColonyClient = 'ColonyClient',
  FundingQueueClient = 'FundingQueueClient',
  MotionTargetClient = 'MotionTargetClient',
  NetworkClient = 'NetworkClient',
  OneTxPaymentClient = 'OneTxPaymentClient',
  ReputationBootstrapperClient = 'ReputationBootstrapperClient',
  StagedExpenditureClient = 'StagedExpenditureClient',
  StakedExpenditureClient = 'StakedExpenditureClient',
  StreamingPaymentsClient = 'StreamingPaymentsClient',
  TokenSupplierClient = 'TokenSupplierClient',
  TokenClient = 'TokenClient',
  TokenLockingClient = 'TokenLockingClient',
  VotingReputationClient = 'VotingReputationClient',
}
