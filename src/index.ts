export * from './constants';
export * from './versions';
export * from './helpers';
export * from './types';
export * from './exports';

export { formatColonyRoles } from './utils';

export { ColonyNetworkClient } from './clients/ColonyNetworkClient';
export { ColonyClientV1 } from './clients/Core/ColonyClientV1';
export { ColonyClientV2 } from './clients/Core/ColonyClientV2';
export { ColonyClientV3 } from './clients/Core/ColonyClientV3';
export { ColonyClientV4 } from './clients/Core/ColonyClientV4';
export { ColonyClientV5 } from './clients/Core/ColonyClientV5';
export { ColonyClientV6 } from './clients/Core/ColonyClientV6';
export {
  OneTxPaymentClient,
  OneTxPaymentClient as OneTxPaymentClientV1,
} from './clients/Extensions/OneTxPayment/1/OneTxPaymentClient';
export { CoinMachineClient as CoinMachineClientV1 } from './clients/Extensions/CoinMachine/1/CoinMachineClient';
export {
  CoinMachineClient,
  CoinMachineClient as CoinMachineClientV2,
} from './clients/Extensions/CoinMachine/2/CoinMachineClient';
export { VotingReputationClient as VotingReputationClientV1 } from './clients/Extensions/VotingReputation/1/VotingReputationClient';
export {
  VotingReputationClient,
  VotingReputationClient as VotingReputationClientV2,
} from './clients/Extensions/VotingReputation/2/VotingReputationClient';
export {
  TokenClient,
  ColonyTokenClient,
  Erc20TokenClient,
  DaiTokenClient,
} from './clients/TokenClient';
export { TokenLockingClient } from './clients/TokenLockingClient';

export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient';
export { default as getTokenClient } from './clients/TokenClient';

export {
  ExtensionClient,
  extensions,
} from './clients/Extensions/colonyContractExtensions';
