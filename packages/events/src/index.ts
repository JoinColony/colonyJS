export * from './contracts';

// We need to manually export those as they are ambiguous as they exist in multiple event contracts
export type {
  MetaTransactionExecutedEvent,
  MetaTransactionExecutedEventFilter,
  MetaTransactionExecutedEventObject,
  RecoveryModeEnteredEvent,
  RecoveryRoleSetEvent,
  RecoveryModeExitedEventObject,
  RecoveryRoleSetEventFilter,
  RecoveryStorageSlotSetEvent,
  RecoveryRoleSetEventObject,
  RecoveryStorageSlotSetEventFilter,
  RecoveryModeExitedEventFilter,
  RecoveryModeExitApprovedEventObject,
  RecoveryModeEnteredEventFilter,
  RecoveryModeExitedEvent,
  RecoveryModeEnteredEventObject,
  RecoveryModeExitApprovedEventFilter,
  RecoveryModeExitApprovedEvent,
  RecoveryStorageSlotSetEventObject,
  ReputationMinerPenalisedEvent,
  ReputationMinerPenalisedEventFilter,
  ReputationMinerPenalisedEventObject,
} from './contracts/IColonyNetworkEvents';

// All ColonyExtensions have those so we export them from the OG contract
export type {
  ExtensionInitialisedEvent,
  LogSetAuthorityEventObject,
  LogSetOwnerEvent,
  LogSetOwnerEventFilter,
  LogSetAuthorityEventFilter,
  ExtensionInitialisedEventObject,
  LogSetAuthorityEvent,
  ExtensionInitialisedEventFilter,
  LogSetOwnerEventObject,
} from './contracts/ColonyExtensionEvents';

export * from './contracts/CoinMachineEvents';
export * from './contracts/IColonyEvents';
export * from './contracts/IColonyNetworkEvents';
export * from './contracts/MetaTxTokenEvents';
export * from './contracts/OneTxPaymentEvents';
export * from './contracts/TokenLockingEvents';
export * from './contracts/VotingReputationEvents';
export * from './contracts/WhitelistEvents';
