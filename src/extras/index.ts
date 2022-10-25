import { providers, constants } from 'ethers';
// eslint-disable-next-line camelcase
import { TokenERC20__factory, TokenERC721__factory } from '../contracts';

// Export useful types (for Colony SDK, always the latest version)
export type { ColonyDataTypes } from '../contracts/IColony/9/IColony';
export type { VotingReputationDataTypes } from '../contracts/IVotingReputation/7/IVotingReputation';

const { AddressZero } = constants;

export * from '../contracts';

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

export * from '../contracts/latest/MetaTxToken';
export * from '../contracts/latest/TokenLocking';

export * from '../contracts/__dynamic__/CoinMachineEvents';
export * from '../contracts/__dynamic__/IColonyEvents';
export * from '../contracts/__dynamic__/IColonyNetworkEvents';
export * from '../contracts/__dynamic__/OneTxPaymentEvents';
export * from '../contracts/__dynamic__/VotingReputationEvents';
export * from '../contracts/__dynamic__/WhitelistEvents';

// Initialize dummy ethers contracts in order to get their (typed) interfaces
// eslint-disable-next-line camelcase
export const ERC20 = TokenERC20__factory.connect(
  AddressZero,
  new providers.BaseProvider(3656691),
).interface;

// eslint-disable-next-line camelcase
export const ERC721 = TokenERC721__factory.connect(
  AddressZero,
  new providers.BaseProvider(3656691),
).interface;
