// Always keep this up to date
export {
  IColony,
  IColony__factory as IColonyFactory,
} from '../contracts/IColony/9';

export {
  IColonyNetwork,
  IColonyNetwork__factory as IColonyNetworkFactory,
  TokenERC20 as TokenErc20,
  TokenERC20__factory as TokenErc20Factory,
} from '../contracts';

// We need to manually export those as they are ambiguous as they exist in multiple event contracts
export {
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
} from '../contracts/__dynamic__/IColonyNetworkEvents';

// Again, all ColonyExtensions have those so we export them from the OG contract
export {
  ExtensionInitialisedEvent,
  LogSetAuthorityEventObject,
  LogSetOwnerEvent,
  LogSetOwnerEventFilter,
  LogSetAuthorityEventFilter,
  ExtensionInitialisedEventObject,
  LogSetAuthorityEvent,
  ExtensionInitialisedEventFilter,
  LogSetOwnerEventObject,
} from '../contracts/latest/ColonyExtension';

export * from '../contracts/__dynamic__/CoinMachineEvents';
export * from '../contracts/__dynamic__/IColonyEvents';
export * from '../contracts/__dynamic__/IColonyNetworkEvents';
export * from '../contracts/__dynamic__/OneTxPaymentEvents';
export * from '../contracts/__dynamic__/VotingReputationEvents';
export * from '../contracts/__dynamic__/WhitelistEvents';
